import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quels sont vos délais de réalisation ?",
    answer:
      "Les délais varient selon la complexité du projet. Un site vitrine prend généralement 2-4 semaines, une application mobile 2-4 mois, et un écosystème 360° de 4 à 8 mois. Nous établissons un planning détaillé dès le début du projet.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "Nous utilisons les technologies les plus modernes et performantes : React, Next.js, React Native, Flutter pour le frontend, Node.js, Python pour le backend, et des solutions cloud comme AWS, Supabase et Firebase. Le choix dépend des besoins spécifiques de votre projet.",
  },
  {
    question: "Proposez-vous de la maintenance après la livraison ?",
    answer:
      "Oui, nous proposons des contrats de maintenance adaptés à chaque type de projet. Cela inclut les mises à jour de sécurité, les corrections de bugs, le monitoring des performances et le support technique prioritaire.",
  },
  {
    question: "Comment se déroule un projet avec IMPARTIAL ?",
    answer:
      "Notre processus se décompose en 4 phases : Discovery (compréhension de vos besoins), Design (maquettes et prototypes), Développement (réalisation technique), et Lancement (mise en production avec accompagnement).",
  },
  {
    question: "Puis-je modifier mon projet après la livraison ?",
    answer:
      "Absolument ! Nous vous livrons un code propre et documenté. Vous pouvez soit gérer les évolutions en interne, soit nous confier la maintenance et les évolutions via un contrat dédié.",
  },
  {
    question: "Travaillez-vous avec des clients internationaux ?",
    answer:
      "Oui, nous collaborons avec des clients dans toute la francophonie et à l'international. Nos équipes sont habituées au travail à distance avec des outils de collaboration modernes.",
  },
];

export function FAQ() {
  return (
    <section className="relative py-24 md:py-32 bg-[#FBFAF7] overflow-hidden">
      {/* Halos */}
      <span className="prisme-halo-violet" style={{ top: "10%", right: "-8%" }} />
      <span className="prisme-halo-rose" style={{ bottom: "5%", left: "-10%" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="section-label justify-center mb-6">FAQ</div>
          <h2 className="font-serif text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-[#0E0B14] mb-6">
            Vos questions,{" "}
            <span className="prisme-italic-grad">nos réponses.</span>
          </h2>
          <p className="text-[#6F6580] text-base md:text-lg leading-relaxed">
            Retrouvez les réponses aux questions les plus courantes sur nos services et notre façon de travailler.
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
                  className="bg-white/85 rounded-[20px] border border-[#EEEAF4] px-6 data-[state=open]:border-[rgba(124,58,237,0.3)] data-[state=open]:shadow-[0_12px_40px_-15px_rgba(124,58,237,0.18)] transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-serif text-[#0E0B14] py-5 hover:no-underline [&[data-state=open]>svg]:text-[#7C3AED]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6F6580] pb-5 leading-[1.75] text-[15px]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-14">
          <p className="text-sm text-[#6F6580] mb-3">Vous avez une autre question ?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-[#7C3AED] hover:gap-3 font-medium transition-all duration-200 text-[15px]"
          >
            Contactez-nous directement
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
