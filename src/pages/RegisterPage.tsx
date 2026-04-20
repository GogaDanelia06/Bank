import { useState } from "react";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import { Check, User, Lock, Mail } from "../components/icons";

export default function RegisterPage() {
  const { t } = useLang();
  const { dark } = useTheme();

  const [form, setForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const nextErrors = {};

    if (form.username.trim().length < 3) {
      nextErrors.username = t.register.errUsername;
    }

    if (!form.email.includes("@")) {
      nextErrors.email = t.register.errEmail;
    }

    if (form.password !== form.confirmPassword) {
      nextErrors.confirmPassword = t.register.errPassword;
    }

    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const text = dark ? "#f8fafc" : "#0f172a";
  const muted = dark ? "rgba(255,255,255,0.62)" : "rgba(15,23,42,0.62)";
  const soft = dark ? "rgba(255,255,255,0.42)" : "rgba(15,23,42,0.42)";
  const border = dark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)";
  const panelBg = dark
    ? "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))"
    : "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(248,250,252,0.92))";

  const inputStyle = {
    width: "100%",
    padding: "15px 16px",
    borderRadius: 16,
    border: `1px solid ${border}`,
    background: dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.82)",
    color: text,
    fontSize: 15,
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.2s ease",
    backdropFilter: "blur(10px)",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "140px 32px 80px",
        position: "relative",
        overflow: "hidden",
        background: dark
          ? "radial-gradient(circle at 12% 18%, rgba(34,211,238,0.10), transparent 24%), radial-gradient(circle at 88% 82%, rgba(251,191,36,0.10), transparent 22%), linear-gradient(135deg, #040b15 0%, #09111d 45%, #0f1828 100%)"
          : "radial-gradient(circle at 12% 18%, rgba(34,211,238,0.10), transparent 24%), radial-gradient(circle at 88% 82%, rgba(251,191,36,0.10), transparent 22%), linear-gradient(135deg, #f8fbff 0%, #eef6fb 45%, #f8fafc 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: dark
            ? "linear-gradient(rgba(255,255,255,0.024) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.024) 1px, transparent 1px)"
            : "linear-gradient(rgba(15,23,42,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.028) 1px, transparent 1px)",
          backgroundSize: "58px 58px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.40))",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "6%",
          left: "-8%",
          width: 360,
          height: 360,
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
          right: "-6%",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251,191,36,0.10), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 1320,
          display: "grid",
          gridTemplateColumns: "0.95fr 1.05fr",
          gap: 34,
          alignItems: "stretch",
          position: "relative",
        }}
      >
        <div style={{ animation: "fadeUp 0.6s ease" }}>
          <div
            style={{
              height: "100%",
              borderRadius: 32,
              border: `1px solid ${border}`,
              background: panelBg,
              backdropFilter: "blur(20px)",
              boxShadow: dark
                ? "0 28px 70px rgba(0,0,0,0.30)"
                : "0 24px 56px rgba(15,23,42,0.08)",
              padding: "40px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
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
                    : "rgba(255,255,255,0.75)",
                  color: dark ? "#cbd5e1" : "#334155",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 24,
                }}
              >
                <Lock size={14} />
                {t.register.boxHeader}
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.3rem, 4vw, 4rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.05em",
                  lineHeight: 1.05,
                  color: text,
                  marginBottom: 18,
                  maxWidth: 620,
                }}
              >
                {t.register.title}
              </h1>

              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.9,
                  color: muted,
                  marginBottom: 34,
                  maxWidth: 520,
                }}
              >
                {t.register.subtitle}
              </p>

              <div style={{ display: "grid", gap: 16 }}>
                {[
                  {
                    icon: <User size={18} />,
                    title: t.register.f1title,
                    text: t.register.f1text,
                    accent: "#67e8f9",
                    bg: "rgba(103,232,249,0.14)",
                  },
                  {
                    icon: <Lock size={18} />,
                    title: t.register.f2title,
                    text: t.register.f2text,
                    accent: "#fbbf24",
                    bg: "rgba(251,191,36,0.14)",
                  },
                  {
                    icon: <Mail size={18} />,
                    title: t.register.f3title,
                    text: t.register.f3text,
                    accent: "#86efac",
                    bg: "rgba(134,239,172,0.14)",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 14,
                      padding: "16px 16px",
                      borderRadius: 22,
                      border: `1px solid ${border}`,
                      background: dark
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(255,255,255,0.72)",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 16,
                        flexShrink: 0,
                        background: item.bg,
                        border: `1px solid ${border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: item.accent,
                      }}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: 15,
                          fontWeight: 800,
                          color: text,
                          marginBottom: 5,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          lineHeight: 1.7,
                          color: muted,
                        }}
                      >
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: 26,
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 14,
              }}
            >
              {[
                { value: "3 min", label: t.register.setupLabel },
                { value: "256-bit", label: t.register.encryptionLabel },
                { value: "24/7", label: t.register.accessLabel },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: 22,
                    padding: "18px 16px",
                    border: `1px solid ${border}`,
                    background: dark
                      ? "rgba(255,255,255,0.03)"
                      : "rgba(255,255,255,0.70)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 22,
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
                      lineHeight: 1.5,
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ animation: "fadeUp 0.6s ease 0.12s both" }}>
          <div
            style={{
              background: panelBg,
              border: `1px solid ${border}`,
              borderRadius: 32,
              padding: "36px 36px 34px",
              boxShadow: dark
                ? "0 28px 70px rgba(0,0,0,0.32)"
                : "0 24px 56px rgba(15,23,42,0.08)",
              backdropFilter: "blur(20px)",
              height: "100%",
            }}
          >
            {submitted ? (
              <div
                style={{
                  minHeight: 540,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 76,
                    height: 76,
                    borderRadius: "50%",
                    background: "rgba(16,185,129,0.15)",
                    border: `1px solid ${border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 22,
                    color: "#10b981",
                  }}
                >
                  <Check size={30} />
                </div>

                <h3
                  style={{
                    fontSize: 28,
                    fontWeight: 900,
                    color: text,
                    marginBottom: 12,
                    letterSpacing: "-0.03em",
                  }}
                >
                  { t.register.created }
                </h3>

                <p
                  style={{
                    color: muted,
                    fontSize: 16,
                    lineHeight: 1.8,
                    maxWidth: 420,
                  }}
                >
                  { t.register.created2}
                </p>
              </div>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 16,
                    marginBottom: 28,
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: "0.10em",
                        textTransform: "uppercase",
                        color: soft,
                        marginBottom: 10,
                      }}
                    >
                      Private Enrollment
                    </div>
                    <h2
                      style={{
                        fontSize: 26,
                        fontWeight: 900,
                        letterSpacing: "-0.03em",
                        color: text,
                      }}
                    >
                      {t.register.formTitle}
                    </h2>
                  </div>

                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: 999,
                      border: `1px solid ${border}`,
                      background: dark
                        ? "rgba(255,255,255,0.04)"
                        : "rgba(255,255,255,0.72)",
                      fontSize: 11,
                      fontWeight: 800,
                      color: "#67e8f9",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    { t.register.encrypted}
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                  <div>
                    <input
                      placeholder={t.register.username}
                      value={form.username}
                      onChange={(e) => set("username", e.target.value)}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#22d3ee";
                        e.target.style.boxShadow =
                          "0 0 0 4px rgba(34,211,238,0.10)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = border;
                        e.target.style.boxShadow = "";
                      }}
                    />
                    {errors.username && (
                      <p
                        style={{
                          color: "#ef4444",
                          fontSize: 12,
                          margin: "8px 0 0 2px",
                        }}
                      >
                        {errors.username}
                      </p>
                    )}
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 14,
                    }}
                  >
                    <input
                      placeholder={t.register.firstName}
                      value={form.firstName}
                      onChange={(e) => set("firstName", e.target.value)}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#22d3ee";
                        e.target.style.boxShadow =
                          "0 0 0 4px rgba(34,211,238,0.10)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = border;
                        e.target.style.boxShadow = "";
                      }}
                    />

                    <input
                      placeholder={t.register.lastName}
                      value={form.lastName}
                      onChange={(e) => set("lastName", e.target.value)}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#22d3ee";
                        e.target.style.boxShadow =
                          "0 0 0 4px rgba(34,211,238,0.10)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = border;
                        e.target.style.boxShadow = "";
                      }}
                    />
                  </div>

                  <div>
                    <input
                      placeholder={t.register.email}
                      type="email"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#22d3ee";
                        e.target.style.boxShadow =
                          "0 0 0 4px rgba(34,211,238,0.10)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = border;
                        e.target.style.boxShadow = "";
                      }}
                    />
                    {errors.email && (
                      <p
                        style={{
                          color: "#ef4444",
                          fontSize: 12,
                          margin: "8px 0 0 2px",
                        }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 14,
                    }}
                  >
                    <input
                      placeholder={t.register.password}
                      type="password"
                      value={form.password}
                      onChange={(e) => set("password", e.target.value)}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#22d3ee";
                        e.target.style.boxShadow =
                          "0 0 0 4px rgba(34,211,238,0.10)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = border;
                        e.target.style.boxShadow = "";
                      }}
                    />

                    <input
                      placeholder={t.register.confirmPassword}
                      type="password"
                      value={form.confirmPassword}
                      onChange={(e) => set("confirmPassword", e.target.value)}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#22d3ee";
                        e.target.style.boxShadow =
                          "0 0 0 4px rgba(34,211,238,0.10)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = border;
                        e.target.style.boxShadow = "";
                      }}
                    />
                  </div>

                  {errors.confirmPassword && (
                    <p
                      style={{
                        color: "#ef4444",
                        fontSize: 12,
                        margin: "-8px 0 0 2px",
                      }}
                    >
                      {errors.confirmPassword}
                    </p>
                  )}

                  <label
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontSize: 13,
                      color: muted,
                      cursor: "pointer",
                      marginTop: 2,
                      lineHeight: 1.6,
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={form.terms}
                      onChange={(e) => set("terms", e.target.checked)}
                      style={{
                        width: 16,
                        height: 16,
                        accentColor: "#22d3ee",
                        marginTop: 2,
                      }}
                    />
                    {t.register.terms}
                  </label>

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "17px",
                      borderRadius: 18,
                      background:
                        "linear-gradient(135deg, #67e8f9 0%, #22d3ee 42%, #fbbf24 100%)",
                      color: "#07111f",
                      fontSize: 15,
                      fontWeight: 900,
                      border: "none",
                      cursor: "pointer",
                      marginTop: 6,
                      transition: "all 0.2s ease",
                      boxShadow: "0 14px 34px rgba(34,211,238,0.24)",
                      letterSpacing: "0.01em",
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
                    {t.register.cta}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}