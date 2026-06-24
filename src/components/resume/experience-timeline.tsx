"use client";

import { useState } from "react";
import { ChevronDown, Sparkles, Briefcase } from "lucide-react";
import type { Experience } from "@/data/resume";
import { Badge } from "@/components/ui/badge";

function ExperienceItem({ exp, isCurrent }: { exp: Experience; isCurrent: boolean }) {
  const [open, setOpen] = useState(isCurrent);
  const panelId = `exp-panel-${exp.company.replace(/[^a-z0-9]/gi, "-").toLowerCase()}`;

  return (
    <li className="relative">
      <span
        className="absolute -left-[1.65rem] top-6 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background sm:-left-[2.15rem]"
        aria-hidden="true"
      />

      <article className="glass overflow-hidden rounded-2xl transition-colors hover:border-primary/30">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
        >
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="border-primary/30 text-xs">
                {exp.period}
              </Badge>
              {isCurrent && (
                <Badge variant="outline" className="border-accent-green/50 text-xs text-accent-green">
                  Current
                </Badge>
              )}
            </div>
            <h3 className="flex items-center gap-2 text-lg font-bold">
              <Briefcase className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {exp.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-primary">
              {exp.company}
              {exp.location ? ` · ${exp.location}` : ""}
            </p>
          </div>
          <ChevronDown
            className={`mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>

        {open && (
          <div id={panelId} className="space-y-5 px-5 pb-6 sm:px-6">
            {exp.highlights && exp.highlights.length > 0 && (
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-accent-cyan">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  Project Highlights
                </p>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h) => (
                    <li key={h} className="text-sm text-foreground/80">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Responsibilities
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/75">
                {exp.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {exp.technologies.length > 0 && (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </article>
    </li>
  );
}

export function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  return (
    <section aria-labelledby="experience-heading">
      <div className="mb-6 flex items-center justify-between">
        <h2 id="experience-heading" className="text-2xl font-bold">
          Experience
        </h2>
        <span className="text-xs text-muted-foreground">Tap a role to expand</span>
      </div>
      <div className="relative pl-6 sm:pl-8">
        <div
          className="absolute bottom-4 left-[0.4rem] top-4 w-px bg-gradient-to-b from-primary to-accent-cyan sm:left-[0.55rem]"
          aria-hidden="true"
        />
        <ol className="space-y-5">
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.company} exp={exp} isCurrent={index === 0} />
          ))}
        </ol>
      </div>
    </section>
  );
}
