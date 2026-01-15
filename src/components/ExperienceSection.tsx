import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Sparkles } from "lucide-react";
import { experience } from "@/constants/experience";

const listVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ExperienceSection() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string>(experience[0]?.id);

  const activeItem =
    experience.find((item) => item.id === activeId) ?? experience[0];

  return (
    <section id="experience" className="relative mx-auto w-full py-16 md:py-24">
      {/* Title - same as About */}
      <div className="max-w-2xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-primary" />
          <h2 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            {t("navbar.experience")}
          </h2>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start">
        {/* Left: experience list */}
        <motion.ul
          className="space-y-3"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {experience.map((item) => {
            const isActive = item.id === activeId;
            return (
              <motion.li
                key={item.id}
                variants={itemVariants}
                layout
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <button
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`group flex w-full items-center justify-between gap-3 rounded-md border px-3 py-3 text-left text-sm transition-colors duration-300 ease-in-out cursor-pointer ${
                    isActive
                      ? "border-primary/70 bg-primary/10"
                      : "border-border/60 bg-background/60 hover:bg-secondary/20 hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-[0_0_14px_rgba(var(--primary),0.9)]"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {t(item.position)[0]}
                    </span>
                    <div className="space-y-0.5">
                      <span
                        className={`block text-xs font-medium uppercase tracking-[0.18em] ${
                          isActive ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {t(item.position)}
                      </span>
                      <span className="block text-sm text-foreground/90">
                        {t(item.company)} | {t(item.location)}
                      </span>
                      <span className="block text-xs text-foreground/70">
                        {t(item.duration)}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isActive
                        ? "bg-primary shadow-[0_0_10px_rgba(var(--primary),0.9)]"
                        : "bg-border"
                    }`}
                  />
                </button>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Right: spotlight panel - same height as left */}
        <div className="relative h-145 md:h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              layout
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.99 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute inset-0 overflow-hidden rounded-xl border border-border/70 bg-background/80 px-5 py-6 shadow-sm backdrop-blur-md md:px-7 md:py-7"
            >
              {/* corner accent */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-20 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
              </div>

              {/* top tag + title */}
              <div className="relative mb-5 flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.9)]" />
                    <span>{t(activeItem.position)}</span>
                  </div>
                </div>
              </div>

              {/* responsibilities section */}
              <div className="relative space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  {t("experience.responsibilities")}
                </h4>
                <p className="max-w-xl text-sm text-muted-foreground md:text-base">
                  {t(activeItem.description)}
                </p>

                <ul className="space-y-2 text-sm text-foreground/90">
                  {activeItem.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 inline-flex h-1.5 w-3 rounded-full bg-linear-to-r from-primary via-secondary to-primary" />
                      <span>{t(point)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
