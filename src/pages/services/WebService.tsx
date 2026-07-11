import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Check, Globe, Zap, Search, ShoppingCart,
  Layers, Gauge, MousePointer2, Code2,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { MagneticButton, RevealText } from "@/components/wow";
import { useLang } from "@/contexts/LanguageContext";

/* ─── Données ─────────────────────────────────────────────── */

const stats = [
  { value: "12+", label: "Projets livrés", labelEn: "Projects delivered" },
  { value: "100%", label: "Dans les délais", labelEn: "On time" },
  { value: "A+", label: "Performance", labelEn: "Performance" },
  { value: "5★", label: "Satisfaction client", labelEn: "Client satisfaction" },
];

const features = [
  {
    icon: Layers,
    title: "Design éditorial UI/UX",
    titleEn: "Editorial UI/UX design",
    description: "Chaque interface est pensée pour convertir et marquer les esprits. Typographie soignée, hiérarchie visuelle rigoureuse, micro-interactions intentionnelles.",
    descriptionEn: "Every interface is designed to convert and leave a lasting impression. Refined typography, rigorous visual hierarchy, intentional micro-interactions.",
    large: true,
    tags: ["Figma", "Design System", "Motion"],
    tagsEn: ["Figma", "Design System", "Motion"],
  },
  {
    icon: Gauge,
    title: "Performance & Vitesse",
    titleEn: "Performance & Speed",
    description: "Votre site charge vite et reste fluide sur tous les écrans.",
    descriptionEn: "Your site loads fast and stays smooth on every screen.",
    tags: ["Vite", "Next.js", "Optimisation"],
    tagsEn: ["Vite", "Next.js", "Optimization"],
  },
  {
    icon: Search,
    title: "Référencement naturel",
    titleEn: "Search engine optimization",
    description: "Structuré pour être trouvé sur Google. Contenu bien organisé et pages correctement indexées.",
    descriptionEn: "Structured to be found on Google. Well-organized content and properly indexed pages.",
    tags: ["Schema.org", "OpenGraph", "sitemap"],
    tagsEn: ["Schema.org", "OpenGraph", "sitemap"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Paiements",
    titleEn: "E-commerce & Payments",
    description: "Boutiques performantes avec tunnels de vente optimisés et intégrations Stripe, PayPal ou sur-mesure.",
    descriptionEn: "High-performing stores with optimized sales funnels and Stripe, PayPal or custom integrations.",
    tags: ["Stripe", "Tunnel de vente"],
    tagsEn: ["Stripe", "Sales funnel"],
  },
  {
    icon: MousePointer2,
    title: "Animations & Motion",
    titleEn: "Animations & Motion",
    description: "Animations fluides qui valorisent votre marque sans ralentir votre site.",
    descriptionEn: "Smooth animations that elevate your brand without slowing your site down.",
    tags: ["Framer Motion", "GSAP"],
    tagsEn: ["Framer Motion", "GSAP"],
  },
  {
    icon: Code2,
    title: "Stack moderne & maintenable",
    titleEn: "Modern, maintainable stack",
    description: "React, Next.js, TypeScript, Tailwind. Un code propre, documenté, que vous pouvez reprendre et faire évoluer.",
    descriptionEn: "React, Next.js, TypeScript, Tailwind. Clean, documented code you can take over and build on.",
    tags: ["React", "TypeScript", "Tailwind"],
    tagsEn: ["React", "TypeScript", "Tailwind"],
  },
];

const stack = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Vite", "Vercel", "Supabase", "Stripe", "Figma", "SEO technique", "shadcn/ui",
];

const stackEn = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Vite", "Vercel", "Supabase", "Stripe", "Figma", "Technical SEO", "shadcn/ui",
];

