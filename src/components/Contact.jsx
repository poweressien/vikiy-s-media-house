import { contact, brand, socials } from '../data/content'
import SectionReveal from './SectionReveal'
import MagneticButton from './MagneticButton'
import { SOCIAL_ICONS } from '../lib/icons'

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
        <SectionReveal>
          <p className="eyebrow mb-6 text-navy-950/55 dark:text-ivory-50/55">{contact.eyebrow}</p>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <h2 className="font-display font-500 text-4xl leading-[1.05] sm:text-6xl">
            {contact.headingMain} <span className="italic text-sapphire-600 dark:text-sapphire-400">{contact.headingItalic}</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.16} className="mt-14 flex flex-col items-center gap-4">
          <a href={brand.whatsappHref} target="_blank" rel="noopener" data-cursor="open" className="link-grow font-display text-2xl sm:text-3xl">
            {brand.whatsapp}
          </a>
          <a href={`mailto:${brand.email}`} data-cursor="open" className="link-grow font-display text-2xl sm:text-3xl">
            {brand.email}
          </a>
        </SectionReveal>

        <SectionReveal delay={0.22} className="mt-12">
          <MagneticButton
            href={brand.whatsappHref}
            target="_blank"
            rel="noopener"
            data-cursor="open"
            className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-8 py-4 text-[13px] uppercase tracking-[0.14em] text-ivory-50 transition-opacity hover:opacity-85 dark:bg-ivory-50 dark:text-navy-950"
          >
            {contact.ctaLabel}
          </MagneticButton>
        </SectionReveal>

        <SectionReveal delay={0.28} className="mt-16 flex items-center justify-center gap-4">
          {socials.map((s) => {
            const Icon = SOCIAL_ICONS[s.icon]
            return (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener"
                aria-label={s.label}
                data-cursor="open"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-950/15 transition-colors hover:border-navy-950 dark:border-ivory-50/15 dark:hover:border-ivory-50"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            )
          })}
        </SectionReveal>
      </div>
    </section>
  )
}
