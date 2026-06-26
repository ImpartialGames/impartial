import { motion, useReducedMotion } from "framer-motion";

/**
 * Orbs ambiants pour le hero — palette violet éditoriale.
 * Fond clair uniquement. Pointer-events none, z-0.
 */
export function HeroOrbs() {
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Orb principal — top right */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.13, 0.08] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 rounded-full"
        style={{
          width: 520,
          height: 520,
          background: "radial-gradient(circle, oklch(0.48 0.165 278) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Orb secondaire — bottom left */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.10, 0.06] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-40 -left-24 rounded-full"
        style={{
          width: 420,
          height: 420,
          background: "radial-gradient(circle, oklch(0.35 0.12 278) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      {/* Orb accent — center right */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-1/2 right-1/4 -translate-y-1/2 rounded-full"
        style={{
          width: 320,
          height: 320,
          background: "radial-gradient(circle, oklch(0.72 0.10 278) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
