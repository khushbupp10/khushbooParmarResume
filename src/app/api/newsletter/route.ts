import { NextResponse } from "next/server";
import { newsletterFormSchema } from "@/lib/validations";
import { siteConfig } from "@/lib/utils";
import { getFromEmail, getResendClient } from "@/lib/email";

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

    const resend = getResendClient();
    if (!resend) {
      console.error("Newsletter: RESEND_API_KEY is not set.");
      return NextResponse.json(
        { error: "Email service is not configured yet. Please try again later." },
        { status: 503 }
      );
    }

    const { email, firstName } = result.data;

    const { error } = await resend.emails.send({
      from: getFromEmail(),
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

    if (error) {
      console.error("Resend newsletter error:", error);
      return NextResponse.json({ error: "Failed to subscribe. Please try again later." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
