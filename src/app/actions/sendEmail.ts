// app/actions/sendEmail.ts
"use server";

import { contactSchema } from "@/lib/form-schema";

import nodemailer from "nodemailer";

type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function sendEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const result = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!result.success) {
    return {
      ...prevState,
      success: false,
      message: "Please fix the errors below.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = result.data;

  // Spam protection
  const lowerEmail = email.toLowerCase();
  const disposableDomains = [
    "tempmail.com",
    "10minutemail.com",
    "guerrillamail.com",
    "mailinator.com",
  ];
  if (disposableDomains.some((domain) => lowerEmail.endsWith(`@${domain}`))) {
    return {
      ...prevState,
      success: false,
      message: "Please use a permanent email address.",
    };
  }

  const honeypot = formData.get("website");
  if (honeypot) {
    return {
      ...prevState,
      success: false,
      message: "Spam detected.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USERNAME,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject} from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from your portfolio contact form.
      `.trim(),
    });

    return {
      ...prevState,
      success: true,
      message: "Message sent! I’ll get back to you soon.",
    };
  } catch (error) {
    console.error("Email error:", error);
    return {
      ...prevState,
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
