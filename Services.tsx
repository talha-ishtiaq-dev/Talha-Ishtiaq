'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShoppingBag, Globe, Palette, Gauge, Settings, Search } from 'lucide-react'

const services = [
  {
    icon: ShoppingBag,
    title: 'Shopify Development',
    desc: 'Custom Shopify stores, theme development, Liquid templating, app integration, and complete store setup from scratch.',
    gradient: 'linear-gradient(135deg, #6366f1, #a78bfa)',
    features: ['Custom Theme Dev', 'Liquid Templating', 'App Integration', 'Storefront API'],
  },
  {
    icon: Globe,
    title: 'WordPress Development',
    desc: 'Professional WordPress websites with Elementor, custom themes, WooCommerce stores, and full CMS integration.',
    gradient: 'linear-gradient(135deg, #a78bfa, #38bdf8)',
    features: ['Custom Themes', 'Elementor Pro', 'WooCommerce', 'Custom Plugins'],
  },
  {
    icon: Palette,
    title: 'UI/UX Implementation',
    desc: 'Pixel-perfect conversion of Figma/Adobe XD designs to responsive HTML/CSS with smooth animations.',
    gradient: 'linear-gradient(135deg, #38bdf8, #6366f1)',
    features: ['Figma to Code', 'Responsive Design', 'Animations', 'Cross-browser'],
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    desc: 'Speed up your existing store or website. Achieve 90+ Google PageSpeed scores with expert optimization techniques.',
    gradient: 'linear-gradient(135deg, #10b981, #38bdf8)',
    features: ['Core Web Vitals', 'Image Optimization', 'Code Minification', 'CDN Setup'],
  },
  {
    icon: Settings,
    title: 'Store Customization',
    desc: 'Modifications to existing Shopify/WordPress stores — new features, redesigns, bug fixes, and ongoing maintenance.',
    gradient: 'linear-gradient(135deg, #f59e0b, #6366f1)',
    features: ['Feature Additions', 'Bug Fixes', 'Theme Updates', 'Maintenance'],
  },
  {
    icon: Search,
    title: 'SEO & Analytics',
    desc: 'On-page SEO optimization, Google Analytics setup, Meta Pixel, schema markup and conversion tracking implementation.',
    gradient: 'linear-gradient(135deg, #f43f5e, #a78bfa)',
    features: ['On-Page SEO', 'Analytics Setup', 'Meta Pixel', 'Schema Markup'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" style={{ padding: '6rem 2rem' }} ref={ref}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ marginBottom: '1rem' }}>
          <span className="section-label">Services</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ fontFamily: 'Syne', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}
        >
          What I <span className="gradient-text">Offer</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{ fontFamily: 'DM Sans', color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '3rem', fontWeight: 300 }}
        >
          End-to-end web development services tailored to your goals
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              className="card"
            >
              <div style={{
                width: '50px', height: '50px', borderRadius: '14px',
                background: service.gradient, display: 'flex', alignItems: 'center',
                justifyContent: 'center', marginBottom: '1.25rem',
              }}>
                <service.icon size={22} color="white" />
              </div>
              <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1rem', marginBottom: '0.6rem' }}>
                {service.title}
              </h3>
              <p style={{ fontFamily: 'DM Sans', fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem', fontWeight: 300 }}>
                {service.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {service.features.map(f => (
                  <span key={f} style={{
                    fontFamily: 'DM Sans', fontSize: '0.72rem', fontWeight: 500,
                    padding: '0.25rem 0.7rem', borderRadius: '100px',
                    background: 'var(--bg-2)', border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                  }}>{f}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
