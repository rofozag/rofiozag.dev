"use client"
import Link from 'next/link'

const LINKS = ['Privacy', 'Terms', 'Contact', 'Blog']

export function Footer() {
  return (
    <footer
      className="footer-pad py-10 bg-bg2 flex flex-wrap items-center justify-between gap-6"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div>
        <p
          className="font-display italic font-semibold mb-1"
          style={{ fontSize: 22, color: 'var(--gold)' }}
        >
          rofiozag.dev
        </p>
        <p
          className="font-mono"
          style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '.04em' }}
        >
          © {new Date().getFullYear()} Rofiozag Dev. All rights reserved.
        </p>
      </div>

      <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
        {LINKS.map((l) => (
          <Link
            key={l}
            href={l === 'Contact' ? '#contact' : `/${l.toLowerCase()}`}
            className="font-mono transition-colors duration-200"
            style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.04em' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            {l}
          </Link>
        ))}
      </nav>

      <p className="font-mono" style={{ fontSize: 11, color: 'var(--muted)' }}>
        Built with{' '}
        <span style={{ color: 'var(--gold)' }}>Next.js · Supabase</span>
        {' '}· Deployed on Vercel
      </p>
    </footer>
  )
}
