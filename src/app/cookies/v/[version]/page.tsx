import type { Metadata } from "next";
import { ArchivedLegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { buildMetadata } from "@/utils/seo";

// A past version of the Cookie Policy (NWM-115). Not indexed: search engines only see the current one.
export const revalidate = 3600;

// Rendered on first request and then cached like the current page.
export async function generateStaticParams() {
    return [];
}

type Props = { params: Promise<{ version: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { version } = await params;
    const metadata = buildMetadata({
        title: `Cookie Policy v${version}`,
        description:
            "Newmann Cookie Policy: cookies, localStorage and sessionStorage used by the platform, analytics with PostHog and how to manage your preferences.",
        path: "/cookies",
    });
    return { ...metadata, robots: { index: false, follow: true } };
}

export default async function CookiesVersion({ params }: Props) {
    const { version } = await params;
    return <ArchivedLegalDocumentPage type="cookie-policy" version={version} />;
}
