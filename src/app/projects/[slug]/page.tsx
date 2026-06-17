import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/social-icons";
import { createMetadata } from "@/lib/seo";
import { getAllProjects, getProjectBySlug } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return createMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
        Back to Projects
      </Link>

      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline">{project.year}</Badge>
          <Badge variant="secondary">{project.category}</Badge>
          {project.featured && <Badge variant="gradient">Featured</Badge>}
        </div>
        <h1 className="text-4xl font-bold tracking-tight gradient-text">{project.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.longDescription}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.demo && (
            <Button variant="gradient" asChild>
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                Live Demo
              </a>
            </Button>
          )}
          {project.links.github && (
            <Button variant="outline" asChild>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="mr-2 h-4 w-4" />
                View Source
              </a>
            </Button>
          )}
        </div>
      </header>

      <Separator className="my-8" />

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 prose prose-neutral dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: project.content.replace(/\n/g, "<br/>") }} />
        </div>

        <aside className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <span className="font-medium">Role</span>
                <p className="text-muted-foreground">{project.role}</p>
              </div>
              <div>
                <span className="font-medium">Technologies</span>
                <div className="mt-2 flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Key Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </aside>
      </div>
    </article>
  );
}
