import { PROCESS_STEPS } from '@/lib/constants'

export function Process() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg2)' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <div className="tag" style={{ marginBottom: 24 }}>How It Works</div>
        <h2
          className="font-display"
          style={{ fontSize: 'clamp(30px, 5vw, 62px)', fontWeight: 300, lineHeight: 1.08 }}
        >
          Brief to Live in<br />
          <span className="gold-text" style={{ fontStyle: 'italic', fontWeight: 600 }}>
            Days, Not Months
          </span>
        </h2>
      </div>

      <div className="process-grid">
        {PROCESS_STEPS.map(({ n, title, desc }, i) => (
          <div key={n} style={{ position: 'relative' }}>
            {/* Connector line — only visible on desktop 4-col */}
            {i < PROCESS_STEPS.length - 1 && (
              <div
                aria-hidden="true"
                className="hidden lg:block"
                style={{
                  position: 'absolute', top: 21,
                  left: '60%', right: '-40px',
                  height: 1,
                  background: 'linear-gradient(90deg, var(--gold-d), transparent)',
                  zIndex: 0,
                }}
              />
            )}

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  width: 42, height: 42, border: '1px solid var(--gold-d)',
                  borderRadius: 2, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: 24, background: 'var(--bg)',
                }}
              >
                <span className="font-mono" style={{ fontSize: 11, color: 'var(--gold)' }}>{n}</span>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 12 }}>{title}</h3>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75 }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
