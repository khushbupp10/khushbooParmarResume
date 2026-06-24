import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { getContactFromEmail, getContactRecipient, getResendClient } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const resend = getResendClient();
    if (!resend) {
      console.error(
        "Contact form: RESEND_API_KEY is not set. Add it to .env.local (local) or Vercel environment variables (production)."
      );
      return NextResponse.json(
        {
          error:
            "Email service is not configured yet. Please email me directly at Khushbooparmar1508@gmail.com.",
        },
        { status: 503 }
      );
    }

    const { name, email, subject, message } = result.data;

    const { data, error } = await resend.emails.send({
      from: getContactFromEmail(),
      to: getContactRecipient(),
      replyTo: email,
      subject: `[Contact] ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error("Resend contact error:", error);
      const isDev = process.env.NODE_ENV === "development";
      let detail = "Failed to send message. Please try again or email me directly.";
      if (isDev) {
        if (error.message === "API key is invalid") {
          detail =
            "Invalid RESEND_API_KEY in .env.local — create a new key at resend.com/api-keys";
        } else if (error.message?.includes("domain")) {
          detail =
            "Sender domain not verified in Resend — verify khushbooparmar.com or set CONTACT_FROM_EMAIL=onboarding@resend.dev in .env.local";
        }
      }
      return NextResponse.json({ error: detail }, { status: 500 });
    }

    if (process.env.NODE_ENV === "development" && data?.id) {
      console.log("Contact email queued:", { id: data.id, to: getContactRecipient() });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
