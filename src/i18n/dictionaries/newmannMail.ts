import type { Locale } from "@/i18n/LocaleContext";

export const newmannMailDictionary = {
    it: {
        badge: "Newmann Mail",
        titleStart: "Automizza la Gestione delle ",
        titleHighlight: "Email Aziendali con AI",
        subtitle:
            "Newmann Mail è il software di automazione AI che trasforma il caos delle email in un sistema organizzato ed efficiente. Legge, classifica, organizza e scrive bozze di risposta con il tuo tono al posto tuo direttamente nel tuo provider email.",
        startNow: "Inizia ora",
        draftWriter: {
            titleHighlight: "AI",
            titlePrefix: "Draft Writer",
            quote: "Quante ore al mese spendi a scrivere le stesse risposte?",
            body: "L'Email Draft Writer genera bozze complete, personalizzate e pronte per l'invio. Newmann analizza la storia della conversazione, il tono della tua azienda, il contesto di business e crea una risposta che sembra scritta da te",
            steps: [
                "L'AI legge l'email in arrivo",
                "Consulta la memoria della tua azienda (documenti, linee guida, contatti precedenti)",
                "Genera la tua bozza personalizzata",
                "Tu rivedi, modifichi se necessario e invii",
            ],
            timeSavedLabel: "Tempo risparmiato:",
            timeSavedBody:
                "30 minuti al giorno per dipendente. Moltiplicato per 365 giorni. Moltiplicato per il tuo team.",
            cta: "Inizia ora",
            imageAlt: "Elenco delle bozze scritte dall'AI in attesa di revisione",
        },
        inboxOrganizer: {
            titleHighlight: "Etichette",
            titleSuffix: "Intelligenti",
            quote: "Una inbox disorganizzata è come avere 10.000 fogli sparsi sulla scrivania.",
            body: "Con l'Inbox Organizer di Newmann puoi creare etichette personalizzate in base alle tue esigenze e il sistema classifica automaticamente ogni email in entrata nelle etichette create in base al tipo di contenuto, al mittente e al contesto aziendale.",
            benefits: [
                "Trovi quello che cerchi in 3 secondi, non in 3 minuti",
                "Le email critiche emergono da sole",
                "Ogni conversazione rimane contestualizzata per il tuo team",
                "Niente etichette abbandonate o regole dimenticate",
            ],
            footnote:
                "Perfetto per aziende con alto volume di mail: agenzie, studi professionali, dipartimenti customer service, vendite B2B.",
            cta: "Scopri Come Funziona",
            imageAlt: "Elenco delle etichette create",
        },
        rules: {
            titleStart: "Due modi per smistare ",
            titleHighlight: "la posta",
            body: "Usa un filtro di ricerca classico, come faresti su Gmail, oppure scrivi in linguaggio naturale cosa deve succedere e lascia decidere all'AI in base al contesto della email. Ogni regola si accende e si spegne con un clic.",
            imageAlt: "Elenco delle regole di automazione",
        },
        chat: {
            titleStart: "Parla con la ",
            titleHighlight: "tua inbox",
            body: "Il chatbot Newmie ti permette di migliorare ancora di più l'efficienza nella gestione delle tue email:",
            benefits: [
                "Trova informazioni sparse nella tua inbox. Hai bisogno di quella fattura inviata 6 mesi fa da un fornitore? Chiedi a Newmie e te la ritroverà in 5 secondi.",
                "Scrivi email da zero. Hai bisogno di mandare una mail ma non vuoi perdere tempo scrivendo dal nulla? Scrivi a Newmie e te la genera, tenendo conto del tuo tono e delle email passate",
                "Imposta etichette e regole. Hai bisogno di creare un'etichetta particolare? Descrivi a Newmie ciò che vuoi e te la imposterà, senza che tu debba fare nulla manualmente",
            ],
            imageAlt: "Assistente AI che organizza le email tramite chat",
        },
        personalization: {
            titleStart: "La posta che ",
            titleHighlight: "si adatta a te",
            body: "Tema chiaro o scuro, italiano o inglese, firma personalizzata e molto altro: Newmann si adatta al tuo modo di lavorare, non il contrario. Puoi anche non utilizzare la dashboard Newmann ma direttamente Gmail o Outlook!",
            imageAlt: "Impostazioni di tema, lingua e firma email",
        },
        closingCta: {
            titleStart: "Pronto a lasciare che Newmann si occupi della ",
            titleHighlight: "tua inbox",
            subtitle:
                "Bastano due minuti per collegare la tua email e iniziare a risparmiare tempo.",
            cta: "Inizia ora",
        },
    },
    en: {
        badge: "Newmann Mail",
        titleStart: "Automate Your ",
        titleHighlight: "Business Email with AI",
        subtitle:
            "Newmann Mail is the AI automation software that turns email chaos into an organized, efficient system. It reads, classifies, organizes, and writes reply drafts in your tone on your behalf, directly inside your email provider.",
        startNow: "Get started",
        draftWriter: {
            titleHighlight: "AI",
            titlePrefix: "Draft Writer",
            quote: "How many hours a month do you spend writing the same replies?",
            body: "The Email Draft Writer generates complete, personalized drafts ready to send. Newmann analyzes the conversation history, your company's tone, and the business context to create a reply that sounds like you wrote it",
            steps: [
                "The AI reads the incoming email",
                "Consults your company's memory (documents, guidelines, past contacts)",
                "Generates your personalized draft",
                "You review, edit if needed, and send",
            ],
            timeSavedLabel: "Time saved:",
            timeSavedBody:
                "30 minutes a day per employee. Multiplied by 365 days. Multiplied by your team.",
            cta: "Get started",
            imageAlt: "List of AI-written drafts waiting for review",
        },
        inboxOrganizer: {
            titleHighlight: "Smart",
            titleSuffix: "Labels",
            quote: "A disorganized inbox is like having 10,000 sheets of paper scattered on your desk.",
            body: "With Newmann's Inbox Organizer you can create custom labels based on your needs, and the system automatically classifies every incoming email into the labels you created, based on content type, sender, and business context.",
            benefits: [
                "Find what you're looking for in 3 seconds, not 3 minutes",
                "Critical emails surface on their own",
                "Every conversation stays contextualized for your team",
                "No abandoned labels or forgotten rules",
            ],
            footnote:
                "Perfect for companies with high email volume: agencies, professional firms, customer service departments, B2B sales.",
            cta: "See How It Works",
            imageAlt: "List of created labels",
        },
        rules: {
            titleStart: "Two ways to sort ",
            titleHighlight: "your mail",
            body: "Use a classic search filter, just like on Gmail, or write in natural language what should happen and let the AI decide based on the email's context. Every rule can be switched on and off with a click.",
            imageAlt: "List of automation rules",
        },
        chat: {
            titleStart: "Talk to ",
            titleHighlight: "your inbox",
            body: "The Newmie chatbot lets you get even more efficient at managing your email:",
            benefits: [
                "Find information scattered across your inbox. Need that invoice a supplier sent 6 months ago? Ask Newmie and it'll find it in 5 seconds.",
                "Write emails from scratch. Need to send an email but don't want to waste time writing it from nothing? Ask Newmie and it'll generate it, taking your tone and past emails into account",
                "Set up labels and rules. Need to create a specific label? Describe what you want to Newmie and it'll set it up, with nothing manual required from you",
            ],
            imageAlt: "AI assistant organizing emails through chat",
        },
        personalization: {
            titleStart: "Mail that ",
            titleHighlight: "adapts to you",
            body: "Light or dark theme, Italian or English, custom signature and much more: Newmann adapts to the way you work, not the other way around. You can even skip the Newmann dashboard and work directly from Gmail or Outlook!",
            imageAlt: "Theme, language, and email signature settings",
        },
        closingCta: {
            titleStart: "Ready to let Newmann take care of ",
            titleHighlight: "your inbox",
            subtitle:
                "It only takes two minutes to connect your email and start saving time.",
            cta: "Get started",
        },
    },
} satisfies Record<Locale, unknown>;
