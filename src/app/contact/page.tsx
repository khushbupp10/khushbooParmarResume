import type { Metadata } from "next";
import { GraduationCap, BookMarked, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons/social-icons";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/utils";
import { PageHeader } from "@/components/shared/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Get in touch with Khushboo Parmar for collaborations, speaking engagements, or inquiries.",
  path: "/contact",
});

const socialLinks = [
  { href: siteConfig.links.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  { href: siteConfig.links.github, label: "GitHub", icon: GitHubIcon },
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: MailIcon },
  { href: `tel:${siteConfig.phone.replace(/\D/g, "")}`, label: siteConfig.phone, icon: Phone },
  { href: siteConfig.links.scholar, label: "Google Scholar", icon: GraduationCap },
  { href: siteConfig.links.orcid, label: "ORCID", icon: BookMarked },
] as const;

const internalLabels = new Set(["Email", siteConfig.phone]);

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="Interested in collaboration, speaking, or have a question? I'd love to hear from you."
        badge="Let's Connect"
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <FadeIn className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Connect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    const isInternal = internalLabels.has(link.label);
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={isInternal ? undefined : "_blank"}
                        rel={isInternal ? undefined : "noopener noreferrer"}
                        className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                        {link.label}
                      </a>
                    );
                  })}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Open to Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Available for frontend engineering, AEM development, and accessibility-focused roles
                    and collaborations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
