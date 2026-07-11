import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

function useCountUp(target: number, started: boolean, duration = 1600) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

export function SocialProofBand() {
  const { t } = useLang();
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const clientCount = useCountUp(30, started);
  const yearCount = useCountUp(13, started);
  const productCount = useCountUp(4, started);

  const stats = [
    {
      value: `+${clientCount}`,
      label: t("clients accompagnés", "clients served"),
      key: "clients",
    },
    {
      value: t(`${yearCount} ans`, `${yearCount} years`),
      label: t("d'expérience", "of experience"),
      key: "years",
    },
    {
      value: t(`${productCount} produits`, `${productCount} products`),
      label: t("opérés par nos soins", "operated in-house"),
      key: "products",
    },
    {
      value: "France & Montréal",
      label: t("nos deux marchés", "our two markets"),
      key: "markets",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ backgroundColor: "#0d1120" }}
    >
      {/* Grille isométrique */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="iso-grid"
            x="0"
            y="0"
            width="60"
            height="52"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 26 L30 0 L60 26 L30 52 Z"
              fill="none"
              stroke="rgba(124,58,237,0.07)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#iso-grid)" />
      </svg>

      {/* Ligne gradient haut */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.35) 50%, transparent 100%)",
        }}
      />

      {/* Dégradé bas vers OffresSection */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, hsl(var(--background)) 100%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-24">
          {stats.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <span className="font-syne font-black text-[28px] md:text-[40px] tracking-[-0.03em] text-white leading-none">
                {s.value}
              </span>
              <span className="text-[12px] md:text-[13px] text-white/38 font-medium tracking-wide mt-1.5">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
