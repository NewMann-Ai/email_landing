import type { Locale } from "@/i18n/LocaleContext";

export const commonDictionary = {
    it: {
        navbar: {
            products: "Prodotti",
            aiEmailAssistant: "AI Email Assistant",
            newmannMail: "Newmann Mail",
            inboxOrganizer: "Inbox Organizer",
            emailDraftWriter: "Email Draft Writer",
            aziende: "Aziende",
            team: "Team",
            security: "Sicurezza",
            contacts: "Contattaci",
            faq: "FAQ",
            startNow: "Inizia ora",
            menu: "Menu",
        },
        footer: {
            columns: {
                products: "PRODOTTI",
                resources: "RISORSE",
                company: "AZIENDA",
            },
            links: {
                newmannMail: "Newmann mail",
                security: "Sicurezza",
                faq: "FAQ",
                contacts: "Contattaci",
                cookiePolicy: "Cookie Policy",
                privacyPolicy: "Privacy Policy",
                terms: "Termini e Condizioni",
            },
            copyright: "© 2026 Newmann. Tutti i diritti riservati.",
        },
    },
    en: {
        navbar: {
            products: "Products",
            aiEmailAssistant: "AI Email Assistant",
            newmannMail: "Newmann Mail",
            inboxOrganizer: "Inbox Organizer",
            emailDraftWriter: "Email Draft Writer",
            aziende: "Companies",
            team: "Team",
            security: "Security",
            contacts: "Contact us",
            faq: "FAQ",
            startNow: "Get started",
            menu: "Menu",
        },
        footer: {
            columns: {
                products: "PRODUCTS",
                resources: "RESOURCES",
                company: "COMPANY",
            },
            links: {
                newmannMail: "Newmann mail",
                security: "Security",
                faq: "FAQ",
                contacts: "Contact us",
                cookiePolicy: "Cookie Policy",
                privacyPolicy: "Privacy Policy",
                terms: "Terms & Conditions",
            },
            copyright: "© 2026 Newmann. All rights reserved.",
        },
    },
} satisfies Record<Locale, unknown>;
