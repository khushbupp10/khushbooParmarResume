import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { newsletterIssues } from "@/data/newsletter";

export const metadata: Metadata = createMetadata({
  title: "Newsletter Archive",
  description: "Archive of the Monthly Accessibility & AI Digest.",
  path: "/newsletter/archive",
});

export default function NewsletterArchivePage() {
  return (
    <>
      <PageHeader
        title="Newsletter Archive"
        description="Past issues of the Monthly Accessibility & AI Digest."
        badge="Archive"
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {newsletterIssues.map((issue, index) => (
            <FadeIn key={issue.id} delay={index * 0.05}>
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-lg">{issue.title}</CardTitle>
                      <CardDescription>{issue.description}</CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {issue.topics.map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <time dateTime={issue.date} className="text-sm text-muted-foreground whitespace-nowrap">
                      {formatDate(issue.date)}
                    </time>
                  </div>
                </CardHeader>
              </Card>
            </FadeIn>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          <Link href="/newsletter" className="underline hover:text-primary">
            Subscribe to the newsletter
          </Link>
        </p>
      </div>
    </>
  );
}
