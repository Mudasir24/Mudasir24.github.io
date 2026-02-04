import { motion } from 'framer-motion'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <motion.div 
            className="footer__brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="footer__logo">
              <span className="logo__bracket">&lt;</span>
              ML
              <span className="logo__dot">.</span>
              <span className="logo__bracket">/&gt;</span>
            </span>
            <p className="footer__tagline">
              Building intelligent systems that shape the future.
            </p>
          </motion.div>

          <div className="footer__grid">
            <motion.div 
              className="footer__column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4>Navigation</h4>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </motion.div>
            
            <motion.div 
              className="footer__column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4>Expertise</h4>
              <span>Machine Learning</span>
              <span>Deep Learning</span>
              <span>Computer Vision</span>
              <span>NLP & LLMs</span>
            </motion.div>
            
            <motion.div 
              className="footer__column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4>Connect</h4>
              <a href="https://github.com/Mudasir24" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/mudasir-ahmed-447a5924b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="tel:+919676394804">Phone</a>
              <a href="mailto:mudasir2490@gmail.com">Email</a>
            </motion.div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} All rights reserved.</p>
          <div className="footer__status">
            <span className="status__dot" />
            Available for opportunities
          </div>
          <p className="footer__credit">
            Built with React + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
