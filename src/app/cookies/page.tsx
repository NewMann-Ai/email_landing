import { CurrentLegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { buildMetadata } from "@/utils/seo";

// Text, version and date come from the backend (NWM-115); the site refreshes on publication.
export const revalidate = 3600;

export const metadata = buildMetadata({
    title: "Cookie Policy",
    description:
        "Newmann Cookie Policy: cookies, localStorage and sessionStorage used by the platform, analytics with PostHog and how to manage your preferences.",
    path: "/cookies",
});

export default function Cookies() {
    return <CurrentLegalDocumentPage type="cookie-policy" />;
}
