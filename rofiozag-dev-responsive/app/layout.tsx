import type { Metadata, Viewport } from 'next'
import { Syne, DM_Mono, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/layout/Sidebar'

// ── Fonts ─────────────────────────────────────────────────────────────────────
const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
  weight: ['400', '500'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
})

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: 'rofiozag.dev — AI-Powered Software Development',
    template: '%s | rofiozag.dev',
  },
  description:
    'We build high-performance web applications, 3D experiences, and AI-powered platforms — from idea to deployment in days.',
  keywords: [
    'software development', 'Next.js', 'React', 'Three.js', 'AI development',
    'web agency', 'Nigeria', 'SaaS', 'e-commerce',
  ],
  authors:  [{ name: 'rofiozag.dev', url: 'https://rofiozag.dev' }],
  creator:  'rofiozag.dev',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rofiozag.dev'),
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://rofiozag.dev',
    title:       'rofiozag.dev — AI-Powered Software Development',
    description: 'From idea to deployed product in days, not months.',
    siteName:    'rofiozag.dev',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'rofiozag.dev — AI-Powered Software Development',
    description: 'From idea to deployed product in days, not months.',
    creator:     '@rofiozag',
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport: Viewport = {
  themeColor: '#060606',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// ── Layout ────────────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmMono.variable} ${cormorant.variable}`}
    >
      <body className="font-sans antialiased bg-bg text-text overflow-x-hidden">
        {/* Grain overlay */}
        <div className="grain" aria-hidden="true" />

        {/* Sidebar — desktop left / mobile bottom */}
        <Sidebar />

        {/* Page content */}
        <div className="main-offset">
          {children}
        </div>
      </body>
    </html>
  )
}
