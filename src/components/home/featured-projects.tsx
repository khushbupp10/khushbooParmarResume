import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/mdx";
import { SectionHeading } from "@/components/shared/section-heading";
import { ViewAllLink } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

export function FeaturedProjects() {
  const projects = getFeaturedProjects(3);

  return (
    <section className="py-20" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Featured Projects"
            subtitle="Selected work showcasing accessibility innovation and frontend excellence."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <Card className="flex h-full flex-col">
                <CardHeader>
                  <Badge variant="outline">{project.year}</Badge>
                  <CardTitle className="mt-2">
                    <Link href={`/projects/${project.slug}`} className="hover:text-primary transition-colors">
                      {project.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    View project
                    <ArrowRight className="ml-1 h-3 w-3" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ViewAllLink href="/projects" label="View all projects" />
      </div>
    </section>
  );
}
