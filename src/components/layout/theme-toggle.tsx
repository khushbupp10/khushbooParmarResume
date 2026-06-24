"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const themeOptions = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "neon", label: "Neon Night", icon: Sparkles },
] as const;

interface ThemeToggleProps {
  compact?: boolean;
  className?: string;
}

export function ThemeToggle({ compact = false, className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const options = compact ? themeOptions.filter((o) => o.value !== "neon") : themeOptions;
  const width = compact ? "w-[72px]" : "w-[108px]";

  if (!mounted) {
    return (
      <div
        className={cn("h-9 rounded-full border border-border bg-muted/50", width, className)}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-border/60 bg-muted/40 p-0.5 backdrop-blur-sm",
        className
      )}
    >
      {options.map((option) => {
        const Icon = option.icon;
        const active = theme === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={option.label}
            title={option.label}
            onClick={() => setTheme(option.value)}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
              active
                ? "bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
