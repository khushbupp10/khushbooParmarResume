import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/page-header";
import { PersonaSimulator } from "@/components/lab/persona-simulator";
import { AccessibilityLabPreview } from "@/components/lab/accessibility-lab-preview";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = createMetadata({
  title: "Accessibility Lab",
  description:
    "Interactive accessibility laboratory — persona simulator, WCAG case studies, and inclusive engineering solutions.",
  path: "/lab",
});

export default function LabPage() {
  return (
    <>
      <PageHeader
        title="Accessibility Lab"
        description="Experience accessibility instead of just reading about it. Switch personas, explore audits, and see real engineering solutions."
        badge="Interactive"
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-24">
        <FadeIn>
          <PersonaSimulator />
        </FadeIn>
        <AccessibilityLabPreview />
      </div>
    </>
  );
}
