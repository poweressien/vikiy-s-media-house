# Vikiy Media House — v2

Creative portfolio for Victoria "Vikiy" Okoro. This is a full rebuild of the
previous static build into a React + Tailwind + Framer Motion app per the
upgrade brief — same brand, same content, substantially more alive.

## What's new

- Circular hero portrait with a five-icon "media orbit" (clapperboard, mic,
  camera, waveform, aperture) that revolves around her at two speeds, plus a
  cinematic ring, ambient particles, and camera-style focus brackets — all
  reacting subtly to the mouse on desktop.
- A brand-new **Work** section (the old site had none) — six category-mapped
  project cards with hover reveal, spotlight tilt, and a custom cursor.
- Dark-mode-only ambient background: drifting light-leak blobs, two faint
  "editing timeline" strips with a moving playhead, and a barely-visible
  viewfinder frame.
- Custom cursor (desktop only) that expands into VIEW / PLAY / OPEN labels
  over the relevant elements.
- Redesigned Services as interactive spotlight cards instead of a plain row
  list; count-up stats in Hero and About; a scroll-progress bar styled as a
  video scrub bar; magnetic CTA buttons.
- Full `prefers-reduced-motion` support and mobile-safe orbit sizing (see
  Architecture notes below — this one actually matters, don't skip it).

Everything else — the copy, the five real services, the navy/sapphire/ivory
palette, the WhatsApp/email/social links, the dark/light toggle — is carried
over as-is from the original build.

## Getting started

```bash
npm install
npm run dev       # local dev server, http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the dist/ build locally to sanity-check it
npm run smoke-test  # fast Node-only render check, no browser needed (~1s)
```

## Deployment — read this before you redeploy

**This is no longer upload-the-folder-as-is.** The old site was plain
HTML/CSS/JS you could drop on any static host directly. This version is a
Vite app: you run `npm run build`, and it's the **`dist/` folder** —not the
project root — that you deploy. `dist/` is git-ignored and isn't included in
this zip; it's generated fresh from `npm run build`. Any static host you were
already using (Railway, Render, Netlify, PythonAnywhere's static file
serving, etc.) can serve `dist/` exactly the same way it served the old
`index.html` + `css/` + `js/` — just point it at the new folder.

Asset paths are relative (not `/assets/...`), so the build works whether
it's deployed at a domain root or a subpath.

## Editing content

Every piece of real copy — bio, services, stats, contact links, social
URLs — lives in **`src/data/content.js`**. That's the one file to open for
text changes; you shouldn't need to touch component files for a copy edit.

## Swapping in real portfolio reels

The original site had no Work/portfolio section at all, so the six cards in
`content.js` → `portfolio` are placeholders: category-mapped titles like
"Brand Campaign Edit" and "Ministry Feature" (tied to your five real
services and the "ministries" line in the bio — no invented client names or
stats anywhere). Each card currently links out to the real Instagram, since
that's where actual reels live today.

To wire in a real project, just add to that entry in `content.js`:

```js
{
  index: '01',
  category: 'Video Editing',
  title: 'Whatever the real project is called',
  blurb: 'One line on it.',
  icon: 'edit',
  videoSrc: '/assets/reel-01.mp4',   // add the file to public/assets/
  poster: '/assets/reel-01.jpg',
}
```

`PortfolioCard.jsx` currently renders generated gradient art (see
Architecture below for why) — once a project has `videoSrc` set, that's the
one place to add an actual `<video>` element in place of the gradient block.

## Project structure

```
src/
  data/content.js       — all real copy, single source of truth
  lib/icons.jsx          — hand-rolled cinema/audio icon set
  hooks/                 — usePointerFine, useTheme
  components/
    CinematicBackground  — global ambient layer (dark mode only)
    CustomCursor          — desktop cursor with VIEW/PLAY/OPEN states
    ScrollProgress         — top playhead-style scroll bar
    Navigation
    Hero, MediaOrbit, MediaParticles
    SectionReveal          — shared scroll-entrance wrapper
    AnimatedStat, MagneticButton
    Services, ServiceCard
    Portfolio, PortfolioCard
    About, Contact, Footer
scripts/ssr-smoke-test.jsx — see npm run smoke-test above
```

## Architecture & decisions worth knowing about

**React instead of the original vanilla stack.** The old project was plain
HTML/CSS/JS with a Tailwind CLI build step — no React anywhere. The brief
explicitly asks for React + Tailwind + Framer Motion, so that's what this is,
but every line of real content, the color tokens, and the font pairing were
carried over rather than re-invented. This is the one instruction in the
brief that's in genuine tension with "don't rebuild from scratch" — I read
that instruction as "don't throw away the brand and content," not "don't
change the implementation language," and the mouse-parallax / staggered
reveal / spring-based interactions the brief asks for are meaningfully more
robust to build correctly in Framer Motion than hand-rolled. Worth knowing in
case it's not what you expected.

**The orbit system is sized with a CSS variable, not fixed pixels.** Early on
I had the media-orbit icons at a fixed radius (190px), which looks right on
desktop and badly overflows a 375px phone screen. Fixed it by driving the
radius from a `--orbit-r` custom property set responsively on the portrait's
wrapper (see the inline classes on the portrait stage in `Hero.jsx`), so the
whole orbit scales down with the portrait instead of needing separate mobile
logic. If you ever add more orbit items or change icon sizes, that's the
variable to adjust, not the per-item numbers in `content.js`.

**Portrait crop.** The circular crop uses `object-position: 50% 12%` —
tuned by actually generating test crops of the real portrait image at a few
focal points and comparing them side by side, not guessed. I can't render a
live browser screenshot in this environment though, so if it looks off by a
few percent once you see it running, that's the one number to nudge (in both
`Hero.jsx` and `About.jsx`).

