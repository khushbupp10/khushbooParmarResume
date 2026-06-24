import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social-icons";
import { BrandLogo } from "@/components/layout/brand-logo";
import { siteConfig } from "@/lib/utils";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="py-10 sm:py-12" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <Link
              href="/"
              className="group flex items-center gap-3 rounded-xl outline-offset-4 transition-opacity hover:opacity-95"
              aria-label={`${siteConfig.name} — Home`}
            >
              <BrandLogo size="sm" />
              <div className="text-left">
                <p className="text-sm font-bold tracking-tight gradient-text">{siteConfig.name}</p>
                <p className="text-xs text-muted-foreground">
                  Accessibility Engineer · AI Researcher
                </p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {siteConfig.name}
            </p>
            <Link
              href="/accessibility-statement"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Accessibility statement
            </Link>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-sm font-semibold text-foreground">
              {footerNav.map((item, index) => (
                <li key={item.href} className="flex items-center">
                  {index > 0 && (
                    <span className="mx-2 text-muted-foreground/50" aria-hidden="true">
                      /
                    </span>
                  )}
                  <Link href={item.href} className="transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 transition-colors hover:text-primary"
              aria-label="GitHub profile"
            >
              <GitHubIcon />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 transition-colors hover:text-primary"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
