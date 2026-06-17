import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { TextScramble } from "@/components/motion/text-scramble";
import { HeroDashboard } from "@/components/home/hero-dashboard";
import { heroTags, heroFocusLine } from "@/data/hero";
import { siteConfig } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" aria-labelledby="hero-heading">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div>
            <FadeIn>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Frontend &amp; AEM Developer
              </p>
            </FadeIn>

            <h1
              id="hero-heading"
              className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              <TextScramble text="KHUSHBOO" className="block gradient-text" duration={1400} delay={150} />
              <TextScramble text="PARMAR" className="block text-foreground" duration={1600} delay={350} />
            </h1>

            <FadeIn delay={0.15}>
              <div className="mt-5 flex flex-wrap gap-2">
                {heroTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-full border-primary/25 bg-background/70 px-3 py-1 text-[10px] font-semibold tracking-wider text-foreground/80 sm:text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-primary sm:text-base">
                {heroFocusLine}
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {siteConfig.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/30 bg-background/80 hover:bg-primary/5"
                  asChild
                >
                  <Link href="/projects">
                    View work
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button variant="gradient" size="lg" asChild>
                  <Link href="/blog">
                    Read the blog
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}
