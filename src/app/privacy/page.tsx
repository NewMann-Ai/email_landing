import Image from "next/image";
import Link from "next/link";
import WhiteLogo from "../../assets/images/favicon_white.png";
import Title from "../../components/ui/Title";
import Reveal from "@/components/ui/Reveal";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
    title: "Privacy Policy",
    description:
        "Come Newmann gestisce i tuoi dati: retention limitata, diritti GDPR (accesso, portabilità, oblio, rettifica) e zero training sui tuoi contenuti.",
    path: "/privacy",
    keywords: [
        "privacy policy Newmann",
        "GDPR Newmann",
        "diritti utente",
        "gestione dati email AI",
    ],
});

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
    );
}

function Section({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <Reveal className="mt-12">
            <h2 className="text-xl font-semibold text-(--text)">{title}</h2>
            <div className="text-(--subtext) mt-3">{children}</div>
        </Reveal>
    );
}

function SubSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="mt-6">
            <h3 className="text-base font-semibold text-(--text)">{title}</h3>
            <div className="text-(--subtext) mt-2">{children}</div>
        </div>
    );
}

function BulletList({
    items,
}: {
    items: { title: string; description: string }[];
}) {
    return (
        <ul className="flex flex-col gap-3">
            {items.map((item) => (
                <li key={item.title} className="flex items-start gap-2">
                    <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                    <span>
                        <span className="text-(--text) font-semibold">
                            {item.title}:
                        </span>{" "}
                        {item.description}
                    </span>
                </li>
            ))}
        </ul>
    );
}

