import CinematicBackground from './components/CinematicBackground'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Section order follows the nav order from the brief (About, Services,
// Work, Contact) so clicking a nav item always scrolls forward, never back
// up the page.
export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <CinematicBackground />
      <ScrollProgress />
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
