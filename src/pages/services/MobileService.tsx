import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight, Check, Mail,
  Smartphone, Zap, Bell, Link2, BarChart2, Shield,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { MagneticButton, RevealText } from "@/components/wow";
import { useLang } from "@/contexts/LanguageContext";

/* ─── Données ─────────────────────────────────────────────── */

const stats = [
  { value: "12+", label: "Apps livrées", labelEn: "Apps delivered" },
  { value: "iOS & And.", label: "Cross-platform", labelEn: "Cross-platform" },
  { value: "5★", label: "App Store", labelEn: "App Store" },
  { value: "100%", label: "Dans les délais", labelEn: "On time" },
];

const features = [
  {
    icon: Smartphone,
    title: "UI mobile-first & animations fluides",
    titleEn: "Mobile-first UI & fluid animations",
    description: "Chaque écran est conçu pour l'engagement. Transitions natives, gestures intuitifs, micro-animations qui donnent vie à votre application.",
    descriptionEn: "Every screen is designed for engagement. Native transitions, intuitive gestures, micro-animations that bring your app to life.",
    large: true,
    tags: ["React Native", "Expo", "Reanimated"],
    tagsEn: ["React Native", "Expo", "Reanimated"],
  },
  {
    icon: Zap,
    title: "Fluidité native",
    titleEn: "Native fluidity",
    description: "Applications fluides sur iOS et Android. Démarrage rapide et navigation instantanée sans compromis.",
    descriptionEn: "Smooth apps on iOS and Android. Fast startup and instant navigation, without compromise.",
    tags: ["Hermes", "New Arch", "Profiling"],
    tagsEn: ["Hermes", "New Arch", "Profiling"],
  },
  {
    icon: Bell,
    title: "Notifications personnalisées",
    titleEn: "Personalized notifications",
    description: "Engagez vos utilisateurs au bon moment avec des messages personnalisés et ciblés.",
    descriptionEn: "Engage your users at the right moment with personalized, targeted messages.",
    tags: ["FCM", "APNs", "Expo Push"],
    tagsEn: ["FCM", "APNs", "Expo Push"],
  },
  {
    icon: Link2,
    title: "Intégrations API & services",
    titleEn: "API & service integrations",
    description: "Connexion à vos APIs existantes, services tiers, bases de données cloud et systèmes de paiement sur-mesure.",
    descriptionEn: "Connect to your existing APIs, third-party services, cloud databases and custom payment systems.",
    tags: ["REST", "GraphQL", "Stripe"],
    tagsEn: ["REST", "GraphQL", "Stripe"],
  },
  {
    icon: BarChart2,
    title: "Statistiques & fidélisation",
    titleEn: "Analytics & retention",
    description: "Comprenez le comportement de vos utilisateurs pour améliorer leur fidélité.",
    descriptionEn: "Understand how your users behave to keep them coming back.",
    tags: ["Mixpanel", "Firebase", "Amplitude"],
    tagsEn: ["Mixpanel", "Firebase", "Amplitude"],
  },
  {
    icon: Shield,
    title: "Sécurité & connexion",
    titleEn: "Security & authentication",
    description: "Connexion sécurisée, données chiffrées. Les standards de sécurité les plus stricts respectés.",
    descriptionEn: "Secure sign-in, encrypted data. The strictest security standards, fully respected.",
    tags: ["OAuth 2.0", "Biométrie", "Keychain"],
    tagsEn: ["OAuth 2.0", "Biometrics", "Keychain"],
  },
];

const stack = [
  "React Native", "Expo", "Flutter", "Swift", "Kotlin",
  "Firebase", "Supabase", "Stripe", "App Store", "Play Store",
  "Push Notifications", "TypeScript",
];

const offers = [
  {
    tier: "LAUNCH",
    title: "MVP App",
    titleEn: "MVP App",
    tagline: "Pour tester une idée.",
    taglineEn: "To test an idea.",
    price: "Sur demande",
    priceEn: "On request",
    features: [
      "Application iOS & Android",
      "Authentification basique",
      "3 à 5 écrans principaux",
      "Design UI moderne",
      "Publication sur les stores",
    ],
    featuresEn: [
      "iOS & Android app",
      "Basic authentication",
      "3 to 5 core screens",
      "Modern UI design",
      "Published on the stores",
    ],
    upsell: "Maintenance & updates 149€/mois",
    upsellEn: "Maintenance & updates €149/month",
    subject: "Application Mobile - Offre LAUNCH (MVP App)",
    subjectEn: "Mobile App - LAUNCH Plan (MVP App)",
    recommended: false,
  },
  {
    tier: "PRO",
    title: "App Market Ready",
    titleEn: "Market-Ready App",
    tagline: "Pour une app prête marché.",
    taglineEn: "For a market-ready app.",
    price: "Sur demande",
    priceEn: "On request",
    features: [
      "App complète iOS & Android",
      "Notifications push",
      "Fonctions temps réel",
      "Social login",
      "Analytics intégrés",
      "Tests utilisateurs",
    ],
    featuresEn: [
      "Full iOS & Android app",
      "Push notifications",
      "Real-time features",
      "Social login",
      "Built-in analytics",
      "User testing",
    ],
    upsell: "Maintenance + Monitoring 249€/mois",
    upsellEn: "Maintenance + monitoring €249/month",
    subject: "Application Mobile - Offre PRO (App Market Ready)",
    subjectEn: "Mobile App - PRO Plan (Market-Ready App)",
    recommended: true,
  },
  {
    tier: "PREMIUM",
    title: "Écosystème Mobile",
    titleEn: "Mobile Ecosystem",
    tagline: "Projet complexe / Scaleup.",
    taglineEn: "Complex projects / scale-ups.",
    price: "Sur devis",
    priceEn: "Custom quote",
    features: [
      "Architecture scalable",
      "Sécurité renforcée",
      "Intégrations avancées",
      "Backend sur-mesure",
      "Performance optimale",
      "Support dédié",
    ],
    featuresEn: [
      "Scalable architecture",
      "Hardened security",
      "Advanced integrations",
      "Custom backend",
      "Peak performance",
      "Dedicated support",
    ],
    upsell: "Infogérance complète sur devis",
    upsellEn: "Fully managed services, custom quote",
    subject: "Application Mobile - Offre PREMIUM (Écosystème Mobile)",
    subjectEn: "Mobile App - PREMIUM Plan (Mobile Ecosystem)",
    recommended: false,
  },
];

