import type { Locale } from "@/i18n/LocaleContext";

export const securityDictionary = {
    it: {
        intro: {
            badge: "Sicurezza",
            titleStart: "Sicurezza Enterprise e Privacy Totale: GDPR, AI Act, ",
            titleHighlight: "Data Retention",
            subtitle:
                "Se vuoi innovazione, devi poterti fidare. Newmann è costruito su tre pilastri di sicurezza fondamentali:",
        },
        pillars: [
            {
                title: "GDPR Compliant",
                description:
                    "Ogni dato che elaboriamo rispetta la normativa europea sul trattamento dei dati personali.",
            },
            {
                title: "AI Act Compliant",
                description:
                    "I nostri modelli AI sono trasparenti e costruiti su framework certificati.",
            },
            {
                title: "Data Retention",
                description:
                    "Newmann non usa i tuoi dati per addestrare i modelli AI. I tuoi dati rimangono tuoi.",
            },
        ],
        infrastructureTitle: "Infrastruttura",
        infrastructure: [
            "Protocolli TLS 1.3 e SHA-256",
            "Database vettoriali Pinecone (enterprise-grade)",
            "Server Microsoft Azure con sede in Europa",
            "Enterprise-grade API Policies",
            "Human-in-the-Loop: un umano rivede sempre le azioni critiche",
        ],
        auditsTitle: "Audit e Certificazioni",
        audits: [
            "SOC 2 Type II in pipeline",
            "Conforme EU Cybersecurity Act",
            "Regular penetration testing",
        ],
        privacy: {
            badge: "Privacy",
            titleStart: "La Tua Privacy ",
            titleHighlight: "Non È Negoziabile",
            sections: {
                cookieTitle: "Cookie e Tracking",
                cookieBody:
                    "Newmann usa cookies funzionali per ricordare le tue preferenze. Zero cookie di tracking. Zero pixel di terzi.",
                dataTitle: "Dati Personali",
                dataBody:
                    "Raccogliamo email e nome per creare il tuo account. Niente vendite a terzi. Niente profiling.",
                rightsTitle: "Diritti",
                subprocessorsTitle: "Subprocessori",
                subprocessorsBody:
                    "Usiamo Microsoft Azure (Europa), Pinecone, OpenAI. Tutti firmano Data Processing Agreements.",
                retentionTitle: "Data Retention",
            },
            rights: [
                {
                    title: "Diritto di accesso",
                    description: "Puoi scaricare tutti i tuoi dati in 1 click.",
                },
                {
                    title: "Diritto di portabilità",
                    description: "Esportare in CSV, JSON, qualsiasi formato.",
                },
                {
                    title: "Diritto all'oblio",
                    description: "Cancella tutto in 24 ore senza giustificazioni.",
                },
                {
                    title: "Diritto di rettifica",
                    description: "Modifica i tuoi dati quando vuoi.",
                },
            ],
            retention: [
                {
                    title: "Email processuate",
                    description: "Cancellate dopo 90 giorni.",
                },
                {
                    title: "Bozze generate",
                    description: "Cancellate su richiesta.",
                },
                {
                    title: "Analytics",
                    description: "Aggregati e anonimizzati.",
                },
            ],
            readFullPolicy: "Leggi la Privacy Policy Completa",
            contactLabel: "Contatti Privacy:",
        },
        terms: {
            badge: "Termini e Condizioni",
            titleStart: "Termini di Servizio Chiari, ",
            titleHighlight: "Senza Sorprese",
            inBreveTitle: "In Breve",
            inBreve: [
                "Paghi mensilmente. Puoi cancellare in qualsiasi momento.",
                "Non condividiamo i tuoi dati. Non li usiamo per addestrare modelli.",
                "Se usi Newmann per cose illegali, smentiamo la relazione.",
            ],
            sectionsTitle: "Sezioni Principali",
            sections: [
                {
                    title: "Uso Accettabile",
                    description: "No spam, no harassment, no illegal activity.",
                },
                {
                    title: "Limitazioni di Responsabilità",
                    description: "Newmann non è responsabile per danni indiretti.",
                },
                {
                    title: "Terminazione",
                    description: "30 giorni di notice per parte.",
                },
                {
                    title: "Indennizzo",
                    description: "Se violi copyright, paghiamo le conseguenze legali.",
                },
                {
                    title: "Modifiche ai Termini",
                    description: "Ti notifico almeno 30 giorni prima.",
                },
                {
                    title: "Legge Applicabile",
                    description: "Legge italiana.",
                },
            ],
            readFullTerms: "Leggi i Termini Completi",
        },
    },
    en: {
        intro: {
            badge: "Security",
            titleStart: "Enterprise Security and Total Privacy: GDPR, AI Act, ",
            titleHighlight: "Data Retention",
            subtitle:
                "If you want innovation, you need to be able to trust it. Newmann is built on three fundamental security pillars:",
        },
        pillars: [
            {
                title: "GDPR Compliant",
                description:
                    "Every piece of data we process complies with European regulations on personal data processing.",
            },
            {
                title: "AI Act Compliant",
                description:
                    "Our AI models are transparent and built on certified frameworks.",
            },
            {
                title: "Data Retention",
                description:
                    "Newmann doesn't use your data to train AI models. Your data stays yours.",
            },
        ],
        infrastructureTitle: "Infrastructure",
        infrastructure: [
            "TLS 1.3 and SHA-256 protocols",
            "Pinecone vector databases (enterprise-grade)",
            "Microsoft Azure servers based in Europe",
            "Enterprise-grade API policies",
            "Human-in-the-Loop: a human always reviews critical actions",
        ],
        auditsTitle: "Audits & Certifications",
        audits: [
            "SOC 2 Type II in pipeline",
            "EU Cybersecurity Act compliant",
            "Regular penetration testing",
        ],
        privacy: {
            badge: "Privacy",
            titleStart: "Your Privacy ",
            titleHighlight: "Is Not Negotiable",
            sections: {
                cookieTitle: "Cookies & Tracking",
                cookieBody:
                    "Newmann uses functional cookies to remember your preferences. Zero tracking cookies. Zero third-party pixels.",
                dataTitle: "Personal Data",
                dataBody:
                    "We collect your email and name to create your account. No selling to third parties. No profiling.",
                rightsTitle: "Rights",
                subprocessorsTitle: "Subprocessors",
                subprocessorsBody:
                    "We use Microsoft Azure (Europe), Pinecone, OpenAI. All of them sign Data Processing Agreements.",
                retentionTitle: "Data Retention",
            },
            rights: [
                {
                    title: "Right of access",
                    description: "You can download all your data in 1 click.",
                },
                {
                    title: "Right to portability",
                    description: "Export to CSV, JSON, any format.",
                },
                {
                    title: "Right to erasure",
                    description: "Delete everything within 24 hours, no justification needed.",
                },
                {
                    title: "Right to rectification",
                    description: "Edit your data whenever you want.",
                },
            ],
            retention: [
                {
                    title: "Processed emails",
                    description: "Deleted after 90 days.",
                },
                {
                    title: "Generated drafts",
                    description: "Deleted on request.",
                },
                {
                    title: "Analytics",
                    description: "Aggregated and anonymized.",
                },
            ],
            readFullPolicy: "Read the Full Privacy Policy",
            contactLabel: "Privacy Contact:",
        },
        terms: {
            badge: "Terms & Conditions",
            titleStart: "Clear Terms of Service, ",
            titleHighlight: "No Surprises",
            inBreveTitle: "In Short",
            inBreve: [
                "You pay monthly. You can cancel anytime.",
                "We don't share your data. We don't use it to train models.",
                "If you use Newmann for illegal activities, we disclaim the relationship.",
            ],
            sectionsTitle: "Main Sections",
            sections: [
                {
                    title: "Acceptable Use",
                    description: "No spam, no harassment, no illegal activity.",
                },
                {
                    title: "Limitation of Liability",
                    description: "Newmann is not liable for indirect damages.",
                },
                {
                    title: "Termination",
                    description: "30 days' notice from either party.",
                },
                {
                    title: "Indemnification",
                    description: "If you infringe copyright, you cover the legal consequences.",
                },
                {
                    title: "Changes to Terms",
                    description: "We'll notify you at least 30 days in advance.",
                },
                {
                    title: "Governing Law",
                    description: "Italian law.",
                },
            ],
            readFullTerms: "Read the Full Terms",
        },
    },
} satisfies Record<Locale, unknown>;