const offers = [
  {
    tier: "LAUNCH",
    title: "Site Présence",
    titleEn: "Presence Site",
    tagline: "Être visible, simplement.",
    taglineEn: "Be visible, simply.",
    price: "Sur demande",
    priceEn: "On request",
    features: [
      "Site vitrine 1 à 5 pages",
      "Design professionnel Prisme DA",
      "Responsive mobile-first",
      "Référencement de base",
      "Formulaire de contact",
    ],
    featuresEn: [
      "Showcase site, 1 to 5 pages",
      "Professional design, Prisme art direction",
      "Mobile-first responsive",
      "Basic SEO",
      "Contact form",
    ],
    upsell: "Hébergement & maintenance 59€/mois",
    upsellEn: "Hosting & maintenance €59/month",
    subject: "Site Web - Offre LAUNCH (Site Présence)",
    subjectEn: "Website - LAUNCH Plan (Presence Site)",
    recommended: false,
  },
  {
    tier: "PRO",
    title: "Site Business",
    titleEn: "Business Site",
    tagline: "Générer des leads et des ventes.",
    taglineEn: "Generate leads and sales.",
    price: "Sur demande",
    priceEn: "On request",
    features: [
      "Site complet ou boutique en ligne",
      "Système de paiement intégré",
      "Tunnel de vente optimisé",
      "Analytics avancés",
      "Référencement approfondi",
      "Formation utilisateur",
    ],
    featuresEn: [
      "Full website or online store",
      "Integrated payment system",
      "Optimized sales funnel",
      "Advanced analytics",
      "In-depth SEO",
      "User training",
    ],
    upsell: "Hébergement avancé + support 99€/mois",
    upsellEn: "Advanced hosting + support €99/month",
    subject: "Site Web - Offre PRO (Site Business)",
    subjectEn: "Website - PRO Plan (Business Site)",
    recommended: true,
  },
  {
    tier: "PREMIUM",
    title: "Site Sur-Mesure",
    titleEn: "Custom Site",
    tagline: "Pour les marques qui veulent tout.",
    taglineEn: "For brands that want it all.",
    price: "Sur devis",
    priceEn: "Custom quote",
    features: [
      "Design exclusif sur-mesure",
      "Fonctionnalités avancées",
      "Intégrations personnalisées",
      "Performance A+ garantie",
      "Accompagnement stratégique",
      "Support prioritaire",
    ],
    featuresEn: [
      "Exclusive custom design",
      "Advanced features",
      "Custom integrations",
      "Guaranteed A+ performance",
      "Strategic guidance",
      "Priority support",
    ],
    upsell: "Maintenance sur mesure dès 149€/mois",
    upsellEn: "Custom maintenance from €149/month",
    subject: "Site Web - Offre PREMIUM (Sur-Mesure)",
    subjectEn: "Website - PREMIUM Plan (Custom Site)",
    recommended: false,
  },
];

/* ─── Variants ─────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ─── Page ──────────────────────────────────────────────────── */

