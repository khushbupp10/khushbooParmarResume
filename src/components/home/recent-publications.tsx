import { ExternalLink } from "lucide-react";
import { publications } from "@/data/publications";
import { SectionHeading } from "@/components/shared/section-heading";
import { ViewAllLink } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

export function RecentPublications() {
  const featured = publications.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-20" aria-labelledby="publications-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Recent Publications"
            subtitle="Peer-reviewed research on accessibility, inclusive AI, and adaptive interfaces."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {featured.map((pub) => (
            <StaggerItem key={pub.id}>
              <Card className="flex h-full flex-col">
                <CardHeader>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{pub.type}</Badge>
                    <Badge variant="outline">{pub.year}</Badge>
                  </div>
                  <CardTitle className="text-lg mt-2">{pub.title}</CardTitle>
                  <CardDescription>{pub.venue}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">{pub.abstract}</p>
                  {pub.doi && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={pub.url || `https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        View Paper
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ViewAllLink href="/publications" label="View all publications" />
      </div>
    </section>
  );
}
