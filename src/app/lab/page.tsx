import type { Metadata } from "next";
import { createProtectedMetadata, createProtectedWorkJsonLd } from "@/lib/seo";
import { PageHeader } from "@/components/shared/page-header";
import { ContentProtection } from "@/components/shared/content-protection";
import { PersonaSimulator } from "@/components/lab/persona-simulator";
import { AccessibilityLabPreview } from "@/components/lab/accessibility-lab-preview";
import { FadeIn } from "@/components/motion/fade-in";
import { protectedContent } from "@/lib/ip-protection";

export const metadata: Metadata = createProtectedMetadata({
  title: "Accessibility Lab",
  description:
    "Interactive accessibility laboratory — persona simulator, WCAG case studies, and inclusive engineering solutions.",
  path: "/lab",
});

export default function LabPage() {
  const labJsonLd = createProtectedWorkJsonLd({
    name: protectedContent.lab.name,
    path: protectedContent.lab.path,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(labJsonLd) }}
      />
      <PageHeader
        title="Accessibility Lab"
        description="Experience accessibility instead of just reading about it. Switch personas, explore audits, and see real engineering solutions."
        badge="Interactive"
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ContentProtection
          sourcePath={protectedContent.lab.path}
          notice={protectedContent.lab.notice}
        >
          <div className="space-y-24">
            <FadeIn>
              <PersonaSimulator />
            </FadeIn>
            <AccessibilityLabPreview />
          </div>
        </ContentProtection>
      </div>
    </>
  );
}
