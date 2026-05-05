'use client'

import { useEffect, useState } from 'react'

const SECTION_IDS = ['home', 'work', 'services', 'pricing', 'contact']

export function useActiveSection() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.4 },
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return active
}
