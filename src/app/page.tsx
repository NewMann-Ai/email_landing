import GdprIcon from "@/assets/icons/hugeicons/gdpr";
import LinkArrowIcon from "@/assets/icons/hugeicons/link-arrow";
import SparklesIcon from "@/assets/icons/hugeicons/sparkles";
import Users from "@/assets/icons/hugeicons/users";
import {
    AziendaPreview,
    InboxPreview,
} from "@/components/layout/BentoPreviews";
import MiniDashboard from "@/components/layout/MiniDashboard";
import Testimonials from "@/components/layout/Testimonials";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import { buildMetadata } from "@/utils/seo";
import Image from "next/image";
import Link from "next/link";
import WhiteLogo from "../assets/images/favicon_white.png";
import Title from "../components/ui/Title";

export const metadata = buildMetadata({
    title: "Rispondi alle email in metà del tempo",
    description:
        "Newmann è l'assistente AI per Gmail e Outlook: capisce il contesto delle tue email, suggerisce risposte pronte e organizza automaticamente la tua inbox. GDPR compliant.",
    path: "/",
    keywords: [
        "assistente email AI",
        "Gmail AI",
        "Outlook AI",
        "gestione inbox",
        "automazione email aziendale",
        "risposte automatiche email",
    ],
});

const STATS = [
    { value: "+60%", label: "Risposte più rapide" },
    { value: "3,5h", label: "Risparmiate ogni settimana" },
    { value: "-40%", label: "Tempo gestione email" },
];

const SECURITY = [
    {
        icon: GdprIcon,
        title: "GDPR & AI Act Compliant",
        description:
            "Conformità totale al Regolamento Generale sulla Protezione dei Dati e all'AI Act",
    },
    {
        icon: Users,
        title: "Privacy by Design",
        description:
            "Nessuna vendita dei tuoi dati, nessun profiling. La tua privacy non è negoziabile.",
    },
    {
        icon: SparklesIcon,
        title: "Termini Trasparenti",
        description:
            "Condizioni di servizio chiare, senza clausole nascoste o sorprese.",
    },
];

export default function Home() {
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
                    Rispondi alle email nella{" "}
                    <span className="text-(--primary)">metà del tempo</span>
                </Title>

                <p className="text-center text-(--subtext) mt-4">
                    L&apos;assistente AI che capisce il contesto, suggerisce le
                    risposte giuste e tiene la tua inbox sotto controllo.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full max-w-100 sm:max-w-none">
                    <Button
                        type="primary"
                        className="w-full sm:w-auto"
                        href="https://landing.newmann.ai/"
                    >
                        Inizia ora
                    </Button>
                </div>
            </Reveal>

            <Reveal className="hidden md:block">
                <MiniDashboard />
            </Reveal>

            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-40 px-4">
                <Title className="max-w-180 text-center">
                    Più tempo per le attività che{" "}
                    <span className="text-(--primary)">contano davvero</span>
                </Title>

                <Button
                    type="primary"
                    className="w-full sm:w-auto mt-10"
                    href="/newmann-mail"
                >
                    Scopri di più
                </Button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 md:mt-40 max-w-6xl w-full px-4">
                    {/* Card 1 */}
                    <Link href="/newmann-mail#inbox-organizer">
                        <Reveal delay={0}>
                            <div className="bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-8 cursor-pointer transition-transform duration-200 hover:scale-101">
                                <h3 className="text-xl font-semibold text-(--text)">
                                    La tua inbox finalmente organizzata
                                </h3>
                                <p className="text-(--subtext) mt-2">
                                    Classifica come desideri le tue email in
                                    base al contenuto creando etichette
                                    personalizzate
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
                                    Le risposte, più veloci
                                </h3>
                                <p className="text-(--subtext) mt-2">
                                    Rispondi più velocemente a tutte le tue
                                    email tramite bozze di risposta automatiche
                                    già pronte
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
                    Migliora le tue{" "}
                    <span className="text-(--primary)">performance</span>
                </Title>

                <p className="text-center text-(--subtext) text-md mt-4">
                    Mediamente un utente Newmann ottiene
                </p>

                <div className="flex flex-wrap justify-center gap-6 mt-10 md:mt-20 max-w-3xl">
                    {STATS.map((stat, i) => (
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
                    Sistemi di sicurezza{" "}
                    <span className="text-(--primary)">enterprise</span>
                </Title>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-16 max-w-6xl w-full px-4">
                    {SECURITY.map((item, i) => (
                        <Reveal
                            key={item.title}
                            delay={i * 100}
                            className="bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-6"
                        >
                            <div className="w-10 h-10 rounded-lg bg-[#eef7f7] flex items-center justify-center">
                                <item.icon className="w-5 h-5 text-(--primary)" />
                            </div>

                            <h3 className="text-lg font-semibold text-(--text) mt-4">
                                {item.title}
                            </h3>
                            <p className="text-sm text-(--subtext) mt-1">
                                {item.description}
                            </p>
                        </Reveal>
                    ))}
                </div>

                <Link
                    href="/security"
                    className="flex items-center gap-1 text-sm text-(--text) mt-8 hover:text-(--primary) transition-colors duration-200"
                >
                    Scopri di più sulla sicurezza
                    <LinkArrowIcon className="w-4 h-4" />
                </Link>
            </Reveal>

            {/* <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-40 px-4">
                <Title className="max-w-180 text-center">
                    Amato da aziende di{" "}
                    <span className="text-(--primary)">ogni dimensione</span>
                </Title>

        <p className="text-center text-(--subtext) mt-4">
          Leggi cosa dice chi ha provato Newmann
        </p>

                <div className="mt-8 md:mt-16 w-full">
                    <Testimonials />
                </div>
            </Reveal> */}

            <Reveal className="mt-24 md:mt-40 max-w-6xl w-full mx-auto px-4">
                <div className="relative overflow-hidden rounded-[40px] bg-(--section-bg) border border-(--bento-stroke) py-12 md:py-24 px-6 md:px-8">
                    <Image
                        src={WhiteLogo}
                        alt=""
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/4 w-1/2 h-auto rotate-75 opacity-50 -z-10"
                    />

                    <div className="relative flex flex-col items-center justify-center">
                        <Title className="max-w-180 text-center">
                            Recupera tempo prezioso e concentrati sulle attività
                            che{" "}
                            <span className="text-(--primary)">
                                contano davvero
                            </span>
                        </Title>

                        <p className="text-center text-(--subtext) mt-4">
                            Lascia che Newmann si occupi delle email mentre tu
                            fai crescere il tuo business.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full max-w-100 sm:max-w-none">
                            <Button
                                type="primary"
                                className="w-full sm:w-auto"
                                href="https://landing.newmann.ai/"
                            >
                                Inizia ora
                            </Button>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
