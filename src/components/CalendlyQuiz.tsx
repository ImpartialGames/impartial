import { useState } from "react";
import { motion } from "framer-motion";
import { X, ArrowRight, CheckCircle } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/yannis-bezriche/impartial-games";

type Step = 1 | 2 | 3 | "disqualified" | "done";

const projectTypes = [
  "Landing page",
  "Site multi-pages",
  "App ou logiciel",
  "Je ne sais pas encore",
];

const budgets = [
  { label: "Moins de 1 500 € / 2 500 $CA", qualified: false },
  { label: "1 500 – 3 000 € / 2 500 – 5 000 $CA", qualified: true },
  { label: "3 000 – 8 000 € / 5 000 – 12 000 $CA", qualified: true },
  { label: "Plus de 8 000 € / 12 000 $CA", qualified: true },
];

const delays = [
  "Urgent (moins de 4 semaines)",
  "Normal (1 à 3 mois)",
  "Pas encore décidé",
];

interface Props {
  onClose: () => void;
}

export function CalendlyQuiz({ onClose }: Props) {
  const [step, setStep] = useState<Step>(1);

  function handleBudget(budget: (typeof budgets)[0]) {
    if (!budget.qualified) {
      setStep("disqualified");
    } else {
      setStep(3);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative bg-[#FBFAF7] rounded-3xl shadow-2xl p-8 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#EEE9F4] transition-colors"
          aria-label="Fermer"
        >
          <X className="h-4 w-4 text-[#6F6580]" />
        </button>

        {step === 1 && (
          <div>
            <h3 className="font-syne font-black text-[22px] text-[#0E0B14] mb-2">
              Quel type de projet ?
            </h3>
            <p className="text-[13px] text-[#6F6580] mb-6">2 autres questions après celle-ci.</p>
            <div className="flex flex-col gap-2.5">
              {projectTypes.map((pt) => (
                <button
                  key={pt}
                  onClick={() => setStep(2)}
                  className="text-left px-5 py-3.5 rounded-xl border border-[#DDD9E8] hover:border-[#7C3AED] hover:bg-[#7C3AED]/5 transition-all text-[14px] font-medium text-[#0E0B14]"
                >
                  {pt}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="font-syne font-black text-[22px] text-[#0E0B14] mb-2">
              Quel est ton budget ?
            </h3>
            <p className="text-[13px] text-[#6F6580] mb-6">
              Nos packs partent à partir de 1 500 €.
            </p>
            <div className="flex flex-col gap-2.5">
              {budgets.map((b) => (
                <button
                  key={b.label}
                  onClick={() => handleBudget(b)}
                  className="text-left px-5 py-3.5 rounded-xl border border-[#DDD9E8] hover:border-[#7C3AED] hover:bg-[#7C3AED]/5 transition-all text-[14px] font-medium text-[#0E0B14]"
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="font-syne font-black text-[22px] text-[#0E0B14] mb-2">
              Ton délai souhaité ?
            </h3>
            <p className="text-[13px] text-[#6F6580] mb-6">
              Pour qu&apos;on puisse mieux préparer l&apos;appel.
            </p>
            <div className="flex flex-col gap-2.5">
              {delays.map((d) => (
                <button
                  key={d}
                  onClick={() => setStep("done")}
                  className="text-left px-5 py-3.5 rounded-xl border border-[#DDD9E8] hover:border-[#7C3AED] hover:bg-[#7C3AED]/5 transition-all text-[14px] font-medium text-[#0E0B14]"
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === "disqualified" && (
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-[#EEE9F4] flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="font-syne font-black text-[20px] text-[#0E0B14] mb-3">
              On peut quand même trouver une solution
            </h3>
            <p className="text-[14px] text-[#6F6580] leading-relaxed mb-6">
              Notre pack d&apos;entrée est à 1 500 € / 2 200 $CA. Écris-nous, on trouvera une
              solution adaptée.
            </p>
            <a
              href="mailto:studio@impartialgames.com"
              className="btn-prisme inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium text-[14px]"
            >
              Envoyer un message
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}

        {step === "done" && (
          <div className="text-center">
            <CheckCircle className="h-10 w-10 text-[#7C3AED] mx-auto mb-4" />
            <h3 className="font-syne font-black text-[20px] text-[#0E0B14] mb-3">
              Parfait, tu es qualifié !
            </h3>
            <p className="text-[14px] text-[#6F6580] leading-relaxed mb-6">
              Choisis un créneau directement dans notre calendrier. On te répond sous 24-48h.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="btn-prisme inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium text-[14px]"
            >
              Réserver un appel
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </motion.div>
    </div>
  );
}
