import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Accessibility Statement",
  description: "Accessibility statement for khushbooparmar.com — our commitment to WCAG 2.2 AA compliance.",
  path: "/accessibility-statement",
});

export default function AccessibilityStatementPage() {
  return (
    <>
      <PageHeader
        title="Accessibility Statement"
        description="Our commitment to ensuring digital accessibility for people with disabilities."
        badge="WCAG 2.2 AA"
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <FadeIn>
            <section aria-labelledby="commitment-heading">
              <h2 id="commitment-heading" className="text-2xl font-bold gradient-text">Our Commitment</h2>
              <p className="text-muted-foreground">
                {siteConfig.name} is committed to ensuring digital accessibility for people with disabilities.
                We continually improve the user experience for everyone and apply the relevant accessibility
                standards to ensure we provide equal access to all users.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section aria-labelledby="conformance-heading">
              <h2 id="conformance-heading" className="text-2xl font-bold gradient-text">Conformance Status</h2>
              <p className="text-muted-foreground">
                This website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA.
                These guidelines explain how to make web content more accessible for people with disabilities
                and more user-friendly for everyone.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section aria-labelledby="measures-heading">
              <h2 id="measures-heading" className="text-2xl font-bold gradient-text">Accessibility Measures</h2>
              <p className="text-muted-foreground">We have taken the following measures to ensure accessibility:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Include accessibility as part of our mission statement and development process</li>
                <li>Integrate accessibility into our design and development workflows</li>
                <li>Provide continual accessibility training for our development team</li>
                <li>Assign clear accessibility goals and responsibilities</li>
                <li>Employ formal accessibility quality assurance methods including automated and manual testing</li>
                <li>Conduct regular accessibility audits using axe-core and manual testing with assistive technologies</li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn>
            <section aria-labelledby="features-heading">
              <h2 id="features-heading" className="text-2xl font-bold gradient-text">Accessibility Features</h2>
              <div className="grid gap-4 sm:grid-cols-2 not-prose">
                {[
                  "Keyboard navigation throughout the site",
                  "Skip navigation link to main content",
                  "Visible focus indicators on all interactive elements",
                  "Semantic HTML structure with proper heading hierarchy",
                  "ARIA labels and landmarks where appropriate",
                  "Color contrast meeting WCAG 2.2 AA requirements",
                  "Reduced motion support via prefers-reduced-motion",
                  "Dark and light mode with sufficient contrast in both",
                  "Accessible forms with proper labels and error messages",
                  "Screen reader tested with NVDA and VoiceOver",
                ].map((feature) => (
                  <Card key={feature}>
                    <CardContent className="p-4 text-sm">{feature}</CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section aria-labelledby="technologies-heading">
              <h2 id="technologies-heading" className="text-2xl font-bold gradient-text">Assistive Technologies</h2>
              <p className="text-muted-foreground">
                This website is designed to be compatible with the following assistive technologies:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Screen readers (NVDA, JAWS, VoiceOver, TalkBack)</li>
                <li>Screen magnification software</li>
                <li>Speech recognition software</li>
                <li>Keyboard-only navigation</li>
                <li>Switch control devices</li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn>
            <section aria-labelledby="feedback-heading">
              <h2 id="feedback-heading" className="text-2xl font-bold gradient-text">Feedback</h2>
              <p className="text-muted-foreground">
                We welcome your feedback on the accessibility of this website. If you encounter accessibility
                barriers, please contact us:
              </p>
              <Card className="not-prose">
                <CardHeader>
                  <CardTitle className="text-base">Contact for Accessibility Issues</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>
                    Email:{" "}
                    <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                      {siteConfig.email}
                    </a>
                  </p>
                  <p>
                    We try to respond to accessibility feedback within 2 business days and aim to resolve
                    issues within 10 business days.
                  </p>
                </CardContent>
              </Card>
            </section>
          </FadeIn>

          <FadeIn>
            <section aria-labelledby="assessment-heading">
              <h2 id="assessment-heading" className="text-2xl font-bold gradient-text">Assessment Approach</h2>
              <p className="text-muted-foreground">
                {siteConfig.name} assessed the accessibility of this website through self-evaluation using
                automated testing tools (axe-core, Lighthouse), manual testing with assistive technologies,
                and expert review against WCAG 2.2 AA success criteria.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <p className="text-sm text-muted-foreground">
              This statement was last reviewed on June 16, 2025.{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Report an accessibility issue
              </Link>
            </p>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
