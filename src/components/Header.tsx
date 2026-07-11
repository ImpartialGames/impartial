import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, Smartphone, LayoutDashboard, Layers, Grid2X2, Users, Mail, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GlowMenu, GlowMenuItem } from "@/components/ui/glow-menu";
import logoHero from "@/assets/logo-hero.webp";
import { CalendlyQuiz } from "@/components/CalendlyQuiz";
import { useLang } from "@/contexts/LanguageContext";

const glowNavItems: GlowMenuItem[] = [
  {
    icon: Globe,
    label: "Web",
    href: "/services/web",
    gradient: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.06) 50%, transparent 100%)",
    iconColor: "text-[#7C3AED]",
  },
  {
    icon: Smartphone,
    label: "Mobile",
    href: "/services/mobile",
    gradient: "radial-gradient(circle, rgba(167,139,250,0.20) 0%, rgba(167,139,250,0.06) 50%, transparent 100%)",
    iconColor: "text-[#A78BFA]",
  },
  {
    icon: LayoutDashboard,
    label: "Backoffice",
    href: "/services/backoffice",
    gradient: "radial-gradient(circle, rgba(240,175,200,0.22) 0%, rgba(240,175,200,0.07) 50%, transparent 100%)",
    iconColor: "text-[#C084A0]",
  },
  {
    icon: Layers,
    label: "360°",
    href: "/services/360",
    gradient: "radial-gradient(circle, rgba(255,185,150,0.22) 0%, rgba(255,185,150,0.07) 50%, transparent 100%)",
    iconColor: "text-[#D97B4F]",
  },
  {
    icon: Grid2X2,
    label: "Portfolio",
    href: "/portfolio",
    gradient: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.06) 50%, transparent 100%)",
    iconColor: "text-[#7C3AED]",
  },
  {
    icon: Users,
    label: "Studio",
    href: "/studio",
    gradient: "radial-gradient(circle, rgba(167,139,250,0.20) 0%, rgba(167,139,250,0.06) 50%, transparent 100%)",
    iconColor: "text-[#A78BFA]",
  },
  {
    icon: BookOpen,
    label: "Ressources",
    href: "/ressources",
    gradient: "radial-gradient(circle, rgba(255,185,150,0.22) 0%, rgba(255,185,150,0.07) 50%, transparent 100%)",
    iconColor: "text-[#D97B4F]",
  },
  {
    icon: Mail,
    label: "Contact",
    href: "/contact",
    gradient: "radial-gradient(circle, rgba(240,175,200,0.22) 0%, rgba(240,175,200,0.07) 50%, transparent 100%)",
    iconColor: "text-[#C084A0]",
  },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [quizOpen, setQuizOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t, lp } = useLang();

  // Liens de navigation localisés ("/studio" → "/en/studio" côté anglais).
  const navItems = glowNavItems.map((item) => ({
    ...item,
    label: item.label === "Ressources" ? t("Ressources", "Resources") : item.label,
    href: lp(item.href),
  }));

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

  const activeLabel =
    navItems.find((item) => item.href === location.pathname)?.label ?? "";

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0E0B14]/70 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10"
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
              <span className="text-[9px] font-semibold tracking-[0.22em] uppercase text-[#A78BFA] transition-colors duration-500">
                Games
              </span>
            </div>
          </Link>

          {/* GlowMenu — nav centre */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <GlowMenu items={navItems} activeItem={activeLabel} />
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
              <div className="bg-[#14101D]/90 backdrop-blur-2xl rounded-2xl p-4 mt-2 border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
                <div className="px-4 py-2 text-[#7C3AED] text-[10px] font-semibold uppercase tracking-[0.2em]">
                  Services
                </div>
                {navItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] transition-colors ${
                      location.pathname === item.href
                        ? "bg-[#7C3AED]/15 text-[#A78BFA] font-medium"
                        : "text-white/80 hover:bg-white/[0.06]"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                ))}
                <div className="h-px my-3 bg-white/10" />
                {navItems.slice(4).map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] transition-colors ${
                      location.pathname === item.href
                        ? "bg-[#7C3AED]/15 text-[#A78BFA] font-medium"
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
