import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDirectory = path.join(process.cwd(), "src/content");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  featured: boolean;
  readingTime: string;
  content: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: "featured" | "accessibility" | "ai" | "open-source";
  tags: string[];
  featured: boolean;
  year: string;
  role: string;
  technologies: string[];
  highlights: string[];
  links: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
  content: string;
}

function getMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
}

export function getAllBlogPosts(): BlogPost[] {
  const blogDir = path.join(contentDirectory, "blog");
  const files = getMdxFiles(blogDir);

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(blogDir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category,
        tags: data.tags || [],
        featured: data.featured || false,
        readingTime: stats.text,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = getAllBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export function getAllProjects(): Project[] {
  const projectsDir = path.join(contentDirectory, "projects");
  const files = getMdxFiles(projectsDir);

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(projectsDir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        longDescription: data.longDescription,
        category: data.category,
        tags: data.tags || [],
        featured: data.featured || false,
        year: data.year,
        role: data.role,
        technologies: data.technologies || [],
        highlights: data.highlights || [],
        links: data.links || {},
        content,
      };
    })
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));
}

export function getProjectBySlug(slug: string): Project | null {
  const projects = getAllProjects();
  return projects.find((project) => project.slug === slug) || null;
}

export function getFeaturedBlogPosts(limit = 3): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.featured).slice(0, limit);
}

export function getFeaturedProjects(limit = 3): Project[] {
  return getAllProjects().filter((project) => project.featured).slice(0, limit);
}

export function getBlogCategories(): string[] {
  const posts = getAllBlogPosts();
  return [...new Set(posts.map((post) => post.category))];
}

export function getAllBlogTags(): string[] {
  const posts = getAllBlogPosts();
  return [...new Set(posts.flatMap((post) => post.tags))];
}
