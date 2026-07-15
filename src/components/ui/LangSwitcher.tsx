"use client";

import { useLocale } from "@/i18n/LocaleContext";

export default function LangSwitcher() {
    const { locale, toggleLocale } = useLocale();

    return (
        <button
            type="button"
            onClick={toggleLocale}
            aria-label="Switch language"
            className="text-(--text) text-sm hover:text-(--primary) transition-colors duration-200 cursor-pointer"
        >
            {locale === "it" ? "IT" : "ENG"}
        </button>
    );
}
