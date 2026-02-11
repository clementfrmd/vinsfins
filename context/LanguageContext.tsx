"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import fr from "@/data/translations/fr.json";
import en from "@/data/translations/en.json";
import de from "@/data/translations/de.json";
import lb from "@/data/translations/lb.json";

export type Locale = "fr" | "en" | "de" | "lb";

const translations: Record<Locale, Record<string, any>> = { fr, en, de, lb };

type LanguageContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: "fr",
  setLocale: () => {},
  t: (k) => k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");

  const t = useCallback(
    (key: string): string => {
      const parts = key.split(".");
      let val: any = translations[locale];
      for (const p of parts) {
        val = val?.[p];
      }
      if (typeof val === "string") return val;
      // fallback to french
      let fallback: any = translations.fr;
      for (const p of parts) {
        fallback = fallback?.[p];
      }
      return typeof fallback === "string" ? fallback : key;
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
