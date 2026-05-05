'use client'

import { useState, type FormEvent } from 'react'
import { Icon } from '@iconify/react'
import { SERVICES } from '@/lib/constants'

interface FormState {
  name:    string
  email:   string
  budget:  string
  service: string
  message: string
}

const INITIAL: FormState = { name: '', email: '', budget: '', service: '', message: '' }

const INFO_ROWS = [
  ['Email',         'rofiozag.dev@gmail.com'],
   ['Phone',         '+2349019211656'],
  ['Response Time', '< 2 hours'],
  ['Location',      'Nigeria · Remote Worldwide'],
  ['Available',     'Mon – Sat, 9AM – 10PM WAT'],
] as const

export function Contact() {
  const [form, setForm]     = useState<FormState>(INITIAL)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-pad">
      <div className="contact-grid">
        {/* ── Left col ─────────────────────────────────────── */}
        <div>
          <div className="tag" style={{ marginBottom: 24 }}>Contact</div>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(28px, 4vw, 54px)', fontWeight: 300, lineHeight: 1.08, marginBottom: 20 }}
          >
            Let&apos;s Build<br />
            <span className="gold-text" style={{ fontStyle: 'italic', fontWeight: 600 }}>
              Something Great
            </span>
          </h2>
          <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 40 }}>
            Fill out the form and we&apos;ll respond within 2 hours. Every inquiry
            is reviewed personally — no bots, no sales teams.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {INFO_ROWS.map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <span
                  className="font-mono"
                  style={{ fontSize: 10, color: 'var(--gold)', letterSpacing: '.08em', width: 110, flexShrink: 0, paddingTop: 2 }}
                >
                  {k}
                </span>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right col — form ─────────────────────────────── */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <label className="font-mono" htmlFor="name" style={{ display: 'block', fontSize: 10, color: 'var(--muted)', letterSpacing: '.1em', marginBottom: 8 }}>NAME</label>
            <input id="name" type="text" required placeholder="Your full name" className="form-input" value={form.name} onChange={set('name')} />
          </div>

          <div>
            <label className="font-mono" htmlFor="email" style={{ display: 'block', fontSize: 10, color: 'var(--muted)', letterSpacing: '.1em', marginBottom: 8 }}>EMAIL</label>
            <input id="email" type="email" required placeholder="your@email.com" className="form-input" value={form.email} onChange={set('email')} />
          </div>

          <div>
            <label className="font-mono" htmlFor="budget" style={{ display: 'block', fontSize: 10, color: 'var(--muted)', letterSpacing: '.1em', marginBottom: 8 }}>BUDGET</label>
            <input id="budget" type="text" placeholder="e.g. $500 – $3,000" className="form-input" value={form.budget} onChange={set('budget')} />
          </div>

          <div>
            <label className="font-mono" htmlFor="service" style={{ display: 'block', fontSize: 10, color: 'var(--muted)', letterSpacing: '.1em', marginBottom: 8 }}>SERVICE NEEDED</label>
            <select id="service" className="form-input" value={form.service} onChange={set('service')}>
              <option value="">Select a service…</option>
              {SERVICES.map((s) => (
                <option key={s.title} value={s.title}>{s.title}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-mono" htmlFor="message" style={{ display: 'block', fontSize: 10, color: 'var(--muted)', letterSpacing: '.1em', marginBottom: 8 }}>PROJECT BRIEF</label>
            <textarea
              id="message" required rows={5}
              placeholder="Describe your project, goals, and timeline…"
              className="form-input"
              style={{ resize: 'vertical' }}
              value={form.message}
              onChange={set('message')}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary flex items-center justify-center gap-2"
            style={{ padding: 15, fontSize: 13, letterSpacing: '.07em', marginTop: 8, opacity: status === 'loading' ? 0.7 : 1 }}
          >
            {status === 'loading' ? 'SENDING…' : (
              <>
                SEND MESSAGE{' '}
                <Icon icon="ph:arrow-right" width={14} height={14} />
              </>
            )}
          </button>

          {status === 'success' && (
            <p className="font-mono" style={{ fontSize: 12, color: 'var(--gold)', textAlign: 'center' }}>
              ✦ Message received. We&apos;ll reply within 2 hours.
            </p>
          )}
          {status === 'error' && (
            <p className="font-mono" style={{ fontSize: 12, color: '#ef4444', textAlign: 'center' }}>
              Something went wrong. Email us at rofiozag.dev@gmail.com
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
