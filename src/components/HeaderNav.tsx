import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Database, Globe, Layers, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

/**
 * Nav desktop du header — pilule centrale avec dropdown « Services »
 * (structure maquette : Services ▾ · Réalisations · À propos · Tarifs · Ressources).
 * Fermé par défaut (SSR-safe), ouvert au survol/clic, accessible clavier.
 */

type ServiceEntry = {
  icon: LucideIcon;
  label: string;
  labelEn: string;
  description: string;
  descriptionEn: string;
  href: string;
};

const services: ServiceEntry[] = [
  {
    icon: Globe,
    label: "Sites Web",
    labelEn: "Websites",
    description: "Vitrine, e-commerce, landing pages",
    descriptionEn: "Showcase, e-commerce, landing pages",
    href: "/services/web",
  },
  {
    icon: Smartphone,
    label: "Apps Mobiles",
    labelEn: "Mobile Apps",
    description: "iOS & Android, natif ou cross-platform",
    descriptionEn: "iOS & Android, native or cross-platform",
    href: "/services/mobile",
  },
  {
    icon: Database,
    label: "Logiciels & SaaS",
    labelEn: "Software & SaaS",
    description: "Backoffices, CRM, outils métiers",
    descriptionEn: "Back offices, CRMs, business tools",
    href: "/services/backoffice",
  },
  {
    icon: Layers,
    label: "Écosystème 360°",
    labelEn: "360° Ecosystem",
    description: "Stratégie et design system unifiés",
    descriptionEn: "Unified strategy and design system",
    href: "/services/360",
  },
];

export function HeaderNav() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const { t, lp } = useLang();
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  // Fermer le dropdown à chaque navigation.
  useEffect(() => {
    setServicesOpen(false);
  }, [location.pathname]);

  const open = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const isServicesActive = location.pathname.includes("/services/");
  const links = [
    { label: t("Réalisations", "Work"), href: lp("/portfolio") },
    { label: t("À propos", "About"), href: lp("/studio") },
    { label: t("Tarifs", "Pricing"), href: lp("/") + "#offres", anchor: "offres" },
    { label: t("Ressources", "Resources"), href: lp("/ressources") },
  ];

  const itemClass = (active: boolean) =>
    `px-4 py-2 rounded-full text-[13.5px] font-medium transition-colors duration-300 ${
      active ? "bg-white/[0.09] text-white" : "text-white/65 hover:text-white hover:bg-white/[0.06]"
    }`;

  return (
    <nav
      aria-label={t("Navigation principale", "Main navigation")}
      className="flex items-center gap-0.5 px-1.5 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-2xl border border-white/10"
    >
      {/* Services ▾ */}
      <div className="relative" onMouseEnter={open} onMouseLeave={scheduleClose}>
        <button
          type="button"
          aria-expanded={servicesOpen}
          aria-haspopup="true"
          onClick={() => setServicesOpen((v) => !v)}
          onFocus={open}
          className={`inline-flex items-center gap-1.5 ${itemClass(isServicesActive)}`}
        >
          {t("Services", "Services")}
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>

        <AnimatePresence>
          {servicesOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[340px] p-2 rounded-2xl bg-[#0D1120]/95 backdrop-blur-2xl border border-white/10 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.6)]"
              onFocus={open}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) scheduleClose();
              }}
            >
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.href}
                    to={lp(s.href)}
                    className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.06] transition-colors duration-200 group"
                  >
                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-indigo-500/15 text-indigo-300 shrink-0 group-hover:bg-indigo-500/25 transition-colors duration-200">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[13.5px] font-medium text-white">{t(s.label, s.labelEn)}</span>
                      <span className="text-[12px] text-white/45">{t(s.description, s.descriptionEn)}</span>
                    </span>
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {links.map((link) => (
        <Link
          key={link.label}
          to={link.href}
          onClick={
            link.anchor
              ? (e) => {
                  const el = document.getElementById(link.anchor as string);
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }
              : undefined
          }
          className={itemClass(!link.anchor && location.pathname === link.href)}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
