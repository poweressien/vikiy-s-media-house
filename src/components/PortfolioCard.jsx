import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ICONS, IconPlay } from '../lib/icons'
import { socials } from '../data/content'
import { RevealItem } from './SectionReveal'

// No stock photography is used here — each card's visual is generated from
// the palette + the discipline's own icon, which sidesteps both the "who
// actually took this photo" problem for placeholder content and keeps the
// page's own asset weight at zero for this section. See content.js for the
// note on swapping in real reels later via `videoSrc`.
const GRADIENTS = [
  'from-navy-900 via-navy-800 to-sapphire-700',
  'from-navy-950 via-sapphire-700 to-iris-600',
  'from-navy-900 via-iris-700 to-navy-800',
  'from-sapphire-700 via-navy-900 to-iris-600',
  'from-navy-950 via-navy-800 to-iris-700',
  'from-iris-700 via-navy-900 to-sapphire-700',
]

const NOISE_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const instagramHref = socials.find((s) => s.icon === 'instagram')?.href

export default function PortfolioCard({ project, index }) {
  const ref = useRef(null)
  const prefersReduced = useReducedMotion()
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const Icon = ICONS[project.icon]
  const gradient = GRADIENTS[index % GRADIENTS.length]
  // No real reel yet for any placeholder entry — send to the real Instagram
  // instead of a dead link. Swap to an in-card <video> once videoSrc exists.
  const href = project.videoSrc || instagramHref

  function handleMove(e) {
    if (prefersReduced) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -4, y: px * 4 })
  }
  function handleLeave() {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <RevealItem>
      <a
        href={href}
        target="_blank"
        rel="noopener"
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        data-cursor="view"
        className="group relative block overflow-hidden rounded-2xl border border-navy-950/10 shadow-soft dark:border-ivory-50/10"
        style={{ perspective: 800 }}
      >
        <motion.div
          animate={{ rotateX: tilt.x, rotateY: tilt.y }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="relative aspect-[4/5] w-full sm:aspect-[16/10]"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-700 group-hover:scale-105`}>
            <Icon className="absolute -bottom-8 -right-8 h-44 w-44 text-white/[0.07]" />
            <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: NOISE_BG, backgroundSize: '160px 160px' }} />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-950/90 via-navy-950/15 to-transparent p-5 sm:p-6">
            <span className="text-[11px] uppercase tracking-[0.14em] text-ivory-50/70 opacity-0 transition-all duration-300 group-hover:opacity-100">
              {project.category}
            </span>
            <h3 className="mt-1 font-display text-xl text-ivory-50 sm:text-2xl">{project.title}</h3>
            <p className="mt-1 max-w-xs text-xs text-ivory-50/70 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:text-sm">
              {project.blurb}
            </p>

            <span
              data-cursor="play"
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-ivory-50/30 px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-ivory-50 opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100"
            >
              <IconPlay className="h-3.5 w-3.5" />
              Play reel
            </span>
          </div>

          <span className="absolute left-5 top-5 font-display text-sm text-ivory-50/50 sm:text-base">{project.index}</span>
        </motion.div>
      </a>
    </RevealItem>
  )
}
