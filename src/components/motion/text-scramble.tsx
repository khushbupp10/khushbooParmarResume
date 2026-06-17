"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&@*<>/?";

interface TextScrambleProps {
  text: string;
  className?: string;
  /** Total animation length in ms. */
  duration?: number;
  /** Delay before the scramble begins, in ms. */
  delay?: number;
}

export function TextScramble({ text, className, duration = 1500, delay = 0 }: TextScrambleProps) {
  const prefersReducedMotion = useReducedMotion();
  const [output, setOutput] = useState(text);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      setOutput(text);
      return;
    }

    const letters = text.split("");
    // Each character resolves at a staggered moment across the timeline.
    const resolveAt = letters.map(
      (_, i) => duration * 0.45 + (i / Math.max(letters.length - 1, 1)) * (duration * 0.55)
    );

    let startTime: number | null = null;
    let lastPaint = 0;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;

      // Throttle scramble repaints to ~28fps for a clean terminal feel.
      if (now - lastPaint >= 35 || elapsed >= duration) {
        lastPaint = now;
        let done = true;
        const next = letters
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (elapsed >= resolveAt[i]) return ch;
            done = false;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("");
        setOutput(next);
        if (done) {
          setOutput(text);
          return;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const timeout = window.setTimeout(() => {
      rafRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text, duration, delay, prefersReducedMotion]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{output}</span>
    </span>
  );
}
