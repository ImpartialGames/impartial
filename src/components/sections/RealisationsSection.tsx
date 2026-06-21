import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { TiltCard, MagneticButton } from "@/components/wow";
import eclipsiaImg from "@/assets/portfolio/eclipsia.png";
import altarysImg from "@/assets/portfolio/altarys-logo.png";
import propheciaImg from "@/assets/portfolio/prophecia-logo.jpeg";
import elev8Img from "@/assets/portfolio/elev8.webp";
import umelImg from "@/assets/portfolio/umel.webp";
import fitbyvalImg from "@/assets/portfolio/fitbyval.webp";
import valoraImg from "@/assets/portfolio/valora.webp";
import mbaImg from "@/assets/portfolio/mba.webp";

const projects = [
  {
    title: "Eclipsia",
    objective: "Site vitrine pour une agence de communication et marketing",
    role: "Design & Développement",
    result: "Image de marque forte et engageante",
    image: eclipsiaImg,
    url: "/portfolio/eclipsia",
    externalUrl: "https://eclipsiagence.fr",
    tags: ["Design", "Développement", "Communication"],
  },
  {
    title: "Altarys Group",
    objective: "Plateforme DeFi avec dashboard admin",
    role: "UI/UX & Développement",
    result: "Interface intuitive et scalable",
    image: altarysImg,
    url: "/portfolio/altarys",
    externalUrl: "https://altarys-group.fr/",
    tags: ["UI/UX", "Développement", "DeFi"],
  },
  {
    title: "Guardian Of Prophecia",
    objective: "Plateforme gaming avec rewards",
    role: "Design & Développement",
    result: "Communauté engagée",
    image: propheciaImg,
    url: "/portfolio/prophecia",
    externalUrl: "https://goprophecia.gg?inviteCode=YANNI-DZ94",
    tags: ["Design", "Développement", "Gaming"],
  },
  {
    title: "Umel Couture",
    objective: "Landing page premium pour une maison de couture sur-mesure",
    role: "Direction artistique & Développement",
    result: "Identité visuelle forte, avis Google intégrés",
    image: umelImg,
    url: "/portfolio/umel",
    externalUrl: null,
    tags: ["Design éditorial", "Landing page", "Mode"],
  },
  {
    title: "Fitbyval",
    objective: "Plateforme fitness & coaching",
    role: "Design & Développement",
    result: "Parcours utilisateur mobile-first fluide",
    image: fitbyvalImg,
    url: "/portfolio/fitbyval",
    externalUrl: null,
    tags: ["App mobile", "Coaching", "SaaS"],
  },
  {
    title: "ELEV8",
    objective: "Application complète de coaching sportif",
    role: "Design & Développement",
    result: "Produit opéré par ImpartialGames — à partir de 59 € / 87 $CA / mois",
    image: elev8Img,
    url: "/portfolio/elev8",
    externalUrl: "https://myelev8.app",
    tags: ["Application SaaS", "Coaching", "Mobile"],
    badge: "Produit ImpartialGames",
  },
  {
    title: "Valora",
    objective: "Plateforme de valorisation et gestion d'actifs",
    role: "Design & Développement",
    result: "Interface claire et performante",
    image: valoraImg,
    url: "/portfolio/valora",
    externalUrl: null,
    tags: ["Design", "Développement", "Finance"],
  },
  {
    title: "MBA",
    objective: "Back-office SaaS pour TPE et PME",
    role: "Design & Développement",
    result: "Produit opéré par ImpartialGames — à partir de 150 € / 220 $CA par mois",
    image: mbaImg,
    url: "/portfolio/mba",
    externalUrl: null,
    tags: ["Back-office", "SaaS", "PME"],
    badge: "Produit ImpartialGames",
  },
];

export function RealisationsSection() {
  return (
    <section id="realisations" className="relative py-24 md:py-32 bg-[#F3EEFB]/30 dark:bg-[#0E0B14] overflow-hidden">
      {/* Halos */}
      <span className="prisme-halo-peach" style={{ top: "0%", right: "-8%" }} />
      <span className="prisme-halo-violet" style={{ bottom: "5%", left: "-10%" }} />
      <span className="prisme-halo-rose" style={{ top: "50%", left: "45%", opacity: 0.4 }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="section-label justify-center mb-6">Réalisations</div>
          <h2 className="font-serif text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-[#0E0B14] dark:text-white/90 mb-6">
            <span className="block">Ils nous ont</span>
            <span className="block prisme-italic-grad">fait confiance.</span>
          </h2>
          <p className="text-[#6F6580] dark:text-white/60 text-base md:text-lg leading-relaxed">
            De la landing page à l&apos;application complexe, chaque projet est traité avec la même exigence.
          </p>
        </div>

        {/* Grille projets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard max={6} className="h-full rounded-[28px]">
                <div className="group h-full bg-white/85 dark:bg-white/5 rounded-[28px] border border-[#EEEAF4] dark:border-white/10 overflow-hidden shadow-[0_12px_40px_-15px_rgba(124,58,237,0.10)] hover:shadow-[0_28px_60px_-20px_rgba(124,58,237,0.24)] hover:-translate-y-1 transition-all duration-500">

                  {/* Image */}
                  <div className="relative h-36 sm:h-44 md:h-48 overflow-hidden bg-[#F3EEFB] dark:bg-[#1C1028]">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        width={800}
                        height={450}
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding="async"
                        {...(i === 0 ? { fetchPriority: "high" } : {})}
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
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/30 tracking-wide"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Bouton "Voir" centré bas */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      <span className="inline-flex items-center gap-1 text-white text-[12px] font-semibold">
                        Voir <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-7">
                    {/* Tags statiques */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.tags.map((t) => (
                        <span key={t} className="prisme-pill px-3 py-1 rounded-full text-[10px] font-medium tracking-wide">
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif text-[22px] text-[#0E0B14] dark:text-white/90 mb-5 leading-tight">{p.title}</h3>

                    <dl className="space-y-2.5 mb-6">
                      <div className="text-[13.5px]">
                        <dt className="text-[#6F6580] dark:text-white/50 inline">Objectif : </dt>
                        <dd className="text-[#0E0B14] dark:text-white/80 inline">{p.objective}</dd>
                      </div>
                      <div className="text-[13.5px]">
                        <dt className="text-[#6F6580] dark:text-white/50 inline">Rôle : </dt>
                        <dd className="text-[#0E0B14] dark:text-white/80 inline">{p.role}</dd>
                      </div>
                      <div className="text-[13.5px]">
                        <dt className="text-[#6F6580] dark:text-white/50 inline">Résultat : </dt>
                        <dd className="text-[#7C3AED] dark:text-[#A78BFA] font-medium inline">{p.result}</dd>
                      </div>
                    </dl>

                    <div className="flex items-center gap-4 pt-5 border-t border-[#EEEAF4] dark:border-white/10">
                      <Link
                        to={p.url}
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#7C3AED] dark:text-[#A78BFA] hover:gap-2.5 transition-all duration-200"
                      >
                        Voir le projet
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      {p.externalUrl && (
                        <a
                          href={p.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto text-[#6F6580] dark:text-white/40 hover:text-[#7C3AED] dark:hover:text-[#A78BFA] transition-colors"
                          aria-label={`Visiter ${p.title}`}
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
            to="/portfolio"
            className="btn-prisme inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium text-[15px]"
          >
            Voir toutes nos réalisations
            <ArrowRight className="h-4 w-4" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
