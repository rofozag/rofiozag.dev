'use client'

import { useEffect, useRef } from 'react'

/**
 * Adds the `.visible` class to elements with `.reveal` when they enter
 * the viewport, triggering the CSS fade-up transition.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold },
    )

    const targets = el.querySelectorAll<HTMLElement>('.reveal')
    targets.forEach((t) => observer.observe(t))

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
