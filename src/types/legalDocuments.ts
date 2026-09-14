// Mirrors the public legal documents API of the backend (NWM-115,
// /api/public/legal-documents). Dates are ISO strings.
export type LegalDocumentType = "privacy-policy" | "cookie-policy" | "terms-of-service";
export type LegalLanguage = "it" | "en";

export interface LegalContent {
    language: LegalLanguage;
    title: string;
    bodyMarkdown: string;
}

export interface LegalVersion {
    type: LegalDocumentType;
    version: string;
    current: boolean;
    effectiveFrom: string | null;
    publishedAt: string | null;
    contents: LegalContent[];
}

export interface LegalVersionSummary {
    version: string;
    current: boolean;
    effectiveFrom: string | null;
    publishedAt: string | null;
}
