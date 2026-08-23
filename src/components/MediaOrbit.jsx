import { motion, useTransform } from 'framer-motion'
import { orbitItems } from '../data/content'
import { ICONS } from '../lib/icons'

// Layers 2, 3 & 5 from the brief's "cinematic orbit system" (section 6):
// a thin rotating ring, a set of profession icons revolving at two radii
// and speeds, and four autofocus-style corner brackets.
//
// Radius is driven by the --orbit-r custom property set responsively on the
// stage wrapper in Hero.jsx, NOT a fixed pixel value — that's what keeps the
// orbit proportional to the portrait at every breakpoint instead of
// overflowing on narrow screens (brief section 20: "no horizontal
// overflow"). Continuous motion is pure CSS (`animate-spin-slow` /
// `-reverse`, GPU-composited transforms only) — no rAF loop — while the
// whole group gets a small Framer Motion parallax shift from the shared
// hero mouse position for depth (brief section 7).
const INNER_RATIO = 0.72

export default function MediaOrbit({ mvX, mvY }) {
  const shiftX = useTransform(mvX, [-200, 200], [-10, 10])
  const shiftY = useTransform(mvY, [-200, 200], [-10, 10])

  return (
    <motion.div className="pointer-events-none absolute inset-0" style={{ x: shiftX, y: shiftY }} aria-hidden="true">
      {/* Layer 2 — thin cinematic rings */}
      <div
        className="animate-spin-slow absolute left-1/2 top-1/2 h-[112%] w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-sapphire-500/25 dark:border-iris-400/25"
        style={{ animationDuration: '48s' }}
      />
      <div className="absolute left-1/2 top-1/2 h-[124%] w-[124%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-navy-950/[0.06] dark:border-ivory-50/[0.08]" />

      {/* Layer 3 — orbiting media icons */}
      {orbitItems.map((item, i) => {
        const Icon = ICONS[item.icon]
        const spinClass = item.direction === 1 ? 'animate-spin-slow' : 'animate-spin-slow-reverse'
        const counterClass = item.direction === 1 ? 'animate-spin-slow-reverse' : 'animate-spin-slow'
        const radiusExpr = item.tier === 'outer' ? 'var(--orbit-r)' : `calc(var(--orbit-r) * ${INNER_RATIO})`
        return (
          <div key={i} className={`absolute inset-0 ${spinClass}`} style={{ animationDuration: `${item.duration}s` }}>
            <div
              className="absolute left-1/2 top-1/2"
              style={{ transform: `translate(-50%, -50%) rotate(${item.angle}deg) translate(${radiusExpr})` }}
            >
              <div className={counterClass} style={{ animationDuration: `${item.duration}s` }}>
                <div
                  className="flex items-center justify-center rounded-full border border-navy-950/10 bg-ivory-50/85 shadow-soft backdrop-blur-sm dark:border-ivory-50/15 dark:bg-navy-900/80"
                  style={{ width: item.size, height: item.size }}
                >
                  <Icon className="h-[46%] w-[46%] text-navy-950/70 dark:text-ivory-50/80" />
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Layer 5 — focus / camera guide brackets */}
      {[
        'top-[6%] left-[6%] border-l border-t',
        'top-[6%] right-[6%] border-r border-t',
        'bottom-[6%] left-[6%] border-l border-b',
        'bottom-[6%] right-[6%] border-r border-b',
      ].map((pos, i) => (
        <span
          key={i}
          className={`animate-pulse-soft absolute h-4 w-4 sm:h-5 sm:w-5 ${pos} border-sapphire-500/40 dark:border-iris-300/45`}
          style={{ animationDuration: '5.5s', animationDelay: `${i * 0.4}s` }}
        />
      ))}
    </motion.div>
  )
}
