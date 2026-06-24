export type PublicationStatus = "Published" | "Under Review" | "In Preparation";
export type SubmissionType = "Journal Article" | "Conference Paper" | "Workshop Paper" | "White Paper";

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  venueShort?: string;
  year: number;
  status: PublicationStatus;
  submissionType: SubmissionType;
  area: string[];
  abstract: string;
  keywords: string[];
  doi?: string;
  url?: string;
  pdfUrl?: string;
  citation?: string;
  featured?: boolean;
}

export const publications: Publication[] = [
  {
    id: "observeplay-taccess-2026",
    title:
      "ObservePlay: An AI-Assisted Framework for Observation-Based Accessibility Adaptation in Digital Games",
    authors: ["Khushboo Parmar"],
    venue: "ACM Transactions on Accessible Computing (TACCESS)",
    venueShort: "ACM TACCESS",
    year: 2026,
    status: "Under Review",
    submissionType: "Journal Article",
    area: ["Accessibility", "AI", "Digital Games", "HCI"],
    abstract:
      "Configuring accessibility settings in games is itself an accessibility barrier, especially for players unfamiliar with assistive technology or technical menus. This paper investigates whether observation-based adaptive accessibility can reduce that burden. I present ObservePlay, a web-based research prototype that infers accessibility needs from structured onboarding interaction rather than questionnaires, then applies adaptive multimodal feedback and profile-driven parameter tuning during gameplay, with real-time barrier detection when static settings are insufficient. This paper makes three primary contributions: (1) observation-based onboarding profiling across input, visual, auditory, and pacing dimensions; (2) an adaptive multimodal engine mapping inferred profiles to feedback channels and game parameters; and (3) real-time barrier detection with targeted in-play adaptations. Supporting modules (natural-language control, cooperative AI assistance, emotion-aware intervention, audio narration, and template-based game generation) are described as extensions rather than co-equal contributions. Evaluation prioritizes human-centered evidence: a formative U.S. community pilot (n=11 self-identified disabled participants), cognitive walkthrough, standards audits, and technical verification (automated tests, property tests, simulation). Results provide preliminary evidence of technical reliability and participant-reported usability, while surfacing trust and transparency concerns that informed iterative changes. I discuss limitations explicitly and outline a preregistered within-subject comparison against manual configuration to inform future controlled evaluation.",
    keywords: [
      "Observation-Based Accessibility",
      "Digital Games",
      "Adaptive Interfaces",
      "Multimodal Feedback",
      "Barrier Detection",
      "Inclusive Design",
    ],
    citation:
      "Parmar, K. (2026). ObservePlay: An AI-Assisted Framework for Observation-Based Accessibility Adaptation in Digital Games. Under review at ACM Transactions on Accessible Computing (TACCESS).",
    featured: true,
  },
  {
    id: "compliance-to-personalization-springer-2026",
    title: "From Compliance to Personalization: An AI Framework for Adaptive Accessible Web Interfaces",
    authors: ["Khushboo Parmar"],
    venue: "Springer Nature — University of Accessible",
    venueShort: "Springer Nature",
    year: 2026,
    status: "Under Review",
    submissionType: "Journal Article",
    area: ["Accessibility", "AI", "Adaptive UI", "WCAG"],
    abstract:
      "This research introduces an AI-powered personalization engine that aims to make accessibility in web interfaces more efficient while meeting ADA and WCAG compliance requirements. In contrast to the conventional one-size-fits-all strategy, the proposed system adapts dynamically interface components like layouts, fonts, colors, and buttons according to the interaction history, preferences, and accessibility requirements of individual users. The personalization engine was tested via A/B testing with 100 volunteers, including users who have visual, cognitive, and motor impairments. Outcomes showed statistically significant gains in task completion effectiveness and user satisfaction, with users with disabilities obtaining the most relative gains. The results indicate the efficacy of the system to provide inclusive, adaptive, and user-oriented web experience, and present a scalable solution to enhance digital accessibility for a wide range of user populations.",
    keywords: [
      "Personalization",
      "Adaptive Interfaces",
      "ADA Compliance",
      "WCAG",
      "A/B Testing",
      "Inclusive Design",
    ],
    citation:
      "Parmar, K. (2026). From Compliance to Personalization: An AI Framework for Adaptive Accessible Web Interfaces. Under review at Springer Nature.",
    featured: true,
  },
  {
    id: "manet-routing-energy-2015",
    title: "Comparative Analysis of Routing Protocols in MANETs for Energy Efficiency",
    authors: ["Khushboo P. Parmar", "Bhavisha Shah", "Asmita Patel", "Parita Savaliya"],
    venue: "IOSR Journal of Computer Engineering (IOSR-JCE)",
    venueShort: "IOSR-JCE",
    year: 2015,
    status: "Published",
    submissionType: "Journal Article",
    area: ["Networking", "Systems"],
    abstract:
      "A comparative study of routing protocols in Mobile Ad-hoc Networks (MANETs) with a focus on energy efficiency, evaluating protocol behavior to identify approaches that reduce energy consumption in dynamic network environments.",
    keywords: ["MANETs", "Routing Protocols", "Energy Efficiency", "Networking"],
    url: "https://scholar.google.com/citations?user=0UHDuD8AAAAJ&hl=en",
    citation:
      "Parmar, K. P., Shah, B., Patel, A., & Savaliya, P. (2015). Comparative Analysis of Routing Protocols in MANETs for Energy Efficiency. IOSR Journal of Computer Engineering (IOSR-JCE).",
  },
  {
    id: "image-compression-lossless-2015",
    title: "Survey of Image Compression Method: Lossless Approach",
    authors: [
      "Khushboo P. Parmar",
      "Diya V. Chudasama",
      "Dipali Patel",
      "Kruti J. Dangarwala",
      "Shaishav Shah",
    ],
    venue: "International Journal of Engineering Research & Technology (IJERT)",
    venueShort: "IJERT",
    year: 2015,
    status: "Published",
    submissionType: "Journal Article",
    area: ["Image Processing", "Systems"],
    abstract:
      "A survey of lossless image compression methods, reviewing techniques that reduce image size while preserving full data integrity for accurate reconstruction.",
    keywords: ["Image Compression", "Lossless Compression", "Survey"],
    url: "https://scholar.google.com/citations?user=0UHDuD8AAAAJ&hl=en",
    citation:
      "Parmar, K. P., Chudasama, D. V., Patel, D., Dangarwala, K. J., & Shah, S. (2015). Survey of Image Compression Method: Lossless Approach. International Journal of Engineering Research & Technology (IJERT), 4(3).",
  },
];

export const publicationStatuses: { value: PublicationStatus | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "Published", label: "Published" },
  { value: "Under Review", label: "Under Review" },
  { value: "In Preparation", label: "In Preparation" },
];

export const researchInterests = [
  "AI and Accessibility",
  "Adaptive User Interfaces",
  "Personalization",
  "Inclusive AI Systems",
  "Human-Centered Design",
  "WCAG 2.2 implementation patterns",
] as const;

export const futureResearchVision =
  "My research explores how AI can transform digital accessibility through personalization and adaptive interfaces — building systems that learn each person's needs and reshape experiences in real time. The long-term goal is to make inclusive, intelligent accessibility the default standard for the web, where no one has to manually configure their way into a usable experience.";

export const researchPipelineStages = [
  "Idea",
  "Draft",
  "Submitted",
  "Under Review",
  "Accepted",
  "Published",
] as const;
