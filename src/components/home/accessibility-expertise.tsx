import { Shield, Building2, Compass, Check } from "lucide-react";
import { expertiseGroups, type ExpertiseGroup } from "@/data/expertise";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

const iconMap: Record<ExpertiseGroup["icon"], typeof Shield> = {
  shield: Shield,
  building: Building2,
  compass: Compass,
};

export function AccessibilityExpertise() {
  return (
    <section aria-labelledby="expertise-heading" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Accessibility Expertise"
            subtitle="Deep, end-to-end expertise — from hands-on engineering to enterprise strategy and leadership."
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 lg:grid-cols-3">
          {expertiseGroups.map((group) => {
            const Icon = iconMap[group.icon];
            return (
              <StaggerItem key={group.title}>
                <Card className="glass h-full transition-all hover:border-primary/30">
                  <CardHeader>
                    <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent-cyan/20 text-primary">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <CardTitle className="text-lg">{group.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{group.summary}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {group.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 shrink-0 text-accent-green" aria-hidden="true" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
