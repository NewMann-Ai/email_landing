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

export default function Terms() {
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
                    Termini e Condizioni
                </span>

                <Title className="max-w-220 text-center mt-4">
                    Termini di Servizio Chiari,{" "}
                    <span className="text-(--primary)">Senza Sorprese</span>
                </Title>
            </Reveal>

            <div className="max-w-3xl w-full mx-auto px-4 mb-32">
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

                <Reveal className="flex justify-center mt-10 max-w-6xl w-full mx-auto px-4 mb-10">
                    <Button type="primary" className="w-full sm:w-auto">
                        Leggi i Termini Completi
                    </Button>
                </Reveal>
            </div>
        </section>
    );
}
