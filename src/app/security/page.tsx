import { buildMetadata } from "@/utils/seo";
import SecurityContent from "./SecurityContent";

export const metadata = buildMetadata({
    title: "Sicurezza — GDPR, AI Act, Zero Data Retention",
    description:
        "Newmann è GDPR compliant, allineato all'AI Act e non conserva i tuoi dati (Zero Data Retention). Integrazioni verificate Google e Microsoft.",
    path: "/security",
    keywords: [
        "sicurezza Newmann",
        "GDPR AI email",
        "AI Act",
        "Zero Data Retention",
        "email crittografate",
    ],
});

export default function Security() {
    return <SecurityContent />;
}
