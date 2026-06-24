import { LabHero } from "@/components/home/lab-hero";
import { AboutSection } from "@/components/home/about-section";
import { ImpactDashboard } from "@/components/home/impact-dashboard";
import { AccessibilityExpertise } from "@/components/home/accessibility-expertise";
import { PersonaSimulator } from "@/components/lab/persona-simulator";
import { AccessibilityLabPreview } from "@/components/lab/accessibility-lab-preview";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { PersonalVision } from "@/components/home/personal-vision";
import { FadeIn } from "@/components/motion/fade-in";

export default function HomePage() {
  return (
    <>
      <LabHero />
      <AboutSection />
      <ImpactDashboard />
      <AccessibilityExpertise />
      <section className="py-20 border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <PersonaSimulator compact />
          </FadeIn>
        </div>
      </section>
      <AccessibilityLabPreview />
      <FeaturedProjects />
      <PersonalVision />
    </>
  );
}
