import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

/**
 * Section « Votre croissance » — juste sous le hero.
 * Montre l'impact business concret d'un passage par le studio :
 * 4 indicateurs animés + courbe d'évolution du chiffre d'affaires.
 */

const metrics = [
  {
    label: "Chiffre d'affaires moyen",
    labelEn: "Average revenue",
    to: 127,
    format: (n: number) => `+${Math.round(n)} %`,
    sub: "sur les 12 mois après lancement",
    subEn: "in the 12 months after launch",
  },
  {
    label: "Nouveaux clients",
    labelEn: "New clients",
    to: 2.4,
    format: (n: number) => `×${n.toFixed(1).replace(".", ",")}`,
    formatEn: (n: number) => `×${n.toFixed(1)}`,
    sub: "vs l'année précédant la refonte",
    subEn: "vs the year before the redesign",
  },
  {
    label: "Visibilité & audience",
    labelEn: "Visibility & audience",
    to: 38,
    format: (n: number) => `+${Math.round(n)} K`,
    sub: "abonnés générés, toutes plateformes",
    subEn: "followers gained, all platforms",
  },
  {
    label: "Taux d'engagement",
    labelEn: "Engagement rate",
    to: 2,
    format: (n: number) => `×${(Math.round(n * 10) / 10).toString().replace(".", ",")}`,
    formatEn: (n: number) => `×${Math.round(n * 10) / 10}`,
    sub: "sur les parcours repensés",
    subEn: "on redesigned journeys",
  },
];

/** Compteur animé — rend la valeur finale côté serveur (SEO), anime à l'entrée en vue. */
function CountUp({ to, format }: { to: number; format: (n: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(to);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(to);
      return;
    }
    const start = performance.now();
    const dur = 1400;
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    setVal(0);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{format(val)}</span>;
}

/** Mini-courbe décorative dans chaque carte. */
function Sparkline() {
  return (
    <svg viewBox="0 0 120 28" className="w-full h-6 mt-4" aria-hidden fill="none">
      <path
        d="M2 24 C 30 22, 55 18, 78 12 S 112 4, 118 3"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="118" cy="3" r="2.5" fill="#818CF8" />
    </svg>
  );
}

export function CroissanceSection() {
  const { lang, t } = useLang();
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInView = useInView(chartRef, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 md:py-28 bg-[#0A0E1A] overflow-hidden">
      {/* halo d'ambiance */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.10) 0%, transparent 70%)" }}
      />

      <div className="w-full px-6 lg:px-12 xl:px-16 relative z-10 max-w-[1600px] mx-auto">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#818CF8]" aria-hidden />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#818CF8]">
              {t("Votre croissance", "Your growth")}
            </span>
          </div>
          <h2 className="font-serif text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-white/90 max-w-3xl">
            {t("Un impact mesurable sur votre ", "A measurable impact on your ")}
            <span className="prisme-italic-grad">{t("business.", "business.")}</span>
          </h2>
        </motion.div>

        {/* 4 indicateurs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`p-6 rounded-[24px] bg-white/[0.05] backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(99,102,241,0.35)] transition-all duration-500 ${
                i % 2 === 1 ? "lg:mt-8" : ""
              }`}
            >
              <div className="text-[13px] font-medium text-white/60">
                {t(m.label, m.labelEn)}
              </div>
              <div className="mt-3 font-display font-bold text-[38px] md:text-[44px] leading-none tracking-[-0.02em] text-white tabular-nums">
                <CountUp to={m.to} format={lang === "en" && m.formatEn ? m.formatEn : m.format} />
              </div>
              <div className="mt-2.5 flex items-start gap-1.5 text-[12.5px] text-white/50 leading-snug">
                <TrendingUp className="h-3.5 w-3.5 mt-0.5 shrink-0 text-emerald-400/90" aria-hidden />
                {t(m.sub, m.subEn)}
              </div>
              <Sparkline />
            </motion.div>
          ))}
        </div>

        {/* Courbe d'évolution */}
        <motion.div
          ref={chartRef}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 p-7 md:p-10 rounded-[28px] bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.4)]"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-white">
                {t("Évolution du chiffre d'affaires", "Revenue growth")}
              </h3>
              <p className="mt-1.5 text-[13.5px] text-white/50">
                {t(
                  "Indice base 100 au lancement — moyenne des clients accompagnés",
                  "Index base 100 at launch — average across our clients",
                )}
              </p>
            </div>
            <div className="flex items-center gap-5 text-[12.5px]">
              <span className="inline-flex items-center gap-2 text-white/80">
                <span className="w-5 h-[3px] rounded-full bg-gradient-to-r from-[#6366F1] to-[#818CF8]" aria-hidden />
                {t("Avec ImpartialGames", "With ImpartialGames")}
              </span>
              <span className="inline-flex items-center gap-2 text-white/45">
                <span className="w-5 h-[3px] rounded-full bg-white/25" aria-hidden />
                {t("Sans refonte", "Without a redesign")}
              </span>
            </div>
          </div>

          <div className="relative mt-8">
            <svg viewBox="0 0 800 300" className="w-full h-auto" role="img" aria-label={t("Courbe : +127 % de chiffre d'affaires avec ImpartialGames contre +15 % sans refonte", "Chart: +127% revenue with ImpartialGames vs +15% without a redesign")}>
              <defs>
                <linearGradient id="croissance-stroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#818CF8" />
                </linearGradient>
                <linearGradient id="croissance-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(99,102,241,0.22)" />
                  <stop offset="100%" stopColor="rgba(99,102,241,0)" />
                </linearGradient>
              </defs>

              {/* grille : indice 100 / 200 */}
              {[{ y: 252, v: "100" }, { y: 130, v: "200" }].map((g) => (
                <g key={g.v}>
                  <line x1="46" x2="790" y1={g.y} y2={g.y} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                  <text x="10" y={g.y + 4} fill="rgba(255,255,255,0.35)" fontSize="13">{g.v}</text>
                </g>
              ))}

              {/* sans refonte */}
              <motion.path
                d="M46 252 C 220 249, 420 244, 620 238 S 760 234, 786 233"
                fill="none"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={chartInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.6, ease: "easeOut" }}
              />

              {/* avec ImpartialGames : +127 % → indice 227 */}
              <motion.path
                d="M46 252 C 180 246, 300 226, 420 188 C 540 150, 660 100, 786 97"
                fill="none"
                stroke="url(#croissance-stroke)"
                strokeWidth="3.5"
                strokeLinecap="round"
                style={{ filter: "drop-shadow(0 0 14px rgba(99,102,241,0.45))" }}
                initial={{ pathLength: 0 }}
                animate={chartInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              />
              <path
                d="M46 252 C 180 246, 300 226, 420 188 C 540 150, 660 100, 786 97 L 786 300 L 46 300 Z"
                fill="url(#croissance-fill)"
                opacity={chartInView ? 1 : 0}
              />

              {/* point final + badge */}
              <motion.g
                initial={{ opacity: 0, scale: 0.6 }}
                animate={chartInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.7, duration: 0.5 }}
              >
                <circle cx="786" cy="97" r="6" fill="#818CF8" />
                <circle cx="786" cy="97" r="12" fill="rgba(129,140,248,0.25)" />
              </motion.g>
            </svg>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={chartInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="absolute right-0 top-[14%] -translate-y-full px-3.5 py-1.5 rounded-full bg-[#6366F1]/15 border border-[#818CF8]/30 backdrop-blur-md text-[15px] font-bold text-white"
            >
              +127 %
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
