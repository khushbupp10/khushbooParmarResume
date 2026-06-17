export interface NewsletterIssue {
  id: string;
  title: string;
  date: string;
  description: string;
  slug: string;
  topics: string[];
}

export const newsletterTopics = [
  {
    title: "WCAG Updates",
    description: "New success criteria, implementation notes, and what changed in the latest guidelines.",
  },
  {
    title: "Accessibility Tools",
    description: "axe-core, Playwright, screen readers, and automation workflows worth adopting.",
  },
  {
    title: "AI & Accessibility Research",
    description: "Emerging research on adaptive interfaces, AI-assisted testing, and inclusive AI.",
  },
  {
    title: "Inclusive Design Case Studies",
    description: "Real-world examples of accessibility wins, remediation strategies, and lessons learned.",
  },
];

export const newsletterIssues: NewsletterIssue[] = [
  {
    id: "issue-006",
    title: "WCAG 2.2 in Production: What Teams Are Getting Wrong",
    date: "2026-05-01",
    description:
      "Focus indicators, target size, and dragging movements — practical fixes from recent audits.",
    slug: "wcag-2-2-in-production",
    topics: ["WCAG Updates", "Accessibility Tools"],
  },
  {
    id: "issue-005",
    title: "AI-Assisted Screen Reader Testing: Tools & Limits",
    date: "2026-04-01",
    description:
      "Where AI helps flag issues early, and where human testers with assistive technology remain essential.",
    slug: "ai-screen-reader-testing",
    topics: ["AI & Accessibility Research", "Accessibility Tools"],
  },
  {
    id: "issue-004",
    title: "Building Accessibility Into Component Libraries",
    date: "2026-03-01",
    description:
      "Patterns for shipping accessible React/AEM components that teams actually reuse.",
    slug: "accessible-component-libraries",
    topics: ["Inclusive Design Case Studies", "WCAG Updates"],
  },
  {
    id: "issue-003",
    title: "Observation-Based Accessibility Profiling",
    date: "2026-02-01",
    description:
      "Lessons from building platforms that learn user needs through behavior, not settings menus.",
    slug: "observation-based-profiling",
    topics: ["AI & Accessibility Research", "Inclusive Design Case Studies"],
  },
  {
    id: "issue-002",
    title: "Automating WCAG Checks in CI/CD",
    date: "2026-01-01",
    description:
      "Integrating axe-core and Playwright into your pipeline without slowing down releases.",
    slug: "automating-wcag-cicd",
    topics: ["Accessibility Tools", "WCAG Updates"],
  },
  {
    id: "issue-001",
    title: "Welcome to the Accessibility & AI Digest",
    date: "2025-12-01",
    description:
      "Introducing a monthly digest for developers and advocates who want to educate the community.",
    slug: "welcome-accessibility-ai-digest",
    topics: ["WCAG Updates", "AI & Accessibility Research"],
  },
];
