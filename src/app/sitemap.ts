import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/mdx";
import { siteConfig } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = [
    "",
    "/lab",
    "/publications",
    "/projects",
    "/blog",
    "/newsletter",
    "/newsletter/archive",
    "/resume",
    "/contact",
    "/accessibility-statement",
    "/intellectual-property",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projects = getAllProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projects];
}
