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
        securityTitle: "Newmann è sicuro?",
        securityBody:
          "Assolutamente si. Utilizziamo i migliori protocolli di encryption per i tuoi dati e sfruttiamo piattaforme utilizzate dalle più grandi aziende al mondo per tenere i tuoi dati al sicuro.",
        cookieTitle: "Per cosa vengono utilizzati i cookie?",
        cookieBody:
          "Newmann usa cookie funzionali per ricordare le tue preferenze e migliorare l’esperienza utente. Non vengono utilizzati cookie di tracking o pixel di terzi.",
        dataTitle: "Come utilizzate i miei dati personali?",
        dataBody:
          "Raccogliamo email e nome per creare il tuo account. Le informazioni sulle email e sulla tua azienda sono utilizzate per dare contesto alle bozze di risposta ed a Newmie. I tuoi dati non vengono venduti, utilizzati per allenare AI di terze parti, o usati per profilazione.",
        rightsTitle: "Come posso gestire i miei dati?",
        subprocessorsTitle: "Che software di terze parti utilizzate?",
        subprocessorsBody:
          "Usiamo Microsoft Azure (Europa), Pinecone, OpenAI. Tutti firmano Data Processing Agreements.",
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

      readFullPolicy: "Leggi la Privacy Policy Completa",
      contactLabel: "Contatti Privacy:",
    },
    terms: {
      badge: "Termini e Condizioni",
      titleStart: "Termini di Servizio Chiari, ",
      titleHighlight: "Senza Sorprese",
      inBreveTitle: "In Breve",
      inBreve: [
        "Puoi cancellare in qualsiasi momento.",
        "Non condividiamo i tuoi dati. Non li usiamo per addestrare modelli.",
        "Se usi Newmann per scopi illegali, disattiviamo il tuo account.",
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
          description: "30 giorni di notice se è da parte nostra.",
        },
        {
          title: "Responsabilità dei Contenuti",
          description:
            "Sei responsabile della legalità dei tuoi dati e delle email che invii.",
        },
        {
          title: "Modifiche ai Termini",
          description:
            "Ti avviseremo in anticipo in caso di aggiornamenti del contratto.",
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
        securityTitle: "Is Newmann secure?",
        securityBody:
          "Absolutely. We use industry-standard encryption protocols to protect your data and rely on trusted, enterprise-grade platforms used by the world's leading companies to keep your information safe.",
        cookieTitle: "What are cookies used for?",
        cookieBody:
          "Newmann uses functional cookies to remember your preferences and improve user experience. No tracking cookies or third-party pixels are used.",
        dataTitle: "How do you use my personal data?",
        dataBody:
          "We collect your name and email address to create your account. Information about your emails and company is used to provide context for draft replies and Newmie. Your data is never sold, used to train third-party AI models, or used for profiling.",
        rightsTitle: "How can I manage my data?",
        subprocessorsTitle: "What third-party software do you use?",
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
          description:
            "Delete everything within 24 hours, no justification needed.",
        },
        {
          title: "Right to rectification",
          description: "Edit your data whenever you want.",
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
        "You can cancel anytime.",
        "We don't share your data. We don't use it to train models.",
        "If you use Newmann for illegal purposes, we will deactivate your account.",
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
          description: "30 days' notice if it's on our side.",
        },
        {
          title: "Responsibility for Content",
          description:
            "You are responsible for the legality of your data and the emails you send.",
        },
        {
          title: "Changes to Terms",
          description: "We will notify you in advance of any contract updates.",
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
