export type ArticlePlatform = "medium" | "devto" | "linkedin";

export interface BlogArticle {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  featured: boolean;
  readingTime: string;
  url: string;
  platform: ArticlePlatform;
}

export const platformLabels: Record<ArticlePlatform, string> = {
  medium: "Medium",
  devto: "DEV",
  linkedin: "LinkedIn",
};

export const blogArticles: BlogArticle[] = [
  // Medium — @khushbupp10
  {
    id: "medium-accessible-travel",
    title: "Beyond Ramps and Elevators: The Future of Accessible Travel in the Digital Age",
    description:
      "How digital tools and inclusive design are reshaping accessible travel beyond physical infrastructure.",
    date: "2026-06-15",
    category: "Accessibility",
    tags: ["accessibility", "inclusive design", "travel"],
    featured: true,
    readingTime: "5 min read",
    url: "https://medium.com/@khushbupp10/beyond-ramps-and-elevators-the-future-of-accessible-travel-in-the-digital-age-0e56278fbdc6",
    platform: "medium",
  },
  {
    id: "medium-game-accessibility-frontier",
    title: "The Next Frontier of Game Accessibility: Understanding Players Before They Ask for Help",
    description:
      "Exploring how the gaming industry can move beyond static settings toward understanding player needs proactively.",
    date: "2026-06-11",
    category: "Accessibility",
    tags: ["gaming", "accessibility", "inclusive design"],
    featured: true,
    readingTime: "6 min read",
    url: "https://medium.com/@khushbupp10/the-next-frontier-of-game-accessibility-understanding-players-before-they-ask-for-help-ae6b6d6286d3",
    platform: "medium",
  },
  {
    id: "medium-ai-internet-accessible",
    title: "AI Will Change the Internet. But Will It Make It More Accessible?",
    description:
      "Examining whether AI-driven web experiences will improve or hinder accessibility for users with disabilities.",
    date: "2026-05-13",
    category: "AI",
    tags: ["AI", "accessibility", "web"],
    featured: true,
    readingTime: "5 min read",
    url: "https://medium.com/@khushbupp10/ai-will-change-the-internet-11bb2df6b926",
    platform: "medium",
  },
  {
    id: "medium-play-feedback-gift-card",
    title: "Play, Give Feedback, Get a Gift Card!",
    description:
      "Announcing a free accessible gaming platform that adapts to players by observing how they play — no forms required.",
    date: "2026-04-06",
    category: "Inclusive Design",
    tags: ["gaming", "accessibility", "ObservePlay"],
    featured: false,
    readingTime: "3 min read",
    url: "https://medium.com/@khushbupp10/play-give-feedback-get-a-gift-card-1dccd88b4061",
    platform: "medium",
  },
  {
    id: "medium-gaming-platform-learns",
    title: "I Built a Gaming Platform That Learns Your Accessibility Needs by Watching You Play",
    description:
      "No settings menus. No questionnaires. Just play — and the platform learns what you need.",
    date: "2026-03-30",
    category: "Inclusive Design",
    tags: ["gaming", "accessibility", "ObservePlay", "adaptive UI"],
    featured: true,
    readingTime: "5 min read",
    url: "https://medium.com/@khushbupp10/i-built-a-gaming-platform-that-learns-your-accessibility-needs-by-watching-you-play-18f84694610b",
    platform: "medium",
  },
  {
    id: "medium-ai-accessibility-hype",
    title: "AI for Accessibility: Hype vs Real Impact",
    description:
      "Cutting through the AI hype to examine what actually helps accessibility teams deliver real-world wins.",
    date: "2026-03-23",
    category: "AI",
    tags: ["AI", "accessibility", "inclusive design"],
    featured: false,
    readingTime: "4 min read",
    url: "https://medium.com/@khushbupp10/ai-for-accessibility-hype-vs-real-impact-865b46bf85ec",
    platform: "medium",
  },
  {
    id: "medium-screen-reader-testing",
    title: "How AI Can Help Screen Reader Testing",
    description:
      "How AI can complement manual screen reader testing by flagging problem areas and helping teams prioritize fixes.",
    date: "2026-03-17",
    category: "Accessibility",
    tags: ["AI", "screen readers", "testing", "a11y"],
    featured: true,
    readingTime: "5 min read",
    url: "https://medium.com/@khushbupp10/how-ai-can-help-screen-reader-testing-a15b1830016b",
    platform: "medium",
  },
  {
    id: "medium-missing-form-labels",
    title: "Missing Form Labels → Screen Readers Lose Context",
    description:
      "Why missing form labels break screen reader experiences and how to catch these issues before they ship.",
    date: "2026-03-17",
    category: "Frontend Development",
    tags: ["accessibility", "forms", "screen readers", "WCAG"],
    featured: false,
    readingTime: "3 min read",
    url: "https://medium.com/@khushbupp10/missing-form-labels-screen-readers-lose-context-96ebbe39c06a",
    platform: "medium",
  },

  // DEV — dev.to/khushboo_parmar
  {
    id: "devto-gaming-platform-observation",
    title: "I Built an Accessible Gaming Platform That Profiles Players Through Observation Instead of Settings Menus",
    description:
      "Every accessible game asks players to configure their own needs. This platform learns by watching how you play.",
    date: "2026-03-30",
    category: "Inclusive Design",
    tags: ["a11y", "gaming", "nextjs", "typescript"],
    featured: true,
    readingTime: "2 min read",
    url: "https://dev.to/khushboo_parmar/i-built-an-accessible-gaming-platform-that-profiles-players-through-observation-instead-of-settings-3g1",
    platform: "devto",
  },
  {
    id: "devto-ai-accessibility-wins",
    title: "AI-Powered Accessibility: From Hype to Real-World Wins",
    description:
      "Accessibility isn't just a checkbox — here's how AI and CI/CD can help teams catch issues before users notice.",
    date: "2026-03-23",
    category: "AI",
    tags: ["webaccessibility", "inclusivedesign", "cicd"],
    featured: true,
    readingTime: "2 min read",
    url: "https://dev.to/khushboo_parmar/ai-powered-accessibility-from-hype-to-real-world-wins-c1m",
    platform: "devto",
  },
  {
    id: "devto-accessibility-debt",
    title: "Accessibility Debt: The Hidden Technical Debt in Modern Web Applications",
    description:
      "Minor issues — missing labels, poor contrast, bad keyboard navigation — compound over time. Here's how to prevent it.",
    date: "2026-03-17",
    category: "Accessibility",
    tags: ["a11y", "technical debt", "programming"],
    featured: false,
    readingTime: "1 min read",
    url: "https://dev.to/khushboo_parmar/accessibility-debt-the-hidden-technical-debt-in-modern-web-applications-hco",
    platform: "devto",
  },
  {
    id: "devto-ada-compliance",
    title: "Automating ADA Compliance in Modern Web Apps",
    description:
      "How to automate ADA compliance with axe-core, Lighthouse, semantic HTML, and CI/CD pipelines in React apps.",
    date: "2026-03-07",
    category: "Frontend Development",
    tags: ["a11y", "automation", "react", "testing"],
    featured: true,
    readingTime: "1 min read",
    url: "https://dev.to/khushboo_parmar/automating-ada-compliance-in-modern-web-apps-1c48",
    platform: "devto",
  },

  // LinkedIn — linkedin.com/in/khushbooparmar activity
  {
    id: "linkedin-debugged-perfect-header",
    title: "Today I Debugged a Perfect Header",
    description:
      "A real-world accessibility debugging story at the intersection of frontend engineering, AI, and inclusive design.",
    date: "2025-11-28",
    category: "Accessibility",
    tags: ["accessibility", "AI", "frontend", "inclusive design"],
    featured: false,
    readingTime: "3 min read",
    url: "https://www.linkedin.com/posts/khushbooparmar_today-i-debugged-a-perfect-header-activity-7441663160534814720-fjSw",
    platform: "linkedin",
  },
  {
    id: "linkedin-broken-component",
    title: "One Broken Component Can Break Your Accessibility — Here's How to Prevent It",
    description:
      "Catch accessibility issues before they scale with CI/CD automation and axe testing in React applications.",
    date: "2025-11-22",
    category: "Frontend Development",
    tags: ["react", "accessibility", "CI/CD", "WCAG", "axe"],
    featured: false,
    readingTime: "3 min read",
    url: "https://www.linkedin.com/posts/khushbooparmar_missing-form-labels-screen-readers-lose-activity-7439505810168287233-C7O-",
    platform: "linkedin",
  },
  {
    id: "linkedin-component-based-a11y",
    title: "Why Accessibility Issues Scale in Component-Based Applications",
    description:
      "How component libraries can silently accumulate accessibility debt — and what engineering teams can do about it.",
    date: "2025-11-22",
    category: "Frontend Development",
    tags: ["react", "accessibility", "component architecture", "a11y"],
    featured: false,
    readingTime: "3 min read",
    url: "https://www.linkedin.com/posts/khushbooparmar_why-accessibility-issues-scale-in-component-based-activity-7439498969183002624-iyKz",
    platform: "linkedin",
  },
];

export function getAllBlogArticles(): BlogArticle[] {
  return [...blogArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogCategories(): string[] {
  return [...new Set(blogArticles.map((a) => a.category))];
}

export function getAllBlogTags(): string[] {
  return [...new Set(blogArticles.flatMap((a) => a.tags))];
}

export function getFeaturedBlogArticles(limit = 3): BlogArticle[] {
  return getAllBlogArticles().filter((a) => a.featured).slice(0, limit);
}

export const blogPlatforms: { value: ArticlePlatform | "all"; label: string }[] = [
  { value: "all", label: "All Platforms" },
  { value: "medium", label: "Medium" },
  { value: "devto", label: "DEV" },
  { value: "linkedin", label: "LinkedIn" },
];
