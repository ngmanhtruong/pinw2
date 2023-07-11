import { useCallback, useRef, useState } from 'react'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import Partners from './components/Partners'
import Team from './components/Team'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'

function App() {
  const homeRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const tokenomicsRef = useRef<HTMLDivElement | null>(null)
  const roadmapRef = useRef<HTMLDivElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)

  const scrollToHome = useCallback(() => {
    homeRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
    console.log('scrollToHome', homeRef.current)
  }, [])

  const scrollToAbout = useCallback(() => {
    aboutRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [])

  const scrollToTokenomics = useCallback(() => {
    tokenomicsRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [])

  const scrollToRoadmap = useCallback(() => {
    roadmapRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [])

  const scrollToContact = useCallback(() => {
    contactRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [])

  return (
    <div className="w-full pt-16 px-10 pb-5">
      <NavigationBar
        scrollToHome={scrollToHome}
        scrollToAbout={scrollToAbout}
        scrollToTokenomics={scrollToTokenomics}
        scrollToRoadmap={scrollToRoadmap}
        scrollToContact={scrollToContact}
      />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Tokenomics ref={tokenomicsRef} />
      <Roadmap ref={roadmapRef} />
      <Partners />
      <Team />
      <Footer ref={contactRef} />
    </div>
  )
}

export default App
