import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { FAQ } from "@/components/FAQ";
import { ScrollVelocityText } from "@/components/wow";
import {
  HeroPremium,
  OffresSection,
  ServicesSection,
  RealisationsSection,
  MethodeSection,
  PrincipesSection,
  CTAFinal,
} from "@/components/sections";
import { SocialProofBand } from "@/components/sections/SocialProofBand";
import { EcosystemeSection } from "@/components/sections/EcosystemeSection";

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
      <HeroPremium />
      <SocialProofBand />
      <OffresSection />
      <ServicesSection />
      <EcosystemeSection />
      <RealisationsSection />

      {/* Velocity divider */}
      <section aria-hidden className="bg-[#FAFAF7] py-10 md:py-14 overflow-hidden">
        <ScrollVelocityText
          text="Design · Code · Impact · Studio · "
          baseVelocity={-2}
          className="text-[#1C1917]/10"
        />
      </section>

      <MethodeSection />
      <PrincipesSection />
      <FAQ />
      <CTAFinal />
    </Layout>
  );
};

export default Index;
