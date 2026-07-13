import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLang } from "@/contexts/LanguageContext";

export const faqs = [
  {
    question: "Quels sont vos délais de réalisation ?",
    questionEn: "How long does a project take?",
    answer:
      "Les délais varient selon la complexité du projet. Un site vitrine prend généralement 2-4 semaines, une application mobile 2-4 mois, et un écosystème 360° de 4 à 8 mois. Nous établissons un planning détaillé dès le début du projet.",
    answerEn:
      "Timelines vary with project complexity. A showcase website typically takes 2-4 weeks, a mobile app 2-4 months, and a 360° ecosystem 4 to 8 months. We set a detailed schedule right at the start of the project.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    questionEn: "Which technologies do you use?",
    answer:
      "Nous utilisons les technologies les plus modernes et performantes : React, Next.js, React Native, Flutter pour le frontend, Node.js, Python pour le backend, et des solutions cloud comme AWS, Supabase et Firebase. Le choix dépend des besoins spécifiques de votre projet.",
    answerEn:
      "We use the most modern, high-performance technologies: React, Next.js, React Native and Flutter on the frontend, Node.js and Python on the backend, plus cloud solutions like AWS, Supabase and Firebase. The choice depends on your project's specific needs.",
  },
  {
    question: "Proposez-vous de la maintenance après la livraison ?",
    questionEn: "Do you offer maintenance after delivery?",
    answer:
      "Oui, nous proposons des contrats de maintenance adaptés à chaque type de projet. Cela inclut les mises à jour de sécurité, les corrections de bugs, le monitoring des performances et le support technique prioritaire.",
    answerEn:
      "Yes, we offer maintenance plans tailored to each type of project. This includes security updates, bug fixes, performance monitoring and priority technical support.",
  },
  {
    question: "Comment se déroule un projet avec IMPARTIAL ?",
    questionEn: "What does a project with IMPARTIAL look like?",
    answer:
      "Notre processus se décompose en 4 phases : Discovery (compréhension de vos besoins), Design (maquettes et prototypes), Développement (réalisation technique), et Lancement (mise en production avec accompagnement).",
    answerEn:
      "Our process breaks down into 4 phases: Discovery (understanding your needs), Design (mockups and prototypes), Development (technical build), and Launch (going live, with support along the way).",
  },
  {
    question: "Puis-je modifier mon projet après la livraison ?",
    questionEn: "Can I change my project after delivery?",
    answer:
      "Absolument ! Nous vous livrons un code propre et documenté. Vous pouvez soit gérer les évolutions en interne, soit nous confier la maintenance et les évolutions via un contrat dédié.",
    answerEn:
      "Absolutely! We hand over clean, documented code. You can either manage future changes in-house, or entrust us with maintenance and new features through a dedicated plan.",
  },
  {
    question: "Travaillez-vous avec des clients internationaux ?",
    questionEn: "Do you work with international clients?",
    answer:
      "Oui, nous collaborons avec des clients dans toute la francophonie et à l'international. Nos équipes sont habituées au travail à distance avec des outils de collaboration modernes.",
    answerEn:
      "Yes, we work with clients across the French-speaking world and internationally. Our teams are used to working remotely with modern collaboration tools.",
  },
];

export function FAQ() {
  const { t, lp } = useLang();

  return (
    <section className="relative py-24 md:py-32 bg-[#0A0E1A] overflow-hidden">
      {/* Halos */}
      <span className="prisme-halo-violet" style={{ top: "10%", right: "-8%" }} />
      <span className="prisme-halo-rose" style={{ bottom: "5%", left: "-10%" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="section-label justify-center mb-6">FAQ</div>
          <h2 className="font-serif text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-white/90 mb-6">
            <span className="block">{t("Vos questions,", "Your questions,")}</span>
            <span className="block prisme-italic-grad">{t("nos réponses.", "our answers.")}</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            {t(
              "Retrouvez les réponses aux questions les plus courantes sur nos services et notre façon de travailler.",
              "Find answers to the most common questions about our services and the way we work."
            )}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="bg-white/[0.05] backdrop-blur-xl rounded-[20px] border border-white/10 px-6 data-[state=open]:border-[rgba(129,140,248,0.35)] data-[state=open]:shadow-[0_12px_40px_-15px_rgba(99,102,241,0.35)] transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-serif text-white/90 py-5 hover:no-underline [&[data-state=open]>svg]:text-[#818CF8]">
                    {t(faq.question, faq.questionEn)}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 pb-5 leading-[1.75] text-[15px]">
                    {t(faq.answer, faq.answerEn)}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-14">
          <p className="text-sm text-white/50 mb-3">{t("Vous avez une autre question ?", "Got another question?")}</p>
          <Link
            to={lp("/contact")}
            className="inline-flex items-center gap-2 text-[#818CF8] hover:gap-3 font-medium transition-all duration-200 text-[15px]"
          >
            {t("Contactez-nous directement", "Contact us directly")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
