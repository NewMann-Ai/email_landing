import type { Metadata } from "next";

export const SITE_NAME = "Newmann";

export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://newmann.ai";

export const SITE_DESCRIPTION =
    "Newmann è l'assistente AI per Gmail e Outlook che capisce il contesto, scrive le bozze di risposta e mantiene la tua inbox sotto controllo. GDPR compliant, verificato Google e Microsoft.";

export const DEFAULT_OG_IMAGE = "/favicon.png";

type BuildMetadataInput = {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
    image?: string;
};

export function buildMetadata({
    title,
    description,
    path,
    keywords,
    image = DEFAULT_OG_IMAGE,
}: BuildMetadataInput): Metadata {
    const canonical = path.startsWith("/") ? path : `/${path}`;
    const fullTitle = `${title} | ${SITE_NAME}`;

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical,
            languages: {
                it: canonical,
                "x-default": canonical,
            },
        },
        openGraph: {
            type: "website",
            locale: "it_IT",
            url: `${SITE_URL}${canonical}`,
            siteName: SITE_NAME,
            title: fullTitle,
            description,
            images: [{ url: image, alt: `${SITE_NAME} — ${title}` }],
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
            images: [image],
        },
    };
}
