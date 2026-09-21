import type { Metadata } from "next";
import { ArchivedLegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { buildMetadata } from "@/utils/seo";

// A past version of the Privacy Policy (NWM-115). Not indexed: search engines only see the current one.
export const revalidate = 3600;

// Rendered on first request and then cached like the current page.
export async function generateStaticParams() {
    return [];
}

type Props = { params: Promise<{ version: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { version } = await params;
    const metadata = buildMetadata({
        title: `Privacy Policy v${version}`,
        description:
            "Come Newmann gestisce i tuoi dati: retention limitata, diritti GDPR (accesso, portabilità, oblio, rettifica) e zero training sui tuoi contenuti.",
        path: "/privacy",
    });
    return { ...metadata, robots: { index: false, follow: true } };
}

export default async function PrivacyVersion({ params }: Props) {
    const { version } = await params;
    return <ArchivedLegalDocumentPage type="privacy-policy" version={version} />;
}
