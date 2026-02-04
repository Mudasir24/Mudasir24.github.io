import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Skills.css'

const skillCategories = [
  {
    title: 'Machine Learning',
    icon: '🧠',
    description: 'Building intelligent models from data',
    skills: [
      { name: 'Deep Learning', level: 90 },
      { name: 'Computer Vision', level: 92 },
      { name: 'NLP / LLMs', level: 88 },
      { name: 'Supervised & Unsupervised', level: 90 },
      { name: 'Scikit-learn', level: 92 }
    ]
  },
  {
    title: 'Programming & Data',
    icon: '⚡',
    description: 'Core languages and data tools',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'SQL', level: 85 },
      { name: 'NumPy / Pandas', level: 92 }
    ]
  },
  {
    title: 'Frameworks & Cloud',
    icon: '☁️',
    description: 'ML tools and cloud services',
    skills: [
      { name: 'LangChain', level: 88 },
      { name: 'MediaPipe', level: 90 },
      { name: 'AWS Services', level: 85 },
      { name: 'Streamlit / Flask', level: 90 },
      { name: 'YOLOv8', level: 88 }
    ]
  }
]

const expertise = [
  { name: 'Object Detection', icon: '🎯' },
  { name: 'LLM Applications', icon: '💬' },
  { name: 'Gesture Recognition', icon: '🖐️' },
  { name: 'AWS SageMaker', icon: '☁️' },
  { name: 'Real-time Systems', icon: '⚡' },
  { name: 'Full-Stack AI', icon: '🔧' },
  { name: 'Data Visualization', icon: '📊' },
  { name: 'API Development', icon: '🔗' }
]

function SkillBar({ name, level, delay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar__info">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ 
            duration: 1.2,
            delay: delay * 0.08,
            ease: [0.22, 1, 0.36, 1]
          }}
        />
      </div>
    </div>
  )
}

function SkillCategory({ category, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div 
      ref={ref}
      className="skill-category"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="category__header">
        <span className="category__icon">{category.icon}</span>
        <div>
          <h3 className="category__title">{category.title}</h3>
          <p className="category__description">{category.description}</p>
        </div>
      </div>
      <div className="category__skills">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar 
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={index * 5 + skillIndex}
          />
        ))}
      </div>
    </motion.div>
  )
}

function Skills() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="skills section">
      <div className="skills__glow" />
      
      <div className="container">
        <motion.div 
          ref={headerRef}
          className="skills__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section__label">
            <span className="label__line" />
            Skills & Expertise
          </span>
          <h2 className="skills__title">
            Specialized in building
            <span className="text-gradient"> AI-powered solutions</span>
          </h2>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>

        <motion.div 
          className="skills__expertise"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="expertise__title">Areas of Expertise</h3>
          <div className="expertise__grid">
            {expertise.map((item, index) => (
              <motion.div 
                key={item.name}
                className="expertise__item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="expertise__icon">{item.icon}</span>
                <span className="expertise__name">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
