// ContactSection.tsx
import { ContactForm } from "@/components/ContactForm";
import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative mx-auto max-w-7xl py-16 md:py-24">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-6">
        <div className="inline-flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-primary" />
          <h2 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            {t("contact.title")}
          </h2>
        </div>
      </div>

      <p className="max-w-2xl mx-auto text-center text-sm text-muted-foreground mb-12 md:mb-16">
        {t("contact.intro")}
      </p>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {/* Left: message to employer */}
        <div className="rounded-xl border border-border/60 bg-background/70 p-6 shadow-sm backdrop-blur-md md:p-8">
          <p className="text-sm leading-relaxed text-muted-foreground mb-4">
            {t("contact.message.1")}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground mb-4">
            {t("contact.message.2")}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground mb-4">
            {t("contact.message.3")}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t("contact.message.4")}
          </p>
        </div>

        {/* Right: contact form */}
        <div className="rounded-xl border border-border/60 bg-background/70 p-6 shadow-sm backdrop-blur-md md:p-8">
          <ContactForm />
        </div>
      </div>
      <div className="mt-8 items-center">
        <div className="w-full h-px text-primary mt-4"/>
        <span className="text-secondary ml-8 md:ml-0">* Created by Pioter nad Perplex 2026</span>
      </div>
    </section>
  );
}
