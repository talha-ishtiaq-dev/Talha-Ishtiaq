'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Zap, ShoppingBag, Globe } from 'lucide-react'

const highlights = [
  { icon: ShoppingBag, title: 'Shopify Expert', desc: 'Theme customization, Liquid templating, app integration & custom storefronts' },
  { icon: Globe, title: 'WordPress Pro', desc: 'Elementor, WooCommerce, custom themes, plugins & performance optimization' },
  { icon: Code2, title: 'Clean Code', desc: 'Semantic HTML, modern CSS, vanilla JS & maintainable codebases' },
  { icon: Zap, title: 'Fast Delivery', desc: 'Efficient workflows, on-time delivery & clear communication throughout' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '1rem' }}
      >
        <span className="section-label">About Me</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ fontFamily: 'Syne', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800,
          marginBottom: '1.5rem', lineHeight: 1.1 }}
      >
        Crafting digital experiences<br /><span className="gradient-text">that drive results</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ fontFamily: 'DM Sans', fontSize: '1rem', lineHeight: 1.9,
          color: 'var(--text-muted)', maxWidth: '680px', marginBottom: '3rem', fontWeight: 300 }}
      >
        I'm <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Talha Ishtiaq</strong>, a passionate
        Shopify & WordPress developer at <strong style={{ color: 'var(--accent)' }}>Software Pro</strong>.
        I specialize in building fast, beautiful, and conversion-focused online stores and websites.
        With hands-on expertise in Liquid, Elementor, HTML, CSS, and JavaScript, I deliver solutions
        that not only look great but also perform at the highest level. My goal is to turn your ideas
        into a competitive digital presence.
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
            className="card"
          >
            <div style={{
              width: '44px', height: '44px', borderRadius: '12px',
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1rem',
            }}>
              <item.icon size={20} color="white" />
            </div>
            <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>
              {item.title}
            </h3>
            <p style={{ fontFamily: 'DM Sans', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 300 }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
