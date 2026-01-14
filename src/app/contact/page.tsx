// src/app/contact/page.tsx
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="relative mx-auto max-w-7xl py-16 md:py-24">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-6">
        <h2 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
          Contact
        </h2>
      </div>

      <p className="max-w-2xl mx-auto text-center text-sm text-muted-foreground mb-12 md:mb-16">
        Let’s build something great together.
      </p>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {/* Left: message to employer */}
        <div className="rounded-xl border border-border/60 bg-background/70 p-6 shadow-sm backdrop-blur-md md:p-8">
          <p className="text-sm leading-relaxed text-muted-foreground mb-4">
            This is it — now you know a bit about me, my experience, and the
            projects I’ve built while learning modern frontend development.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground mb-4">
            I hope you enjoyed browsing my portfolio and seeing how I turn ideas
            into clean, responsive interfaces.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground mb-4">
            If you’re looking for a frontend developer who’s passionate about
            UX, performance, and clean code, I’d love to hear from you.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Feel free to reach out for more information, a chat, or to discuss
            how I can contribute to your team.
          </p>
        </div>

        {/* Right: contact form */}
        <div className="rounded-xl border border-border/60 bg-background/70 p-6 shadow-sm backdrop-blur-md md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
