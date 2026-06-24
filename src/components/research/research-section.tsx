import Link from "next/link";
import { Sparkles } from "lucide-react";
import { researchInterests, futureResearchVision } from "@/data/publications";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";

export function ResearchSection() {
  return (
    <FadeIn>
      <section aria-labelledby="research-section-heading" className="space-y-12">
        <div className="border-t border-border/40 pt-16">
          <h2 id="research-section-heading" className="text-3xl font-bold gradient-text">
            Research
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Interests and vision at the intersection of AI, accessibility, and inclusive design.
          </p>
        </div>

        <div aria-labelledby="interests-heading">
          <h3 id="interests-heading" className="mb-6 text-2xl font-bold gradient-text">
            Research Interests
          </h3>
          <div className="flex flex-wrap gap-2">
            {researchInterests.map((interest) => (
              <Badge key={interest} variant="outline" className="border-primary/30 px-3 py-1 text-sm">
                {interest}
              </Badge>
            ))}
          </div>
        </div>

        <div
          aria-labelledby="vision-heading"
          className="glass relative overflow-hidden rounded-3xl p-8 sm:p-10"
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-primary/20 to-accent-cyan/20 blur-3xl"
            aria-hidden="true"
          />
          <p className="relative inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Future Research Vision
          </p>
          <h3 id="vision-heading" className="relative mt-4 text-2xl font-bold sm:text-3xl">
            Where this research is heading
          </h3>
          <p className="relative mt-4 max-w-3xl text-muted-foreground">{futureResearchVision}</p>
          <p className="relative mt-6 text-sm text-muted-foreground">
            Interested in collaborating or co-authoring?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Let&apos;s connect
            </Link>
            .
          </p>
        </div>
      </section>
    </FadeIn>
  );
}
