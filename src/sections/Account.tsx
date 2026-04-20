import Reveal from "../components/Reveal";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import { usePage } from "../context/PageContext";
import { TrendingUp, Check, ArrowRight } from "../components/icons";

export default function Account() {
  const { t } = useLang();
  const { dark } = useTheme();
  const { setPage } = usePage();

  const text = dark ? "#f8fafc" : "#0f172a";
  const muted = dark ? "rgba(255,255,255,0.68)" : "rgba(15,23,42,0.72)";
  const soft = dark ? "rgba(255,255,255,0.42)" : "rgba(15,23,42,0.48)";
  const border = dark ? "rgba(255,255,255,0.10)" : "rgba(15,23,42,0.10)";

  return (
    <section
      style={{
        padding: "110px 32px",
        position: "relative",
        overflow: "hidden",
        background: dark
          ? "radial-gradient(circle at 20% 10%, rgba(34,211,238,0.10), transparent 25%), radial-gradient(circle at 85% 85%, rgba(251,191,36,0.10), transparent 22%), linear-gradient(135deg, #050c16 0%, #0a1424 45%, #10182d 100%)"
          : "radial-gradient(circle at 20% 10%, rgba(34,211,238,0.10), transparent 25%), radial-gradient(circle at 85% 85%, rgba(251,191,36,0.10), transparent 22%), linear-gradient(135deg, #f8fbff 0%, #edf5ff 45%, #e7f0fb 100%)",
        color: text,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: dark
            ? "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)"
            : "linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.35))",
        }}
      />

      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.92fr 1.08fr",
            gap: 34,
            alignItems: "stretch",
          }}
        >
          <Reveal>
            <div
              style={{
                borderRadius: 32,
                overflow: "hidden",
                position: "relative",
                minHeight: 500,
                background: dark ? "#0f172a" : "#ffffff",
                border: `1px solid ${border}`,
                boxShadow: dark
                  ? "0 24px 70px rgba(0,0,0,0.35)"
                  : "0 24px 70px rgba(15,23,42,0.10)",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "url('/assets/3.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: dark ? 0.72 : 0.9,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: dark
                    ? "linear-gradient(to top, rgba(2,6,23,0.84) 0%, rgba(2,6,23,0.20) 48%, rgba(34,211,238,0.08) 100%)"
                    : "linear-gradient(to top, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.16) 48%, rgba(34,211,238,0.06) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 24,
                  left: 24,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 16px",
                  borderRadius: 999,
                  background: dark
                    ? "rgba(255,255,255,0.10)"
                    : "rgba(255,255,255,0.72)",
                  backdropFilter: "blur(14px)",
                  border: `1px solid ${border}`,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: dark ? "#e2e8f0" : "#0f172a",
                }}
              >
                <TrendingUp size={14} />
                {t.account.eyebrow}
              </div>

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  margin: 24,
                  width: "calc(100% - 48px)",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 14,
                    marginBottom: 14,
                  }}
                >
                  {[
                    { value: t.account.s0value, label: t.account.s0label },
                    { value: t.account.s1value, label: t.account.s1label },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        borderRadius: 20,
                        padding: "18px 18px 16px",
                        background: dark
                          ? "rgba(255,255,255,0.10)"
                          : "rgba(255,255,255,0.76)",
                        backdropFilter: "blur(18px)",
                        border: `1px solid ${border}`,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 24,
                          fontWeight: 900,
                          letterSpacing: "-0.04em",
                          color: i === 0 ? "#06b6d4" : "#f59e0b",
                        }}
                      >
                        {item.value}
                      </div>
                      <div
                        style={{
                          marginTop: 6,
                          fontSize: 11,
                          fontWeight: 700,
                          color: dark
                            ? "rgba(255,255,255,0.58)"
                            : "rgba(15,23,42,0.58)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    borderRadius: 22,
                    padding: "16px 18px",
                    background: dark
                      ? "rgba(255,255,255,0.10)"
                      : "rgba(255,255,255,0.76)",
                    backdropFilter: "blur(18px)",
                    border: `1px solid ${border}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "rgba(251,191,36,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#f59e0b",
                      flexShrink: 0,
                    }}
                  >
                    <Check size={16} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 800,
                        color: text,
                        marginBottom: 2,
                      }}
                    >
                      {t.account.floatingLabel}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: muted,
                        lineHeight: 1.5,
                      }}
                    >
                      Premium day-to-day banking with speed, security, and
                      global flexibility.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div
              style={{
                borderRadius: 32,
                padding: "42px 42px 40px",
                border: `1px solid ${border}`,
                background: dark
                  ? "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)"
                  : "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.82) 100%)",
                backdropFilter: "blur(22px)",
                boxShadow: dark
                  ? "0 26px 80px rgba(0,0,0,0.22)"
                  : "0 26px 80px rgba(15,23,42,0.10)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 18,
                  flexWrap: "wrap",
                  marginBottom: 22,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "0.20em",
                      textTransform: "uppercase",
                      color: soft,
                      marginBottom: 12,
                    }}
                  >
                    {t.account.eyebrow}
                  </div>
                  <h2
                    style={{
                      fontSize: "clamp(2.2rem, 4vw, 3.3rem)",
                      fontWeight: 900,
                      letterSpacing: "-0.05em",
                      lineHeight: 1.04,
                      color: text,
                      maxWidth: 520,
                    }}
                  >
                    {t.account.title}
                  </h2>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 18px",
                    borderRadius: 999,
                    border: `1px solid ${border}`,
                    background: dark
                      ? "rgba(255,255,255,0.07)"
                      : "rgba(15,23,42,0.04)",
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: dark
                      ? "rgba(255,255,255,0.60)"
                      : "rgba(15,23,42,0.60)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <TrendingUp size={14} />
                  {t.account.badge}
                </div>
              </div>

              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.9,
                  color: muted,
                  maxWidth: 650,
                  marginBottom: 30,
                }}
              >
                {t.account.description}
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 16,
                  marginBottom: 28,
                }}
              >
                {[
                  {
                    val: t.account.s0value,
                    label: t.account.s0label,
                    accent: "#06b6d4",
                  },
                  {
                    val: t.account.s1value,
                    label: t.account.s1label,
                    accent: "#f59e0b",
                  },
                  {
                    val: t.account.s2value,
                    label: t.account.s2label,
                    accent: "#22c55e",
                  },
                ].map((s, i) => (
                  <div
                    key={i}
                    style={{
                      borderRadius: 24,
                      border: `1px solid ${border}`,
                      background: dark
                        ? "rgba(255,255,255,0.05)"
                        : "rgba(255,255,255,0.72)",
                      padding: "24px 18px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                        fontWeight: 900,
                        color: s.accent,
                        letterSpacing: "-0.05em",
                      }}
                    >
                      {s.val}
                    </div>
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: 11,
                        fontWeight: 700,
                        color: soft,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        lineHeight: 1.5,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "grid",
                  gap: 14,
                  marginBottom: 30,
                }}
              >
                {[t.account.f0, t.account.f1, t.account.f2].map((feature, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      border: `1px solid ${border}`,
                      background: dark
                        ? "rgba(255,255,255,0.045)"
                        : "rgba(255,255,255,0.70)",
                      borderRadius: 22,
                      padding: "16px 18px",
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background:
                          i === 0
                            ? "rgba(103,232,249,0.16)"
                            : i === 1
                            ? "rgba(251,191,36,0.16)"
                            : "rgba(134,239,172,0.16)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color:
                          i === 0 ? "#06b6d4" : i === 1 ? "#f59e0b" : "#22c55e",
                        flexShrink: 0,
                      }}
                    >
                      <Check size={16} />
                    </div>

                    <span
                      style={{
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: dark ? "rgba(255,255,255,0.86)" : "#0f172a",
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  borderRadius: 24,
                  padding: "18px 18px 16px",
                  background: dark
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(255,255,255,0.72)",
                  border: `1px solid ${border}`,
                  marginBottom: 28,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: soft,
                    }}
                  >
                    {t.account.footerLabel}
                  </span>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 900,
                      color: "#10b981",
                    }}
                  >
                    +12.8%
                  </span>
                </div>

                <div
                  style={{
                    height: 10,
                    borderRadius: 999,
                    background: dark
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(15,23,42,0.08)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "72%",
                      height: "100%",
                      borderRadius: 999,
                      background:
                        "linear-gradient(90deg, #22c55e 0%, #3b82f6 45%, #10b981 100%)",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  onClick={() => setPage("register")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 14,
                    background:
                      "linear-gradient(135deg, #67e8f9 0%, #22d3ee 42%, #fbbf24 100%)",
                    color: "#07111f",
                    border: "none",
                    borderRadius: 18,
                    padding: "16px 24px",
                    fontSize: 13,
                    fontWeight: 900,
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    boxShadow: "0 14px 34px rgba(34,211,238,0.24)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 18px 40px rgba(34,211,238,0.32)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow =
                      "0 14px 34px rgba(34,211,238,0.24)";
                  }}
                >
                  {t.account.button}
                  <span
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "rgba(7,17,31,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}