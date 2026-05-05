import { Icon } from '@iconify/react'
import { PROJECTS } from '@/lib/constants'

export function Work() {
  return (
    <section id="work" className="section-pad">
      <div className="work-header">
        <div>
          <div className="tag" style={{ marginBottom: 24 }}>Portfolio</div>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(30px, 5vw, 62px)', fontWeight: 300, lineHeight: 1.08 }}
          >
            Built &amp; Deployed<br />
            <span className="gold-text" style={{ fontStyle: 'italic', fontWeight: 600 }}>
              In Production
            </span>
          </h2>
        </div>

        <button
          className="btn-ghost flex items-center gap-2"
          style={{ padding: '11px 22px', fontSize: 13, whiteSpace: 'nowrap' }}
        >
          All Projects{' '}
          <Icon icon="ph:arrow-square-out" width={13} height={13} />
        </button>
      </div>

      <div className="work-grid">
        {PROJECTS.map(({ name, tag, desc, bg, accent }) => (
          <article key={name} className="work-card" role="article">
            <div
              style={{
                height: 'clamp(160px, 20vw, 220px)', background: bg,
                position: 'relative', overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(ellipse at 30% 40%, ${accent}1A, transparent 65%)`,
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(ellipse at 70% 60%, ${accent}0D, transparent 60%)`,
                }}
              />
              <span
                className="font-display work-img-inner"
                aria-hidden="true"
                style={{
                  fontSize: 80, fontWeight: 600, color: `${accent}1A`,
                  fontStyle: 'italic', userSelect: 'none', lineHeight: 1,
                  position: 'relative', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                }}
              >
                {name[0]}
              </span>
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute', bottom: 16, right: 16,
                  width: 30, height: 30, borderRadius: '50%', background: accent,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <Icon icon="ph:arrow-right" width={13} height={13} color="#060606" />
              </div>
            </div>

            <div
              style={{
                padding: 'clamp(16px,2.5vw,22px) clamp(16px,2.5vw,26px) clamp(20px,3vw,26px)',
                background: 'var(--bg2)',
                borderTop: `1px solid ${accent}22`,
              }}
            >
              <p
                className="font-mono"
                style={{ fontSize: 10, color: accent, letterSpacing: '.1em', marginBottom: 8 }}
              >
                {tag}
              </p>
              <h3 style={{ fontSize: 19, fontWeight: 600, marginBottom: 8 }}>{name}</h3>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65 }}>{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
