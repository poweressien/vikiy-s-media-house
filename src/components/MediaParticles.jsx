import { motion, useTransform } from 'framer-motion'

// Layer 4 — ambient particles. The loosest, most organic layer around the
// portrait: small light points that drift and twinkle independently
// (CSS-only, GPU transform/opacity) and carry the largest mouse-parallax
// shift of the orbit group, since it's the "closest" depth layer (brief
// section 7: "particles react" more than the portrait itself).
//
// Note: each particle needs TWO simultaneous CSS animations (a float drift
// + an opacity twinkle). Stacking two Tailwind `animate-*` classes on one
// element doesn't work — both set the same `animation` shorthand property,
// so the later class in source order just overwrites the first instead of
// combining. Building one explicit comma-separated `animation` value in
// inline style is what actually runs both at once.
const PARTICLES = [
  { top: '4%', left: '18%', size: 4, float: 'float', floatDur: '6s', delay: '0s' },
  { top: '10%', left: '86%', size: 3, float: 'float', floatDur: '7.5s', delay: '-1.4s' },
  { top: '30%', left: '-4%', size: 3, float: 'float-sm', floatDur: '6.5s', delay: '-2.6s' },
  { top: '48%', left: '102%', size: 4, float: 'float', floatDur: '8s', delay: '-0.8s' },
  { top: '78%', left: '-2%', size: 3, float: 'float-sm', floatDur: '7s', delay: '-3.4s' },
  { top: '88%', left: '80%', size: 3, float: 'float', floatDur: '6.8s', delay: '-1.9s' },
  { top: '62%', left: '20%', size: 2, float: 'float-sm', floatDur: '5.5s', delay: '-2.2s' },
  { top: '18%', left: '55%', size: 2, float: 'float', floatDur: '7.2s', delay: '-4s' },
]

export default function MediaParticles({ mvX, mvY }) {
  const shiftX = useTransform(mvX, [-200, 200], [-18, 18])
  const shiftY = useTransform(mvY, [-200, 200], [-18, 18])

  return (
    <motion.div className="pointer-events-none absolute inset-0" style={{ x: shiftX, y: shiftY }} aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-sapphire-500 dark:bg-ivory-50"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            boxShadow: '0 0 8px 1px currentColor',
            animation: `twinkle 3.2s ease-in-out infinite ${p.delay}, ${p.float} ${p.floatDur} ease-in-out infinite ${p.delay}`,
          }}
        />
      ))}
    </motion.div>
  )
}
