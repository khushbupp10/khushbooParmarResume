import type { Metadata } from "next";
import { LabHero } from "@/components/home/lab-hero";
import { AboutSection } from "@/components/home/about-section";
import { ImpactDashboard } from "@/components/home/impact-dashboard";
import { AccessibilityExpertise } from "@/components/home/accessibility-expertise";
import { PersonaSimulator } from "@/components/lab/persona-simulator";
import { AccessibilityLabPreview } from "@/components/lab/accessibility-lab-preview";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { PersonalVision } from "@/components/home/personal-vision";
import { ContentProtection } from "@/components/shared/content-protection";
import { FadeIn } from "@/components/motion/fade-in";
import { protectedContent } from "@/lib/ip-protection";
import { createProtectedMetadata, createProtectedWorkJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = createProtectedMetadata({
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const homeJsonLd = createProtectedWorkJsonLd({
    name: `${siteConfig.name} — Portfolio & Accessibility Lab`,
    path: protectedContent.home.path,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <ContentProtection
        sourcePath={protectedContent.home.path}
        notice={protectedContent.home.notice}
      >
        <LabHero />
        <AboutSection />
        <ImpactDashboard />
        <AccessibilityExpertise />
        <section className="border-t border-border/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <PersonaSimulator compact />
            </FadeIn>
          </div>
        </section>
        <AccessibilityLabPreview />
        <FeaturedProjects />
        <PersonalVision />
        <div className="pb-16" />
      </ContentProtection>
    </>
  );
}
