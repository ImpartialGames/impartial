import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Check, Mail,
  LayoutDashboard, GitBranch, Users, BarChart2, Lock, Cpu,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { MagneticButton, RevealText } from "@/components/wow";

/* ─── Données ─────────────────────────────────────────────── */

const stats = [
  { value: "12+", label: "Logiciels livrés" },
  { value: "RGPD", label: "Compliant" },
  { value: "99.9%", label: "Uptime" },
  { value: "5★", label: "Satisfaction" },
];

const features = [
  {
    icon: LayoutDashboard,
    title: "Dashboards sur-mesure & data viz",
    description: "Des interfaces d'administration conçues pour la clarté et l'efficacité. Tableaux de bord temps réel, KPIs visuels, navigation intuitive pour vos opérateurs.",
    large: true,
    tags: ["Recharts", "shadcn/ui", "Tailwind"],
  },
  {
    icon: GitBranch,
    title: "Automatisation des tâches",
    description: "Rationalisez vos processus métier avec des automatisations intelligentes. Réduisez les tâches manuelles, gagnez en rapidité et en fiabilité.",
    tags: ["Webhooks", "Cron jobs", "Events"],
  },
  {
    icon: Users,
    title: "Gestion des accès",
    description: "Gestion granulaire des permissions. Chaque membre de votre équipe accède exactement à ce dont il a besoin, rien de plus.",
    tags: ["RBAC", "SSO", "Audit logs"],
  },
  {
    icon: BarChart2,
    title: "Reporting & exports avancés",
    description: "Générez des rapports personnalisés, exportez en PDF/CSV/Excel et partagez les insights avec vos parties prenantes en un clic.",
    tags: ["PDF", "CSV", "Excel"],
  },
  {
    icon: Lock,
    title: "Sécurité & conformité RGPD",
    description: "Chiffrement des données, authentification à deux facteurs, journaux d'audit complets. Votre back-office répond aux exigences légales les plus strictes.",
    tags: ["2FA", "Chiffrement", "RGPD"],
  },
  {
    icon: Cpu,
    title: "Technologie évolutive",
    description: "Conçue pour grandir avec vous. Votre outil s'adapte à votre croissance sans refonte coûteuse.",
    tags: ["Microservices", "PostgreSQL", "AI"],
  },
];

const stack = [
  "Next.js", "Node.js", "PostgreSQL", "Prisma", "Redis",
  "Supabase", "TypeScript", "Docker", "Vercel", "RGPD",
  "shadcn/ui", "Tailwind CSS",
];

const offers = [
  {
    tier: "LAUNCH",
    title: "Admin Pilot",
    tagline: "Gestion simple et rapide.",
    price: "Sur demande",
    features: [
      "Dashboard simple et intuitif",
      "Gestion utilisateurs",
      "CRUD de base",
      "Export de données",
      "Interface responsive",
    ],
    upsell: "Hébergement & support 79€/mois",
    subject: "Backoffice - Offre LAUNCH (Admin Pilot)",
    recommended: false,
  },
  {
    tier: "PRO",
    title: "Business Operator",
    tagline: "Automatisation & croissance.",
    price: "Sur demande",
    features: [
      "Intégrations API multiples",
      "Reporting avancé",
      "Automatisations workflows",
      "Conformité RGPD",
      "Multi-utilisateurs & rôles",
      "Notifications temps réel",
    ],
    upsell: "Support prioritaire 129€/mois",
    subject: "Backoffice - Offre PRO (SaaS Operator)",
    recommended: true,
  },
  {
    tier: "PREMIUM",
    title: "Enterprise Core",
    tagline: "Pour les PME/ETI ambitieuses.",
    price: "Sur devis",
    features: [
      "Architecture microservices",
      "IA & Machine Learning",
      "Logiques métiers complexes",
      "Sécurité enterprise",
      "Scalabilité infinie",
      "SLA garanti",
    ],
    upsell: "TMA complète sur devis",
    subject: "Backoffice - Offre PREMIUM (Enterprise Core)",
    recommended: false,
  },
];

/* ─── Variants ─────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── Page ──────────────────────────────────────────────────── */

