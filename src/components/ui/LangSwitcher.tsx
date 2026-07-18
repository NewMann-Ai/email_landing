"use client";

import { useLocale } from "@/i18n/LocaleContext";
import GlobeIcon from "@/assets/icons/hugeicons/globe";

export default function LangSwitcher() {
    const { locale, toggleLocale } = useLocale();

    return (
        <button
            type="button"
            onClick={toggleLocale}
            aria-label="Switch language"
            className="flex items-center gap-1.5 text-(--text) text-base md:text-sm hover:text-(--primary) transition-colors duration-200 cursor-pointer"
        >
            <GlobeIcon className="w-5 h-5 md:w-4 md:h-4" />
            {locale === "it" ? "IT" : "ENG"}
        </button>
    );
}
