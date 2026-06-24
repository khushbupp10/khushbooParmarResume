export interface ExpertiseGroup {
  title: string;
  summary: string;
  icon: "shield" | "building" | "compass";
  skills: string[];
}

export const expertiseGroups: ExpertiseGroup[] = [
  {
    title: "Accessibility Engineering",
    summary: "Building inclusive interfaces that meet and exceed compliance standards.",
    icon: "shield",
    skills: [
      "WCAG 2.1 / 2.2 Compliance",
      "ADA Compliance",
      "Accessibility Testing",
      "Screen Reader Testing",
      "Keyboard Accessibility",
      "Inclusive Design",
    ],
  },
  {
    title: "Enterprise Accessibility",
    summary: "Scaling accessibility across large organizations and design systems.",
    icon: "building",
    skills: [
      "Accessible Design Systems",
      "Accessibility Governance",
      "Accessibility Audits",
      "Remediation Strategies",
    ],
  },
  {
    title: "Accessibility Leadership",
    summary: "Driving accessibility culture, strategy, and best practices.",
    icon: "compass",
    skills: ["Accessibility Strategy", "Best Practices", "Accessibility Culture", "Team Enablement"],
  },
];

export const researchAreas = [
  "AI and Accessibility",
  "Adaptive User Interfaces",
  "Personalization",
  "Inclusive AI Systems",
  "Human-Centered Design",
] as const;
