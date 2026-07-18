import type { Locale } from "@/i18n/LocaleContext";

export const homeDictionary = {
    it: {
        hero: {
            titleStart: "Newmann | Rispondi alle email nella ",
            titleHighlight: "metà del tempo",
            subtitle:
                "L'assistente AI che capisce il contesto, suggerisce le risposte giuste e tiene la tua inbox sotto controllo.",
            cta: "Inizia ora",
        },
        productivity: {
            titleStart: "Più tempo per le attività che ",
            titleHighlight: "contano davvero",
            cta: "Scopri di più",
            card1: {
                title: "La tua inbox finalmente organizzata",
                description:
                    "Classifica come desideri le tue email in base al contenuto creando etichette personalizzate",
            },
            card2: {
                title: "Le risposte, più veloci",
                description:
                    "Rispondi più velocemente a tutte le tue email tramite bozze di risposta automatiche già pronte",
            },
        },
        performance: {
            titleStart: "Migliora le tue ",
            titleHighlight: "performance",
            subtitle: "Mediamente un utente Newmann ottiene",
        },
        stats: [
            { value: "+60%", label: "Risposte più rapide" },
            { value: "3,5h", label: "Risparmiate ogni settimana" },
            { value: "-40%", label: "Tempo gestione email" },
        ],
        security: {
            titleStart: "Sistemi di sicurezza ",
            titleHighlight: "enterprise",
            items: [
                {
                    title: "GDPR & AI Act Compliant",
                    description:
                        "Conformità totale al Regolamento Generale sulla Protezione dei Dati e all'AI Act",
                },
                {
                    title: "Privacy by Design",
                    description:
                        "Nessuna vendita dei tuoi dati, nessun profiling. La tua privacy non è negoziabile.",
                },
                {
                    title: "Termini Trasparenti",
                    description:
                        "Condizioni di servizio chiare, senza clausole nascoste o sorprese.",
                },
            ],
            link: "Scopri di più sulla sicurezza",
        },
        closingCta: {
            titleStart:
                "Recupera tempo prezioso e concentrati sulle attività che ",
            titleHighlight: "contano davvero",
            subtitle:
                "Lascia che Newmann si occupi delle email mentre tu fai crescere il tuo business.",
            cta: "Inizia ora",
        },
    },
    en: {
        hero: {
            titleStart: "Newmann | Answer emails in ",
            titleHighlight: "half the time",
            subtitle:
                "The AI assistant that understands context, suggests the right replies, and keeps your inbox under control.",
            cta: "Get started",
        },
        productivity: {
            titleStart: "More time for the work that ",
            titleHighlight: "actually matters",
            cta: "Learn more",
            card1: {
                title: "Your inbox, finally organized",
                description:
                    "Sort your emails by content the way you want, with custom labels you create yourself",
            },
            card2: {
                title: "Faster replies",
                description:
                    "Answer all your emails faster with ready-made automatic draft replies",
            },
        },
        performance: {
            titleStart: "Boost your ",
            titleHighlight: "performance",
            subtitle: "On average, a Newmann user achieves",
        },
        stats: [
            { value: "+60%", label: "Faster replies" },
            { value: "3.5h", label: "Saved every week" },
            { value: "-40%", label: "Time spent on email" },
        ],
        security: {
            titleStart: "Enterprise ",
            titleHighlight: "security systems",
            items: [
                {
                    title: "GDPR & AI Act Compliant",
                    description:
                        "Full compliance with the General Data Protection Regulation and the AI Act",
                },
                {
                    title: "Privacy by Design",
                    description:
                        "No selling your data, no profiling. Your privacy is not negotiable.",
                },
                {
                    title: "Transparent Terms",
                    description:
                        "Clear terms of service, with no hidden clauses or surprises.",
                },
            ],
            link: "Learn more about security",
        },
        closingCta: {
            titleStart: "Reclaim precious time and focus on the work that ",
            titleHighlight: "actually matters",
            subtitle:
                "Let Newmann take care of your email while you grow your business.",
            cta: "Get started",
        },
    },
} satisfies Record<Locale, unknown>;
