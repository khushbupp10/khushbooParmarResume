"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function PointerFeedback() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const rippleId = useRef(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    function handlePointerDown(event: PointerEvent) {
      if (!container) return;
      const target = event.target as HTMLElement | null;
      if (!target?.closest("button, a, [role='button'], input, textarea, select, label")) return;

      const ripple: Ripple = {
        id: rippleId.current++,
        x: event.clientX,
        y: event.clientY,
      };

      const el = document.createElement("span");
      el.className = "pointer-ripple";
      el.style.left = `${ripple.x}px`;
      el.style.top = `${ripple.y}px`;
      el.setAttribute("aria-hidden", "true");
      container.appendChild(el);

      window.setTimeout(() => el.remove(), 650);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      aria-hidden="true"
    />
  );
}
