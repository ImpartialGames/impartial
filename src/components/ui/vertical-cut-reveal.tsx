import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface VerticalCutRevealProps {
  children: string;
  splitBy?: "words" | "characters";
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center";
  reverse?: boolean;
  transition?: {
    type?: string;
    stiffness?: number;
    damping?: number;
    duration?: number;
    delay?: number;
    ease?: string | number[];
  };
  className?: string;
  containerClassName?: string;
}

export function VerticalCutReveal({
  children,
  splitBy = "words",
  staggerDuration = 0.15,
  staggerFrom = "first",
  reverse = false,
  transition = { type: "spring", stiffness: 250, damping: 40, delay: 0 },
  className,
  containerClassName,
}: VerticalCutRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const units =
    splitBy === "words"
      ? children.split(" ")
      : children.split("");

  const getDelay = (index: number, total: number) => {
    const baseDelay = transition.delay ?? 0;
    if (staggerFrom === "first") {
      return baseDelay + index * staggerDuration;
    }
    if (staggerFrom === "last") {
      return baseDelay + (total - 1 - index) * staggerDuration;
    }
    // center
    const mid = (total - 1) / 2;
    return baseDelay + Math.abs(index - mid) * staggerDuration;
  };

  return (
    <span
      ref={ref}
      className={cn("inline-flex flex-wrap gap-x-[0.25em]", containerClassName)}
    >
      {units.map((unit, i) => (
        <span key={i} className="overflow-hidden inline-block leading-[1.1]">
          <motion.span
            className={cn("inline-block", className)}
            initial={{ y: reverse ? "-110%" : "110%" }}
            animate={isInView ? { y: "0%" } : { y: reverse ? "-110%" : "110%" }}
            transition={{
              ...transition,
              delay: getDelay(i, units.length),
            }}
          >
            {unit}
            {splitBy === "words" && i < units.length - 1 ? "" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
