import { buildMetadata } from "@/utils/seo";
import TeamContent from "./TeamContent";

export const metadata = buildMetadata({
    title: "Aziende — Gestione strutturata del workspace",
    description:
        "Organizza il tuo workspace Newmann in dipartimenti e micro-aziende con contesti AI indipendenti, permessi granulari e automazioni personalizzate.",
    path: "/team",
    keywords: [
        "Newmann aziende",
        "workspace aziendale AI",
        "gestione aziendale email",
        "automazione aziendale",
    ],
});

export default function Team() {
    return <TeamContent />;
}
