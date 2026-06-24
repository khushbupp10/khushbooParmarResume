"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn, siteConfig } from "@/lib/utils";
import { BrandLogo } from "./brand-logo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";

const mainNavItems = [
  { href: "/", label: "Home" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Blog" },
] as const;

function NavLink({
  href,
  label,
  pathname,
  onClick,
  className,
}: {
  href: string;
  label: string;
  pathname: string;
  onClick?: () => void;
  className?: string;
}) {
  const active = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
        active ? "bg-primary/10 text-primary" : "text-muted-foreground",
        className
      )}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full pt-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="site-header glass rounded-2xl border border-border/50 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-5 sm:py-4">
          {/* Brand row */}
          <div className="flex items-start justify-between gap-4">
            <Link
              href="/"
              className="group flex min-w-0 items-center gap-3 rounded-xl outline-offset-4 transition-opacity hover:opacity-95"
              aria-label={`${siteConfig.name} — Home`}
            >
              <BrandLogo />
              <div className="min-w-0">
                <p className="flex items-center gap-2 truncate text-base font-bold tracking-tight sm:text-lg">
                  <span className="gradient-text">{siteConfig.name}</span>
                  <span
                    className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] sm:inline-block"
                    aria-hidden="true"
                  />
                </p>
                <p className="truncate text-xs text-muted-foreground sm:text-sm">
                  Accessibility Engineer · AI Researcher
                </p>
              </div>
            </Link>

            <div className="flex shrink-0 items-center gap-2 lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Desktop nav row */}
          <div className="mt-3 hidden items-center justify-between gap-4 border-t border-border/40 pt-3 lg:flex">
            <nav className="flex flex-wrap items-center gap-0.5" aria-label="Main navigation">
              {mainNavItems.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} pathname={pathname} />
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <NavLink
                href="/contact"
                label="Contact"
                pathname={pathname}
                className={pathname === "/contact" ? "" : "text-foreground/80"}
              />
              <ThemeToggle compact />
            </div>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="mx-4 mt-2 rounded-2xl border border-border/50 bg-card/90 p-2 shadow-lg backdrop-blur-xl lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                pathname={pathname}
                onClick={() => setMobileOpen(false)}
                className="block w-full"
              />
            ))}
            <NavLink
              href="/contact"
              label="Contact"
              pathname={pathname}
              onClick={() => setMobileOpen(false)}
              className="block w-full"
            />
          </div>
          <div className="mt-3 flex justify-center border-t border-border/40 pt-3">
            <ThemeToggle compact />
          </div>
        </nav>
      )}
    </header>
  );
}
