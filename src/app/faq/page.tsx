import { buildMetadata } from "@/utils/seo";
import { faqDictionary } from "@/i18n/dictionaries/faq";
import FaqContent from "./FaqContent";

export const metadata = buildMetadata({
    title: "Domande frequenti",
    description:
        "Risposte alle domande più frequenti su Newmann: sicurezza dei dati, GDPR, tempi di setup, cancellazione dati, uso dei modelli AI.",
    path: "/faq",
    keywords: [
        "FAQ Newmann",
        "domande frequenti assistente email",
        "sicurezza email AI",
        "GDPR email AI",
    ],
});

export default function Faq() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqDictionary.it.items.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <FaqContent />
        </>
    );
}
