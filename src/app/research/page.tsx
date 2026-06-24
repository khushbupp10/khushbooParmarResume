import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/page-header";
import { ResearchHub } from "@/components/research/research-hub";

export const metadata: Metadata = createMetadata({
  title: "Publications & Research Center",
  description:
    "Published papers, work under review at ACM and Springer Nature, research pipeline, interests, and future vision — Khushboo Parmar's research portfolio.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Publications & Research Center"
        description="Published papers, active submissions, and a vision for AI-powered accessibility — explore the full research pipeline."
        badge="Research"
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ResearchHub />
      </div>
    </>
  );
}
