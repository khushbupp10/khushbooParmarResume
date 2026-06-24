"use client";

import { Check, RotateCcw } from "lucide-react";
import { personas } from "@/types/persona";
import { usePersona } from "@/components/lab/persona-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PersonaSimulatorProps {
  compact?: boolean;
}

export function PersonaSimulator({ compact = false }: PersonaSimulatorProps) {
  const { persona, setPersona, resetPersona } = usePersona();
  const active = personas.find((p) => p.id === persona) ?? personas[0];

  return (
    <section
      aria-labelledby="persona-simulator-heading"
      className={cn("relative", compact ? "space-y-4" : "space-y-8")}
    >
      <div className={compact ? "" : "text-center max-w-3xl mx-auto"}>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-cyan mb-2">
          Interactive Demo
        </p>
        <h2 id="persona-simulator-heading" className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          <span className="gradient-text">Accessibility Persona Simulator</span>
        </h2>
        {!compact && (
          <p className="mt-4 text-muted-foreground">
            Switch personas to experience how the interface adapts for blind users, low vision,
            dyslexia, motor impairments, and cognitive accessibility needs — with live explanations.
          </p>
        )}
      </div>

      <div
        role="radiogroup"
        aria-label="Select accessibility persona"
        className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3"
      >
        {personas.map((p) => {
          const isActive = persona === p.id;
          return (
            <button
              key={p.id}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => setPersona(p.id)}
              className={cn(
                "group relative rounded-xl border p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive
                  ? "border-primary bg-primary/10 shadow-[0_0_24px_oklch(0.55_0.2_280_/_0.15)]"
                  : "border-border/60 bg-card/50 hover:border-primary/40 hover:bg-card/80"
              )}
            >
              {isActive && (
                <Check className="absolute right-3 top-3 h-4 w-4 text-accent-green" aria-hidden="true" />
              )}
              <span className="block text-sm font-semibold">{p.shortLabel}</span>
              <span className="mt-1 block text-xs text-muted-foreground line-clamp-2">{p.description}</span>
            </button>
          );
        })}
      </div>

      {persona !== "default" && (
        <Card className="glass border-accent-green/30">
          <CardHeader className="pb-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <CardTitle className="text-base text-accent-green">
                Active: {active.label}
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={resetPersona}>
                <RotateCcw className="mr-1 h-3 w-3" aria-hidden="true" />
                Reset
              </Button>
            </div>
            <CardDescription>Live adaptations applied to this page:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-2 sm:grid-cols-2">
              {active.adaptations.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
