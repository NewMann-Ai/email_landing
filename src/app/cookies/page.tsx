import Image from "next/image";
import WhiteLogo from "../../assets/images/favicon_white.png";
import Title from "../../components/ui/Title";
import Reveal from "@/components/ui/Reveal";

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

const STORAGE_TYPES = [
    {
        title: "localStorage",
        description:
            "browser storage that persists until explicitly cleared, used to retain preferences and analytics state across sessions.",
    },
    {
        title: "sessionStorage",
        description:
            "browser storage that is automatically cleared when the browser tab is closed, used for temporary session data.",
    },
];

const POSTHOG_STORAGE = [
    {
        title: "Cookie (ph_<project_api_key>_posthog)",
        description:
            "stores the user's distinct ID and session ID. Expires after 365 days. This is a first-party cookie — PostHog does not track users across different websites.",
    },
    {
        title: "localStorage",
        description:
            "stores additional analytics properties such as feature flag cache, event queues, and UTM parameters.",
    },
    {
        title: "sessionStorage",
        description:
            "stores temporary session-level properties (e.g. session super properties) that are cleared when the tab is closed.",
    },
];

const THIRD_PARTY_SERVICES = [
    {
        title: "Google / Microsoft (authentication)",
        description:
            "may set their own cookies as part of the OAuth login flow. Newmann does not control these cookies.",
    },
    {
        title: "Google Cloud",
        description:
            "infrastructure provider for backend services. May process connection and log data server-side.",
    },
    {
        title: "OpenAI (GPT-4o mini)",
        description:
            "used for AI-powered features within the platform. Requests are processed server-side; no cookies or browser storage are set directly by OpenAI.",
    },
    {
        title: "Vercel",
        description:
            "frontend hosting platform. Vercel does not set analytics cookies in our deployment. If Vercel Web Analytics is enabled, it uses a privacy-preserving server-side hash and does not use cookies.",
    },
    {
        title: "Render",
        description:
            "backend hosting platform. Infrastructure-level only; no cookies set in the browser.",
    },
];

const LEGAL_BASIS = [
    {
        category: "Strictly necessary",
        basis: "Legitimate interest (platform operation)",
    },
    { category: "Analytics (PostHog)", basis: "User consent" },
    {
        category: "Third-party auth cookies",
        basis: "Legitimate interest / governed by provider",
    },
];

const MANAGE_COOKIES = [
    "the cookie banner on the platform (on first visit and accessible at any time)",
    "browser settings (cookies, localStorage, and sessionStorage can all be cleared manually)",
    "browser developer tools (Application tab)",
];

