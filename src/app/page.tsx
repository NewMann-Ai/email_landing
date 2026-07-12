import Image from "next/image";
import Link from "next/link";
import WhiteLogo from "../assets/images/favicon_white.png";
import GoogleIcon from "../assets/icons/google-logo.png";
import OutlookIcon from "../assets/icons/outlook-logo.png";
import InboxIllustration from "../assets/images/inbox.png";
import AziendaIllustration from "../assets/images/azienda.png";
import Title from "../components/ui/Title";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import MiniDashboard from "@/components/layout/MiniDashboard";
import Testimonials from "@/components/layout/Testimonials";
import GdprIcon from "@/assets/icons/hugeicons/gdpr";
import GoogleVerifiedIcon from "@/assets/icons/hugeicons/google-verified";
import MicrosoftVerifiedIcon from "@/assets/icons/hugeicons/microsoft-verified";
import LinkArrowIcon from "@/assets/icons/hugeicons/link-arrow";

const STATS = [
    { value: "+85%", label: "Risposte più rapide" },
    { value: "6h", label: "Risparmiate ogni settimana" },
    { value: "-45%", label: "Tempo medio gestione" },
    { value: "300+", label: "Email automatizzate" },
    { value: "99.9%", label: "Affidabilità" },
];

const SECURITY = [
    {
        icon: GdprIcon,
        title: "GDPR Compliant",
        description:
            "Conformità totale al Regolamento Generale sulla Protezione dei Dati.",
    },
    {
        icon: GoogleVerifiedIcon,
        title: "Google Verified",
        description:
            "Integrazione verificata e approvata dai sistemi di sicurezza Google.",
    },
    {
        icon: MicrosoftVerifiedIcon,
        title: "Microsoft Verified",
        description:
            "Integrazione verificata e approvata dai sistemi di sicurezza Microsoft.",
    },
];

export default function Home() {
    return (
        <section className="relative overflow-hidden min-h-screen">
            <Image
                src={WhiteLogo}
                alt="White Logo"
                className="hidden md:block absolute left-1/2 -translate-x-1/2 -translate-y-1/4 w-1/2 h-auto rotate-75 opacity-50 -z-10"
            />

            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-60 px-4">
                <Title className="max-w-180 text-center">
                    Rispondi alle email nella{" "}
                    <span className="text-(--primary)">metà del tempo</span>
                </Title>

                <p className="text-center text-(--subtext) mt-4">
                    L&apos;assistente AI che capisce il contesto, suggerisce le
                    risposte giuste e tiene la tua inbox sotto controllo.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full max-w-100 sm:max-w-none">
                    <p className="text-sm text-(--subtext)">Inizia con:</p>

                    <Button
                        type="secondary"
                        className="w-full sm:w-auto"
                        icon={
                            <Image
                                src={GoogleIcon}
                                alt="Google Logo"
                                width={20}
                                height={20}
                            />
                        }
                    >
                        Gmail
                    </Button>

                    <Button
                        type="secondary"
                        className="w-full sm:w-auto"
                        icon={
                            <Image
                                src={OutlookIcon}
                                alt="Outlook Logo"
                                width={20}
                                height={20}
                            />
                        }
                    >
                        Outlook
                    </Button>

                    <p className="hidden sm:block text-sm text-(--subtext) opacity-0">
                        Inizia con:
                    </p>
                </div>
            </Reveal>

            <Reveal className="hidden md:block">
                <MiniDashboard />
            </Reveal>

            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-60 px-4">
                <Title className="max-w-180 text-center">
                    Più tempo per le attività che{" "}
                    <span className="text-(--primary)">contano davvero</span>
                </Title>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-60 max-w-6xl w-full px-4">
                    {/* Card 1 */}
                    <Link href="/newmann-mail">
                        <Reveal
                            delay={0}
                            className="bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-8 cursor-pointer hover:scale-101"
                        >
                            <h3 className="text-xl font-semibold text-(--text)">
                                La tua inbox finalmente organizzata
                            </h3>
                            <p className="text-(--subtext) mt-2">
                                Bozze automatiche, labels personalizzate e
                                funzionalità dedicate al team per mantenere ogni
                                conversazione sotto controllo.
                            </p>

                            <div className="mt-6 rounded-xl overflow-hidden">
                                <Image
                                    src={InboxIllustration}
                                    alt="La tua inbox finalmente organizzata"
                                    className="w-full h-auto"
                                />
                            </div>
                        </Reveal>
                    </Link>

                    {/* Card 2 */}
                    <Reveal
                        delay={150}
                        className="bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-8 cursor-pointer hover:scale-101"
                    >
                        <h3 className="text-xl font-semibold text-(--text)">
                            La tua azienda finalmente ottimizzata
                        </h3>
                        <p className="text-(--subtext) mt-2">
                            Grazie ai Digital Twin, Newmann può apprendere i
                            processi aziendali e automatizzare attività
                            ripetitive.
                        </p>

                        <div className="mt-6 rounded-xl overflow-hidden">
                            <Image
                                src={AziendaIllustration}
                                alt="La tua azienda finalmente ottimizzata"
                                className="w-full h-auto"
                            />
                        </div>
                    </Reveal>
                </div>
            </Reveal>

            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-60 bg-(--section-bg) py-10 md:py-20 px-4 rounded-[40px] md:rounded-[80px]">
                <Title className="max-w-180 text-center">
                    Migliora le performance{" "}
                    <span className="text-(--primary)">lavorative</span>
                </Title>

                <p className="text-center text-(--subtext) text-md mt-4">
                    Risultati che otterrai con Newmann
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

            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-60 px-4">
                <Title className="max-w-180 text-center">
                    Sistemi di sicurezza enterprise per la{" "}
                    <span className="text-(--primary)">
                        protezione dei tuoi dati
                    </span>
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

            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-60 px-4">
                <Title className="max-w-180 text-center">
                    Amato da team di{" "}
                    <span className="text-(--primary)">ogni dimensione</span>
                </Title>

                <p className="text-center text-(--subtext) mt-4">
                    Molte aziende utilizzano già l&apos;automazione di Newmann.
                </p>

                <div className="mt-8 md:mt-16 w-full">
                    <Testimonials />
                </div>
            </Reveal>

            <Reveal className="mt-24 md:mt-60 max-w-6xl w-full mx-auto px-4">
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
                            <p className="text-sm text-(--subtext)">
                                Inizia con:
                            </p>

                            <Button
                                type="secondary"
                                className="w-full sm:w-auto"
                                icon={
                                    <Image
                                        src={GoogleIcon}
                                        alt="Google Logo"
                                        width={20}
                                        height={20}
                                    />
                                }
                            >
                                Gmail
                            </Button>

                            <Button
                                type="secondary"
                                className="w-full sm:w-auto"
                                icon={
                                    <Image
                                        src={OutlookIcon}
                                        alt="Outlook Logo"
                                        width={20}
                                        height={20}
                                    />
                                }
                            >
                                Outlook
                            </Button>

                            <p className="hidden sm:block text-sm text-(--subtext) opacity-0">
                                Inizia con:
                            </p>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
