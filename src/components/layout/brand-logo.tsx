import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md";
}

export function BrandLogo({ className, size = "md" }: BrandLogoProps) {
  const dim = size === "sm" ? "h-9 w-9" : "h-11 w-11";

  return (
    <div
      className={cn(
        "brand-logo relative shrink-0 overflow-hidden rounded-xl",
        dim,
        className
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 44 44" className="h-full w-full" fill="none">
        <defs>
          <linearGradient id="kp-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.55 0.2 250)" />
            <stop offset="100%" stopColor="oklch(0.55 0.22 300)" />
          </linearGradient>
          <linearGradient id="kp-logo-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.55 0.2 250 / 0.18)" />
            <stop offset="100%" stopColor="oklch(0.55 0.22 300 / 0.22)" />
          </linearGradient>
        </defs>

        {/* Rounded container */}
        <rect
          x="1.5"
          y="1.5"
          width="41"
          height="41"
          rx="10"
          fill="url(#kp-logo-fill)"
          stroke="url(#kp-logo-grad)"
          strokeWidth="1"
        />

        {/* Thin geometric accents */}
        <path
          d="M8 36 L36 8"
          stroke="url(#kp-logo-grad)"
          strokeWidth="0.75"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M8 8 L8 20 M36 36 L36 24"
          stroke="url(#kp-logo-grad)"
          strokeWidth="0.5"
          strokeLinecap="round"
          opacity="0.35"
        />

        {/* K — upper left */}
        <text
          x="11"
          y="21"
          fill="url(#kp-logo-grad)"
          fontSize="13"
          fontWeight="700"
          fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        >
          K
        </text>

        {/* P — lower right */}
        <text
          x="25"
          y="33"
          fill="url(#kp-logo-grad)"
          fontSize="13"
          fontWeight="700"
          fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        >
          P
        </text>
      </svg>
    </div>
  );
}
