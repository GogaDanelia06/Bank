import { useEffect, useRef, useState } from "react";
import { translations } from "../data/translations";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import { Globe, Check } from "./icons";

const flags = {
  en: "🇬🇧",
  de: "🇩🇪",
  ru: "🇷🇺",
  es: "🇪🇸",
  fr: "🇫🇷",
  it: "🇮🇹",
};

const langNames = {
  en: "English",
  de: "Deutsch",
  ru: "Русский",
  es: "Español",
  fr: "Français",
  it: "Italiano",
};

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const { dark } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const h = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "8px 12px",
          borderRadius: 999,
          border: `1px solid ${
            dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)"
          }`,
          background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
          color: dark ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.7)",
          cursor: "pointer",
          fontSize: 13,
          fontWeight: 500,
        }}
      >
        <Globe size={14} />
        <span>{flags[lang]}</span>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "calc(100% + 8px)",
            zIndex: 100,
            background: dark ? "#1a2235" : "#fff",
            border: `1px solid ${
              dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
            }`,
            borderRadius: 16,
            overflow: "hidden",
            minWidth: 150,
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          }}
        >
          {Object.keys(translations).map((loc) => (
            <button
              key={loc}
              onClick={() => {
                setLang(loc);
                setOpen(false);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                width: "100%",
                padding: "10px 14px",
                background:
                  loc === lang
                    ? dark
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(0,0,0,0.06)"
                    : "transparent",
                color: dark
                  ? loc === lang
                    ? "#fff"
                    : "rgba(255,255,255,0.6)"
                  : loc === lang
                  ? "#000"
                  : "rgba(0,0,0,0.6)",
                fontSize: 13,
                fontWeight: loc === lang ? 600 : 400,
                cursor: "pointer",
                border: "none",
                textAlign: "left",
              }}
            >
              <span style={{ fontSize: 16 }}>{flags[loc]}</span>
              <span>{langNames[loc]}</span>
              {loc === lang && <Check size={13} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}