import { createContext, useContext } from "react";
import { translations, type Language, type Translation } from "../data/translations";

type LangContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
};

export const LangCtx = createContext<LangContextType | null>(null);

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) {
    throw new Error("useLang must be used inside LangCtx.Provider");
  }
  return ctx;
}

export { translations };
export type { Language, Translation };