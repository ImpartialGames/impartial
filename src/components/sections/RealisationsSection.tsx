import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { TiltCard, MagneticButton } from "@/components/wow";
import { useLang } from "@/contexts/LanguageContext";
import eclipsiaImg from "@/assets/portfolio/eclipsia.webp";
import altarysImg from "@/assets/portfolio/altarys-logo.webp";
import propheciaImg from "@/assets/portfolio/prophecia-logo.webp";
import elev8Img from "@/assets/portfolio/elev8.webp";
import umelImg from "@/assets/portfolio/umel.webp";
import fitbyvalImg from "@/assets/portfolio/fitbyval.webp";
import valoraImg from "@/assets/portfolio/valora.webp";
import mbaImg from "@/assets/portfolio/mba.webp";

const projects = [
  {
    title: "Eclipsia",
    objective: "Site vitrine pour une agence de communication et marketing",
    objectiveEn: "Showcase website for a communication and marketing agency",
    role: "Design & Développement",
    roleEn: "Design & Development",
    result: "Image de marque forte et engageante",
    resultEn: "A strong, engaging brand image",
    image: eclipsiaImg,
    url: "/portfolio/eclipsia",
    externalUrl: "https://eclipsiagence.fr",
    tags: ["Design", "Développement", "Communication"],
    tagsEn: ["Design", "Development", "Communication"],
  },
  {
    title: "Altarys Group",
    objective: "Plateforme DeFi avec dashboard admin",
    objectiveEn: "DeFi platform with admin dashboard",
    role: "UI/UX & Développement",
    roleEn: "UI/UX & Development",
    result: "Interface intuitive et scalable",
    resultEn: "An intuitive, scalable interface",
    image: altarysImg,
    url: "/portfolio/altarys",
    externalUrl: "https://altarys-group.fr/",
    tags: ["UI/UX", "Développement", "DeFi"],
    tagsEn: ["UI/UX", "Development", "DeFi"],
  },
  {
    title: "Guardian Of Prophecia",
    objective: "Plateforme gaming avec rewards",
    objectiveEn: "Gaming platform with rewards",
    role: "Design & Développement",
    roleEn: "Design & Development",
    result: "Communauté engagée",
    resultEn: "An engaged community",
    image: propheciaImg,
    url: "/portfolio/prophecia",
    externalUrl: "https://goprophecia.gg?inviteCode=YANNI-DZ94",
    tags: ["Design", "Développement", "Gaming"],
    tagsEn: ["Design", "Development", "Gaming"],
  },
  {
    title: "Umel Couture",
    objective: "Landing page premium pour une maison de couture sur-mesure",
    objectiveEn: "Premium landing page for a bespoke couture house",
    role: "Direction artistique & Développement",
    roleEn: "Art direction & Development",
    result: "Identité visuelle forte, avis Google intégrés",
    resultEn: "Strong visual identity, integrated Google reviews",
    image: umelImg,
    url: "/portfolio/umel",
    externalUrl: null,
    tags: ["Design éditorial", "Landing page", "Mode"],
    tagsEn: ["Editorial design", "Landing page", "Fashion"],
  },
  {
    title: "Fitbyval",
    objective: "Plateforme fitness & coaching",
    objectiveEn: "Fitness & coaching platform",
    role: "Design & Développement",
    roleEn: "Design & Development",
    result: "Parcours utilisateur mobile-first fluide",
    resultEn: "A smooth, mobile-first user journey",
    image: fitbyvalImg,
    url: "/portfolio/fitbyval",
    externalUrl: null,
    tags: ["App mobile", "Coaching", "SaaS"],
    tagsEn: ["Mobile app", "Coaching", "SaaS"],
  },
  {
    title: "ELEV8",
    objective: "Application complète de coaching sportif",
    objectiveEn: "Full-featured fitness coaching app",
    role: "Design & Développement",
    roleEn: "Design & Development",
    result: "Produit opéré par ImpartialGames — à partir de 59 € / 87 $CA / mois",
    resultEn: "Product operated by ImpartialGames — from 59 € / 87 $CA per month",
    image: elev8Img,
    url: "/portfolio/elev8",
    externalUrl: "https://myelev8.app",
    tags: ["Application SaaS", "Coaching", "Mobile"],
    tagsEn: ["SaaS application", "Coaching", "Mobile"],
    badge: "Produit ImpartialGames",
  },
  {
    title: "Valora",
    objective: "Plateforme de valorisation et gestion d'actifs",
    objectiveEn: "Asset valuation and management platform",
    role: "Design & Développement",
    roleEn: "Design & Development",
    result: "Interface claire et performante",
    resultEn: "A clear, high-performing interface",
    image: valoraImg,
    url: "/portfolio/valora",
    externalUrl: null,
    tags: ["Design", "Développement", "Finance"],
    tagsEn: ["Design", "Development", "Finance"],
  },
  {
    title: "MBA",
    objective: "Back-office SaaS pour TPE et PME",
    objectiveEn: "SaaS back office for small and medium businesses",
    role: "Design & Développement",
    roleEn: "Design & Development",
    result: "Produit opéré par ImpartialGames — à partir de 150 € / 220 $CA par mois",
    resultEn: "Product operated by ImpartialGames — from 150 € / 220 $CA per month",
    image: mbaImg,
    url: "/portfolio/mba",
    externalUrl: null,
    tags: ["Back-office", "SaaS", "PME"],
    tagsEn: ["Back office", "SaaS", "SMB"],
    badge: "Produit ImpartialGames",
  },
];

