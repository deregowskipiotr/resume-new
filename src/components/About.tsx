import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Sparkles } from "lucide-react";

const AboutSection = () => {
  const { t } = useTranslation();
  const aboutContent = [
    t("about.intro"),
    t("about.experience"),
    t("about.achievements"),
    t("about.transition"),
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 w-full min-h-screen relative isolate"
    >
      {/* Subtle theme colors - Full viewport */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute right-0 top-1/4 
          w-36 h-36 md:w-96 md:h-96 
          bg-linear-to-br from-primary/40 via-secondary/30 to-primary/20 
          rounded-full blur-3xl filter-[blur(80px)]"
        />
        <div
          className="absolute right-1/4 bottom-1/4 
          w-80 h-80 bg-linear-to-r from-secondary/30 via-primary/20 to-card/10 
          rounded-full blur-2xl animate-pulse filter-[blur(64px)]"
        />
      </div>

      {/* Content forward */}
      <div className="relative z-20">
        <div className="container mx-auto md:px-6 w-full">
          {/* Title - NO bg/border, clean */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto text-center mb-20 pt-20"
          >
            <div className="inline-flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <h2 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                {t("navbar.about")}
              </h2>
            </div>
          </motion.div>

          {/* Right aligned content */}
          <div className="mx-auto">
            <div className="space-y-6">
              {aboutContent.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  className="text-lg md:text-xl leading-relaxed text-foreground/90 font-light tracking-tight"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
