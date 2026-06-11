import { motion } from "framer-motion";

const stats = [
  { value: "+30", label: "clients accompagnés" },
  { value: "13 ans", label: "d'expérience" },
  { value: "4 produits", label: "opérés par nos soins" },
  { value: "France & Montréal", label: "nos deux marchés" },
];

export function SocialProofBand() {
  return (
    <section className="bg-[#FBFAF7] border-y border-[#EEE9F4] py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-24">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <span className="font-syne font-black text-[28px] md:text-[36px] tracking-[-0.03em] text-[#0E0B14]">
                {s.value}
              </span>
              <span className="text-[12px] md:text-[13px] text-[#6F6580] font-medium tracking-wide mt-0.5">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
