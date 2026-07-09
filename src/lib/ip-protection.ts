import { siteConfig } from "@/lib/utils";

/** Crawlers commonly used for AI training and bulk scraping. */
export const AI_TRAINING_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "anthropic-ai",
  "ClaudeBot",
  "Claude-Web",
  "CCBot",
  "Bytespider",
  "cohere-ai",
  "Diffbot",
  "Meta-ExternalAgent",
  "Applebot-Extended",
  "PerplexityBot",
  "YouBot",
  "Omgilibot",
  "ImagesiftBot",
  "FacebookBot",
] as const;

const year = new Date().getFullYear();

export const siteProtection = {
  owner: siteConfig.name,
  siteUrl: siteConfig.url,
  copyrightNotice: `© ${year} ${siteConfig.name}. All rights reserved.`,
  getSourceUrl: (path: string) => `${siteConfig.url}${path}`,
  getClipboardAttribution: (path: string) =>
    `Source: ${siteConfig.url}${path} · © ${siteConfig.name}`,
} as const;

/** @deprecated Use siteProtection — kept for existing imports */
export const resumeProtection = {
  ...siteProtection,
  resumeUrl: siteProtection.getSourceUrl("/resume"),
  clipboardAttribution: siteProtection.getClipboardAttribution("/resume"),
} as const;

export const protectedContent = {
  home: {
    path: "/",
    name: "Homepage Experience",
    notice:
      "This homepage layout, interactive sections, and visual design are original work. Unauthorized copying, cloning, scraping, or AI reproduction is prohibited.",
  },
  lab: {
    path: "/lab",
    name: "Accessibility Lab",
    notice:
      "The Accessibility Lab, persona simulator, and interactive demos are original work. Unauthorized copying, cloning, scraping, or AI reproduction is prohibited.",
  },
  resume: {
    path: "/resume",
    name: "Interactive Resume",
    notice:
      "This interactive resume, layout, and experience presentation are original work. Unauthorized copying, cloning, scraping, or AI reproduction is prohibited.",
  },
} as const;
