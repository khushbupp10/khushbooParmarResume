"use client";

import { type ReactNode } from "react";
import { protectedContent } from "@/lib/ip-protection";
import { ContentProtection } from "@/components/shared/content-protection";

interface ResumeProtectionProps {
  children: ReactNode;
  className?: string;
}

export function ResumeProtection({ children, className }: ResumeProtectionProps) {
  return (
    <ContentProtection
      className={className}
      sourcePath={protectedContent.resume.path}
      notice={protectedContent.resume.notice}
    >
      {children}
    </ContentProtection>
  );
}
