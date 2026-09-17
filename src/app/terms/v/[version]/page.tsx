import type { Metadata } from "next";
import { ArchivedLegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { buildMetadata } from "@/utils/seo";

// A past version of the Terms of Service (NWM-115). Not indexed: search engines only see the current one.
export const revalidate = 3600;

// Rendered on first request and then cached like the current page.
export async function generateStaticParams() {
    return [];
}

type Props = { params: Promise<{ version: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { version } = await params;
    const metadata = buildMetadata({
        title: `Terms of Service v${version}`,
        description:
            "Newmann Terms of Service: acceptable use, service description, data protection, AI providers, liability, termination, and the Data Processing Agreement.",
        path: "/terms",
    });
    return { ...metadata, robots: { index: false, follow: true } };
}

export default async function TermsVersion({ params }: Props) {
    const { version } = await params;
    return <ArchivedLegalDocumentPage type="terms-of-service" version={version} />;
}
