import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { nav, brand } from '../data/content'
import useTheme from '../hooks/useTheme'
import { IconSun, IconMoon, IconMenu, IconClose, IconArrowRight } from '../lib/icons'
import MagneticButton from './MagneticButton'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : ''
    return () => {
      document.body.style.overflowY = ''
    }
  }, [open])

  return (
    <header id="site-nav" className={`fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300 ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 sm:px-10">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          <img src="assets/logo-icon-navy.png" alt={brand.name} className="h-8 w-8 dark:hidden" />
          <img src="assets/logo-icon.png" alt={brand.name} className="hidden h-8 w-8 dark:block" />
          <span className="hidden font-display text-[17px] tracking-wide xs:block">{brand.name}</span>
        </a>

        <nav className="hidden items-center gap-10 text-[13px] uppercase tracking-[0.14em] text-navy-950/65 dark:text-ivory-50/65 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} data-cursor="open" className="link-grow transition-colors hover:text-navy-950 dark:hover:text-ivory-50">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-pressed={isDark}
            aria-label="Toggle dark mode"
            data-cursor="open"
            className="relative flex h-7 w-12 shrink-0 items-center rounded-full border border-navy-950/10 bg-navy-950/10 px-1 dark:border-ivory-50/15 dark:bg-ivory-50/10"
          >
            <span className="toggle-knob flex h-5 w-5 items-center justify-center rounded-full bg-white shadow dark:bg-navy-900">
              {isDark ? <IconMoon className="h-3 w-3 text-sapphire-400" /> : <IconSun className="h-3 w-3 text-amber-500" />}
            </span>
          </button>

          <MagneticButton
            as="a"
            href="#contact"
            data-cursor="open"
            className="group hidden items-center gap-2 rounded-full border border-navy-950/20 px-5 py-2.5 text-[13px] uppercase tracking-[0.14em] transition-colors hover:border-navy-950 dark:border-ivory-50/25 dark:hover:border-ivory-50 sm:inline-flex"
          >
            Get in touch
            <IconArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </MagneticButton>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/15 dark:border-ivory-50/15 md:hidden"
          >
            {open ? <IconClose className="h-4 w-4" /> : <IconMenu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={prefersReduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-1 overflow-hidden border-t border-navy-950/10 bg-ivory-50/97 px-6 text-[13px] uppercase tracking-[0.14em] backdrop-blur dark:border-ivory-50/10 dark:bg-navy-900/98 md:hidden"
          >
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-navy-950/10 py-3.5 dark:border-ivory-50/10 last:border-b-0"
              >
                {n.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
