"use client";

import { useState } from "react";
import { Download, Share2, Check } from "lucide-react";
import { resumePdf } from "@/data/resume";
import { siteConfig } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ResumeActions() {
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    const url = `${siteConfig.url}/resume`;
    const shareData = {
      title: `${siteConfig.name} — Resume`,
      text: "Check out Khushboo Parmar's interactive resume.",
      url,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(url);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      }
    } catch {
      /* user cancelled share */
    }
  };

  return (
    <div className="flex flex-wrap justify-end gap-2 print:hidden">
      <Button variant="gradient" asChild>
        <a
          href={resumePdf.path}
          download={resumePdf.filename}
          aria-label={`Download resume as PDF: ${resumePdf.filename}`}
        >
          <Download className="mr-2 h-4 w-4" aria-hidden="true" />
          Download PDF
        </a>
      </Button>
      <Button variant="outline" onClick={handleShare}>
        {shared ? (
          <>
            <Check className="mr-2 h-4 w-4 text-accent-green" aria-hidden="true" />
            Link copied
          </>
        ) : (
          <>
            <Share2 className="mr-2 h-4 w-4" aria-hidden="true" />
            Share
          </>
        )}
      </Button>
    </div>
  );
}
