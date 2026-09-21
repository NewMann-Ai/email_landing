import { CurrentLegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { buildMetadata } from "@/utils/seo";

// Text, version and date come from the backend (NWM-115); the site refreshes on publication.
export const revalidate = 3600;

export const metadata = buildMetadata({
    title: "Privacy Policy",
    description:
        "Come Newmann gestisce i tuoi dati: retention limitata, diritti GDPR (accesso, portabilità, oblio, rettifica) e zero training sui tuoi contenuti.",
    path: "/privacy",
    keywords: [
        "privacy policy Newmann",
        "GDPR Newmann",
        "diritti utente",
        "gestione dati email AI",
    ],
});

export default function Privacy() {
    return <CurrentLegalDocumentPage type="privacy-policy" />;
}
