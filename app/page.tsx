import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Projects from '@/components/sections/projects'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'
import Navigation from '@/components/navigation'
import BackToTop from '@/components/back-to-top'
import SkipLink from '@/components/skip-link'

export default function Home() {
  return (
    <>
      <SkipLink />
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <BackToTop />
    </>
  )
}
