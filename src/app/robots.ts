import type { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/seo";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/", "/private/"],
            },
            // AI crawlers — allowed for GEO (Generative Engine Optimization).
            // Remove or set to `disallow: "/"` to opt out of AI training.
            { userAgent: "GPTBot", allow: "/" },
            { userAgent: "OAI-SearchBot", allow: "/" },
            { userAgent: "ChatGPT-User", allow: "/" },
            { userAgent: "ClaudeBot", allow: "/" },
            { userAgent: "Claude-Web", allow: "/" },
            { userAgent: "anthropic-ai", allow: "/" },
            { userAgent: "PerplexityBot", allow: "/" },
            { userAgent: "Google-Extended", allow: "/" },
            { userAgent: "Applebot-Extended", allow: "/" },
            { userAgent: "CCBot", allow: "/" },
            { userAgent: "meta-externalagent", allow: "/" },
            { userAgent: "Bytespider", allow: "/" },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
