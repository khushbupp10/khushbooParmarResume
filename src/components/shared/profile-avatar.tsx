interface ProfileAvatarProps {
  className?: string;
}

export function ProfileAvatar({ className }: ProfileAvatarProps) {
  return (
    <div
      className={`relative mx-auto w-36 overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-[oklch(0.96_0.05_58)] via-[oklch(0.97_0.03_75)] to-[oklch(0.95_0.04_90)] p-3 shadow-[0_8px_30px_oklch(0.6_0.1_50_/_0.12)] ${className ?? ""}`}
    >
      <svg
        viewBox="0 0 120 130"
        className="h-auto w-full"
        role="img"
        aria-label="Illustration of Khushboo Parmar — developer with glasses"
      >
        <ellipse cx="60" cy="118" rx="34" ry="6" fill="oklch(0.55 0.08 45 / 0.12)" />
        <path
          d="M28 52c2-18 16-30 32-30s30 12 32 30c2 20-8 38-32 38S26 72 28 52Z"
          fill="oklch(0.42 0.06 45)"
        />
        <path
          d="M34 48c0-14 11-24 26-24s26 10 26 24c0 16-10 28-26 28S34 64 34 48Z"
          fill="oklch(0.82 0.06 55)"
        />
        <ellipse cx="60" cy="54" rx="24" ry="26" fill="oklch(0.84 0.055 58)" />
        <path
          d="M36 38c4-10 12-16 24-16s20 6 24 16"
          fill="oklch(0.38 0.05 45)"
        />
        <circle cx="49" cy="54" r="7" fill="none" stroke="oklch(0.28 0.03 45)" strokeWidth="2.5" />
        <circle cx="71" cy="54" r="7" fill="none" stroke="oklch(0.28 0.03 45)" strokeWidth="2.5" />
        <path d="M56 54h8" stroke="oklch(0.28 0.03 45)" strokeWidth="2" strokeLinecap="round" />
        <path d="M42 54h-3M81 54h3" stroke="oklch(0.28 0.03 45)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="49" cy="54" r="2" fill="oklch(0.28 0.03 45)" />
        <circle cx="71" cy="54" r="2" fill="oklch(0.28 0.03 45)" />
        <path
          d="M50 66c3 4 17 4 20 0"
          fill="none"
          stroke="oklch(0.45 0.06 40)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <ellipse cx="42" cy="60" rx="3" ry="2" fill="oklch(0.78 0.08 45 / 0.45)" />
        <ellipse cx="78" cy="60" rx="3" ry="2" fill="oklch(0.78 0.08 45 / 0.45)" />
        <rect x="44" y="78" width="32" height="24" rx="6" fill="oklch(0.58 0.14 42)" />
        <rect x="48" y="82" width="24" height="14" rx="3" fill="oklch(0.95 0.02 75)" />
        <path d="M52 89h16M52 93h10" stroke="oklch(0.62 0.12 45)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="98" cy="28" r="3" fill="oklch(0.72 0.14 55 / 0.7)" />
        <circle cx="22" cy="34" r="2" fill="oklch(0.72 0.14 55 / 0.5)" />
        <path
          d="M90 20l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1z"
          fill="oklch(0.68 0.16 50 / 0.65)"
        />
      </svg>
      <p className="mt-1 text-center text-[11px] font-semibold tracking-wide text-primary">Khushboo</p>
    </div>
  );
}
