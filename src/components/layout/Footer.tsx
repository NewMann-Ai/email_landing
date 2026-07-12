import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/favicon_black.png";
import MailIcon from "@/assets/icons/hugeicons/mail";
import LinkedInIcon from "@/assets/icons/hugeicons/linkedin";

const COLUMNS = [
    {
        title: "PRODOTTI",
        links: [
            { label: "Newmann mail", href: "/newmann-mail" },
            { label: "Digital twin", href: "" },
            { label: "Sicurezza", href: "/security" },
        ],
    },
    {
        title: "RISORSE",
        links: [
            { label: "FAQ", href: "/faq" },
            { label: "Supporto", href: "/support" },
        ],
    },
    {
        title: "AZIENDA",
        links: [
            { label: "Contattaci", href: "/contacts" },
            { label: "Privacy", href: "/privacy" },
            { label: "Termini", href: "/terms" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="max-w-6xl w-full mx-auto px-4 py-16 mt-40">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                <Image src={Logo} alt="Newmann logo" width={20} height={40} />

                {COLUMNS.map((column) => (
                    <div key={column.title} className="flex flex-col gap-3">
                        <p className="text-xs font-semibold text-(--text) tracking-wide">
                            {column.title}
                        </p>
                        <div className="flex flex-col gap-2">
                            {column.links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href || "#"}
                                    className="text-sm text-(--subtext) hover:text-(--primary) transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between mt-20">
                <p className="text-sm text-(--subtext)">
                    © 2026 Newmann. Tutti i diritti riservati.
                </p>

                <div className="flex items-center gap-3">
                    <a
                        href="mailto:hello@newmann.com"
                        className="rounded-xl bg-(--primary-10) flex items-center justify-center text-(--primary) p-2"
                    >
                        <MailIcon className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com"
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
