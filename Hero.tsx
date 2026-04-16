'use client'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Download, MessageCircle, ArrowDown, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '0 2rem', position: 'relative', overflow: 'hidden',
    }}>
      {/* Background blobs */}
      <div style={{
        position: 'absolute', top: '10%', left: '-10%', width: '600px', height: '600px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-10%', width: '500px', height: '500px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '800px', height: '800px', pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(56,189,248,0.04) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%', paddingTop: '6rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)',
            borderRadius: '100px', padding: '0.4rem 1rem', marginBottom: '2rem' }}
        >
          <Sparkles size={14} color="var(--accent)" />
          <span style={{ fontFamily: 'DM Sans', fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 500 }}>
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: 'Syne', fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 800,
            lineHeight: 1.05, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
        >
          Hi, I'm{' '}
          <span className="gradient-text">Talha Ishtiaq</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{ fontFamily: 'Syne', fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', fontWeight: 600,
            marginBottom: '1.5rem', color: 'var(--text-muted)', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}
        >
          <span>Expert in</span>
          <TypeAnimation
            sequence={[
              'Shopify Development', 2000,
              'WordPress & Elementor', 2000,
              'Liquid Templating', 2000,
              'E-Commerce Solutions', 2000,
              'Custom Web Dev', 2000,
            ]}
            wrapper="span"
            repeat={Infinity}
            style={{ color: 'var(--accent)' }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{ fontFamily: 'DM Sans', fontSize: '1.05rem', lineHeight: 1.8,
            color: 'var(--text-muted)', maxWidth: '560px', marginBottom: '2.5rem', fontWeight: 300 }}
        >
          I build high-performance e-commerce stores and stunning WordPress websites.
          Turning your vision into a conversion-driven digital experience — from Shopify theme
          customization to full custom development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <a href="/cv.pdf" download className="btn-primary">
            <Download size={16} /> <span>Download CV</span>
          </a>
          <a href="#contact" className="btn-outline">
            <MessageCircle size={16} /> Let's Talk
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap' }}
        >
          {[['3+', 'Years Experience'], ['50+', 'Projects Delivered'], ['30+', 'Happy Clients']].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: 'Syne', fontSize: '2rem', fontWeight: 800, color: 'var(--accent)' }}>{num}</div>
              <div style={{ fontFamily: 'DM Sans', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '0.5rem', textDecoration: 'none', fontFamily: 'DM Sans', fontSize: '0.75rem' }}
      >
        <span>Scroll</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  )
}
