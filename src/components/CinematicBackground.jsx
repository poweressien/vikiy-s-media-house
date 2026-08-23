// Global ambient layer — sits behind every section. Deliberately dark-mode
// only: the light/ivory theme keeps the original clean editorial look, and
// these light-leak / timeline motifs are written for a dark "editing suite"
// backdrop (brief section 11). `hidden dark:block` means it isn't even
// mounted-visible (display:none) in light mode, so nothing animates unseen.
const PARTICLES = [
  { top: '12%', left: '8%', size: 3, delay: '0s' },
  { top: '22%', left: '92%', size: 2, delay: '-1.2s' },
  { top: '38%', left: '18%', size: 2, delay: '-2.4s' },
  { top: '55%', left: '85%', size: 3, delay: '-0.6s' },
  { top: '68%', left: '6%', size: 2, delay: '-3.1s' },
  { top: '80%', left: '46%', size: 2, delay: '-1.8s' },
  { top: '15%', left: '55%', size: 2, delay: '-2.9s' },
  { top: '90%', left: '75%', size: 3, delay: '-0.3s' },
]

function TimelineStrip({ top, reverse, duration = '16s' }) {
  return (
    <div className="absolute left-0 right-0 text-ivory-50" style={{ top }} aria-hidden="true">
      <div className="tick-rule absolute inset-x-0 h-px" />
      <div
        className="absolute -top-[3px] left-0 h-[7px] w-[7px] rounded-full bg-sapphire-400/60"
        style={{
          animation: `playhead ${duration} linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
          boxShadow: '0 0 12px 2px rgba(91,127,224,0.5)',
        }}
      />
    </div>
  )
}

function ViewfinderFrame() {
  const corner = 'absolute h-8 w-8 border-ivory-50/[0.07] sm:h-10 sm:w-10'
  return (
    <div aria-hidden="true" className="fixed inset-4 sm:inset-6 pointer-events-none">
      <span className={`${corner} left-0 top-0 border-l border-t`} />
      <span className={`${corner} right-0 top-0 border-r border-t`} />
      <span className={`${corner} left-0 bottom-0 border-l border-b`} />
      <span className={`${corner} right-0 bottom-0 border-r border-b`} />
    </div>
  )
}

export default function CinematicBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 hidden overflow-hidden dark:block">
      {/* light-leak blobs */}
      <div className="animate-drift absolute -left-24 -top-32 h-[520px] w-[520px] rounded-full bg-sapphire-600/25 mix-blend-screen blur-[110px]" />
      <div className="animate-drift-alt absolute -right-32 top-1/3 h-[480px] w-[480px] rounded-full bg-iris-600/20 mix-blend-screen blur-[120px]" />
      <div
        className="animate-drift absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full bg-sapphire-700/15 mix-blend-screen blur-[100px]"
        style={{ animationDelay: '-6s' }}
      />

      {/* faint editing timeline strips, each with a slow-moving playhead */}
      <TimelineStrip top="24%" duration="19s" />
      <TimelineStrip top="71%" duration="23s" reverse />

      {/* ambient light particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="animate-twinkle absolute rounded-full bg-ivory-50"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size, animationDelay: p.delay }}
        />
      ))}

      <ViewfinderFrame />
    </div>
  )
}
