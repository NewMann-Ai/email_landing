"use client";

import Image from "next/image";
import WhiteLogo from "../../assets/images/favicon_white.png";
import Title from "../../components/ui/Title";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import UsersIcon from "@/assets/icons/hugeicons/users";
import GoogleVerifiedIcon from "@/assets/icons/hugeicons/google-verified";
import { useDictionary } from "@/i18n/LocaleContext";
import { teamDictionary } from "@/i18n/dictionaries/team";

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

function UserGearIcon({ className }: { className?: string }) {
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
                d="M9 10.5a3 3 0 100-6 3 3 0 000 6zM3.5 19.5a5.5 5.5 0 0111 0"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 15.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 11.25v.75m0 5.25v.75m2.6-5.25l-.65.375m-3.9 2.25l-.65.375m0-3l.65.375m3.9 2.25l.65.375"
            />
        </svg>
    );
}

const FEATURE_ICONS = [UsersIcon, GoogleVerifiedIcon, UserGearIcon];

export default function TeamContent() {
    const t = useDictionary(teamDictionary);

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
                    {t.badge}
                </span>

                <Title as={1} className="max-w-220 text-center mt-4">
                    {t.titleStart}
                    <span className="text-(--primary)">{t.titleHighlight}</span>
                </Title>

                <p className="text-center text-(--subtext) mt-10 max-w-220">
                    {t.subtitle}
                </p>
            </Reveal>

            {/* Cosa puoi fare */}
            <div className="mt-24 md:mt-40 px-4">
                <Reveal className="flex flex-col items-center justify-center">
                    <Title className="max-w-180 text-center">
                        {t.featuresTitleStart}
                        <span className="text-(--primary)">
                            {t.featuresTitleHighlight}
                        </span>
                    </Title>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-7xl w-full mx-auto">
                    {t.features.map((feature, i) => {
                        const Icon = FEATURE_ICONS[i];
                        return (
                            <Reveal
                                key={feature.title}
                                delay={i * 120}
                                className="bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-8 flex flex-col"
                            >
                                <div className="w-12 h-12 rounded-xl bg-(--primary-10) flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-(--primary)" />
                                </div>

                                <h3 className="text-lg font-semibold text-(--text) mt-5">
                                    {feature.title}
                                </h3>

                                <ul className="flex flex-col gap-2 mt-3">
                                    {feature.points.map((point) => (
                                        <li
                                            key={point}
                                            className="flex items-start gap-2 text-sm text-(--subtext)"
                                        >
                                            <CheckIcon className="w-4 h-4 text-(--primary) mt-0.5 flex-shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {feature.result && (
                                    <div className="mt-8 rounded-xl bg-(--primary-10) p-3">
                                        <p className="text-xs font-semibold text-(--primary) uppercase tracking-wide">
                                            {t.resultLabel}
                                        </p>
                                        <p className="text-sm text-(--subtext) mt-2">
                                            {feature.result}
                                        </p>
                                    </div>
                                )}
                            </Reveal>
                        );
                    })}
                </div>
            </div>

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

                        <Button
                            type="primary"
                            className="w-full sm:w-auto mt-10"
                            href="https://landing.newmann.ai/"
                        >
                            {t.startNow}
                        </Button>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
