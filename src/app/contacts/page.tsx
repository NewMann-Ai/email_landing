import { buildMetadata } from "@/utils/seo";
import ContactsContent from "./ContactsContent";

export const metadata = buildMetadata({
    title: "Contatti",
    description:
        "Contatta il team di Newmann. Scrivi a info@newmann.ai o compila il form: rispondiamo entro 3 ore.",
    path: "/contacts",
    keywords: ["contatti Newmann", "supporto Newmann", "info@newmann.ai"],
});

export default function Contacts() {
    return <ContactsContent />;
}
