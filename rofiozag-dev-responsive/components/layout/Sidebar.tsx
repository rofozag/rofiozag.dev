'use client'

import { Icon } from '@iconify/react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { NAV_ITEMS, SOCIAL_LINKS } from '@/lib/constants'

export function Sidebar() {
  const active = useActiveSection()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ══════════════════════════════════════
          DESKTOP — Fixed left sidebar
          ══════════════════════════════════════ */}
      <nav
        className="glass desktop-sidebar fixed left-0 top-0 bottom-0 w-[60px] flex-col items-center py-6 z-50"
        style={{ borderRight: '1px solid var(--border)' }}
        aria-label="Site navigation"
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          aria-label="Back to top"
          className="mb-11 flex items-center justify-center"
          style={{
            width: 34, height: 34,
            border: '1px solid var(--gold-d)',
            color: 'var(--gold)',
            fontFamily: 'var(--font-cormorant)',
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: 18,
            background: 'none',
            cursor: 'pointer',
            borderRadius: 2,
            transition: 'border-color .2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--gold)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--gold-d)')}
        >
          R
        </button>

        {/* Nav items */}
        <div className="flex flex-col gap-1 flex-1">
          {NAV_ITEMS.map(({ id, iconName, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              title={label}
              aria-label={label}
              className={`nav-icon ${active === id ? 'active' : ''}`}
            >
              {active === id && (
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute', left: 0, top: '50%',
                    transform: 'translateY(-50%)',
                    width: 2, height: 18,
                    background: 'var(--gold)',
                    borderRadius: '0 2px 2px 0',
                  }}
                />
              )}
              <Icon icon={iconName} width={18} height={18} />
            </button>
          ))}
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-3">
          {SOCIAL_LINKS.map(({ href, iconName, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="nav-icon"
              style={{ padding: 4 }}
            >
              <Icon icon={iconName} width={15} height={15} />
            </a>
          ))}
        </div>
      </nav>

      {/* ══════════════════════════════════════
          MOBILE — Fixed bottom nav bar
          ══════════════════════════════════════ */}
      <nav
        className="bottom-nav glass"
        aria-label="Mobile navigation"
      >
        {NAV_ITEMS.map(({ id, iconName, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            aria-label={label}
            className={`nav-icon ${active === id ? 'active' : ''}`}
            style={{ padding: '8px 12px', flexDirection: 'column', gap: 3 }}
          >
            <Icon icon={iconName} width={20} height={20} />
            <span
              style={{
                fontSize: 7,
                letterSpacing: '.08em',
                color: active === id ? 'var(--gold)' : 'var(--muted)',
                textTransform: 'uppercase',
              }}
            >
              {label}
            </span>
            {active === id && (
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0, left: '50%',
                  transform: 'translateX(-50%)',
                  width: 18, height: 2,
                  background: 'var(--gold)',
                  borderRadius: '0 0 2px 2px',
                }}
              />
            )}
          </button>
        ))}
      </nav>
    </>
  )
}
