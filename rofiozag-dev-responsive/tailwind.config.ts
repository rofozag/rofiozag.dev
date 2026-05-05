import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['var(--font-syne)', 'sans-serif'],
        display: ['var(--font-cormorant)', 'serif'],
        mono:    ['var(--font-dm-mono)', 'monospace'],
      },
      colors: {
        bg:      '#060606',
        bg2:     '#0d0d0d',
        bg3:     '#141414',
        gold:    '#C9A84C',
        'gold-l':'#E8C97A',
        'gold-d':'#6B5A2A',
        text:    '#EDE8E0',
        muted:   '#5E5A55',
        border:  '#181818',
      },
      animation: {
        'fade-up':   'fadeUp .9s cubic-bezier(.16,1,.3,1) both',
        'ticker':    'ticker 32s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
