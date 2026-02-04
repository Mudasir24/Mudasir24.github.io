import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'InsightBot - AI Analytics System',
    description: 'End-to-end LLM-powered analytics system that transforms raw, unstructured text into queryable datasets with natural-language analytics and dynamic visualizations. Features Explainable AI (XAI) layer and human-in-the-loop feedback.',
    tags: ['Python', 'LangChain', 'Google Gemini Pro', 'Streamlit', 'Plotly', 'Pandas'],
    category: 'NLP/LLMs',
    github: 'https://github.com/Mudasir24',
    metrics: { accuracy: '92.3%', type: 'LLM-Powered' },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'SmartLink - Waste Management AI',
    description: 'AI-powered Smart Governance platform enabling citizens to report roadside garbage via image upload with CCTV automation. Reduced municipal auditing hours by 75% and response time by 60%.',
    tags: ['YOLOv8', 'AWS SageMaker', 'Flask', 'AWS S3/RDS/SNS', 'JavaScript'],
    category: 'Computer Vision',
    github: 'https://github.com/Mudasir24',
    demo: 'https://demo.com',
    metrics: { accuracy: '99.1%', dataset: '15K images' },
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'Bidirectional ISL Translator',
    description: 'Real-time bidirectional Indian Sign Language translation system bridging communication between hearing and speech-impaired users. Curated 36,000+ gesture samples for training.',
    tags: ['MediaPipe', 'MLP Classifier', 'Streamlit', 'Flask', 'gTTS', 'NLP'],
    category: 'Computer Vision',
    github: 'https://github.com/Mudasir24',
    metrics: { accuracy: '94.2%', samples: '36K+' },
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop'
  }
]

const categories = ['All', 'Computer Vision', 'NLP/LLMs', 'Machine Learning']

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.article
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      layout
    >
      <div className="project-card__image">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-card__overlay">
          <div className="project-card__links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Code
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link project-link--primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Demo
              </a>
            )}
          </div>
        </div>
        <span className="project-card__category">{project.category}</span>
      </div>
      
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        
        <div className="project-card__metrics">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="metric">
              <span className="metric__value">{value}</span>
              <span className="metric__label">{key}</span>
            </div>
          ))}
        </div>
        
        <div className="project-card__tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

function Projects() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="projects section">
      <div className="projects__glow" />
      
      <div className="container">
        <motion.div 
          ref={headerRef}
          className="projects__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section__label">
            <span className="label__line" />
            Featured Work
          </span>
          <h2 className="projects__title">
            ML/AI projects that push the boundaries of
            <span className="text-gradient"> what's possible</span>
          </h2>
          <p className="projects__subtitle">
            From computer vision to NLP, explore some of my most impactful 
            machine learning projects and research.
          </p>
        </motion.div>

        <motion.div 
          className="projects__filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div className="projects__grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
