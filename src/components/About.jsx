import { about, brand } from '../data/content'
import SectionReveal from './SectionReveal'
import AnimatedStat from './AnimatedStat'

export default function About() {
  return (
    <section id="about" className="relative bg-navy-950 py-24 text-ivory-50 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 sm:px-10 md:grid-cols-12">
        <SectionReveal variant="scale" className="md:col-span-5">
          <figure className="mx-auto max-w-sm md:mx-0">
            <div className="overflow-hidden rounded-md border border-white/10 shadow-deep">
              <picture>
                <source srcSet="assets/portrait.webp" type="image/webp" />
                <img
                  src="assets/portrait.png"
                  alt={`${brand.personName} portrait`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>
          </figure>
        </SectionReveal>

        <SectionReveal delay={0.12} className="md:col-span-7">
          <p className="eyebrow mb-5 text-ivory-50/55">{about.eyebrow}</p>
          <h2 className="font-display font-500 text-4xl leading-[1.05] sm:text-5xl">{about.heading}</h2>

          {about.paragraphs.map((p, i) => (
            <p key={i} className={`max-w-xl leading-relaxed text-ivory-50/75 ${i === 0 ? 'mt-7' : 'mt-4'}`}>
              {p}
            </p>
          ))}

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-8 border-t border-white/10 pt-8">
            {about.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl text-sapphire-400">
                  <AnimatedStat value={s.value} suffix={s.suffix} pad={s.pad} />
                </p>
                <p className="mt-1.5 text-[11px] uppercase tracking-[0.12em] text-ivory-50/50">{s.label}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
