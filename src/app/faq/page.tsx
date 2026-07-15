import Image from "next/image";
import WhiteLogo from "../../assets/images/favicon_white.png";
import Title from "../../components/ui/Title";
import Reveal from "@/components/ui/Reveal";
import { buildMetadata } from "@/utils/seo";
import { FAQS } from "./faqs";
import FaqItem from "./FaqItem";

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
        mainEntity: FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <section className="relative overflow-hidden" aria-labelledby="faq-title">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <Image
                src={WhiteLogo}
                alt=""
                aria-hidden="true"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/4 w-1/2 h-auto rotate-75 opacity-50 -z-10"
            />

            {/* Intro */}
            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-60 px-4">
                <span className="text-(--primary) bg-(--primary-10) border border-(--primary) rounded-2xl px-4 py-1 text-sm">
                    FAQ
                </span>

                <Title
                    as={1}
                    className="max-w-220 text-center mt-4"
                >
                    <span id="faq-title">
                        Domande Frequenti su{" "}
                        <span className="text-(--primary)">Newmann</span>
                    </span>
                </Title>
            </Reveal>

            {/* FAQ list */}
            <Reveal className="mt-16 md:mt-20 max-w-3xl w-full mx-auto px-4 mb-32">
                <div className="flex flex-col gap-4">
                    {FAQS.map((faq) => (
                        <FaqItem
                            key={faq.question}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </Reveal>
        </section>
    );
}
