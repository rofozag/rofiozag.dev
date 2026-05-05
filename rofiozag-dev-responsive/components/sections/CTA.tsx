'use client'

export function CTA() {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="cta-pad">
      {/* Glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800, height: 400, pointerEvents: 'none',
          background: 'radial-gradient(ellipse, rgba(201,168,76,.05) 0%, transparent 70%)',
        }}
      />

      <p
        className="font-mono"
        style={{
          fontSize: 10, color: 'var(--gold)', letterSpacing: '.18em',
          marginBottom: 24, position: 'relative',
        }}
      >
        READY TO BUILD?
      </p>

      <h2
        className="font-display"
        style={{
          fontSize: 'clamp(32px, 6vw, 76px)',
          fontWeight: 300, lineHeight: 1.02,
          marginBottom: 20, position: 'relative',
        }}
      >
        Your idea deserves<br />
        <span className="gold-text" style={{ fontStyle: 'italic', fontWeight: 600 }}>
          extraordinary execution.
        </span>
      </h2>

      <p
        style={{
          fontSize: 15, color: 'var(--muted)',
          maxWidth: 460, margin: '0 auto 40px',
          lineHeight: 1.7, position: 'relative',
        }}
      >
        We take on a limited number of projects each month to ensure quality.
        Secure your slot.
      </p>

      <button
        className="btn-primary"
        onClick={scrollToContact}
        style={{ padding: 'clamp(12px,2vw,16px) clamp(28px,4vw,52px)', fontSize: 13, letterSpacing: '.08em', position: 'relative' }}
      >
        START YOUR PROJECT TODAY
      </button>
    </section>
  )
}
