import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import { usePage } from "../context/PageContext";
import {
  Shield,
  BadgeCheck,
  Lock,
  ArrowRight,
} from "../components/icons";

export default function Hero() {
  const { t } = useLang();
  const { dark } = useTheme();
  const { setPage } = usePage();

  const text = dark ? "#f8fafc" : "#0f172a";
  const muted = dark ? "rgba(255,255,255,0.62)" : "rgba(15,23,42,0.62)";
  const soft = dark ? "rgba(255,255,255,0.42)" : "rgba(15,23,42,0.42)";
  const cardBg = dark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.82)";
  const cardBorder = dark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)";

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "140px 32px 72px",
        background: dark
          ? "radial-gradient(circle at top left, rgba(34,211,238,0.10), transparent 28%), radial-gradient(circle at 85% 18%, rgba(251,191,36,0.10), transparent 22%), linear-gradient(135deg, #030712 0%, #07111f 45%, #0b1729 100%)"
          : "radial-gradient(circle at top left, rgba(34,211,238,0.10), transparent 28%), radial-gradient(circle at 85% 18%, rgba(251,191,36,0.12), transparent 22%), linear-gradient(135deg, #f8fbff 0%, #eef6fb 45%, #f8fafc 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: dark
            ? "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)"
            : "linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.75), transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "-8%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.12), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "-6%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(251,191,36,0.10), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1320, margin: "0 auto", width: "100%", position: "relative" }}>
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div style={{ animation: "fadeUp 0.8s ease" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 18px",
                borderRadius: 999,
                background: dark
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(255,255,255,0.78)",
                border: `1px solid ${cardBorder}`,
                boxShadow: dark
                  ? "inset 0 1px 0 rgba(255,255,255,0.04)"
                  : "0 8px 20px rgba(15,23,42,0.05)",
                color: "#22d3ee",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 28,
              }}
            >
              <BadgeCheck size={14} />
              {t.hero.badge}
            </div>

            <h1
              style={{
                fontSize: "clamp(2.8rem, 5vw, 5rem)",
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: "-0.055em",
                color: text,
                maxWidth: 760,
                marginBottom: 24,
              }}
            >
              {t.hero.title}
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.85,
                color: muted,
                maxWidth: 610,
                marginBottom: 34,
              }}
            >
              {t.hero.description}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                marginBottom: 34,
              }}
            >
              <button
                onClick={() => setPage("register")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "16px 26px",
                  borderRadius: 18,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 15,
                  fontWeight: 800,
                  color: "#07111f",
                  background:
                    "linear-gradient(135deg, #67e8f9 0%, #22d3ee 42%, #fbbf24 100%)",
                  boxShadow: "0 16px 36px rgba(34,211,238,0.25)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 42px rgba(34,211,238,0.34)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow =
                    "0 16px 36px rgba(34,211,238,0.25)";
                }}
              >
                {t.hero.primaryCta}
                <ArrowRight size={16} />
              </button>

              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "16px 24px",
                  borderRadius: 18,
                  border: `1px solid ${cardBorder}`,
                  background: dark
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(255,255,255,0.72)",
                  color: text,
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  backdropFilter: "blur(16px)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                }}
              >
                {t.hero.secondaryCta}
              </button>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
              }}
            >
              {[
                { icon: <Shield size={14} />, label: t.hero.licensed },
                { icon: <BadgeCheck size={14} />, label: t.hero.standards },
                { icon: <Lock size={14} />, label: t.hero.security },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 14px",
                    borderRadius: 999,
                    border: `1px solid ${cardBorder}`,
                    background: dark
                      ? "rgba(255,255,255,0.03)"
                      : "rgba(255,255,255,0.72)",
                    color: muted,
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  <span style={{ color: "#22c55e", display: "flex" }}>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="hero-card" style={{ animation: "fadeIn 1s ease 0.25s both" }}>
            <div
              style={{
                position: "relative",
                borderRadius: 32,
                padding: 24,
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                backdropFilter: "blur(24px)",
                boxShadow: dark
                  ? "0 28px 80px rgba(0,0,0,0.42)"
                  : "0 28px 70px rgba(15,23,42,0.10)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -80,
                  right: -60,
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(34,211,238,0.16), transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -90,
                  left: -80,
                  width: 240,
                  height: 240,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(251,191,36,0.14), transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: 24,
                  overflow: "hidden",
                  border: `1px solid ${cardBorder}`,
                  background: dark
                    ? "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))"
                    : "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(248,250,252,0.90))",
                }}
              >
                <div
                  style={{
                    padding: "22px 22px 18px",
                    borderBottom: `1px solid ${cardBorder}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 16,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div
                        style={{
                          width: 54,
                          height: 54,
                          borderRadius: 18,
                          background:
                            "linear-gradient(135deg, rgba(34,211,238,0.20), rgba(251,191,36,0.16))",
                          border: `1px solid ${cardBorder}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 20,
                          fontWeight: 900,
                          color: dark ? "#fff" : "#0f172a",
                        }}
                      >
                        B
                      </div>

                      <div>
                        <div
                          style={{
                            fontSize: 17,
                            fontWeight: 800,
                            color: text,
                          }}
                        >
                            BankSphere
                        </div>
                        <div
                          style={{
                            marginTop: 4,
                            fontSize: 12,
                            color: soft,
                          }}
                        >
                          {t.hero.cardSubtitle}
                        </div>
                      </div>
                    </div>

                    <div style={{ textAlign: "right" }}>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: soft,
                        }}
                      >
                        {t.hero.totalAssets}
                      </div>
                      <div
                        style={{
                          marginTop: 4,
                          fontSize: 28,
                          fontWeight: 900,
                          letterSpacing: "-0.04em",
                          color: "#10b981",
                        }}
                      >
                        € 4.8M
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ padding: 22 }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 14,
                      marginBottom: 18,
                    }}
                  >
                    <div
                      style={{
                        borderRadius: 18,
                        padding: "18px 18px 16px",
                        background: dark
                          ? "rgba(16,185,129,0.10)"
                          : "rgba(16,185,129,0.07)",
                        border: "1px solid rgba(16,185,129,0.16)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: soft,
                          marginBottom: 8,
                        }}
                      >
                        {t.hero.returnLabel}
                      </div>
                      <div
                        style={{
                          fontSize: 26,
                          fontWeight: 900,
                          letterSpacing: "-0.04em",
                          color: "#10b981",
                        }}
                      >
                        +18.2%
                      </div>
                    </div>

                    <div
                      style={{
                        borderRadius: 18,
                        padding: "18px 18px 16px",
                        background: dark
                          ? "rgba(59,130,246,0.10)"
                          : "rgba(59,130,246,0.07)",
                        border: "1px solid rgba(59,130,246,0.14)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: soft,
                          marginBottom: 8,
                        }}
                      >
                        {t.hero.riskLabel}
                      </div>
                      <div
                        style={{
                          fontSize: 26,
                          fontWeight: 900,
                          letterSpacing: "-0.04em",
                          color: "#60a5fa",
                        }}
                      >
                        {t.hero.riskValue}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      borderRadius: 20,
                      padding: 18,
                      background: dark
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(15,23,42,0.03)",
                      border: `1px solid ${cardBorder}`,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 10,
                        fontSize: 12,
                        color: soft,
                        fontWeight: 700,
                      }}
                    >
                      <span>{t.hero.portfolio}</span>
                      <span>100%</span>
                    </div>

                    <div
                      style={{
                        height: 12,
                        borderRadius: 999,
                        background: dark
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(15,23,42,0.08)",
                        overflow: "hidden",
                        marginBottom: 16,
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 999,
                          background:
                            "linear-gradient(90deg, #0ea5e9 0%, #3b82f6 45%, #10b981 100%)",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 10,
                      }}
                    >
                      {[
                       { label: t.hero.equitiesLabel, value: "38%" },
                       { label: t.hero.cashLabel, value: "28%" },
                       { label: t.hero.fundsLabel, value: "34%" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          style={{
                            borderRadius: 16,
                            padding: "12px 10px",
                            background: dark
                              ? "rgba(255,255,255,0.03)"
                              : "rgba(255,255,255,0.72)",
                            border: `1px solid ${cardBorder}`,
                            textAlign: "center",
                          }}
                        >
                          <div
                            style={{
                              fontSize: 17,
                              fontWeight: 800,
                              color: text,
                              letterSpacing: "-0.03em",
                            }}
                          >
                            {item.value}
                          </div>
                          <div
                            style={{
                              marginTop: 4,
                              fontSize: 11,
                              fontWeight: 700,
                              color: soft,
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                            }}
                          >
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: 18,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
              >
                {[
                  { title: t.hero.advisoryTitle, value: t.hero.advisoryValue },
                  { title: t.hero.capitalTitle, value: t.hero.capitalValue },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      borderRadius: 20,
                      padding: "16px 18px",
                      background: dark
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(255,255,255,0.74)",
                      border: `1px solid ${cardBorder}`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: soft,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: 8,
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: 800,
                        color: text,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}