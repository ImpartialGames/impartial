import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/wow";
import { StatCard } from "@/components/StatCard";
import type { StatAccent } from "@/components/StatCard";
import { useLang } from "@/contexts/LanguageContext";
import eclipsiaImg from "@/assets/portfolio/eclipsia.webp";
import wecloseImg from "@/assets/portfolio/weclose.webp";
import fitbyvalImg from "@/assets/portfolio/fitbyval.webp";
import altarysImg from "@/assets/portfolio/altarys.webp";

/**
 * Réalisations phares — 4 projets avec leurs résultats chiffrés réels
 * (sources : pages portfolio). Remplace RealisationsSection sur la home.
 */

type Project = {
  title: string;
  category: string;
  categoryEn: string;
  image: string;
  href: string;
  accent: StatAccent;
  metrics: { value: string; valueEn: string; label: string; labelEn: string }[];
};

const projects: Project[] = [
  {
    title: "Eclipsia",
    category: "Site vitrine",
    categoryEn: "Showcase site",
    image: eclipsiaImg,
    href: "/portfolio/eclipsia",
    accent: "indigo",
    metrics: [
      { value: "+85 %", valueEn: "+85%", label: "de visibilité", labelEn: "visibility" },
      { value: "+120 %", valueEn: "+120%", label: "de demandes", labelEn: "inquiries" },
    ],
  },
  {
    title: "We Close Agency",
    category: "Site + conversion",
    categoryEn: "Site + conversion",
    image: wecloseImg,
    href: "/portfolio/weclose",
    accent: "emerald",
    metrics: [
      { value: "+70 %", valueEn: "+70%", label: "de conversion", labelEn: "conversion" },
      { value: "+150 %", valueEn: "+150%", label: "de leads", labelEn: "leads" },
    ],
  },
  {
    title: "Fitbyval",
    category: "App coaching",
    categoryEn: "Coaching app",
    image: fitbyvalImg,
    href: "/portfolio/fitbyval",
    accent: "violet",
    metrics: [
      { value: "+60 %", valueEn: "+60%", label: "de réservations", labelEn: "bookings" },
      { value: "−80 %", valueEn: "−80%", label: "de temps admin", labelEn: "admin time" },
    ],
  },
  {
    title: "Altarys Group",
    category: "Plateforme DeFi",
    categoryEn: "DeFi platform",
    image: altarysImg,
    href: "/portfolio/altarys",
    accent: "cyan",
    metrics: [
      { value: "+85 %", valueEn: "+85%", label: "d'efficacité", labelEn: "efficiency" },
      { value: "−50 %", valueEn: "−50%", label: "de temps admin", labelEn: "admin time" },
    ],
  },
];

export function FeaturedWorkSection() {
  const { t, lp } = useLang();

  return (
    <section id="realisations" className="relative py-20 md:py-28 bg-[#0A0E1A] overflow-hidden">
      <div
        aria-hidden
        className="absolute top-[20%] left-[-8%] w-[520px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)" }}
      />

      <div className="w-full px-6 lg:px-12 xl:px-16 relative z-10 max-w-[1600px] mx-auto">
        {/* En-tête + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            <span className="section-label-dark">{t("Réalisations", "Work")}</span>
            <h2 className="mt-4 prisme-display text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-white/90 max-w-2xl">
              {t("Ils nous ont fait confiance, voici ", "They trusted us — here are ")}
              <span className="prisme-italic-grad">{t("les résultats.", "the results.")}</span>
            </h2>
          </div>
          <MagneticButton
            as={Link}
            to={lp("/portfolio")}
            className="self-start lg:self-auto inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/80 font-medium text-[14px] hover:bg-white/[0.07] hover:border-white/35 hover:text-white transition-all duration-300"
          >
            {t("Voir toutes nos réalisations", "See all our work")}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </MagneticButton>
        </motion.div>

        {/* Grille 4 cartes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={i % 2 === 1 ? "lg:mt-8" : ""}
            >
              <Link
                to={lp(p.href)}
                className="group flex flex-col h-full rounded-[24px] overflow-hidden bg-white/[0.05] backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:border-[#6366F1]/40 hover:shadow-[0_24px_60px_-20px_rgba(99,102,241,0.35)] transition-all duration-500"
              >
                <div className="p-5 pb-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-400/20">
                    {t(p.category, p.categoryEn)}
                  </span>
                  <h3 className="mt-3 font-syne font-bold text-[18px] text-white">{p.title}</h3>
                </div>

                <div className="relative mt-4 mx-5 rounded-xl overflow-hidden aspect-[16/10] border border-white/[0.07]">
                  <img
                    src={p.image}
                    alt={t(`Aperçu du projet ${p.title}`, `${p.title} project preview`)}
                    loading="lazy"
                    width={640}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/50 to-transparent" aria-hidden />
                </div>

                <div className="grid grid-cols-2 gap-2.5 p-5 mt-auto">
                  {p.metrics.map((m) => (
                    <StatCard
                      key={m.label}
                      flat
                      size="md"
                      accent={p.accent}
                      value={t(m.value, m.valueEn)}
                      label={t(m.label, m.labelEn)}
                      className="!p-3"
                    />
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
