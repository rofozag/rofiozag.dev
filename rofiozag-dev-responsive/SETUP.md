# rofiozag.dev — Setup Guide

## Prerequisites

| Tool | Minimum version |
|------|----------------|
| Node.js | 18.17+ |
| npm | 9+ |
| Git | any |

---

## 1 — Clone & install

```bash
git clone https://github.com/your-username/rofiozag-dev.git
cd rofiozag-dev
npm install
```

---

## 2 — Environment variables

Copy the example file and fill in your values:

```bash
cp .env.local.example .env.local
```

Open `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> **Where to find these values**
> 1. Go to [supabase.com](https://supabase.com) → your project → **Settings → API**
> 2. Copy **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
> 3. Copy **anon / public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
> 4. Copy **service_role** key → `SUPABASE_SERVICE_ROLE_KEY`

---

## 3 — Supabase database

Run the following SQL in your Supabase **SQL Editor** (Dashboard → SQL Editor → New query):

```sql
-- Contact form submissions
create table if not exists contact_submissions (
  id            bigint generated always as identity primary key,
  name          text        not null,
  email         text        not null,
  budget        text,
  service       text,
  message       text        not null,
  submitted_at  timestamptz not null default now()
);

-- Row Level Security — only service-role can read
alter table contact_submissions enable row level security;

create policy "Service role only"
  on contact_submissions
  for all
  using (false);          -- blocks anon reads; service role bypasses RLS
```

---

## 4 — Run locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 5 — Project structure

```
rofiozag-dev/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, sidebar, grain
│   ├── page.tsx            # Home page — composes all sections
│   ├── globals.css         # Global styles + Tailwind directives
│   └── api/
│       └── contact/
│           └── route.ts    # POST /api/contact — validates & inserts to Supabase
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx     # Fixed left nav, icons only, active section tracking
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx        # Hero + lazy-loaded R3F scene
│   │   ├── Ticker.tsx      # Scrolling tech stack marquee
│   │   ├── Services.tsx
│   │   ├── Work.tsx
│   │   ├── Process.tsx
│   │   ├── Pricing.tsx
│   │   ├── CTA.tsx
│   │   └── Contact.tsx     # Form → POST /api/contact
│   └── three/
│       └── HeroScene.tsx   # R3F canvas — particles + wireframe + Bloom
├── hooks/
│   ├── useActiveSection.ts # IntersectionObserver → sidebar active state
│   └── useReveal.ts        # Scroll-triggered fade-up for sections
├── lib/
│   ├── constants.ts        # All site data (nav, services, projects, etc.)
│   └── supabase/
│       ├── client.ts       # Browser Supabase client
│       └── server.ts       # Admin/service-role Supabase client
├── .env.local.example
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 6 — Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set env vars in Vercel dashboard:
# Project → Settings → Environment Variables
# Add all four vars from .env.local
```

Or connect your GitHub repo in the Vercel dashboard for automatic deployments on push.

---

## 7 — Updating content

All site content lives in **`lib/constants.ts`**:

| Export | Controls |
|--------|----------|
| `NAV_ITEMS` | Sidebar navigation |
| `SERVICES` | Services section cards |
| `PROJECTS` | Portfolio cards |
| `PROCESS_STEPS` | How-it-works steps |
| `PLANS` | Pricing tiers |
| `STATS` | Hero stat row |
| `STACK` | Ticker tech tags |
| `SOCIAL_LINKS` | Sidebar social icons |

---

## 8 — Icon reference (Iconify)

This project uses `@iconify/react` with the **Phosphor** (`ph:`) icon set.
Browse icons at [icones.js.org](https://icones.js.org) or [phosphoricons.com](https://phosphoricons.com).

Usage:
```tsx
import { Icon } from '@iconify/react'

<Icon icon="ph:house" width={20} height={20} />
```

---

## 9 — Performance notes

- The Three.js scene is **lazy-loaded** via `next/dynamic` with `ssr: false`
- Pixel ratio capped at `1.5` in the Canvas for mobile GPU relief  
- Fonts served via `next/font/google` (zero layout shift, auto-subset)
- Images should use `next/image` with proper `width` / `height` when added

---

## 10 — Customisation checklist

- [ ] Replace placeholder social links in `lib/constants.ts`
- [ ] Add real project screenshots to `/public/work/`
- [ ] Update email address in `components/sections/Contact.tsx`
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your production domain before deploying
- [ ] Add `og:image` to `app/layout.tsx` metadata once you have a social preview image
