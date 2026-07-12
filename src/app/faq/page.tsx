"use client";

import { useState } from "react";
import Image from "next/image";
import WhiteLogo from "../../assets/images/favicon_white.png";
import Title from "../../components/ui/Title";
import Reveal from "@/components/ui/Reveal";
import DropdownArrow from "@/assets/icons/hugeicons/dropdown-arrow";

const FAQS = [
    {
        question: "Newmann ha accesso alle mie email?",
        answer: "Newmann ha accesso alle email per processarle, ma non le archivia. GDPR e Zero Data Retention: i tuoi dati rimangono tuoi.",
    },
    {
        question: "E se genero una bozza sbagliata?",
        answer: "Human-in-the-loop: tu rivedi sempre prima di inviare. L'AI è il tuo assistente, non il tuo sostituto.",
    },
    {
        question: "Quanto tempo prima di vedere risultati?",
        answer: "24-48 ore. Newmann impara dal tuo primo batch di email e inizia a funzionare al 100% entro 4 giorni.",
    },
    {
        question: "Posso cancellare i miei dati?",
        answer: "In qualsiasi momento. Scrivi a info@newmann.ai e avremo completato in 24 ore.",
    },
    {
        question: "E il training dei modelli AI?",
        answer: "Zero Data Retention. Non usiamo i tuoi dati per addestrare modelli.",
    },
    {
        question: "Qual è il tempo di setup?",
        answer: "10 minuti. Autorizza Newmann, settaggi di base, fatto.",
    },
];

function FaqItem({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) overflow-hidden">
            <button
                onClick={() => setOpen((v) => !v)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
            >
                <span className="text-(--text) font-semibold">
                    {question}
                </span>
                <DropdownArrow
                    width={16}
                    height={16}
                    className={`flex-shrink-0 text-(--subtext) transition-transform duration-200 ${
                        open ? "rotate-0" : "rotate-180"
                    }`}
                />
            </button>

            {open && (
                <p className="text-(--subtext) px-6 pb-5">{answer}</p>
            )}
        </div>
    );
}

export default function Faq() {
    return (
        <section className="relative overflow-hidden">
            <Image
                src={WhiteLogo}
                alt="White Logo"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/4 w-1/2 h-auto rotate-75 opacity-50 -z-10"
            />

            {/* Intro */}
            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-60 px-4">
                <span className="text-(--primary) bg-(--primary-10) border border-(--primary) rounded-2xl px-4 py-1 text-sm">
                    FAQ
                </span>

                <Title className="max-w-220 text-center mt-4">
                    Domande Frequenti su{" "}
                    <span className="text-(--primary)">Newmann</span>
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
