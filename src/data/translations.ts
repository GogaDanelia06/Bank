import en from "../messages/en";
import de from "../messages/de";
import ru from "../messages/ru"
import es from "../messages/es";
import fr from "../messages/fr";
import it from "../messages/it";

export const translations = {
  en,
  de,
  ru,
  es,
  fr,
  it,
} as const;

export type Language = keyof typeof translations;
export type Translation = typeof en;