import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import usePointerFine from '../hooks/usePointerFine'

// Premium custom cursor: a small dot plus a lagging ring that expands into
// a text label ("VIEW" / "PLAY" / "OPEN") over elements tagged with
// data-cursor. Desktop + fine-pointer only, and fully inert under
// prefers-reduced-motion (brief sections 18 & 20).
const LABELS = { view: 'VIEW', play: 'PLAY', open: 'OPEN' }

export default function CustomCursor() {
  const isFine = usePointerFine()
  const prefersReduced = useReducedMotion()
  const active = isFine && !prefersReduced

  const [variant, setVariant] = useState('default')
  const [visible, setVisible] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 })

  useEffect(() => {
    if (!active) return

    document.documentElement.classList.add('cursor-none-active')

    function handleMove(e) {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }
    function handleOver(e) {
      const el = e.target.closest ? e.target.closest('[data-cursor]') : null
      setVariant(el ? el.getAttribute('data-cursor') : 'default')
    }
    function handleLeaveWindow() {
      setVisible(false)
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleOver)
    document.documentElement.addEventListener('mouseleave', handleLeaveWindow)

    return () => {
      document.documentElement.classList.remove('cursor-none-active')
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
      document.documentElement.removeEventListener('mouseleave', handleLeaveWindow)
    }
  }, [active, x, y])

  if (!active) return null

  const labelled = variant !== 'default'

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full bg-ivory-50 mix-blend-difference"
        style={{ x, y, translateX: '-50%', translateY: '-50%', width: 6, height: 6, opacity: visible ? 1 : 0 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full border border-ivory-50 mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%', opacity: visible ? 1 : 0 }}
        animate={{ width: labelled ? 64 : 32, height: labelled ? 64 : 32 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
      >
        {labelled && (
          <span className="font-body text-[10px] font-600 tracking-[0.14em] text-ivory-50">{LABELS[variant]}</span>
        )}
      </motion.div>
    </>
  )
}
