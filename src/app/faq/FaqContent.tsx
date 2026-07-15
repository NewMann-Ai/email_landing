"use client";

import Image from "next/image";
import WhiteLogo from "../../assets/images/favicon_white.png";
import Title from "../../components/ui/Title";
import Reveal from "@/components/ui/Reveal";
import { useDictionary } from "@/i18n/LocaleContext";
import { faqDictionary } from "@/i18n/dictionaries/faq";
import FaqItem from "./FaqItem";

export default function FaqContent() {
    const t = useDictionary(faqDictionary);

    return (
        <section className="relative overflow-hidden" aria-labelledby="faq-title">
            <Image
                src={WhiteLogo}
                alt=""
                aria-hidden="true"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/4 w-1/2 h-auto rotate-75 opacity-50 -z-10"
            />

            {/* Intro */}
            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-60 px-4">
                <span className="text-(--primary) bg-(--primary-10) border border-(--primary) rounded-2xl px-4 py-1 text-sm">
                    {t.badge}
                </span>

                <Title
                    as={1}
                    className="max-w-220 text-center mt-4"
                >
                    <span id="faq-title">
                        {t.titleStart}
                        <span className="text-(--primary)">
                            {t.titleHighlight}
                        </span>
                    </span>
                </Title>
            </Reveal>

            {/* FAQ list */}
            <Reveal className="mt-16 md:mt-20 max-w-3xl w-full mx-auto px-4 mb-32">
                <div className="flex flex-col gap-4">
                    {t.items.map((faq) => (
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
