import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/page-header";
import { PublicationsList } from "@/components/publications/publications-list";
import { publications } from "@/data/publications";

export const metadata: Metadata = createMetadata({
  title: "Publications",
  description:
    "Peer-reviewed research papers and journal articles by Khushboo Parmar.",
  path: "/publications",
});

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        title="Publications"
        description="Peer-reviewed research papers and journal articles in computer engineering."
        badge={`${publications.length} Publication${publications.length === 1 ? "" : "s"}`}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <PublicationsList />
      </div>
    </>
  );
}
