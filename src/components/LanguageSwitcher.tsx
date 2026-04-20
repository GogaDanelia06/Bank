import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
] as const;

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const { dark } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const current =
    languages.find((item) => item.code === lang) || languages[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 46,
          height: 46,
          borderRadius: 999,
          background: dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.78)",
          border: dark
            ? "1px solid rgba(255,255,255,0.10)"
            : "1px solid rgba(15,23,42,0.10)",
          backdropFilter: "blur(14px)",
          cursor: "pointer",
          transition: "all 0.2s ease",
          fontSize: 20,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "";
        }}
        title={current.label}
      >
        <span>{current.flag}</span>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            right: 0,
            display: "grid",
            gap: 8,
            padding: 10,
            borderRadius: 20,
            background: dark ? "rgba(7,17,31,0.96)" : "rgba(255,255,255,0.96)",
            border: dark
              ? "1px solid rgba(255,255,255,0.10)"
              : "1px solid rgba(15,23,42,0.10)",
            backdropFilter: "blur(16px)",
            boxShadow: dark
              ? "0 20px 40px rgba(0,0,0,0.35)"
              : "0 20px 40px rgba(15,23,42,0.12)",
            zIndex: 100,
          }}
        >
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => {
                setLang(item.code);
                setOpen(false);
              }}
              style={{
                width: 42,
                height: 42,
                borderRadius: 999,
                border:
                  item.code === lang
                    ? "1px solid #22d3ee"
                    : dark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(15,23,42,0.08)",
                background:
                  item.code === lang
                    ? dark
                      ? "rgba(34,211,238,0.12)"
                      : "rgba(34,211,238,0.10)"
                    : dark
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(255,255,255,0.82)",
                cursor: "pointer",
                fontSize: 18,
                transition: "all 0.2s ease",
              }}
              title={item.label}
            >
              {item.flag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}