import { motion } from "framer-motion";

/**
 * Illustration flottante hero page Web —
 * Mockup navigateur aux couleurs Prisme, fond transparent, animé.
 */
export function WebHeroVisual() {
  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-[520px] select-none"
      style={{ filter: "drop-shadow(0 32px 64px rgba(124,58,237,0.28))" }}
    >
      {/* ── Orbe ambiant derrière ── */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-8 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.22) 0%, rgba(167,139,250,0.10) 50%, transparent 75%)",
          filter: "blur(24px)",
        }}
      />

      {/* ── Fenêtre navigateur ── */}
      <div
        className="relative rounded-[20px] overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(167,139,250,0.30)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Chrome / barre du navigateur */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{
            background: "rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(167,139,250,0.15)",
          }}
        >
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(240,175,200,0.7)" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,185,150,0.7)" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(167,139,250,0.7)" }} />
          </div>

          {/* URL bar */}
          <div
            className="flex-1 mx-3 h-5 rounded-full flex items-center px-3 gap-2"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(167,139,250,0.15)" }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(167,139,250,0.6)" }} />
            <div className="h-1.5 rounded-full flex-1" style={{ background: "rgba(255,255,255,0.12)", maxWidth: 120 }} />
          </div>
        </div>

        {/* Contenu de la page simulée */}
        <div className="p-5 space-y-4">

          {/* Hero simulé */}
          <div className="rounded-[14px] p-5 relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(167,139,250,0.12)" }}>
            {/* Halo intérieur */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)", filter: "blur(16px)" }} />

            {/* Titre simulé */}
            <div className="space-y-2 mb-4">
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="h-3 rounded-full w-3/4"
                style={{ background: "linear-gradient(90deg, rgba(167,139,250,0.8), rgba(240,175,200,0.6))" }}
              />
              <div className="h-2.5 rounded-full w-1/2" style={{ background: "rgba(255,255,255,0.15)" }} />
              <div className="h-2 rounded-full w-2/3" style={{ background: "rgba(255,255,255,0.08)" }} />
            </div>

            {/* Boutons CTA simulés */}
            <div className="flex gap-2">
              <div className="h-7 rounded-full px-4 flex items-center justify-center"
                style={{ background: "linear-gradient(110deg,#7C3AED,#A78BFA,#F0AFC8)", minWidth: 80 }}>
                <div className="h-1.5 rounded-full w-12 bg-white/60" />
              </div>
              <div className="h-7 rounded-full px-3 flex items-center justify-center"
                style={{ border: "1px solid rgba(167,139,250,0.4)", minWidth: 60 }}>
                <div className="h-1.5 rounded-full w-8" style={{ background: "rgba(167,139,250,0.5)" }} />
              </div>
            </div>
          </div>

          {/* Grille de cartes simulées */}
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { color: "rgba(124,58,237,0.25)", delay: 0 },
              { color: "rgba(167,139,250,0.20)", delay: 0.5 },
              { color: "rgba(240,175,200,0.20)", delay: 1 },
            ].map((card, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
                className="rounded-[10px] p-3 space-y-2"
                style={{ background: card.color, border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="w-5 h-5 rounded-lg" style={{ background: "rgba(255,255,255,0.15)" }} />
                <div className="h-1.5 rounded-full w-full" style={{ background: "rgba(255,255,255,0.20)" }} />
                <div className="h-1.5 rounded-full w-2/3" style={{ background: "rgba(255,255,255,0.12)" }} />
              </motion.div>
            ))}
          </div>

          {/* Barre de métriques simulées */}
          <div className="flex gap-2">
            {[
              { label: "LCP", val: "0.8s", col: "rgba(167,139,250,0.6)" },
              { label: "CLS", val: "0.00", col: "rgba(240,175,200,0.6)" },
              { label: "FID", val: "12ms", col: "rgba(255,185,150,0.6)" },
            ].map((m) => (
              <div
                key={m.label}
                className="flex-1 rounded-[10px] px-2 py-2 text-center"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="text-[8px] font-bold tracking-widest mb-0.5" style={{ color: m.col }}>{m.label}</div>
                <div className="text-[10px] font-semibold text-white/70">{m.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Barre de statut bas */}
        <div
          className="px-4 py-2 flex items-center gap-2"
          style={{ borderTop: "1px solid rgba(167,139,250,0.10)", background: "rgba(255,255,255,0.03)" }}
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "rgba(167,139,250,0.8)" }}
          />
          <div className="h-1.5 rounded-full w-20" style={{ background: "rgba(255,255,255,0.10)" }} />
        </div>
      </div>

      {/* ── Carte flottante secondaire (effet profondeur) ── */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute -bottom-6 -right-8 rounded-[16px] px-4 py-3 flex items-center gap-3"
        style={{
          background: "rgba(28,14,66,0.85)",
          border: "1px solid rgba(167,139,250,0.35)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 8px 32px rgba(124,58,237,0.25)",
        }}
      >
        <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
          style={{ background: "linear-gradient(135deg,#7C3AED,#A78BFA)" }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <polyline points="1,6 4,9 11,2" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <div className="text-[10px] font-semibold text-white leading-none mb-0.5">Core Web Vitals</div>
          <div className="text-[9px]" style={{ color: "rgba(167,139,250,0.8)" }}>Score A+ · Toutes métriques</div>
        </div>
      </motion.div>

      {/* ── Badge SEO flottant ── */}
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute -top-5 -left-6 rounded-[14px] px-3 py-2.5 flex items-center gap-2.5"
        style={{
          background: "rgba(28,14,66,0.85)",
          border: "1px solid rgba(240,175,200,0.30)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 8px 24px rgba(240,175,200,0.15)",
        }}
      >
        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
          style={{ background: "rgba(240,175,200,0.20)" }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <circle cx="5" cy="5" r="4" stroke="rgba(240,175,200,0.9)" strokeWidth="1.2" />
            <path d="M3 5h4M5 3v4" stroke="rgba(240,175,200,0.9)" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <div className="text-[9px] font-semibold text-white leading-none mb-0.5">SEO Score</div>
          <div className="text-[9px]" style={{ color: "rgba(240,175,200,0.8)" }}>98 / 100</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