export function RealisationsSection() {
  const { t, lp } = useLang();

  return (
    <section id="realisations" className="relative py-24 md:py-32 bg-[#0E0B14] overflow-hidden">
      {/* Halos */}
      <span className="prisme-halo-peach" style={{ top: "0%", right: "-8%" }} />
      <span className="prisme-halo-violet" style={{ bottom: "5%", left: "-10%" }} />
      <span className="prisme-halo-rose" style={{ top: "50%", left: "45%", opacity: 0.4 }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="section-label justify-center mb-6">{t("Réalisations", "Our work")}</div>
          <h2 className="font-serif text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-white/90 mb-6">
            <span className="block">{t("Ils nous ont", "The ones who")}</span>
            <span className="block prisme-italic-grad">{t("fait confiance.", "trusted us.")}</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            {t(
              "De la landing page à l'application complexe, chaque projet est traité avec la même exigence.",
              "From landing pages to complex applications, every project gets the same level of care."
            )}
          </p>
        </div>

        {/* Grille projets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className={i % 3 === 1 ? "md:mt-10" : undefined}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard max={6} className="h-full rounded-[28px]">
                <div className="group h-full bg-white/5 rounded-[28px] border border-white/10 overflow-hidden shadow-[0_12px_40px_-15px_rgba(124,58,237,0.10)] hover:shadow-[0_28px_60px_-20px_rgba(124,58,237,0.24)] hover:-translate-y-1 transition-all duration-500">

                  {/* Image */}
                  <div className="relative h-36 sm:h-44 md:h-48 overflow-hidden bg-[#1C1028]">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        width={800}
                        height={450}
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-syne font-black text-[28px] tracking-tight text-[#7C3AED]/30">
                          {p.title[0]}
                        </span>
                      </div>
                    )}

                    {/* Overlay slide depuis le bas */}
                    <div
                      aria-hidden
                      className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                      style={{
                        background: "linear-gradient(to top, rgba(124,58,237,0.85) 0%, rgba(124,58,237,0.30) 60%, transparent 100%)",
                      }}
                    />

                    {/* Tags flottants sur l'image au hover */}
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                      {p.tags.map((tag, idx) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/30 tracking-wide"
                        >
                          {t(tag, p.tagsEn[idx])}
                        </span>
                      ))}
                    </div>

                    {/* Bouton "Voir" centré bas */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      <span className="inline-flex items-center gap-1 text-white text-[12px] font-semibold">
                        {t("Voir", "View")} <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-7">
                    {/* Tags statiques */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.tags.map((tag, idx) => (
                        <span key={tag} className="prisme-pill px-3 py-1 rounded-full text-[10px] font-medium tracking-wide">
                          {t(tag, p.tagsEn[idx])}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif text-[22px] text-white/90 mb-5 leading-tight">{p.title}</h3>

                    <dl className="space-y-2.5 mb-6">
                      <div className="text-[13.5px]">
                        <dt className="text-white/50 inline">{t("Objectif : ", "Goal: ")}</dt>
                        <dd className="text-white/80 inline">{t(p.objective, p.objectiveEn)}</dd>
                      </div>
                      <div className="text-[13.5px]">
                        <dt className="text-white/50 inline">{t("Rôle : ", "Role: ")}</dt>
                        <dd className="text-white/80 inline">{t(p.role, p.roleEn)}</dd>
                      </div>
                      <div className="text-[13.5px]">
                        <dt className="text-white/50 inline">{t("Résultat : ", "Result: ")}</dt>
                        <dd className="text-[#A78BFA] font-medium inline">{t(p.result, p.resultEn)}</dd>
                      </div>
                    </dl>

                    <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                      <Link
                        to={lp(p.url)}
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#A78BFA] hover:gap-2.5 transition-all duration-200"
                      >
                        {t("Voir le projet", "View project")}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      {p.externalUrl && (
                        <a
                          href={p.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto text-white/40 hover:text-[#A78BFA] transition-colors"
                          aria-label={t(`Visiter ${p.title}`, `Visit ${p.title}`)}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <MagneticButton
            as={Link}
            to={lp("/portfolio")}
            className="btn-prisme inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium text-[15px]"
          >
            {t("Voir toutes nos réalisations", "See all our work")}
            <ArrowRight className="h-4 w-4" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
