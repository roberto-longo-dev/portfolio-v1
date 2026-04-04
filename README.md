# portfolio-v1

Personal portfolio — Roberto Longo. Built with Next.js 14, TypeScript, Tailwind CSS.

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist (next/font), DM Mono (Google Fonts)
- **Deployment**: Vercel

## Structure

```
app/
  page.tsx                  # Single-page portfolio (Hero, About, Skills, Projects, Contact)
  layout.tsx                # Root layout with fonts and metadata
  globals.css               # CSS variables and base styles
  projects/[slug]/          # Dynamic case study pages
components/
  sections/                 # Hero, About, Skills, Projects, Contact
  case-studies/             # BetPlatform and future case studies
  ui/                       # Shared primitives (SectionLabel, etc.)
```

## Deploy

Push to GitHub and connect the repo on [vercel.com](https://vercel.com). Zero config required.
