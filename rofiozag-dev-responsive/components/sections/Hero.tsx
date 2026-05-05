'use client'

import dynamic from 'next/dynamic'
import { Icon } from '@iconify/react'
import { STATS } from '@/lib/constants'

const HeroScene = dynamic(
  () => import('@/components/three/HeroScene').then((m) => m.HeroScene),
  { ssr: false, loading: () => null },
)

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export function Hero() {
  return (
    <section
      id="home"
      className="hero-pad relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* R3F Background */}
      <HeroScene />

      {/* Ambient glows */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: '35%', left: '45%',
          width: 700, height: 700, pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(201,168,76,.058) 0%, transparent 68%)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: '10%', right: '5%',
          width: 400, height: 400, pointerEvents: 'none',
          background: 'radial-gradient(circle, rgba(201,168,76,.03) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 820 }}>
        {/* Tag */}
        <div
          className="tag animate-fade-up"
          style={{ marginBottom: 28, animationDelay: '.05s' }}
        >
          AI-Powered Software Development
        </div>

        {/* Headline */}
        <h1
          className="font-display animate-fade-up"
          style={{
            fontSize: 'clamp(40px, 7.5vw, 100px)',
            lineHeight: 1.0,
            fontWeight: 300,
            marginBottom: 4,
            animationDelay: '.15s',
          }}
        >
          We Engineer
        </h1>
        <h1
          className="font-display gold-text animate-fade-up"
          style={{
            fontSize: 'clamp(40px, 7.5vw, 100px)',
            lineHeight: 1.0,
            fontStyle: 'italic',
            fontWeight: 600,
            marginBottom: 28,
            animationDelay: '.25s',
          }}
        >
          Digital Excellence.
        </h1>

        {/* Sub-copy */}
        <p
          className="animate-fade-up"
          style={{
            fontSize: 'clamp(13px, 1.8vw, 16px)',
            lineHeight: 1.8,
            color: 'var(--muted)',
            maxWidth: 500,
            marginBottom: 40,
            animationDelay: '.35s',
          }}
        >
          From idea to deployed product in days — not months. We build
          high-performance web applications, 3D experiences, and AI-powered
          platforms at a fraction of traditional agency cost.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up flex flex-wrap gap-3"
          style={{ animationDelay: '.45s' }}
        >
          <button
            className="btn-primary"
            style={{ padding: 'clamp(10px,2vw,14px) clamp(20px,3vw,36px)', fontSize: 13 }}
            onClick={() => scrollTo('work')}
          >
            VIEW OUR WORK
          </button>
          <button
            className="btn-ghost flex items-center gap-2"
            style={{ padding: 'clamp(10px,2vw,14px) clamp(20px,3vw,36px)', fontSize: 13 }}
            onClick={() => scrollTo('contact')}
          >
            START A PROJECT{' '}
            <Icon icon="ph:arrow-right" width={14} height={14} />
          </button>
        </div>

        {/* Stats row */}
        <div className="stats-row animate-fade-up" style={{ animationDelay: '.55s' }}>
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p
                className="font-display"
                style={{ fontSize: 'clamp(24px,3.5vw,34px)', fontWeight: 600, color: 'var(--gold)', lineHeight: 1 }}
              >
                {value}
              </p>
              <p
                className="font-mono mt-[7px]"
                style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '.06em' }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator — hidden on mobile */}
      <div
        aria-hidden="true"
        className="hero-scroll-indicator absolute bottom-10 right-0 flex-col items-center gap-[10px]"
        style={{ right: 'clamp(20px, 5vw, 72px)' }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: 9, color: 'var(--muted)',
            letterSpacing: '.18em', writingMode: 'vertical-rl',
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: 1, height: 56,
            background: 'linear-gradient(to bottom, var(--gold-d), transparent)',
          }}
        />
      </div>
    </section>
  )
}