function CheckList({ items }: { items: string[] }) {
    return (
        <ul className="flex flex-col gap-3">
            {items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

function DataTable({
    columns,
    rows,
}: {
    columns: string[];
    rows: string[][];
}) {
    return (
        <div className="overflow-x-auto rounded-2xl border border-(--bento-stroke)">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-(--bento-bg)">
                        {columns.map((col) => (
                            <th
                                key={col}
                                className="p-4 text-sm font-semibold text-(--text) border-b border-(--bento-stroke)"
                            >
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i}>
                            {row.map((cell, j) => (
                                <td
                                    key={j}
                                    className="p-4 text-sm text-(--subtext) border-b border-(--bento-stroke) last:border-b-0"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const ACCOUNT_DATA = [
    "Name",
    "Email address",
    "Company name",
    "Role within organization",
    "Authentication data (via Google or Microsoft OAuth)",
];

const COMMUNICATION_DATA = [
    "Email metadata (sender, recipient, subject, timestamps)",
    "Email content and body",
    "Attachments",
    "Communication history",
];

const TECHNICAL_DATA = [
    "IP address",
    "Browser type and version",
    "Device information",
    "System and access logs",
    "Usage data related to platform interactions",
];

const PROCESSING_PURPOSES = [
    {
        title: "Platform Operation",
        description:
            "to provide access to the Newmann platform and enable email automation services.",
    },
    {
        title: "AI Processing and Automation",
        description:
            "to analyze incoming communications and generate draft responses based on configured rules.",
    },
    {
        title: "Account Management",
        description:
            "to create and manage user accounts, authenticate access, and ensure platform security.",
    },
    {
        title: "Customer Support",
        description:
            "to provide assistance and respond to support requests.",
    },
    {
        title: "Service Improvement",
        description:
            "to improve the performance, reliability, and quality of the platform using aggregated and anonymized usage data.",
    },
    {
        title: "AI Cost Tracking",
        description:
            "to monitor per-user AI token consumption for internal quota management.",
    },
    {
        title: "Legal Compliance",
        description:
            "to comply with legal obligations and protect our legal rights.",
    },
];

const LEGAL_BASIS_COLUMNS = ["Purpose", "Legal Basis"];
const LEGAL_BASIS_ROWS = [
    ["Platform functionality", "Performance of a contract (Art. 6(1)(b))"],
    ["Account management", "Performance of a contract (Art. 6(1)(b))"],
    ["Customer support", "Legitimate interest (Art. 6(1)(f))"],
    ["Platform security", "Legitimate interest (Art. 6(1)(f))"],
    ["Analytics (PostHog)", "Consent (Art. 6(1)(a))"],
    ["AI cost tracking", "Legitimate interest (Art. 6(1)(f))"],
    ["Legal compliance", "Legal obligation (Art. 6(1)(c))"],
];

const AI_SAFEGUARDS = [
    "The system does not send emails automatically.",
    "All outgoing communications require explicit user approval.",
    "AI outputs are suggestions only and remain under full user control.",
];

const AI_PROVIDERS = [
    {
        title: "Model Training",
        description:
            "OpenAI does NOT use data submitted through its API to train or improve its AI models.",
    },
    {
        title: "Data Retention",
        description:
            "In accordance with OpenAI's API policies, data sent via the API is retained by OpenAI for up to 30 days solely for the purpose of identifying abuse and misuse. After this period, the data is deleted from their systems.",
    },
    {
        title: "Google API Data (Limited Use)",
        description:
            "Newmann's use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements. We do not use your Gmail data to train generalized AI models.",
    },
];

const RETENTION_COLUMNS = ["Data Type", "Retention Period"];
const RETENTION_ROWS = [
    [
        "Email data",
        "Managed via a rolling storage system (FIFO logic); oldest data is deleted as new data is ingested",
    ],
    [
        "Account data",
        "Duration of the service relationship; deleted upon account deletion request",
    ],
    ["Technical logs", "7 days"],
    ["Analytics data (PostHog)", "1 year"],
    ["AI cost/usage data", "Duration of the service relationship"],
];

const SUBPROCESSOR_COLUMNS = ["Provider", "Role", "Data Processed"];
const SUBPROCESSOR_ROWS = [
    ["Google / Microsoft", "Authentication (OAuth)", "Account identity data"],
    [
        "OpenAI",
        "AI inference (GPT-4o mini)",
        "Email content, body, attachment content for AI processing",
    ],
    ["Google Cloud", "Backend infrastructure", "All platform data (hosting)"],
    ["Render", "Backend hosting", "Application and log data"],
    ["Vercel", "Frontend hosting", "Web traffic, page view data"],
    ["PostHog", "Product analytics", "Usage and behavioral data"],
    [
        "Pinecone",
        "Vector database",
        "Semantic embeddings of email content",
    ],
];

const OPENAI_RETENTION_SAFEGUARDS = [
    "Data is transmitted securely via HTTPS/TLS encryption.",
    "OpenAI acts as a sub-processor under the terms of our agreement, maintaining safety standards compliant with global data protection regulations.",
    "Only the minimum data necessary to fulfill your request (e.g., the specific email thread) is sent for processing.",
];

const INTERNATIONAL_TRANSFERS = [
    {
        title: "OpenAI",
        description:
            "United States – covered by Standard Contractual Clauses (SCCs)",
    },
    {
        title: "Google Cloud (Gmail API)",
        description:
            "Frankfurt, EU (europe-west3) – no transfer outside the EEA, no SCCs needed",
    },
    {
        title: "Vercel",
        description: "United States – covered by Standard Contractual Clauses (SCCs)",
    },
    {
        title: "Render",
        description: "United States – covered by Standard Contractual Clauses (SCCs)",
    },
    {
        title: "PostHog",
        description:
            "European Union – data processed on EU Cloud (eu.posthog.com), no transfer outside the EEA",
    },
    {
        title: "Pinecone",
        description: "United States – covered by Standard Contractual Clauses (SCCs)",
    },
];

const DATA_SECURITY_MEASURES = [
    "Encryption in transit (HTTPS/TLS)",
    "Encryption at rest — Supabase, Render (Frankfurt, EU), and Pinecone all encrypt stored data at rest by default (AES-256).",
    "Access control and role-based permissions",
    "Monitoring and structured logging",
    "Regular security assessments",
];

const CUSTOMER_RESPONSIBILITIES = [
    "ensuring they have a lawful basis for connecting their email systems to the platform",
    "informing their own data subjects where required by applicable law",
    "configuring the platform in a manner consistent with their data protection obligations",
];

const DATA_SUBJECT_RIGHTS = [
    {
        title: "Access",
        description: "obtain a copy of their personal data",
    },
    {
        title: "Rectification",
        description: "request correction of inaccurate data",
    },
    {
        title: "Erasure",
        description: "request deletion of personal data",
    },
    {
        title: "Restriction",
        description: "limit how their data is processed",
    },
    {
        title: "Objection",
        description: "object to processing based on legitimate interest",
    },
    {
        title: "Portability",
        description:
            "receive their data in a structured, machine-readable format",
    },
    {
        title: "Withdraw consent",
        description: "at any time, where processing is based on consent",
    },
];

export default function Privacy() {
    return (
        <section className="relative overflow-hidden">
            <Image
                src={WhiteLogo}
                alt=""
                aria-hidden={true}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/4 w-1/2 h-auto rotate-75 opacity-50 -z-10"
            />

            {/* Intro */}
            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-60 px-4">
                <span className="text-(--primary) bg-(--primary-10) border border-(--primary) rounded-2xl px-4 py-1 text-sm">
                    Privacy Policy
                </span>

                <Title as={1} className="max-w-220 text-center mt-4">
                    Newmann{" "}
                    <span className="text-(--primary)">Privacy Policy</span>
                </Title>

                <p className="text-center text-(--subtext) mt-6">
                    Internal Document · v1.0
                </p>
                <p className="text-center text-(--subtext) text-sm mt-1">
                    Last updated: May 2026
                </p>
            </Reveal>

            <div className="max-w-3xl w-full mx-auto px-4 mb-32">
                <Section title="1. Introduction">
                    <p>
                        This Privacy Policy explains how Newmann
                        (&ldquo;Newmann&rdquo;, &ldquo;we&rdquo;,
                        &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects, uses,
                        stores, and protects personal data when users access
                        or use our software platform and related services.
                    </p>
                    <p className="mt-3">
                        Newmann is a Software-as-a-Service (SaaS) platform
                        designed to assist users in managing their email
                        inbox through categorization and AI-assisted response
                        generation.
                    </p>
                    <p className="mt-3">
                        We are committed to processing personal data in
                        compliance with the General Data Protection
                        Regulation (EU) 2016/679 (&ldquo;GDPR&rdquo;) and
                        other applicable data protection laws.
                    </p>
                </Section>

                <Section title="2. Data Controller">
                    <p>
                        The Data Controller responsible for processing
                        personal data is:
                    </p>

                    <ul className="flex flex-col gap-3 mt-3">
                        <li className="flex items-start gap-2">
                            <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                            <span>
                                <span className="text-(--text) font-semibold">
                                    Name:
                                </span>{" "}
                                Newmann
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                            <span>
                                <span className="text-(--text) font-semibold">
                                    Email:
                                </span>{" "}
                                <a
                                    href="mailto:info@newmann.ai"
                                    className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
                                >
                                    info@newmann.ai
                                </a>
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                            <span>
                                <span className="text-(--text) font-semibold">
                                    Website:
                                </span>{" "}
                                <a
                                    href="https://newmann.ai"
                                    className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
                                >
                                    https://newmann.ai
                                </a>
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                            <span>
                                <span className="text-(--text) font-semibold">
                                    For any privacy-related requests:
                                </span>{" "}
                                <a
                                    href="mailto:info@newmann.ai"
                                    className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
                                >
                                    info@newmann.ai
                                </a>
                            </span>
                        </li>
                    </ul>

                    <p className="mt-3">
                        Once incorporated, this section will be updated with
                        full legal details.
                    </p>

                    <SubSection title="2.1 Changes to This Policy and Your Duty to Inform Us">
                        <p>
                            This version was last updated on 06/05/2026. If
                            you continue to use the platform after changes
                            are posted, you are considered to have accepted
                            the updated policy. Please keep us informed if
                            your personal data changes during your
                            relationship with us.
                        </p>
                    </SubSection>
                </Section>

                <Section title="3. Role of Newmann (Controller vs. Processor)">
                    <p>Depending on the context, Newmann acts as:</p>

                    <SubSection title="3.1 Data Controller">
                        <p>
                            For account creation and management, platform
                            access and authentication, support
                            communications, and platform analytics.
                        </p>
                    </SubSection>

                    <SubSection title="3.2 Data Processor">
                        <p>
                            For email content processed through the platform
                            on behalf of the customer. In these cases, the
                            customer remains the Data Controller and Newmann
                            processes data strictly on their behalf. The
                            standard Data Processing agreement is included
                            within the Terms of Service, available directly
                            on the website. For business customers requiring
                            a formal, signed document, a specific Data
                            Processing Agreement (DPA) is available upon
                            request by contacting{" "}
                            <a
                                href="mailto:info@newmann.ai"
                                className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
                            >
                                info@newmann.ai
                            </a>
                            .
                        </p>
                    </SubSection>
                </Section>

                <Section title="4. Categories of Data Collected">
                    <p>
                        We may create aggregated, de-identified, or
                        anonymized data from personal data we collect, and
                        may use or share such data for lawful business
                        purposes in a way that cannot identify any
                        individual.
                    </p>

                    <SubSection title="4.1 Account and Identification Data">
                        <CheckList items={ACCOUNT_DATA} />
                    </SubSection>

                    <SubSection title="4.2 Communication Data">
                        <p>
                            When the platform is connected to email systems
                            (e.g. Gmail), the following may be processed:
                        </p>

                        <div className="mt-3">
                            <CheckList items={COMMUNICATION_DATA} />
                        </div>

                        <p className="mt-3">
                            These data are processed solely to enable the
                            automation services provided by Newmann. This may
                            include personal data of third parties not
                            directly registered on the platform.
                        </p>
                    </SubSection>

                    <SubSection title="4.3 Technical Data">
                        <CheckList items={TECHNICAL_DATA} />
                    </SubSection>

                    <SubSection title="4.4 Analytics Data">
                        <p>
                            We collect data about how users interact with the
                            platform using PostHog, a product analytics tool.
                            This includes pages visited, features used,
                            session duration, and performance metrics.
                            PostHog stores data using a first-party cookie,
                            localStorage, and sessionStorage in the
                            user&apos;s browser. Analytics data is only
                            collected after explicit user consent. For more
                            detail, see our{" "}
                            <Link
                                href="/cookies"
                                className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
                            >
                                Cookie Policy
                            </Link>
                            .
                        </p>
                    </SubSection>

                    <SubSection title="4.5 AI Cost and Usage Data">
                        <p>
                            We track per-user consumption of AI services
                            (token usage and associated costs) for internal
                            billing management, quota enforcement, and
                            service sustainability. This data is stored in
                            our database and is not shared with third
                            parties.
                        </p>
                    </SubSection>
                </Section>

                <Section title="5. How We Use Your Personal Data">
                    <p>
                        We use personal data only when the law allows. The
                        primary legal grounds are: performance of a contract
                        with you, our legitimate interests in operating and
                        improving the platform, and compliance with legal
                        obligations.
                    </p>

                    <SubSection title="5.1 Purposes of Processing">
                        <BulletList items={PROCESSING_PURPOSES} />
                    </SubSection>

                    <p className="mt-3">
                        User data is not used to train public AI models.
                        Aggregated, anonymized usage patterns may be used
                        internally to improve platform performance.
                    </p>
                </Section>

                <Section title="6. Legal Basis for Processing">
                    <DataTable
                        columns={LEGAL_BASIS_COLUMNS}
                        rows={LEGAL_BASIS_ROWS}
                    />

                    <p className="mt-3">
                        Where processing is based on consent, users may
                        withdraw it at any time via the cookie banner or by
                        contacting{" "}
                        <a
                            href="mailto:info@newmann.ai"
                            className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
                        >
                            info@newmann.ai
                        </a>
                        .
                    </p>
                </Section>

                <Section title="7. AI and Automated Processing">
                    <p>
                        Newmann uses artificial intelligence technologies to
                        categorize emails, assess whether a response may be
                        needed, and generate draft replies using natural
                        language processing, contextual analysis, and
                        semantic vector search (Pinecone).
                    </p>

                    <p className="mt-3 text-(--text) font-semibold">
                        Important safeguards:
                    </p>

                    <div className="mt-3">
                        <CheckList items={AI_SAFEGUARDS} />
                    </div>

                    <p className="mt-3">
                        Newmann does not carry out fully automated
                        decision-making with legal or similarly significant
                        effects as defined under Article 22 GDPR.
                    </p>
                </Section>

                <Section title="8. Use of AI Providers">
                    <p>
                        Newmann utilizes OpenAI (GPT-4o mini) for AI
                        inference and processing.
                    </p>

                    <div className="mt-3">
                        <BulletList items={AI_PROVIDERS} />
                    </div>
                </Section>

                <Section title="9. Data Retention">
                    <p>
                        Personal data are retained only as long as necessary
                        to provide the services or as required by law.
                    </p>

                    <div className="mt-3">
                        <DataTable
                            columns={RETENTION_COLUMNS}
                            rows={RETENTION_ROWS}
                        />
                    </div>

                    <p className="mt-3">
                        Users may request deletion of their data at any time
                        by contacting{" "}
                        <a
                            href="mailto:info@newmann.ai"
                            className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
                        >
                            info@newmann.ai
                        </a>
                        .
                    </p>
                </Section>

                <Section title="10. Data Sharing and Sub-processors">
                    <p>
                        We share data only with trusted third-party providers
                        necessary to operate the platform. All providers are
                        bound by contractual safeguards consistent with GDPR
                        requirements.
                    </p>

                    <div className="mt-3">
                        <DataTable
                            columns={SUBPROCESSOR_COLUMNS}
                            rows={SUBPROCESSOR_ROWS}
                        />
                    </div>

                    <p className="mt-3">
                        A full list of sub-processors is available upon
                        request at{" "}
                        <a
                            href="mailto:info@newmann.ai"
                            className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
                        >
                            info@newmann.ai
                        </a>
                        .
                    </p>

                    <SubSection title="10.1 Data Retention with OpenAI">
                        <p>
                            We share data with OpenAI solely to provide the
                            AI-powered features of the platform. We ensure
                            that:
                        </p>

                        <div className="mt-3">
                            <CheckList items={OPENAI_RETENTION_SAFEGUARDS} />
                        </div>
                    </SubSection>
                </Section>

                <Section title="11. International Data Transfers">
                    <p>
                        Some service providers may process data outside the
                        European Economic Area (EEA). The primary locations
                        are:
                    </p>

                    <div className="mt-3">
                        <BulletList items={INTERNATIONAL_TRANSFERS} />
                    </div>

                    <p className="mt-3">
                        Where transfers occur outside the EEA, we ensure
                        appropriate safeguards are in place, including
                        Standard Contractual Clauses (SCCs) and, where
                        applicable, adequacy decisions by the European
                        Commission.
                    </p>
                </Section>

                <Section title="12. Data Security">
                    <p>
                        We implement appropriate technical and organizational
                        measures to protect personal data, including:
                    </p>

                    <div className="mt-3">
                        <CheckList items={DATA_SECURITY_MEASURES} />
                    </div>

                    <p className="mt-3">
                        Access to personal data is limited to authorized
                        personnel with a business need. All personnel with
                        access are subject to confidentiality obligations.
                    </p>

                    <p className="mt-3">
                        We have procedures in place to detect, report, and
                        investigate personal data breaches, and will notify
                        affected individuals and relevant authorities where
                        legally required.
                    </p>
                </Section>

                <Section title="13. Customer Responsibilities">
                    <p>Customers using Newmann are responsible for:</p>

                    <div className="mt-3">
                        <CheckList items={CUSTOMER_RESPONSIBILITIES} />
                    </div>
                </Section>

                <Section title="14. Rights of Data Subjects">
                    <p>
                        Individuals whose personal data are processed have
                        the right to:
                    </p>

                    <div className="mt-3">
                        <BulletList items={DATA_SUBJECT_RIGHTS} />
                    </div>

                    <p className="mt-3">
                        All requests may be submitted to:{" "}
                        <a
                            href="mailto:info@newmann.ai"
                            className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
                        >
                            info@newmann.ai
                        </a>
                        . We will respond within 30 days.
                    </p>
                </Section>

                <Section title="15. Complaints">
                    <p>
                        Users have the right to lodge a complaint with the
                        relevant supervisory authority. In Italy, this is the
                        Garante per la Protezione dei Dati Personali (
                        <a
                            href="https://www.garanteprivacy.it"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
                        >
                            www.garanteprivacy.it
                        </a>
                        ).
                    </p>
                </Section>

                <Section title="16. Changes to This Policy">
                    <p>
                        We may update this Privacy Policy periodically. Any
                        changes will be published on this page with an
                        updated revision date. Continued use of the platform
                        after changes are posted constitutes acceptance of
                        the updated policy.
                    </p>
                </Section>
            </div>
        </section>
    );
}
