import { siteConfig } from "./utils";

export interface PageMetadata {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
}

export function createMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
  publishedTime,
  tags,
}: PageMetadata) {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || `${siteConfig.url}/og-image.png`;

  return {
    title: path === "" ? title : `${title} | ${siteConfig.name}`,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(publishedTime && { publishedTime }),
      ...(tags && { tags }),
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/** Tighter crawler controls for pages with proprietary layout and resume content. */
export function createProtectedMetadata({
  title,
  description,
  path = "",
}: Pick<PageMetadata, "title" | "description" | "path">) {
  return {
    ...createMetadata({ title, description, path }),
    robots: {
      index: true,
      follow: true,
      nocache: true,
      noarchive: true,
      nosnippet: true,
      noimageindex: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        noarchive: true,
        nosnippet: true,
        "max-snippet": 0,
        "max-image-preview": "none" as const,
        "max-video-preview": 0,
      },
    },
    other: {
      copyright: siteConfig.name,
      author: siteConfig.name,
    },
  };
}

export function createResumeJsonLd() {
  return createProtectedWorkJsonLd({
    name: `${siteConfig.name} — Interactive Resume`,
    path: "/resume",
  });
}

export function createProtectedWorkJsonLd({
  name,
  path,
}: {
  name: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    url: `${siteConfig.url}${path}`,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    copyrightHolder: {
      "@type": "Person",
      name: siteConfig.name,
    },
    copyrightYear: new Date().getFullYear(),
    license: `${siteConfig.url}/intellectual-property`,
    isAccessibleForFree: true,
    inLanguage: "en-US",
  };
}

export function createPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: "Frontend Engineer",
    description: siteConfig.description,
    sameAs: Object.values(siteConfig.links),
    knowsAbout: [
      "Web Accessibility",
      "WCAG",
      "Frontend Engineering",
      "Artificial Intelligence",
      "Inclusive Design",
      "React",
      "TypeScript",
    ],
  };
}

export function createWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };
}

export function createArticleJsonLd({
  title,
  description,
  path,
  publishedTime,
  tags,
}: {
  title: string;
  description: string;
  path: string;
  publishedTime: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${siteConfig.url}${path}`,
    datePublished: publishedTime,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    keywords: tags?.join(", "),
  };
}
