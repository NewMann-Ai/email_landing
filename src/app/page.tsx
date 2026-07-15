import { buildMetadata } from "@/utils/seo";
import HomeContent from "./HomeContent";

export const metadata = buildMetadata({
    title: "Rispondi alle email in metà del tempo",
    description:
        "Newmann è l'assistente AI per Gmail e Outlook: capisce il contesto delle tue email, suggerisce risposte pronte e organizza automaticamente la tua inbox. GDPR compliant.",
    path: "/",
    keywords: [
        "assistente email AI",
        "Gmail AI",
        "Outlook AI",
        "gestione inbox",
        "automazione email aziendale",
        "risposte automatiche email",
    ],
});

export default function Home() {
    return <HomeContent />;
}
