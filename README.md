# Khushboo Parmar — Personal Brand Website

A production-ready premium personal website for a Frontend Engineer, Accessibility Advocate, and AI Researcher.

**Live URL:** [khushbooparmar.com](https://khushbooparmar.com)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Content:** MDX with gray-matter
- **Forms:** React Hook Form + Zod
- **Email:** Resend
- **Deployment:** Vercel

## Features

- Professional portfolio and online resume
- Accessibility expertise showcase with case studies
- AI & accessibility research hub
- Publications database with search and filtering
- MDX-powered blog with categories and tags
- Conference speaking and hackathon judging profiles
- Newsletter platform with Resend integration
- Dark mode (default) with light mode toggle
- WCAG 2.2 AA compliant
- SEO optimized with structured data, sitemap, and robots.txt
- Glassmorphism design with smooth animations
- Fully responsive mobile experience

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9+ or pnpm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/khushbooparmar/portfolio.git
cd portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

Create a `.env.local` file:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=hello@khushbooparmar.com
NEWSLETTER_FROM_EMAIL=newsletter@khushbooparmar.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> **Note:** Contact and newsletter forms work in dev mode without Resend configured — submissions are logged to the console.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── accessibility/
│   ├── accessibility-statement/
│   ├── api/                # API routes (contact, newsletter)
│   ├── blog/
│   ├── contact/
│   ├── newsletter/
│   ├── projects/
│   ├── publications/
│   ├── research/
│   ├── resume/
│   ├── speaking/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── blog/
│   ├── forms/
│   ├── home/
│   ├── layout/
│   ├── motion/
│   ├── projects/
│   ├── publications/
│   ├── shared/
│   └── ui/                 # shadcn/ui components
├── content/
│   ├── blog/               # MDX blog articles
│   └── projects/           # MDX project pages
├── data/                   # Static data (publications, speaking, etc.)
├── hooks/
└── lib/                    # Utilities, SEO, validations, MDX parsing
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in Project Settings
4. Deploy

```bash
# Or deploy via CLI
npm i -g vercel
vercel
```

### Custom Domain

1. Add `khushbooparmar.com` in Vercel Project Settings → Domains
2. Update DNS records as instructed by Vercel
3. Set `NEXT_PUBLIC_SITE_URL=https://khushbooparmar.com`

### Build Commands

```bash
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Customization

### Content

- **Blog posts:** Add `.mdx` files to `src/content/blog/`
- **Projects:** Add `.mdx` files to `src/content/projects/`
- **Publications:** Edit `src/data/publications.ts`
- **Speaking events:** Edit `src/data/speaking.ts`
- **Resume data:** Edit `src/data/resume.ts`

### Branding

- Site config: `src/lib/utils.ts` → `siteConfig`
- Colors and theme: `src/app/globals.css`
- Fonts: `src/app/layout.tsx`

### Resume PDF

Place your resume PDF at `public/resume/khushboo-parmar-resume.pdf`

### OG Image

Add a 1200×630 image at `public/og-image.png` for social sharing previews.

## Accessibility

This site is built to WCAG 2.2 AA standards:

- Semantic HTML with proper heading hierarchy
- Keyboard navigation with visible focus indicators
- Skip navigation link
- ARIA labels and landmarks
- Color contrast compliance in both themes
- Reduced motion support
- Screen reader tested
- Accessible forms with validation

See the [Accessibility Statement](/accessibility-statement) for full details.

## Performance Targets

- Lighthouse Performance: 95+
- Accessibility: 100
- SEO: 100
- Best Practices: 100

## License

MIT © Khushboo Parmar
