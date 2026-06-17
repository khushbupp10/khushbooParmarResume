import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = createMetadata({
  title: "Subscription Confirmed",
  description: "Your newsletter subscription has been confirmed.",
  path: "/newsletter/confirm",
});

export default function NewsletterConfirmPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 sm:px-6 lg:px-8">
      <Card className="text-center">
        <CardHeader>
          <CheckCircle className="mx-auto h-16 w-16 text-primary" aria-hidden="true" />
          <CardTitle className="text-2xl">You&apos;re Subscribed!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Thank you for subscribing to {siteConfig.newsletter.title}. You&apos;ll receive monthly
            insights on WCAG updates, accessibility tools, AI research, and inclusive design case studies.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button variant="gradient" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/newsletter/archive">View Archive</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
