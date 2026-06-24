"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { impactMetrics } from "@/data/impact";
import { cn } from "@/lib/utils";

function useCountUp(target: number, duration = 2000, enabled = true) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!enabled || started.current) return;
    started.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, enabled]);

  return count;
}

function MetricCard({
  label,
  value,
  suffix,
  enabled,
}: {
  label: string;
  value: number;
  suffix: string;
  enabled: boolean;
}) {
  const count = useCountUp(value, 2200, enabled);

  return (
    <div className="glass rounded-2xl p-5 text-center">
      <p className="text-3xl font-bold gradient-text sm:text-4xl" aria-live="polite">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}

export function ImpactDashboard() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <section ref={ref} aria-labelledby="impact-heading" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-cyan">Impact</p>
          <h2 id="impact-heading" className="mt-2 text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">Accessibility Impact Dashboard</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Measurable outcomes from engineering, research, audits, and community work.
          </p>
        </div>
        <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3")}>
          {impactMetrics.map((metric) => (
            <MetricCard
              key={metric.label}
              label={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              enabled={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
