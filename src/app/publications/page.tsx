import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/page-header";
import { PublicationsList } from "@/components/publications/publications-list";
import { ResearchPipeline } from "@/components/research/research-pipeline";
import { ResearchSection } from "@/components/research/research-section";
import { FadeIn } from "@/components/motion/fade-in";
import { publications } from "@/data/publications";

export const metadata: Metadata = createMetadata({
  title: "Publications & Research",
  description:
    "Published papers, work under review, research pipeline, interests, and future vision — Khushboo Parmar's research portfolio.",
  path: "/publications",
});

export default function PublicationsPage() {
  const underReview = publications.filter((p) => p.status === "Under Review").length;
  const published = publications.filter((p) => p.status === "Published").length;

  return (
    <>
      <PageHeader
        title="Publications"
        description="Peer-reviewed papers, active submissions, and research at the intersection of accessibility, AI, and inclusive design."
        badge={`${published} published · ${underReview} in review`}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <ResearchPipeline />
        </FadeIn>

        <div className="mt-20">
          <PublicationsList />
        </div>

        <div className="mt-24">
          <ResearchSection />
        </div>
      </div>
    </>
  );
}
