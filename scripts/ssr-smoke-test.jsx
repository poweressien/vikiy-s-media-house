// Fast render smoke test — renders the full <App/> tree with React's
// server renderer in plain Node (no browser needed) and fails loudly if any
// component throws during render. Doesn't replace checking the real thing
// in a browser (useEffect-driven behaviour — cursor tracking, scroll
// listeners, matchMedia — doesn't run here), but it catches the far more
// common class of bug — a bad prop, an undefined data lookup, a broken
// import — in about a second, which is why it's wired up as `npm run
// smoke-test` rather than left as a one-off.
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/App.jsx'

try {
  const html = renderToString(React.createElement(App))
  console.log(`\u2713 SSR smoke test passed — rendered ${html.length} characters with no errors.`)
} catch (err) {
  console.error('\u2717 SSR smoke test FAILED — a component threw during render:\n')
  console.error(err && err.stack ? err.stack : err)
  process.exit(1)
}
