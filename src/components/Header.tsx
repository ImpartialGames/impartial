import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, Smartphone, LayoutDashboard, Layers, Grid2X2, Users, Mail, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GlowMenu, GlowMenuItem } from "@/components/ui/glow-menu";
import logoHero from "@/assets/logo-hero.png";
import { CalendlyQuiz } from "@/components/CalendlyQuiz";
import { useLang } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

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
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();

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
    glowNavItems.find((item) => item.href === location.pathname)?.label ?? "";

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-md border-b border-white/20 dark:border-white/10"
          : "border-b border-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <nav className="flex items-center justify-between h-[72px] max-w-[1600px] mx-auto">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <img
              src={logoHero}
              alt="Impartial"
              className="h-9 w-9 object-contain flex-shrink-0"
              style={{ filter: "saturate(1.4) brightness(1.05)" }}
            />
            <div className="flex flex-col leading-none gap-[3px]">
              <span className="font-syne text-[16px] font-black tracking-[-0.03em] text-[#0E0B14] dark:text-white/90">
                IMPARTIAL
              </span>
              <span className="text-[9px] font-semibold tracking-[0.22em] uppercase text-[#7C3AED]">
                Games
              </span>
            </div>
          </Link>

          {/* GlowMenu — nav centre */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <GlowMenu items={glowNavItems} activeItem={activeLabel} />
          </div>

          {/* CTA droite */}
          <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
            {/* Langue */}
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#6F6580] dark:text-white/60 hover:text-[#0E0B14] dark:hover:text-white border border-[#DDD9E8] dark:border-white/20 px-4 py-2 rounded-full transition-colors"
              aria-label="Changer la langue"
            >
              <Globe className="h-3.5 w-3.5" />
              {lang === "fr" ? "EN" : "FR"}
            </button>
            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-[#DDD9E8] dark:border-white/20 text-[#6F6580] dark:text-white/60 hover:text-[#0E0B14] dark:hover:text-white hover:border-[#0E0B14] dark:hover:border-white/40 transition-colors"
              aria-label={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
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
            className="lg:hidden p-2 rounded-xl border border-[#EEEAF4] dark:border-white/10 bg-[#FBFAF7] dark:bg-white/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="h-5 w-5 text-[#0E0B14] dark:text-white/80" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="h-5 w-5 text-[#0E0B14] dark:text-white/80" />
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
              <div className="bg-[#FBFAF7] dark:bg-[#120B24] rounded-2xl p-4 mt-2 border border-[#EEEAF4] dark:border-white/10 shadow-[0_8px_32px_rgba(124,58,237,0.08)]">
                <div className="px-4 py-2 text-[#7C3AED] text-[10px] font-semibold uppercase tracking-[0.2em]">
                  Services
                </div>
                {glowNavItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] transition-colors ${
                      location.pathname === item.href
                        ? "bg-[#F3EEFB] dark:bg-white/10 text-[#7C3AED] font-medium"
                        : "text-[#0E0B14] dark:text-white/80 hover:bg-[#F3EEFB] dark:hover:bg-white/5"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                ))}
                <div className="h-px my-3 bg-[#EEEAF4] dark:bg-white/10" />
                {glowNavItems.slice(4).map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] transition-colors ${
                      location.pathname === item.href
                        ? "bg-[#F3EEFB] dark:bg-white/10 text-[#7C3AED] font-medium"
                        : "text-[#0E0B14] dark:text-white/80 hover:bg-[#F3EEFB] dark:hover:bg-white/5"
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
                  <div className="flex gap-2">
                    <button
                      onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#DDD9E8] dark:border-white/20 text-[#6F6580] dark:text-white/60 font-semibold text-[13px] hover:text-[#0E0B14] dark:hover:text-white transition-colors"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      {lang === "fr" ? "Switch to English" : "Passer en français"}
                    </button>
                    <button
                      onClick={toggleTheme}
                      className="inline-flex items-center justify-center h-[42px] w-[42px] rounded-full border border-[#DDD9E8] dark:border-white/20 text-[#6F6580] dark:text-white/60 hover:text-[#0E0B14] dark:hover:text-white transition-colors"
                      aria-label={theme === "light" ? "Mode sombre" : "Mode clair"}
                    >
                      {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                    </button>
                  </div>
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
