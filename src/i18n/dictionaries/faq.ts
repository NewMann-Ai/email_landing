import type { Locale } from "@/i18n/LocaleContext";

export const faqDictionary = {
    it: {
        badge: "FAQ",
        titleStart: "Domande Frequenti su ",
        titleHighlight: "Newmann",
        items: [
            {
                question: "Newmann ha accesso alle mia mail?",
                answer: "Noi le archiviamo su database, quindi tecnicamente è sbagliata. Piuttosto: Newmann accede alle email esclusivamente per elaborarle e fornire il servizio di automazione. Le email non vengono utilizzate per addestrare i modelli né per finalità diverse da quelle strettamente necessarie al funzionamento dell'automazione",
            },
            {
                question: "Se l'AI genera una bozza sbagliata?",
                answer: "L'AI consiglia una bozza di risposta che può non essere corretta al 100%. Tu puoi rivederla, sistemarla ed inviarla in pochi secondi.",
            },
            {
                question: "Quanto tempo serve prima di vedere risultati?",
                answer: "24-48 ore. Newmann impara dal tuo primo batch di email e inizia a funzionare al 100% entro 2 giorni",
            },
            {
                question: "Posso cancellare i miei dati?",
                answer: "Certo, scrivi a info@newmann.ai e li cancelleremo entro 24 ore.",
            },
            {
                question: "Le email vengono usate per il training dei modelli AI?",
                answer: "Assolutamente no: non usiamo i tuoi dati per addestrare modelli.",
            },
        ],
    },
    en: {
        badge: "FAQ",
        titleStart: "Frequently Asked Questions about ",
        titleHighlight: "Newmann",
        items: [
            {
                question: "Does Newmann have access to my email?",
                answer: "We store it in a database, so technically that's not quite right. More precisely: Newmann accesses email exclusively to process it and provide the automation service. Emails are not used to train models nor for any purpose beyond what's strictly necessary for the automation to work",
            },
            {
                question: "What if the AI generates a wrong draft?",
                answer: "The AI suggests a draft reply that may not be 100% correct. You can review it, fix it, and send it in a few seconds.",
            },
            {
                question: "How long before I see results?",
                answer: "24-48 hours. Newmann learns from your first batch of emails and starts working at 100% within 2 days",
            },
            {
                question: "Can I delete my data?",
                answer: "Of course, write to info@newmann.ai and we'll delete it within 24 hours.",
            },
            {
                question: "Is email used to train AI models?",
                answer: "Absolutely not: we don't use your data to train models.",
            },
        ],
    },
} satisfies Record<Locale, unknown>;
