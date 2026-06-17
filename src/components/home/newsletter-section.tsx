import Link from "next/link";
import { BookOpen, Cpu, Layers, Wrench } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { newsletterTopics } from "@/data/newsletter";
import { NewsletterSignup } from "@/components/forms/newsletter-signup";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const topicIcons = [BookOpen, Wrench, Cpu, Layers];

export function NewsletterSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="newsletter-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-3">
                  Thought Leadership
                </Badge>
                <h2 id="newsletter-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {siteConfig.newsletter.title}
                </h2>
                <p className="mt-3 text-muted-foreground">{siteConfig.newsletter.description}</p>
              </div>

              <p className="text-sm text-muted-foreground">
                {siteConfig.newsletter.subtitle} Subscribe to get practical insights you can share with
                your team — and position yourself as someone educating the community, not just shipping code.
              </p>

              <ul className="grid gap-3 sm:grid-cols-2">
                {newsletterTopics.map((topic, index) => {
                  const Icon = topicIcons[index] ?? BookOpen;
                  return (
                    <li key={topic.title} className="flex gap-3 rounded-lg border border-border bg-card/50 p-3">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-medium">{topic.title}</p>
                        <p className="text-xs text-muted-foreground">{topic.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg">Subscribe to the digest</CardTitle>
                <CardDescription>Monthly. No spam. Unsubscribe anytime.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <NewsletterSignup variant="card" />
                <p className="text-center text-xs text-muted-foreground">
                  <Link href="/newsletter" className="underline hover:text-primary">
                    Learn more
                  </Link>
                  {" · "}
                  <Link href="/newsletter/archive" className="underline hover:text-primary">
                    View archive
                  </Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