/* ─── Variants ─────────────────────────────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── Page ──────────────────────────────────────────────────── */

const MobileService = () => {
  const { t, lp } = useLang();
  return (
    <Layout>
      <SEO
        title="Applications Mobiles sur-mesure"
        description="Développement d'apps iOS et Android fluides, sécurisées et publiées sur les stores. Design natif et notifications ciblées."
        titleEn="Custom Mobile App Development"
        descriptionEn="Fast, secure iOS and Android apps, published on the stores. Native-feel design and targeted push notifications."
        canonical="/services/mobile"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Applications Mobiles sur-mesure",
          "provider": { "@type": "Organization", "name": "IMPARTIAL Studio", "url": "https://impartialgames.com" },
          "serviceType": "Mobile App Development",
          "areaServed": "FR"
        }}
      />

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
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
              {t("Applications Mobiles", "Mobile Apps")}
            </motion.div>

            <h1 className="font-serif text-[32px] sm:text-[48px] lg:text-[66px] xl:text-[80px] leading-[0.97] tracking-[-0.03em] text-white">
              <RevealText by="word" stagger={0.06}>{t("Applications mobiles", "Mobile apps")}</RevealText>
              <span className="block">
                <RevealText by="word" stagger={0.06} delay={0.12}>{t("qui engagent", "that engage")}</RevealText>
              </span>
              <span className="block">
                <span className="prisme-italic-grad prisme-shimmer">{t("et fidélisent.", "and retain.")}</span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-6 text-[17px] md:text-[19px] text-white/60 leading-[1.65] max-w-xl mx-auto"
            >
              {t(
                "Du MVP à l'app scalable, React Native, iOS et Android natif, animations fluides et expérience utilisateur mémorable pour des applications qui convertissent.",
                "From MVP to scalable app: React Native, native iOS and Android, fluid animations and a memorable user experience for apps that convert."
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
                onClick={() => document.getElementById("offres-mobile")?.scrollIntoView({ behavior: "smooth" })}
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
              {["React Native", "iOS & Android", t("Animations natives", "Native animations"), "App Store"].map((tag, i) => (
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
                <div className="font-serif text-[28px] md:text-[38px] leading-none tracking-[-0.03em] prisme-italic-grad mb-1">
                  {s.value}
                </div>
                <div className="text-[13px] text-white/60 font-medium">{t(s.label, s.labelEn)}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. FEATURES
      ══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <span className="prisme-halo-peach"  style={{ top: "0%", right: "-8%" }} />
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
                "Six piliers pour des applications mobiles qui performent, engagent et fidélisent vos utilisateurs.",
                "Six pillars for mobile apps that perform, engage and keep your users coming back."
              )}
            </p>
          </div>

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
                  <div className="group h-full p-8 rounded-[28px] bg-white/[0.05] backdrop-blur-xl border border-white/10 hover:border-[rgba(99,102,241,0.28)] hover:shadow-[0_24px_60px_-20px_rgba(99,102,241,0.35)] hover:-translate-y-1 transition-all duration-500">
                    <div className="w-11 h-11 rounded-2xl bg-[#6366F1]/12 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[rgba(99,102,241,0.10)] transition-colors duration-300">
                      <Icon className="h-5 w-5 text-[#818CF8]" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-[20px] text-white mb-3 leading-snug">{t(f.title, f.titleEn)}</h3>
                    <p className="text-[14px] text-white/60 leading-relaxed mb-5">{t(f.description, f.descriptionEn)}</p>
                    <div className="flex flex-wrap gap-2">
                      {f.tags.map((tag, ti) => (
                        <span key={tag} className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide bg-[#6366F1]/12 text-[#818CF8] border border-[rgba(99,102,241,0.15)]">
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
            <p className="text-white/60 text-sm">{t("Technologies maîtrisées de la conception au déploiement sur les stores.", "Technologies we master, from design to store deployment.")}</p>
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
                className="px-4 py-2 rounded-full text-[13px] font-medium bg-white/[0.05] backdrop-blur-xl border border-white/10 text-white hover:border-[rgba(99,102,241,0.35)] hover:text-[#818CF8] transition-colors duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. PRICING
      ══════════════════════════════════════════ */}
      <section id="offres-mobile" className="relative py-24 md:py-32 overflow-hidden">
        <span className="prisme-halo-violet" style={{ top: "-5%", left: "-8%" }} />
        <span className="prisme-halo-rose"   style={{ bottom: "-5%", right: "-8%" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="section-label justify-center mb-6">{t("Nos offres", "Our plans")}</div>
            <h2 className="font-serif text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-white mb-5">
              {t("Choisissez votre", "Choose your")}{" "}
              <span className="prisme-italic-grad">{t("formule mobile.", "mobile plan.")}</span>
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

                <div className={`relative h-full flex flex-col p-8 rounded-[28px] transition-all duration-500 ${
                  offer.recommended
                    ? "bg-[#101433] text-white shadow-[0_24px_64px_rgba(99,102,241,0.30)]"
                    : "bg-white/[0.05] backdrop-blur-xl border border-white/10 hover:border-[rgba(99,102,241,0.28)] hover:shadow-[0_24px_60px_-20px_rgba(99,102,241,0.35)] hover:-translate-y-1"
                }`}>
                  {offer.recommended && (
                    <div className="absolute inset-0 rounded-[28px] pointer-events-none"
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
                    <div className="mb-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.18em] uppercase ${
                        offer.recommended ? "bg-white/10 text-[#818CF8]" : "bg-[#6366F1]/12 text-[#818CF8]"
                      }`}>
                        {offer.tier}
                      </span>
                    </div>

                    <h3 className={`font-serif text-[22px] mb-1 leading-snug ${offer.recommended ? "text-white" : "text-white"}`}>
                      {t(offer.title, offer.titleEn)}
                    </h3>
                    <p className={`text-[14px] mb-6 ${offer.recommended ? "text-[#B4BCF5]" : "text-white/60"}`}>
                      {t(offer.tagline, offer.taglineEn)}
                    </p>

                    <div className={`font-serif text-[32px] tracking-[-0.02em] mb-8 ${offer.recommended ? "text-white" : "prisme-italic-grad"}`}>
                      {t(offer.price, offer.priceEn)}
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {offer.features.map((feat, fi) => (
                        <li key={feat} className="flex items-start gap-3">
                          <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                            offer.recommended ? "bg-white/10" : "bg-[#6366F1]/12"
                          }`}>
                            <Check className={`h-3 w-3 ${offer.recommended ? "text-[#818CF8]" : "text-[#818CF8]"}`} strokeWidth={2.5} />
                          </div>
                          <span className={`text-[14px] leading-relaxed ${offer.recommended ? "text-[#D6DDFA]" : "text-white/60"}`}>
                            {t(feat, offer.featuresEn[fi])}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className={`mb-6 px-4 py-3 rounded-2xl text-[13px] ${
                      offer.recommended
                        ? "bg-white/8 text-[#B4BCF5] border border-white/10"
                        : "bg-[#6366F1]/12 text-white/60 border border-[rgba(99,102,241,0.12)]"
                    }`}>
                      <span className={`font-semibold ${offer.recommended ? "text-[#818CF8]" : "text-[#818CF8]"}`}>{t("+ Option : ", "+ Add-on: ")}</span>
                      {t(offer.upsell, offer.upsellEn)}
                    </div>

                    <Link to={lp(`/contact?subject=${encodeURIComponent(t(offer.subject, offer.subjectEn))}`)}>
                      <button className={`w-full py-4 rounded-full font-medium text-[15px] inline-flex items-center justify-center gap-2 transition-all duration-300 ${
                        offer.recommended
                          ? "btn-prisme text-white"
                          : "border border-white/20 text-white hover:border-white/50 hover:bg-white/[0.06]"
                      }`}>
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
            <div className="relative bg-[#101433] rounded-[28px] sm:rounded-[36px] p-6 sm:p-9 md:p-14 lg:p-20 text-center overflow-hidden">
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 70% 50% at 20% 0%, rgba(99,102,241,0.30) 0%, transparent 70%)" }} />
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
                  style={{ color: "#818CF8", borderColor: "rgba(99,102,241,0.25)", background: "rgba(99,102,241,0.12)" }}>
                  {t("Lançons votre app", "Let's launch your app")}
                </div>

                <h2 className="font-serif text-[28px] md:text-[46px] leading-[1.08] tracking-[-0.02em] text-white mb-5">
                  {t("Une app qui fidélise", "An app that retains")}{" "}
                  <span className="prisme-italic-grad">{t("et qui scale.", "and scales.")}</span>
                </h2>

                <p className="text-[#B4BCF5] text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
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
                    <Mail className="h-4 w-4" />
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

export default MobileService;
