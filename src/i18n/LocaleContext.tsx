"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useSyncExternalStore,
    type ReactNode,
} from "react";

export type Locale = "it" | "en";

export const DEFAULT_LOCALE: Locale = "it";

const STORAGE_KEY = "newmann-locale";

type Listener = () => void;
const listeners = new Set<Listener>();

function isLocale(value: string | null): value is Locale {
    return value === "it" || value === "en";
}

function readStoredLocale(): Locale {
    if (typeof window === "undefined") return DEFAULT_LOCALE;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(stored) ? stored : DEFAULT_LOCALE;
}

let currentLocale: Locale = readStoredLocale();

function subscribe(listener: Listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

function getSnapshot(): Locale {
    return currentLocale;
}

function getServerSnapshot(): Locale {
    return DEFAULT_LOCALE;
}

function setStoredLocale(locale: Locale) {
    currentLocale = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
    listeners.forEach((listener) => listener());
}

interface LocaleContextValue {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(
    undefined,
);

export function LocaleProvider({ children }: { children: ReactNode }) {
    const locale = useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot,
    );

    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);

    const setLocale = useCallback((next: Locale) => setStoredLocale(next), []);
    const toggleLocale = useCallback(() => {
        setStoredLocale(currentLocale === "it" ? "en" : "it");
    }, []);

    const value = useMemo<LocaleContextValue>(
        () => ({ locale, setLocale, toggleLocale }),
        [locale, setLocale, toggleLocale],
    );

    return (
        <LocaleContext.Provider value={value}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    const ctx = useContext(LocaleContext);
    if (!ctx) {
        throw new Error("useLocale must be used within a LocaleProvider");
    }
    return ctx;
}

export function useDictionary<T>(dictionary: Record<Locale, T>): T {
    const { locale } = useLocale();
    return dictionary[locale];
}
