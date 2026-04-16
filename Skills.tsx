'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    category: 'E-Commerce',
    color: '#6366f1',
    skills: [
      { name: 'Shopify', level: 95 },
      { name: 'Liquid Templating', level: 90 },
      { name: 'Shopify Apps', level: 85 },
      { name: 'WooCommerce', level: 88 },
    ]
  },
  {
    category: 'CMS & Design',
    color: '#a78bfa',
    skills: [
      { name: 'WordPress', level: 95 },
      { name: 'Elementor', level: 92 },
      { name: 'Theme Development', level: 87 },
      { name: 'Gutenberg', level: 80 },
    ]
  },
  {
    category: 'Frontend',
    color: '#38bdf8',
    skills: [
      { name: 'HTML5', level: 98 },
      { name: 'CSS3 / SCSS', level: 92 },
      { name: 'JavaScript', level: 80 },
      { name: 'Responsive Design', level: 95 },
    ]
  },
]

const tools = ['Git & GitHub', 'Figma', 'VS Code', 'Chrome DevTools', 'Shopify CLI', 'WP-CLI', 'Postman', 'Slack']

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ fontFamily: 'DM Sans', fontSize: '0.85rem', fontWeight: 500 }}>{name}</span>
        <span style={{ fontFamily: 'DM Sans', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{level}%</span>
      </div>
      <div style={{ height: '6px', background: 'var(--border)', borderRadius: '100px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: '100%', borderRadius: '100px', background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" style={{ padding: '6rem 2rem', background: 'var(--bg-2)' }} ref={ref}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ marginBottom: '1rem' }}>
          <span className="section-label">My Skills</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ fontFamily: 'Syne', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '3rem', lineHeight: 1.1 }}
        >
          Technical <span className="gradient-text">Expertise</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.15 + 0.2 }}
              className="card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: group.color }} />
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1rem' }}>{group.category}</h3>
              </div>
              {group.skills.map((skill, si) => (
                <SkillBar key={skill.name} {...skill} color={group.color} delay={si * 0.1 + gi * 0.15 + 0.4} />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="card"
        >
          <h3 style={{ fontFamily: 'Syne', fontWeight: 700, marginBottom: '1.25rem' }}>Tools & Technologies</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {tools.map(tool => (
              <span key={tool} style={{
                fontFamily: 'DM Sans', fontSize: '0.82rem', fontWeight: 500,
                padding: '0.4rem 1rem', borderRadius: '100px',
                background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)',
                color: 'var(--accent)',
              }}>
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
