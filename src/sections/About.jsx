import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './About.css'

const techStack = [
  { name: 'Python', icon: '🐍' },
  { name: 'LangChain', icon: '⛓️' },
  { name: 'MediaPipe', icon: '🖐️' },
  { name: 'Scikit-learn', icon: '📊' },
  { name: 'YOLOv8', icon: '👁️' },
  { name: 'Streamlit', icon: '🎈' },
  { name: 'Flask', icon: '🌶️' },
  { name: 'AWS', icon: '☁️' },
  { name: 'NumPy/Pandas', icon: '📈' },
  { name: 'JavaScript', icon: '⚡' }
]

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section id="about" className="about section">
      <div className="about__glow" />
      
      <motion.div 
        ref={ref}
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div className="about__header" variants={itemVariants}>
          <span className="section__label">
            <span className="label__line" />
            About Me
          </span>
          <h2 className="about__title">
            Turning complex data into
            <span className="text-gradient"> intelligent solutions</span>
          </h2>
        </motion.div>

        <div className="about__grid">
          <motion.div className="about__content" variants={itemVariants}>
            <div className="about__text">
              <p>
                I'm a top-ranked AI & Machine Learning undergraduate at Muffakham Jah 
                College of Engineering (Osmania University), with hands-on experience 
                developing and deploying end-to-end ML systems.
              </p>
              <p>
                Currently a Research Intern at iHub-Data, IIIT Hyderabad, contributing 
                to cutting-edge computer vision research focusing on object detection 
                and segmentation using pre-trained models.
              </p>
              <p>
                I've built production-ready AI solutions—from LLM-powered analytics 
                platforms to real-time sign language translators—earning recognition 
                at AWS Cloud Ignite'25 and multiple hackathons.
              </p>
            </div>

            <div className="about__tech">
              <h3 className="tech__title">Tech I Work With</h3>
              <div className="tech__grid">
                {techStack.map((tech, index) => (
                  <motion.div 
                    key={tech.name}
                    className="tech__item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.05 }}
                  >
                    <span className="tech__icon">{tech.icon}</span>
                    <span className="tech__name">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="about__certifications">
              <h3 className="certs__title">Certifications & Training</h3>
              <div className="certs__list">
                <div className="cert__item">
                  <span className="cert__icon">🎓</span>
                  <div className="cert__info">
                    <span className="cert__name">AI & ML Training Program</span>
                    <span className="cert__org">IIIT Hyderabad</span>
                  </div>
                </div>
                <div className="cert__item">
                  <span className="cert__icon">📜</span>
                  <div className="cert__info">
                    <span className="cert__name">Machine Learning Specialization</span>
                    <span className="cert__org">Stanford (Coursera) - Andrew Ng</span>
                  </div>
                </div>
                <div className="cert__item">
                  <span className="cert__icon">🤖</span>
                  <div className="cert__info">
                    <span className="cert__name">Generative AI Foundations</span>
                    <span className="cert__org">UpGrad × Microsoft</span>
                  </div>
                </div>
                <div className="cert__item">
                  <span className="cert__icon">☁️</span>
                  <div className="cert__info">
                    <span className="cert__name">ML Project Certification</span>
                    <span className="cert__org">AWS Club, MJCET</span>
                  </div>
                </div>
                <div className="cert__item">
                  <span className="cert__icon">💻</span>
                  <div className="cert__info">
                    <span className="cert__name">CS50x - Intro to Computer Science</span>
                    <span className="cert__org">Harvard University (edX)</span>
                  </div>
                </div>
                <div className="cert__item">
                  <span className="cert__icon">☕</span>
                  <div className="cert__info">
                    <span className="cert__name">Programming in Java (85%)</span>
                    <span className="cert__org">IIT Kharagpur (NPTEL)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="about__visual" variants={itemVariants}>
            <div className="visual__card">
              <div className="card__header">
                <div className="card__dots">
                  <span></span><span></span><span></span>
                </div>
                <span className="card__title">mudasir_ai.py</span>
              </div>
              <pre className="card__code">
                <code>
{`class MudasirAI:
    def __init__(self):
        self.role = "AI/ML Engineer"
        self.location = "Hyderabad"
        self.cgpa = 8.94
        
    def build_solution(self, problem):
        # Research → Develop → Deploy
        model = self.innovate(problem)
        return model.make_impact()
        
    def solve_problems(self):
        while True:
            self.learn()
            self.create()
            self.iterate()`}
                </code>
              </pre>
              <div className="card__glow" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
