import Image from "next/image";
import WhiteLogo from "../../assets/images/favicon_white.png";
import Title from "../../components/ui/Title";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function Contacts() {
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
                    Contattaci
                </span>

                <Title className="max-w-220 text-center mt-4">
                    Hai Domande?{" "}
                    <span className="text-(--primary)">
                        Il Team di Newmann è Qui
                    </span>
                </Title>

                <p className="text-center text-(--subtext) mt-10 max-w-180">
                    Se hai una domanda, una critica, o vuoi semplicemente
                    parlare di come Newmann può risolvere il tuo specifico
                    problema aziendale, siamo qui per te.
                </p>

                <a
                    href="mailto:info@newmann.ai"
                    className="text-(--primary) font-semibold mt-4 hover:text-(--primary-hover) transition-colors duration-200"
                >
                    info@newmann.ai
                </a>

                <p className="text-center text-(--subtext) mt-4">
                    Oppure compila il form qua sotto e ti contatteremo entro 3
                    ore.
                </p>
            </Reveal>

            {/* Form */}
            <Reveal className="mt-16 md:mt-20 max-w-2xl w-full mx-auto px-4 mb-32">
                <form className="bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-6 md:p-10 flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="name"
                                className="text-sm font-semibold text-(--text)"
                            >
                                Nome e cognome
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Mario Rossi"
                                className="px-4 py-3 rounded-xl border border-(--bento-stroke) text-sm text-(--text) placeholder-(--placeholder-text) outline-none focus:border-(--primary) transition-colors duration-200"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="email"
                                className="text-sm font-semibold text-(--text)"
                            >
                                Email aziendale
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="mario@azienda.com"
                                className="px-4 py-3 rounded-xl border border-(--bento-stroke) text-sm text-(--text) placeholder-(--placeholder-text) outline-none focus:border-(--primary) transition-colors duration-200"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="company"
                            className="text-sm font-semibold text-(--text)"
                        >
                            Azienda
                        </label>
                        <input
                            id="company"
                            type="text"
                            placeholder="Nome della tua azienda"
                            className="px-4 py-3 rounded-xl border border-(--bento-stroke) text-sm text-(--text) placeholder-(--placeholder-text) outline-none focus:border-(--primary) transition-colors duration-200"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="message"
                            className="text-sm font-semibold text-(--text)"
                        >
                            Messaggio
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            placeholder="Raccontaci il tuo problema aziendale..."
                            className="px-4 py-3 rounded-xl border border-(--bento-stroke) text-sm text-(--text) placeholder-(--placeholder-text) outline-none focus:border-(--primary) transition-colors duration-200 resize-none"
                        />
                    </div>

                    <Button type="primary" className="w-full sm:w-auto">
                        Invia messaggio
                    </Button>
                </form>
            </Reveal>
        </section>
    );
}
