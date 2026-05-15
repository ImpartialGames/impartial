import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Target, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton, RevealText } from "@/components/wow";

/* ─── Données ─────────────────────────────────────────────── */

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description: "Nous repoussons constamment les limites du possible pour offrir des expériences inédites.",
  },
  {
    icon: Target,
    title: "Précision",
    description: "Chaque pixel, chaque ligne de code est pensée pour la perfection et l'impact.",
  },
  {
    icon: Users,
    title: "Partenariat",
    description: "Votre partenaire de croissance digital, pas un simple prestataire.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Notre standard est l'excellence, notre objectif dépasser vos attentes.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Naissance d'IMPARTIAL",
    description: "Création du studio avec une vision claire : révolutionner le digital pour les marques ambitieuses.",
  },
  {
    year: "2025",
    title: "Innovation 360°",
    description: "Lancement de notre offre écosystème complet pour les startups et entreprises en croissance.",
  },
  {
    year: "2026",
    title: "Expansion",
    description: "Ouverture vers de nouveaux marchés à l'échelle mondiale avec une équipe dédiée.",
  },
];

/* ─── Page ──────────────────────────────────────────────────── */

const Studio = () => {
  return (
    <Layout>
      <SEO
        title="Le Studio"
        description="IMPARTIAL est un studio digital créatif basé aux États-Unis. Design raffiné, code solide et livraisons dans les délais."
        canonical="/studio"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "IMPARTIAL Studio",
          "url": "https://impartialgames.com",
          "logo": "https://impartialgames.com/og-image.jpg",
          "email": "studio@impartialgames.com",
          "address": { "@type": "PostalAddress", "addressCountry": "US" },
          "sameAs": []
        }}
      />

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[80svh] flex items-center overflow-hidden pt-24 pb-12 bg-[#FBFAF7]">
        <span className="prisme-halo-violet" style={{ top: "-10%", right: "-6%" }} />
        <span className="prisme-halo-rose"   style={{ bottom: "-8%", left: "8%" }} />
        <span className="prisme-halo-peach"  style={{ top: "40%", left: "50%" }} />

        <div className="w-full px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label justify-center mb-6"
            >
              Le Studio
            </motion.div>

            <h1 className="font-serif text-[34px] sm:text-[50px] md:text-[62px] lg:text-[80px] xl:text-[96px] leading-[0.95] tracking-[-0.03em] text-[#0E0B14]">
              <RevealText by="word" stagger={0.06}>Studio</RevealText>
              <span className="block">
                <span className="prisme-italic-grad prisme-shimmer">IMPARTIAL.</span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-[17px] md:text-[20px] text-[#6F6580] leading-[1.7] max-w-2xl mx-auto"
            >
              Un collectif de créatifs et de technologues passionnés, unis par une vision : transformer vos idées en expériences digitales extraordinaires.
            </motion.p>
          </div>
        </div>

        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-[5]"
          style={{ background: "linear-gradient(to bottom, transparent, #FBFAF7)" }}
        />
      </section>

      {/* ══════════════════════════════════════════
          2. VISION
      ══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-[#FBFAF7] overflow-hidden">
        <span className="prisme-halo-peach"  style={{ top: "0%", right: "-8%" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

            {/* Texte */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="section-label mb-6"
              >
                Notre vision
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#0E0B14] mb-8"
              >
                Créer l&apos;{" "}
                <span className="prisme-italic-grad">extraordinaire.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#6F6580] text-lg mb-6 leading-relaxed"
              >
                Chez IMPARTIAL, nous croyons que le digital ne doit pas être un compromis. Nous fusionnons l&apos;esthétique premium avec une approche technique irréprochable pour créer des expériences qui marquent les esprits.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#6F6580] text-lg leading-relaxed"
              >
                Notre nom ? <span className="text-[#0E0B14] font-semibold">IMPARTIAL</span>. Parce que nous abordons chaque projet sans préjugé, avec un regard neuf et une objectivité totale pour trouver LA meilleure solution pour vous.
              </motion.p>
            </div>

            {/* Visuel */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-square rounded-[32px] bg-white border border-[#EEEAF4] overflow-hidden flex items-center justify-center">
                {/* Halo intérieur */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 70% 70% at 50% 40%, rgba(124,58,237,0.08) 0%, transparent 70%)" }} />
                <div className="text-center relative z-10">
                  <div className="font-serif text-[80px] md:text-[96px] leading-none tracking-[-0.04em] prisme-italic-grad mb-4">
                    100%
                  </div>
                  <p className="text-[16px] text-[#6F6580] font-medium">Engagement client</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. TIMELINE
      ══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-[#FBFAF7] overflow-hidden">
        <span className="prisme-halo-violet" style={{ bottom: "0%", left: "-8%" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-16"
            >
              <div className="section-label justify-center mb-6">Notre parcours</div>
              <h2 className="font-serif text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-[#0E0B14]">
                Les étapes{" "}
                <span className="prisme-italic-grad">clés.</span>
              </h2>
            </motion.div>

            <div className="space-y-5">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex gap-4 md:gap-8 items-start p-5 md:p-8 rounded-[24px] bg-white border border-[#EEEAF4] hover:border-[rgba(124,58,237,0.28)] hover:shadow-[0_8px_32px_rgba(124,58,237,0.08)] hover:-translate-y-0.5 transition-all duration-500">
                    <div className="font-serif text-[36px] md:text-[44px] leading-none tracking-[-0.03em] prisme-italic-grad shrink-0">
                      {item.year}
                    </div>
                    <div className="pt-1">
                      <h3 className="font-serif text-[20px] text-[#0E0B14] mb-2 leading-snug">{item.title}</h3>
                      <p className="text-[14px] text-[#6F6580] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. VALEURS
      ══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-[#FBFAF7] overflow-hidden">
        <span className="prisme-halo-peach"  style={{ top: "0%", right: "-8%" }} />
        <span className="prisme-halo-violet" style={{ bottom: "0%", left: "-8%" }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <div className="section-label justify-center mb-6">Nos valeurs</div>
            <h2 className="font-serif text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-[#0E0B14]">
              Ce qui nous{" "}
              <span className="prisme-italic-grad">guide.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="group h-full p-8 rounded-[24px] bg-white border border-[#EEEAF4] hover:border-[rgba(124,58,237,0.28)] hover:shadow-[0_8px_32px_rgba(124,58,237,0.08)] hover:-translate-y-1 transition-all duration-500 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-[#F3EEFB] border border-[#EEEAF4] flex items-center justify-center mb-6 mx-auto group-hover:bg-[rgba(124,58,237,0.10)] transition-colors duration-300">
                      <Icon className="h-5 w-5 text-[#7C3AED]" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-[18px] text-[#0E0B14] mb-3 leading-snug">{value.title}</h3>
                    <p className="text-[13px] text-[#6F6580] leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. CTA
      ══════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-[#FBFAF7] overflow-hidden">
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
            <div className="relative bg-[#1C0E42] rounded-[28px] sm:rounded-[36px] p-6 sm:p-9 md:p-14 lg:p-20 text-center overflow-hidden">
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 70% 50% at 20% 0%, rgba(124,58,237,0.30) 0%, transparent 70%)" }} />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 40% at 85% 110%, rgba(240,175,200,0.18) 0%, transparent 70%)" }} />
              <div className="absolute inset-0 rounded-[36px] pointer-events-none"
                style={{
                  padding: "1.5px",
                  background: "var(--prisme-gradient)",
                  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  opacity: 0.5,
                }}
              />

              <div className="relative">
                <div className="section-label justify-center mb-8"
                  style={{ color: "#A78BFA", borderColor: "rgba(124,58,237,0.25)", background: "rgba(124,58,237,0.12)" }}>
                  Rejoignez l&apos;aventure
                </div>

                <h2 className="font-serif text-[28px] md:text-[46px] leading-[1.08] tracking-[-0.02em] text-white mb-5">
                  Prêt à créer quelque chose{" "}
                  <span className="prisme-italic-grad">d&apos;exceptionnel ?</span>
                </h2>

                <p className="text-[#B8A8D8] text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                  Discutons de votre projet et voyons ensemble comment le rendre inoubliable.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    Nous contacter
                    <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default Studio;
