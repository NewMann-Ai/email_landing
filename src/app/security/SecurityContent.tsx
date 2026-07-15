"use client";

import Image from "next/image";
import WhiteLogo from "../../assets/images/favicon_white.png";
import Title from "../../components/ui/Title";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import GdprIcon from "@/assets/icons/hugeicons/gdpr";
import DatabaseIcon from "@/assets/icons/hugeicons/database";
import { useDictionary } from "@/i18n/LocaleContext";
import { securityDictionary } from "@/i18n/dictionaries/security";

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
    );
}

function CertificateIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}

function Section({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <Reveal className="mt-12">
            <h2 className="text-xl font-semibold text-(--text)">{title}</h2>
            <div className="text-(--subtext) mt-3">{children}</div>
        </Reveal>
    );
}

const PILLAR_ICONS = [GdprIcon, CertificateIcon, DatabaseIcon];

export default function SecurityContent() {
    const t = useDictionary(securityDictionary);

    return (
        <section className="relative overflow-hidden">
            <Image
                src={WhiteLogo}
                alt="" aria-hidden={true}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/4 w-1/2 h-auto rotate-75 opacity-50 -z-10"
            />

            {/* Intro */}
            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-60 px-4">
                <span className="text-(--primary) bg-(--primary-10) border border-(--primary) rounded-2xl px-4 py-1 text-sm">
                    {t.intro.badge}
                </span>

                <Title as={1} className="max-w-220 text-center mt-4">
                    {t.intro.titleStart}
                    <span className="text-(--primary)">
                        {t.intro.titleHighlight}
                    </span>
                </Title>

                <p className="text-center text-(--subtext) mt-10 max-w-180">
                    {t.intro.subtitle}
                </p>
            </Reveal>

            {/* Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl w-full mx-auto px-4">
                {t.pillars.map((pillar, i) => {
                    const Icon = PILLAR_ICONS[i];
                    return (
                        <Reveal
                            key={pillar.title}
                            delay={i * 120}
                            className="bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-8"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#eef7f7] flex items-center justify-center">
                                <Icon className="w-6 h-6 text-(--primary)" />
                            </div>

                            <h3 className="text-lg font-semibold text-(--text) mt-5">
                                {pillar.title}
                            </h3>
                            <p className="text-sm text-(--subtext) mt-2">
                                {pillar.description}
                            </p>
                        </Reveal>
                    );
                })}
            </div>

            {/* Infrastructure & Audits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 md:mt-40 max-w-6xl w-full mx-auto px-4">
                <Reveal className="bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-8">
                    <h3 className="text-xl font-semibold text-(--text)">
                        {t.infrastructureTitle}
                    </h3>

                    <ul className="flex flex-col gap-3 mt-4">
                        {t.infrastructure.map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-2 text-(--subtext)"
                            >
                                <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </Reveal>

                <Reveal
                    delay={120}
                    className="bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-8"
                >
                    <h3 className="text-xl font-semibold text-(--text)">
                        {t.auditsTitle}
                    </h3>

                    <ul className="flex flex-col gap-3 mt-4">
                        {t.audits.map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-2 text-(--subtext)"
                            >
                                <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>

            {/* Privacy */}
            <div className="max-w-3xl w-full mx-auto px-4 mt-24 md:mt-40">
                <Reveal className="flex flex-col items-center justify-center">
                    <span className="text-(--primary) bg-(--primary-10) border border-(--primary) rounded-2xl px-4 py-1 text-sm">
                        {t.privacy.badge}
                    </span>

                    <Title className="max-w-220 text-center mt-4">
                        {t.privacy.titleStart}
                        <span className="text-(--primary)">
                            {t.privacy.titleHighlight}
                        </span>
                    </Title>
                </Reveal>

                <Section title={t.privacy.sections.cookieTitle}>
                    <p>{t.privacy.sections.cookieBody}</p>
                </Section>

                <Section title={t.privacy.sections.dataTitle}>
                    <p>{t.privacy.sections.dataBody}</p>
                </Section>

                <Section title={t.privacy.sections.rightsTitle}>
                    <ul className="flex flex-col gap-3">
                        {t.privacy.rights.map((right) => (
                            <li
                                key={right.title}
                                className="flex items-start gap-2"
                            >
                                <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                                <span>
                                    <span className="text-(--text) font-semibold">
                                        {right.title}:
                                    </span>{" "}
                                    {right.description}
                                </span>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section title={t.privacy.sections.subprocessorsTitle}>
                    <p>{t.privacy.sections.subprocessorsBody}</p>
                </Section>

                <Section title={t.privacy.sections.retentionTitle}>
                    <ul className="flex flex-col gap-3">
                        {t.privacy.retention.map((item) => (
                            <li
                                key={item.title}
                                className="flex items-start gap-2"
                            >
                                <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                                <span>
                                    <span className="text-(--text) font-semibold">
                                        {item.title}:
                                    </span>{" "}
                                    {item.description}
                                </span>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Reveal className="flex justify-center mt-10">
                    <Button
                        type="primary"
                        className="w-full sm:w-auto"
                        href="https://app.newmann.ai/privacy-policy"
                    >
                        {t.privacy.readFullPolicy}
                    </Button>
                </Reveal>

                <Reveal className="flex justify-center mt-4">
                    <p className="text-(--subtext) text-xs">
                        {t.privacy.contactLabel}{" "}
                        <a
                            href="mailto:info@newmann.ai"
                            className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
                        >
                            info@newmann.ai
                        </a>
                    </p>
                </Reveal>
            </div>

            {/* Terms */}
            <div className="max-w-3xl w-full mx-auto px-4 mt-24 mb-32">
                <Reveal className="flex flex-col items-center justify-center">
                    <span className="text-(--primary) bg-(--primary-10) border border-(--primary) rounded-2xl px-4 py-1 text-sm">
                        {t.terms.badge}
                    </span>

                    <Title className="max-w-220 text-center mt-4">
                        {t.terms.titleStart}
                        <span className="text-(--primary)">
                            {t.terms.titleHighlight}
                        </span>
                    </Title>
                </Reveal>

                <Reveal className="mt-12 bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-8">
                    <h2 className="text-xl font-semibold text-(--text)">
                        {t.terms.inBreveTitle}
                    </h2>

                    <ul className="flex flex-col gap-3 mt-4">
                        {t.terms.inBreve.map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-2 text-(--subtext)"
                            >
                                <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </Reveal>

                <Reveal className="mt-12" delay={100}>
                    <h2 className="text-xl font-semibold text-(--text)">
                        {t.terms.sectionsTitle}
                    </h2>

                    <ol className="flex flex-col gap-4 mt-4">
                        {t.terms.sections.map((section, i) => (
                            <li
                                key={section.title}
                                className="flex items-start gap-4"
                            >
                                <span className="w-7 h-7 rounded-lg bg-(--primary-10) text-(--primary) text-sm font-semibold flex items-center justify-center flex-shrink-0">
                                    {i + 1}
                                </span>
                                <span className="text-(--subtext)">
                                    <span className="text-(--text) font-semibold">
                                        {section.title}:
                                    </span>{" "}
                                    {section.description}
                                </span>
                            </li>
                        ))}
                    </ol>
                </Reveal>

                <Reveal className="flex justify-center mt-10">
                    <Button
                        type="primary"
                        className="w-full sm:w-auto"
                        href="https://app.newmann.ai/terms-of-service"
                    >
                        {t.terms.readFullTerms}
                    </Button>
                </Reveal>
            </div>
        </section>
    );
}
