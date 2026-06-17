import { stats } from "@/data/resume";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

export function Stats() {
  return (
    <section className="border-y border-border/40 bg-muted/30 py-16" aria-label="Career statistics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <p className="text-3xl font-bold gradient-text sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
