import { Resend } from "resend";
import { siteConfig } from "@/lib/utils";

export function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export function getContactRecipient(): string {
  return process.env.CONTACT_EMAIL || siteConfig.email;
}

export function getFromEmail(): string {
  return process.env.NEWSLETTER_FROM_EMAIL || "onboarding@resend.dev";
}

/** Sender for contact-form notifications (falls back to Resend test address). */
export function getContactFromEmail(): string {
  return (
    process.env.CONTACT_FROM_EMAIL ||
    process.env.NEWSLETTER_FROM_EMAIL ||
    "onboarding@resend.dev"
  );
}

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}
