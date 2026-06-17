import { NextResponse } from "next/server";
import { Resend } from "resend";
import { newsletterFormSchema } from "@/lib/validations";
import { siteConfig } from "@/lib/utils";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = newsletterFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { email, firstName } = result.data;

    if (!resend) {
      console.log("Newsletter signup (Resend not configured):", { email, firstName });
      return NextResponse.json({ success: true, message: "Subscribed (dev mode)" });
    }

    await resend.emails.send({
      from: process.env.NEWSLETTER_FROM_EMAIL || "onboarding@resend.dev",
      to: email,
      subject: `Welcome to ${siteConfig.newsletter.title}`,
      html: `
        <h1>Welcome${firstName ? `, ${firstName}` : ""}!</h1>
        <p>Thank you for subscribing to <strong>${siteConfig.newsletter.title}</strong>.</p>
        <p>${siteConfig.newsletter.description}</p>
        <p>You'll receive our next issue at the beginning of each month.</p>
        <p><a href="${siteConfig.url}/newsletter/confirm">Confirm your subscription</a></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
