// components/HomeHero.tsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Linkedin, Github, Mail, ChevronDown, Sparkles } from "lucide-react";

function scrollToSection(id: string, offset = 80) {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

const HomeHero = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Linkedin,
      label: t("hero.social.linkedin") || "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: undefined,
    },
    {
      icon: Github,
      label: t("hero.social.github") || "GitHub",
      href: "https://github.com/yourusername",
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: undefined,
    },
    {
      icon: Mail,
      label: t("hero.social.email") || "Email",
      href: "#contact",
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        scrollToSection("contact", 80);
      },
    },
  ];

  return (
    <section
      id="home"
      className="min-h-[90vh] w-full flex items-center relative overflow-hidden py-16 md:py-0"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 md:px-4 py-2 rounded-full bg-secondary/30 border border-border/50"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-foreground/70">
                {t("hero.badge")}
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug"
              >
                <span className="text-foreground/90">
                  {t("hero.greeting")}
                </span>
                <span className="text-primary italic"> Piotr Deręgowski</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-[16px] md:text-2xl text-foreground/70 font-light leading-snug"
              >
                {t("hero.description")}
              </motion.p>
            </div>

            {/* Professional Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-4"
            >
              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.target}
                    rel={social.rel}
                    onClick={social.onClick}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-1 md:gap-2 px-2 md:px-4 py-3 rounded-lg bg-card border border-border hover:border-primary/30 hover:bg-secondary/20 transition-all duration-200"
                  >
                    <social.icon className="w-4 h-4 text-foreground/70 group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="pt-8"
            >
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("experience", 80); // 80px offset (adjust to your header height)
                }}
                className="inline-flex items-center gap-2 group"
              >
                <span className="text-sm uppercase tracking-[0.15em] font-medium text-foreground/70 group-hover:text-primary transition-colors">
                  {t("hero.cta")}
                </span>
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="w-4 h-4 hidden md:block"
                >
                  <ChevronDown className="w-4 h-4 text-primary" />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center items-center mt-6 md:mt-0"
          >
            {/* Animated Border Effect */}
            <div className="absolute -inset-1 -ml-9 md:ml-0">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  opacity: [0.15, 0.25, 0.15],
                  borderColor: [
                    "rgba(var(--primary), 0.15)",
                    "rgba(var(--primary), 0.25)",
                    "rgba(var(--primary), 0.15)",
                  ],
                }}
                transition={{
                  rotate: {
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  opacity: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  borderColor: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="absolute inset-0 rounded-xl border-[0.5px] w-62 md:w-96 h-62 md:h-96 ml-23 md:ml-20 backdrop-blur-sm"
                style={{ borderStyle: "solid" }}
              />
            </div>

            {/* Main Image Container */}
            <div className="relative z-10">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-secondary/10 rounded-2xl blur-2xl animate-pulse" />

              {/* Profile Image */}
              <div className="relative -ml-2 md:ml-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-2xl border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-linear-to-br from-card to-secondary/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-42 h-42 md:w-62 md:h-62 mx-auto mb-6 rounded-full bg-linear-to-br from-primary/20 to-secondary/20 border-2 border-white/10 flex items-center justify-center">
                      <img
                        src="/images/zdj CV.jpg"
                        alt="Profile Image"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="hidden md:block absolute -bottom-4 -right-4 bg-card border border-border/50 rounded-xl px-4 py-3 shadow-lg"
              >
                <span className="text-xs uppercase tracking-[0.15em] text-foreground/70 font-medium">
                  {t("hero.badge2")}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute hidden md:block bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/40">
            {t("hero.scroll")}
          </span>
          <div className="w-px h-12 bg-linear-to-b from-primary/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeHero;
