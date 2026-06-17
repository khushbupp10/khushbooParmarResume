import { accomplishments } from "@/data/resume";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Award } from "lucide-react";

export function Accomplishments() {
  return (
    <section className="py-20" aria-labelledby="accomplishments-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Featured Accomplishments"
            subtitle="Highlights from my career at the intersection of engineering, accessibility, and research."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {accomplishments.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="h-full">
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2" aria-hidden="true" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
