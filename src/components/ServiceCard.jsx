import { useRef } from 'react'
import { ICONS } from '../lib/icons'
import { RevealItem } from './SectionReveal'

// Cursor-tracked radial "spotlight" + lift-on-hover + animated accent line.
// Kept as real anchor cards (not divs) since each links straight to
// #contact — clicking a discipline card is a legitimate call to action.
export default function ServiceCard({ service }) {
  const ref = useRef(null)
  const Icon = ICONS[service.icon]

  function handleMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <RevealItem>
      <a
        href="#contact"
        ref={ref}
        onMouseMove={handleMove}
        data-cursor="open"
        className="spotlight group relative block overflow-hidden rounded-2xl border border-navy-950/10 bg-white/50 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-sapphire-500/40 dark:border-ivory-50/10 dark:bg-navy-800/40 dark:hover:border-iris-400/40 sm:p-8"
      >
        <span className="pointer-events-none absolute -right-1 -top-5 select-none font-display text-7xl text-navy-950/[0.05] dark:text-ivory-50/[0.05] sm:text-8xl">
          {service.index}
        </span>

        <div className="relative">
          <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-navy-950/10 bg-ivory-50 text-sapphire-600 transition-colors duration-300 group-hover:border-sapphire-500/40 dark:border-ivory-50/10 dark:bg-navy-900 dark:text-sapphire-400">
            <Icon className="h-5 w-5" />
          </div>

          <h3 className="font-display text-xl sm:text-2xl">{service.title}</h3>
          <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-navy-950/60 dark:text-ivory-50/60">{service.description}</p>

          <span className="mt-6 block h-px w-8 bg-navy-950/20 transition-all duration-500 group-hover:w-16 group-hover:bg-sapphire-500 dark:bg-ivory-50/20 dark:group-hover:bg-iris-400" />
        </div>
      </a>
    </RevealItem>
  )
}
