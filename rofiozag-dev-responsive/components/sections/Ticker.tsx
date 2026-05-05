import { TICKER_ITEMS } from '@/lib/constants'

export function Ticker() {
  return (
    <div
      style={{
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '14px 0',
        background: 'var(--bg2)',
      }}
    >
      <div className="ticker-track">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span
            key={i}
            className="font-mono"
            style={{
              fontSize: 10,
              color: 'var(--muted)',
              letterSpacing: '.12em',
              padding: '0 28px',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
            <span style={{ color: 'var(--gold-d)', marginLeft: 28 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
