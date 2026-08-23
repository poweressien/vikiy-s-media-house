import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

// Subtle magnetic pull toward the cursor — capped low (≈10px) so it reads as
// premium weight, not a gimmick (brief section 19: "magnetic/subtle
// movement"). Falls back to a plain element when reduced-motion is on.
export default function MagneticButton({ children, className, as = 'a', strength = 0.35, cap = 10, ...rest }) {
  const ref = useRef(null)
  const prefersReduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 })

  if (prefersReduced) {
    const Static = as
    return (
      <Static ref={ref} className={className} {...rest}>
        {children}
      </Static>
    )
  }

  function handleMouseMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set(Math.max(-cap, Math.min(cap, relX * strength)))
    y.set(Math.max(-cap, Math.min(cap, relY * strength)))
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const MotionTag = motion[as] || motion.a

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