const WebService = () => {
  const { t, lp } = useLang();
  return (
    <Layout>
      <SEO
        title="Création de Sites Web Premium"
        description="Design éditorial, performance A+ et animations maîtrisées. Vitrine, e-commerce ou sur-mesure. Réponse sous 48h."
        titleEn="Premium Website Design & Development"
        descriptionEn="Editorial design, A+ performance and refined motion. Showcase sites, e-commerce or fully custom builds. Reply within 48h."
        canonical="/services/web"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Création de Sites Web Premium",
          "provider": { "@type": "Organization", "name": "IMPARTIAL Studio", "url": "https://impartialgames.com" },
          "serviceType": "Web Design & Development",
          "areaServed": "FR"
        }}
      />

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
        {/* Halos */}
        <span className="prisme-halo-violet" style={{ top: "-10%", right: "-6%" }} />
        <span className="prisme-halo-rose"   style={{ bottom: "-8%", left: "10%" }} />
        <span className="prisme-halo-peach"  style={{ top: "30%", right: "32%" }} />

        <div className="w-full px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label justify-center mb-6"
            >
              {t("Sites Web & Vitrines", "Websites & Showcase Sites")}
            </motion.div>

            <h1 className="font-serif text-[32px] sm:text-[48px] lg:text-[66px] xl:text-[80px] leading-[0.97] tracking-[-0.03em] text-white">
              <RevealText by="word" stagger={0.06}>{t("Architectures", "Web")}</RevealText>
              <span className="block">
                <RevealText by="word" stagger={0.06} delay={0.12}>{t("web qui", "architectures that")}</RevealText>
              </span>
              <span className="block">
                <span className="prisme-italic-grad prisme-shimmer">{t("convertissent.", "convert.")}</span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-6 text-[17px] md:text-[19px] text-white/60 leading-[1.65] max-w-xl mx-auto"
            >
              {t(
                "De la vitrine épurée au e-commerce complet, design éditorial, performance A+ et motion intentionnel pour des sites qui marquent et qui vendent.",
                "From a refined showcase site to full e-commerce: editorial design, A+ performance and intentional motion for websites that leave a mark and sell."
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            >
              <MagneticButton
                as="a"
                href="https://calendly.com/yannis-bezriche/impartial-games"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-prisme group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium text-[15px]"
              >
                {t("Démarrer un projet", "Start a project")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton
                as="button"
                onClick={() => document.getElementById("offres-web")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/80 font-medium text-[15px] hover:border-white/50 hover:bg-white/[0.06] hover:text-white transition-colors"
              >
                {t("Voir les offres", "View our plans")}
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-7 flex flex-wrap gap-2 justify-center"
            >
              {[t("Design UI/UX", "UI/UX Design"), "Next.js & React", t("Référencement optimisé", "Optimized SEO"), "E-commerce"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.05 + i * 0.06 }}
                  className="prisme-pill px-4 py-2 rounded-full text-[12px] font-medium tracking-wide"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Fondu bas */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-[5]"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }}
        />
      </section>

      {/* ══════════════════════════════════════════
          2. STATS
      ══════════════════════════════════════════ */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                variants={fadeUp}
                className="text-center p-6 rounded-[20px] bg-white/[0.05] backdrop-blur-xl border border-white/10"
              >
                <div className="font-serif text-[36px] md:text-[44px] leading-none tracking-[-0.03em] prisme-italic-grad mb-1">
                  {s.value}
                </div>
                <div className="text-[13px] text-white/60 font-medium">{t(s.label, s.labelEn)}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. FEATURES — CE QU'ON CRÉE
      ══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <span className="prisme-halo-peach" style={{ top: "0%", right: "-8%" }} />
        <span className="prisme-halo-violet" style={{ bottom: "0%", left: "-8%" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="section-label justify-center mb-6">{t("Expertises", "Expertise")}</div>
            <h2 className="font-serif text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-white mb-5">
              {t("Ce qu'on", "What we")}{" "}
              <span className="prisme-italic-grad">{t("maîtrise.", "master.")}</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              {t(
                "Six piliers qui font la différence entre un site qui existe et un site qui performe.",
                "Six pillars that make the difference between a site that exists and a site that performs."
              )}
            </p>
          </div>

          {/* Bento grid asymétrique */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={f.large ? "lg:col-span-2" : ""}
                >
                  <div className="group h-full p-8 rounded-[28px] bg-white/[0.05] backdrop-blur-xl border border-white/10 hover:border-[rgba(124,58,237,0.28)] hover:shadow-[0_24px_60px_-20px_rgba(124,58,237,0.35)] hover:-translate-y-1 transition-all duration-500">
                    {/* Icône */}
                    <div className="w-11 h-11 rounded-2xl bg-[#7C3AED]/12 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[rgba(124,58,237,0.10)] transition-colors duration-300">
                      <Icon className="h-5 w-5 text-[#A78BFA]" strokeWidth={1.5} />
                    </div>

                    <h3 className="font-serif text-[20px] text-white mb-3 leading-snug">{t(f.title, f.titleEn)}</h3>
                    <p className="text-[14px] text-white/60 leading-relaxed mb-5">{t(f.description, f.descriptionEn)}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {f.tags.map((tag, ti) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide bg-[#7C3AED]/12 text-[#A78BFA] border border-[rgba(124,58,237,0.15)]"
                        >
                          {t(tag, f.tagsEn[ti])}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. STACK TECHNIQUE
      ══════════════════════════════════════════ */}
      <section className="py-16 border-y border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="section-label justify-center mb-4">{t("Stack technique", "Tech stack")}</div>
            <p className="text-white/60 text-sm">{t("Les outils qu'on maîtrise de l'architecture au déploiement.", "The tools we master, from architecture to deployment.")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto"
          >
            {stack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="px-4 py-2 rounded-full text-[13px] font-medium bg-white/[0.05] backdrop-blur-xl border border-white/10 text-white hover:border-[rgba(124,58,237,0.35)] hover:text-[#A78BFA] transition-colors duration-200"
              >
                {t(tech, stackEn[i])}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. PRICING
      ══════════════════════════════════════════ */}
      <section id="offres-web" className="relative py-24 md:py-32 overflow-hidden">
        <span className="prisme-halo-violet" style={{ top: "-5%", left: "-8%" }} />
        <span className="prisme-halo-rose"   style={{ bottom: "-5%", right: "-8%" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="section-label justify-center mb-6">{t("Nos offres", "Our plans")}</div>
            <h2 className="font-serif text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-white mb-5">
              {t("Choisissez votre", "Choose your")}{" "}
              <span className="prisme-italic-grad">{t("formule web.", "web plan.")}</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              {t("Trois niveaux d'engagement, un seul niveau d'exigence.", "Three levels of commitment, one standard of excellence.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {offers.map((offer, i) => (
              <motion.div
                key={offer.tier}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {offer.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wider text-white uppercase"
                      style={{ background: "var(--prisme-gradient)" }}>
                      {t("Recommandé", "Recommended")}
                    </span>
                  </div>
                )}

                <div
                  className={`relative h-full flex flex-col p-8 rounded-[28px] transition-all duration-500 ${
                    offer.recommended
                      ? "bg-[#1C0E42] text-white shadow-[0_24px_64px_rgba(124,58,237,0.30)]"
                      : "bg-white/[0.05] backdrop-blur-xl border border-white/10 hover:border-[rgba(124,58,237,0.28)] hover:shadow-[0_24px_60px_-20px_rgba(124,58,237,0.35)] hover:-translate-y-1"
                  }`}
                >
                  {/* Gradient border sur la carte recommandée */}
                  {offer.recommended && (
                    <div
                      className="absolute inset-0 rounded-[28px] pointer-events-none"
                      style={{
                        padding: "1.5px",
                        background: "var(--prisme-gradient)",
                        WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                        opacity: 0.6,
                      }}
                    />
                  )}

                  <div className="relative">
                    {/* Tier badge */}
                    <div className="mb-6">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.18em] uppercase ${
                          offer.recommended
                            ? "bg-white/10 text-[#A78BFA]"
                            : "bg-[#7C3AED]/12 text-[#A78BFA]"
                        }`}
                      >
                        {offer.tier}
                      </span>
                    </div>

                    <h3 className={`font-serif text-[22px] mb-1 leading-snug ${offer.recommended ? "text-white" : "text-white"}`}>
                      {t(offer.title, offer.titleEn)}
                    </h3>
                    <p className={`text-[14px] mb-6 ${offer.recommended ? "text-[#B8A8D8]" : "text-white/60"}`}>
                      {t(offer.tagline, offer.taglineEn)}
                    </p>

                    <div className={`font-serif text-[32px] tracking-[-0.02em] mb-8 ${offer.recommended ? "text-white" : "prisme-italic-grad"}`}>
                      {t(offer.price, offer.priceEn)}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {offer.features.map((feat, fi) => (
                        <li key={feat} className="flex items-start gap-3">
                          <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                            offer.recommended ? "bg-white/10" : "bg-[#7C3AED]/12"
                          }`}>
                            <Check className={`h-3 w-3 ${offer.recommended ? "text-[#A78BFA]" : "text-[#A78BFA]"}`} strokeWidth={2.5} />
                          </div>
                          <span className={`text-[14px] leading-relaxed ${offer.recommended ? "text-[#D4C8F0]" : "text-white/60"}`}>
                            {t(feat, offer.featuresEn[fi])}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Upsell */}
                    <div className={`mb-6 px-4 py-3 rounded-2xl text-[13px] ${
                      offer.recommended
                        ? "bg-white/8 text-[#B8A8D8] border border-white/10"
                        : "bg-[#7C3AED]/12 text-white/60 border border-[rgba(124,58,237,0.12)]"
                    }`}>
                      <span className={`font-semibold ${offer.recommended ? "text-[#A78BFA]" : "text-[#A78BFA]"}`}>{t("+ Option : ", "+ Add-on: ")}</span>
                      {t(offer.upsell, offer.upsellEn)}
                    </div>

                    {/* CTA */}
                    <Link to={lp(`/contact?subject=${encodeURIComponent(t(offer.subject, offer.subjectEn))}`)}>
                      <button
                        className={`w-full py-4 rounded-full font-medium text-[15px] inline-flex items-center justify-center gap-2 transition-all duration-300 ${
                          offer.recommended
                            ? "btn-prisme text-white"
                            : "border border-white/20 text-white hover:border-white/50 hover:bg-white/[0.06]"
                        }`}
                      >
                        {t("Configurer ce pack", "Configure this plan")}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. CTA INLINE
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
              {/* Gradients intérieurs */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 70% 50% at 20% 0%, rgba(124,58,237,0.30) 0%, transparent 70%)" }} />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 40% at 85% 110%, rgba(240,175,200,0.18) 0%, transparent 70%)" }} />
              {/* Bordure gradient */}
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
                  {t("Lançons votre projet", "Let's launch your project")}
                </div>

                <h2 className="font-serif text-[28px] md:text-[46px] leading-[1.08] tracking-[-0.02em] text-white mb-5">
                  {t("Un site qui vous ressemble", "A website that feels like you")}{" "}
                  <span className="prisme-italic-grad">{t("et qui performe.", "and performs.")}</span>
                </h2>

                <p className="text-[#B8A8D8] text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                  {t(
                    "Réponse sous 24–48h avec une proposition claire, un délai et un tarif, sans engagement.",
                    "A reply within 24–48h with a clear proposal, timeline and price. No commitment."
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
                    <Globe className="h-4 w-4" />
                    {t("Écrire un message", "Send a message")}
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

export default WebService;
