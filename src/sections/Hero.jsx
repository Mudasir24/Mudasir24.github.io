import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import TypewriterText from '../components/TypewriterText'
import FloatingMetric from '../components/FloatingMetric'
import './Hero.css'

const roles = [
  'AI & ML Engineer',
  'Computer Vision Developer',
  'Research Intern @ IIIT Hyderabad',
  'Deep Learning Enthusiast',
  'Full-Stack AI Developer'
]

const metrics = [
  { value: 99.1, label: 'Detection Accuracy', suffix: '%', decimals: 1 },
  { value: 8.94, label: 'CGPA', suffix: '/10', decimals: 2 },
  { value: 3, label: 'Major Projects', suffix: '+', decimals: 0 },
  { value: 6, label: 'Certifications', suffix: '+', decimals: 0 }
]

function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section className="hero" ref={containerRef}>
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      
      <motion.div 
        className="hero__content container"
        style={{ y, opacity }}
      >
        <motion.div 
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="badge__dot" />
          <span className="badge__text">Available for new opportunities</span>
        </motion.div>

        <motion.h1 
          className="hero__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="title__line">Hi, I'm</span>
          <span className="title__name text-gradient">Mohammed Mudasir</span>
        </motion.h1>

        <motion.div 
          className="hero__role"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="role__prefix">&lt;</span>
          <TypewriterText texts={roles} className="role__text" />
          <span className="role__suffix">/&gt;</span>
        </motion.div>

        <motion.p 
          className="hero__description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Top-ranked AI/ML undergraduate building end-to-end intelligent systems.
          Specializing in computer vision, deep learning, and LLM-powered applications
          to solve real-world problems.
        </motion.p>

        <motion.div 
          className="hero__cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a href="#projects" className="btn btn--primary">
            <span>View My Work</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn--ghost">
            <span>Let's Talk</span>
          </a>
        </motion.div>

        <motion.div 
          className="hero__metrics"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          {metrics.map((metric, index) => (
            <FloatingMetric 
              key={metric.label}
              value={metric.value}
              label={metric.label}
              suffix={metric.suffix}
              decimals={metric.decimals}
              delay={1200 + index * 150}
            />
          ))}
        </motion.div>

        <motion.div 
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div 
            className="scroll__indicator"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          <span className="scroll__text">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
