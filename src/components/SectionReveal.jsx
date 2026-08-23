import { motion, useReducedMotion } from 'framer-motion'

// Generic scroll-entrance wrapper. Replaces the original [data-reveal] +
// IntersectionObserver vanilla implementation with the same visual result,
// plus a couple more variants used around the site. Every section on the
// page composes its entrance animation from this one component so the
// "reveal" language stays consistent (brief section 17 / 29).
const EASE = [0.16, 1, 0.3, 1]

const VARIANTS = {
  'fade-up': { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  'fade-left': { hidden: { opacity: 0, x: -22 }, visible: { opacity: 1, x: 0 } },
  'fade-right': { hidden: { opacity: 0, x: 22 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
}

export default function SectionReveal({
  children,
  as = 'div',
  variant = 'fade-up',
  delay = 0,
  duration = 0.9,
  className,
  once = true,
  amount = 0.2,
  stagger = null,
}) {
  const prefersReduced = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (prefersReduced) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  if (stagger != null) {
    return (
      <MotionTag
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      >
        {children}
      </MotionTag>
    )
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={VARIANTS[variant] || VARIANTS['fade-up']}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  )
}

// Used as a direct child of a `stagger`-mode SectionReveal so each item
// inherits the parent's staggerChildren timing automatically.
export function RevealItem({ children, className, variant = 'fade-up', as = 'div' }) {
  const prefersReduced = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (prefersReduced) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  return (
    <MotionTag className={className} variants={VARIANTS[variant] || VARIANTS['fade-up']} transition={{ duration: 0.7, ease: EASE }}>
      {children}
    </MotionTag>
  )
}
