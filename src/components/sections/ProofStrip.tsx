import { Marquee } from "@/components/wow";

/* Séparateur losange gradient */
function Diamond() {
  return (
    <span
      aria-hidden
      className="inline-block w-1.5 h-1.5 rotate-45 shrink-0"
      style={{ background: "var(--prisme-gradient)" }}
    />
  );
}

const rowOne = [
  "12+ projets livrés",
  "100% dans les délais",
  "3 pays clients",
  "5★ satisfaction client",
  "Core Web Vitals A+",
  "Zéro bug en production",
];

const rowTwo = [
  "React",
  "Next.js",
  "TypeScript",
  "Figma",
  "Framer Motion",
  "Supabase",
  "Vercel",
  "React Native",
  "SEO technique",
  "Tailwind CSS",
];

export function ProofStrip() {
  return (
    <div className="relative bg-[#0E0B14] py-8 overflow-hidden">
      {/* Lignes gradient top & bottom */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "var(--prisme-gradient)", opacity: 0.3 }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "var(--prisme-gradient)", opacity: 0.3 }}
      />

      {/* Halos latéraux très subtils */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[200px] pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(124,58,237,0.08), transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-[200px] pointer-events-none"
        style={{
          background: "linear-gradient(to left, rgba(240,175,200,0.06), transparent)",
        }}
      />

      {/* Rangée 1 — métriques → */}
      <Marquee speed={38} pauseOnHover={false} className="mb-4">
        {rowOne.map((item, i) => (
          <div key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-serif italic text-[15px] md:text-[17px] text-white/90 tracking-wide">
              {item}
            </span>
            <Diamond />
          </div>
        ))}
      </Marquee>

      {/* Rangée 2 — stack ← (reverse) */}
      <Marquee speed={30} reverse pauseOnHover={false}>
        {rowTwo.map((item, i) => (
          <div key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-syne text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.25em] text-[#6F6580]">
              {item}
            </span>
            <Diamond />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
