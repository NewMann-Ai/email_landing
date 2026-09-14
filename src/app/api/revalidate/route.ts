import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { LEGAL_PAGE_PATHS, legalCacheTag } from "@/services/legalDocuments";
import type { LegalDocumentType } from "@/types/legalDocuments";

// Called by the backend right after a legal document is published (NWM-115,
// LegalPublicSiteNotifier): the next visitor of the page gets the new text, without a deploy.
// Protected by LEGAL_REVALIDATE_SECRET, the same value configured on the backend.

const SECRET_HEADER = "x-revalidate-secret";

function isValidSecret(provided: string | null, expected: string) {
    if (!provided) return false;
    const a = Buffer.from(provided);
    const b = Buffer.from(expected);
    return a.length === b.length && timingSafeEqual(a, b);
}

function isLegalDocumentType(value: unknown): value is LegalDocumentType {
    return typeof value === "string" && Object.hasOwn(LEGAL_PAGE_PATHS, value);
}

export async function POST(request: NextRequest) {
    const secret = process.env.LEGAL_REVALIDATE_SECRET;
    if (!secret) {
        console.error("[legal] /api/revalidate called but LEGAL_REVALIDATE_SECRET is not set");
        return NextResponse.json({ error: "revalidation_not_configured" }, { status: 503 });
    }
    if (!isValidSecret(request.headers.get(SECRET_HEADER), secret)) {
        return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    const body: unknown = await request.json().catch(() => null);
    const type = body && typeof body === "object" ? (body as { type?: unknown }).type : undefined;
    if (!isLegalDocumentType(type)) {
        return NextResponse.json({ error: "unknown_document" }, { status: 400 });
    }

    // expire: 0 — the next request waits for the fresh text instead of getting the old one.
    revalidateTag(legalCacheTag(type), { expire: 0 });
    return NextResponse.json({ revalidated: true, type });
}
