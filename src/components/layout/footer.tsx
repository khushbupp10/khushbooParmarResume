import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social-icons";
import { siteConfig } from "@/lib/utils";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="py-10 sm:py-12" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col items-center gap-2 lg:items-start">
            <Link
              href="/"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-sm font-bold text-primary shadow-[0_0_20px_oklch(0.65_0.14_45_/_0.15)] transition-colors hover:bg-primary/15"
              aria-label={`${siteConfig.name} — Home`}
            >
              KP
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
