import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Download, Globe, Menu, X } from "lucide-react";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll function
  const scrollToSection = useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        setActiveSection(sectionId);
        setMobileOpen(false); // Close mobile menu
      }
    },
    [setActiveSection, setMobileOpen]
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < 100 && rect.bottom > 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentLang = (i18n.resolvedLanguage || i18n.language || "en")
    .slice(0, 2)
    .toUpperCase();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "pl" : "en");
  };

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  const navItems = ["home", "about", "experience", "projects", "contact"];

  return (
    <>
      <motion.header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-card/20 border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <span
            className="text-2xl font-bold italic text-primary tracking-tight cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            PD
          </span>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {navItems.map((id) => (
              <button
                type="button"
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm uppercase px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  activeSection === id
                    ? "text-primary font-semibold border-b border-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {t(`navbar.${id}`)}
              </button>
            ))}
          </div>

          {/* Right desktop */}
          <div className="hidden md:flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={toggleLanguage}
              className="group btn-subtle px-3 py-2 cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.18em] text-foreground group-hover:text-foreground">
                {currentLang}
              </span>
            </button>
            <a href="/cv.pdf" download className="btn-subtle cursor-pointer">
              <Download className="w-4 h-4" />
              <span className="text-foreground group-hover:text-foreground text-xs">
                CV
              </span>
            </a>
          </div>

          {/* Right mobile: language + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="btn-subtle px-2 cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-[0.18em]">
                {currentLang}
              </span>
            </button>
            <button
              type="button"
              onClick={toggleMobile}
              className="btn-subtle px-2 py-1 cursor-pointer"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={mobileOpen ? "close" : "menu"}
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: mobileOpen ? 90 : 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileOpen ? (
                    <X className="w-4 h-4" />
                  ) : (
                    <Menu className="w-4 h-4 " />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>
      {/* Mobile menu panel */}
      {/* Fullscreen Mobile Menu  */}
      {/* Fullscreen Mobile Menu - Enhanced */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              className="md:hidden fixed inset-0 z-80 bg-background/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="md:hidden fixed inset-y-0 right-0 z-90 w-full max-w-sm bg-card/95 backdrop-blur-xl border-l border-border/50 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                mass: 0.8,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                {/* Header with Logo and Close */}
                <div className="flex items-center justify-between p-6 border-b border-border/30">
                  <motion.span
                    className="text-xl font-bold italic text-primary tracking-tight"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    PD
                  </motion.span>

                  <div className="flex items-center gap-2">
                    {/* Language Switcher */}
                    <motion.button
                      type="button"
                      onClick={toggleLanguage}
                      className="btn-subtle px-3 py-2 cursor-pointer hover:bg-secondary/30 active:scale-95 transition-all duration-150"
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15 }}
                    >
                      <Globe className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-[0.18em] font-medium">
                        {currentLang}
                      </span>
                    </motion.button>

                    {/* Close Button */}
                    <motion.button
                      type="button"
                      onClick={toggleMobile}
                      className="btn-subtle p-2 cursor-pointer hover:bg-destructive/10 hover:text-destructive rounded-lg transition-colors"
                      whileHover={{ rotate: 90 }}
                      whileTap={{ scale: 0.9, rotate: 90 }}
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto py-6 px-4">
                  <motion.ul
                    className="space-y-1"
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.07,
                          delayChildren: 0.1,
                        },
                      },
                    }}
                  >
                    {navItems.map((id) => (
                      <motion.li
                        key={id}
                        variants={{
                          hidden: {
                            opacity: 0,
                            x: 30,
                            scale: 0.95,
                          },
                          show: {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 25,
                            },
                          },
                        }}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          type="button"
                          onClick={() => scrollToSection(id)}
                          className="flex items-center w-full text-sm uppercase font-medium text-foreground/90 hover:text-primary px-4 py-3.5 rounded-xl hover:bg-secondary/30 active:bg-secondary/50 transition-all duration-200 cursor-pointer group"
                        >
                          <motion.span
                            className="inline-block h-0.5 w-3 bg-primary/50 mr-3 rounded-full opacity-0 group-hover:opacity-100"
                            initial={{ width: 0 }}
                            whileHover={{ width: 12 }}
                            transition={{ duration: 0.2 }}
                          />
                          {t(`navbar.${id}`)}
                          <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-0 -translate-x-2 group-hover:opacity-40 group-hover:translate-x-0 transition-all duration-200" />
                        </button>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* CV Download Section */}
                <motion.div
                  className="p-6 border-t border-border/30 bg-linear-to-t from-background/20 to-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a
                    href="/cv.pdf"
                    download
                    className="btn-subtle w-full justify-center text-lg cursor-pointer hover:bg-primary/10 hover:text-primary hover:border-primary/30 active:scale-[0.98] transition-all duration-200 group"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                    </motion.div>
                    <span className="text-[14px] font-medium">
                      {t("navbar.cv")}
                    </span>
                  </motion.a>

                  {/* Subtle Footer */}
                  <motion.p
                    className="text-xs text-foreground/40 text-center mt-3 pt-3 border-t border-border/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    {t("navbar.menuFooter")}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
