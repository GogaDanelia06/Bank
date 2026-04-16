import { useRef } from "react";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import { useInView } from "../hooks/useInView";
import Reveal from "../components/Reveal";
import { Building, BadgeCheck, Check } from "../components/icons";

export default function About() {
  const { t } = useLang();
  const { dark } = useTheme();
  const ref = useRef(null);
  const visible = useInView(ref);

  const text = dark ? "#f8fafc" : "#0f172a";
  const muted = dark ? "rgba(255,255,255,0.62)" : "rgba(15,23,42,0.62)";
  const soft = dark ? "rgba(255,255,255,0.42)" : "rgba(15,23,42,0.42)";
  const border = dark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)";
  const panelBg = dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.86)";

  return (
    <section
      style={{
        padding: "110px 32px",
        position: "relative",
        overflow: "hidden",
        background: dark
          ? "linear-gradient(180deg, #08111d 0%, #0b1524 100%)"
          : "linear-gradient(180deg, #f8fbff 0%, #f3f7fb 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: dark
            ? "linear-gradient(rgba(255,255,255,0.024) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.024) 1px, transparent 1px)"
            : "linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.35))",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "8%",
          right: "-8%",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.10), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-8%",
          left: "-8%",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251,191,36,0.10), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 18px",
                borderRadius: 999,
                marginBottom: 22,
                border: `1px solid ${border}`,
                background: panelBg,
                color: dark ? "#cbd5e1" : "#334155",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                backdropFilter: "blur(14px)",
              }}
            >
              <Building size={14} />
              {t.about.badge}
            </div>

            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
                fontWeight: 900,
                letterSpacing: "-0.05em",
                lineHeight: 1.08,
                color: text,
                maxWidth: 820,
                margin: "0 auto 18px",
              }}
            >
              {t.about.title}
            </h2>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.8,
                color: muted,
                maxWidth: 700,
                margin: "0 auto",
              }}
            >
              {t.about.description}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                marginTop: 26,
              }}
            >
              <div
                style={{
                  height: 1,
                  width: 82,
                  background:
                    "linear-gradient(90deg, transparent, rgba(34,211,238,0.9))",
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #22d3ee, #fbbf24)",
                  boxShadow: "0 0 18px rgba(34,211,238,0.45)",
                }}
              />
              <div
                style={{
                  height: 1,
                  width: 82,
                  background:
                    "linear-gradient(90deg, rgba(251,191,36,0.9), transparent)",
                }}
              />
            </div>
          </div>
        </Reveal>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "0.95fr 1.05fr",
            border: `1px solid ${border}`,
            borderRadius: 32,
            overflow: "hidden",
            background: panelBg,
            backdropFilter: "blur(20px)",
            boxShadow: dark
              ? "0 30px 90px rgba(0,0,0,0.34)"
              : "0 28px 80px rgba(15,23,42,0.08)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div
            style={{
              minHeight: 520,
              position: "relative",
              background: dark
                ? "linear-gradient(135deg, #0f172a 0%, #111c31 100%)"
                : "linear-gradient(135deg, #dbeafe 0%, #f8fafc 100%)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('/assets/2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: dark ? 0.52 : 0.58,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: dark
                  ? "linear-gradient(to top, rgba(3,7,18,0.80) 0%, rgba(3,7,18,0.18) 50%, rgba(34,211,238,0.08) 100%)"
                  : "linear-gradient(to top, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.10) 60%, rgba(34,211,238,0.10) 100%)",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: 24,
                left: 24,
                width: 58,
                height: 58,
                borderRadius: 18,
                background: dark
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(255,255,255,0.74)",
                backdropFilter: "blur(10px)",
                border: `1px solid ${border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#22d3ee",
                boxShadow: dark
                  ? "0 12px 30px rgba(0,0,0,0.22)"
                  : "0 12px 26px rgba(15,23,42,0.08)",
              }}
            >
              <BadgeCheck size={26} />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                margin: 24,
                padding: "18px 20px",
                borderRadius: 20,
                background: dark
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(255,255,255,0.78)",
                border: `1px solid ${border}`,
                backdropFilter: "blur(16px)",
                maxWidth: 320,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: soft,
                  marginBottom: 10,
                }}
              >
                Trusted Foundation
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color: text,
                  letterSpacing: "-0.03em",
                  marginBottom: 8,
                }}
              >
                Built for long-term relationships and protected growth.
              </div>
              <div
                style={{
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: muted,
                }}
              >
                Modern infrastructure, human guidance, and premium service working together.
              </div>
            </div>
          </div>

          <div style={{ padding: "48px 48px 46px 46px" }}>
            <h3
              style={{
                fontSize: "clamp(1.65rem, 2.8vw, 2.3rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: text,
                marginBottom: 18,
              }}
            >
              {t.about.cardTitle}
            </h3>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.9,
                color: muted,
                marginBottom: 34,
                maxWidth: 640,
              }}
            >
              {t.about.cardDescription}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 18,
                marginBottom: 30,
              }}
            >
              {[
                {
                  val: t.about.clientsValue,
                  label: t.about.clientsLabel,
                  accent: "#22d3ee",
                },
                {
                  val: t.about.expValue,
                  label: t.about.expLabel,
                  accent: "#fbbf24",
                },
                {
                  val: t.about.supportValue,
                  label: t.about.supportLabel,
                  accent: "#10b981",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: 22,
                    padding: "22px 18px",
                    background: dark
                      ? "rgba(255,255,255,0.03)"
                      : "rgba(255,255,255,0.70)",
                    border: `1px solid ${border}`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
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
                height: 1,
                background: dark
                  ? "linear-gradient(90deg, rgba(34,211,238,0.18), rgba(255,255,255,0.05), rgba(251,191,36,0.18))"
                  : "linear-gradient(90deg, rgba(34,211,238,0.20), rgba(15,23,42,0.05), rgba(251,191,36,0.18))",
                marginBottom: 26,
              }}
            />

            <div style={{ display: "grid", gap: 14 }}>
              {[t.about.f1, t.about.f2, t.about.f3].map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    padding: "14px 16px",
                    borderRadius: 18,
                    background: dark
                      ? "rgba(255,255,255,0.025)"
                      : "rgba(255,255,255,0.64)",
                    border: `1px solid ${border}`,
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: dark
                        ? "rgba(34,211,238,0.14)"
                        : "rgba(34,211,238,0.10)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#22d3ee",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <Check size={14} />
                  </div>

                  <span
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: dark
                        ? "rgba(255,255,255,0.80)"
                        : "rgba(15,23,42,0.78)",
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}