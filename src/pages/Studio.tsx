import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Target, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton, RevealText } from "@/components/wow";
import { useLang } from "@/contexts/LanguageContext";

/* ─── Données ─────────────────────────────────────────────── */

const values = [
  {
    icon: Zap,
    title: "Innovation",
    titleEn: "Innovation",
    description: "Nous repoussons constamment les limites du possible pour offrir des expériences inédites.",
    descriptionEn: "We constantly push the limits of what's possible to deliver one-of-a-kind experiences.",
  },
  {
    icon: Target,
    title: "Précision",
    titleEn: "Precision",
    description: "Chaque pixel, chaque ligne de code est pensée pour la perfection et l'impact.",
    descriptionEn: "Every pixel, every line of code is crafted for perfection and impact.",
  },
  {
    icon: Users,
    title: "Partenariat",
    titleEn: "Partnership",
    description: "Votre partenaire de croissance digital, pas un simple prestataire.",
    descriptionEn: "Your digital growth partner, not just another vendor.",
  },
  {
    icon: Award,
    title: "Excellence",
    titleEn: "Excellence",
    description: "Notre standard est l'excellence, notre objectif dépasser vos attentes.",
    descriptionEn: "Our standard is excellence, our goal to exceed your expectations.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Naissance d'IMPARTIAL",
    titleEn: "The birth of IMPARTIAL",
    description: "Création du studio avec une vision claire : révolutionner le digital pour les marques ambitieuses.",
    descriptionEn: "The studio is founded with a clear vision: revolutionize digital for ambitious brands.",
  },
  {
    year: "2025",
    title: "Innovation 360°",
    titleEn: "360° innovation",
    description: "Lancement de notre offre écosystème complet pour les startups et entreprises en croissance.",
    descriptionEn: "Launch of our full-ecosystem offer for startups and growing companies.",
  },
  {
    year: "2026",
    title: "Expansion",
    titleEn: "Expansion",
    description: "Ouverture vers de nouveaux marchés à l'échelle mondiale avec une équipe dédiée.",
    descriptionEn: "Opening up to new markets worldwide with a dedicated team.",
  },
];

/* ─── Page ──────────────────────────────────────────────────── */

