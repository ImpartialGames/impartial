import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface GlowMenuItem {
  icon: LucideIcon | React.FC;
  label: string;
  href: string;
  gradient: string;
  iconColor: string;
}

interface GlowMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  items: GlowMenuItem[];
  activeItem?: string;
}

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

export const GlowMenu = React.forwardRef<HTMLDivElement, GlowMenuProps>(
  ({ className, items, activeItem, ...props }, ref) => {
    return (
      <motion.nav
        ref={ref}
        className={cn(
          "p-1.5 rounded-2xl bg-[#FBFAF7]/80 backdrop-blur-lg border border-[#EEEAF4] shadow-[0_4px_24px_rgba(124,58,237,0.07)] relative overflow-hidden",
          className,
        )}
        initial="initial"
        whileHover="hover"
        {...props}
      >
        {/* Nav-level ambient glow on hover */}
        <motion.div
          className="absolute -inset-2 rounded-3xl z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.10) 0%, rgba(167,139,250,0.06) 40%, rgba(240,175,200,0.04) 70%, transparent 100%)",
          }}
          variants={navGlowVariants}
        />

        <ul className="flex items-center gap-1 relative z-10">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = item.label === activeItem;

            return (
              <motion.li key={item.label} className="relative">
                <Link to={item.href} className="block">
                  <motion.div
                    className="block rounded-xl overflow-visible group relative"
                    style={{ perspective: "600px" }}
                    whileHover="hover"
                    initial="initial"
                  >
                    {/* Radial glow blob */}
                    <motion.div
                      className="absolute inset-0 z-0 pointer-events-none"
                      variants={glowVariants}
                      animate={isActive ? "hover" : "initial"}
                      style={{
                        background: item.gradient,
                        opacity: isActive ? 1 : 0,
                        borderRadius: "12px",
                      }}
                    />

                    {/* Front face */}
                    <motion.div
                      className={cn(
                        "flex items-center gap-2 px-3.5 py-2 relative z-10 bg-transparent rounded-xl transition-colors",
                        isActive
                          ? "text-[#0E0B14]"
                          : "text-[#6F6580] group-hover:text-[#0E0B14]",
                      )}
                      variants={itemVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center bottom",
                      }}
                    >
                      <span className={cn("transition-colors duration-300", isActive ? item.iconColor : "text-[#9B8EC4] group-hover:text-[#7C3AED]")}>
                        <Icon className="h-[15px] w-[15px]" />
                      </span>
                      <span className="text-[13px] font-medium">{item.label}</span>
                    </motion.div>

                    {/* Back face (flip) */}
                    <motion.div
                      className={cn(
                        "flex items-center gap-2 px-3.5 py-2 absolute inset-0 z-10 bg-transparent rounded-xl transition-colors",
                        isActive
                          ? "text-[#0E0B14]"
                          : "text-[#6F6580] group-hover:text-[#0E0B14]",
                      )}
                      variants={backVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center top",
                        rotateX: 90,
                      }}
                    >
                      <span className={cn("transition-colors duration-300", isActive ? item.iconColor : "text-[#9B8EC4] group-hover:text-[#7C3AED]")}>
                        <Icon className="h-[15px] w-[15px]" />
                      </span>
                      <span className="text-[13px] font-medium">{item.label}</span>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </motion.nav>
    );
  },
);

GlowMenu.displayName = "GlowMenu";
