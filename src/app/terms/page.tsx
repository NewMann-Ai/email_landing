import Image from "next/image";
import WhiteLogo from "../../assets/images/favicon_white.png";
import Title from "../../components/ui/Title";
import Reveal from "@/components/ui/Reveal";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
    title: "Terms of Service",
    description:
        "Newmann Terms of Service: acceptable use, service description, data protection, AI providers, liability, termination, and the Data Processing Agreement.",
    path: "/terms",
    keywords: [
        "termini di servizio Newmann",
        "condizioni d'uso",
        "termini di utilizzo email AI",
        "data processing agreement",
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

const RESTRICTED_MATERIAL = [
    "is unlawful, harmful, threatening, defamatory, obscene, infringing, harassing, or racially or ethnically offensive;",
    "facilitates illegal activity;",
    "depicts sexually explicit images;",
    "promotes unlawful violence;",
    "is discriminatory based on race, gender, colour, religious belief, sexual orientation, or disability; or",
    "is otherwise illegal or causes damage or injury to any person or property.",
];

const PROHIBITED_USE = [
    "attempt to copy, modify, duplicate, create derivative works from, frame, mirror, republish, download, display, transmit, or distribute all or any portion of the Software or Documentation in any form or by any means;",
    "attempt to de-compile, reverse engineer, or otherwise reduce to human-perceivable form all or any part of the Software;",
    "access the Service in order to build a product or service which competes with the Service;",
    "use the Service to provide services to third parties on a white-label or resale basis without prior written consent;",
    "license, sell, rent, lease, transfer, assign, or otherwise commercially exploit the Service to any third party;",
    "introduce or permit the introduction of any virus or malicious code into Newmann's systems.",
];

const SERVICE_CAPABILITIES = [
    "automatically categorise and label incoming emails using customisable, instruction-based labels;",
    "generate AI-assisted draft replies to incoming emails;",
    "search and retrieve information from past communications.",
];

const AVAILABILITY_EXCEPTIONS = [
    "planned maintenance, of which Newmann will provide reasonable advance notice where possible; and",
    "unscheduled maintenance or downtime caused by circumstances beyond Newmann's reasonable control.",
];

const AI_PROVIDER_TERMS = [
    {
        title: "Data Retention",
        description:
            "In accordance with OpenAI's API policies, data sent via the API is retained by OpenAI for up to 30 days solely for the purpose of identifying abuse and misuse. After this period, the data is deleted from their systems.",
    },
    {
        title: "Model Training",
        description:
            "OpenAI does not use data submitted through its API to train or improve its AI models.",
    },
    {
        title: "Google API Data (Limited Use)",
        description:
            "Newmann's use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements. Newmann does not use Gmail data to train generalised AI models.",
    },
];

const USER_RESPONSIBILITIES = [
    "shall provide Newmann with all necessary cooperation and access to information required to provide the Service;",
    "is solely responsible for ensuring it has a lawful basis for connecting its email systems to the Service and for processing any personal data of third parties (including email correspondents) through the platform;",
    "shall comply with all applicable laws and regulations in connection with its use of the Service;",
    "is solely responsible for ensuring that any email content submitted to the Service is accurate, complete, and lawfully held;",
    "shall not use the Service for any unlawful or fraudulent purpose; and",
    "is solely responsible for any actions taken on the basis of AI-generated outputs produced by the Service.",
];

const LIABILITY_LIMITS = [
    "Newmann shall not be liable for any loss of profits, loss of data, loss of business, or any indirect, incidental, special, or consequential loss arising out of or in connection with this agreement, even if advised of the possibility of such damages;",
    "Newmann's total aggregate liability under or in connection with this agreement shall be limited to the greater of €500 or the total subscription fees paid by the User in the three (3) months preceding the event giving rise to the claim.",
];

const TERMINATION_GROUNDS = [
    "by Newmann, upon 30 days' written notice to the User;",
    "by either party with immediate effect if the other party commits a material breach of this agreement and, where the breach is capable of remedy, fails to remedy it within 30 days of written notice;",
    "by the User at any time by cancelling their account through the platform (once this functionality is made available within the platform interface);",
    "with immediate effect if the User breaches clause 2 of this agreement.",
];

const DPA_USER_WARRANTIES = [
    "all Personal Data processed by Newmann on the User's behalf has been collected and is processed in accordance with Data Protection Laws;",
    "the User has all necessary consents, legal bases, and authorisations in place to enable the lawful transfer of Personal Data to Newmann for the duration and purposes of the agreement; and",
    "all instructions given by the User to Newmann in respect of the processing of Personal Data shall comply with Data Protection Laws.",
];

const DPA_PROCESSOR_OBLIGATIONS = [
    "only process Personal Data in accordance with the User's lawful, documented, and reasonable instructions, unless required to do so by applicable law;",
    "inform the User if, in Newmann's opinion, an instruction infringes Data Protection Laws;",
    "implement appropriate technical and organisational measures to ensure a level of security appropriate to the risk, including protection against accidental or unlawful destruction, loss, alteration, or unauthorised disclosure of, or access to, Personal Data;",
    "provide reasonable assistance and cooperation to the User in responding to data subject requests and in meeting the User's obligations under Data Protection Laws, including in respect of security, breach notification, Data Protection Impact Assessments, and prior consultation with supervisory authorities;",
    "notify the User without undue delay upon becoming aware of a Personal Data breach;",
    "ensure that all Newmann personnel authorised to process Personal Data are subject to appropriate confidentiality obligations;",
    "maintain written records of all categories of processing activities carried out on the User's behalf, as required by applicable law; and",
    "upon written request, delete or return Personal Data to the User within a reasonable period after the end of the provision of the Service, unless retention is required by applicable law.",
];

const SUBPROCESSOR_COLUMNS = ["Provider", "Role", "Data Processed"];
const SUBPROCESSOR_ROWS = [
    ["Google / Microsoft", "Authentication (OAuth)", "Account identity data"],
    ["OpenAI", "AI inference (GPT-4o mini)", "Email content snippets"],
    ["Google Cloud", "Backend infrastructure", "All platform data"],
    ["Microsoft Azure", "Backend hosting", "Application and log data"],
    ["Vercel", "Frontend hosting", "Web traffic data"],
    ["PostHog", "Product analytics", "Usage and behavioural data"],
    ["Pinecone", "Vector database", "Semantic embeddings of email content"],
];

const AUDIT_CONDITIONS = [
    "reasonable prior written notice being provided to Newmann;",
    "the User bearing Newmann's reasonable costs of assisting with such audit;",
    "all information obtained being kept strictly confidential; and",
    "audits being limited to a maximum of one per twelve-month period and conducted with minimal disruption to Newmann's operations.",
];

const SECURITY_MEASURES = [
    "Encryption in transit (HTTPS/TLS) and at rest",
    "Role-based access control and least-privilege principles",
    "Structured logging and monitoring",
    "Regular security assessments",
    "Multi-factor authentication for Newmann personnel",
    "Infrastructure hosted on Google Cloud (ISO 27001 / SOC 2 coverage)",
];

export default function Terms() {
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
                    Terms of Service
                </span>

                <Title as={1} className="max-w-220 text-center mt-4">
                    Newmann{" "}
                    <span className="text-(--primary)">Terms of Service</span>
                </Title>

                <p className="text-center text-(--subtext) mt-6">
                    Between Newmann and User
                </p>
                <p className="text-center text-(--subtext) text-sm mt-1">
                    Last updated: June 2026
                </p>
            </Reveal>

            <div className="max-w-3xl w-full mx-auto px-4 mb-16">
                <Section title="1. Term">
                    <p>
                        This agreement commences when the User signs up for
                        the Service and continues until the User terminates
                        their account, or until the account is otherwise
                        terminated in accordance with clause 11, collectively
                        the term of the agreement (&ldquo;Term&rdquo;).
                    </p>
                </Section>

                <Section title="2. Use of the Service">
                    <p>
                        2.1 Subject to the User signing up for the Service and
                        the restrictions set out in this clause, Newmann
                        hereby grants the User a non-exclusive,
                        non-transferable, non-sublicensable right to use the
                        Service and the Documentation during the Term.
                    </p>

                    <SubSection title="2.2 Restricted Material">
                        <p>
                            The User shall not access, store, distribute or
                            transmit any material during the course of its use
                            of the Service that:
                        </p>
                        <div className="mt-3">
                            <CheckList items={RESTRICTED_MATERIAL} />
                        </div>
                        <p className="mt-3">
                            Newmann reserves the right, without liability or
                            prejudice to its other rights, to disable the
                            User&apos;s access to any material that breaches
                            this clause.
                        </p>
                    </SubSection>

                    <SubSection title="2.3 Prohibited Use">
                        <p>The User shall not:</p>
                        <div className="mt-3">
                            <CheckList items={PROHIBITED_USE} />
                        </div>
                    </SubSection>

                    <p className="mt-6">
                        2.4 The User shall use all reasonable efforts to
                        prevent any unauthorised access to or use of the
                        Service and shall promptly notify Newmann at{" "}
                        <a
                            href="mailto:info@newmann.ai"
                            className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
                        >
                            info@newmann.ai
                        </a>{" "}
                        of any such unauthorised access or use.
                    </p>
                </Section>

                <Section title="3. The Service">
                    <SubSection title="3.1 Capabilities">
                        <p>
                            Newmann provides a cloud-based
                            Software-as-a-Service platform that enables Users
                            to:
                        </p>
                        <div className="mt-3">
                            <CheckList items={SERVICE_CAPABILITIES} />
                        </div>
                    </SubSection>

                    <SubSection title="3.2 Availability">
                        <p>
                            Newmann shall use commercially reasonable efforts
                            to make the Service available 24 hours a day, 7
                            days a week, except for:
                        </p>
                        <div className="mt-3">
                            <CheckList items={AVAILABILITY_EXCEPTIONS} />
                        </div>
                    </SubSection>

                    <p className="mt-6">
                        3.3 Newmann will provide the User with standard
                        support during normal business hours (9:00 am &ndash;
                        6:00 pm CET, Monday to Friday, excluding Italian
                        public holidays), via email at{" "}
                        <a
                            href="mailto:info@newmann.ai"
                            className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
                        >
                            info@newmann.ai
                        </a>
                        . Newmann may update its support policy at its
                        discretion from time to time.
                    </p>

                    <p className="mt-3">
                        3.4 <strong className="text-(--text)">AI Outputs.</strong>{" "}
                        All draft replies and label suggestions generated by
                        the Service are suggestions only. The Service does not
                        send any email automatically. All outgoing
                        communications require the User&apos;s explicit review
                        and approval. The User remains solely responsible for
                        the content of any email sent.
                    </p>
                </Section>

                <Section title="4. Data Protection">
                    <p>
                        4.1 Both parties shall comply with applicable data
                        protection laws, including the General Data
                        Protection Regulation (EU) 2016/679
                        (&ldquo;GDPR&rdquo;), in connection with this
                        agreement.
                    </p>
                    <p className="mt-3">
                        4.2 The User consents to Newmann collecting and
                        processing usage data relating to how the User
                        interacts with the Service, for the purpose of
                        operating, maintaining, and improving the platform, as
                        further described in the Privacy Policy available at
                        newmann.ai.
                    </p>
                    <p className="mt-3">
                        4.3 To the extent Newmann processes personal data
                        contained in the User&apos;s emails on the User&apos;s
                        behalf, Newmann acts as a Data Processor and the User
                        acts as the Data Controller. The terms governing such
                        processing are set out in the{" "}
                        <strong className="text-(--text)">
                            Data Processing Agreement
                        </strong>{" "}
                        contained in Schedule 1 of this document.
                    </p>

                    <SubSection title="4.4 Use of AI Providers">
                        <p>
                            Newmann utilises OpenAI (GPT-4o mini) for AI
                            inference and processing. When you use the
                            platform to categorise emails or generate drafts,
                            relevant snippets of email content are sent to
                            OpenAI. The following conditions apply:
                        </p>
                        <div className="mt-3">
                            <BulletList items={AI_PROVIDER_TERMS} />
                        </div>
                    </SubSection>

                    <p className="mt-6">
                        4.5 User data is not used by Newmann to train any
                        public AI model. Aggregated and anonymised usage
                        patterns may be used internally to improve platform
                        performance.
                    </p>
                </Section>

                <Section title="5. User Responsibilities">
                    <p>5.1 The User:</p>
                    <div className="mt-3">
                        <CheckList items={USER_RESPONSIBILITIES} />
                    </div>
                    <p className="mt-3">
                        5.2 The User acknowledges that AI outputs are
                        probabilistic in nature and may occasionally be
                        inaccurate, incomplete, or inappropriate. The User is
                        responsible for reviewing all generated content before
                        use.
                    </p>
                </Section>

                <Section title="6. Intellectual Property">
                    <p>
                        6.1 Newmann and its licensors retain all intellectual
                        property rights in the Service, the Software, and the
                        Documentation. This agreement does not grant the User
                        any rights in respect of Newmann&apos;s intellectual
                        property, except as expressly stated herein.
                    </p>
                    <p className="mt-3">
                        6.2 The User retains all rights in and to its own data
                        (&ldquo;User Data&rdquo;) and is solely responsible
                        for its legality, accuracy, and integrity.
                    </p>
                    <p className="mt-3">
                        6.3 Any feedback, suggestions, or ideas provided by
                        the User to Newmann in connection with the Service may
                        be used by Newmann freely to improve the Service,
                        without any obligation or compensation to the User.
                    </p>
                </Section>

                <Section title="7. Charges and Payment">
                    <p>
                        7.0 The Service is currently provided in a &ldquo;Test
                        Phase&rdquo; and is offered to the User free of
                        charge. All the provisions set forth in this Section 7
                        (Charges and Payment) shall only become effective and
                        applicable upon the official conclusion of the Test
                        Phase. Newmann will provide Users with prior notice
                        before the Test Phase ends and before any fees become
                        due.
                    </p>
                    <p className="mt-3">
                        7.1 The User shall pay the subscription fees
                        applicable to their selected plan as set out on the
                        Subscription Page within the platform.
                    </p>
                    <p className="mt-3">
                        7.2 At the point of subscribing, the User shall
                        provide valid and complete payment and billing
                        details. The User authorises Newmann to charge the
                        applicable fees in accordance with the selected plan.
                    </p>
                    <p className="mt-3">
                        7.3 Newmann reserves the right to modify subscription
                        fees at any time upon written notice to the User.
                        Continued use of the Service after the notice period
                        constitutes acceptance of the updated fees.
                    </p>
                    <p className="mt-3">
                        7.4 Fees are non-refundable except where required by
                        applicable law or as expressly stated in the
                        Subscription Page.
                    </p>
                </Section>

                <Section title="8. Confidentiality">
                    <p>
                        8.1 Each party may have access to confidential
                        information of the other party in connection with
                        this agreement. Each party agrees to keep the other
                        party&apos;s confidential information secret and not
                        to disclose it to any third party, except as required
                        by law or as necessary to perform its obligations
                        under this agreement.
                    </p>
                    <p className="mt-3">
                        8.2 These obligations shall survive termination of
                        this agreement for a period of five (5) years.
                    </p>
                </Section>

                <Section title="9. Limitation of Liability">
                    <p>9.1 To the maximum extent permitted by applicable law:</p>
                    <div className="mt-3">
                        <CheckList items={LIABILITY_LIMITS} />
                    </div>
                    <p className="mt-3">
                        9.2 Nothing in this agreement excludes or limits
                        Newmann&apos;s liability for death or personal injury
                        caused by its negligence, or for fraud or fraudulent
                        misrepresentation.
                    </p>
                    <p className="mt-3">
                        9.3 The User remains solely responsible for any
                        decisions made or actions taken based on
                        AI-generated outputs produced by the Service. Newmann
                        does not warrant that outputs will be accurate,
                        complete, or fit for any particular purpose.
                    </p>
                </Section>

                <Section title="10. Indemnity">
                    <p>
                        The User shall indemnify and hold harmless Newmann
                        against any claims, losses, damages, costs, and
                        expenses (including reasonable legal fees) arising out
                        of or in connection with: (a) the User&apos;s use of
                        the Service in breach of this agreement; (b) any claim
                        that the User&apos;s email content or data infringes
                        the rights of any third party; or (c) the User&apos;s
                        failure to comply with applicable data protection or
                        other laws.
                    </p>
                </Section>

                <Section title="11. Termination">
                    <SubSection title="11.1 Grounds for Termination">
                        <p>This agreement may be terminated:</p>
                        <div className="mt-3">
                            <CheckList items={TERMINATION_GROUNDS} />
                        </div>
                    </SubSection>

                    <SubSection title="11.2 Effects of Termination">
                        <p>Upon termination:</p>
                        <ul className="flex flex-col gap-3 mt-3">
                            <li className="flex items-start gap-2">
                                <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                                <span>
                                    all licences granted under this agreement
                                    shall immediately terminate;
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                                <span>the User shall cease all use of the Service;</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                                <span>
                                    Newmann may delete User Data in its
                                    possession. The User may request a data
                                    export within 10 days of the termination
                                    date by contacting{" "}
                                    <a
                                        href="mailto:info@newmann.ai"
                                        className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
                                    >
                                        info@newmann.ai
                                    </a>
                                    ; any outstanding payment obligations shall
                                    survive termination (subject to the
                                    provisions of Section 7.0 regarding the
                                    Free Test Phase).
                                </span>
                            </li>
                        </ul>
                    </SubSection>
                </Section>

                <Section title="12. Modifications to the Service and Terms">
                    <p>
                        12.1 Newmann reserves the right to modify, suspend, or
                        discontinue any aspect of the Service at any time,
                        with reasonable notice where practicable.
                    </p>
                    <p className="mt-3">
                        12.2 Newmann may update these Terms from time to time.
                        Updated Terms will be posted on the platform with a
                        revised date. Continued use of the Service after the
                        update constitutes acceptance of the revised Terms.
                    </p>
                </Section>

                <Section title="13. Force Majeure">
                    <p>
                        Neither party shall be liable for any failure or delay
                        in performance resulting from causes beyond its
                        reasonable control, including acts of God, internet
                        outages, cyberattacks, or regulatory changes. If such
                        circumstances persist for more than 60 days, either
                        party may terminate this agreement upon 15 days&apos;
                        written notice.
                    </p>
                </Section>

                <Section title="14. General">
                    <p>
                        14.1 <strong className="text-(--text)">Entire Agreement.</strong>{" "}
                        This agreement, together with the Privacy Policy and
                        the Data Processing Agreement in Schedule 1,
                        constitutes the entire agreement between the parties
                        with respect to its subject matter and supersedes all
                        prior agreements and understandings.
                    </p>
                    <p className="mt-3">
                        14.2 <strong className="text-(--text)">Severance.</strong>{" "}
                        If any provision of this agreement is found to be
                        invalid or unenforceable, the remaining provisions
                        shall continue in full force and effect.
                    </p>
                    <p className="mt-3">
                        14.3 <strong className="text-(--text)">No Partnership.</strong>{" "}
                        Nothing in this agreement creates a partnership, joint
                        venture, or agency relationship between the parties.
                    </p>
                    <p className="mt-3">
                        14.4 <strong className="text-(--text)">Assignment.</strong>{" "}
                        The User may not assign or transfer any rights or
                        obligations under this agreement without
                        Newmann&apos;s prior written consent. Newmann may
                        assign this agreement freely.
                    </p>
                    <p className="mt-3">
                        14.5 <strong className="text-(--text)">Waiver.</strong>{" "}
                        No failure to enforce any provision of this agreement
                        shall constitute a waiver of that provision.
                    </p>
                </Section>

                <Section title="15. Governing Law and Jurisdiction">
                    <p>
                        This agreement and any dispute arising from it shall
                        be governed by and construed in accordance with the
                        laws of Italy. The parties submit to the exclusive
                        jurisdiction of the courts of Milan, Italy.
                    </p>
                </Section>

                <Section title="16. Contact">
                    <p>
                        For any queries regarding these Terms, data protection
                        requests, or any other matter related to the Service,
                        please contact:
                    </p>
                    <div className="bg-(--bento-bg) border border-(--bento-stroke) rounded-2xl px-4 py-3 mt-3 flex flex-col gap-1">
                        <p>
                            <span className="text-(--text) font-medium">
                                Newmann
                            </span>
                        </p>
                        <p>
                            <span className="text-(--text) font-medium">
                                Email:
                            </span>{" "}
                            <a
                                href="mailto:info@newmann.ai"
                                className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
                            >
                                info@newmann.ai
                            </a>
                        </p>
                        <p>
                            <span className="text-(--text) font-medium">
                                Website:
                            </span>{" "}
                            <a
                                href="https://newmann.ai"
                                className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
                            >
                                https://newmann.ai
                            </a>
                        </p>
                    </div>
                </Section>
            </div>

            {/* Schedule 1 — Data Processing Agreement */}
            <div className="max-w-3xl w-full mx-auto px-4 mb-32 pt-16 border-t border-(--bento-stroke)">
                <Reveal className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold text-(--text)">
                        Schedule 1 &mdash; Data Processing Agreement
                    </h2>
                    <p className="text-sm text-(--subtext)">
                        Between Newmann (Data Processor) and User (Data
                        Controller)
                    </p>
                </Reveal>

                <Section title="DPA 1. Roles of the Parties">
                    <p>
                        1.1 The parties acknowledge and agree that, to the
                        extent Newmann processes Personal Data on the
                        User&apos;s behalf in the course of providing the
                        Service:
                    </p>
                    <ul className="flex flex-col gap-3 mt-3">
                        <li className="flex items-start gap-2">
                            <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                            <span>
                                the User is the{" "}
                                <strong className="text-(--text)">
                                    Data Controller
                                </strong>
                                ;
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                            <span>
                                Newmann is the{" "}
                                <strong className="text-(--text)">
                                    Data Processor
                                </strong>
                                ;
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                            <span>
                                the subject matter, duration, nature, purpose,
                                and categories of data processed are set out
                                in Appendix A of this Schedule.
                            </span>
                        </li>
                    </ul>
                    <p className="mt-3">
                        1.2 Any terms not defined in this Data Processing
                        Agreement shall have the meaning set out in the main
                        body of these Terms of Service.
                    </p>
                </Section>

                <Section title="DPA 2. Compliance">
                    <p>
                        Each party shall comply with all applicable Data
                        Protection Laws in relation to its processing of
                        Personal Data under or in connection with this
                        agreement, including the GDPR and any applicable
                        Italian implementing legislation.
                    </p>
                </Section>

                <Section title="DPA 3. User Warranties">
                    <p>The User warrants, represents, and undertakes that:</p>
                    <div className="mt-3">
                        <CheckList items={DPA_USER_WARRANTIES} />
                    </div>
                </Section>

                <Section title="DPA 4. Newmann's Obligations as Processor">
                    <p>
                        Where Newmann processes Personal Data as Data
                        Processor on the User&apos;s behalf, Newmann shall:
                    </p>
                    <div className="mt-3">
                        <CheckList items={DPA_PROCESSOR_OBLIGATIONS} />
                    </div>
                </Section>

                <Section title="DPA 5. Sub-processors">
                    <p>
                        5.1 The User hereby grants Newmann general
                        authorisation to engage sub-processors to assist in
                        the provision of the Service. Newmann shall ensure
                        that all sub-processors are bound by data protection
                        obligations substantially similar to those set out in
                        this Schedule.
                    </p>

                    <SubSection title="5.2 Current Sub-processors">
                        <DataTable
                            columns={SUBPROCESSOR_COLUMNS}
                            rows={SUBPROCESSOR_ROWS}
                        />
                    </SubSection>

                    <p className="mt-6">
                        5.3 Before engaging any new sub-processor, Newmann
                        shall inform the User. The User may object to the new
                        sub-processor within 10 business days of notification
                        by contacting{" "}
                        <a
                            href="mailto:info@newmann.ai"
                            className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
                        >
                            info@newmann.ai
                        </a>
                        , acting reasonably.
                    </p>
                    <p className="mt-3">
                        5.4 As between Newmann and the User, Newmann shall
                        remain fully liable for the acts and omissions of its
                        sub-processors.
                    </p>
                </Section>

                <Section title="DPA 6. International Data Transfers">
                    <p>
                        The User authorises Newmann to transfer Personal Data
                        outside the European Economic Area
                        (&ldquo;EEA&rdquo;) where required to perform the
                        Service, including to countries where Newmann&apos;s
                        sub-processors operate, provided that Newmann ensures
                        that all such transfers are effected in accordance
                        with Data Protection Laws, including through the use
                        of Standard Contractual Clauses
                        (&ldquo;SCCs&rdquo;) or other legally recognised
                        transfer mechanisms.
                    </p>
                    <p className="mt-3">
                        The following providers may process data outside the
                        EEA: OpenAI (United States), Vercel (United States),
                        Pinecone (United States). All such transfers are
                        covered by SCCs.
                    </p>
                </Section>

                <Section title="DPA 7. Audit Rights">
                    <p>
                        7.1 Newmann shall make available to the User such
                        information as is reasonably necessary to demonstrate
                        compliance with this Data Processing Agreement, and
                        shall allow for and contribute to audits or
                        inspections conducted by the User or an authorised
                        third-party auditor, subject to:
                    </p>
                    <div className="mt-3">
                        <CheckList items={AUDIT_CONDITIONS} />
                    </div>
                </Section>

                <Section title="DPA 8. Data Subject Rights">
                    <p>
                        Newmann shall assist the User, insofar as reasonably
                        possible and within the scope of Newmann&apos;s role
                        as Processor, in fulfilling the User&apos;s obligation
                        to respond to requests from data subjects exercising
                        their rights under Data Protection Laws (including
                        rights of access, rectification, erasure, restriction,
                        portability, and objection). All such requests or
                        queries should be directed to{" "}
                        <a
                            href="mailto:info@newmann.ai"
                            className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
                        >
                            info@newmann.ai
                        </a>
                        .
                    </p>
                </Section>

                <Section title="DPA 9. Data Breach Notification">
                    <p>
                        In the event of a Personal Data breach affecting data
                        processed on the User&apos;s behalf, Newmann shall
                        notify the User without undue delay and shall provide
                        all reasonably available information to allow the
                        User to meet any notification obligations under
                        applicable Data Protection Laws.
                    </p>
                </Section>

                <Section title="Appendix A — Data Processing Details">
                    <p>
                        <strong className="text-(--text)">
                            Subject matter of processing:
                        </strong>{" "}
                        Provision of the Newmann email automation Service to
                        the User.
                    </p>
                    <p className="mt-3">
                        <strong className="text-(--text)">
                            Nature and purpose of processing:
                        </strong>{" "}
                        Processing of email data and related communications to
                        enable AI-assisted categorisation, labelling, and
                        draft reply generation.
                    </p>
                    <p className="mt-3">
                        <strong className="text-(--text)">
                            Duration of processing:
                        </strong>{" "}
                        For the duration of the Service relationship and
                        thereafter as required by applicable law.
                    </p>
                    <p className="mt-3">
                        <strong className="text-(--text)">
                            Categories of data subjects:
                        </strong>{" "}
                        The User&apos;s employees, collaborators, clients,
                        suppliers, and other third parties whose personal data
                        may appear in email communications processed through
                        the platform.
                    </p>
                    <p className="mt-3">
                        <strong className="text-(--text)">
                            Types of personal data processed:
                        </strong>{" "}
                        Name, email address, email content (body and
                        subject), sender and recipient information,
                        timestamps, email metadata, attachments (where
                        applicable), account authentication data, and any
                        other personal data incidentally contained in email
                        communications processed through the Service.
                    </p>

                    <SubSection title="Technical and organisational security measures">
                        <CheckList items={SECURITY_MEASURES} />
                    </SubSection>
                </Section>
            </div>
        </section>
    );
}
