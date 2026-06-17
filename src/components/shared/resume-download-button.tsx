import { Download } from "lucide-react";
import { resumePdf } from "@/data/resume";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ResumeDownloadButtonProps extends Omit<ButtonProps, "asChild"> {
  showIcon?: boolean;
  label?: string;
}

export function ResumeDownloadButton({
  showIcon = true,
  label = "Download Resume",
  className,
  variant = "outline",
  size,
  ...props
}: ResumeDownloadButtonProps) {
  return (
    <Button variant={variant} size={size} className={cn(className)} asChild {...props}>
      <a
        href={resumePdf.path}
        download={resumePdf.filename}
        aria-label={`Download resume as PDF: ${resumePdf.filename}`}
      >
        {showIcon && <Download className="mr-2 h-4 w-4" aria-hidden="true" />}
        {label}
      </a>
    </Button>
  );
}
