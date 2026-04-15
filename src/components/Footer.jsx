import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import { Orbit, Mail } from "./icons";

export default function Footer() {
  const { t } = useLang();
  const { dark } = useTheme();

  const text = "#f8fafc";
  const muted = dark ? "rgba(255,255,255,0.58)" : "rgba(255,255,255,0.72)";
  const linkBase = dark ? "rgba(255,255,255,0.58)" : "rgba(255,255,255,0.72)";
  const bg = dark
    ? "linear-gradient(180deg, #040b15 0%, #02070f 100%)"
    : "linear-gradient(180deg, #0f172a 0%, #111c31 100%)";

  const handleEnter = (e) => {
    e.currentTarget.style.color = "#67e8f9";
  };

  const handleLeave = (e) => {
    e.currentTarget.style.color = linkBase;
  };

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        background: bg,
        color: "#fff",
        padding: "28px 32px 26px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-60px",
          left: "-60px",
          width: 220,
          height: 220,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.10), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          right: "-60px",
          width: 240,
          height: 240,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251,191,36,0.10), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 24,
            alignItems: "center",
            paddingBottom: 22,
            marginBottom: 18,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 16,
                background:
                  "linear-gradient(135deg, rgba(34,211,238,0.18), rgba(251,191,36,0.14))",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#67e8f9",
              }}
            >
              <Orbit size={20} />
            </div>

            <div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: text,
                }}
              >
                {t.footer.company}
              </div>
              <div
                style={{
                  marginTop: 4,
                  fontSize: 12,
                  color: muted,
                  lineHeight: 1.6,
                }}
              >
                Premium digital banking built for secure growth and long-term trust.
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "11px 14px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.04)",
                color: "#67e8f9",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <Mail size={15} />
              contact@banksphere.io
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 14,
          }}
        >
          <div style={{ fontSize: 13, color: muted }}>
            © {new Date().getFullYear()} {t.footer.company} · {t.footer.rights}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
              fontSize: 13,
            }}
          >
            {[t.footer.imprint, t.footer.privacy, t.footer.terms, t.footer.cookie].map(
              (item, i) => (
                <span
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  {i > 0 && (
                    <span style={{ color: "rgba(255,255,255,0.20)" }}>•</span>
                  )}

                  <a
                    href="#"
                    style={{
                      color: linkBase,
                      textDecoration: "none",
                      fontWeight: 600,
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                  >
                    {item}
                  </a>
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}