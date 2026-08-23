import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, useReducedMotion } from 'framer-motion'
import { hero, brand } from '../data/content'
import { IconArrowRight } from '../lib/icons'
import MediaOrbit from './MediaOrbit'
import MediaParticles from './MediaParticles'
import AnimatedStat from './AnimatedStat'
import MagneticButton from './MagneticButton'
import usePointerFine from '../hooks/usePointerFine'

const EASE = [0.16, 1, 0.3, 1]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
}

function LiveStatus() {
  const prefersReduced = useReducedMotion()
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (prefersReduced) return
    const id = setInterval(() => setIdx((i) => (i + 1) % hero.statusMessages.length), 4200)
    return () => clearInterval(id)
  }, [prefersReduced])

  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-navy-950/10 bg-ivory-50/90 px-3.5 py-2 shadow-soft backdrop-blur dark:border-ivory-50/15 dark:bg-navy-900/85">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-sapphire-500 dark:bg-iris-400" />
      </span>
      <span className="relative inline-block min-w-[118px] text-left sm:min-w-[128px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={idx}
            initial={prefersReduced ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? undefined : { opacity: 0, y: -4 }}
            transition={{ duration: 0.4 }}
            className="block whitespace-nowrap text-[10.5px] font-600 uppercase tracking-[0.14em] text-navy-950/70 dark:text-ivory-50/75"
          >
            {hero.statusMessages[idx]}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  )
}

export default function Hero() {
  const heroRef = useRef(null)
  const isFine = usePointerFine()
  const prefersReduced = useReducedMotion()
  const mvX = useMotionValue(0)
  const mvY = useMotionValue(0)
  const portraitShiftX = useTransform(mvX, [-260, 260], [-4, 4])
  const portraitShiftY = useTransform(mvY, [-260, 260], [-4, 4])

  useEffect(() => {
    const el = heroRef.current
    if (!el || !isFine || prefersReduced) return

    function handleMove(e) {
      const rect = el.getBoundingClientRect()
      mvX.set(e.clientX - (rect.left + rect.width / 2))
      mvY.set(e.clientY - (rect.top + rect.height / 2))
    }
    function handleLeave() {
      mvX.set(0)
      mvY.set(0)
    }
    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [isFine, prefersReduced, mvX, mvY])

  return (
    <section id="top" ref={heroRef} className="relative overflow-visible pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 sm:px-10 md:grid-cols-2 md:gap-14">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p variants={item} className="eyebrow mb-6 text-navy-950/55 dark:text-ivory-50/55">
            {hero.eyebrow}
          </motion.p>

          <h1 className="font-display font-500 text-[13vw] leading-[1.05] tracking-tight xs:text-5xl sm:text-6xl lg:text-[3.7rem]">
            <motion.span variants={item} className="block">
              {hero.headlineMain}
            </motion.span>
            <motion.span variants={item} className="block italic text-sapphire-600 dark:text-sapphire-400">
              {hero.headlineItalic}
            </motion.span>
          </h1>

          <motion.p variants={item} className="mt-8 max-w-md text-[15.5px] leading-relaxed text-navy-950/70 dark:text-ivory-50/70 sm:text-base">
            {hero.paragraph}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-8">
            <MagneticButton
              href={brand.whatsappHref}
              target="_blank"
              rel="noopener"
              data-cursor="open"
              className="group inline-flex items-center gap-2 rounded-full bg-navy-950 px-7 py-3.5 text-[13px] uppercase tracking-[0.14em] text-ivory-50 transition-opacity hover:opacity-85 dark:bg-ivory-50 dark:text-navy-950"
            >
              Get in touch
              <IconArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </MagneticButton>
            <a href={`mailto:${brand.email}`} className="link-grow text-[13px] uppercase tracking-[0.14em] text-navy-950/75 dark:text-ivory-50/75">
              {brand.email}
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-16 grid max-w-sm grid-cols-3 gap-6 border-t border-navy-950/10 pt-7 dark:border-ivory-50/10">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl">
                  <AnimatedStat value={s.value} prefix={s.prefix} suffix={s.suffix} pad={s.pad} />
                </p>
                <p className="mt-1.5 text-[11px] uppercase tracking-[0.12em] text-navy-950/50 dark:text-ivory-50/50">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={prefersReduced ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
          className="relative mx-auto flex flex-col items-center md:mx-0"
        >
          <div
            className="relative h-52 w-52 [--orbit-r:86px] xs:h-60 xs:w-60 xs:[--orbit-r:104px] sm:h-[17rem] sm:w-[17rem] sm:[--orbit-r:126px] md:h-[19rem] md:w-[19rem] md:[--orbit-r:142px] lg:h-[22rem] lg:w-[22rem] lg:[--orbit-r:164px] xl:h-96 xl:w-96 xl:[--orbit-r:182px]"
          >
            <div className="portrait-glow absolute -inset-6 rounded-full" aria-hidden="true" />
            <MediaParticles mvX={mvX} mvY={mvY} />
            <MediaOrbit mvX={mvX} mvY={mvY} />

            <motion.div
              style={{ x: portraitShiftX, y: portraitShiftY }}
              className="absolute inset-0 overflow-hidden rounded-full border border-navy-950/10 shadow-deep dark:border-ivory-50/10"
            >
              <picture>
                <source srcSet="assets/portrait.webp" type="image/webp" />
                <img
                  src="assets/portrait.png"
                  alt={`Victoria "Vikiy" Okoro, founder of ${brand.name}`}
                  className="h-full w-full object-cover object-[50%_12%]"
                />
              </picture>
            </motion.div>
          </div>

          <div className="relative z-10 -mt-6">
            <LiveStatus />
          </div>

          <div className="relative z-10 mt-4 flex items-baseline gap-3 text-center">
            <span className="font-display text-lg">{brand.personName}</span>
            <span className="text-[11px] uppercase tracking-[0.12em] text-navy-950/50 dark:text-ivory-50/50">{brand.role}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
