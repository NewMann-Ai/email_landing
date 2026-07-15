import Image from "next/image";
import WhiteLogo from "../../assets/images/favicon_white.png";
import GoogleIcon from "../../assets/icons/google-logo.png";
import OutlookIcon from "../../assets/icons/outlook-logo.png";
import Title from "../../components/ui/Title";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import DashboardImg from "@/assets/images/dashboard/dashboard.png";
import LabelsImg from "@/assets/images/dashboard/labels.png";
import RulesImg from "@/assets/images/dashboard/rules.png";
import DraftsImg from "@/assets/images/dashboard/drafts.png";
import AiImg from "@/assets/images/dashboard/ai.png";
import SettingsImg from "@/assets/images/dashboard/settings.png";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
    title: "Newmann Mail — Automazione AI per email aziendali",
    description:
        "Newmann Mail legge, classifica e risponde alle tue email aziendali con AI. Bozze automatiche, labels intelligenti, regole e integrazione Gmail e Outlook.",
    path: "/newmann-mail",
    keywords: [
        "Newmann Mail",
        "email aziendali AI",
        "bozze automatiche",
        "assistente Gmail",
        "assistente Outlook",
        "Digital Twin email",
    ],
});

const INBOX_ORGANIZER_BENEFITS = [
    "Trovi quello che cerchi in 3 secondi, non in 3 minuti",
    "Le email critiche emergono da sole",
    "Ogni conversazione rimane contestualizzata per il tuo team",
    "Niente etichette abbandonate o regole dimenticate",
];

const NEWMIE_BENEFITS = [
    "Trova informazioni sparse nella tua inbox. Hai bisogno di quella fattura inviata 6 mesi fa da un fornitore? Chiedi a Newmie e te la ritroverà in 5 secondi.",
    "Scrivi email da zero. Hai bisogno di mandare una mail ma non vuoi perdere tempo scrivendo dal nulla? Scrivi a Newmie e te la genera, tenendo conto del tuo tono e delle email passate",
    "Imposta etichette e regole. Hai bisogno di creare un'etichetta particolare? Descrivi a Newmie ciò che vuoi e te la imposterà, senza che tu debba fare nulla manualmente",
];

const EMAIL_DRAFT_WRITER_STEPS = [
    "L'AI legge l'email in arrivo",
    "Consulta la memoria della tua azienda (documenti, linee guida, contatti precedenti)",
    "Genera la tua bozza personalizzata",
    "Tu rivedi, modifichi se necessario e invii",
];

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

