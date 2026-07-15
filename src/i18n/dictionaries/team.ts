import type { Locale } from "@/i18n/LocaleContext";

export const teamDictionary = {
    it: {
        badge: "Aziende",
        titleStart: "Gestione Strutturata delle ",
        titleHighlight: "Aziende",
        subtitle:
            "La funzionalità Aziende permette di strutturare il workspace aziendale in dipartimenti, con contesti AI indipendenti e configurazione granulare delle automazioni. Newmann non impara solo dal singolo utente: impara dalla tua azienda, dalle vostre procedure.",
        featuresTitleStart: "Cosa Puoi ",
        featuresTitleHighlight: "Fare",
        features: [
            {
                title: "Creazione di Dipartimenti e Team",
                points: [
                    "Dividi il workspace aziendale in Teams come: Sales, Customer Service, Operations, ecc. ",
                ],
            },
            {
                title: "Contesto AI Multi-Livello",
                points: [
                    "Contesto Individuale: Newmann impara dallo storico email di ogni singola persona",
                    "Contesto Aziendale: Newmann accede ai documenti, alle linee guida, alle policy di tutta l'azienda",
                    "Sotto-contesti Custom: puoi creare contesti specifici per progetto, cliente, o procedura",
                ],
                result: "Bozze che rispecchiano il tuo tono + il tono del team + il tono dell'azienda",
            },
            {
                title: "Gestione degli Utenti",
                points: [
                    "Aggiungi utenti tramite whitelist manuale (controllo totale)",
                    "Configura istruzioni personalizzate per singolo utente",
                    "Setup rapido via dashboard admin avanzata",
                ],
            },
        ],
        resultLabel: "Risultato",
        closingCta: {
            titleStart: "Pronto a far ",
            titleHighlight: "scalare il tuo team",
            subtitle:
                "Struttura dipartimenti, contesti AI e utenti in pochi minuti.",
        },
        startNow: "Inizia ora",
    },
    en: {
        badge: "Companies",
        titleStart: "Structured Management for ",
        titleHighlight: "Companies",
        subtitle:
            "The Companies feature lets you structure your company workspace into departments, with independent AI contexts and granular automation settings. Newmann doesn't just learn from the individual user: it learns from your company, from your procedures.",
        featuresTitleStart: "What You Can ",
        featuresTitleHighlight: "Do",
        features: [
            {
                title: "Create Departments and Teams",
                points: [
                    "Split your company workspace into Teams such as Sales, Customer Service, Operations, etc.",
                ],
            },
            {
                title: "Multi-Level AI Context",
                points: [
                    "Individual context: Newmann learns from each person's email history",
                    "Company context: Newmann accesses documents, guidelines, and policies for the whole company",
                    "Custom sub-contexts: create contexts specific to a project, client, or procedure",
                ],
                result: "Drafts that reflect your tone + your team's tone + your company's tone",
            },
            {
                title: "User Management",
                points: [
                    "Add users via manual whitelist (full control)",
                    "Configure custom instructions per user",
                    "Quick setup via the advanced admin dashboard",
                ],
            },
        ],
        resultLabel: "Result",
        closingCta: {
            titleStart: "Ready to ",
            titleHighlight: "scale your team",
            subtitle: "Set up departments, AI contexts, and users in minutes.",
        },
        startNow: "Get started",
    },
} satisfies Record<Locale, unknown>;
