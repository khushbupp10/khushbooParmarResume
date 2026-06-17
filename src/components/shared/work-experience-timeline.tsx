import type { Experience } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";

interface WorkExperienceTimelineProps {
  experiences: Experience[];
  title?: string;
  descriptionLimit?: number;
  showTechnologies?: boolean;
}

export function WorkExperienceTimeline({
  experiences,
  title = "Work experience",
  descriptionLimit,
  showTechnologies = false,
}: WorkExperienceTimelineProps) {
  return (
    <section>
      <SectionHeading title={title} className="mb-0" />
      <div className="relative mt-8 pl-6 sm:pl-8">
        <div
          className="absolute bottom-2 left-[0.4rem] top-2 w-px bg-border/80 sm:left-[0.55rem]"
          aria-hidden="true"
        />

        <ol className="space-y-6">
          {experiences.map((exp, index) => {
            const bullets = descriptionLimit ? exp.description.slice(0, descriptionLimit) : exp.description;
            const isCurrent = index === 0;

            return (
              <li key={exp.company} className="relative">
                <span
                  className="absolute -left-6 top-7 h-3 w-3 rounded-full border-2 border-primary bg-background sm:-left-8"
                  aria-hidden="true"
                />

                <article className="experience-card rounded-2xl p-5 sm:p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="rounded-full border-0 bg-[oklch(0.94_0.05_92)] px-3 text-[11px] font-semibold uppercase tracking-wide text-foreground/80"
                    >
                      {exp.period}
                    </Badge>
                    {isCurrent && (
                      <Badge
                        variant="secondary"
                        className="rounded-full border-0 bg-[oklch(0.92_0.06_88)] px-3 text-[11px] font-semibold uppercase tracking-wide text-primary"
                      >
                        Current
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-foreground sm:text-xl">{exp.title}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {exp.company}
                    {exp.location ? ` · ${exp.location}` : ""}
                  </p>

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/75">
                    {bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  {showTechnologies && exp.technologies.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
