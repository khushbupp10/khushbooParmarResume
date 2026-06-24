"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink, FileText, Clock, CheckCircle2 } from "lucide-react";
import type { Publication } from "@/data/publications";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function PublicationCard({ pub }: { pub: Publication }) {
  const [open, setOpen] = useState(false);
  const isUnderReview = pub.status === "Under Review";

  return (
    <Card className="glass flex h-full flex-col transition-colors hover:border-primary/30">
      <CardHeader>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Badge
            variant="outline"
            className={
              isUnderReview
                ? "border-accent-cyan/50 text-accent-cyan"
                : "border-accent-green/50 text-accent-green"
            }
          >
            {isUnderReview ? (
              <Clock className="mr-1 h-3 w-3" aria-hidden="true" />
            ) : (
              <CheckCircle2 className="mr-1 h-3 w-3" aria-hidden="true" />
            )}
            {pub.status}
          </Badge>
          <Badge variant="secondary">{pub.submissionType}</Badge>
          <Badge variant="outline">{pub.year}</Badge>
        </div>
        <CardTitle className="text-lg leading-snug">{pub.title}</CardTitle>
        <CardDescription>
          {pub.status === "Under Review" ? "Submitted to " : ""}
          <span className="font-medium text-foreground/80">{pub.venue}</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4">
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
          <div>
            <dt className="text-muted-foreground">Venue</dt>
            <dd className="font-medium">{pub.venueShort ?? pub.venue}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Area</dt>
            <dd className="font-medium">{pub.area.join(" · ")}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Type</dt>
            <dd className="font-medium">{pub.submissionType}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Year</dt>
            <dd className="font-medium">{pub.year}</dd>
          </div>
        </dl>

        <div className="flex flex-wrap gap-1">
          {pub.keywords.map((kw) => (
            <Badge key={kw} variant="outline" className="text-xs">
              {kw}
            </Badge>
          ))}
        </div>

        {open && (
          <div className="rounded-lg border border-border/60 bg-card/40 p-3 text-sm leading-relaxed text-muted-foreground">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-foreground/70">
              Abstract
            </p>
            {pub.abstract}
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
            {open ? "Hide Abstract" : "View Abstract"}
          </Button>

          {pub.url && (
            <Button variant="outline" size="sm" asChild>
              <a href={pub.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                {pub.status === "Under Review" ? "View Submission" : "View Paper"}
              </a>
            </Button>
          )}

          {pub.pdfUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                PDF
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
