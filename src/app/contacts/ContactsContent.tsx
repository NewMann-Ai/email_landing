"use client";

import Image from "next/image";
import WhiteLogo from "../../assets/images/favicon_white.png";
import Title from "../../components/ui/Title";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { useDictionary } from "@/i18n/LocaleContext";
import { contactsDictionary } from "@/i18n/dictionaries/contacts";

export default function ContactsContent() {
    const t = useDictionary(contactsDictionary);

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
                    {t.badge}
                </span>

                <Title as={1} className="max-w-220 text-center mt-4">
                    {t.titleStart}
                    <span className="text-(--primary)">
                        {t.titleHighlight}
                    </span>
                </Title>

                <p className="text-center text-(--subtext) mt-10 max-w-180">
                    {t.subtitle}
                </p>

                <a
                    href="mailto:info@newmann.ai"
                    className="text-(--primary) font-semibold mt-4 hover:text-(--primary-hover) transition-colors duration-200"
                >
                    info@newmann.ai
                </a>

                <p className="text-center text-(--subtext) mt-4">
                    {t.orForm}
                </p>
            </Reveal>

            {/* Form */}
            <Reveal className="mt-16 md:mt-20 max-w-2xl w-full mx-auto px-4 mb-32">
                <form className="bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-6 md:p-10 flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="name"
                                className="text-sm font-semibold text-(--text)"
                            >
                                {t.form.nameLabel}
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder={t.form.namePlaceholder}
                                className="px-4 py-3 rounded-xl border border-(--bento-stroke) text-sm text-(--text) placeholder-(--placeholder-text) outline-none focus:border-(--primary) transition-colors duration-200"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="email"
                                className="text-sm font-semibold text-(--text)"
                            >
                                {t.form.emailLabel}
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder={t.form.emailPlaceholder}
                                className="px-4 py-3 rounded-xl border border-(--bento-stroke) text-sm text-(--text) placeholder-(--placeholder-text) outline-none focus:border-(--primary) transition-colors duration-200"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="company"
                            className="text-sm font-semibold text-(--text)"
                        >
                            {t.form.companyLabel}
                        </label>
                        <input
                            id="company"
                            type="text"
                            placeholder={t.form.companyPlaceholder}
                            className="px-4 py-3 rounded-xl border border-(--bento-stroke) text-sm text-(--text) placeholder-(--placeholder-text) outline-none focus:border-(--primary) transition-colors duration-200"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="message"
                            className="text-sm font-semibold text-(--text)"
                        >
                            {t.form.messageLabel}
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            placeholder={t.form.messagePlaceholder}
                            className="px-4 py-3 rounded-xl border border-(--bento-stroke) text-sm text-(--text) placeholder-(--placeholder-text) outline-none focus:border-(--primary) transition-colors duration-200 resize-none"
                        />
                    </div>

                    <Button type="primary" className="w-full sm:w-auto">
                        {t.form.submit}
                    </Button>
                </form>
            </Reveal>
        </section>
    );
}
