import { portfolio } from '../data/content'
import SectionReveal from './SectionReveal'
import PortfolioCard from './PortfolioCard'

export default function Portfolio() {
  return (
    <section id="work" className="relative bg-navy-950 py-24 text-ivory-50 md:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionReveal className="mb-16 max-w-lg">
          <p className="eyebrow mb-5 text-ivory-50/55">Work</p>
          <h2 className="font-display font-500 text-4xl leading-[1.05] sm:text-5xl">Selected reels</h2>
          <p className="mt-5 leading-relaxed text-ivory-50/70">
            A sample of the disciplines above in motion — brand edits, on-location coverage, voice work and
            performance pieces.
          </p>
        </SectionReveal>

        <SectionReveal stagger={0.12} className="grid gap-5 sm:grid-cols-2">
          {portfolio.map((p, i) => (
            <PortfolioCard key={p.index} project={p} index={i} />
          ))}
        </SectionReveal>
      </div>
    </section>
  )
}
