import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  Globe,
  Layers,
  PenTool,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

/** Grille des 6 expertises du studio (remplace ServicesSection sur la home). */

type Expertise = {
  icon: LucideIcon;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  href: string;
};

const expertises: Expertise[] = [
  {
    icon: Globe,
    title: "Sites Web",
    titleEn: "Websites",
    description: "Sites vitrines, corporate, e-commerce et landing pages ultra-performantes.",
    descriptionEn: "Showcase, corporate, e-commerce sites and high-converting landing pages.",
    href: "/services/web",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    titleEn: "Mobile Apps",
    description: "Apps iOS & Android fluides, rapides et orientées utilisateur.",
    descriptionEn: "Smooth, fast, user-first iOS & Android apps.",
    href: "/services/mobile",
  },
  {
    icon: Database,
    title: "Logiciels & SaaS",
    titleEn: "Software & SaaS",
    description: "Plateformes SaaS, logiciels métiers, CRM, ERP et backoffices sur-mesure.",
    descriptionEn: "SaaS platforms, business software, CRMs, ERPs and custom back offices.",
    href: "/services/backoffice",
  },
  {
    icon: Layers,
    title: "Écosystème 360°",
    titleEn: "360° Ecosystem",
    description: "Stratégie, design system et produit unifiés sur toutes vos plateformes.",
    descriptionEn: "Unified strategy, design system and product across all your platforms.",
    href: "/services/360",
  },
  {
    icon: PenTool,
    title: "UX/UI Design",
    titleEn: "UX/UI Design",
    description: "Design moderne et expériences utilisateurs qui convertissent.",
    descriptionEn: "Modern design and user experiences that convert.",
    href: "/services/360",
  },
  {
    icon: TrendingUp,
    title: "SEO & Growth",
    titleEn: "SEO & Growth",
    description: "Référencement naturel, SEO technique et stratégie d'acquisition.",
    descriptionEn: "Organic search, technical SEO and acquisition strategy.",
    href: "/services/web",
  },
];

export function ExpertisesSection() {
  const { t, lp } = useLang();

  return (
    <section className="relative py-20 md:py-28 bg-[#05060E] overflow-hidden">
      {/* halos d'ambiance */}
      <div
        aria-hidden
        className="absolute -top-40 right-[10%] w-[560px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.10) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute bottom-[-10%] left-[-5%] w-[480px] h-[380px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)" }}
      />

      <div className="w-full px-6 lg:px-12 xl:px-16 relative z-10 max-w-[1600px] mx-auto">
        {/* En-tête 2 colonnes façon maquette */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-12 lg:items-end"
        >
          <div>
            <span className="section-label-dark">{t("Nos expertises", "Our expertise")}</span>
            <h2 className="mt-4 prisme-display text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-white/90">
              {t("Des solutions digitales qui boostent votre ", "Digital solutions that boost your ")}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {t("croissance", "growth")}
              </span>
            </h2>
          </div>
          <p className="text-[14.5px] md:text-[15.5px] text-white/50 leading-[1.65] max-w-md lg:justify-self-end lg:pb-2">
            {t(
              "On conçoit et développe des outils performants, pensés pour vos utilisateurs et alignés sur vos objectifs business.",
              "We design and build high-performing tools, made for your users and aligned with your business goals.",
            )}
          </p>
        </motion.div>

        {/* Grille 6 cartes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {expertises.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={lp(e.href)}
                  className="group flex flex-col h-full p-7 rounded-[24px] bg-white/[0.05] backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:border-[#6366F1]/40 hover:shadow-[0_24px_60px_-20px_rgba(99,102,241,0.35)] transition-all duration-500"
                >
                  <span className="grid place-items-center w-12 h-12 rounded-2xl bg-indigo-500/15 text-indigo-300 group-hover:bg-indigo-500/25 group-hover:scale-105 transition-all duration-300">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-syne font-bold text-[19px] text-white">
                    {t(e.title, e.titleEn)}
                  </h3>
                  <p className="mt-2 text-[13.5px] text-white/50 leading-[1.6] flex-1">
                    {t(e.description, e.descriptionEn)}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#818CF8] group-hover:text-white transition-colors duration-300">
                    {t("En savoir plus", "Learn more")}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
