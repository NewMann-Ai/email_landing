"use client";

import GdprIcon from "@/assets/icons/hugeicons/gdpr";
import LinkArrowIcon from "@/assets/icons/hugeicons/link-arrow";
import SparklesIcon from "@/assets/icons/hugeicons/sparkles";
import Users from "@/assets/icons/hugeicons/users";
import {
    AziendaPreview,
    InboxPreview,
} from "@/components/layout/BentoPreviews";
import MiniDashboard from "@/components/layout/MiniDashboard";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import { useDictionary } from "@/i18n/LocaleContext";
import { homeDictionary } from "@/i18n/dictionaries/home";
import Image from "next/image";
import Link from "next/link";
import WhiteLogo from "../assets/images/favicon_white.png";
import Title from "../components/ui/Title";

const SECURITY_ICONS = [GdprIcon, Users, SparklesIcon];

export default function HomeContent() {
    const t = useDictionary(homeDictionary);

    return (
        <section className="relative overflow-hidden min-h-screen">
            <Image
                src={WhiteLogo}
                alt=""
                aria-hidden={true}
                className="hidden md:block absolute left-1/2 -translate-x-1/2 -translate-y-1/4 w-1/2 h-auto rotate-75 opacity-50 -z-10"
            />

            <Reveal className="flex flex-col items-center justify-center mt-50 md:mt-60 px-4">
                <Title as={1} className="max-w-180 text-center">
                    {t.hero.titleStart}
                    <span className="text-(--primary)">
                        {t.hero.titleHighlight}
                    </span>
                </Title>

                <p className="text-center text-(--subtext) mt-4">
                    {t.hero.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full max-w-100 sm:max-w-none">
                    <Button
                        type="primary"
                        className="w-full sm:w-auto"
                        href="https://landing.newmann.ai/"
                    >
                        {t.hero.cta}
                    </Button>
                </div>
            </Reveal>

            <Reveal>
                <MiniDashboard />
            </Reveal>

            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-40 px-4">
                <Title className="max-w-180 text-center">
                    {t.productivity.titleStart}
                    <span className="text-(--primary)">
                        {t.productivity.titleHighlight}
                    </span>
                </Title>

                <Button
                    type="primary"
                    className="w-full sm:w-auto mt-10"
                    href="/newmann-mail"
                >
                    {t.productivity.cta}
                </Button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 md:mt-40 max-w-6xl w-full px-4">
                    {/* Card 1 */}
                    <Link href="/newmann-mail#inbox-organizer">
                        <Reveal delay={0}>
                            <div className="bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-8 cursor-pointer transition-transform duration-200 hover:scale-101">
                                <h3 className="text-xl font-semibold text-(--text)">
                                    {t.productivity.card1.title}
                                </h3>
                                <p className="text-(--subtext) mt-2">
                                    {t.productivity.card1.description}
                                </p>

                                <div className="mt-6">
                                    <InboxPreview />
                                </div>
                            </div>
                        </Reveal>
                    </Link>

                    {/* Card 2 */}
                    <Link href="/newmann-mail#email-draft-writer">
                        <Reveal delay={150}>
                            <div className="bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-8 cursor-pointer transition-transform duration-200 hover:scale-101">
                                <h3 className="text-xl font-semibold text-(--text)">
                                    {t.productivity.card2.title}
                                </h3>
                                <p className="text-(--subtext) mt-2">
                                    {t.productivity.card2.description}
                                </p>

                                <div className="mt-6">
                                    <AziendaPreview />
                                </div>
                            </div>
                        </Reveal>
                    </Link>
                </div>
            </Reveal>

            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-40 bg-(--section-bg) py-10 md:py-20 px-4 rounded-[40px] md:rounded-[80px]">
                <Title className="max-w-180 text-center">
                    {t.performance.titleStart}
                    <span className="text-(--primary)">
                        {t.performance.titleHighlight}
                    </span>
                </Title>

                <p className="text-center text-(--subtext) text-md mt-4">
                    {t.performance.subtitle}
                </p>

                <div className="flex flex-wrap justify-center gap-6 mt-10 md:mt-20 max-w-3xl">
                    {t.stats.map((stat, i) => (
                        <Reveal
                            key={stat.label}
                            delay={i * 80}
                            className="w-52 bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-6 text-center shadow-[0_40px_40px_var(--shadow)]"
                        >
                            <Counter
                                value={stat.value}
                                className="block text-3xl font-bold text-(--text) font-['Space_Grotesk']"
                            />
                            <p className="text-xs text-(--subtext) mt-1">
                                {stat.label}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </Reveal>

            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-40 px-4">
                <Title className="max-w-180 text-center">
                    {t.security.titleStart}
                    <span className="text-(--primary)">
                        {t.security.titleHighlight}
                    </span>
                </Title>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-16 max-w-6xl w-full px-4">
                    {t.security.items.map((item, i) => {
                        const Icon = SECURITY_ICONS[i];
                        return (
                            <Reveal
                                key={item.title}
                                delay={i * 100}
                                className="bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-6"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[#eef7f7] flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-(--primary)" />
                                </div>

                                <h3 className="text-lg font-semibold text-(--text) mt-4">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-(--subtext) mt-1">
                                    {item.description}
                                </p>
                            </Reveal>
                        );
                    })}
                </div>

                <Link
                    href="/security"
                    className="flex items-center gap-1 text-sm text-(--text) mt-8 hover:text-(--primary) transition-colors duration-200"
                >
                    {t.security.link}
                    <LinkArrowIcon className="w-4 h-4" />
                </Link>
            </Reveal>

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
                        </Title>

                        <p className="text-center text-(--subtext) mt-4">
                            {t.closingCta.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full max-w-100 sm:max-w-none">
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
