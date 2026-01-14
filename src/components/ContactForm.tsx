// components/ContactForm.tsx
"use client";


import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xreebbjr"); // ← replace with your Form ID

  if (state.succeeded) {
    return (
      <p className="text-center text-sm text-green-500">
        Message sent! I’ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot (invisible to humans) */}
      <input
        type="text"
        name="_gotcha"
        className="sr-only"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
      />

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground/90 mb-1.5"
        >
          Your Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full rounded-md border border-border/60 bg-background/60 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
          placeholder="John Doe"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground/90 mb-1.5"
        >
          Your Email
        </label>
        <input
          id="email"
          type="email"
          name="_replyto"
          required
          className="w-full rounded-md border border-border/60 bg-background/60 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
          placeholder="john@example.com"
        />
        <ValidationError
          prefix="Email"
          field="_replyto"
          errors={state.errors}
        />
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-foreground/90 mb-1.5"
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          required
          className="w-full rounded-md border border-border/60 bg-background/60 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
          placeholder="Frontend Developer Position"
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground/90 mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-md border border-border/60 bg-background/60 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40 resize-none"
          placeholder="Hi, I'd like to discuss..."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