const BackofficeService = () => {
  return (
    <Layout>
      <SEO
        title="Backoffice & Logiciel Métier"
        description="Création d'outils internes, dashboards et logiciels sur-mesure. Automatisation, gestion des accès et technologie évolutive."
        canonical="/services/backoffice"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Backoffice & Logiciel Métier",
          "provider": { "@type": "Organization", "name": "IMPARTIAL Studio", "url": "https://impartialgames.com" },
          "serviceType": "Custom Software Development",
          "areaServed": "FR"
        }}
      />

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12 bg-[#FBFAF7]">
        <span className="prisme-halo-violet" style={{ top: "-10%", left: "-6%" }} />
        <span className="prisme-halo-peach"  style={{ bottom: "-8%", right: "10%" }} />
        <span className="prisme-halo-rose"   style={{ top: "30%", left: "32%" }} />

        <div className="w-full px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label justify-center mb-6"
            >
              Backoffice & Logiciel
            </motion.div>

            <h1 className="font-serif text-[32px] sm:text-[48px] lg:text-[66px] xl:text-[80px] leading-[0.97] tracking-[-0.03em] text-[#0E0B14]">
              <RevealText by="word" stagger={0.06}>Le cerveau de</RevealText>
              <span className="block">
                <RevealText by="word" stagger={0.06} delay={0.12}>votre</RevealText>
              </span>
              <span className="block">
                <span className="prisme-italic-grad prisme-shimmer">opération.</span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-6 text-[17px] md:text-[19px] text-[#6F6580] leading-[1.65] max-w-xl mx-auto"
            >
              Dashboards puissants, automatisations intelligentes et outils sur-mesure pour piloter votre activité avec une précision chirurgicale.
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
                Démarrer un projet
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton
                as="button"
                onClick={() => document.getElementById("offres-backoffice")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#0E0B14] text-[#0E0B14] font-medium text-[15px] hover:bg-[#0E0B14] hover:text-[#FBFAF7] transition-colors"
              >
                Voir les offres
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-7 flex flex-wrap gap-2 justify-center"
            >
              {["Dashboards", "Automatisation", "RGPD Compliant", "Multi-rôles"].map((tag, i) => (
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
          style={{ background: "linear-gradient(to bottom, transparent, #FBFAF7)" }}
        />
      </section>

      {/* ══════════════════════════════════════════
          2. STATS
      ══════════════════════════════════════════ */}
      <section className="bg-[#FBFAF7] py-12">
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
                className="text-center p-6 rounded-[20px] bg-white border border-[#EEEAF4]"
              >
                <div className="font-serif text-[28px] md:text-[38px] leading-none tracking-[-0.03em] prisme-italic-grad mb-1">
                  {s.value}
                </div>
                <div className="text-[13px] text-[#6F6580] font-medium">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. FEATURES
      ══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-[#FBFAF7] overflow-hidden">
        <span className="prisme-halo-violet" style={{ top: "0%", left: "-8%" }} />
        <span className="prisme-halo-peach"  style={{ bottom: "0%", right: "-8%" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="section-label justify-center mb-6">Expertises</div>
            <h2 className="font-serif text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-[#0E0B14] mb-5">
              Ce qu&apos;on{" "}
              <span className="prisme-italic-grad">maîtrise.</span>
            </h2>
            <p className="text-[#6F6580] text-base md:text-lg leading-relaxed">
              Six piliers pour des outils internes qui optimisent vos opérations et boostent votre productivité.
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
                  <div className="group h-full p-8 rounded-[28px] bg-white border border-[#EEEAF4] hover:border-[rgba(124,58,237,0.28)] hover:shadow-[0_12px_48px_rgba(124,58,237,0.10)] hover:-translate-y-1 transition-all duration-500">
                    <div className="w-11 h-11 rounded-2xl bg-[#F3EEFB] border border-[#EEEAF4] flex items-center justify-center mb-6 group-hover:bg-[rgba(124,58,237,0.10)] transition-colors duration-300">
                      <Icon className="h-5 w-5 text-[#7C3AED]" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-[20px] text-[#0E0B14] mb-3 leading-snug">{f.title}</h3>
                    <p className="text-[14px] text-[#6F6580] leading-relaxed mb-5">{f.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {f.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide bg-[#F3EEFB] text-[#7C3AED] border border-[rgba(124,58,237,0.15)]">
                          {tag}
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
      <section className="py-16 bg-[#FBFAF7] border-y border-[#EEEAF4]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="section-label justify-center mb-4">Stack technique</div>
            <p className="text-[#6F6580] text-sm">Technologies éprouvées pour des outils robustes, sécurisés et évolutifs.</p>
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
                className="px-4 py-2 rounded-full text-[13px] font-medium bg-white border border-[#EEEAF4] text-[#0E0B14] hover:border-[rgba(124,58,237,0.35)] hover:text-[#7C3AED] transition-colors duration-200"
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
      <section id="offres-backoffice" className="relative py-24 md:py-32 bg-[#FBFAF7] overflow-hidden">
        <span className="prisme-halo-violet" style={{ top: "-5%", left: "-8%" }} />
        <span className="prisme-halo-rose"   style={{ bottom: "-5%", right: "-8%" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="section-label justify-center mb-6">Nos offres</div>
            <h2 className="font-serif text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-[#0E0B14] mb-5">
              Choisissez votre{" "}
              <span className="prisme-italic-grad">formule backoffice.</span>
            </h2>
            <p className="text-[#6F6580] text-base md:text-lg leading-relaxed">
              Trois niveaux d&apos;engagement, un seul niveau d&apos;exigence.
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
                      Recommandé
                    </span>
                  </div>
                )}

                <div className={`relative h-full flex flex-col p-8 rounded-[28px] transition-all duration-500 ${
                  offer.recommended
                    ? "bg-[#1C0E42] text-white shadow-[0_24px_64px_rgba(124,58,237,0.30)]"
                    : "bg-white border border-[#EEEAF4] hover:border-[rgba(124,58,237,0.28)] hover:shadow-[0_12px_48px_rgba(124,58,237,0.10)]"
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
                        offer.recommended ? "bg-white/10 text-[#A78BFA]" : "bg-[#F3EEFB] text-[#7C3AED]"
                      }`}>
                        {offer.tier}
                      </span>
                    </div>

                    <h3 className={`font-serif text-[22px] mb-1 leading-snug ${offer.recommended ? "text-white" : "text-[#0E0B14]"}`}>
                      {offer.title}
                    </h3>
                    <p className={`text-[14px] mb-6 ${offer.recommended ? "text-[#B8A8D8]" : "text-[#6F6580]"}`}>
                      {offer.tagline}
                    </p>

                    <div className={`font-serif text-[32px] tracking-[-0.02em] mb-8 ${offer.recommended ? "text-white" : "prisme-italic-grad"}`}>
                      {offer.price}
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {offer.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3">
                          <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                            offer.recommended ? "bg-white/10" : "bg-[#F3EEFB]"
                          }`}>
                            <Check className={`h-3 w-3 ${offer.recommended ? "text-[#A78BFA]" : "text-[#7C3AED]"}`} strokeWidth={2.5} />
                          </div>
                          <span className={`text-[14px] leading-relaxed ${offer.recommended ? "text-[#D4C8F0]" : "text-[#6F6580]"}`}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className={`mb-6 px-4 py-3 rounded-2xl text-[13px] ${
                      offer.recommended
                        ? "bg-white/8 text-[#B8A8D8] border border-white/10"
                        : "bg-[#F3EEFB] text-[#6F6580] border border-[rgba(124,58,237,0.12)]"
                    }`}>
                      <span className={`font-semibold ${offer.recommended ? "text-[#A78BFA]" : "text-[#7C3AED]"}`}>+ Option : </span>
                      {offer.upsell}
                    </div>

                    <Link to={`/contact?subject=${encodeURIComponent(offer.subject)}`}>
                      <button className={`w-full py-4 rounded-full font-medium text-[15px] inline-flex items-center justify-center gap-2 transition-all duration-300 ${
                        offer.recommended
                          ? "btn-prisme text-white"
                          : "border border-[#0E0B14] text-[#0E0B14] hover:bg-[#0E0B14] hover:text-white"
                      }`}>
                        Configurer ce pack
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
                  Optimisez vos opérations
                </div>

                <h2 className="font-serif text-[28px] md:text-[46px] leading-[1.08] tracking-[-0.02em] text-white mb-5">
                  Un outil qui pilote{" "}
                  <span className="prisme-italic-grad">et qui scale.</span>
                </h2>

                <p className="text-[#B8A8D8] text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                  Réponse sous 24–48h avec une proposition claire, un délai et un tarif, sans engagement.
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
                    <Mail className="h-4 w-4" />
                    Écrire un message
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

export default BackofficeService;
