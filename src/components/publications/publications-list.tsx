"use client";

import { useState, useMemo } from "react";
import { Search, ExternalLink, Copy, Check } from "lucide-react";
import { publications, publicationTypes, type Publication, type PublicationType } from "@/data/publications";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export function PublicationsList() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<PublicationType | "all">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        search === "" ||
        pub.title.toLowerCase().includes(search.toLowerCase()) ||
        pub.authors.some((a) => a.toLowerCase().includes(search.toLowerCase())) ||
        pub.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      const matchesType = typeFilter === "all" || pub.type === typeFilter;

      return matchesSearch && matchesType;
    });
  }, [search, typeFilter]);

  async function copyCitation(pub: Publication) {
    await navigator.clipboard.writeText(pub.citation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input
            type="search"
            placeholder="Search publications..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
            aria-label="Search publications"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by publication type">
          {publicationTypes.map((type) => (
            <Button
              key={type.value}
              variant={typeFilter === type.value ? "default" : "outline"}
              size="sm"
              onClick={() => setTypeFilter(type.value)}
              aria-pressed={typeFilter === type.value}
            >
              {type.label}
            </Button>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground" aria-live="polite">
        Showing {filtered.length} of {publications.length} publications
      </p>

      <div className="grid gap-6">
        {filtered.map((pub, index) => (
          <FadeIn key={pub.id} delay={index * 0.05}>
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{pub.type}</Badge>
                      <Badge variant="outline">{pub.year}</Badge>
                      {pub.featured && <Badge variant="gradient">Featured</Badge>}
                    </div>
                    <CardTitle className="text-xl">{pub.title}</CardTitle>
                    <CardDescription>
                      {pub.authors.join(", ")} — <em>{pub.venue}</em>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{pub.abstract}</p>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {pub.doi && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={pub.url || `https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        DOI
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" onClick={() => copyCitation(pub)} aria-label={`Copy citation for ${pub.title}`}>
                    {copiedId === pub.id ? (
                      <>
                        <Check className="h-3 w-3" aria-hidden="true" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" aria-hidden="true" />
                        Copy Citation
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">No publications match your search criteria.</p>
      )}
    </div>
  );
}
