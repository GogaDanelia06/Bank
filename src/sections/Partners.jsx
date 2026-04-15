import Reveal from "../components/Reveal";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import { Banknote, Mail } from "../components/icons";

export default function Partners() {
  const { t } = useLang();
  const { dark } = useTheme();

  const text = dark ? "#f8fafc" : "#ffffff";
  const muted = dark ? "rgba(255,255,255,0.64)" : "rgba(255,255,255,0.70)";
  const soft = dark ? "rgba(255,255,255,0.42)" : "rgba(255,255,255,0.46)";
  const border = "rgba(255,255,255,0.10)";
  const partnerItems = [
    "Capital",
    "Advisory",
    "Global",
    "Secure",
    "Private",
    "Vault",
    "Yield",
    "Trust",
  ];

  return (
    <section
      style={{
        padding: "110px 32px",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 12% 18%, rgba(34,211,238,0.10), transparent 24%), radial-gradient(circle at 88% 82%, rgba(251,191,36,0.10), transparent 22%), linear-gradient(135deg, #07101b 0%, #0c1625 48%, #101a2d 100%)",
        color: "#fff",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.024) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.024) 1px, transparent 1px)",
          backgroundSize: "58px 58px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.35))",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "-8%",
          right: "-6%",
          width: 340,
          height: 340,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.12), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-8%",
          left: "-6%",
          width: 340,
          height: 340,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251,191,36,0.10), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative" }}>
        <Reveal>
          <div style={{ marginBottom: 60, textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 18px",
                borderRadius: 999,
                border: `1px solid ${border}`,
                background: "rgba(255,255,255,0.04)",
                color: "#cbd5e1",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 20,
                backdropFilter: "blur(14px)",
              }}
            >
              <Banknote size={15} />
              {t.partners.badge}
            </div>

            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
                fontWeight: 900,
                letterSpacing: "-0.05em",
                lineHeight: 1.08,
                color: text,
                maxWidth: 860,
                margin: "0 auto 16px",
              }}
            >
              {t.partners.title}
            </h2>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.8,
                color: muted,
                maxWidth: 760,
                margin: "0 auto",
              }}
            >
              Built through trusted collaboration across private banking,
              infrastructure, global operations, and client experience.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 18,
            marginBottom: 72,
          }}
        >
          {partnerItems.map((item, i) => (
            <Reveal key={item} delay={i * 0.05}>
              <div
                style={{
                  borderRadius: 24,
                  padding: "22px 20px",
                  border: `1px solid ${border}`,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                  backdropFilter: "blur(16px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  boxShadow: "0 14px 34px rgba(0,0,0,0.16)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 42px rgba(0,0,0,0.24)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow =
                    "0 14px 34px rgba(0,0,0,0.16)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 16,
                      background: "rgba(255,255,255,0.08)",
                      border: `1px solid ${border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: i % 2 === 0 ? "#67e8f9" : "#fbbf24",
                    }}
                  >
                    <Banknote size={22} />
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 800,
                        color: "#fff",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {item}
                    </div>
                    <div
                      style={{
                        marginTop: 4,
                        fontSize: 11,
                        fontWeight: 700,
                        color: soft,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Trusted Network
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: i % 2 === 0 ? "#22d3ee" : "#fbbf24",
                    boxShadow:
                      i % 2 === 0
                        ? "0 0 16px rgba(34,211,238,0.8)"
                        : "0 0 16px rgba(251,191,36,0.8)",
                    flexShrink: 0,
                  }}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 28,
            alignItems: "stretch",
          }}
        >
          <Reveal>
            <div
              style={{
                borderRadius: 30,
                padding: "34px 34px 30px",
                border: `1px solid ${border}`,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))",
                backdropFilter: "blur(20px)",
                boxShadow: "0 22px 56px rgba(0,0,0,0.20)",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    width: 78,
                    height: 78,
                    borderRadius: 24,
                    background:
                      "linear-gradient(135deg, rgba(34,211,238,0.18), rgba(251,191,36,0.16))",
                    border: `1px solid ${border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 30,
                    fontWeight: 900,
                    color: "#fff",
                    boxShadow: "0 14px 30px rgba(0,0,0,0.18)",
                    flexShrink: 0,
                  }}
                >
                  B
                </div>

                <div>
                  <div
                    style={{
                      fontSize: 24,
                      fontWeight: 900,
                      letterSpacing: "-0.03em",
                      color: "#fff",
                    }}
                  >
                    BankSphere
                  </div>
                  <div
                    style={{
                      marginTop: 6,
                      fontSize: 13,
                      color: soft,
                      lineHeight: 1.6,
                      maxWidth: 340,
                    }}
                  >
                    {t.partners.companyLabel}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 14,
                }}
              >
                {[
                  { label: "Regions", value: "26+" },
                  { label: "Partners", value: "120" },
                  { label: "Integrations", value: "48" },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      borderRadius: 22,
                      padding: "18px 16px",
                      border: `1px solid ${border}`,
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 24,
                        fontWeight: 900,
                        letterSpacing: "-0.04em",
                        color: i === 0 ? "#67e8f9" : i === 1 ? "#fbbf24" : "#86efac",
                      }}
                    >
                      {item.value}
                    </div>
                    <div
                      style={{
                        marginTop: 6,
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
          </Reveal>

          <Reveal delay={0.14}>
            <div
              style={{
                borderRadius: 30,
                padding: "34px 34px 30px",
                border: `1px solid ${border}`,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))",
                backdropFilter: "blur(20px)",
                boxShadow: "0 22px 56px rgba(0,0,0,0.20)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.48)",
                    textTransform: "uppercase",
                    letterSpacing: "0.10em",
                    marginBottom: 14,
                  }}
                >
                  Strategic Collaboration
                </div>

                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.9,
                    color: muted,
                    marginBottom: 26,
                  }}
                >
                  {t.partners.description}
                </p>
              </div>

              <div
                style={{
                  borderRadius: 22,
                  padding: "18px 18px",
                  border: `1px solid ${border}`,
                  background: "rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    background: "rgba(34,211,238,0.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#67e8f9",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={18} />
                </div>

                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: soft,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 4,
                    }}
                  >
                    Partnership Contact
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 800,
                      color: "#fff",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {t.partners.contact}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}