"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/social-icons";
import type { Project } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn } from "@/components/motion/fade-in";

interface ProjectsGridProps {
  projects: Project[];
}

const categories = [
  { value: "all", label: "All Projects" },
  { value: "featured", label: "Featured" },
  { value: "accessibility", label: "Accessibility" },
  { value: "ai", label: "AI" },
  { value: "open-source", label: "Open Source" },
];

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? projects
      : activeTab === "featured"
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.category === activeTab);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="mb-8 flex flex-wrap h-auto gap-1" aria-label="Filter projects by category">
        {categories.map((cat) => (
          <TabsTrigger key={cat.value} value={cat.value}>
            {cat.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map((cat) => (
        <TabsContent key={cat.value} value={cat.value}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, index) => (
              <FadeIn key={project.slug} delay={index * 0.05}>
                <Card className="flex h-full flex-col">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{project.year}</Badge>
                      {project.featured && <Badge variant="gradient">Featured</Badge>}
                    </div>
                    <CardTitle>
                      <Link href={`/projects/${project.slug}`} className="hover:text-primary transition-colors">
                        {project.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/projects/${project.slug}`}>View Details</Link>
                      </Button>
                      {project.links.github && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${project.title}`}>
                            <GitHubIcon className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.links.demo && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${project.title}`}>
                            <ExternalLink className="h-4 w-4" aria-hidden="true" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
