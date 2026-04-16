'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, GitBranch } from 'lucide-react'

const projects = [
  {
    title: 'LuxeWear Shopify Store',
    description: 'A premium fashion e-commerce store built on Shopify with custom Liquid templates, advanced filtering, AJAX cart, and seamless Klaviyo email integration.',
    tags: ['Shopify', 'Liquid', 'AJAX', 'Klaviyo'],
    color: '#6366f1',
    demo: '#',
    github: '#',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)',
  },
  {
    title: 'FitLife WordPress Blog',
    description: 'High-performance fitness & wellness blog built on WordPress with Elementor. Custom theme, WooCommerce shop, membership system & SEO optimized for 90+ score.',
    tags: ['WordPress', 'Elementor', 'WooCommerce', 'SEO'],
    color: '#a78bfa',
    demo: '#',
    github: '#',
    gradient: 'linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%)',
  },
  {
    title: 'Organica Shopify Theme',
    description: 'Custom Shopify 2.0 theme built from scratch for an organic beauty brand. Features app blocks, metafields, subscription products, and a 95+ performance score.',
    tags: ['Shopify 2.0', 'Liquid', 'Custom Theme', 'Subscriptions'],
    color: '#38bdf8',
    demo: '#',
    github: '#',
    gradient: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)',
  },
  {
    title: 'AgencyPro WordPress Site',
    description: 'Full agency website using WordPress, Elementor Pro, custom post types, contact forms, animations, Google Maps integration and fully responsive across all devices.',
    tags: ['WordPress', 'Elementor Pro', 'CSS', 'JavaScript'],
    color: '#f59e0b',
    demo: '#',
    github: '#',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #6366f1 100%)',
  },
  {
    title: 'TechStore Shopify Dropship',
    description: 'Dropshipping store for tech accessories using Shopify, DSers integration, custom product pages, upsell funnels and Meta Pixel for retargeting campaigns.',
    tags: ['Shopify', 'DSers', 'Meta Pixel', 'Upsell'],
    color: '#10b981',
    demo: '#',
    github: '#',
    gradient: 'linear-gradient(135deg, #10b981 0%, #38bdf8 100%)',
  },
  {
    title: 'RestaurantPro Website',
    description: 'Modern restaurant website with WordPress, online reservation system, custom menu builder, delivery integration and ADA-accessible design.',
    tags: ['WordPress', 'Custom Theme', 'Reservations', 'ADA'],
    color: '#f43f5e',
    demo: '#',
    github: '#',
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #a78bfa 100%)',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" style={{ padding: '6rem 2rem', background: 'var(--bg-2)' }} ref={ref}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ marginBottom: '1rem' }}>
          <span className="section-label">Portfolio</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ fontFamily: 'Syne', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '3rem', lineHeight: 1.1 }}
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.25rem' }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              style={{
                background: 'var(--bg-card)', borderRadius: '20px',
                border: '1px solid var(--border)', overflow: 'hidden',
                transition: 'all 0.35s', cursor: 'default',
              }}
              whileHover={{ y: -6, borderColor: 'var(--border-accent)', boxShadow: `0 20px 60px ${project.color}20` }}
            >
              {/* Project visual header */}
              <div style={{
                height: '160px', background: project.gradient, position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
              }}>
                <div style={{
                  fontFamily: 'Syne', fontSize: '3.5rem', fontWeight: 800,
                  color: 'rgba(255,255,255,0.15)', letterSpacing: '-0.05em',
                }}>
                  {project.title.split(' ')[0]}
                </div>
                <div style={{
                  position: 'absolute', bottom: '-30px', right: '-30px',
                  width: '120px', height: '120px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.07)',
                }} />
              </div>

              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1rem', marginBottom: '0.6rem' }}>
                  {project.title}
                </h3>
                <p style={{ fontFamily: 'DM Sans', fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem', fontWeight: 300 }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'DM Sans', fontSize: '0.72rem', fontWeight: 600,
                      padding: '0.25rem 0.75rem', borderRadius: '100px',
                      background: `${project.color}15`, color: project.color,
                      border: `1px solid ${project.color}30`,
                    }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a href={project.demo} style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    fontFamily: 'DM Sans', fontSize: '0.8rem', fontWeight: 600,
                    color: 'var(--accent)', textDecoration: 'none',
                    padding: '0.4rem 1rem', borderRadius: '8px',
                    background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)',
                    transition: 'all 0.2s',
                  }}>
                    <ExternalLink size={13} /> Live Demo
                  </a>
                  <a href={project.github} style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    fontFamily: 'DM Sans', fontSize: '0.8rem', fontWeight: 600,
                    color: 'var(--text-muted)', textDecoration: 'none',
                    padding: '0.4rem 1rem', borderRadius: '8px',
                    background: 'var(--border)', border: '1px solid var(--border)',
                    transition: 'all 0.2s',
                  }}>
                    <GitBranch size={13} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
