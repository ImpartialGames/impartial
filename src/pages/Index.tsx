import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Marquee } from "@/components/wow/Marquee";
import {
  HeroSection,
  ProjetsSection,
  ServicesLignesSection,
  ManifestSection,
  PreuveSection,
  EquipeSection,
  CTAFinal,
} from "@/components/sections";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Studio Digital Montréal et Paris | Sites Web, Apps, SaaS"
        description="Studio digital premium à Montréal et Paris. Sites web, apps mobiles et SaaS sur-mesure. Design premium, code solide. Plus de 30 clients accompagnés."
        canonical="/"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ImpartialGames",
          "url": "https://impartialgames.com",
          "logo": "https://impartialgames.com/og-image.jpg",
          "email": "studio@impartialgames.com",
          "address": [
            { "@type": "PostalAddress", "addressLocality": "Montréal", "addressRegion": "QC", "addressCountry": "CA" },
            { "@type": "PostalAddress", "addressLocality": "Paris", "addressCountry": "FR" }
          ],
          "sameAs": []
        }}
      />
      <HeroSection />
      <ProjetsSection />

      {/* Bande studio — entre Projets et Services */}
      <div
        className="overflow-hidden py-5"
        style={{ borderTop: "1px solid var(--ig-border)", borderBottom: "1px solid var(--ig-border)" }}
      >
        <Marquee speed={35} pauseOnHover={false}>
          {["IMPARTIAL GAMES", "STUDIO DIGITAL", "MONTRÉAL", "PARIS", "WEB", "MOBILE", "SAAS", "DESIGN", "CODE"].map((item) => (
            <span key={item} className="ig-label mx-10" style={{ letterSpacing: "0.14em", opacity: 0.5 }}>
              {item}
            </span>
          ))}
        </Marquee>
      </div>

      <ServicesLignesSection />
      <ManifestSection />
      <PreuveSection />
      <EquipeSection />
      <CTAFinal />
    </Layout>
  );
};

export default Index;
