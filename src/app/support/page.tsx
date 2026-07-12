import Image from "next/image";
import WhiteLogo from "../../assets/images/favicon_white.png";
import Title from "../../components/ui/Title";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import MailIcon from "@/assets/icons/hugeicons/mail";

function ChatIcon({ className }: { className?: string }) {
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
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
            />
        </svg>
    );
}

function BookIcon({ className }: { className?: string }) {
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
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
        </svg>
    );
}

function PlayIcon({ className }: { className?: string }) {
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
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 9v6l5.25-3-5.25-3z"
            />
        </svg>
    );
}

const SUPPORT_CHANNELS = [
    {
        icon: MailIcon,
        title: "Email",
        description: "info@newmann.ai",
        meta: "Response time: < 1 ora",
    },
    {
        icon: ChatIcon,
        title: "Chat Live",
        description: "Disponibile 9-18 CET, Lunedì-Venerdì",
    },
    {
        icon: BookIcon,
        title: "Knowledge Base",
        description: "20+ articoli e guide step-by-step",
    },
    {
        icon: PlayIcon,
        title: "Video Tutorial",
        description: "Setup, best practices, troubleshooting",
    },
];

const SLA_PLANS = [
    {
        name: "Pro",
        response: "Entro 24 ore",
    },
    {
        name: "Team",
        response: "Entro 4 ore",
    },
    {
        name: "Enterprise",
        response: "Account manager dedicato + SLA customizzato",
        highlight: true,
    },
];

export default function Support() {
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
                    Supporto
                </span>

                <Title className="max-w-220 text-center mt-4">
                    Supporto Che Non Ti Fa Impazzire:{" "}
                    <span className="text-(--primary)">
                        Risposte in Meno di 2 Ore
                    </span>
                </Title>
            </Reveal>

            {/* Support channels */}
            <div className="mt-16 max-w-6xl w-full mx-auto px-4">
                <Reveal>
                    <h2 className="text-2xl font-semibold text-(--text)">
                        Canali di Supporto
                    </h2>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    {SUPPORT_CHANNELS.map((channel, i) => (
                        <Reveal
                            key={channel.title}
                            delay={i * 100}
                            className="bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-6 flex items-start gap-4"
                        >
                            <div className="w-11 h-11 rounded-xl bg-(--primary-10) flex items-center justify-center flex-shrink-0">
                                <channel.icon className="w-5 h-5 text-(--primary)" />
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-(--text)">
                                    {channel.title}
                                </h3>
                                <p className="text-sm text-(--subtext) mt-1">
                                    {channel.description}
                                </p>
                                {channel.meta && (
                                    <p className="text-xs text-(--primary) font-medium mt-1">
                                        {channel.meta}
                                    </p>
                                )}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* SLA per plan */}
            <div className="mt-16 max-w-6xl w-full mx-auto px-4">
                <Reveal>
                    <h2 className="text-2xl font-semibold text-(--text)">
                        SLA per Piano
                    </h2>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                    {SLA_PLANS.map((plan, i) => (
                        <Reveal
                            key={plan.name}
                            delay={i * 100}
                            className={`rounded-2xl border p-6 ${
                                plan.highlight
                                    ? "bg-(--section-bg) border-(--primary)"
                                    : "bg-(--bento-bg) border-(--bento-stroke)"
                            }`}
                        >
                            <p className="text-sm font-semibold text-(--primary) uppercase tracking-wide">
                                {plan.name}
                            </p>
                            <p className="text-(--text) mt-2">
                                {plan.response}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </div>

            <Reveal className="flex justify-center mt-10 max-w-6xl w-full mx-auto px-4 mb-32">
                <Button type="primary" className="w-full sm:w-auto">
                    Accedi al Nostro Help Center
                </Button>
            </Reveal>
        </section>
    );
}
