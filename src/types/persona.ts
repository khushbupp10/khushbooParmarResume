export type PersonaMode =
  | "default"
  | "blind"
  | "low-vision"
  | "dyslexia"
  | "motor"
  | "cognitive";

export interface PersonaDefinition {
  id: PersonaMode;
  label: string;
  shortLabel: string;
  description: string;
  adaptations: string[];
}

export const personas: PersonaDefinition[] = [
  {
    id: "default",
    label: "Standard Experience",
    shortLabel: "Default",
    description: "The default site experience with standard typography and contrast.",
    adaptations: ["Default typography", "Standard contrast", "Full visual layout"],
  },
  {
    id: "blind",
    label: "Blind User Mode",
    shortLabel: "Blind",
    description:
      "Simulates screen-reader-first experience — enhanced focus indicators, semantic structure highlights, and reduced decorative noise.",
    adaptations: [
      "Enhanced focus rings on all interactive elements",
      "Landmark regions highlighted",
      "Decorative visuals de-emphasized",
      "Screen reader hints visible",
    ],
  },
  {
    id: "low-vision",
    label: "Low Vision Mode",
    shortLabel: "Low Vision",
    description: "Increases text size, contrast, and spacing for users with low vision.",
    adaptations: [
      "200% base font scaling",
      "High contrast palette (7:1+)",
      "Increased letter and line spacing",
      "Bold focus indicators",
    ],
  },
  {
    id: "dyslexia",
    label: "Dyslexia Mode",
    shortLabel: "Dyslexia",
    description: "Uses dyslexia-friendly typography and spacing to improve readability.",
    adaptations: [
      "OpenDyslexic-style font stack",
      "Increased line height (1.8)",
      "Wider letter spacing",
      "Shorter line lengths",
    ],
  },
  {
    id: "motor",
    label: "Motor Impairment Mode",
    shortLabel: "Motor",
    description: "Larger touch targets and enhanced keyboard navigation for motor accessibility.",
    adaptations: [
      "Minimum 48px touch targets",
      "Visible keyboard focus path",
      "Reduced hover-only interactions",
      "Skip links emphasized",
    ],
  },
  {
    id: "cognitive",
    label: "Cognitive Accessibility Mode",
    shortLabel: "Cognitive",
    description: "Simplified layout with reading aids and reduced visual complexity.",
    adaptations: [
      "Simplified color palette",
      "Reading guide overlay",
      "Reduced animations",
      "Clear section boundaries",
    ],
  },
];
