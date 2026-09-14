import cookiePolicy from "@/content/legal/cookie-policy";
import privacyPolicy from "@/content/legal/privacy-policy";
import termsOfService from "@/content/legal/terms-of-service";
import type { LegalDocumentType, LegalVersion, LegalVersionSummary } from "@/types/legalDocuments";

// Legal documents are edited and published from the back office; this site only reads the
// published versions from the backend (NWM-115).
//
// Caching: pages are static and refreshed every hour, and immediately when the backend calls
// /api/revalidate after a publication (tag below). If the backend does not answer, the page
// falls back to the v1.0 copy kept in src/content/legal.

const API_URL = (process.env.LEGAL_API_URL ?? "http://localhost:8080").replace(/\/$/, "");

export const LEGAL_REVALIDATE_SECONDS = 3600;

export const legalCacheTag = (type: LegalDocumentType) => `legal:${type}`;

export const LEGAL_PAGE_PATHS: Record<LegalDocumentType, string> = {
    "privacy-policy": "/privacy",
    "cookie-policy": "/cookies",
    "terms-of-service": "/terms",
};

const FALLBACK: Record<LegalDocumentType, LegalVersion> = {
    "privacy-policy": fallbackVersion("privacy-policy", "Privacy Policy", privacyPolicy),
    "cookie-policy": fallbackVersion("cookie-policy", "Cookie Policy", cookiePolicy),
    "terms-of-service": fallbackVersion("terms-of-service", "Terms of Service", termsOfService),
};

function fallbackVersion(type: LegalDocumentType, title: string, bodyMarkdown: string): LegalVersion {
    return {
        type,
        version: "1.0",
        current: true,
        effectiveFrom: "2026-06-19",
        publishedAt: null,
        contents: [{ language: "en", title, bodyMarkdown }],
    };
}

class NotFoundError extends Error {}

async function fetchJson<T>(path: string, type: LegalDocumentType): Promise<T> {
    const response = await fetch(`${API_URL}/api/public/legal-documents/${path}`, {
        next: { revalidate: LEGAL_REVALIDATE_SECONDS, tags: [legalCacheTag(type)] },
        signal: AbortSignal.timeout(5000),
    });
    if (response.status === 404) {
        throw new NotFoundError(path);
    }
    if (!response.ok) {
        throw new Error(`Legal documents API answered ${response.status} for ${path}`);
    }
    return (await response.json()) as T;
}

export async function getCurrentLegalVersion(type: LegalDocumentType): Promise<LegalVersion> {
    try {
        return await fetchJson<LegalVersion>(type, type);
    } catch (error) {
        console.error(`[legal] using the fallback copy of ${type}:`, error);
        return FALLBACK[type];
    }
}

// null when the version does not exist (or is a draft): the page answers 404.
export async function getLegalVersion(type: LegalDocumentType, version: string): Promise<LegalVersion | null> {
    try {
        return await fetchJson<LegalVersion>(`${type}/versions/${encodeURIComponent(version)}`, type);
    } catch (error) {
        if (error instanceof NotFoundError) {
            return null;
        }
        if (version === FALLBACK[type].version) {
            console.error(`[legal] using the fallback copy of ${type} v${version}:`, error);
            return FALLBACK[type];
        }
        throw error;
    }
}

export async function getLegalVersions(type: LegalDocumentType): Promise<LegalVersionSummary[]> {
    try {
        return await fetchJson<LegalVersionSummary[]>(`${type}/versions`, type);
    } catch (error) {
        console.error(`[legal] version history of ${type} unavailable:`, error);
        return [];
    }
}
