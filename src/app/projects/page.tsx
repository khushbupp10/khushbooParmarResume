import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/page-header";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { getAllProjects } from "@/lib/mdx";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description:
    "Portfolio of accessibility projects, AI research tools, and open source contributions by Khushboo Parmar.",
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <PageHeader
        title="Projects"
        description="A curated portfolio of accessibility innovations, AI research tools, and open source contributions."
        badge={`${projects.length} Projects`}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ProjectsGrid projects={projects} />
      </div>
    </>
  );
}
