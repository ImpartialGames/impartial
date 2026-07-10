import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logoHero from "@/assets/logo-hero.webp";
import { useLang } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t, lp } = useLang();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="theme-solaire min-h-screen bg-[#FBFAF7] dark:bg-[#0E0B14] relative flex flex-col items-center justify-center overflow-hidden">

      {/* Halos */}
      <span className="prisme-halo-violet" style={{ top: "-10%", right: "-10%" }} />
      <span className="prisme-halo-peach" style={{ bottom: "-10%", left: "-10%" }} />
      <span className="prisme-halo-rose" style={{ top: "40%", left: "40%", opacity: 0.5 }} />

      {/* Logo en haut */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-8 left-8"
      >
        <Link to={lp("/")} className="flex items-center gap-2.5 group">
          <img
            src={logoHero}
            alt="Impartial"
            className="h-8 w-8 object-contain"
            style={{ filter: "saturate(1.4) brightness(1.05)" }}
          />
          <div className="flex flex-col leading-none gap-[3px]">
            <span className="font-syne text-[15px] font-black tracking-[-0.03em] text-[#0E0B14] dark:text-white/90">
              IMPARTIAL
            </span>
            <span className="text-[8px] font-semibold tracking-[0.22em] uppercase text-[#7C3AED]">
              Games
            </span>
          </div>
        </Link>
      </motion.div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">

        {/* 404 en grand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="prisme-italic-grad font-serif font-black leading-none select-none"
            style={{ fontSize: "clamp(120px, 20vw, 240px)" }}
          >
            404
          </span>
        </motion.div>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-[28px] md:text-[40px] leading-tight tracking-[-0.02em] text-[#0E0B14] dark:text-white/90 mt-2 mb-4"
        >
          {t("Cette page n'existe pas.", "This page doesn't exist.")}
        </motion.h1>

        {/* Sous-titre avec personnalité */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-[#6F6580] dark:text-white/60 text-[16px] md:text-[18px] leading-relaxed mb-10"
        >
          {t(
            "Mais ton projet, lui, peut exister.",
            "But your project can."
          )}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <Link
            to={lp("/")}
            className="btn-prisme inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium text-[15px]"
          >
            {t("Retour à l'accueil", "Back to home")}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to={lp("/contact")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#0E0B14] dark:border-white/20 text-[#0E0B14] dark:text-white/80 font-medium text-[15px] hover:bg-[#0E0B14] dark:hover:bg-white/10 hover:text-white transition-colors"
          >
            {t("Lancer un projet", "Start a project")}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
