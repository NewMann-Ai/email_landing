import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/utils/seo";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: `${SITE_NAME} — Assistente AI per la tua inbox`,
        template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    generator: "Next.js",
    keywords: [
        "assistente email AI",
        "automazione email",
        "gestione inbox",
        "Gmail AI",
        "Outlook AI",
        "risposte automatiche email",
        "AI per aziende",
        "produttività email",
        "Newmann",
        "Digital Twin aziendale",
    ],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "technology",
    alternates: {
        canonical: "/",
        languages: {
            it: "/",
            "x-default": "/",
        },
    },
    openGraph: {
        type: "website",
        locale: "it_IT",
        url: SITE_URL,
        siteName: SITE_NAME,
        title: `${SITE_NAME} — Assistente AI per la tua inbox`,
        description: SITE_DESCRIPTION,
        images: [
            {
                url: "/favicon.png",
                width: 512,
                height: 512,
                alt: `${SITE_NAME} logo`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${SITE_NAME} — Assistente AI per la tua inbox`,
        description: SITE_DESCRIPTION,
        images: ["/favicon.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        other: {
            "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
        },
    },
    icons: {
        icon: [
            { url: "/favicon.png", type: "image/png" },
            {
                url: "/favicon_light.png",
                type: "image/png",
                media: "(prefers-color-scheme: dark)",
            },
            {
                url: "/favicon_black.png",
                type: "image/png",
                media: "(prefers-color-scheme: light)",
            },
        ],
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1.0,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const organizationJsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.png`,
        email: "info@newmann.ai",
        description: SITE_DESCRIPTION,
        sameAs: [] as string[],
        contactPoint: [
            {
                "@type": "ContactPoint",
                email: "info@newmann.ai",
                contactType: "customer support",
                availableLanguage: ["Italian", "English"],
            },
        ],
    };

    const websiteJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "it-IT",
        publisher: { "@type": "Organization", name: SITE_NAME },
    };

    const softwareJsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: `${SITE_NAME} Mail`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Gmail, Outlook",
        description:
            "Assistente AI che legge, organizza e risponde alle email al posto tuo, imparando dai processi della tua azienda.",
        url: SITE_URL,
        offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "0",
            availability: "https://schema.org/InStock",
        },
        publisher: { "@type": "Organization", name: SITE_NAME },
    };

    return (
        <html
            lang="it"
            suppressHydrationWarning
            className="scroll-smooth"
            data-scroll-behavior="smooth"
        >
            <head>
                <meta charSet="UTF-8" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationJsonLd),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(websiteJsonLd),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(softwareJsonLd),
                    }}
                />
            </head>
            <body>
                <Navbar />
                <main id="main">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
