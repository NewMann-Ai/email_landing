import { notFound, redirect } from "next/navigation";
import {
    getCurrentLegalVersion,
    getLegalVersion,
    getLegalVersions,
    LEGAL_PAGE_PATHS,
} from "@/services/legalDocuments";
import type { LegalDocumentType } from "@/types/legalDocuments";
import LegalDocumentView from "./LegalDocumentView";

// Server side of the public legal pages (NWM-115): loads the data, LegalDocumentView renders it.

export async function CurrentLegalDocumentPage({ type }: { type: LegalDocumentType }) {
    const [document, versions] = await Promise.all([getCurrentLegalVersion(type), getLegalVersions(type)]);
    return <LegalDocumentView document={document} versions={versions} basePath={LEGAL_PAGE_PATHS[type]} />;
}

export async function ArchivedLegalDocumentPage({ type, version }: { type: LegalDocumentType; version: string }) {
    const document = await getLegalVersion(type, version);
    if (!document) {
        notFound();
    }
    // The version in force has a single address: the page without /v/. An upcoming version keeps
    // its own page during the notice period.
    if (document.current) {
        redirect(LEGAL_PAGE_PATHS[type]);
    }
    const versions = await getLegalVersions(type);
    return <LegalDocumentView document={document} versions={versions} basePath={LEGAL_PAGE_PATHS[type]} />;
}
