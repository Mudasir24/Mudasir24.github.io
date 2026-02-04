import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

function FloatingMetric({ value, label, suffix = '', delay = 0, decimals = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)
  
  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const start = performance.now()
      const animate = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const currentValue = value * eased
        setDisplayValue(decimals > 0 ? currentValue.toFixed(decimals) : Math.floor(currentValue))
        if (progress < 1) requestAnimationFrame(animate)
      }
      const timer = setTimeout(() => requestAnimationFrame(animate), delay)
      return () => clearTimeout(timer)
    }
  }, [isInView, value, delay, decimals])

  return (
    <motion.div 
      ref={ref}
      className="floating-metric"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <div className="metric__value">
        <span className="metric__number">{displayValue}</span>
        <span className="metric__suffix">{suffix}</span>
      </div>
      <div className="metric__label">{label}</div>
      <div className="metric__glow" />
    </motion.div>
  )
}

export default FloatingMetric
