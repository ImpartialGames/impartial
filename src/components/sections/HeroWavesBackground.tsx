import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/**
 * Fond du hero — rubans de particules ondulants, halo violet, arcs fins,
 * grilles de points et étincelles. Inspiré du visuel de référence (2026-07-11).
 * Canvas en rAF ~30 fps, pause hors écran, statique si prefers-reduced-motion.
 */

interface Ribbon {
  baseY: number;   // position verticale relative (0-1)
  tilt: number;    // pente du ruban
  amp: number;     // amplitude de l'ondulation principale
  amp2: number;    // ondulation secondaire
  freq: number;    // fréquence horizontale
  speed: number;   // vitesse de phase
  rows: number;    // épaisseur du maillage (nombre de lignes de points)
  rgb: [number, number, number];
  alpha: number;
}

const RIBBONS: Ribbon[] = [
  { baseY: 0.66, tilt: 0.16, amp: 70, amp2: 26, freq: 1.4, speed: 0.22, rows: 15, rgb: [99, 102, 241], alpha: 0.32 },
  { baseY: 0.84, tilt: -0.1, amp: 90, amp2: 34, freq: 1.1, speed: -0.16, rows: 17, rgb: [139, 92, 246], alpha: 0.28 },
];

function drawFrame(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h);

  for (const r of RIBBONS) {
    const cx = w / 2;
    for (let row = 0; row < r.rows; row++) {
      const rowOffset = (row - r.rows / 2) * 7;
      const rowFade = 1 - Math.abs(row - r.rows / 2) / (r.rows / 2); // bords du ruban plus doux
      for (let x = -20; x <= w + 20; x += 9) {
        const phase = (x / w) * Math.PI * 2 * r.freq + t * r.speed + row * 0.22;
        const y =
          h * r.baseY +
          (x - cx) * r.tilt +
          Math.sin(phase) * r.amp * (0.6 + 0.4 * rowFade) +
          Math.sin((x / w) * Math.PI * 4.3 - t * r.speed * 1.6) * r.amp2 +
          rowOffset;
        // densité lumineuse : crêtes plus brillantes
        const glow = 0.35 + 0.65 * Math.max(0, Math.sin(phase + Math.PI / 3));
        const a = r.alpha * rowFade * glow;
        if (a < 0.02) continue;
        ctx.fillStyle = `rgba(${r.rgb[0]},${r.rgb[1]},${r.rgb[2]},${a})`;
        ctx.fillRect(x, y, 1.3, 1.3);
      }
    }
  }

  // Segment lumineux au croisement des deux rubans (comme sur le visuel)
  const hx = w * 0.74;
  const hy =
    h * RIBBONS[0].baseY +
    (hx - w / 2) * RIBBONS[0].tilt +
    Math.sin((hx / w) * Math.PI * 2 * RIBBONS[0].freq + t * RIBBONS[0].speed) * RIBBONS[0].amp;
  const grad = ctx.createRadialGradient(hx, hy, 0, hx, hy, 120);
  grad.addColorStop(0, "rgba(129,140,248,0.30)");
  grad.addColorStop(1, "rgba(129,140,248,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(hx - 120, hy - 120, 240, 240);
}

function ParticleWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let running = true;
    let last = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth: w, clientHeight: h } = canvas;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawFrame(ctx, w, h, performance.now() / 1000);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    if (!reduced) {
      const loop = (now: number) => {
        raf = requestAnimationFrame(loop);
        if (!running || now - last < 33) return; // ~30 fps
        last = now;
        drawFrame(ctx, canvas.clientWidth, canvas.clientHeight, now / 1000);
      };
      raf = requestAnimationFrame(loop);
      // pause quand le hero sort de l'écran
      const io = new IntersectionObserver(([e]) => (running = e.isIntersecting));
      io.observe(canvas);
      return () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        ro.disconnect();
      };
    }
    return () => ro.disconnect();
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden />;
}

export function HeroWavesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
      {/* Halo violet principal — haut droite, respiration lente */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 780,
          height: 780,
          top: "-8%",
          right: "-6%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.32) 0%, rgba(99,102,241,0.10) 45%, transparent 70%)",
          filter: "blur(70px)",
          willChange: "transform, opacity",
        }}
        animate={{ scale: [1, 1.07, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Arcs elliptiques fins — haut droite */}
      <svg
        className="absolute -top-[12%] right-[-14%] w-[900px] h-[700px] opacity-60"
        viewBox="0 0 900 700"
        fill="none"
      >
        <ellipse cx="560" cy="330" rx="420" ry="300" stroke="rgba(129,140,248,0.16)" strokeWidth="1" transform="rotate(-24 560 330)" />
        <ellipse cx="600" cy="300" rx="330" ry="240" stroke="rgba(129,140,248,0.10)" strokeWidth="1" transform="rotate(-24 600 300)" />
      </svg>

      {/* Rubans de particules */}
      <ParticleWaves />

      {/* Grilles de points — coins */}
      <div
        className="absolute top-[22%] right-[4%] w-[120px] h-[64px] opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(129,140,248,0.35) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          maskImage: "linear-gradient(135deg, black 30%, transparent 90%)",
          WebkitMaskImage: "linear-gradient(135deg, black 30%, transparent 90%)",
        }}
      />
      <div
        className="absolute bottom-[8%] left-[3%] w-[110px] h-[56px] opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(129,140,248,0.32) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          maskImage: "linear-gradient(315deg, black 30%, transparent 90%)",
          WebkitMaskImage: "linear-gradient(315deg, black 30%, transparent 90%)",
        }}
      />

      {/* Étincelles + points lumineux */}
      {[
        { top: "18%", left: "20%", d: 0 },
        { top: "38%", right: "8%", d: 1.4 },
        { bottom: "24%", left: "12%", d: 2.6 },
        { top: "62%", right: "28%", d: 3.4 },
      ].map((p, i) => (
        <motion.span
          key={i}
          className="absolute text-[#818CF8]"
          style={{ ...p, fontSize: 14, lineHeight: 1 }}
          animate={{ opacity: [0.15, 0.7, 0.15] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: p.d }}
        >
          +
        </motion.span>
      ))}
      <span className="absolute top-[30%] left-[14%] w-[5px] h-[5px] rounded-full bg-[#818CF8]/70 shadow-[0_0_12px_rgba(129,140,248,0.8)]" />
      <span className="absolute bottom-[30%] right-[10%] w-[4px] h-[4px] rounded-full bg-[#818CF8]/60 shadow-[0_0_10px_rgba(129,140,248,0.7)]" />

      {/* Vignette bas pour raccord avec la section suivante */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to bottom, transparent, #0A0E1A)" }}
      />
    </div>
  );
}