**Two animation systems, on purpose.** Continuous ambient motion (orbit
spin, particle float/twinkle, background drift) is pure CSS keyframes —
GPU-composited, and automatically frozen by the global
`prefers-reduced-motion` rule in `index.css`. One-off entrances (scroll
reveals, stat count-ups, the cursor, magnetic buttons) use Framer Motion,
each gated individually with `useReducedMotion()`, since Framer's animations
don't run through the CSS `animation`/`transition` properties that global
rule catches. If you add new motion, keep that split — CSS for anything
infinite, Framer for anything that happens once or responds to a gesture.

**No stock photography, no icon library.** The Work section's card art is
generated from the palette + each discipline's own icon rather than sourced
photos — sidesteps licensing questions entirely and keeps the section's
asset weight at zero. Icons throughout (clapperboard, waveform, aperture
blades, film sprockets) are hand-rolled SVG in `lib/icons.jsx` rather than an
npm icon package, because the brief's specific motifs aren't things generic
icon sets render well, and it avoids pulling in a dependency for ~15 icons.

**Bundle size:** React + ReactDOM + Framer Motion + everything above comes to
~99KB gzipped JS, ~7KB gzipped CSS. No other runtime dependencies.

## Verified before delivery

- Clean production build (`npm run build`), zero errors/warnings.
- Full component tree render-tested in Node via `npm run smoke-test`
  (renders the entire app through React's actual reconciliation logic,
  catches broken props/imports/data lookups without needing a browser).
- `npm run preview` served and returned 200 with the expected bundle.
- Portrait circular crop was visually tested against five focal-point
  candidates before picking the final value.

One note from `npm install`: it flags a moderate advisory in `esbuild`
(bundled inside Vite) about the **local dev server** accepting requests from
any origin — it doesn't affect `npm run build` output or anything deployed,
only `npm run dev` while it's running on your machine. Fixing it means a
major Vite version bump, which I didn't force through unverified this late
in the build — worth doing yourself when you have time to re-test, not
urgent.

What I *couldn't* verify here: actual pixel-level visual QA in a real
browser (hover states, orbit motion, cursor feel, responsive breakpoints in
practice) — this sandbox has no display. Worth a real look on desktop +
mobile + a `prefers-reduced-motion` toggle before you call it done.
