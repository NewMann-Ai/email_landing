import Image from "next/image";
import WhiteLogo from "../../assets/images/favicon_white.png";
import Title from "../../components/ui/Title";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import GdprIcon from "@/assets/icons/hugeicons/gdpr";
import DatabaseIcon from "@/assets/icons/hugeicons/database";

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

const PILLARS = [
    {
        icon: GdprIcon,
        title: "GDPR Compliant",
        description: "Ogni dato che elaboriamo rispetta la normativa europea.",
    },
    {
        icon: CertificateIcon,
        title: "AI Act Compliant",
        description:
            "I nostri modelli AI sono trasparenti e costruiti su framework certificati.",
    },
    {
        icon: DatabaseIcon,
        title: "Zero Data Retention",
        description:
            "Newmann non usa i tuoi dati per addestrare i modelli AI. I tuoi dati rimangono tuoi.",
    },
];

const INFRASTRUCTURE = [
    "Protocolli TLS 1.3 e SHA-256",
    "Database vettoriali Pinecone (enterprise-grade)",
    "Server Microsoft Azure con sede in Europa",
    "Enterprise-grade API Policies",
    "Human-in-the-Loop: un umano rivede sempre le azioni critiche",
];

const AUDITS = [
    "SOC 2 Type II in pipeline",
    "Conforme EU Cybersecurity Act",
    "Regular penetration testing",
];

export default function Security() {
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
                    Sicurezza
                </span>

                <Title className="max-w-220 text-center mt-4">
                    Sicurezza Enterprise, Privacy Totale: GDPR, AI Act,{" "}
                    <span className="text-(--primary)">
                        Zero Data Retention
                    </span>
                </Title>

                <p className="text-center text-(--subtext) mt-10 max-w-180">
                    Se vuoi davvero innovazione, devi poter fidarti. Newmann è
                    costruito su tre pilastri di sicurezza che non negoziamo:
                </p>
            </Reveal>

            {/* Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl w-full mx-auto px-4">
                {PILLARS.map((pillar, i) => (
                    <Reveal
                        key={pillar.title}
                        delay={i * 120}
                        className="bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-8"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[#eef7f7] flex items-center justify-center">
                            <pillar.icon className="w-6 h-6 text-(--primary)" />
                        </div>

                        <h3 className="text-lg font-semibold text-(--text) mt-5">
                            {pillar.title}
                        </h3>
                        <p className="text-sm text-(--subtext) mt-2">
                            {pillar.description}
                        </p>
                    </Reveal>
                ))}
            </div>

            {/* Infrastructure & Audits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 md:mt-40 max-w-6xl w-full mx-auto px-4">
                <Reveal className="bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-8">
                    <h3 className="text-xl font-semibold text-(--text)">
                        Infrastruttura
                    </h3>

                    <ul className="flex flex-col gap-3 mt-4">
                        {INFRASTRUCTURE.map((item) => (
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
                        Audit e Certificazioni
                    </h3>

                    <ul className="flex flex-col gap-3 mt-4">
                        {AUDITS.map((item) => (
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

            <Reveal className="flex justify-center mt-10 max-w-6xl w-full mx-auto px-4 mb-32">
                <Button type="primary" className="w-full sm:w-auto">
                    Leggi la Nostra Documentazione di Sicurezza
                </Button>
            </Reveal>
        </section>
    );
}
