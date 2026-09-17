"use client";

import Image from "next/image";
import Link from "next/link";
import WhiteLogo from "@/assets/images/favicon_white.png";
import Reveal from "@/components/ui/Reveal";
import Title from "@/components/ui/Title";
import { useLocale } from "@/i18n/LocaleContext";
import type { LegalDocumentType, LegalLanguage, LegalVersion, LegalVersionSummary } from "@/types/legalDocuments";
import LegalMarkdown from "./LegalMarkdown";

// Public legal page (NWM-115). The text comes from the backend with every language of the
// version; the language is chosen here because the site keeps it in the browser. While a
// translation is missing the English text is shown, with English labels around it.

const LABELS: Record<LegalLanguage, {
    subtitle: Record<LegalDocumentType, string>;
    lastUpdated: string;
    previousVersions: string;
    inForceFrom: string;
    archivedNotice: (version: string) => string;
    readCurrent: string;
    upcomingNotice: (version: string, date: string) => string;
    readUpcoming: string;
    upcomingPageNotice: (version: string, date: string) => string;
}> = {
    en: {
        subtitle: {
            "privacy-policy": "Internal Document",
            "cookie-policy": "Internal Document",
            "terms-of-service": "Between Newmann and User",
        },
        lastUpdated: "Last updated",
        previousVersions: "Previous versions",
        inForceFrom: "in force from",
        archivedNotice: (version) => `You are reading version ${version}, which is no longer in force.`,
        readCurrent: "Read the current version",
        upcomingNotice: (version, date) => `A new version (${version}) takes effect on ${date}.`,
        readUpcoming: "Read the new version",
        upcomingPageNotice: (version, date) => `Version ${version} takes effect on ${date}. Until then the current version applies.`,
    },
    it: {
        subtitle: {
            "privacy-policy": "Documento interno",
            "cookie-policy": "Documento interno",
            "terms-of-service": "Tra Newmann e l'Utente",
        },
        lastUpdated: "Ultimo aggiornamento",
        previousVersions: "Versioni precedenti",
        inForceFrom: "in vigore dal",
        archivedNotice: (version) => `Stai leggendo la versione ${version}, non più in vigore.`,
        readCurrent: "Leggi la versione in vigore",
        upcomingNotice: (version, date) => `Una nuova versione (${version}) entrerà in vigore il ${date}.`,
        readUpcoming: "Leggi la nuova versione",
        upcomingPageNotice: (version, date) => `La versione ${version} entrerà in vigore il ${date}. Fino ad allora vale la versione in vigore.`,
    },
};

// effectiveFrom is a plain date (YYYY-MM-DD): format it in UTC so it never shifts by a day.
function formatDate(value: string | null, language: LegalLanguage, options: Intl.DateTimeFormatOptions) {
    if (!value) return null;
    const date = new Date(`${value.slice(0, 10)}T00:00:00Z`);
    if (Number.isNaN(date.getTime())) return null;
    return new Intl.DateTimeFormat(language === "it" ? "it-IT" : "en-US", { ...options, timeZone: "UTC" }).format(date);
}

export default function LegalDocumentView({
    document,
    versions,
    basePath,
}: {
    document: LegalVersion;
    versions: LegalVersionSummary[];
    basePath: string;
}) {
    const { locale } = useLocale();
    const content =
        document.contents.find((item) => item.language === locale) ??
        document.contents.find((item) => item.language === "en") ??
        document.contents[0];
    const language = content?.language ?? "en";
    const labels = LABELS[language];
    const lastUpdated = formatDate(document.effectiveFrom, language, { month: "long", year: "numeric" });
    const longDate = (value: string | null) => formatDate(value, language, { day: "numeric", month: "long", year: "numeric" }) ?? "";
    // Past versions only: the upcoming one is announced, not listed as "previous".
    const previous = versions.filter((item) => !item.current && !item.upcoming && item.version !== document.version);
    const noticeClass = "mt-12 rounded-2xl border border-(--primary) bg-(--primary-10) p-4 text-sm text-(--text)";
    const noticeLinkClass = "text-(--primary) hover:text-(--primary-hover) transition-colors duration-200 font-semibold";

    return (
        <section className="relative overflow-hidden">
            <Image
                src={WhiteLogo}
                alt=""
                aria-hidden={true}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/4 w-1/2 h-auto rotate-75 opacity-50 -z-10"
            />

            {/* Intro */}
            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-60 px-4">
                <span className="text-(--primary) bg-(--primary-10) border border-(--primary) rounded-2xl px-4 py-1 text-sm">
                    {content?.title}
                </span>

                <Title as={1} className="max-w-220 text-center mt-4">
                    Newmann{" "}
                    <span className="text-(--primary)">{content?.title}</span>
                </Title>

                <p className="text-center text-(--subtext) mt-6">
                    {labels.subtitle[document.type]} · v{document.version}
                </p>
                {lastUpdated && (
                    <p className="text-center text-(--subtext) text-sm mt-1">
                        {labels.lastUpdated}: {lastUpdated}
                    </p>
                )}
            </Reveal>

            <div className="max-w-3xl w-full mx-auto px-4 mb-32">
                {document.next && (
                    <div className={noticeClass}>
                        {labels.upcomingNotice(document.next.version, longDate(document.next.effectiveFrom))}{" "}
                        <Link href={`${basePath}/v/${encodeURIComponent(document.next.version)}`} className={noticeLinkClass}>
                            {labels.readUpcoming}
                        </Link>
                    </div>
                )}

                {document.upcoming && (
                    <div className={noticeClass}>
                        {labels.upcomingPageNotice(document.version, longDate(document.effectiveFrom))}{" "}
                        <Link href={basePath} className={noticeLinkClass}>
                            {labels.readCurrent}
                        </Link>
                    </div>
                )}

                {!document.current && !document.upcoming && (
                    <div className={noticeClass}>
                        {labels.archivedNotice(document.version)}{" "}
                        <Link href={basePath} className={noticeLinkClass}>
                            {labels.readCurrent}
                        </Link>
                    </div>
                )}

                {/* One fade-in for the whole text: a scroll reveal would never trigger on a
                    block taller than the viewport. */}
                <div className="mt-12 animate-legal-fade-in">
                    <LegalMarkdown markdown={content?.bodyMarkdown ?? ""} />
                </div>

                {previous.length > 0 && (
                    <div className="mt-16 pt-8 border-t border-(--bento-stroke)">
                        <h2 className="text-base font-semibold text-(--text)">{labels.previousVersions}</h2>
                        <ul className="flex flex-col gap-2 mt-3 text-sm text-(--subtext)">
                            {previous.map((item) => {
                                const inForceFrom = longDate(item.effectiveFrom);
                                return (
                                    <li key={item.version}>
                                        <Link
                                            href={`${basePath}/v/${encodeURIComponent(item.version)}`}
                                            className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
                                        >
                                            v{item.version}
                                        </Link>
                                        {inForceFrom && ` — ${labels.inForceFrom} ${inForceFrom}`}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}
