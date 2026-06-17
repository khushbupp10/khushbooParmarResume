import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  title: string;
  description: string;
  badge?: string;
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {badge && (
          <span className="mb-4 inline-block rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium">
            {badge}
          </span>
        )}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="gradient-text">{title}</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">{description}</p>
      </div>
    </div>
  );
}

interface ViewAllLinkProps {
  href: string;
  label?: string;
}

export function ViewAllLink({ href, label = "View all" }: ViewAllLinkProps) {
  return (
    <div className="mt-8 text-center">
      <Button variant="outline" asChild>
        <Link href={href}>
          {label}
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Link>
      </Button>
    </div>
  );
}
