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
        title: "Data Retention",
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

const RIGHTS = [
    {
        title: "Diritto di accesso",
        description: "Puoi scaricare tutti i tuoi dati in 1 click.",
    },
    {
        title: "Diritto di portabilità",
        description: "Esportare in CSV, JSON, qualsiasi formato.",
    },
    {
        title: "Diritto all'oblio",
        description: "Cancella tutto in 24 ore senza giustificazioni.",
    },
    {
        title: "Diritto di rettifica",
        description: "Modifica i tuoi dati quando vuoi.",
    },
];

const RETENTION = [
    {
        title: "Email processuate",
        description: "Cancellate dopo 90 giorni.",
    },
    {
        title: "Bozze generate",
        description: "Cancellate su richiesta.",
    },
    {
        title: "Analytics",
        description: "Aggregati e anonimizzati.",
    },
];

const IN_BREVE = [
    "Paghi mensilmente. Puoi cancellare in qualsiasi momento.",
    "Non condividiamo i tuoi dati. Non li usiamo per addestrare modelli.",
    "Se usi Newmann per cose illegali, smentiamo la relazione.",
];

const SECTIONS = [
    {
        title: "Uso Accettabile",
        description: "No spam, no harassment, no illegal activity.",
    },
    {
        title: "Limitazioni di Responsabilità",
        description: "Newmann non è responsabile per danni indiretti.",
    },
    {
        title: "Terminazione",
        description: "30 giorni di notice per parte.",
    },
    {
        title: "Indennizzo",
        description: "Se violi copyright, paghiamo le conseguenze legali.",
    },
    {
        title: "Modifiche ai Termini",
        description: "Ti notifico almeno 30 giorni prima.",
    },
    {
        title: "Legge Applicabile",
        description: "Legge italiana.",
    },
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
                    <span className="text-(--primary)">Data Retention</span>
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

            {/* Privacy */}
            <div className="max-w-3xl w-full mx-auto px-4 mt-24 md:mt-40">
                <Reveal className="flex flex-col items-center justify-center">
                    <span className="text-(--primary) bg-(--primary-10) border border-(--primary) rounded-2xl px-4 py-1 text-sm">
                        Privacy
                    </span>

                    <Title className="max-w-220 text-center mt-4">
                        La Tua Privacy{" "}
                        <span className="text-(--primary)">Non È Negoziabile</span>
                    </Title>
                </Reveal>

                <Section title="Cookie e Tracking">
                    <p>
                        Newmann usa cookies funzionali per ricordare le tue
                        preferenze. Zero cookie di tracking. Zero pixel di
                        terzi.
                    </p>
                </Section>

                <Section title="Dati Personali">
                    <p>
                        Raccogliamo email e nome per creare il tuo account.
                        Niente vendite a terzi. Niente profiling.
                    </p>
                </Section>

                <Section title="Diritti">
                    <ul className="flex flex-col gap-3">
                        {RIGHTS.map((right) => (
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

                <Section title="Subprocessori">
                    <p>
                        Usiamo Microsoft Azure (Europa), Pinecone, OpenAI. Tutti
                        firmano Data Processing Agreements.
                    </p>
                </Section>

                <Section title="Data Retention">
                    <ul className="flex flex-col gap-3">
                        {RETENTION.map((item) => (
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
                    <Button type="primary" className="w-full sm:w-auto">
                        Leggi la Privacy Policy Completa
                    </Button>
                </Reveal>

                <Reveal className="flex justify-center mt-4">
                    <p className="text-(--subtext) text-xs">
                        Contatti Privacy:{" "}
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
                        Termini e Condizioni
                    </span>

                    <Title className="max-w-220 text-center mt-4">
                        Termini di Servizio Chiari,{" "}
                        <span className="text-(--primary)">Senza Sorprese</span>
                    </Title>
                </Reveal>

                <Reveal className="mt-12 bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-8">
                    <h2 className="text-xl font-semibold text-(--text)">
                        In Breve
                    </h2>

                    <ul className="flex flex-col gap-3 mt-4">
                        {IN_BREVE.map((item) => (
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
                        Sezioni Principali
                    </h2>

                    <ol className="flex flex-col gap-4 mt-4">
                        {SECTIONS.map((section, i) => (
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
                    <Button type="primary" className="w-full sm:w-auto">
                        Leggi i Termini Completi
                    </Button>
                </Reveal>
            </div>
        </section>
    );
}
