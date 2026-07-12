import StarIcon from "@/assets/icons/hugeicons/star";

const TESTIMONIALS = [
    {
        name: "Marco Rossi",
        role: "CEO - Pomonia",
        avatar: "conic-gradient(#4285F4 0deg 90deg, #34A853 90deg 180deg, #FBBC05 180deg 270deg, #EA4335 270deg 360deg)",
        text: "I Digital Twin hanno automatizzato i nostri processi di customer support. Il team finalmente si concentra su ciò che conta.",
    },
    {
        name: "Giulia Bianchi",
        role: "COO - Vertex Labs",
        avatar: "conic-gradient(#EA4335 0deg 90deg, #4285F4 90deg 180deg, #34A853 180deg 270deg, #FBBC05 270deg 360deg)",
        text: "Da quando usiamo Newmann le risposte ai clienti sono immediate e sempre coerenti con il nostro tono di voce.",
    },
    {
        name: "Luca Ferrari",
        role: "Founder - Northwind",
        avatar: "conic-gradient(#FBBC05 0deg 90deg, #EA4335 90deg 180deg, #4285F4 180deg 270deg, #34A853 270deg 360deg)",
        text: "L'inbox condivisa e le regole automatiche ci hanno fatto risparmiare ore ogni settimana.",
    },
    {
        name: "Sara Colombo",
        role: "Head of Ops - Delta",
        avatar: "conic-gradient(#34A853 0deg 90deg, #FBBC05 90deg 180deg, #EA4335 180deg 270deg, #4285F4 270deg 360deg)",
        text: "Newmann ha imparato i nostri processi aziendali più velocemente di quanto pensassimo possibile.",
    },
];

function TestimonialCard({
    testimonial,
}: {
    testimonial: (typeof TESTIMONIALS)[number];
}) {
    return (
        <div className="w-110 flex-shrink-0 bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) p-5">
            <div className="flex items-center gap-0.5 text-(--primary)">
                {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} fill="currentColor" className="w-4 h-4" />
                ))}
            </div>

            <p className="text-sm text-(--subtext) mt-3">
                &quot;{testimonial.text}&quot;
            </p>

            <div className="flex items-center gap-2.5 mt-4">
                <div
                    className="w-8 h-8 rounded-full flex-shrink-0"
                    style={{ background: testimonial.avatar }}
                />
                <div className="leading-tight">
                    <p className="text-sm font-semibold text-(--text)">
                        {testimonial.name}
                    </p>
                    <p className="text-xs text-(--subtext)">
                        {testimonial.role}
                    </p>
                </div>
            </div>
        </div>
    );
}

function MarqueeRow({
    direction,
}: {
    direction: "left" | "right";
}) {
    return (
        <div className="flex overflow-hidden">
            <div
                className={`flex gap-6 pr-6 w-max ${
                    direction === "left"
                        ? "animate-marquee-left"
                        : "animate-marquee-right"
                }`}
            >
                {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
                    <TestimonialCard
                        key={`${testimonial.name}-${i}`}
                        testimonial={testimonial}
                    />
                ))}
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <div className="relative w-full">
            <div className="flex flex-col gap-6">
                <MarqueeRow direction="right" />
                <MarqueeRow direction="left" />
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-(--light-bg) to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-(--light-bg) to-transparent" />
        </div>
    );
}
