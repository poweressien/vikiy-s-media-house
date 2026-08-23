import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion, animate } from 'framer-motion'

// Counts up from 0 to `value` once it scrolls into view. Used for the
// hero + about stats so they read as editorial facts rather than a SaaS
// dashboard widget (brief section 16: "Animate the numbers when they enter
// the viewport... not look like SaaS dashboard statistics").
export default function AnimatedStat({ value, prefix = '', suffix = '', pad = 0, className, duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const prefersReduced = useReducedMotion()
  const [display, setDisplay] = useState(prefersReduced ? value : 0)

  useEffect(() => {
    if (!inView) return
    if (prefersReduced) {
      setDisplay(value)
      return
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, duration, prefersReduced])

  const text = pad ? String(display).padStart(pad, '0') : String(display)

  return (
    <span ref={ref} className={className}>
      {prefix}
      {text}
      {suffix}
    </span>
  )
}
