import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

// Thin top progress bar, deliberately styled like a video edit timeline
// scrub bar rather than a generic loading indicator — ties the chrome back
// to the "editing suite" concept (brief section 19: "subtle progress
// indicator if appropriate").
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })
  const prefersReduced = useReducedMotion()

  if (prefersReduced) return null

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-gradient-to-r from-sapphire-500 via-iris-500 to-sapphire-400 pointer-events-none"
      style={{ scaleX }}
    />
  )
}
