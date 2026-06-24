import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { AboutProfileVisual } from "@/components/home/about-profile-visual";
import { ResumeDownloadButton } from "@/components/shared/resume-download-button";
import { WorkExperienceTimeline } from "@/components/shared/work-experience-timeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { experiences } from "@/data/resume";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn about Khushboo Parmar's journey as a Frontend Engineer, Accessibility Advocate, and AI Researcher.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Me"
        description="Building inclusive digital experiences through engineering excellence, accessibility advocacy, and AI research."
        badge="My Story"
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <FadeIn className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <AboutProfileVisual />
              <ResumeDownloadButton className="w-full" variant="gradient" label="Download Resume" />
            </div>
          </FadeIn>

          <div className="lg:col-span-2 space-y-12">
            <FadeIn>
              <section aria-labelledby="story-heading">
                <SectionHeading title="Personal Story" />
                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4 text-muted-foreground">
                  <p>
                    My journey into technology began with a simple observation: the web wasn&apos;t built for everyone.
                    As someone passionate about both creative problem-solving and social impact, I found my calling
                    at the intersection of frontend engineering and accessibility.
                  </p>
                  <p>
                    Over the past 8+ years, I&apos;ve dedicated my career to ensuring that digital products are
                    not just functional and beautiful, but truly inclusive. From leading enterprise accessibility
                    programs to publishing research on adaptive interfaces, every project I take on is guided by
                    the belief that technology should empower, not exclude.
                  </p>
                </div>
              </section>
            </FadeIn>

            <FadeIn>
              <section aria-labelledby="mission-heading">
                <SectionHeading title="Mission Statement" />
                <Card className="gradient-border bg-card/70">
                  <CardContent className="p-6">
                    <blockquote className="text-lg italic text-foreground">
                      &ldquo;To advance the state of inclusive technology by building accessible digital experiences,
                      conducting research on adaptive interfaces, and empowering developers to create products
                      that work for everyone.&rdquo;
                    </blockquote>
                  </CardContent>
                </Card>
              </section>
            </FadeIn>

            <FadeIn>
              <section aria-labelledby="philosophy-heading">
                <SectionHeading title="Professional Philosophy" />
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Accessibility First",
                      description: "Accessibility isn't a feature—it's a foundation. Every decision starts with inclusion.",
                    },
                    {
                      title: "Evidence-Based",
                      description: "Research and data drive decisions. Test with real users, including those with disabilities.",
                    },
                    {
                      title: "Progressive Enhancement",
                      description: "Build robust foundations that work everywhere, then enhance for capable environments.",
                    },
                    {
                      title: "Continuous Learning",
                      description: "Technology evolves rapidly. Stay curious, stay humble, and never stop learning.",
                    },
                  ].map((item) => (
                    <Card key={item.title} className="bg-card/70">
                      <CardHeader>
                        <CardTitle className="text-base">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </FadeIn>

            <FadeIn>
              <WorkExperienceTimeline experiences={experiences} descriptionLimit={2} />
            </FadeIn>
          </div>
        </div>
      </div>
    </>
  );
}
