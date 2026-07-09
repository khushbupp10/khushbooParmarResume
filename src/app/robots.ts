import type { MetadataRoute } from "next";
import { AI_TRAINING_BOTS } from "@/lib/ip-protection";
import { siteConfig } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...AI_TRAINING_BOTS.map((userAgent) => ({
        userAgent,
        disallow: "/" as const,
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
