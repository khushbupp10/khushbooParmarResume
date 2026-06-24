"use client";

import { useId } from "react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const focusPills = ["WCAG", "AI", "Research", "Frontend"];

interface AboutProfileVisualProps {
  className?: string;
}

export function AboutProfileVisual({ className }: AboutProfileVisualProps) {
  const uid = useId().replace(/:/g, "");
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("about-profile-visual relative mx-auto w-full max-w-[300px]", className)}>
      <div
        className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-accent-cyan/15 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="glass relative overflow-hidden rounded-3xl border border-primary/25 p-6 shadow-xl">
        {/* Subtle grid */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
          aria-hidden="true"
        >
          <defs>
            <pattern id={`grid-${uid}`} width="24" height="24" patternUnits="userSpaceOnUse">
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${uid})`} />
        </svg>

        {/* Portrait frame */}
        <div className="relative mx-auto aspect-square w-full max-w-[220px]">
          <div
            className={cn(
              "absolute inset-0 rounded-2xl",
              !prefersReducedMotion && "about-profile-orbit"
            )}
            aria-hidden="true"
          >
            <svg viewBox="0 0 220 220" className="h-full w-full">
              <defs>
                <linearGradient id={`ring-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="oklch(0.55 0.2 250)" />
                  <stop offset="100%" stopColor="oklch(0.55 0.22 300)" />
                </linearGradient>
              </defs>
              <circle
                cx="110"
                cy="110"
                r="98"
                fill="none"
                stroke={`url(#ring-${uid})`}
                strokeWidth="0.75"
                strokeDasharray="4 8"
                opacity="0.45"
              />
              <circle cx="110" cy="14" r="3" fill="oklch(0.65 0.2 250)" opacity="0.8" />
              <circle cx="196" cy="110" r="2.5" fill="oklch(0.7 0.14 195)" opacity="0.7" />
              <circle cx="110" cy="206" r="2.5" fill="oklch(0.65 0.22 300)" opacity="0.7" />
              <circle cx="24" cy="110" r="2" fill="oklch(0.6 0.18 280)" opacity="0.6" />
            </svg>
          </div>

          <div className="relative flex h-full items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-accent-cyan/10 p-5">
            <svg
              viewBox="0 0 160 160"
              className="h-full w-full"
              role="img"
              aria-label="Abstract geometric portrait — accessibility researcher"
            >
              <defs>
                <linearGradient id={`portrait-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="oklch(0.55 0.2 250)" />
                  <stop offset="50%" stopColor="oklch(0.6 0.18 270)" />
                  <stop offset="100%" stopColor="oklch(0.55 0.22 300)" />
                </linearGradient>
              </defs>

              {/* Hair arc */}
              <path
                d="M48 72c6-28 28-42 52-42s46 14 52 42"
                fill="none"
                stroke={`url(#portrait-${uid})`}
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.9"
              />

              {/* Face */}
              <ellipse
                cx="80"
                cy="88"
                rx="38"
                ry="42"
                fill="oklch(0.55 0.2 250 / 0.08)"
                stroke={`url(#portrait-${uid})`}
                strokeWidth="1.5"
              />

              {/* Glasses — accessibility signature */}
              <circle
                cx="64"
                cy="86"
                r="14"
                fill="none"
                stroke={`url(#portrait-${uid})`}
                strokeWidth="2"
              />
              <circle
                cx="96"
                cy="86"
                r="14"
                fill="none"
                stroke={`url(#portrait-${uid})`}
                strokeWidth="2"
              />
              <path
                d="M78 86h4"
                stroke={`url(#portrait-${uid})`}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M50 86h-6M110 86h6"
                stroke={`url(#portrait-${uid})`}
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.6"
              />

              {/* Eyes */}
              <circle cx="64" cy="86" r="2.5" fill={`url(#portrait-${uid})`} />
              <circle cx="96" cy="86" r="2.5" fill={`url(#portrait-${uid})`} />

              {/* Smile */}
              <path
                d="M68 108c6 6 28 6 34 0"
                fill="none"
                stroke={`url(#portrait-${uid})`}
                strokeWidth="1.75"
                strokeLinecap="round"
                opacity="0.85"
              />

              {/* Lab coat / collar hint */}
              <path
                d="M52 128c8 12 48 12 56 0"
                fill="none"
                stroke={`url(#portrait-${uid})`}
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.5"
              />

              {/* Geometric accents */}
              <path
                d="M24 40 L40 56 M136 40 L120 56"
                stroke={`url(#portrait-${uid})`}
                strokeWidth="0.75"
                strokeLinecap="round"
                opacity="0.35"
              />
              <circle cx="130" cy="48" r="2" fill="oklch(0.7 0.14 195)" opacity="0.6" />
              <circle cx="30" cy="52" r="1.5" fill="oklch(0.65 0.2 280)" opacity="0.5" />
            </svg>

            {/* Corner brackets */}
            <span className="absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-accent-cyan/50" aria-hidden="true" />
            <span className="absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-primary/50" aria-hidden="true" />
            <span className="absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-primary/50" aria-hidden="true" />
            <span className="absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-accent-cyan/50" aria-hidden="true" />
          </div>
        </div>

        <div className="relative mt-6 text-center">
          <BrandLogo className="mx-auto h-10 w-10" />
          <p className="mt-3 text-lg font-bold tracking-tight gradient-text">Khushboo Parmar</p>
          <p className="mt-1 text-xs font-medium text-muted-foreground">
            Accessibility Engineer · AI Researcher
          </p>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {focusPills.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-primary/25 bg-primary/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-foreground/75"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
