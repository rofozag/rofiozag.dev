'use client'

import { Icon } from '@iconify/react'
import { PLANS } from '@/lib/constants'

const scrollToContact = () =>
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

export function Pricing() {
  return (
    <section id="pricing" className="section-pad">
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <div className="tag" style={{ marginBottom: 24 }}>Pricing</div>
        <h2
          className="font-display"
          style={{ fontSize: 'clamp(30px, 5vw, 62px)', fontWeight: 300, lineHeight: 1.08 }}
        >
          Fixed Scope.<br />
          <span className="gold-text" style={{ fontStyle: 'italic', fontWeight: 600 }}>
            No Surprises.
          </span>
        </h2>
      </div>

      <div className="pricing-grid">
        {PLANS.map(({ name, price, featured, desc, features }) => (
          <div
            key={name}
            className={`price-card ${featured ? 'featured' : ''}`}
            style={{ padding: 'clamp(28px,3.5vw,40px) clamp(20px,3vw,36px)' }}
          >
            {featured && (
              <div className="tag" style={{ marginBottom: 20, fontSize: 9 }}>
                Most Popular
              </div>
            )}

            <p
              className="font-display italic"
              style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 6 }}
            >
              {name}
            </p>

            <p
              style={{
                fontSize: 'clamp(32px,4vw,44px)', fontWeight: 800, lineHeight: 1, marginBottom: 16,
                color: featured ? 'var(--gold)' : 'var(--text)',
              }}
            >
              {price}
            </p>

            <p
              style={{
                fontSize: 13, color: 'var(--muted)', lineHeight: 1.7,
                marginBottom: 32, paddingBottom: 32,
                borderBottom: '1px solid var(--border)',
              }}
            >
              {desc}
            </p>

            <ul
              style={{
                listStyle: 'none', display: 'flex',
                flexDirection: 'column', gap: 12, marginBottom: 40,
              }}
            >
              {features.map((f) => (
                <li
                  key={f}
                  style={{
                    display: 'flex', alignItems: 'flex-start',
                    gap: 10, fontSize: 13,
                  }}
                >
                  <Icon
                    icon="ph:check-circle"
                    width={14} height={14}
                    style={{ color: featured ? 'var(--gold)' : 'var(--muted)', flexShrink: 0, marginTop: 1 }}
                  />
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToContact}
              className={featured ? 'btn-primary' : 'btn-ghost'}
              style={{ width: '100%', padding: 13, fontSize: 12, letterSpacing: '.07em' }}
            >
              {name === 'Enterprise' ? 'GET A QUOTE' : 'GET STARTED'}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
