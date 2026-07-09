"use client";

import { useCallback, type ReactNode } from "react";
import { Shield } from "lucide-react";
import { siteProtection } from "@/lib/ip-protection";
import { cn } from "@/lib/utils";

interface ContentProtectionProps {
  children: ReactNode;
  className?: string;
  sourcePath: string;
  notice: string;
  showNotice?: boolean;
}

export function ContentProtection({
  children,
  className,
  sourcePath,
  notice,
  showNotice = true,
}: ContentProtectionProps) {
  const sourceUrl = siteProtection.getSourceUrl(sourcePath);

  const handleCopy = useCallback(
    (event: React.ClipboardEvent<HTMLDivElement>) => {
      const selection = window.getSelection()?.toString().trim();
      if (!selection) return;

      event.clipboardData.setData(
        "text/plain",
        `${selection}\n\n— ${siteProtection.getClipboardAttribution(sourcePath)}`
      );
      event.preventDefault();
    },
    [sourcePath]
  );

  return (
    <div
      className={cn("content-protected", className)}
      data-owner={siteProtection.owner}
      data-source={sourceUrl}
      data-nosnippet
      translate="no"
      onCopy={handleCopy}
    >
      {children}

      {showNotice && (
        <aside
          className="mx-auto mt-10 max-w-4xl rounded-xl border border-border/60 bg-muted/20 px-4 py-3 text-center text-xs leading-relaxed text-muted-foreground sm:text-sm"
          aria-label="Copyright and usage notice"
        >
          <p className="flex items-center justify-center gap-2 font-medium text-foreground/80">
            <Shield className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            {siteProtection.copyrightNotice}
          </p>
          <p className="mt-2">
            {notice}{" "}
            <a
              href="/intellectual-property"
              className="text-primary underline-offset-4 hover:underline"
            >
              Intellectual property policy
            </a>
          </p>
        </aside>
      )}
    </div>
  );
}
