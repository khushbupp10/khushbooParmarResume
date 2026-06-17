# Deploy to khushbooparmar.com

## Quick deploy (Vercel — recommended)

### 1. Push to GitHub

```bash
cd /Users/kpa5958/Documents/KPPortfolio
git init
git add .
git commit -m "Initial portfolio site for khushbooparmar.com"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Import on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Framework preset: **Next.js** (auto-detected)
4. Add environment variables:

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://khushbooparmar.com` |
| `CONTACT_EMAIL` | `Khushbooparmar1508@gmail.com` |
| `NEWSLETTER_FROM_EMAIL` | `Khushbooparmar1508@gmail.com` |
| `RESEND_API_KEY` | Your Resend API key |

5. Click **Deploy**

### 3. Connect your domain

1. In Vercel → Project → **Settings** → **Domains**
2. Add `khushbooparmar.com` and `www.khushbooparmar.com`
3. Update DNS at your domain registrar:

**If using Vercel nameservers (easiest):**
- Point domain nameservers to Vercel's (shown in dashboard)

**If keeping current DNS:**
```
A     @    76.76.21.21
CNAME www  cname.vercel-dns.com
```

4. Wait for SSL certificate (usually 1–5 minutes)

### 4. Verify

- https://khushbooparmar.com loads
- https://khushbooparmar.com/sitemap.xml
- Contact form works (requires Resend key)
- Newsletter signup works (requires Resend key)

## CLI deploy (alternative)

```bash
npm i -g vercel
vercel login
vercel --prod
```

Follow prompts, then add domain in Vercel dashboard.

## Post-deploy checklist

- [ ] `NEXT_PUBLIC_SITE_URL=https://khushbooparmar.com` set in Vercel
- [ ] Custom domain connected with SSL
- [ ] Resend API key configured for contact + newsletter
- [ ] Add resume PDF at `public/resume/khushboo-parmar-resume.pdf`
- [ ] Add OG image at `public/og-image.png` (1200×630)
- [ ] Test all pages on mobile
- [ ] Run Lighthouse audit

## Resend setup (for forms)

1. Create account at [resend.com](https://resend.com)
2. Add and verify domain `khushbooparmar.com`
3. Create API key → add to Vercel env as `RESEND_API_KEY`
