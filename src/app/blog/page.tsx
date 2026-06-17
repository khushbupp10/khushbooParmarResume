import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/page-header";
import { BlogList } from "@/components/blog/blog-list";
import { getAllBlogArticles, getBlogCategories, getAllBlogTags } from "@/data/blog";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Articles on accessibility, AI, inclusive design, and frontend development by Khushboo Parmar — published on Medium, DEV, and LinkedIn.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllBlogArticles();
  const categories = getBlogCategories();
  const tags = getAllBlogTags();

  return (
    <>
      <PageHeader
        title="Blog"
        description="Writing on accessibility, inclusive design, AI, and frontend engineering — published on Medium, DEV, and LinkedIn."
        badge={`${posts.length} Articles`}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <BlogList posts={posts} categories={categories} tags={tags} />
      </div>
    </>
  );
}
