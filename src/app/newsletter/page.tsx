import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Cpu, Layers, Wrench } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/utils";
import { newsletterTopics, newsletterIssues } from "@/data/newsletter";
import { PageHeader } from "@/components/shared/page-header";
import { NewsletterSignup } from "@/components/forms/newsletter-signup";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { formatDate } from "@/lib/utils";

const topicIcons = [BookOpen, Wrench, Cpu, Layers];

export const metadata: Metadata = createMetadata({
  title: "Newsletter",
  description: siteConfig.newsletter.description,
  path: "/newsletter",
});

export default function NewsletterPage() {
  return (
    <>
      <PageHeader
        title={siteConfig.newsletter.title}
        description={siteConfig.newsletter.description}
        badge="Thought Leadership"
      />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
        <FadeIn>
          <section aria-labelledby="why-subscribe-heading">
            <h2 id="why-subscribe-heading" className="text-xl font-semibold">
              Why subscribe?
            </h2>
            <p className="mt-3 text-muted-foreground">
              This isn&apos;t a generic dev newsletter. It&apos;s a monthly digest that helps you stay
              current on accessibility and AI — and demonstrates thought leadership to recruiters,
              collaborators, and the broader community.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {newsletterTopics.map((topic, index) => {
                const Icon = topicIcons[index] ?? BookOpen;
                return (
                  <Card key={topic.title}>
                    <CardHeader className="pb-2">
                      <Icon className="mb-2 h-5 w-5 text-primary" aria-hidden="true" />
                      <CardTitle className="text-base">{topic.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{topic.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <Card className="glass">
            <CardHeader className="text-center">
              <CardTitle>Subscribe</CardTitle>
              <CardDescription>
                Join developers, designers, and accessibility advocates receiving the monthly digest.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <NewsletterSignup variant="card" />
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn>
          <section aria-labelledby="recent-issues-heading">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 id="recent-issues-heading" className="text-xl font-semibold">
                Recent issues
              </h2>
              <Link href="/newsletter/archive" className="text-sm text-primary hover:underline">
                View full archive
              </Link>
            </div>
            <div className="space-y-4">
              {newsletterIssues.slice(0, 3).map((issue) => (
                <Card key={issue.id}>
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <CardTitle className="text-lg">{issue.title}</CardTitle>
                      <time dateTime={issue.date} className="text-sm text-muted-foreground">
                        {formatDate(issue.date)}
                      </time>
                    </div>
                    <CardDescription>{issue.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {issue.topics.map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
