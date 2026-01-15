// components/ContactForm.tsx
"use client";

import  { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xreebbjr"); // ←  your Form ID
  const [showSuccess, setShowSuccess] = useState(true);
  const [isFading, setIsFading] = useState(false);

  // Auto-hide with fade-out after 5 seconds
  useEffect(() => {
    if (state.succeeded && showSuccess) {
      const timer = setTimeout(() => {
        setIsFading(true);
        // Hide completely after fade-out animation
        const hideTimer = setTimeout(() => {
          setShowSuccess(false);
        }, 500); // 500ms = fade-out duration

        return () => clearTimeout(hideTimer);
      }, 5000); // 5000ms = 5 seconds

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, showSuccess]);

  const handleReset = () => {
    setShowSuccess(false);
    setIsFading(false);
  };

  if (state.succeeded && showSuccess) {
    return (
      <div
        className={`text-center space-y-4 transition-opacity duration-500 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="text-sm text-green-500">
          Message sent! I’ll get back to you soon.
        </p>
        <div className="flex justify-center gap-4 text-sm">
          <button
            type="button"
            onClick={handleReset}
            className="text-primary hover:underline"
          >
            Send another message
          </button>
          <a href="/" className="text-primary hover:underline">
            Back to app
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot */}
      <input
        type="text"
        name="_gotcha"
        className="sr-only"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
      />

      {/* Hidden subject */}
      <input type="hidden" name="_subject" value="New Message from Resume-New-App" />

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
          placeholder="Write me about..."
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
