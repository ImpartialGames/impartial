import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  CheckCircle2,
  FolderKanban,
  LayoutDashboard,
  Settings,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { CountUp } from "@/components/wow/CountUp";
import { Sparkline } from "@/components/wow/Sparkline";
import { useLang } from "@/contexts/LanguageContext";

/**
 * Composite visuel du hero — dashboard tablette + téléphone + cartes stats
 * flottantes, entièrement codé (DOM/CSS/SVG). Chiffres réels du studio.
 * SSR-safe : contenu statique rendu serveur, animations au mount côté client.
 */

const BAR_HEIGHTS = [26, 34, 30, 42, 38, 52, 48, 62, 58, 74, 84, 96];

function FloatWrap({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: [0, -7, 0] }}
      transition={{
        opacity: { duration: 0.6, delay: 0.4 + delay * 0.15 },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroComposite() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, -40]);

  const sidebarIcons = [LayoutDashboard, BarChart3, Users, FolderKanban, Settings];

  const activity = [
    { color: "bg-emerald-400", text: t("Maquette validée — Eclipsia", "Mockup approved — Eclipsia"), time: "09:24" },
    { color: "bg-indigo-400", text: t("Déploiement prod — ELEV8", "Prod deploy — ELEV8"), time: "11:02" },
    { color: "bg-cyan-400", text: t("Nouveau lead entrant", "New inbound lead"), time: "14:37" },
  ];

  return (
    <div
      role="img"
      aria-label={t(
        "Aperçu d'un tableau de bord produit avec les résultats moyens de nos clients : +127 % de chiffre d'affaires, ×2,4 nouveaux clients, +38K d'audience",
        "Preview of a product dashboard with our clients' average results: +127% revenue, ×2.4 new clients, +38K audience",
      )}
      className="relative mx-auto mt-16 lg:mt-0 w-full max-w-[420px] md:max-w-[560px] lg:max-w-none lg:h-[560px] xl:h-[600px] [perspective:1400px]"
    >
      {/* ─── Glows ─── */}
      <div aria-hidden className="absolute -inset-x-16 -inset-y-12 pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] rounded-full blur-[80px]"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.28) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-[-15%] left-[-10%] w-[420px] h-[420px] rounded-full blur-[90px]"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.20) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-[4%] right-[-3%] w-[140px] h-[90px]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(129,140,248,0.30) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
            maskImage: "linear-gradient(135deg, black 30%, transparent 90%)",
            WebkitMaskImage: "linear-gradient(135deg, black 30%, transparent 90%)",
          }}
        />
      </div>

      {/* ─── Appareils ─── */}
      <motion.div aria-hidden className="relative z-10" style={reduced ? {} : { y: parallaxY }}>
        {/* Tablette */}
        <div className="relative w-full max-w-[560px] rounded-[28px] p-2 border border-white/[0.14] bg-gradient-to-b from-[#141A2E] to-[#0A0E1A] shadow-[0_40px_90px_-30px_rgba(5,6,14,0.9),0_0_60px_-20px_rgba(99,102,241,0.35)] lg:[transform:rotateX(4deg)_rotateY(-6deg)_rotate(-2deg)]">
          {/* caméra */}
          <span className="absolute top-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/20 ring-2 ring-white/5" />
          {/* reflet cadre */}
          <span className="absolute inset-0 rounded-[28px] pointer-events-none bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />

          {/* Écran */}
          <div className="rounded-[20px] overflow-hidden bg-[#070A14] grid grid-cols-[52px_1fr] md:grid-cols-[64px_1fr] mt-3">
            {/* Sidebar */}
            <div className="border-r border-white/[0.06] py-4 flex flex-col items-center gap-1.5">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 mb-2" />
              {sidebarIcons.map((Icon, i) => (
                <span
                  key={i}
                  className={`relative w-8 h-8 rounded-lg grid place-items-center ${
                    i === 0 ? "bg-indigo-500/15 text-indigo-300" : "text-white/35"
                  }`}
                >
                  {i === 0 && <span className="absolute left-[-9px] md:left-[-15px] w-0.5 h-4 rounded-full bg-indigo-400" />}
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>

            {/* Contenu dashboard */}
            <div className="p-4 md:p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[13px] md:text-[14px] font-semibold text-white/90">
                    {t("Tableau de bord", "Dashboard")}
                  </div>
                  <div className="text-[10px] text-white/45">
                    {t("Croissance clients — 12 derniers mois", "Client growth — last 12 months")}
                  </div>
                </div>
                <span className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white text-[10px] font-bold grid place-items-center">
                  IG
                </span>
              </div>

              {/* KPI */}
              <div className="grid grid-cols-3 gap-2">
                <StatCard flat size="md" accent="emerald" value="+127 %" label={t("CA moyen", "Avg revenue")} className="!p-2.5 md:!p-3" />
                <StatCard flat size="md" accent="violet" value={t("×2,4", "×2.4")} label={t("Clients", "Clients")} className="!p-2.5 md:!p-3" />
                <StatCard flat size="md" accent="cyan" value="+38K" label={t("Audience", "Audience")} className="!p-2.5 md:!p-3" />
              </div>

              {/* Graphique barres + courbe */}
              <svg viewBox="0 0 320 110" className="w-full h-[96px] md:h-[110px]" aria-hidden>
                <defs>
                  <linearGradient id="hero-bars" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
                {[40, 75].map((y) => (
                  <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                ))}
                {BAR_HEIGHTS.map((h, i) => (
                  <motion.rect
                    key={i}
                    x={8 + i * 26}
                    width="16"
                    rx="3"
                    fill="url(#hero-bars)"
                    opacity={i >= BAR_HEIGHTS.length - 3 ? 1 : 0.35}
                    initial={{ height: h, y: 104 - h }}
                    animate={{ height: [0, h], y: [104, 104 - h] }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  />
                ))}
                <motion.path
                  d="M10 92 C 60 88, 110 78, 160 62 S 270 28, 312 14"
                  fill="none"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.6, delay: 0.5, ease: "easeOut" }}
                />
              </svg>

              {/* Activité récente */}
              <div className="space-y-2">
                {activity.map((a) => (
                  <div key={a.text} className="flex items-center gap-2.5 text-[10.5px]">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${a.color}`} />
                    <span className="text-white/70 truncate">{a.text}</span>
                    <span className="ml-auto text-white/35 tabular-nums">{a.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Téléphone */}
        <div className="absolute -bottom-8 -right-2 md:-bottom-10 md:-right-6 lg:-right-10 z-20 w-[130px] md:w-[160px] lg:w-[176px] rotate-[5deg] rounded-[24px] p-1.5 border border-white/[0.14] bg-gradient-to-b from-[#141A2E] to-[#0A0E1A] shadow-[0_30px_70px_-20px_rgba(5,6,14,0.95),0_0_50px_-15px_rgba(99,102,241,0.4)]">
          <span className="block mx-auto mt-1 w-12 h-1 rounded-full bg-white/15" />
          <div className="rounded-[18px] bg-[#070A14] p-3 mt-1.5 space-y-2">
            <div className="text-[9px] uppercase tracking-widest text-white/40">
              {t("Revenus", "Revenue")}
            </div>
            <div className="font-display font-bold text-[26px] md:text-[30px] leading-none text-emerald-400 tabular-nums">
              <CountUp to={127} format={(n) => `+${Math.round(n)} %`} />
            </div>
            <Sparkline stroke="rgba(34,211,238,0.6)" dotColor="#22D3EE" className="w-full h-6 mt-1" />
            <div className="flex justify-between text-[9px] text-white/50">
              <span>{t("Ce mois", "This month")}</span>
              <span className="text-emerald-400/90">+18 %</span>
            </div>
            <div className="flex justify-between text-[9px] text-white/50">
              <span>{t("Leads", "Leads")}</span>
              <span className="text-cyan-400/90">+42</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─── Cartes flottantes ─── */}
      <FloatWrap className="absolute -top-5 -left-3 lg:-top-7 lg:-left-8 z-30" delay={0}>
        <StatCard size="sm" accent="emerald" icon={TrendingUp} value="+127 %" label={t("CA moyen clients", "Avg client revenue")} />
      </FloatWrap>

      <FloatWrap className="absolute top-[16%] -right-3 lg:-right-8 z-30 hidden md:block" delay={1.2}>
        <div className="flex items-center gap-3 w-[230px] rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/10 p-3 shadow-[0_10px_36px_-12px_rgba(99,102,241,0.4)]">
          <span className="grid place-items-center w-[34px] h-[34px] rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 shrink-0">
            <CheckCircle2 className="h-4 w-4 text-white" />
          </span>
          <span className="flex flex-col min-w-0">
            <span className="text-[12px] font-semibold text-white">{t("Projet livré", "Project shipped")}</span>
            <span className="text-[11px] text-white/55 truncate">{t("Eclipsia — mise en ligne", "Eclipsia — now live")}</span>
            <span className="text-[10px] text-white/35">{t("il y a 2 min", "2 min ago")}</span>
          </span>
        </div>
      </FloatWrap>

      <FloatWrap className="absolute top-[54%] -left-6 lg:-left-14 z-30 hidden md:block" delay={2.4}>
        <StatCard size="sm" accent="violet" icon={Users} value={t("×2,4", "×2.4")} label={t("Nouveaux clients", "New clients")} />
      </FloatWrap>

      <FloatWrap className="absolute -bottom-14 left-[8%] lg:left-[4%] z-30 hidden md:block" delay={3.2}>
        <div className="flex items-center gap-3 pl-2 pr-4 py-2 rounded-full bg-white/[0.07] backdrop-blur-md border border-white/10">
          <span className="flex -space-x-2">
            {[
              ["E", "from-indigo-500 to-violet-500"],
              ["A", "from-violet-500 to-fuchsia-500"],
              ["U", "from-cyan-500 to-indigo-500"],
              ["V", "from-emerald-500 to-cyan-500"],
            ].map(([initial, grad]) => (
              <span
                key={initial}
                className={`w-8 h-8 rounded-full ring-2 ring-[#0A0E1A] bg-gradient-to-br ${grad} grid place-items-center text-[11px] font-bold text-white`}
              >
                {initial}
              </span>
            ))}
          </span>
          <span className="flex flex-col">
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="text-[11px] text-white/60">{t("30+ clients accompagnés", "30+ clients supported")}</span>
          </span>
        </div>
      </FloatWrap>
    </div>
  );
}
