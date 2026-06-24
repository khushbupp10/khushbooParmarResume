"use client";

import { useRef, useState } from "react";
import { Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons/social-icons";
import { BrandLogo } from "@/components/layout/brand-logo";
import { resumePdf } from "@/data/resume";
import { siteConfig } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const focusTags = ["WCAG", "AI", "Research", "Frontend"];

const socialLinks = [
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    external: true,
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: siteConfig.links.github,
    external: true,
    icon: GitHubIcon,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    external: false,
    icon: MailIcon,
  },
] as const;

export function ProfileCard() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [transform, setTransform] = useState("");

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`);
  };

  const reset = () => setTransform("");

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="glass mx-auto w-full max-w-sm rounded-3xl p-7 shadow-2xl transition-transform duration-200 will-change-transform"
      style={{ transform }}
    >
      <BrandLogo className="h-12 w-12" />

      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
        Accessibility + AI Lab
      </p>

      <div className="mt-5">
        <h2 className="text-2xl font-bold tracking-tight gradient-text sm:text-3xl">
          {siteConfig.name}
        </h2>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        Building adaptive accessible experiences through AI and inclusive design.
      </p>

      <p className="mt-5 text-xs font-medium tracking-wide text-foreground/70">
        {focusTags.join(" · ")}
      </p>

      <div className="mt-6 border-t border-border/50 pt-5">
        <p className="text-2xl font-bold gradient-text">8+</p>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Years
        </p>
      </div>

      <nav
        className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/50 pt-5 text-sm font-medium"
        aria-label="Profile links"
      >
        {socialLinks.map(({ label, href, external, icon: Icon }) =>
          external ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {label}
            </a>
          ) : (
            <a
              key={label}
              href={href}
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {label}
            </a>
          )
        )}
        <a
          href={resumePdf.path}
          download={resumePdf.filename}
          className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
        >
          <Download className="h-3.5 w-3.5" aria-hidden="true" />
          Resume
        </a>
      </nav>
    </div>
  );
}
