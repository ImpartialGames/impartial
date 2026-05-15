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

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Studio Digital Premium"
        description="Agence digitale spécialisée en création de sites web, apps mobiles et logiciels sur-mesure. Design éditorial, motion et performance A+."
        canonical="/"
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
      <HeroPremium />
      <OffresSection />
      <ServicesSection />
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
