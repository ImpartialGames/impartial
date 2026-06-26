import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton, RevealText } from "@/components/wow";
import { CalendlyQuiz } from "@/components/CalendlyQuiz";
import { useLang } from "@/contexts/LanguageContext";

interface CodeFragment {
  code: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  delay: number;
  dur: number;
}

const codeFragments: CodeFragment[] = [
  { code: "const [data, setData]\n  = useState<Product[]>([])", top: "18%", right: "8%", delay: 0, dur: 28 },
  { code: "export async function\ngetServerSideProps(ctx) {\n  const res = await fetch(api)\n  return { props: res }\n}", top: "52%", right: "5%", delay: 2.5, dur: 32 },
  { code: "npm run build\n✓ Compiled in 2.1s\n✓ 0 errors, 0 warnings", top: "72%", right: "13%", delay: 1.2, dur: 24 },
  { code: "<Layout>\n  <Hero />\n  <Proof />\n  <Pricing />\n</Layout>", top: "28%", left: "2%", delay: 3, dur: 30 },
  { code: "git commit -m 'feat: launch'\ngit push origin main", top: "62%", left: "2%", delay: 0.8, dur: 26 },
  { code: "type Product = {\n  id: string\n  live: boolean\n  mrr: number\n}", top: "83%", left: "5%", delay: 1.8, dur: 35 },
];

function TerminalLine() {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const lines = [
      "> impartial init --premium --clients=30",
      "> launching products that last... ✓",
    ];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 0) {
      const cmd = lines[0];
      let i = 0;
      const type = () => {
        if (i <= cmd.length) {
          setText(cmd.slice(0, i));
          i++;
          timeout = setTimeout(type, 42);
        } else {
          timeout = setTimeout(() => setPhase(1), 700);
        }
      };
      timeout = setTimeout(type, 1800);
    } else if (phase === 1) {
      const base = lines[0] + "\n";
      const cmd = lines[1];
      let i = 0;
      setText(base);
      const type = () => {
        if (i <= cmd.length) {
          setText(base + cmd.slice(0, i));
          i++;
          timeout = setTimeout(type, 38);
        } else {
          setPhase(2);
        }
      };
      timeout = setTimeout(type, 400);
    }

    return () => clearTimeout(timeout);
  }, [phase]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="absolute bottom-9 left-6 lg:left-12 xl:left-16 z-10 hidden md:block"
      aria-hidden
    >
      <pre className="font-mono text-[12px] text-white/28 tracking-wide whitespace-pre leading-relaxed">
        {text}
        {phase < 2 && <span className="terminal-cursor" />}
      </pre>
    </motion.div>
  );
}

