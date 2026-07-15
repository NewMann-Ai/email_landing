import type { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    const routes: {
        path: string;
        changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
        priority: number;
    }[] = [
        { path: "/", changeFrequency: "weekly", priority: 1.0 },
        { path: "/newmann-mail", changeFrequency: "weekly", priority: 0.9 },
        { path: "/team", changeFrequency: "monthly", priority: 0.7 },
        { path: "/security", changeFrequency: "monthly", priority: 0.8 },
        { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
        { path: "/support", changeFrequency: "monthly", priority: 0.6 },
        { path: "/contacts", changeFrequency: "monthly", priority: 0.6 },
        { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
        { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
    ];

    return routes.map(({ path, changeFrequency, priority }) => ({
        url: `${SITE_URL}${path}`,
        lastModified,
        changeFrequency,
        priority,
        alternates: {
            languages: {
                it: `${SITE_URL}${path}`,
            },
        },
    }));
}
