"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import {
  publications,
  publicationStatuses,
  type PublicationStatus,
} from "@/data/publications";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PublicationCard } from "@/components/research/publication-card";
import { FadeIn } from "@/components/motion/fade-in";

export function PublicationsList() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<PublicationStatus | "all">("all");

  const filtered = useMemo(() => {
    return publications.filter((pub) => {
      const q = search.toLowerCase();
      const matchesSearch =
        q === "" ||
        pub.title.toLowerCase().includes(q) ||
        pub.authors.some((a) => a.toLowerCase().includes(q)) ||
        pub.keywords.some((t) => t.toLowerCase().includes(q)) ||
        pub.area.some((a) => a.toLowerCase().includes(q));
      const matchesStatus = statusFilter === "all" || pub.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="Search by title, author, keyword, or area..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
            aria-label="Search publications"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by status">
          {publicationStatuses.map((status) => (
            <Button
              key={status.value}
              variant={statusFilter === status.value ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter(status.value)}
              aria-pressed={statusFilter === status.value}
            >
              {status.label}
            </Button>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground" aria-live="polite">
        Showing {filtered.length} of {publications.length} publications
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((pub, index) => (
          <FadeIn key={pub.id} delay={index * 0.05}>
            <PublicationCard pub={pub} />
          </FadeIn>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">
          No publications match your search criteria.
        </p>
      )}
    </div>
  );
}