export function HeroPremium() {
  const [quizOpen, setQuizOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroBadges = [
    t("Design premium", "Premium design"),
    t("Code solide", "Solid code"),
    "Mobile-first",
    t("Zéro compromis", "Zero compromise"),
  ];

  return (
    <section
      className="relative h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-8 md:pt-20 md:pb-8"
      style={{ backgroundColor: "#080410" }}
    >
      {/* ─── Dot grid — parallax léger ─── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(124,58,237,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          transform: `translateY(${scrollY * 0.12}px)`,
          willChange: "transform",
        }}
      />

      {/* ─── Orbe violet principal ─── */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 900,
          height: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.52) 0%, rgba(124,58,237,0.14) 50%, transparent 70%)",
          filter: "blur(80px)",
          top: "-25%",
          right: "-15%",
          willChange: "transform",
        }}
        animate={{
          x: [0, -80, 50, -30, 20, 0],
          y: [0, 60, -40, 80, -20, 0],
          scale: [1, 1.08, 0.95, 1.05, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ─── Orbe lavande bas-gauche ─── */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 720,
          height: 720,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(167,139,250,0.35) 0%, rgba(167,139,250,0.08) 50%, transparent 70%)",
          filter: "blur(70px)",
          bottom: "-18%",
          left: "5%",
          willChange: "transform",
        }}
        animate={{
          x: [0, 70, -50, 30, -40, 0],
          y: [0, -70, 40, -30, 20, 0],
          scale: [1, 0.94, 1.06, 0.98, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      />

      {/* ─── Orbe rose pulsant ─── */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(240,175,200,0.28) 0%, rgba(255,185,150,0.08) 55%, transparent 70%)",
          filter: "blur(60px)",
          top: "25%",
          right: "22%",
          willChange: "transform, opacity",
        }}
        animate={{
          x: [0, 45, -30, 55, -20, 0],
          y: [0, -55, 35, -40, 15, 0],
          opacity: [0.4, 0.9, 0.6, 0.9, 0.4],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* ─── Fragments de code flottants (desktop) ─── */}
      {codeFragments.map((f, i) => (
        <motion.pre
          key={i}
          aria-hidden
          className="absolute font-mono text-[10px] leading-relaxed pointer-events-none select-none hidden md:block"
          style={{
            top: f.top,
            right: f.right,
            left: f.left,
            bottom: f.bottom,
            color: "rgba(167,139,250,0.08)",
            willChange: "transform",
          }}
          animate={{ y: [0, -16, 0] }}
          transition={{
            duration: f.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: f.delay,
          }}
        >
          {f.code}
        </motion.pre>
      ))}

      {/* ─── Accolades déco ─── */}
      <div
        aria-hidden
        className="absolute bottom-24 right-6 font-mono text-[110px] text-white/[0.028] select-none pointer-events-none leading-none hidden lg:block"
      >
        {"{"}
      </div>
      <div
        aria-hidden
        className="absolute top-28 left-5 font-mono text-[72px] text-white/[0.025] select-none pointer-events-none leading-none hidden lg:block"
      >
        {"</>"}
      </div>

      {/* ─── Contenu principal ─── */}
      <div className="w-full px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.9fr] gap-10 lg:gap-12 items-center max-w-[1600px] mx-auto">
          {/* Colonne gauche */}
          <div>
            <h1 className="font-serif text-[34px] sm:text-[48px] lg:text-[72px] xl:text-[88px] 2xl:text-[100px] leading-[0.98] tracking-[-0.03em] text-white">
              <RevealText by="word" stagger={0.06}>
                {t("On ne livre pas", "We don't just ship")}
              </RevealText>
              <span className="block">
                <RevealText by="word" stagger={0.06} delay={0.15}>
                  {t("du code.", "code.")}
                </RevealText>
              </span>
              <span className="block">
                <span className="prisme-italic-grad prisme-shimmer">
                  {t("On lance des produits.", "We launch products.")}
                </span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 text-[16px] md:text-[18px] text-white/50 leading-[1.6] max-w-2xl"
            >
              {t(
                "Développement web, mobile et logiciel sur-mesure. Plus de 30 clients accompagnés. 4 produits opérés par nos soins.",
                "Custom web, mobile & software. 30+ clients. 4 products we build and operate ourselves."
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-7 flex flex-col sm:flex-row gap-3"
            >
              <MagneticButton
                as="button"
                onClick={() => setQuizOpen(true)}
                className="btn-prisme group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium text-[15px]"
              >
                {t("Planifier un appel", "Book a call")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton
                as={Link}
                to="/#offres"
                onClick={(e: React.MouseEvent) => {
                  const el = document.getElementById("offres");
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/80 font-medium text-[15px] hover:bg-white/[0.07] hover:border-white/35 hover:text-white transition-all duration-300"
              >
                {t("Découvrir nos offres", "See our packages")}
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {heroBadges.map((b, i) => (
                <motion.span
                  key={b}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.05 + i * 0.07 }}
                  className="px-4 py-2 rounded-full text-[12px] font-medium tracking-wide bg-white/[0.06] border border-white/[0.11] text-white/55"
                >
                  {b}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Colonne droite — espace fragments */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* ─── Terminal typewriter ─── */}
      <TerminalLine />

      {/* ─── Dégradé bas vers SocialProofBand (dark) ─── */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-[5]"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #0d1120 100%)" }}
      />

      <AnimatePresence>
        {quizOpen && <CalendlyQuiz onClose={() => setQuizOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}
