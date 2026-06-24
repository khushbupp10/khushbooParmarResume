import Link from "next/link";
import { Sparkles } from "lucide-react";
import {
  publications,
  researchInterests,
  futureResearchVision,
} from "@/data/publications";
import { Badge } from "@/components/ui/badge";
import { ResearchPipeline } from "@/components/research/research-pipeline";
import { PublicationCard } from "@/components/research/publication-card";
import { FadeIn } from "@/components/motion/fade-in";

export function ResearchHub() {
  const underReview = publications.filter((p) => p.status === "Under Review");
  const published = publications.filter((p) => p.status === "Published");

  return (
    <div className="space-y-20">
      <FadeIn>
        <ResearchPipeline />
      </FadeIn>

      {underReview.length > 0 && (
        <FadeIn>
          <section aria-labelledby="under-review-heading">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-2">
              <div>
                <h2 id="under-review-heading" className="text-2xl font-bold gradient-text">
                  Under Review
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Active submissions at leading venues in accessibility, AI, and HCI.
                </p>
              </div>
              <Badge variant="outline" className="border-accent-cyan/50 text-accent-cyan">
                {underReview.length} in review
              </Badge>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {underReview.map((pub) => (
                <PublicationCard key={pub.id} pub={pub} />
              ))}
            </div>
          </section>
        </FadeIn>
      )}

      {published.length > 0 && (
        <FadeIn>
          <section aria-labelledby="published-heading">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-2">
              <div>
                <h2 id="published-heading" className="text-2xl font-bold gradient-text">
                  Published
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Peer-reviewed papers in computer engineering and systems.
                </p>
              </div>
              <Badge variant="outline" className="border-accent-green/50 text-accent-green">
                {published.length} published
              </Badge>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {published.map((pub) => (
                <PublicationCard key={pub.id} pub={pub} />
              ))}
            </div>
          </section>
        </FadeIn>
      )}

      <FadeIn>
        <section aria-labelledby="interests-heading">
          <h2 id="interests-heading" className="text-2xl font-bold gradient-text mb-6">
            Research Interests
          </h2>
          <div className="flex flex-wrap gap-2">
            {researchInterests.map((interest) => (
              <Badge key={interest} variant="outline" className="border-primary/30 px-3 py-1 text-sm">
                {interest}
              </Badge>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section aria-labelledby="vision-heading" className="glass rounded-3xl p-8 sm:p-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Future Research Vision
          </p>
          <h2 id="vision-heading" className="mt-4 text-2xl font-bold sm:text-3xl">
            Where this research is heading
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">{futureResearchVision}</p>
          <p className="mt-6 text-sm text-muted-foreground">
            Interested in collaborating or co-authoring?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Let&apos;s connect
            </Link>
            .
          </p>
        </section>
      </FadeIn>
    </div>
  );
}
