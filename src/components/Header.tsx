import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoHero from "@/assets/logo-hero.png";
import { CalendlyQuiz } from "@/components/CalendlyQuiz";
import { useLang } from "@/contexts/LanguageContext";

const navLinks = [
  { label: "Services", href: "/services/web" },
  { label: "Projets", href: "/portfolio" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) =>
    location.pathname === href || location.pathname.startsWith(href + "/");

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
        style={{
          backgroundColor: scrolled ? "var(--ig-bg)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--ig-border)" : "1px solid transparent",
        }}
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="ig-container">
          <nav className="flex items-center justify-between h-[68px]">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 flex-shrink-0 group"
              aria-label="ImpartialGames — Accueil"
            >
              <img
                src={logoHero}
                alt=""
                aria-hidden
                className="h-8 w-8 object-contain flex-shrink-0"
              />
              <div className="flex flex-col leading-none gap-0.5">
                <span
                  className="font-display text-[15px] font-normal tracking-[-0.025em] transition-colors duration-200"
                  style={{ color: "var(--ig-ink)" }}
                >
                  Impartial
                </span>
                <span
                  className="ig-label text-[9px]"
                  style={{ letterSpacing: "0.18em" }}
                >
                  Studio
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`ig-link-hover text-[14px] font-medium transition-colors duration-200 ${
                      isActive(link.href)
                        ? "active"
                        : ""
                    }`}
                    style={{
                      color: isActive(link.href)
                        ? "var(--ig-accent)"
                        : "var(--ig-ink-muted)",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                className="ig-label text-[11px] transition-colors duration-200 hover:opacity-70"
                aria-label="Changer la langue"
              >
                {lang === "fr" ? "EN" : "FR"}
              </button>
              <button
                onClick={() => setQuizOpen(true)}
                className="btn-studio text-[13px] px-5 py-2.5"
              >
                {t("Discutons", "Let's talk")}
              </button>
            </div>

            {/* Burger mobile */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="h-5 w-5" style={{ color: "var(--ig-ink)" }} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="h-5 w-5" style={{ color: "var(--ig-ink)" }} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="ig-container pb-6 pt-2"
                style={{ borderTop: "1px solid var(--ig-border)" }}
              >
                <nav>
                  <ul className="flex flex-col">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className="flex items-center justify-between py-4 text-[16px] font-medium transition-colors duration-200"
                          style={{
                            color: isActive(link.href)
                              ? "var(--ig-accent)"
                              : "var(--ig-ink)",
                            borderBottom: "1px solid var(--ig-border)",
                          }}
                        >
                          {link.label}
                          <span className="ig-label" style={{ letterSpacing: "0.06em" }}>→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col gap-3">
                    <button
                      onClick={() => { setMobileOpen(false); setQuizOpen(true); }}
                      className="btn-studio w-full justify-center py-3.5 text-[15px]"
                    >
                      {t("Discutons de ton projet", "Let's discuss your project")}
                    </button>
                    <button
                      onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                      className="btn-studio-outline w-full justify-center py-3 text-[13px]"
                    >
                      {lang === "fr" ? "Switch to English" : "Passer en français"}
                    </button>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {quizOpen && <CalendlyQuiz onClose={() => setQuizOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
