import { Icon } from '@iconify/react'
import { SERVICES } from '@/lib/constants'

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div style={{ marginBottom: 56 }}>
        <div className="tag" style={{ marginBottom: 24 }}>What We Build</div>
        <h2
          className="font-display"
          style={{ fontSize: 'clamp(30px, 5vw, 62px)', fontWeight: 300, lineHeight: 1.08 }}
        >
          Services Engineered for<br />
          <span className="gold-text" style={{ fontStyle: 'italic', fontWeight: 600 }}>
            Speed &amp; Scale
          </span>
        </h2>
      </div>

      <div className="services-grid">
        {SERVICES.map(({ icon, title, desc, price, time }) => (
          <article key={title} className="service-card" style={{ padding: 'clamp(24px,3vw,36px) clamp(20px,2.5vw,32px)', background: 'var(--bg2)' }}>
            <div
              style={{
                width: 42, height: 42, border: '1px solid var(--gold-d)', borderRadius: 2,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 24, color: 'var(--gold)',
              }}
            >
              <Icon icon={icon} width={20} height={20} />
            </div>
            <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 12 }}>{title}</h3>
            <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75, marginBottom: 28 }}>{desc}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: 15 }}>{price}</span>
              <span
                className="font-mono"
                style={{
                  fontSize: 10, color: 'var(--muted)',
                  background: 'var(--bg3)', padding: '3px 10px',
                  borderRadius: 2, letterSpacing: '.04em',
                }}
              >
                {time}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
