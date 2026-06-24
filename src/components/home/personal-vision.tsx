import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { researchAreas } from "@/data/expertise";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export function PersonalVision() {
  return (
    <section aria-labelledby="vision-heading" className="relative overflow-hidden py-24">
      <div className="vision-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Research Vision
          </p>
          <h2 id="vision-heading" className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            <span className="gradient-text">Building the Future of</span>
            <br />
            <span className="text-foreground">Adaptive Accessibility</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            I believe AI can transform digital accessibility through personalization and adaptive
            interfaces — where experiences automatically respond to each person&apos;s needs instead of
            forcing one design on everyone. My long-term goal is to make inclusive, intelligent
            accessibility the default standard for the web.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {researchAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border/60 bg-card/50 px-3 py-1.5 text-sm text-foreground/80"
              >
                {area}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/publications">
                Explore Publications & Research
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Collaborate with me</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
