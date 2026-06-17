import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export const siteConfig = {
  name: "Khushboo Parmar",
  title: "Frontend Engineer | Accessibility Advocate | AI Researcher",
  description:
    "Khushboo Parmar builds inclusive digital experiences at the intersection of frontend engineering, accessibility, and AI research.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://khushbooparmar.com",
  email: "Khushbooparmar1508@gmail.com",
  phone: "216-507-9712",
  links: {
    linkedin: "https://linkedin.com/in/khushbooparmar",
    github: "https://github.com/khushbupp10",
    scholar: "https://scholar.google.com/citations?user=0UHDuD8AAAAJ&hl=en",
    orcid: "https://orcid.org/0009-0006-2177-543X",
  },
  newsletter: {
    title: "Monthly Accessibility & AI Digest",
    subtitle: "Thought leadership for developers, designers, and accessibility professionals.",
    description:
      "A monthly digest on WCAG updates, accessibility tools, AI accessibility research, and inclusive design case studies — helping you stay ahead while building a more inclusive web.",
    topics: [
      "WCAG updates & implementation guides",
      "Accessibility tools & automation",
      "AI accessibility research & trends",
      "Inclusive design case studies",
    ],
  },
} as const;
