import { skills } from "@/data/resume";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillsVisualization() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skills.map((category) => (
        <Card key={category.category} className="glass">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-primary">{category.category}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
            <div
              className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted"
              role="presentation"
              aria-hidden="true"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent-cyan"
                style={{ width: `${Math.min(60 + category.skills.length * 8, 100)}%` }}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
