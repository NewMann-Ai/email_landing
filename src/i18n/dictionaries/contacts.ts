import type { Locale } from "@/i18n/LocaleContext";

export const contactsDictionary = {
    it: {
        badge: "Contattaci",
        titleStart: "Hai Domande? ",
        titleHighlight: "Il Team di Newmann è Qui",
        subtitle:
            "Se hai una domanda, una critica, o vuoi semplicemente parlare di come Newmann può risolvere il tuo specifico problema aziendale, siamo qui per te.",
        orForm: "Oppure compila il form qua sotto e ti contatteremo entro 3 ore.",
        form: {
            nameLabel: "Nome e cognome",
            namePlaceholder: "Mario Rossi",
            emailLabel: "Email aziendale",
            emailPlaceholder: "mario@azienda.com",
            companyLabel: "Azienda",
            companyPlaceholder: "Nome della tua azienda",
            messageLabel: "Messaggio",
            messagePlaceholder: "Raccontaci il tuo problema aziendale...",
            submit: "Invia messaggio",
        },
    },
    en: {
        badge: "Contact us",
        titleStart: "Got Questions? ",
        titleHighlight: "The Newmann Team Is Here",
        subtitle:
            "If you have a question, feedback, or just want to talk about how Newmann can solve your specific business problem, we're here for you.",
        orForm: "Or fill out the form below and we'll get back to you within 3 hours.",
        form: {
            nameLabel: "Full name",
            namePlaceholder: "John Smith",
            emailLabel: "Business email",
            emailPlaceholder: "john@company.com",
            companyLabel: "Company",
            companyPlaceholder: "Your company name",
            messageLabel: "Message",
            messagePlaceholder: "Tell us about your business problem...",
            submit: "Send message",
        },
    },
} satisfies Record<Locale, unknown>;
