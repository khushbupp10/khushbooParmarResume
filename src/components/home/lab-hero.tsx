"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Microscope, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { ResumeDownloadButton } from "@/components/shared/resume-download-button";
import { ProfileCard } from "@/components/home/profile-card";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export function LabHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Particle[] = Array.from({ length: 44 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5 + 1,
      speed: Math.random() * 0.4 + 0.1,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.y -= p.speed;
        if (p.y < 0) {
          p.y = h;
          p.x = Math.random() * w;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `oklch(0.7 0.15 195 / ${p.opacity})`;
        ctx.fill();
      }
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      className="lab-hero relative flex min-h-[92vh] items-center overflow-hidden"
      aria-labelledby="lab-hero-heading"
    >
      {!prefersReducedMotion && (
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        />
      )}
      <div className="lab-hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8">
        <div>
          <FadeIn>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Accessibility · AI · Research
            </p>
          </FadeIn>

          <h1
            id="lab-hero-heading"
            className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="gradient-text">Advancing Accessibility</span>
            <br />
            <span className="text-foreground">Through Engineering, Research</span>
            <br />
            <span className="text-foreground">&amp; AI Innovation</span>
          </h1>

          <FadeIn delay={0.15}>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              Accessibility Engineer, Frontend Developer, Researcher, and Author focused on creating
              adaptive digital experiences that work for everyone.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/projects">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/40 bg-card/30 hover:bg-primary/10"
                asChild
              >
                <Link href="/publications">
                  <Microscope className="mr-2 h-4 w-4" aria-hidden="true" />
                  View Research
                </Link>
              </Button>
              <ResumeDownloadButton size="lg" label="Download Resume" />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <ProfileCard />
        </FadeIn>
      </div>
    </section>
  );
}
