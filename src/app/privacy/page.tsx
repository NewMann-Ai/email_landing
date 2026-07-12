import Image from "next/image";
import WhiteLogo from "../../assets/images/favicon_white.png";
import Title from "../../components/ui/Title";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

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

export default function Privacy() {
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
                    Privacy
                </span>

                <Title className="max-w-220 text-center mt-4">
                    La Tua Privacy{" "}
                    <span className="text-(--primary)">Non È Negoziabile</span>
                </Title>
            </Reveal>

            <div className="max-w-3xl w-full mx-auto px-4 mb-32">
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

                <Reveal className="flex justify-center mt-10 max-w-6xl w-full mx-auto px-4 mb-10">
                    <Button type="primary" className="w-full sm:w-auto">
                        Leggi la Privacy Policy Completa
                    </Button>
                </Reveal>

                <Reveal className="flex justify-center mt-4 max-w-6xl w-full mx-auto px-4 mb-32">
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
        </section>
    );
}
