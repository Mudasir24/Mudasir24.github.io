import { motion } from 'framer-motion'

function AnimatedText({ text, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {text}
    </motion.div>
  )
}

export default AnimatedText
