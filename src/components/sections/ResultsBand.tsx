import { motion } from "framer-motion";
import { Award, Megaphone, TrendingUp, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CountUp } from "@/components/wow/CountUp";
import { useLang } from "@/contexts/LanguageContext";

/**
 * Bandeau « résultats concrets » — 4 métriques réelles animées,
 * juste sous le hero (reprend les chiffres de l'ex-section Croissance).
 */

type Metric = {
  to: number;
  format: (n: number) => string;
  formatEn?: (n: number) => string;
  label: string;
  labelEn: string;
  sub: string;
  subEn: string;
  icon: LucideIcon;
  accentText: string;
  accentBg: string;
};

const metrics: Metric[] = [
  {
    to: 127,
    format: (n) => `+${Math.round(n)} %`,
    formatEn: (n) => `+${Math.round(n)}%`,
    label: "de chiffre d'affaires en moyenne",
    labelEn: "average revenue growth",
    sub: "sur les 12 mois après lancement",
    subEn: "in the 12 months after launch",
    icon: TrendingUp,
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/15 text-emerald-300",
  },
  {
    to: 2.4,
    format: (n) => `×${n.toFixed(1).replace(".", ",")}`,
    formatEn: (n) => `×${n.toFixed(1)}`,
    label: "de nouveaux clients",
    labelEn: "new clients",
    sub: "vs l'année précédant la refonte",
    subEn: "vs the year before the redesign",
    icon: Users,
    accentText: "text-violet-300",
    accentBg: "bg-violet-500/15 text-violet-300",
  },
  {
    to: 38,
    format: (n) => `+${Math.round(n)}K`,
    label: "d'audience générée",
    labelEn: "audience generated",
    sub: "abonnés, toutes plateformes",
    subEn: "followers, all platforms",
    icon: Megaphone,
    accentText: "text-cyan-400",
    accentBg: "bg-cyan-500/15 text-cyan-300",
  },
  {
    to: 30,
    format: (n) => `${Math.round(n)}+`,
    label: "clients accompagnés",
    labelEn: "clients supported",
    sub: "en France et au Canada",
    subEn: "across France and Canada",
    icon: Award,
    accentText: "text-indigo-300",
    accentBg: "bg-indigo-500/15 text-indigo-300",
  },
];

export function ResultsBand() {
  const { lang, t } = useLang();

  return (
    <section className="relative py-14 md:py-20 bg-[#0A0E1A]">
      <div className="w-full px-6 lg:px-12 xl:px-16 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_12px_40px_-15px_rgba(0,0,0,0.4)] p-7 md:p-9"
        >
          <div className="grid gap-8 lg:gap-6 lg:grid-cols-[220px_repeat(4,1fr)] items-center">
            <h2 className="font-serif text-[20px] md:text-[22px] leading-[1.2] tracking-[-0.02em] text-white/90">
              {t("Des résultats concrets pour nos clients", "Real results for our clients")}
            </h2>

            {metrics.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-3.5 lg:border-l lg:border-white/[0.08] lg:pl-6"
                >
                  <span className={`grid place-items-center w-10 h-10 rounded-xl shrink-0 ${m.accentBg}`}>
                    <Icon className="h-[18px] w-[18px]" aria-hidden />
                  </span>
                  <span className="flex flex-col">
                    <span className={`font-display font-bold text-[28px] md:text-[32px] leading-none tracking-[-0.02em] tabular-nums ${m.accentText}`}>
                      <CountUp to={m.to} format={lang === "en" && m.formatEn ? m.formatEn : m.format} />
                    </span>
                    <span className="mt-1.5 text-[12.5px] font-medium text-white/70 leading-snug">
                      {t(m.label, m.labelEn)}
                    </span>
                    <span className="mt-0.5 text-[11.5px] text-white/55 leading-snug">
                      {t(m.sub, m.subEn)}
                    </span>
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
