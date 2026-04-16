'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    role: 'Shopify & WordPress Developer',
    company: 'Software Pro',
    period: '2022 — Present',
    type: 'Full-time',
    points: [
      'Developed 30+ custom Shopify stores with Liquid templating and theme customization',
      'Built WordPress sites with Elementor, WooCommerce integrations and custom plugins',
      'Improved page load speed by 40% through performance optimization techniques',
      'Collaborated with design teams to implement pixel-perfect UI from Figma mockups',
      'Maintained ongoing client relationships and provided technical support',
    ]
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    period: '2021 — 2022',
    type: 'Freelance',
    points: [
      'Delivered e-commerce solutions for clients across fashion, health & lifestyle niches',
      'Customized Shopify themes and configured payment gateways & shipping solutions',
      'Created responsive WordPress landing pages with high conversion rates',
      'Integrated third-party tools: Klaviyo, Mailchimp, Google Analytics, Meta Pixel',
    ]
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }} ref={ref}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ marginBottom: '1rem' }}>
        <span className="section-label">Experience</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        style={{ fontFamily: 'Syne', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '3rem', lineHeight: 1.1 }}
      >
        Work <span className="gradient-text">History</span>
      </motion.h2>

      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        <div style={{
          position: 'absolute', left: '0', top: '24px', bottom: '24px', width: '1px',
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
        }} />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 + 0.2 }}
            style={{ marginBottom: '2rem', position: 'relative' }}
          >
            <div style={{
              position: 'absolute', left: '-2.35rem', top: '1.25rem',
              width: '12px', height: '12px', borderRadius: '50%',
              background: 'var(--accent)', border: '2px solid var(--bg)',
              boxShadow: '0 0 0 4px rgba(99,102,241,0.2)',
            }} />

            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>{exp.role}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Briefcase size={14} color="var(--accent)" />
                    <span style={{ fontFamily: 'DM Sans', fontSize: '0.88rem', color: 'var(--accent)', fontWeight: 600 }}>{exp.company}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)' }}>
                    <Calendar size={13} />
                    <span style={{ fontFamily: 'DM Sans', fontSize: '0.8rem' }}>{exp.period}</span>
                  </div>
                  <span style={{
                    fontFamily: 'DM Sans', fontSize: '0.75rem', fontWeight: 600,
                    padding: '0.2rem 0.75rem', borderRadius: '100px',
                    background: 'rgba(99,102,241,0.1)', color: 'var(--accent)',
                    border: '1px solid rgba(99,102,241,0.2)',
                  }}>{exp.type}</span>
                </div>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {exp.points.map(point => (
                  <li key={point} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', marginTop: '0.4rem', flexShrink: 0, fontSize: '0.6rem' }}>◆</span>
                    <span style={{ fontFamily: 'DM Sans', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 300 }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
