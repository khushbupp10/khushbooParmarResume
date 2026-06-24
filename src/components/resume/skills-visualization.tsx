import {
  Accessibility,
  Building2,
  Code2,
  Layers,
} from "lucide-react";
import { skills } from "@/data/resume";
import { cn } from "@/lib/utils";

const domains = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Code2,
    categories: ["Frontend & Web Technologies", "Programming Languages"],
    accent: "border-accent-cyan/50 bg-accent-cyan/5",
    iconClass: "text-accent-cyan",
  },
  {
    id: "accessibility",
    label: "Accessibility",
    icon: Accessibility,
    categories: ["Accessibility", "Tools & Testing"],
    accent: "border-accent-green/50 bg-accent-green/5",
    iconClass: "text-accent-green",
  },
  {
    id: "enterprise",
    label: "Enterprise",
    icon: Building2,
    categories: ["AEM & CMS", "Cloud & DevOps", "Databases", "Version Control"],
    accent: "border-primary/40 bg-primary/5",
    iconClass: "text-primary",
  },
  {
    id: "practices",
    label: "Delivery & Systems",
    icon: Layers,
    categories: ["Methodologies", "Operating Systems"],
    accent: "border-border/80 bg-muted/30",
    iconClass: "text-muted-foreground",
  },
] as const;

function skillsForCategories(categoryNames: readonly string[]) {
  const names = new Set(categoryNames);
  const merged = skills
    .filter((group) => names.has(group.category))
    .flatMap((group) => group.skills);
  return [...new Set(merged)];
}

export function SkillsVisualization() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {domains.map((domain) => {
        const Icon = domain.icon;
        const items = skillsForCategories(domain.categories);

        return (
          <div
            key={domain.id}
            className={cn(
              "glass rounded-2xl border-l-[3px] p-4 sm:p-5",
              domain.accent
            )}
          >
            <div className="mb-3 flex items-center gap-2.5">
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background/60",
                  domain.iconClass
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <h3 className="text-sm font-bold tracking-tight">{domain.label}</h3>
              <span className="ml-auto text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                {items.length} skills
              </span>
            </div>

            <ul className="flex flex-wrap gap-1.5" aria-label={`${domain.label} skills`}>
              {items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-border/50 bg-background/50 px-2 py-0.5 text-[11px] font-medium text-foreground/85"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
