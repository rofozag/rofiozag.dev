// ── Navigation ────────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { id: 'home',     iconName: 'ph:house',       label: 'Home'     },
  { id: 'work',     iconName: 'ph:briefcase',   label: 'Work'     },
  { id: 'services', iconName: 'ph:stack',       label: 'Services' },
  { id: 'pricing',  iconName: 'ph:tag',         label: 'Pricing'  },
  { id: 'contact',  iconName: 'ph:envelope',    label: 'Contact'  },
] as const

export const SOCIAL_LINKS = [
  { href: 'https://github.com/rofiozag',   iconName: 'ph:github-logo',   label: 'GitHub'   },
  { href: 'https://twitter.com/rofiozag',  iconName: 'ph:x-logo',        label: 'Twitter'  },
  { href: 'https://linkedin.com/in/rofiozag', iconName: 'ph:linkedin-logo', label: 'LinkedIn' },
] as const

// ── Tech Stack ────────────────────────────────────────────────────────────────
export const TICKER_ITEMS =[
  'Next.js 14', 'TypeScript', 'Three.js', 'React Three Fiber',
  'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Paystack', 'Stripe',
  'Vercel', 'GSAP', 'Framer Motion', 'Node.js', 'Claude API', 'MongoDB',
]

// ── Services ──────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    icon:  'ph:globe',
    title: 'Landing Pages',
    desc:  'High-converting, scroll-stopping pages that turn visitors into customers.',
    price: 'from $500',
    time:  '48hrs',
  },
  {
    icon:  'ph:cube',
    title: 'SaaS MVPs',
    desc:  'Full-stack products with auth, payments, and dashboards — ready to ship.',
    price: 'from $3,000',
    time:  '1 week',
  },
  {
    icon:  'ph:storefront',
    title: 'E-commerce',
    desc:  'End-to-end stores with inventory management, payments, and admin panels.',
    price: 'from $2,000',
    time:  '5 days',
  },
  {
    icon:  'ph:cube-focus',
    title: '3D Experiences',
    desc:  'Three.js / React Three Fiber scenes that make your brand unforgettable.',
    price: 'from $1,500',
    time:  '3 days',
  },
  {
    icon:  'ph:cpu',
    title: 'AI Integration',
    desc:  'Embed GPT, Claude, or custom models directly into your product flow.',
    price: 'from $2,500',
    time:  '4 days',
  },
  {
    icon:  'ph:lightning',
    title: 'Monthly Retainer',
    desc:  'Your dedicated dev partner — priority builds, unlimited revisions, on-call.',
    price: '$1,500/mo',
    time:  'ongoing',
  },
] as const

// ── Projects ──────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    name:   'Damishades',
    tag:    'E-commerce · Supabase · Paystack',
    desc:   'Premium sunglasses brand with Paystack + crypto payments, real-time inventory, and admin panel.',
    bg:     '#0a0400',
    accent: '#C9A84C',
  },
  {
    name:   "Irene's Jewels",
    tag:    'Dropshipping · Temu Automation',
    desc:   'Luxury jewelry store with Puppeteer-based product sourcing and a 1.30× automated markup engine.',
    bg:     '#00040f',
    accent: '#5B9BD5',
  },
  {
    name:   'Kems',
    tag:    '3D · Three.js · Perfume',
    desc:   'Immersive 3D perfume landing page — glass-material bottles, environment lighting, mouse parallax.',
    bg:     '#0a0010',
    accent: '#A855F7',
  },
  {
    name:   'Moyosore.dev',
    tag:    'Portfolio · SMM · Lagos',
    desc:   'Portfolio for a Social Media Manager featuring case studies, brand voice, and animated reveals.',
    bg:     '#000f06',
    accent: '#22C55E',
  },
] as const

// ── Process ───────────────────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    n:     '01',
    title: 'Brief',
    desc:  'Fill our intake form in 5 minutes. Brand, goals, deadline — that\'s all we need.',
  },
  {
    n:     '02',
    title: 'Build',
    desc:  'AI-assisted engineering at 10× the industry speed. You track progress in real-time.',
  },
  {
    n:     '03',
    title: 'Review',
    desc:  'Get a staging link. Request changes — we iterate same-day, no extra charges.',
  },
  {
    n:     '04',
    title: 'Deploy',
    desc:  'Live on your domain with CI/CD, monitoring, and a full handover guide included.',
  },
] as const

// ── Pricing ───────────────────────────────────────────────────────────────────
export const PLANS = [
  {
    name:     'Starter',
    price:    '$500',
    featured: false,
    desc:     'Perfect for solo founders and small businesses needing a digital presence.',
    features: [
      'Landing page (up to 6 sections)',
      'Mobile responsive',
      'Contact form + Supabase',
      'Basic SEO meta tags',
      '1 revision round',
      '48hr delivery',
    ],
  },
  {
    name:     'Growth',
    price:    '$2,000',
    featured: true,
    desc:     'For businesses ready to scale with a full-featured web application.',
    features: [
      'Full multi-page site or MVP',
      'Auth + database (Supabase)',
      'Payment integration',
      'Admin dashboard',
      'SEO optimised + sitemap',
      '3 revision rounds',
      '5-day delivery',
    ],
  },
  {
    name:     'Enterprise',
    price:    'Custom',
    featured: false,
    desc:     'Complex SaaS, AI products, or 3D experiences. Let\'s scope it together.',
    features: [
      'Everything in Growth',
      '3D / React Three Fiber scenes',
      'AI feature integration',
      'Custom GSAP animations',
      'Dedicated Slack channel',
      'Priority support',
      'Retainer option available',
    ],
  },
] as const

// ── Stats ─────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: '12+',   label: 'Projects Shipped' },
  { value: '5 Days', label: 'Avg. Delivery'   },
  { value: '100%',  label: 'AI-Assisted'      },
  { value: '₦0',    label: 'Agency Overhead'  },
] as const
