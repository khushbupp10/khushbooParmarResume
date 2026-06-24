export interface LabCaseStudy {
  id: string;
  title: string;
  problem: string;
  analysis: string;
  implementation: string;
  result: string;
  impact: string;
  wcagCriteria: string[];
  tags: string[];
}

export const labCaseStudies: LabCaseStudy[] = [
  {
    id: "enterprise-component-library",
    title: "Enterprise Component Library Remediation",
    problem:
      "A cruise-line design system shipped without consistent focus states, missing form labels, and non-semantic interactive divs across 40+ components.",
    analysis:
      "Automated axe scans flagged 180+ violations. Manual keyboard testing revealed trap focus issues in modals and dropdowns. Screen reader traversal was inconsistent.",
    implementation:
      "Rebuilt primitives with semantic HTML, ARIA where needed, visible focus rings, and React patterns tested with NVDA and VoiceOver. Added CI accessibility checks.",
    result:
      "Reduced critical violations by 92%. All interactive components passed WCAG 2.2 AA keyboard and screen reader requirements.",
    impact: "Faster compliant releases across Carnival, Holland America, and Seabourn digital products.",
    wcagCriteria: ["1.3.1", "2.1.1", "2.4.7", "4.1.2"],
    tags: ["React", "Design Systems", "WCAG 2.2"],
  },
  {
    id: "aem-authoring-accessibility",
    title: "AEM Authoring Experience Accessibility",
    problem:
      "Content authors with low vision struggled with low-contrast authoring UI and inaccessible drag-and-drop workflows in AEM templates.",
    analysis:
      "User interviews + WCAG audit of author dialogs. Color contrast failures on form hints and disabled states. Keyboard-only authors could not complete workflows.",
    implementation:
      "Increased contrast tokens, added skip links in authoring overlays, keyboard-operable reordering, and aria-live regions for save confirmations.",
    result: "Authoring tasks completable via keyboard only. Contrast ratios met AA across all dialog states.",
    impact: "Inclusive content operations for enterprise marketing teams at scale.",
    wcagCriteria: ["1.4.3", "2.1.1", "3.3.2", "4.1.3"],
    tags: ["AEM", "Enterprise", "Authoring"],
  },
  {
    id: "adaptive-ui-research",
    title: "Adaptive UI & Observation-Based Profiling",
    problem:
      "Static accessibility preferences fail users whose needs change by context, device, or task — especially in interactive and game experiences.",
    analysis:
      "Literature review on adaptive interfaces + prototyping ObservePlay-style observation signals to infer accessibility profiles from real interaction patterns.",
    implementation:
      "Research prototypes combining WCAG patterns with lightweight profiling signals and progressive enhancement for assistive technology users.",
    result: "Demonstrated feasibility of dynamic UI adaptation without excluding screen reader users.",
    impact: "Foundation for AI-assisted inclusive design research and future publications.",
    wcagCriteria: ["1.4.4", "2.2.1", "3.1.5"],
    tags: ["AI", "Research", "Adaptive UI"],
  },
];