export default function Cookies() {
    return (
        <section className="relative overflow-hidden">
            <Image
                src={WhiteLogo}
                alt="White Logo"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/4 w-1/2 h-auto rotate-75 opacity-50 -z-10"
            />

            {/* Intro */}
            <Reveal className="flex flex-col items-center justify-center mt-24 md:mt-60 px-4">
                <span className="text-(--primary) bg-(--primary-10) border border-(--primary) rounded-2xl px-4 py-1 text-sm">
                    Cookie Policy
                </span>

                <Title className="max-w-220 text-center mt-4">
                    Newmann <span className="text-(--primary)">Cookie Policy</span>
                </Title>

                <p className="text-center text-(--subtext) mt-6">
                    Internal Document · v1.0
                </p>
                <p className="text-center text-(--subtext) text-sm mt-1">
                    Last updated: May 2025
                </p>
            </Reveal>

            <div className="max-w-3xl w-full mx-auto px-4 mb-32">
                <Section title="1. Introduction">
                    <p>
                        This Cookie Policy explains how Newmann (&ldquo;Newmann&rdquo;,
                        &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) uses
                        cookies and similar browser storage technologies when users
                        access the authentication area and platform. In addition to
                        cookies, we use localStorage and sessionStorage to store
                        certain data locally in your browser. This policy covers all
                        such technologies collectively.
                    </p>
                </Section>

                <Section title="2. What Are Cookies and Similar Technologies">
                    <p>
                        Cookies are small text files stored on your device by your
                        browser at the request of a website. They allow the
                        platform to recognize your browser and retain information
                        across page loads and sessions.
                    </p>

                    <p className="mt-3">We also use:</p>

                    <div className="mt-3">
                        <BulletList items={STORAGE_TYPES} />
                    </div>
                </Section>

                <Section title="3. Types of Cookies and Storage Used">
                    <SubSection title="3.1 Strictly Necessary">
                        <p>
                            These are essential for the platform to function and do
                            not require consent. They are used for authentication
                            and login sessions, maintaining secure user sessions,
                            and security and fraud prevention.
                        </p>
                        <p className="mt-3">
                            Examples include session tokens, authentication cookies
                            set during Google or Microsoft login, and security
                            cookies. Without these, the platform cannot operate.
                        </p>
                    </SubSection>

                    <SubSection title="3.2 Analytics">
                        <p>
                            These help us understand how users interact with the
                            platform. They may collect data on pages visited,
                            session duration, feature usage, and performance
                            metrics.
                        </p>

                        <p className="mt-3">
                            We use PostHog for product analytics. PostHog uses a
                            combination of a first-party cookie, localStorage, and
                            sessionStorage to store analytics data in your browser:
                        </p>

                        <div className="mt-3">
                            <BulletList items={POSTHOG_STORAGE} />
                        </div>

                        <p className="mt-3">
                            PostHog data is sent to PostHog&apos;s servers and
                            processed according to PostHog&apos;s privacy policy.
                            These analytics technologies are only activated after
                            the user has given consent via the cookie banner.
                        </p>
                    </SubSection>

                    <SubSection title="3.3 Functional">
                        <p>
                            We do not currently use functional cookies beyond what
                            is covered by the strictly necessary and analytics
                            categories above. This section will be updated if
                            functional cookies are introduced.
                        </p>
                    </SubSection>

                    <SubSection title="3.4 Third-Party Services">
                        <p>
                            The following third-party providers are used within the
                            platform and may process data according to their own
                            privacy policies:
                        </p>

                        <div className="mt-3">
                            <BulletList items={THIRD_PARTY_SERVICES} />
                        </div>
                    </SubSection>
                </Section>

                <Section title="4. Authentication and Third-Party Login">
                    <p>
                        Newmann allows users to authenticate using Google and
                        Microsoft. These providers may set their own cookies in
                        accordance with their respective privacy policies. Newmann
                        does not control those cookies.
                    </p>
                </Section>

                <Section title="5. Legal Basis">
                    <div className="overflow-x-auto rounded-2xl border border-(--bento-stroke)">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-(--bento-bg)">
                                    <th className="p-4 text-sm font-semibold text-(--text) border-b border-(--bento-stroke)">
                                        Category
                                    </th>
                                    <th className="p-4 text-sm font-semibold text-(--text) border-b border-(--bento-stroke)">
                                        Legal Basis
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {LEGAL_BASIS.map((row) => (
                                    <tr key={row.category}>
                                        <td className="p-4 text-sm text-(--subtext) border-b border-(--bento-stroke) last:border-b-0">
                                            {row.category}
                                        </td>
                                        <td className="p-4 text-sm text-(--subtext) border-b border-(--bento-stroke) last:border-b-0">
                                            {row.basis}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Section>

                <Section title="6. How to Manage Cookies">
                    <p>
                        Users can manage or disable cookies and browser storage
                        through:
                    </p>

                    <ul className="flex flex-col gap-3 mt-3">
                        {MANAGE_COOKIES.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                                <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-3">
                        Please note: disabling strictly necessary cookies will
                        prevent access to the platform. Disabling analytics
                        cookies will not affect core functionality.
                    </p>
                </Section>

                <Section title="7. Cookie Banner">
                    <p>
                        Upon first access to the platform, users are presented
                        with a cookie banner allowing them to accept or reject
                        non-essential cookies and browser storage technologies.
                        The choice is saved and can be changed at any time.
                        Analytics (PostHog) is only activated after explicit
                        consent is given.
                    </p>
                </Section>

                <Section title="8. Updates">
                    <p>
                        This Cookie Policy may be updated periodically to reflect
                        changes in the technologies we use or applicable
                        regulations. The &ldquo;Last updated&rdquo; date at the
                        top of this document will reflect the most recent
                        revision.
                    </p>
                </Section>
            </div>
        </section>
    );
}
