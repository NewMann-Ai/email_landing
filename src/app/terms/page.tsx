import { CurrentLegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { buildMetadata } from "@/utils/seo";

// Text, version and date come from the backend (NWM-115); the site refreshes on publication.
export const revalidate = 3600;

export const metadata = buildMetadata({
    title: "Terms of Service",
    description:
        "Newmann Terms of Service: acceptable use, service description, data protection, AI providers, liability, termination, and the Data Processing Agreement.",
    path: "/terms",
    keywords: [
        "termini di servizio Newmann",
        "condizioni d'uso",
        "termini di utilizzo email AI",
        "data processing agreement",
    ],
});

export default function Terms() {
    return <CurrentLegalDocumentPage type="terms-of-service" />;
}
