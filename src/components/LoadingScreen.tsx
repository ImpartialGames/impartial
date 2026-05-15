import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onComplete?.();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[500] flex items-center justify-center overflow-hidden"
      style={{ background: "#1C0E42", minHeight: "100dvh" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >

      {/* ── Orbe violet — haut droite ── */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 700, height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.40) 0%, rgba(124,58,237,0.10) 50%, transparent 70%)",
          filter: "blur(90px)",
          top: "-20%", right: "-12%",
        }}
      />

      {/* ── Orbe lavande — centre gauche ── */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167,139,250,0.28) 0%, transparent 65%)",
          filter: "blur(70px)",
          top: "30%", left: "-8%",
        }}
      />

      {/* ── Orbe pêche/rose — bas gauche ── */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 420, height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,175,200,0.22) 0%, transparent 65%)",
          filter: "blur(60px)",
          bottom: "-8%", left: "15%",
        }}
      />

      {/* ── Contenu central ── */}
      <div className="relative z-10 flex flex-col items-center select-none">

        {/* Wordmark — clip mask reveal depuis le bas */}
        <div className="overflow-hidden">
          <motion.h1
            className="font-syne text-[48px] sm:text-[64px] md:text-[80px] font-bold tracking-tight text-white leading-none"
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            IMPARTIAL
          </motion.h1>
        </div>

        {/* Sous-titre */}
        <motion.p
          className="mt-3 text-[11px] font-medium uppercase tracking-[0.45em]"
          style={{ color: "#A78BFA" }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          Studio
        </motion.p>

        {/* Barre de chargement */}
        <motion.div
          className="mt-14 relative w-[160px] h-[1.5px] rounded-full overflow-hidden"
          style={{ background: "rgba(167,139,250,0.18)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.1 }}
        >
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background: "var(--prisme-gradient)",
              transformOrigin: "0%",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.85, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

      </div>

      {/* ── Wipe de sortie — ivoire monte depuis le bas ── */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "#FBFAF7", transformOrigin: "bottom" }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 1.75, ease: [0.76, 0, 0.24, 1] }}
      />

    </motion.div>
  );
}
