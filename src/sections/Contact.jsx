import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './Contact.css'

const socialLinks = [
  { 
    name: 'GitHub', 
    url: 'https://github.com/Mudasir24', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    )
  },
  { 
    name: 'LinkedIn', 
    url: 'https://linkedin.com/in/mudasir-ahmed-447a5924b', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  { 
    name: 'Phone', 
    url: 'tel:+919676394804', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    name: 'Email', 
    url: 'mailto:mudasir2490@gmail.com', 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

function Contact() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    alert('Message sent successfully! I\'ll get back to you soon.')
    setFormState({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="contact section">
      <div className="contact__glow" />
      
      <div className="container">
        <motion.div 
          ref={headerRef}
          className="contact__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section__label">
            <span className="label__line" />
            Get in Touch
          </span>
          <h2 className="contact__title">
            Let's build something
            <span className="text-gradient"> amazing together</span>
          </h2>
          <p className="contact__subtitle">
            Have a project in mind or want to discuss AI/ML solutions? 
            I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.div 
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="info__card">
              <div className="info__header">
                <span className="info__icon">📍</span>
                <h3>Location</h3>
              </div>
              <p>Hyderabad, Telangana</p>
              <span className="info__detail">Open to relocation & remote work</span>
            </div>

            <div className="info__card">
              <div className="info__header">
                <span className="info__icon">⏰</span>
                <h3>Response Time</h3>
              </div>
              <p>Within 24 hours</p>
              <span className="info__detail">Usually much faster</span>
            </div>

            <div className="info__card">
              <div className="info__header">
                <span className="info__icon">💼</span>
                <h3>Open For</h3>
              </div>
              <p>Full-time & Internships</p>
              <span className="info__detail">AI/ML roles, Research positions</span>
            </div>

            <div className="contact__social">
              <h4>Connect with me</h4>
              <div className="social__links">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social__link"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="form__row">
              <div className={`form__group ${focusedField === 'name' || formState.name ? 'focused' : ''}`}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
                <label htmlFor="name">Your Name</label>
                <div className="form__line" />
              </div>

              <div className={`form__group ${focusedField === 'email' || formState.email ? 'focused' : ''}`}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
                <label htmlFor="email">Email Address</label>
                <div className="form__line" />
              </div>
            </div>

            <div className={`form__group ${focusedField === 'subject' || formState.subject ? 'focused' : ''}`}>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField(null)}
                required
              />
              <label htmlFor="subject">Subject</label>
              <div className="form__line" />
            </div>

            <div className={`form__group ${focusedField === 'message' || formState.message ? 'focused' : ''}`}>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                rows="5"
                required
              />
              <label htmlFor="message">Your Message</label>
              <div className="form__line" />
            </div>

            <motion.button 
              type="submit" 
              className="form__submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <span className="submit__spinner" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
