import Image from "next/image";
import WhiteLogo from "../../assets/images/favicon_white.png";
import Title from "../../components/ui/Title";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import UsersIcon from "@/assets/icons/hugeicons/users";
import GoogleVerifiedIcon from "@/assets/icons/hugeicons/google-verified";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
    title: "Aziende — Gestione strutturata del workspace",
    description:
        "Organizza il tuo workspace Newmann in dipartimenti e micro-aziende con contesti AI indipendenti, permessi granulari e automazioni personalizzate.",
    path: "/team",
    keywords: [
        "Newmann aziende",
        "workspace aziendale AI",
        "gestione aziendale email",
        "automazione aziendale",
    ],
});

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

const TEAM_FEATURES = [
    {
        icon: UsersIcon,
        title: "Creazione di Dipartimenti e Team",
        points: [
            "Dividi il workspace aziendale in Teams come: Sales, Customer Service, Operations, ecc. ",
        ],
    },
    {
        icon: GoogleVerifiedIcon,
        title: "Contesto AI Multi-Livello",
        points: [
            "Contesto Individuale: Newmann impara dallo storico email di ogni singola persona",
            "Contesto Aziendale: Newmann accede ai documenti, alle linee guida, alle policy di tutta l'azienda",
            "Sotto-contesti Custom: puoi creare contesti specifici per progetto, cliente, o procedura",
        ],
        result: "Bozze che rispecchiano il tuo tono + il tono del team + il tono dell'azienda",
    },
    {
        icon: UserGearIcon,
        title: "Gestione degli Utenti",
        points: [
            "Aggiungi utenti tramite whitelist manuale (controllo totale)",
            "Configura istruzioni personalizzate per singolo utente",
            "Setup rapido via dashboard admin avanzata",
        ],
    },
];

export default function Team() {
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
                    Aziende
                </span>

                <Title as={1} className="max-w-220 text-center mt-4">
                    Gestione Strutturata delle{" "}
                    <span className="text-(--primary)">Aziende</span>
                </Title>

                <p className="text-center text-(--subtext) mt-10 max-w-220">
                    La funzionalità Aziende permette di strutturare il workspace
                    aziendale in dipartimenti, con contesti AI indipendenti e
                    configurazione granulare delle automazioni. Newmann non
                    impara solo dal singolo utente: impara dalla tua azienda,
                    dalle vostre procedure.
                </p>
            </Reveal>

            {/* Cosa puoi fare */}
            <div className="mt-24 md:mt-40 px-4">
                <Reveal className="flex flex-col items-center justify-center">
                    <Title className="max-w-180 text-center">
                        Cosa Puoi <span className="text-(--primary)">Fare</span>
                    </Title>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-7xl w-full mx-auto">
                    {TEAM_FEATURES.map((feature, i) => (
                        <Reveal
                            key={feature.title}
                            delay={i * 120}
                            className="bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-8 flex flex-col"
                        >
                            <div className="w-12 h-12 rounded-xl bg-(--primary-10) flex items-center justify-center">
                                <feature.icon className="w-6 h-6 text-(--primary)" />
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
                                        Risultato
                                    </p>
                                    <p className="text-sm text-(--subtext) mt-2">
                                        {feature.result}
                                    </p>
                                </div>
                            )}
                        </Reveal>
                    ))}
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
                            Pronto a far{" "}
                            <span className="text-(--primary)">
                                scalare il tuo team
                            </span>
                            ?
                        </Title>

                        <p className="text-center text-(--subtext) mt-4">
                            Struttura dipartimenti, contesti AI e utenti in
                            pochi minuti.
                        </p>

                        <Button
                            type="primary"
                            className="w-full sm:w-auto mt-10"
                            href="https://landing.newmann.ai/"
                        >
                            Inizia ora
                        </Button>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
