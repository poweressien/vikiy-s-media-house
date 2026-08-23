import { services } from '../data/content'
import SectionReveal from './SectionReveal'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <section id="services" className="relative border-t border-navy-950/10 py-24 dark:border-ivory-50/10 md:py-32">
      <div className="tick-rule pointer-events-none absolute inset-0 text-navy-950 dark:text-ivory-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-10">
        <SectionReveal className="mb-16 max-w-lg">
          <p className="eyebrow mb-5 text-navy-950/55 dark:text-ivory-50/55">Services</p>
          <h2 className="font-display font-500 text-4xl leading-[1.05] sm:text-5xl">What I bring to a project</h2>
          <p className="mt-5 leading-relaxed text-navy-950/70 dark:text-ivory-50/70">
            Five disciplines, one standard — work that&rsquo;s considered, well-made, and built to hold an audience&rsquo;s
            attention.
          </p>
        </SectionReveal>

        <SectionReveal stagger={0.1} className="grid gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.index} service={s} />
          ))}
        </SectionReveal>
      </div>
    </section>
  )
}
