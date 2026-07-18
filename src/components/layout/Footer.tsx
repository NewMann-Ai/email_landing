"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/favicon_black.png";
import MailIcon from "@/assets/icons/hugeicons/mail";
import LinkedInIcon from "@/assets/icons/hugeicons/linkedin";
import { useDictionary } from "@/i18n/LocaleContext";
import { commonDictionary } from "@/i18n/dictionaries/common";

export default function Footer() {
    const t = useDictionary(commonDictionary).footer;

    const COLUMNS = [
        {
            title: t.columns.products,
            links: [
                { label: t.links.newmannMail, href: "/newmann-mail" },
                { label: t.links.security, href: "/security" },
            ],
        },
        {
            title: t.columns.resources,
            links: [
                { label: t.links.faq, href: "/faq" },
                /* { label: "Supporto", href: "/support" }, */
                { label: t.links.contacts, href: "/contacts" },
            ],
        },
        {
            title: t.columns.company,
            links: [
                {
                    label: t.links.cookiePolicy,
                    href: "https://app.newmann.ai/cookie-policy",
                },
                {
                    label: t.links.privacyPolicy,
                    href: "https://app.newmann.ai/privacy-policy",
                },
                {
                    label: t.links.terms,
                    href: "https://app.newmann.ai/terms-of-service",
                },
            ],
        },
    ];

    return (
        <footer className="max-w-6xl w-full mx-auto px-4 py-16 mt-40">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                <Image src={Logo} alt="Newmann logo" width={40} height={40} />

                {COLUMNS.map((column) => (
                    <div key={column.title} className="flex flex-col gap-3">
                        <p className="text-xs font-semibold text-(--text) tracking-wide">
                            {column.title}
                        </p>
                        <div className="flex flex-col gap-2">
                            {column.links.map((link) => {
                                const isExternal = link.href.startsWith("http");

                                return isExternal ? (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-(--subtext) hover:text-(--primary) transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.label}
                                        href={link.href || "#"}
                                        className="text-sm text-(--subtext) hover:text-(--primary) transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between mt-20">
                <p className="text-sm text-(--subtext)">{t.copyright}</p>

                <div className="flex items-center gap-3">
                    <a
                        href="mailto:info@newmann.ai"
                        className="rounded-xl bg-(--primary-10) flex items-center justify-center text-(--primary) p-2"
                    >
                        <MailIcon className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/newmann/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-(--primary-10) flex items-center justify-center text-(--primary) p-2"
                    >
                        <LinkedInIcon className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
