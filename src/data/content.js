// ============================================================================
// Vikiy Media House — content data
// All real copy lives here, ported 1:1 from the original static build.
// Nothing in this file was invented except where explicitly marked PLACEHOLDER.
// ============================================================================

export const brand = {
  name: 'Vikiy Media House',
  personName: 'Victoria Okoro',
  personFullName: 'Victoria Kenneth Okoro',
  personNickname: 'Vikiy',
  role: 'Founder & Creative Director',
  whatsapp: '+234 902 551 7751',
  whatsappHref: 'https://wa.me/2349025517751',
  email: 'vikiyluv@gmail.com',
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Vikiy Media House',
  headlineMain: 'Crafting stories,',
  headlineItalic: 'worth remembering.',
  paragraph:
    'Victoria \u201CVikiy\u201D Okoro is a Nigerian creative director working across ' +
    'video editing, videography, voiceover and performance \u2014 building ' +
    'considered, well-crafted work for brands, creators and ministries ' +
    'who care about getting it right.',
  stats: [
    { value: 4, suffix: '+', label: 'Years active' },
    { value: 5, pad: 2, label: 'Core services' },
    { value: 100, suffix: '%', label: 'Self-taught' },
  ],
  // Live status pill — cycles slowly, purely a premium ambient touch.
  statusMessages: ['In the editing suite', 'Currently creating', 'Reviewing footage'],
}

// Services — icon keys map to components in lib/icons.jsx
export const services = [
  {
    index: '01',
    icon: 'edit',
    title: 'Video Editing',
    description: 'Professional editing that brings your story to life — pacing, colour and sound cut to fit the message.',
  },
  {
    index: '02',
    icon: 'camera',
    title: 'Videography',
    description: 'High-quality video production that captures every moment, on set or on location.',
  },
  {
    index: '03',
    icon: 'mic',
    title: 'Voiceover Services',
    description: 'Clear, engaging voiceovers that communicate your message with the right tone.',
  },
  {
    index: '04',
    icon: 'spark',
    title: 'AI Generator',
    description: 'AI-powered tools folded into the workflow for smarter, faster content creation.',
  },
  {
    index: '05',
    icon: 'mask',
    title: 'Monologue Services',
    description: 'Powerful monologues delivered with expression and emotion, for film, stage or script work.',
  },
]

// ----------------------------------------------------------------------------
// PLACEHOLDER — Work / portfolio section.
// The original site had no project reel section at all. These six entries are
// category-mapped placeholders (tied to the five real services above, plus
// the "ministries" client type mentioned in the real bio) so the interaction
// system — hover, spotlight, custom cursor, "play reel" — is fully built and
// ready. Each card's `href` currently points to the real Instagram, where
// Vikiy's actual reels live. To swap in a real project: give it a `videoSrc`
// (mp4/webm URL) and `poster` image and PortfolioCard will render an actual
// muted hover-to-play preview instead of the generated art. No fabricated
// client names or stats are used anywhere below.
// ----------------------------------------------------------------------------
export const portfolio = [
  {
    index: '01',
    category: 'Video Editing',
    title: 'Brand Campaign Edit',
    blurb: 'Pacing, colour and sound cut to match the message.',
    icon: 'edit',
    videoSrc: null,
    poster: null,
  },
  {
    index: '02',
    category: 'Videography',
    title: 'On-Location Feature',
    blurb: 'Multi-camera coverage shaped into one clean visual story.',
    icon: 'camera',
    videoSrc: null,
    poster: null,
  },
  {
    index: '03',
    category: 'Voiceover',
    title: 'Podcast Intro Series',
    blurb: 'Tone-matched voice work for a recurring show.',
    icon: 'mic',
    videoSrc: null,
    poster: null,
  },
  {
    index: '04',
    category: 'AI Generator',
    title: 'AI-Assisted Product Reel',
    blurb: 'AI-powered tools folded in for a faster turnaround.',
    icon: 'spark',
    videoSrc: null,
    poster: null,
  },
  {
    index: '05',
    category: 'Monologue Performance',
    title: 'Spoken Word Piece',
    blurb: 'A monologue delivered with expression, shot and cut for film.',
    icon: 'mask',
    videoSrc: null,
    poster: null,
  },
  {
    index: '06',
    category: 'Videography',
    title: 'Ministry Feature',
    blurb: 'Coverage for a ministry project, edited for weekly reach.',
    icon: 'filmstrip',
    videoSrc: null,
    poster: null,
  },
]

export const about = {
  eyebrow: 'About',
  heading: 'Self-taught, self-made.',
  paragraphs: [
    'Victoria Kenneth Okoro \u2014 known as Vikiy \u2014 is the founder and creative ' +
      'director of Vikiy Media House. She\u2019s spent over four years building a ' +
      'practice around visual storytelling: editing, shooting, voicing and ' +
      'performing work that connects with an audience instead of just ' +
      'filling a runtime.',
    'Every skill in her toolkit was built the same way \u2014 consistent ' +
      'practice, real projects, and a habit of picking up new tools before ' +
      'anyone tells her to. No formal training, no shortcuts.',
  ],
  stats: [
    { value: 4, suffix: '+', label: 'Years of experience' },
    { value: 100, suffix: '%', label: 'Self-taught' },
    { value: 5, pad: 2, label: 'Services offered' },
  ],
}

export const contact = {
  eyebrow: 'Get in touch',
  headingMain: "Let's create something",
  headingItalic: 'worth watching.',
  ctaLabel: 'Message on WhatsApp',
}

export const socials = [
  { label: 'Facebook \u2014 Vikiy', href: 'https://www.facebook.com/share/1D66QrhC3Y/', icon: 'facebook' },
  { label: 'Facebook \u2014 Vikiy Media House', href: 'https://www.facebook.com/share/19EdoGxMzc/', icon: 'facebook-page' },
  { label: 'Instagram \u2014 Vikiy Media House', href: 'https://www.instagram.com/vikiymediahouse?igsi=bjhjdXI5MW96MHgy', icon: 'instagram' },
]

// Media orbit — the ring of profession icons that circle the hero portrait.
// `tier` picks a radius derived from the --orbit-r CSS variable set
// responsively on the stage wrapper in Hero.jsx (see MediaOrbit.jsx) rather
// than a fixed px value, so the whole system scales with viewport instead
// of risking overflow on narrow screens. duration/direction/angle/size still
// drive the per-item CSS orbit animation directly.
export const orbitItems = [
  { icon: 'clapper', tier: 'outer', duration: 26, direction: 1, angle: 0, size: 44 },
  { icon: 'mic', tier: 'outer', duration: 26, direction: 1, angle: 72, size: 38 },
  { icon: 'camera', tier: 'outer', duration: 26, direction: 1, angle: 144, size: 42 },
  { icon: 'waveform', tier: 'outer', duration: 26, direction: 1, angle: 216, size: 38 },
  { icon: 'aperture', tier: 'outer', duration: 26, direction: 1, angle: 288, size: 40 },
  { icon: 'play', tier: 'inner', duration: 34, direction: -1, angle: 40, size: 30 },
  { icon: 'filmstrip', tier: 'inner', duration: 34, direction: -1, angle: 200, size: 34 },
]
