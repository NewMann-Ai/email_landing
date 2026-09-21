// Mirrors the public legal documents API of the backend (NWM-115,
// /api/public/legal-documents). Dates are ISO strings.
export type LegalDocumentType = "privacy-policy" | "cookie-policy" | "terms-of-service";
export type LegalLanguage = "it" | "en";

export interface LegalContent {
    language: LegalLanguage;
    title: string;
    bodyMarkdown: string;
}

export interface UpcomingVersion {
    version: string;
    effectiveFrom: string | null;
}

export interface LegalVersion {
    type: LegalDocumentType;
    version: string;
    /** In force today. */
    current: boolean;
    /** Published but not in force yet (notice period). */
    upcoming: boolean;
    effectiveFrom: string | null;
    publishedAt: string | null;
    contents: LegalContent[];
    /** On the version in force: the new version to announce, if any. */
    next: UpcomingVersion | null;
}

export interface LegalVersionSummary {
    version: string;
    current: boolean;
    upcoming: boolean;
    effectiveFrom: string | null;
    publishedAt: string | null;
}