const Studio = () => {
  const { t, lp } = useLang();

  return (
    <Layout>
      <SEO
        title="Le Studio"
        titleEn="The Studio"
        description="IMPARTIAL est un studio digital créatif basé aux États-Unis. Design raffiné, code solide et livraisons dans les délais."
        descriptionEn="IMPARTIAL is a creative digital studio based in the United States. Refined design, solid code and on-time delivery."
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
      <section className="relative min-h-[80svh] flex items-center overflow-hidden pt-24 pb-12">
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
              {t("Le Studio", "The Studio")}
            </motion.div>

            <h1 className="font-serif text-[34px] sm:text-[50px] md:text-[62px] lg:text-[80px] xl:text-[96px] leading-[0.95] tracking-[-0.03em] text-white">
              <RevealText by="word" stagger={0.06}>Studio</RevealText>
              <span className="block">
                <span className="prisme-italic-grad prisme-shimmer">IMPARTIAL.</span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-[17px] md:text-[20px] text-white/60 leading-[1.7] max-w-2xl mx-auto"
            >
              {t(
                "Un collectif de créatifs et de technologues passionnés, unis par une vision : transformer vos idées en expériences digitales extraordinaires.",
                "A collective of passionate creatives and technologists, united by one vision: turning your ideas into extraordinary digital experiences.",
              )}
            </motion.p>
          </div>
        </div>

        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-[5]"
          style={{ background: "linear-gradient(to bottom, transparent, #0E0B14)" }}
        />
      </section>

      {/* ══════════════════════════════════════════
          2. VISION
      ══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
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
                {t("Notre vision", "Our vision")}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-white mb-8"
              >
                {t("Créer l'", "Create the")}{" "}
                <span className="prisme-italic-grad">{t("extraordinaire.", "extraordinary.")}</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-white/60 text-lg mb-6 leading-relaxed"
              >
                {t(
                  "Chez IMPARTIAL, nous croyons que le digital ne doit pas être un compromis. Nous fusionnons l'esthétique premium avec une approche technique irréprochable pour créer des expériences qui marquent les esprits.",
                  "At IMPARTIAL, we believe digital should never be a compromise. We fuse premium aesthetics with flawless engineering to create experiences that leave a lasting mark.",
                )}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-white/60 text-lg leading-relaxed"
              >
                {t("Notre nom ? ", "Our name? ")}<span className="text-white font-semibold">IMPARTIAL</span>{t(
                  ". Parce que nous abordons chaque projet sans préjugé, avec un regard neuf et une objectivité totale pour trouver LA meilleure solution pour vous.",
                  ". Because we approach every project without bias, with fresh eyes and total objectivity to find THE best solution for you.",
                )}
              </motion.p>
            </div>

            {/* Visuel */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-square rounded-[32px] bg-white/[0.05] backdrop-blur-xl border border-white/10 overflow-hidden flex items-center justify-center">
                {/* Halo intérieur */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 70% 70% at 50% 40%, rgba(124,58,237,0.08) 0%, transparent 70%)" }} />
                <div className="text-center relative z-10">
                  <div className="font-serif text-[80px] md:text-[96px] leading-none tracking-[-0.04em] prisme-italic-grad mb-4">
                    100%
                  </div>
                  <p className="text-[16px] text-white/60 font-medium">{t("Engagement client", "Client commitment")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. TIMELINE
      ══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
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
              <div className="section-label justify-center mb-6">{t("Notre parcours", "Our journey")}</div>
              <h2 className="font-serif text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-white">
                {t("Les étapes", "The key")}{" "}
                <span className="prisme-italic-grad">{t("clés.", "milestones.")}</span>
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
                  <div className="flex gap-4 md:gap-8 items-start p-5 md:p-8 rounded-[24px] bg-white/[0.05] backdrop-blur-xl border border-white/10 hover:border-[rgba(124,58,237,0.28)] hover:shadow-[0_8px_32px_-10px_rgba(124,58,237,0.35)] hover:-translate-y-0.5 transition-all duration-500">
                    <div className="font-serif text-[36px] md:text-[44px] leading-none tracking-[-0.03em] prisme-italic-grad shrink-0">
                      {item.year}
                    </div>
                    <div className="pt-1">
                      <h3 className="font-serif text-[20px] text-white mb-2 leading-snug">{t(item.title, item.titleEn)}</h3>
                      <p className="text-[14px] text-white/60 leading-relaxed">{t(item.description, item.descriptionEn)}</p>
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
      <section className="relative py-24 md:py-32 overflow-hidden">
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
            <div className="section-label justify-center mb-6">{t("Nos valeurs", "Our values")}</div>
            <h2 className="font-serif text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-white">
              {t("Ce qui nous", "What")}{" "}
              <span className="prisme-italic-grad">{t("guide.", "guides us.")}</span>
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
                  <div className="group h-full p-8 rounded-[24px] bg-white/[0.05] backdrop-blur-xl border border-white/10 hover:border-[rgba(124,58,237,0.28)] hover:shadow-[0_8px_32px_-10px_rgba(124,58,237,0.35)] hover:-translate-y-1 transition-all duration-500 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/12 border border-white/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-[rgba(124,58,237,0.22)] transition-colors duration-300">
                      <Icon className="h-5 w-5 text-[#7C3AED]" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-[18px] text-white mb-3 leading-snug">{t(value.title, value.titleEn)}</h3>
                    <p className="text-[13px] text-white/60 leading-relaxed">{t(value.description, value.descriptionEn)}</p>
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
      <section className="relative py-20 md:py-28 overflow-hidden">
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
                  {t("Rejoignez l'aventure", "Join the adventure")}
                </div>

                <h2 className="font-serif text-[28px] md:text-[46px] leading-[1.08] tracking-[-0.02em] text-white mb-5">
                  {t("Prêt à créer quelque chose", "Ready to create something")}{" "}
                  <span className="prisme-italic-grad">{t("d'exceptionnel ?", "exceptional?")}</span>
                </h2>

                <p className="text-[#B8A8D8] text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                  {t(
                    "Discutons de votre projet et voyons ensemble comment le rendre inoubliable.",
                    "Let's talk about your project and see together how to make it unforgettable.",
                  )}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton
                    as="a"
                    href="https://calendly.com/yannis-bezriche/impartial-games"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-prisme inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium text-[15px]"
                  >
                    {t("Planifier un appel", "Book a call")}
                    <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                  <MagneticButton
                    as={Link}
                    to={lp("/contact")}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/80 font-medium text-[15px] hover:border-white/50 hover:text-white transition-colors duration-200"
                  >
                    {t("Nous contacter", "Contact us")}
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
