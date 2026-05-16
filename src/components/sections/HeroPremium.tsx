import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton, RevealText } from "@/components/wow";
import fondHero from "@/assets/fond-hero.png";

const heroBadges = ["Design éditorial", "Motion maîtrisé", "Performance & SEO", "Stack moderne"];

export function HeroPremium() {
  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-8 md:pt-20 md:pb-8">

      {/* ─── Image de fond avec Ken Burns cinématique ─── */}
      {/* @ts-ignore */}
      <motion.img
        src={fondHero}
        alt=""
        aria-hidden
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center md:object-[60%_center] pointer-events-none select-none"
        draggable={false}
        animate={{
          scale: [1, 1.06, 1.02, 1.07, 1],
          x: [0, -12, 8, -6, 0],
          y: [0, -8, 12, -4, 0],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
      />

      {/* ─── Orbe violet principal — grand, dérive organique ─── */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 900, height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.45) 0%, rgba(124,58,237,0.12) 50%, transparent 70%)",
          filter: "blur(72px)",
          top: "-20%", right: "-15%",
          willChange: "transform",
        }}
        animate={{
          x: [0, -80, 50, -30, 20, 0],
          y: [0, 60, -40, 80, -20, 0],
          scale: [1, 1.08, 0.95, 1.05, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ─── Orbe lavande secondaire — bas-gauche ─── */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 720, height: 720,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167,139,250,0.40) 0%, rgba(167,139,250,0.10) 50%, transparent 70%)",
          filter: "blur(64px)",
          bottom: "-18%", left: "5%",
          willChange: "transform",
        }}
        animate={{
          x: [0, 70, -50, 30, -40, 0],
          y: [0, -70, 40, -30, 20, 0],
          scale: [1, 0.94, 1.06, 0.98, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      />

      {/* ─── Orbe rose/pêche — centre droit, pulse ─── */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 560, height: 560,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,175,200,0.38) 0%, rgba(255,185,150,0.12) 55%, transparent 70%)",
          filter: "blur(52px)",
          top: "20%", right: "22%",
          willChange: "transform, opacity",
        }}
        animate={{
          x: [0, 45, -30, 55, -20, 0],
          y: [0, -55, 35, -40, 15, 0],
          opacity: [0.5, 1, 0.65, 1, 0.8, 0.5],
          scale: [1, 1.1, 0.92, 1.05, 1],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* ─── Orbe pêche chaud — bas-centre, subtil ─── */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 480, height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,185,150,0.30) 0%, transparent 65%)",
          filter: "blur(60px)",
          bottom: "5%", left: "38%",
          willChange: "transform, opacity",
        }}
        animate={{
          x: [0, -40, 60, -20, 0],
          y: [0, -30, 50, -40, 0],
          opacity: [0.4, 0.9, 0.5, 0.85, 0.4],
        }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* ─── Fondu bas vers #FBFAF7 ─── */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-[5]"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #FBFAF7 100%)",
        }}
      />

      <div className="w-full px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.9fr] gap-10 lg:gap-12 items-center max-w-[1600px] mx-auto">
          {/* Colonne gauche */}
          <div>
            <h1 className="font-serif text-[34px] sm:text-[48px] lg:text-[72px] xl:text-[88px] 2xl:text-[100px] leading-[0.98] tracking-[-0.03em] text-[#0E0B14]">
              <RevealText by="word" stagger={0.06}>Créateurs</RevealText>
              <span className="block">
                <RevealText by="word" stagger={0.06} delay={0.15}>
                  d&apos;expériences
                </RevealText>
              </span>
              <span className="block">
                <span className="prisme-italic-grad prisme-shimmer">digitales sur-mesure.</span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 text-[16px] md:text-[18px] text-[#6F6580] leading-[1.6] max-w-2xl"
            >
              Web, mobile &amp; SaaS, design raffiné, performance et animations maîtrisées.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-7 flex flex-col sm:flex-row gap-3"
            >
              <MagneticButton
                as="a"
                href="https://calendly.com/yannis-bezriche/impartial-games"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-prisme group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium text-[15px]"
              >
                Planifier un appel
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton
                as={Link}
                to="/#offres"
                onClick={(e: React.MouseEvent) => {
                  const el = document.getElementById("offres");
                  if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth" }); }
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#0E0B14] text-[#0E0B14] font-medium text-[15px] hover:bg-[#0E0B14] hover:text-[#FBFAF7] transition-colors"
              >
                Découvrir nos offres
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
                  transition={{ delay: 1.05 + i * 0.06 }}
                  className="prisme-pill px-4 py-2 rounded-full text-[12px] font-medium tracking-wide"
                >
                  {b}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Colonne droite — espace réservé */}
          <div className="hidden lg:block" />
        </div>
      </div>

    </section>
  );
}
