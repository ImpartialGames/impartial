import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Globe,
  Smartphone,
  Database,
  Layers,
  Grid2X2,
  Users,
  Mail,
  BookOpen,
  Tag,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HeaderNav } from "@/components/HeaderNav";
import logoHero from "@/assets/logo-hero.webp";
import { CalendlyQuiz } from "@/components/CalendlyQuiz";
import { useLang } from "@/contexts/LanguageContext";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [quizOpen, setQuizOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t, lp } = useLang();

  // Groupes du menu mobile — même structure que la nav desktop.
  const mobileServices = [
    { icon: Globe, label: t("Sites Web", "Websites"), href: lp("/services/web") },
    { icon: Smartphone, label: t("Apps Mobiles", "Mobile Apps"), href: lp("/services/mobile") },
    { icon: Database, label: t("Logiciels & SaaS", "Software & SaaS"), href: lp("/services/backoffice") },
    { icon: Layers, label: t("Écosystème 360°", "360° Ecosystem"), href: lp("/services/360") },
  ];
  const mobileLinks = [
    { icon: Grid2X2, label: t("Réalisations", "Work"), href: lp("/portfolio") },
    { icon: Users, label: t("À propos", "About"), href: lp("/studio") },
    { icon: Tag, label: t("Tarifs", "Pricing"), href: lp("/") + "#offres" },
    { icon: BookOpen, label: t("Ressources", "Resources"), href: lp("/ressources") },
    { icon: Mail, label: t("Contact", "Contact"), href: lp("/contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#05060E]/70 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10"
          : "border-b border-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <nav className="flex items-center justify-between h-[72px] max-w-[1600px] mx-auto">

          {/* Logo */}
          <Link to={lp("/")} className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="relative flex-shrink-0">
              <img
                src={logoHero}
                alt="Impartial"
                className="relative z-10 h-9 w-9 object-contain"
                style={{ filter: "saturate(1.4) brightness(1.05)" }}
              />
            </div>
            <div className="flex flex-col leading-none gap-[3px]">
              <span className="font-syne text-[16px] font-black tracking-[-0.03em] text-white transition-colors duration-500">
                IMPARTIAL
              </span>
              <span className="text-[9px] font-semibold tracking-[0.22em] uppercase text-[#818CF8] transition-colors duration-500">
                Games
              </span>
            </div>
          </Link>

          {/* Nav centre */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <HeaderNav />
          </div>

          {/* CTA droite */}
          <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
            {/* Langue */}
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-white/70 hover:text-white border border-white/20 hover:border-white/40 hover:bg-white/[0.06] px-4 py-2 rounded-full transition-colors duration-300"
              aria-label="Changer la langue"
            >
              <Globe className="h-3.5 w-3.5" />
              {lang === "fr" ? "EN" : "FR"}
            </button>
            <button
              onClick={() => setQuizOpen(true)}
              className="btn-prisme inline-flex items-center gap-2 text-[13px] font-medium text-white px-5 py-2.5 rounded-full"
            >
              {t("Planifier un appel", "Book a call")}
            </button>
          </div>

          {/* Burger mobile */}
          <button
            className="lg:hidden p-2 rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-lg transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="h-5 w-5 text-white/80 transition-colors duration-300" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="h-5 w-5 text-white/80 transition-colors duration-300" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* Scroll progress bar */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 h-[2px] transition-all duration-150 ease-out"
          style={{
            width: `${scrollProgress}%`,
            background: "var(--prisme-gradient)",
            opacity: scrollProgress > 0 ? 1 : 0,
          }}
        />

        {/* Menu mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden overflow-hidden pb-6"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-[#0D1120]/90 backdrop-blur-2xl rounded-2xl p-4 mt-2 border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
                <div className="px-4 py-2 text-[#818CF8] text-[10px] font-semibold uppercase tracking-[0.2em]">
                  Services
                </div>
                {mobileServices.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] transition-colors ${
                      location.pathname === item.href
                        ? "bg-[#6366F1]/15 text-[#818CF8] font-medium"
                        : "text-white/80 hover:bg-white/[0.06]"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                ))}
                <div className="h-px my-3 bg-white/10" />
                {mobileLinks.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] transition-colors ${
                      location.pathname === item.href
                        ? "bg-[#6366F1]/15 text-[#818CF8] font-medium"
                        : "text-white/80 hover:bg-white/[0.06]"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-2">
                  <button
                    onClick={() => { setIsMobileMenuOpen(false); setQuizOpen(true); }}
                    className="btn-prisme block w-full py-3 rounded-full text-white font-medium text-center text-[14px]"
                  >
                    {t("Planifier un appel", "Book a call")}
                  </button>
                  <button
                    onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                    className="inline-flex items-center justify-center gap-2 py-2.5 rounded-full border border-white/20 text-white/70 font-semibold text-[13px] hover:text-white transition-colors"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    {lang === "fr" ? "Switch to English" : "Passer en français"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {quizOpen && <CalendlyQuiz onClose={() => setQuizOpen(false)} />}
      </AnimatePresence>
    </motion.header>
  );
}
