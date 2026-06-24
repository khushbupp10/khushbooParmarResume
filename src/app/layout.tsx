import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SkipNav } from "@/components/layout/skip-nav";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PointerFeedback } from "@/components/interaction/pointer-feedback";
import { CursorGlow } from "@/components/interaction/cursor-glow";
import { PersonaProvider } from "@/components/lab/persona-provider";
import { AiAssistant } from "@/components/assistant/ai-assistant";
import { createMetadata, createPersonJsonLd, createWebsiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/utils";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = createMetadata({
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: siteConfig.description,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = createPersonJsonLd();
  const websiteJsonLd = createWebsiteJsonLd();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          themes={["light", "dark", "neon"]}
        >
          <PersonaProvider>
            <CursorGlow />
            <PointerFeedback />
            <SkipNav />
            <Header />
            <main id="main-content" tabIndex={-1} className="relative z-10">
              {children}
            </main>
            <Footer />
            <AiAssistant />
          </PersonaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
