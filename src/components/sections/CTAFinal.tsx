import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Sparkles, MagneticButton } from "@/components/wow";

export function CTAFinal() {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#FBFAF7] overflow-hidden">

      {/* Halos extérieurs */}
      <span className="prisme-halo-violet" style={{ bottom: "-10%", left: "-8%" }} />
      <span className="prisme-halo-peach"  style={{ top: "-10%", right: "-8%" }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Carte principale */}
          <div className="relative bg-[#1C0E42] rounded-[28px] sm:rounded-[36px] p-6 sm:p-9 md:p-14 lg:p-20 text-center overflow-hidden">

            {/* Sparkles avec couleurs prisme */}
            <Sparkles count={22} color="#A78BFA" />
            <Sparkles count={10} color="#F0AFC8" />

            {/* Gradient top-left violet */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 20% 0%, rgba(124,58,237,0.30) 0%, transparent 70%)",
              }}
            />
            {/* Gradient bottom-right rose */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 40% at 85% 110%, rgba(240,175,200,0.18) 0%, transparent 70%)",
              }}
            />

            {/* Bordure gradient prisme */}
            <div
              className="absolute inset-0 rounded-[36px] pointer-events-none"
              style={{
                padding: "1.5px",
                background: "var(--prisme-gradient)",
                WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                opacity: 0.5,
              }}
            />

            {/* Contenu */}
            <div className="relative">
              <div className="section-label justify-center mb-8" style={{ color: "#A78BFA", borderColor: "rgba(124,58,237,0.25)", background: "rgba(124,58,237,0.12)" }}>
                Travaillons ensemble
              </div>

              <h2 className="font-serif text-[26px] sm:text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-white mb-6">
                Prêt à rendre votre{" "}
                <span className="prisme-italic-grad">produit inoubliable ?</span>
              </h2>

              <p className="text-[#B8A8D8] text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto">
                On vous répond sous 24–48h avec une proposition claire et sans engagement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <MagneticButton
                  as="a"
                  href="https://calendly.com/yannis-bezriche/impartial-games"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-prisme inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium text-[15px]"
                >
                  Planifier un appel
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>

                <MagneticButton
                  as={Link}
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/80 font-medium text-[15px] hover:border-white/50 hover:text-white transition-colors duration-200"
                >
                  <Mail className="h-4 w-4" />
                  Écrire un message
                </MagneticButton>
              </div>

              <div
                className="mt-10 pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <a
                  href="mailto:studio@impartialgames.com"
                  className="text-[13px] text-[#7B6AAD] hover:text-[#A78BFA] transition-colors duration-200"
                >
                  studio@impartialgames.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
