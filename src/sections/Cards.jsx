import Reveal from "../components/Reveal";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import { Banknote, ArrowRight } from "../components/icons";

export default function Cards() {
  const { t } = useLang();
  const { dark } = useTheme();

  const text = dark ? "#f8fafc" : "#0f172a";
  const muted = dark ? "rgba(255,255,255,0.60)" : "rgba(15,23,42,0.60)";
  const border = dark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)";

  const items = [
    {
      title: t.cards.i0title,
      desc: t.cards.i0desc,
      accent: "#22d3ee",
      glow: "rgba(34,211,238,0.22)",
      tag: "Premium Access",
    },
    {
      title: t.cards.i1title,
      desc: t.cards.i1desc,
      accent: "#fbbf24",
      glow: "rgba(251,191,36,0.22)",
      tag: "Protected Yield",
    },
    {
      title: t.cards.i2title,
      desc: t.cards.i2desc,
      accent: "#8b5cf6",
      glow: "rgba(139,92,246,0.22)",
      tag: "Global Payments",
    },
  ];

  return (
    <section
      style={{
        padding: "110px 32px",
        position: "relative",
        overflow: "hidden",
        background: dark
          ? "linear-gradient(180deg, #060d18 0%, #09111d 100%)"
          : "linear-gradient(180deg, #f8fbff 0%, #f3f7fb 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: dark
            ? "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)"
            : "linear-gradient(rgba(15,23,42,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.028) 1px, transparent 1px)",
          backgroundSize: "58px 58px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.40))",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-6%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.10), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "0%",
          right: "-6%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251,191,36,0.10), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 66 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 18px",
                borderRadius: 999,
                border: `1px solid ${border}`,
                background: dark
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(255,255,255,0.80)",
                color: dark ? "#cbd5e1" : "#334155",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 20,
                backdropFilter: "blur(14px)",
              }}
            >
              <Banknote size={16} />
              Exclusive Banking Offers
            </div>

            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
                fontWeight: 900,
                letterSpacing: "-0.05em",
                lineHeight: 1.08,
                color: text,
                marginBottom: 16,
              }}
            >
              {t.cards.title}
            </h2>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.8,
                color: muted,
                maxWidth: 720,
                margin: "0 auto",
              }}
            >
              {t.cards.description}
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}
        >
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div
                style={{
                  position: "relative",
                  borderRadius: 30,
                  overflow: "hidden",
                  border: `1px solid ${border}`,
                  background: dark
                    ? "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03))"
                    : "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(248,250,252,0.92))",
                  backdropFilter: "blur(18px)",
                  boxShadow: dark
                    ? "0 22px 60px rgba(0,0,0,0.28)"
                    : "0 20px 50px rgba(15,23,42,0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = dark
                    ? "0 28px 72px rgba(0,0,0,0.34)"
                    : "0 26px 60px rgba(15,23,42,0.12)";
                  e.currentTarget.style.borderColor = item.glow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = dark
                    ? "0 22px 60px rgba(0,0,0,0.28)"
                    : "0 20px 50px rgba(15,23,42,0.08)";
                  e.currentTarget.style.borderColor = border;
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -90,
                    right: -70,
                    width: 220,
                    height: 220,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${item.glow}, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    padding: 22,
                    borderBottom: `1px solid ${border}`,
                    background: dark
                      ? `linear-gradient(135deg, ${item.accent}14 0%, rgba(255,255,255,0.02) 100%)`
                      : `linear-gradient(135deg, ${item.accent}14 0%, rgba(255,255,255,0.55) 100%)`,
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 14px",
                      borderRadius: 999,
                      background: dark
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(255,255,255,0.76)",
                      border: `1px solid ${border}`,
                      color: item.accent,
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 18,
                    }}
                  >
                    {item.tag}
                  </div>

                  <div
                    style={{
                      minHeight: 190,
                      borderRadius: 24,
                      background: dark
                        ? "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))"
                        : "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(241,245,249,0.85))",
                      border: `1px solid ${border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: "auto auto 18px 18px",
                        width: 52,
                        height: 52,
                        borderRadius: "50%",
                        background: `${item.accent}22`,
                        filter: "blur(2px)",
                      }}
                    />

                    <div
                      style={{
                        width: 250,
                        maxWidth: "88%",
                        height: 148,
                        borderRadius: 24,
                        background: `linear-gradient(135deg, ${item.accent}ee, ${item.accent}88)`,
                        boxShadow: `0 18px 40px ${item.glow}`,
                        border: dark
                          ? "1px solid rgba(255,255,255,0.16)"
                          : "1px solid rgba(255,255,255,0.65)",
                        position: "relative",
                        padding: "18px 20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transform: "rotate(-6deg)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 12,
                            fontWeight: 800,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "rgba(7,17,31,0.72)",
                          }}
                        >
                          EverTrust
                        </div>

                        <div
                          style={{
                            width: 34,
                            height: 24,
                            borderRadius: 8,
                            background: "rgba(255,255,255,0.24)",
                            border: "1px solid rgba(255,255,255,0.38)",
                          }}
                        />
                      </div>

                      <div
                        style={{
                          fontSize: 18,
                          fontWeight: 900,
                          letterSpacing: "0.18em",
                          color: "#07111f",
                        }}
                      >
                        •••• 2458
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "rgba(7,17,31,0.65)",
                          }}
                        >
                          Premium Client
                        </div>
                        <Banknote size={22} />
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ position: "relative", zIndex: 1, padding: "24px 24px 26px" }}>
                  <h3
                    style={{
                      fontSize: 21,
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      lineHeight: 1.2,
                      color: text,
                      marginBottom: 12,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.8,
                      color: muted,
                      marginBottom: 22,
                      minHeight: 82,
                    }}
                  >
                    {item.desc}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: 18,
                      borderTop: `1px solid ${border}`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: item.accent,
                      }}
                    >
                      Learn more
                    </div>

                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: dark
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(15,23,42,0.05)",
                        border: `1px solid ${border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: item.accent,
                      }}
                    >
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}