// ============================================================================
// Hand-rolled icon set. Deliberately not an npm icon library — the brief
// calls for specific cinema/audio/editing motifs (clapperboard, waveform,
// aperture blades, film sprockets, timeline nodes) that generic icon sets
// don't render well, and every icon here shares one stroke language so the
// orbit / services / portfolio art all reads as one system.
// All icons: viewBox 0 0 24 24, stroke="currentColor", fill="none" unless noted.
// ============================================================================

const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function IconClapper({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3 10.5 20.5 7l.9 4.4L4 15z" />
      <path d="M3 10.5 3.9 20a1 1 0 0 0 1 .9h13.6a1 1 0 0 0 1-.85L21 11" />
      <path d="m5.8 9 2 3.6M10 8.1l2 3.6M14.2 7.3l2 3.6" strokeWidth="1.3" />
    </svg>
  )
}

export function IconMic({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="9" y="2.5" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0" />
      <path d="M12 17.5V21M8.5 21h7" />
    </svg>
  )
}

export function IconCamera({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2l1.2-1.8a1.5 1.5 0 0 1 1.25-.7h6.1a1.5 1.5 0 0 1 1.25.7L17.5 7h2A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z" />
      <circle cx="12" cy="13" r="3.6" />
    </svg>
  )
}

export function IconWaveform({ className }) {
  const bars = [4, 10, 15, 8, 18, 6, 12]
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      {bars.map((h, i) => (
        <line key={i} x1={2 + i * 3.4} y1={12 - h / 2} x2={2 + i * 3.4} y2={12 + h / 2} />
      ))}
    </svg>
  )
}

export function IconAperture({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="9.2" />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <line
          key={a}
          x1="12"
          y1="12"
          x2={12 + 7.6 * Math.cos((a * Math.PI) / 180)}
          y2={12 + 7.6 * Math.sin((a * Math.PI) / 180)}
          strokeWidth="1.3"
          opacity="0.85"
        />
      ))}
      <circle cx="12" cy="12" r="2.6" strokeWidth="1.3" />
    </svg>
  )
}

export function IconPlay({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M10 8.3v7.4l6-3.7z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconFilmstrip({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="2.5" y="4" width="19" height="16" rx="1.4" />
      <line x1="7.3" y1="4" x2="7.3" y2="20" strokeWidth="1.3" />
      <line x1="16.7" y1="4" x2="16.7" y2="20" strokeWidth="1.3" />
      {[6.2, 9.6, 13, 16.4, 19.8].map((y) => (
        <g key={y}>
          <line x1="3.6" y1={y} x2="6" y2={y} strokeWidth="1.3" />
          <line x1="18" y1={y} x2="20.4" y2={y} strokeWidth="1.3" />
        </g>
      ))}
    </svg>
  )
}

export function IconEdit({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <line x1="2.5" y1="12" x2="21.5" y2="12" />
      <circle cx="7" cy="12" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="14" cy="12" r="1.7" fill="currentColor" stroke="none" />
      <path d="M18.3 8.6v6.8l4-3.4z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconSpark({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 2.5c.6 3.7 1.9 5.9 5.5 6.5-3.6.6-4.9 2.8-5.5 6.5-.6-3.7-1.9-5.9-5.5-6.5 3.6-.6 4.9-2.8 5.5-6.5Z" />
      <path d="M18.5 15.5c.3 1.7.9 2.7 2.5 3-1.6.3-2.2 1.3-2.5 3-.3-1.7-.9-2.7-2.5-3 1.6-.3 2.2-1.3 2.5-3Z" strokeWidth="1.2" />
    </svg>
  )
}

export function IconMask({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 8c0-2.5 3.2-4.2 8-4.2S20 5.5 20 8c0 4.8-2.7 10.2-8 10.2S4 12.8 4 8Z" />
      <path d="M8.2 9.4c.5-.7 1.9-.7 2.4 0M13.4 9.4c.5-.7 1.9-.7 2.4 0" />
      <path d="M9 13.4c1.7 1.3 4.3 1.3 6 0" />
    </svg>
  )
}

export function IconArrowRight({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconChevronDown({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function IconMenu({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function IconClose({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  )
}

export function IconSun({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

export function IconMoon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none">
      <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 1020.354 15.354z" />
    </svg>
  )
}

export function IconFacebook({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 15.99 2 14.75 2 12.14 2 10 3.57 10 6.7v2.8H7v4h3V22h4v-8.5z" />
    </svg>
  )
}

export function IconFacebookPage({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <path d="M13 8.5h1.6V6.7c-.28-.04-1.24-.12-1.9-.12-1.9 0-3.2 1.15-3.2 3.28v1.64H7.4v2.2h2.1V19h2.4v-5.3h2.1l.34-2.2h-2.44V10c0-.63.18-1.5 1.1-1.5z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconInstagram({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export const ICONS = {
  clapper: IconClapper,
  mic: IconMic,
  camera: IconCamera,
  waveform: IconWaveform,
  aperture: IconAperture,
  play: IconPlay,
  filmstrip: IconFilmstrip,
  edit: IconEdit,
  spark: IconSpark,
  mask: IconMask,
}

export const SOCIAL_ICONS = {
  facebook: IconFacebook,
  'facebook-page': IconFacebookPage,
  instagram: IconInstagram,
}
