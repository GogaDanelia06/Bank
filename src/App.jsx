import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { translations } from "./data/translations";

import { LangCtx } from "./context/LangContext";
import { ThemeCtx } from "./context/ThemeContext";
import { PageCtx } from "./context/PageContext";

export default function App() {
  const [lang, setLang] = useState("en");
  const [dark, setDark] = useState(true);
  const [page, setPage] = useState("home");

  const t = translations[lang];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <LangCtx.Provider value={{ lang, t, setLang }}>
      <ThemeCtx.Provider value={{ dark, toggle: () => setDark((d) => !d) }}>
        <PageCtx.Provider value={{ page, setPage }}>
          <div
            style={{
              fontFamily:
                "'Geist', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              minHeight: "100vh",
              background: dark ? "#020b18" : "#f8fafc",
              color: dark ? "#fff" : "#0f172a",
            }}
          >
           <style>{`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body, #root { width: 100%; overflow-x: hidden; }

  @keyframes fadeUp { from { opacity:0; transform:translateY(32px) } to { opacity:1; transform:translateY(0) } }
  @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
  @keyframes slideDown { from { opacity:0; transform:translateY(-16px) } to { opacity:1; transform:translateY(0) } }

  @media (max-width: 1100px) {
    .hero-grid,
    .about-grid,
    .account-grid,
    .partners-bottom,
    .register-grid,
    .footer-top {
      grid-template-columns: 1fr !important;
    }

    .cards-grid {
      grid-template-columns: 1fr 1fr !important;
    }

    .partners-logos {
      grid-template-columns: 1fr 1fr !important;
    }
  }

  @media (max-width: 820px) {
    .hero-card {
      display: none !important;
    }

    .cards-grid,
    .partners-logos,
    .about-stats,
    .account-stats,
    .register-stats,
    .footer-bottom {
      grid-template-columns: 1fr !important;
    }
  }

  @media (max-width: 700px) {
    .header-shell {
      padding: 14px !important;
      gap: 12px !important;
      flex-wrap: wrap !important;
      justify-content: center !important;
    }

    .header-nav {
      order: 3;
      width: 100%;
      justify-content: center !important;
    }

    .header-actions {
      width: 100%;
      justify-content: center !important;
      flex-wrap: wrap !important;
    }

    .register-form-two,
    .register-name-row {
      grid-template-columns: 1fr !important;
    }
  }
`}</style>

            <Header />
            {page === "home" && <HomePage />}
            {page === "register" && <RegisterPage />}
            <Footer />
          </div>
        </PageCtx.Provider>
      </ThemeCtx.Provider>
    </LangCtx.Provider>
  );
}