"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { labCaseStudies } from "@/data/lab";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

const phases = ["problem", "analysis", "implementation", "result", "impact"] as const;
const phaseLabels: Record<(typeof phases)[number], string> = {
  problem: "Problem",
  analysis: "Analysis",
  implementation: "Implementation",
  result: "Result",
  impact: "Impact",
};

function CaseStudyCard({ study }: { study: (typeof labCaseStudies)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="glass overflow-hidden transition-all hover:border-primary/30">
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          {study.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-lg">{study.title}</CardTitle>
        <div className="flex flex-wrap gap-1 mt-2">
          {study.wcagCriteria.map((c) => (
            <Badge key={c} variant="outline" className="text-[10px] font-mono">
              WCAG {c}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">Problem</p>
          <p className="mt-1 text-sm text-muted-foreground">{study.problem}</p>
        </div>

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
        >
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4" aria-hidden="true" /> Hide full case study
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" aria-hidden="true" /> View full case study
            </>
          )}
        </button>

        <div
          className={cn(
            "grid gap-4 overflow-hidden transition-all",
            expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          )}
          aria-hidden={!expanded}
        >
          {phases.slice(1).map((phase) => (
            <div key={phase}>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-green">
                {phaseLabels[phase]}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{study[phase]}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function AccessibilityLabPreview() {
  return (
    <section aria-labelledby="lab-preview-heading" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Accessibility Lab"
            subtitle="Real audits, WCAG fixes, and engineering solutions — not just theory."
          />
        </FadeIn>
        <StaggerContainer className="grid gap-6 lg:grid-cols-3">
          {labCaseStudies.map((study) => (
            <StaggerItem key={study.id}>
              <CaseStudyCard study={study} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
