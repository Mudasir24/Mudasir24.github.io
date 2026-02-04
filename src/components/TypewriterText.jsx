import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

const useTypewriter = (texts, typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) => {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(pauseTimer)
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setIsPaused(true)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, isPaused, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration])

  return displayText
}

function TypewriterText({ texts, className = '' }) {
  const displayText = useTypewriter(texts)

  return (
    <span className={className}>
      {displayText}
      <motion.span
        className="cursor"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        |
      </motion.span>
    </span>
  )
}

export default TypewriterText