export default function NewmannMail() {
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
                <span className="text-(--primary) bg-(--primary-10) border boder-(--primary) rounded-2xl px-4 py-1 text-sm">
                    Newmann Mail
                </span>

                <Title as={1} className="max-w-220 text-center mt-4">
                    Automizza la Gestione delle{" "}
                    <span className="text-(--primary)">
                        {" "}
                        Email Aziendali con AI
                    </span>
                </Title>

                <p className="text-center text-(--subtext) mt-10 max-w-220">
                    Newmann Mail è il software di automazione AI che trasforma
                    il caos delle email in un sistema organizzato ed efficiente.
                    Legge, classifica, organizza e scrive bozze di risposta con
                    il tuo tono al posto tuo direttamente nel tuo provider
                    email.
                </p>

                <Button
                    type="primary"
                    className="w-full sm:w-auto mt-10"
                    href="https://landing.newmann.ai/"
                >
                    Inizia ora
                </Button>
            </Reveal>

            {/* 4. AI-Drafted Replies */}
            <div
                id="email-draft-writer"
                className="relative mt-24 md:mt-40 pb-8 md:pb-32 scroll-mt-24"
            >
                <Reveal className="max-w-7xl w-full mx-auto px-4">
                    <Title className="w-full text-center">
                        Draft Writer{" "}
                        <span className="text-(--primary)">AI</span>{" "}
                    </Title>

                    <p className="text-(--subtext) mt-4 italic text-center">
                        {'"'}Quante ore al mese spendi a scrivere le stesse
                        risposte?{'"'}
                    </p>

                    <div className="relative flex flex-col md:flex-row md:items-center mt-20">
                        <div className="md:max-w-140">
                            <p className="text-(--subtext) mt-4">
                                L&apos;Email Draft Writer genera bozze complete,
                                personalizzate e pronte per l&apos;invio.
                                Newmann analizza la storia della conversazione,
                                il tono della tua azienda, il contesto di
                                business e crea una risposta che sembra scritta
                                da te
                            </p>

                            <ul className="flex flex-col gap-2 mt-4">
                                {EMAIL_DRAFT_WRITER_STEPS.map((step) => (
                                    <li
                                        key={step}
                                        className="flex items-start gap-2 text-(--subtext)"
                                    >
                                        <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-sm text-(--subtext) mt-4">
                                <span className="font-semibold text-(--text)">
                                    Tempo risparmiato:
                                </span>{" "}
                                30 minuti al giorno per dipendente. Moltiplicato
                                per 365 giorni. Moltiplicato per il tuo team.
                            </p>

                            <Button
                                type="primary"
                                className="mt-6 w-full sm:w-auto"
                                href="https://landing.newmann.ai/"
                            >
                                Inizia ora
                            </Button>
                        </div>

                        {/* Bleeds past the right edge of the screen, clipped by the section */}
                        <div className="hidden md:block absolute top-1/2 -right-40 -translate-y-1/2 w-200">
                            <div className="rounded-2xl overflow-hidden border border-(--bento-stroke) shadow-[0_40px_60px_var(--shadow)]">
                                <Image
                                    src={DraftsImg}
                                    alt="Elenco delle bozze scritte dall'AI in attesa di revisione"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </Reveal>

                <div className="md:hidden max-w-6xl w-full mx-auto px-4 mt-8">
                    <div className="rounded-2xl overflow-hidden border border-(--bento-stroke) shadow-[0_40px_60px_var(--shadow)]">
                        <Image
                            src={DraftsImg}
                            alt="Elenco delle bozze scritte dall'AI in attesa di revisione"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* 2. Smart Labels */}
            <div
                id="inbox-organizer"
                className="relative mt-24 md:mt-40 pb-8 md:pb-32 scroll-mt-24"
            >
                <Reveal className="max-w-7xl w-full mx-auto px-4">
                    <Title className="w-full text-center">
                        <span className="text-(--primary)">Etichette</span>{" "}
                        Intelligenti
                    </Title>

                    <p className="text-(--subtext) mt-4 italic text-center">
                        {'"'}Una inbox disorganizzata è come avere 10.000 fogli
                        sparsi sulla scrivania.{'"'}
                    </p>

                    <div className="relative flex flex-col md:flex-row md:items-center mt-20">
                        <div className="md:max-w-140">
                            <p className="text-(--subtext) mt-4">
                                Con l&apos;Inbox Organizer di Newmann puoi
                                creare etichette personalizzate in base alle tue
                                esigenze e il sistema classifica automaticamente
                                ogni email in entrata nelle etichette create in
                                base al tipo di contenuto, al mittente e al
                                contesto aziendale.
                            </p>

                            <ul className="flex flex-col gap-2 mt-4">
                                {INBOX_ORGANIZER_BENEFITS.map((benefit) => (
                                    <li
                                        key={benefit}
                                        className="flex items-start gap-2 text-(--subtext)"
                                    >
                                        <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-sm text-(--subtext) mt-4">
                                Perfetto per aziende con alto volume di mail:
                                agenzie, studi professionali, dipartimenti
                                customer service, vendite B2B.
                            </p>

                            <Button
                                type="primary"
                                className="mt-6 w-full sm:w-auto"
                                href="https://www.youtube.com/watch?si=pI3ZcASmXDU6gWOn&v=mtXvKbva6zg&feature=youtu.be"
                            >
                                Scopri Come Funziona
                            </Button>
                        </div>

                        {/* Bleeds past the right edge of the screen, clipped by the section */}
                        <div className="hidden md:block absolute top-1/2 -right-36 -translate-y-1/2 w-200">
                            <div className="rounded-2xl overflow-hidden border border-(--bento-stroke) shadow-[0_40px_60px_var(--shadow)]">
                                <Image
                                    src={LabelsImg}
                                    alt="Elenco delle etichette create"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </Reveal>

                <div className="md:hidden max-w-6xl w-full mx-auto px-4 mt-8">
                    <div className="rounded-2xl overflow-hidden border border-(--bento-stroke) shadow-[0_40px_60px_var(--shadow)]">
                        <Image
                            src={LabelsImg}
                            alt="Elenco delle etichette create"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* 3. Automation Rules */}
            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-40 px-4">
                <Title className="max-w-180 text-center">
                    Due modi per smistare{" "}
                    <span className="text-(--primary)">la posta</span>
                </Title>

                <p className="text-center text-(--subtext) mt-4 max-w-200">
                    Usa un filtro di ricerca classico, come faresti su Gmail,
                    oppure scrivi in linguaggio naturale cosa deve succedere e
                    lascia decidere all&apos;AI in base al contesto della email.
                    Ogni regola si accende e si spegne con un clic.
                </p>

                <div className="mt-8 md:mt-16 max-w-4xl w-full">
                    <div className="rounded-2xl overflow-hidden border border-(--bento-stroke) shadow-[0_40px_60px_var(--shadow)]">
                        <Image
                            src={RulesImg}
                            alt="Elenco delle regole di automazione"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </Reveal>

            {/* 5. Chat with your inbox */}
            <Reveal className="relative mt-24 md:mt-80 pb-8 md:pb-32">
                <div className="relative max-w-7xl w-full mx-auto px-4 flex flex-col md:flex-row md:items-center">
                    <div className="md:max-w-180 md:ml-auto">
                        <Title className="max-w-140">
                            Parla con la{" "}
                            <span className="text-(--primary)">tua inbox</span>
                        </Title>

                        <p className="text-(--subtext) mt-4">
                            Il chatbot Newmie ti permette di migliorare ancora
                            di più l&apos;efficienza nella gestione delle tue
                            email:
                        </p>

                        <ul className="flex flex-col gap-2 mt-4">
                            {NEWMIE_BENEFITS.map((benefit) => (
                                <li
                                    key={benefit}
                                    className="flex items-start gap-2 text-(--subtext)"
                                >
                                    <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bleeds past the left edge of the screen, clipped by the section */}
                    <div className="hidden md:block absolute top-1/2 -left-35 -translate-y-1/2 w-120">
                        <div className="rounded-2xl overflow-hidden border border-(--bento-stroke) shadow-[0_40px_60px_var(--shadow)]">
                            <Image
                                src={AiImg}
                                alt="Assistente AI che organizza le email tramite chat"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>

                <div className="md:hidden max-w-6xl w-full mx-auto px-4 mt-8">
                    <div className="rounded-2xl overflow-hidden border border-(--bento-stroke) shadow-[0_40px_60px_var(--shadow)]">
                        <Image
                            src={AiImg}
                            alt="Assistente AI che organizza le email tramite chat"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </Reveal>

            {/* 6. Personalization */}
            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-40 px-4">
                <Title className="max-w-180 text-center">
                    La posta che{" "}
                    <span className="text-(--primary)">si adatta a te</span>
                </Title>

                <p className="text-center text-(--subtext) mt-4 max-w-140">
                    Tema chiaro o scuro, italiano o inglese, firma
                    personalizzata e molto altro: Newmann si adatta al tuo modo
                    di lavorare, non il contrario. Puoi anche non utilizzare la
                    dashboard Newmann ma direttamente Gmail o Outlook!
                </p>

                <div className="mt-8 md:mt-16 max-w-4xl w-full">
                    <div className="rounded-2xl overflow-hidden border border-(--bento-stroke) shadow-[0_40px_60px_var(--shadow)]">
                        <Image
                            src={SettingsImg}
                            alt="Impostazioni di tema, lingua e firma email"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </Reveal>

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
                            Pronto a lasciare che Newmann si occupi della{" "}
                            <span className="text-(--primary)">tua inbox</span>?
                        </Title>

                        <p className="text-center text-(--subtext) mt-4">
                            Bastano due minuti per collegare la tua email e
                            iniziare a risparmiare tempo.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full max-w-100 sm:max-w-none px-4 sm:px-0">
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
