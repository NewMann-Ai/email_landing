import { buildMetadata } from "@/utils/seo";
import NewmannMailContent from "./NewmannMailContent";

export const metadata = buildMetadata({
    title: "Newmann Mail — Automazione AI per email aziendali",
    description:
        "Newmann Mail legge, classifica e risponde alle tue email aziendali con AI. Bozze automatiche, labels intelligenti, regole e integrazione Gmail e Outlook.",
    path: "/newmann-mail",
    keywords: [
        "Newmann Mail",
        "email aziendali AI",
        "bozze automatiche",
        "assistente Gmail",
        "assistente Outlook",
        "Digital Twin email",
    ],
});

export default function NewmannMail() {
    return <NewmannMailContent />;
}
