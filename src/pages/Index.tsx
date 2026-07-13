import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { FAQ, faqs } from "@/components/FAQ";
import {
  HeroAgency,
  ResultsBand,
  ExpertisesSection,
  FeaturedWorkSection,
  OffresSection,
  CTAFinal,
} from "@/components/sections";
import { EcosystemeSection } from "@/components/sections/EcosystemeSection";
import { useLang } from "@/contexts/LanguageContext";

const Index = () => {
  const { lang } = useLang();

  const organizationSchema = {
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
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": lang === "en" ? f.questionEn : f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": lang === "en" ? f.answerEn : f.answer,
      },
    })),
  };

  return (
    <Layout>
      <SEO
        title="Studio Digital Montréal et Paris | Sites Web, Apps, SaaS"
        description="Studio digital premium à Montréal et Paris. Sites web, apps mobiles et SaaS sur-mesure. Design premium, code solide. Plus de 30 clients accompagnés."
        titleEn="Digital Studio Montreal & Paris | Websites, Apps, SaaS"
        descriptionEn="Premium digital studio in Montreal and Paris. Custom websites, mobile apps and SaaS. Sharp design, solid code. 30+ clients served."
        canonical="/"
        schemaJson={[organizationSchema, faqSchema]}
      />
      <HeroAgency />
      <ResultsBand />
      <ExpertisesSection />
      <FeaturedWorkSection />
      <OffresSection />
      <EcosystemeSection />
      <FAQ />
      <CTAFinal />
    </Layout>
  );
};

export default Index;
