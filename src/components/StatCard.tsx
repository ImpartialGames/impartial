import type { LucideIcon } from "lucide-react";
import { CountUp } from "@/components/wow/CountUp";
import { Sparkline } from "@/components/wow/Sparkline";

/**
 * Carte métrique partagée — chip du hero, tuile KPI des mockups,
 * bandeau résultats, métriques des cartes réalisations.
 * `value` est toujours la valeur finale (rendue côté serveur) ;
 * fournir `countTo` + `format` pour activer le compteur animé.
 */

export type StatAccent = "indigo" | "violet" | "emerald" | "cyan" | "amber";

// Map statique — jamais de classes Tailwind interpolées (JIT).
const ACCENTS: Record<
  StatAccent,
  { valueText: string; iconWrap: string; glow: string; dot: string; stroke: string }
> = {
  indigo: {
    valueText: "text-indigo-300",
    iconWrap: "bg-indigo-500/15 text-indigo-300",
    glow: "shadow-[0_10px_36px_-12px_rgba(99,102,241,0.5)]",
    dot: "#818CF8",
    stroke: "rgba(129,140,248,0.6)",
  },
  violet: {
    valueText: "text-violet-300",
    iconWrap: "bg-violet-500/15 text-violet-300",
    glow: "shadow-[0_10px_36px_-12px_rgba(139,92,246,0.5)]",
    dot: "#A78BFA",
    stroke: "rgba(139,92,246,0.6)",
  },
  emerald: {
    valueText: "text-emerald-400",
    iconWrap: "bg-emerald-500/15 text-emerald-300",
    glow: "shadow-[0_10px_36px_-12px_rgba(52,211,153,0.45)]",
    dot: "#34D399",
    stroke: "rgba(52,211,153,0.6)",
  },
  cyan: {
    valueText: "text-cyan-400",
    iconWrap: "bg-cyan-500/15 text-cyan-300",
    glow: "shadow-[0_10px_36px_-12px_rgba(34,211,238,0.45)]",
    dot: "#22D3EE",
    stroke: "rgba(34,211,238,0.6)",
  },
  amber: {
    valueText: "text-amber-400",
    iconWrap: "bg-amber-500/15 text-amber-300",
    glow: "shadow-[0_10px_36px_-12px_rgba(251,191,36,0.45)]",
    dot: "#FBBF24",
    stroke: "rgba(251,191,36,0.6)",
  },
};

interface StatCardProps {
  value: string;
  countTo?: number;
  format?: (n: number) => string;
  label: string;
  sub?: string;
  icon?: LucideIcon;
  accent?: StatAccent;
  size?: "sm" | "md" | "lg";
  sparkline?: boolean;
  /** Sans backdrop-blur — pour l'intérieur des écrans mockup (perf + bug Safari sous transform 3D). */
  flat?: boolean;
  className?: string;
}

export function StatCard({
  value,
  countTo,
  format,
  label,
  sub,
  icon: Icon,
  accent = "indigo",
  size = "sm",
  sparkline = false,
  flat = false,
  className = "",
}: StatCardProps) {
  const a = ACCENTS[accent];
  const num = countTo !== undefined && format ? <CountUp to={countTo} format={format} /> : value;
  const surface = flat
    ? "rounded-xl border border-white/[0.07] bg-white/[0.04]"
    : `rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md ${a.glow}`;

  if (size === "lg") {
    return (
      <div className={`p-6 rounded-[24px] border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-[0_12px_40px_-15px_rgba(0,0,0,0.4)] ${className}`}>
        <div className="text-[13px] font-medium text-white/60">{label}</div>
        <div className={`mt-3 font-display font-bold text-[38px] md:text-[44px] leading-none tracking-[-0.02em] tabular-nums ${a.valueText}`}>
          {num}
        </div>
        {sub && (
          <div className="mt-2.5 flex items-start gap-1.5 text-[12.5px] text-white/50 leading-snug">
            {Icon && <Icon className="h-3.5 w-3.5 mt-0.5 shrink-0 text-emerald-400/90" aria-hidden />}
            {sub}
          </div>
        )}
        {sparkline && <Sparkline stroke={a.stroke} dotColor={a.dot} />}
      </div>
    );
  }

  if (size === "md") {
    return (
      <div className={`p-4 ${surface} ${className}`}>
        <div className={`font-display font-bold text-[26px] md:text-[28px] leading-none tracking-[-0.02em] tabular-nums ${a.valueText}`}>
          {num}
        </div>
        <div className="mt-1.5 text-[11.5px] text-white/55">{label}</div>
        {sparkline && <Sparkline stroke={a.stroke} dotColor={a.dot} className="w-full h-5 mt-2.5" />}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 px-3.5 py-2.5 ${surface} ${className}`}>
      {Icon && (
        <span className={`grid place-items-center w-[30px] h-[30px] rounded-lg shrink-0 ${a.iconWrap}`}>
          <Icon className="h-4 w-4" aria-hidden />
        </span>
      )}
      <span className="flex flex-col min-w-0">
        <span className={`font-display font-bold text-[19px] leading-none tracking-[-0.02em] tabular-nums ${a.valueText}`}>
          {num}
        </span>
        <span className="mt-1 text-[10.5px] leading-tight text-white/55 truncate">{label}</span>
      </span>
    </div>
  );
}
