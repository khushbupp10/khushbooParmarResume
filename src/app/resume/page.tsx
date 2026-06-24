import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { ResumeActions } from "@/components/resume/resume-actions";
import { ExperienceTimeline } from "@/components/resume/experience-timeline";
import { SkillsVisualization } from "@/components/resume/skills-visualization";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { experiences, education, certifications, professionalSummary } from "@/data/resume";

export const metadata: Metadata = createMetadata({
  title: "Resume",
  description:
    "Professional resume of Khushboo Parmar — Frontend & AEM Developer with 8+ years of experience building accessible, scalable web applications.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <>
      <PageHeader
        title="Interactive Resume"
        description="Accessibility Engineer & AI Researcher — explore experience, skills, and impact. Download the full PDF anytime."
        badge="Interactive Experience"
      />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12">
            <ResumeActions />
          </div>
        </FadeIn>

        <div className="space-y-12">
          <FadeIn>
            <section aria-labelledby="summary-heading">
              <SectionHeading title="Professional Summary" />
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">{professionalSummary}</p>
                </CardContent>
              </Card>
            </section>
          </FadeIn>

          <FadeIn>
            <section aria-labelledby="skills-viz-heading">
              <SectionHeading title="Skills" />
              <SkillsVisualization />
            </section>
          </FadeIn>

          <FadeIn>
            <ExperienceTimeline experiences={experiences} />
          </FadeIn>

          {education.length > 0 && (
          <FadeIn>
            <section aria-labelledby="education-heading">
              <SectionHeading title="Education" />
              <div className="space-y-4">
                {education.map((edu) => (
                  <Card key={edu.institution}>
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg">{edu.degree}</CardTitle>
                          <p className="text-sm text-primary">{edu.institution}</p>
                        </div>
                        <span className="text-sm text-muted-foreground">{edu.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{edu.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </FadeIn>
          )}

          {certifications.length > 0 && (
          <FadeIn>
            <section aria-labelledby="certifications-heading">
              <SectionHeading title="Certifications" />
              <div className="grid gap-4 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <Card key={cert.name}>
                    <CardHeader>
                      <CardTitle className="text-sm">{cert.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      <p>{cert.issuer}</p>
                      <p>{cert.year}</p>
                      {cert.credentialId && <p className="text-xs">ID: {cert.credentialId}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </FadeIn>
          )}
        </div>
      </div>
    </>
  );
}
