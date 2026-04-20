import { useEffect, useState } from "react";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import { usePage } from "../context/PageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { Orbit, Sun, Moon, ArrowUpRight } from "./icons";

export default function Header() {
  const { t } = useLang();
  const { dark, toggle } = useTheme();
  const { setPage, page } = usePage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shellBg = dark
    ? scrolled
      ? "rgba(5, 10, 20, 0.88)"
      : "rgba(5, 10, 20, 0.62)"
    : scrolled
    ? "rgba(255, 255, 255, 0.88)"
    : "rgba(255, 255, 255, 0.68)";

  const shellBorder = dark
    ? "1px solid rgba(255,255,255,0.08)"
    : "1px solid rgba(15,23,42,0.08)";

  const muted = dark ? "rgba(255,255,255,0.58)" : "rgba(15,23,42,0.55)";
  const text = dark ? "#f8fafc" : "#0f172a";

  const navButton = (active) => ({
    border: "none",
    background: active
      ? dark
        ? "rgba(255,255,255,0.08)"
        : "rgba(15,23,42,0.06)"
      : "transparent",
    color: active ? text : muted,
    padding: "10px 14px",
    borderRadius: 999,
    fontSize: 13,
    fontWeight: active ? 700 : 600,
    cursor: "pointer",
    transition: "all 0.2s ease",
    letterSpacing: "0.01em",
  });

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "16px 20px",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
            minHeight: 78,
            padding: "0 18px 0 16px",
            borderRadius: 24,
            background: shellBg,
            border: shellBorder,
            backdropFilter: "blur(22px)",
            boxShadow: dark
              ? scrolled
                ? "0 18px 50px rgba(0,0,0,0.38)"
                : "0 10px 30px rgba(0,0,0,0.20)"
              : scrolled
              ? "0 18px 40px rgba(15,23,42,0.10)"
              : "0 10px 24px rgba(15,23,42,0.06)",
            transition: "all 0.25s ease",
          }}
        >
          <button
            onClick={() => setPage("home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 16,
                background: dark
                  ? "linear-gradient(135deg, rgba(34,211,238,0.18), rgba(251,191,36,0.10))"
                  : "linear-gradient(135deg, rgba(34,211,238,0.14), rgba(251,191,36,0.12))",
                border: dark
                  ? "1px solid rgba(255,255,255,0.10)"
                  : "1px solid rgba(15,23,42,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: dark ? "#67e8f9" : "#0891b2",
                boxShadow: dark
                  ? "inset 0 1px 0 rgba(255,255,255,0.04)"
                  : "inset 0 1px 0 rgba(255,255,255,0.7)",
              }}
            >
              <Orbit size={20} />
            </div>

            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontSize: 17,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: text,
                  lineHeight: 1,
                }}
              >
                EverTrust
              </div>
              <div
                style={{
                  marginTop: 4,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: muted,
                }}
              >
                { t.nav.subtitle }
              </div>
            </div>
          </button>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: 4,
              borderRadius: 999,
              background: dark
                ? "rgba(255,255,255,0.03)"
                : "rgba(15,23,42,0.03)",
              border: dark
                ? "1px solid rgba(255,255,255,0.06)"
                : "1px solid rgba(15,23,42,0.06)",
            }}
          >
            <button
              onClick={() => setPage("home")}
              style={navButton(page === "home")}
            >
              { t.nav.home }
            </button>
            <button
              onClick={() => setPage("register")}
              style={navButton(page === "register")}
            >
              { t.nav.register }
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <LanguageSwitcher />

            <button
              onClick={toggle}
              aria-label="Toggle theme"
              style={{
                width: 40,
                height: 40,
                borderRadius: 999,
                border: dark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(15,23,42,0.08)",
                background: dark
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(15,23,42,0.04)",
                color: text,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
              }}
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <button
              onClick={() => setPage("register")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "11px 18px",
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.02em",
                color: "#07111f",
                background:
                  "linear-gradient(135deg, #67e8f9 0%, #22d3ee 40%, #fbbf24 100%)",
                boxShadow: "0 10px 28px rgba(34,211,238,0.25)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 14px 34px rgba(34,211,238,0.33)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow =
                  "0 10px 28px rgba(34,211,238,0.25)";
              }}
            >
              {t.nav.cta}
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}