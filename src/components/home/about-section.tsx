import Link from "next/link";
import { ArrowRight, Accessibility, Code2, Brain, Heart } from "lucide-react";
import { AboutProfileVisual } from "@/components/home/about-profile-visual";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";

const focusAreas = [
  { icon: Accessibility, label: "Accessibility Engineering" },
  { icon: Code2, label: "Frontend Development" },
  { icon: Brain, label: "AI Research" },
  { icon: Heart, label: "Inclusive Technology" },
];

export function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeIn>
            <AboutProfileVisual />
          </FadeIn>

          <div>
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-cyan">About</p>
              <h2 id="about-heading" className="mt-2 text-3xl font-bold sm:text-4xl">
                <span className="gradient-text">Engineering accessibility</span> into everything
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  I&apos;m Khushboo Parmar — an Accessibility Engineer and Frontend Developer with 8+ years
                  building enterprise web applications that work for everyone. My work spans cruise, retail,
                  and automotive brands, where I&apos;ve made accessibility a foundation rather than an
                  afterthought.
                </p>
                <p>
                  Today my focus is the intersection of <strong className="text-foreground">AI and accessibility</strong> —
                  researching adaptive interfaces and personalization that respond to real human needs, and
                  writing to help teams build a more inclusive web.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {focusAreas.map((area) => (
                  <Card key={area.label} className="glass">
                    <CardContent className="flex items-center gap-3 p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <area.icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium">{area.label}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <blockquote className="mt-8 border-l-2 border-primary/40 pl-4 text-sm italic text-foreground/80">
                &ldquo;Technology should empower, not exclude. My mission is to make adaptive, AI-powered
                accessibility the default for every digital experience.&rdquo;
              </blockquote>
              <Button variant="outline" className="mt-6" asChild>
                <Link href="/about">
                  Read my full story
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
