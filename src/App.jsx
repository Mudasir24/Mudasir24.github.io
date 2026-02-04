import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import NeuralCanvas from './components/NeuralCanvas'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="loader">
        <div className="loader__spinner" />
        <span className="loader__text">Initializing Neural Network...</span>
      </div>
    )
  }

  return (
    <div className="app">
      <NeuralCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
