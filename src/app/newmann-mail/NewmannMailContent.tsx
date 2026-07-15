"use client";

import Image from "next/image";
import WhiteLogo from "../../assets/images/favicon_white.png";
import Title from "../../components/ui/Title";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import DashboardImg from "@/assets/images/dashboard/dashboard.png";
import LabelsImg from "@/assets/images/dashboard/labels.png";
import RulesImg from "@/assets/images/dashboard/rules.png";
import DraftsImg from "@/assets/images/dashboard/drafts.png";
import AiImg from "@/assets/images/dashboard/ai.png";
import SettingsImg from "@/assets/images/dashboard/settings.png";
import { useDictionary } from "@/i18n/LocaleContext";
import { newmannMailDictionary } from "@/i18n/dictionaries/newmannMail";

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

export default function NewmannMailContent() {
    const t = useDictionary(newmannMailDictionary);

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
                <span className="text-(--primary) bg-(--primary-10) border boder-(--primary) rounded-2xl px-4 py-1 text-sm">
                    {t.badge}
                </span>

                <Title as={1} className="max-w-220 text-center mt-4">
                    {t.titleStart}
                    <span className="text-(--primary)">
                        {" "}
                        {t.titleHighlight}
                    </span>
                </Title>

                <p className="text-center text-(--subtext) mt-10 max-w-220">
                    {t.subtitle}
                </p>

                <Button
                    type="primary"
                    className="w-full sm:w-auto mt-10"
                    href="https://landing.newmann.ai/"
                >
                    {t.startNow}
                </Button>
            </Reveal>

            {/* 4. AI-Drafted Replies */}
            <div
                id="email-draft-writer"
                className="relative mt-24 md:mt-40 pb-8 md:pb-32 scroll-mt-24"
            >
                <Reveal className="max-w-7xl w-full mx-auto px-4">
                    <Title className="w-full text-center">
                        {t.draftWriter.titlePrefix}{" "}
                        <span className="text-(--primary)">
                            {t.draftWriter.titleHighlight}
                        </span>{" "}
                    </Title>

                    <p className="text-(--subtext) mt-4 italic text-center">
                        {'"'}
                        {t.draftWriter.quote}
                        {'"'}
                    </p>

                    <div className="relative flex flex-col md:flex-row md:items-center mt-20">
                        <div className="md:max-w-140">
                            <p className="text-(--subtext) mt-4">
                                {t.draftWriter.body}
                            </p>

                            <ul className="flex flex-col gap-2 mt-4">
                                {t.draftWriter.steps.map((step) => (
                                    <li
                                        key={step}
                                        className="flex items-start gap-2 text-(--subtext)"
                                    >
                                        <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-sm text-(--subtext) mt-4">
                                <span className="font-semibold text-(--text)">
                                    {t.draftWriter.timeSavedLabel}
                                </span>{" "}
                                {t.draftWriter.timeSavedBody}
                            </p>

                            <Button
                                type="primary"
                                className="mt-6 w-full sm:w-auto"
                                href="https://landing.newmann.ai/"
                            >
                                {t.draftWriter.cta}
                            </Button>
                        </div>

                        {/* Bleeds past the right edge of the screen, clipped by the section */}
                        <div className="hidden md:block absolute top-1/2 -right-40 -translate-y-1/2 w-200">
                            <div className="rounded-2xl overflow-hidden border border-(--bento-stroke) shadow-[0_40px_60px_var(--shadow)]">
                                <Image
                                    src={DraftsImg}
                                    alt={t.draftWriter.imageAlt}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </Reveal>

                <div className="md:hidden max-w-6xl w-full mx-auto px-4 mt-8">
                    <div className="rounded-2xl overflow-hidden border border-(--bento-stroke) shadow-[0_40px_60px_var(--shadow)]">
                        <Image
                            src={DraftsImg}
                            alt={t.draftWriter.imageAlt}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* 2. Smart Labels */}
            <div
                id="inbox-organizer"
                className="relative mt-24 md:mt-40 pb-8 md:pb-32 scroll-mt-24"
            >
                <Reveal className="max-w-7xl w-full mx-auto px-4">
                    <Title className="w-full text-center">
                        <span className="text-(--primary)">
                            {t.inboxOrganizer.titleHighlight}
                        </span>{" "}
                        {t.inboxOrganizer.titleSuffix}
                    </Title>

                    <p className="text-(--subtext) mt-4 italic text-center">
                        {'"'}
                        {t.inboxOrganizer.quote}
                        {'"'}
                    </p>

                    <div className="relative flex flex-col md:flex-row md:items-center mt-20">
                        <div className="md:max-w-140">
                            <p className="text-(--subtext) mt-4">
                                {t.inboxOrganizer.body}
                            </p>

                            <ul className="flex flex-col gap-2 mt-4">
                                {t.inboxOrganizer.benefits.map((benefit) => (
                                    <li
                                        key={benefit}
                                        className="flex items-start gap-2 text-(--subtext)"
                                    >
                                        <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-sm text-(--subtext) mt-4">
                                {t.inboxOrganizer.footnote}
                            </p>

                            <Button
                                type="primary"
                                className="mt-6 w-full sm:w-auto"
                                href="https://www.youtube.com/watch?si=pI3ZcASmXDU6gWOn&v=mtXvKbva6zg&feature=youtu.be"
                            >
                                {t.inboxOrganizer.cta}
                            </Button>
                        </div>

                        {/* Bleeds past the right edge of the screen, clipped by the section */}
                        <div className="hidden md:block absolute top-1/2 -right-36 -translate-y-1/2 w-200">
                            <div className="rounded-2xl overflow-hidden border border-(--bento-stroke) shadow-[0_40px_60px_var(--shadow)]">
                                <Image
                                    src={LabelsImg}
                                    alt={t.inboxOrganizer.imageAlt}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </Reveal>

                <div className="md:hidden max-w-6xl w-full mx-auto px-4 mt-8">
                    <div className="rounded-2xl overflow-hidden border border-(--bento-stroke) shadow-[0_40px_60px_var(--shadow)]">
                        <Image
                            src={LabelsImg}
                            alt={t.inboxOrganizer.imageAlt}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* 3. Automation Rules */}
            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-40 px-4">
                <Title className="max-w-180 text-center">
                    {t.rules.titleStart}
                    <span className="text-(--primary)">
                        {t.rules.titleHighlight}
                    </span>
                </Title>

                <p className="text-center text-(--subtext) mt-4 max-w-200">
                    {t.rules.body}
                </p>

                <div className="mt-8 md:mt-16 max-w-4xl w-full">
                    <div className="rounded-2xl overflow-hidden border border-(--bento-stroke) shadow-[0_40px_60px_var(--shadow)]">
                        <Image
                            src={RulesImg}
                            alt={t.rules.imageAlt}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </Reveal>

            {/* 5. Chat with your inbox */}
            <Reveal className="relative mt-24 md:mt-80 pb-8 md:pb-32">
                <div className="relative max-w-7xl w-full mx-auto px-4 flex flex-col md:flex-row md:items-center">
                    <div className="md:max-w-180 md:ml-auto">
                        <Title className="max-w-140">
                            {t.chat.titleStart}
                            <span className="text-(--primary)">
                                {t.chat.titleHighlight}
                            </span>
                        </Title>

                        <p className="text-(--subtext) mt-4">{t.chat.body}</p>

                        <ul className="flex flex-col gap-2 mt-4">
                            {t.chat.benefits.map((benefit) => (
                                <li
                                    key={benefit}
                                    className="flex items-start gap-2 text-(--subtext)"
                                >
                                    <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bleeds past the left edge of the screen, clipped by the section */}
                    <div className="hidden md:block absolute top-1/2 -left-35 -translate-y-1/2 w-120">
                        <div className="rounded-2xl overflow-hidden border border-(--bento-stroke) shadow-[0_40px_60px_var(--shadow)]">
                            <Image
                                src={AiImg}
                                alt={t.chat.imageAlt}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>

                <div className="md:hidden max-w-6xl w-full mx-auto px-4 mt-8">
                    <div className="rounded-2xl overflow-hidden border border-(--bento-stroke) shadow-[0_40px_60px_var(--shadow)]">
                        <Image
                            src={AiImg}
                            alt={t.chat.imageAlt}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </Reveal>

            {/* 6. Personalization */}
            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-40 px-4">
                <Title className="max-w-180 text-center">
                    {t.personalization.titleStart}
                    <span className="text-(--primary)">
                        {t.personalization.titleHighlight}
                    </span>
                </Title>

                <p className="text-center text-(--subtext) mt-4 max-w-140">
                    {t.personalization.body}
                </p>

                <div className="mt-8 md:mt-16 max-w-4xl w-full">
                    <div className="rounded-2xl overflow-hidden border border-(--bento-stroke) shadow-[0_40px_60px_var(--shadow)]">
                        <Image
                            src={SettingsImg}
                            alt={t.personalization.imageAlt}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </Reveal>

            {/* Closing CTA */}
            <Reveal className="mt-24 md:mt-40 max-w-6xl w-full mx-auto px-4">
                <div className="relative overflow-hidden rounded-[40px] bg-(--section-bg) border border-(--bento-stroke) py-12 md:py-24 px-6 md:px-8">
                    <Image
                        src={WhiteLogo}
                        alt=""
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/4 w-1/2 h-auto rotate-75 opacity-50 -z-10"
                    />

                    <div className="relative flex flex-col items-center justify-center">
                        <Title className="max-w-180 text-center">
                            {t.closingCta.titleStart}
                            <span className="text-(--primary)">
                                {t.closingCta.titleHighlight}
                            </span>
                            ?
                        </Title>

                        <p className="text-center text-(--subtext) mt-4">
                            {t.closingCta.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full max-w-100 sm:max-w-none px-4 sm:px-0">
                            <Button
                                type="primary"
                                className="w-full sm:w-auto"
                                href="https://landing.newmann.ai/"
                            >
                                {t.closingCta.cta}
                            </Button>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
