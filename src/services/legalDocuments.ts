import type { LegalDocumentType, LegalVersion, LegalVersionSummary } from "@/types/legalDocuments";

// Legal documents are edited and published from the back office; this site only reads the
// published versions from the backend (NWM-115).
//
// Caching: pages are static and refreshed every hour, and immediately when the backend calls
// /api/revalidate after a publication (tag below).
//
// No local copy of the texts on purpose (NWM-115 review): if the backend does not answer, the
// error is thrown. A failed background regeneration keeps serving the last page generated from
// the backend, and a failed build keeps the previous deployment online. A fallback would instead
// replace the page with an outdated text presented as the one in force.

function apiUrl(): string {
    const url = process.env.LEGAL_API_URL;
    if (url) {
        return url.replace(/\/$/, "");
    }
    // Without it every request would go to localhost: fail loudly instead of looking disconnected.
    if (process.env.NODE_ENV === "production") {
        throw new Error("LEGAL_API_URL is not set: the legal pages cannot reach the backend");
    }
    return "http://localhost:8080";
}

export const LEGAL_REVALIDATE_SECONDS = 3600;

export const legalCacheTag = (type: LegalDocumentType) => `legal:${type}`;

export const LEGAL_PAGE_PATHS: Record<LegalDocumentType, string> = {
    "privacy-policy": "/privacy",
    "cookie-policy": "/cookies",
    "terms-of-service": "/terms",
};

class NotFoundError extends Error {}

async function fetchJson<T>(path: string, type: LegalDocumentType): Promise<T> {
    const response = await fetch(`${apiUrl()}/api/public/legal-documents/${path}`, {
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
    return fetchJson<LegalVersion>(type, type);
}

// null when the version does not exist (or is a draft): the page answers 404.
export async function getLegalVersion(type: LegalDocumentType, version: string): Promise<LegalVersion | null> {
    try {
        return await fetchJson<LegalVersion>(`${type}/versions/${encodeURIComponent(version)}`, type);
    } catch (error) {
        if (error instanceof NotFoundError) {
            return null;
        }
        throw error;
    }
}

export async function getLegalVersions(type: LegalDocumentType): Promise<LegalVersionSummary[]> {
    return fetchJson<LegalVersionSummary[]>(`${type}/versions`, type);
}
