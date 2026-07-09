import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/page-header";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Intellectual Property",
  description:
    "Copyright and usage policy for khushbooparmar.com — including the interactive resume, site design, and original content.",
  path: "/intellectual-property",
});

export default function IntellectualPropertyPage() {
  const year = new Date().getFullYear();

  return (
    <>
      <PageHeader
        title="Intellectual Property"
        description="Copyright, ownership, and permitted use of this website and its original work."
        badge="Legal"
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8 text-muted-foreground">
          <FadeIn>
            <section aria-labelledby="ownership-heading">
              <h2 id="ownership-heading" className="text-2xl font-bold gradient-text">
                Ownership
              </h2>
              <p className="mt-3 leading-relaxed">
                Unless otherwise stated, all content on {siteConfig.url} — including the site design,
                visual identity, interactive resume experience, component layouts, written copy,
                research presentation, and supporting code — is the original work of{" "}
                <strong className="text-foreground">{siteConfig.name}</strong> and is protected by
                applicable copyright and intellectual property laws.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section aria-labelledby="protected-heading">
              <h2 id="protected-heading" className="text-2xl font-bold gradient-text">
                Protected work
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                <li>The interactive resume layout, timeline, and skills presentation</li>
                <li>The homepage experience, impact dashboard, and personal brand layout</li>
                <li>The Accessibility Lab, persona simulator, and interactive demos</li>
                <li>Site branding, color system, glassmorphism UI, and page composition</li>
                <li>Original articles, publications summaries, and portfolio narratives</li>
                <li>Custom components and experience-specific interaction patterns</li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn>
            <section aria-labelledby="prohibited-heading">
              <h2 id="prohibited-heading" className="text-2xl font-bold gradient-text">
                Prohibited use
              </h2>
              <p className="mt-3 leading-relaxed">Without prior written permission, you may not:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                <li>Clone, reproduce, or republish this site&apos;s design or resume experience</li>
                <li>Use automated tools, bots, or AI systems to scrape or recreate this content</li>
                <li>Present this work as your own portfolio, template, or commercial product</li>
                <li>Remove copyright notices, watermarks, or ownership attribution</li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn>
            <section aria-labelledby="permitted-heading">
              <h2 id="permitted-heading" className="text-2xl font-bold gradient-text">
                Permitted use
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                <li>Recruiters and collaborators may review and reference this resume in hiring contexts</li>
                <li>You may share links to this website with proper attribution</li>
                <li>You may download the official PDF resume when provided for application purposes</li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn>
            <section aria-labelledby="ai-heading">
              <h2 id="ai-heading" className="text-2xl font-bold gradient-text">
                AI and automated access
              </h2>
              <p className="mt-3 leading-relaxed">
                Automated crawling for model training, template extraction, or bulk reproduction is
                not permitted. Known AI training crawlers are disallowed via{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">robots.txt</code>.
                If you operate an AI system and need licensed access, contact me directly.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section aria-labelledby="contact-heading">
              <h2 id="contact-heading" className="text-2xl font-bold gradient-text">
                Licensing requests
              </h2>
              <p className="mt-3 leading-relaxed">
                For permission to reference, adapt, or license any part of this site, email{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
              <p className="mt-4 text-sm">
                &copy; {year} {siteConfig.name}. All rights reserved.
              </p>
              <p className="mt-4">
                <Link href="/resume" className="text-primary hover:underline">
                  Back to resume
                </Link>
              </p>
            </section>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
