import { operatingSnapshot, practiceLanes, focusAreas, techTags } from "@/data/hero";
import { stats } from "@/data/resume";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

const toneStyles = {
  peach: "bg-[oklch(0.94_0.04_55)] border-[oklch(0.88_0.06_50)]",
  sage: "bg-[oklch(0.94_0.03_155)] border-[oklch(0.86_0.04_150)]",
  sky: "bg-[oklch(0.94_0.03_230)] border-[oklch(0.86_0.04_235)]",
};

export function HeroDashboard() {
  return (
    <FadeIn delay={0.25}>
      <Card className="hero-dashboard overflow-hidden border-border/60 bg-card/90 shadow-sm">
        <CardContent className="space-y-6 p-5 sm:p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Operating Snapshot</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{operatingSnapshot}</p>
          </div>

          <div className="grid grid-cols-3 gap-3 border-y border-border/50 py-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-lg font-bold tracking-tight text-foreground sm:text-xl">{stat.value}</p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Practice Lanes
              </p>
              <ul className="space-y-3">
                {practiceLanes.map((lane) => (
                  <li key={lane.title} className="rounded-lg border border-border/50 bg-background/60 p-3">
                    <p className="text-sm font-medium">{lane.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{lane.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Focus Areas
              </p>
              <div className="grid grid-cols-2 gap-2">
                {focusAreas.map((area) => (
                  <div
                    key={area.index}
                    className={cn("rounded-lg border p-3", toneStyles[area.tone])}
                  >
                    <p className="text-[10px] font-semibold text-primary/80">{area.index}</p>
                    <p className="mt-1 text-xs font-semibold leading-snug">{area.title}</p>
                    <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 border-t border-border/50 pt-4">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
