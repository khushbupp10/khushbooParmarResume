"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { newsletterFormSchema, type NewsletterFormData } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface NewsletterSignupProps {
  variant?: "inline" | "card";
}

export function NewsletterSignup({ variant = "inline" }: NewsletterSignupProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterFormSchema),
  });

  async function onSubmit(data: NewsletterFormData) {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to subscribe");
      }

      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-primary/30 bg-primary/10 p-4" role="status">
        <CheckCircle className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
        <p className="text-sm">You&apos;re subscribed! Check your email to confirm.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={variant === "inline" ? "flex flex-col gap-3 sm:flex-row" : "space-y-4"}
      noValidate
      aria-label="Newsletter signup"
    >
      {variant === "card" && (
        <div className="space-y-2">
          <Label htmlFor="newsletter-first-name">First Name (optional)</Label>
          <Input id="newsletter-first-name" {...register("firstName")} placeholder="Your first name" />
        </div>
      )}

      <div className={variant === "card" ? "space-y-2" : "flex-1"}>
        {variant === "card" && <Label htmlFor="newsletter-email">Email</Label>}
        <Input
          id="newsletter-email"
          type="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "newsletter-email-error" : undefined}
          placeholder="you@example.com"
          aria-label={variant === "inline" ? "Email address for newsletter" : undefined}
        />
        {errors.email && (
          <p id="newsletter-email-error" className="mt-1 text-sm text-destructive" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-destructive" role="alert">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {errorMessage}
        </div>
      )}

      <Button type="submit" variant="gradient" disabled={status === "loading"} className={variant === "inline" ? "shrink-0" : "w-full"}>
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Subscribing...
          </>
        ) : (
          "Subscribe"
        )}
      </Button>
    </form>
  );
}
