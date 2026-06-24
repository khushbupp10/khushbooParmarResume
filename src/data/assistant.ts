export interface AssistantEntry {
  keywords: string[];
  response: string;
  link?: { href: string; label: string };
}

export const assistantKnowledge: AssistantEntry[] = [
  {
    keywords: ["about", "khushboo", "who", "background", "introduce"],
    response:
      "Khushboo Parmar is an Accessibility Engineer, Frontend Developer, AI Researcher, and Author focused on inclusive technology. She has 8+ years building enterprise web applications with React, AEM, and WCAG-aligned design systems.",
    link: { href: "/about", label: "Read full story" },
  },
  {
    keywords: ["research", "papers", "publications", "academic", "scholar"],
    response:
      "Khushboo has published research on MANET energy efficiency and image compression, and is actively researching adaptive UI and AI-assisted accessibility. Explore the Research Hub for papers and citations.",
    link: { href: "/research", label: "Research Hub" },
  },
  {
    keywords: ["accessibility", "wcag", "a11y", "ada", "inclusive", "lab"],
    response:
      "Accessibility is core to everything Khushboo builds — from enterprise audits to the interactive Persona Simulator on this site. Try switching personas in the Accessibility Lab to experience UI adaptations live.",
    link: { href: "/lab", label: "Accessibility Lab" },
  },
  {
    keywords: ["projects", "work", "portfolio", "case studies"],
    response:
      "Featured projects include accessible web game research, ObservePlay profiling, and enterprise AEM/React systems for Carnival, Sherwin-Williams, and GM.",
    link: { href: "/projects", label: "View projects" },
  },
  {
    keywords: ["speaking", "talks", "workshops", "conference", "present"],
    response:
      "Khushboo has delivered 12+ talks and workshops on accessibility engineering, inclusive design, and AI research. Contact her for speaking opportunities.",
    link: { href: "/contact", label: "Book a talk" },
  },
  {
    keywords: ["resume", "experience", "skills", "hire", "job"],
    response:
      "Explore the interactive resume with timeline, skills visualization, and downloadable PDF — 8+ years across frontend, AEM, accessibility, and research.",
    link: { href: "/resume", label: "Interactive resume" },
  },
  {
    keywords: ["blog", "articles", "writing", "medium", "dev.to"],
    response:
      "Articles on accessibility, AI, inclusive design, and web development — published on Medium, DEV, and LinkedIn.",
    link: { href: "/blog", label: "Read articles" },
  },
  {
    keywords: ["newsletter", "subscribe", "digest"],
    response:
      "Subscribe to the Monthly Accessibility & AI Digest — WCAG updates, tools, research, and inclusive design case studies.",
    link: { href: "/newsletter", label: "Subscribe" },
  },
  {
    keywords: ["publications", "papers", "under review", "venue", "journal", "conference"],
    response:
      "The Publications & Research Center showcases published papers and work under review at ACM and Springer Nature, plus the research pipeline and future vision.",
    link: { href: "/research", label: "View research center" },
  },
  {
    keywords: ["contact", "email", "reach", "collaborate"],
    response:
      "Reach Khushboo via the contact form, LinkedIn, or email for collaborations, speaking, and accessibility consulting.",
    link: { href: "/contact", label: "Get in touch" },
  },
];

export const assistantPrompts = [
  "Tell me about Khushboo",
  "Show research papers",
  "Accessibility expertise",
  "View projects",
  "Publications & research",
] as const;

export function searchAssistant(query: string): AssistantEntry {
  const normalized = query.toLowerCase().trim();
  if (!normalized) {
    return {
      keywords: [],
      response:
        "Ask me about Khushboo's research, accessibility work, projects, speaking, or try the Persona Simulator in the Lab.",
    };
  }

  let best: AssistantEntry | null = null;
  let bestScore = 0;

  for (const entry of assistantKnowledge) {
    const score = entry.keywords.reduce((acc, kw) => {
      if (normalized.includes(kw)) return acc + kw.length;
      return acc;
    }, 0);
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  return (
    best ?? {
      keywords: [],
      response:
        "I couldn't find an exact match. Try asking about research, accessibility lab, projects, resume, or contact.",
      link: { href: "/lab", label: "Explore the Lab" },
    }
  );
}
