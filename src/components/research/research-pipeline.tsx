"use client";

import { Fragment } from "react";
import { Lightbulb, PenLine, Send, Clock, CheckCircle2, BookOpenCheck, ChevronRight } from "lucide-react";
import { publications, researchPipelineStages } from "@/data/publications";

const stageIcons = [Lightbulb, PenLine, Send, Clock, CheckCircle2, BookOpenCheck];

const stageStatusMap: Record<string, string[]> = {
  "Under Review": ["Under Review"],
  Published: ["Published"],
  "In Preparation": ["Draft", "Idea"],
};

export function ResearchPipeline() {
  const countForStage = (stage: string) =>
    publications.filter((pub) => stageStatusMap[pub.status]?.includes(stage)).length;

  return (
    <section aria-labelledby="pipeline-heading">
      <h2 id="pipeline-heading" className="text-2xl font-bold gradient-text mb-2">
        Research Pipeline
      </h2>
      <p className="mb-8 text-sm text-muted-foreground">
        From early idea to peer-reviewed publication — how research moves through the pipeline.
      </p>

      <ol className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0">
        {researchPipelineStages.map((stage, i) => {
          const Icon = stageIcons[i];
          const count = countForStage(stage);
          const active = count > 0;
          return (
            <Fragment key={stage}>
              <li
                className={`glass flex flex-1 flex-col items-center rounded-2xl p-4 text-center transition-colors ${
                  active ? "border-primary/40" : "opacity-70"
                }`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    active
                      ? "bg-gradient-to-br from-primary/25 to-accent-cyan/25 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="mt-2 text-sm font-semibold">{stage}</span>
                {active && (
                  <span className="mt-1 rounded-full bg-accent-cyan/15 px-2 py-0.5 text-[11px] font-medium text-accent-cyan">
                    {count} paper{count > 1 ? "s" : ""}
                  </span>
                )}
              </li>
              {i < researchPipelineStages.length - 1 && (
                <span
                  className="hidden items-center justify-center px-1 text-muted-foreground/50 sm:flex"
                  aria-hidden="true"
                >
                  <ChevronRight className="h-4 w-4" />
                </span>
              )}
            </Fragment>
          );
        })}
      </ol>
    </section>
  );
}
