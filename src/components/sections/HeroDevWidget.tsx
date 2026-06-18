import { motion, useReducedMotion } from "framer-motion";

const TOKEN_COLORS = {
  keyword:   "oklch(0.72 0.14 278)",
  string:    "oklch(0.72 0.15 145)",
  comment:   "rgba(167,152,255,0.45)",
  component: "oklch(0.78 0.12 200)",
  fn:        "oklch(0.85 0.08 60)",
  default:   "rgba(243,241,249,0.72)",
  accent:    "oklch(0.72 0.15 145)",
};

const lines: { tokens: { t: string; c: keyof typeof TOKEN_COLORS }[] }[] = [
  { tokens: [{ t: "import", c: "keyword" }, { t: " { Studio }", c: "default" }, { t: " from", c: "keyword" }, { t: ' "impartial"', c: "string" }] },
  { tokens: [] },
  { tokens: [{ t: "const", c: "keyword" }, { t: " App", c: "fn" }, { t: " = () => {", c: "default" }] },
  { tokens: [{ t: "  const", c: "keyword" }, { t: " client", c: "fn" }, { t: " = ", c: "default" }, { t: '"ELEV8"', c: "string" }] },
  { tokens: [{ t: "  return", c: "keyword" }, { t: " <", c: "default" }, { t: "Studio", c: "component" }, { t: " client", c: "fn" }, { t: "={client} />", c: "default" }] },
  { tokens: [{ t: "}", c: "default" }] },
  { tokens: [] },
  { tokens: [{ t: "// ✓ Deploy ready", c: "comment" }] },
];

export function HeroDevWidget() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      animate={reduced ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative select-none w-full max-w-[440px]"
    >
      {/* Window */}
      <div
        className="relative rounded-[10px] overflow-hidden"
        style={{
          background: "oklch(0.09 0.03 278)",
          border: "1px solid rgba(109,91,208,0.35)",
          boxShadow: "0 32px 80px rgba(109,91,208,0.18), 0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ borderBottom: "1px solid rgba(109,91,208,0.15)", background: "rgba(255,255,255,0.03)" }}
        >
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,95,87,0.65)" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,189,46,0.65)" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(40,200,64,0.65)" }} />
          </div>
          <span
            className="ml-3 text-[11px] font-mono"
            style={{ color: "rgba(243,241,249,0.35)", letterSpacing: "0.04em" }}
          >
            App.tsx
          </span>
        </div>

        {/* Code body */}
        <div className="px-5 py-5 font-mono text-[12px] leading-[1.9] overflow-x-auto">
          {lines.map((line, li) =>
            line.tokens.length === 0 ? (
              <div key={li} className="h-[1.9em]" />
            ) : (
              <div key={li} className="flex flex-wrap">
                {line.tokens.map((tok, ti) => (
                  <span key={ti} style={{ color: TOKEN_COLORS[tok.c], whiteSpace: "pre" }}>
                    {tok.t}
                  </span>
                ))}
              </div>
            )
          )}

          {/* Blinking cursor */}
          <motion.span
            animate={reduced ? undefined : { opacity: [1, 0, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "steps(1)" }}
            className="inline-block w-[7px] h-[14px] align-middle ml-0.5 rounded-[1px]"
            style={{ background: TOKEN_COLORS.keyword, verticalAlign: "text-bottom" }}
          />
        </div>

        {/* Status bar */}
        <div
          className="px-4 py-2 flex items-center gap-2"
          style={{ borderTop: "1px solid rgba(109,91,208,0.10)", background: "rgba(255,255,255,0.02)" }}
        >
          <motion.span
            animate={reduced ? undefined : { opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: TOKEN_COLORS.accent, flexShrink: 0 }}
          />
          <span className="text-[10px] font-mono" style={{ color: "rgba(243,241,249,0.25)", letterSpacing: "0.05em" }}>
            TypeScript · Vite · React
          </span>
        </div>
      </div>

      {/* Floating badge — Deploy */}
      <motion.div
        animate={reduced ? undefined : { y: [0, -7, 0], rotate: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute -bottom-4 -right-6 rounded-[10px] px-3.5 py-2.5 flex items-center gap-2.5"
        style={{
          background: "oklch(0.09 0.03 278)",
          border: "1px solid rgba(109,91,208,0.40)",
          boxShadow: "0 8px 28px rgba(109,91,208,0.22)",
        }}
      >
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
          style={{ background: "rgba(109,91,208,0.25)" }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <polyline points="1.5,5 3.8,7.5 8.5,1.5" stroke={TOKEN_COLORS.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-[10px] font-semibold leading-none mb-0.5" style={{ color: "rgba(243,241,249,0.9)" }}>Deploy réussi</p>
          <p className="text-[9px] font-mono" style={{ color: TOKEN_COLORS.keyword }}>Vercel · Production</p>
        </div>
      </motion.div>

      {/* Floating badge — Perf */}
      <motion.div
        animate={reduced ? undefined : { y: [0, -5, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -top-4 -left-5 rounded-[10px] px-3 py-2.5 flex items-center gap-2"
        style={{
          background: "oklch(0.09 0.03 278)",
          border: "1px solid rgba(109,91,208,0.30)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
        }}
      >
        <span className="text-[12px]" style={{ color: TOKEN_COLORS.accent }}>⚡</span>
        <div>
          <p className="text-[9px] font-semibold leading-none mb-0.5" style={{ color: "rgba(243,241,249,0.9)" }}>Perf</p>
          <p className="text-[11px] font-bold font-mono" style={{ color: TOKEN_COLORS.accent }}>98</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
