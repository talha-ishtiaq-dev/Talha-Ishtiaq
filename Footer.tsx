'use client'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      padding: '2rem', borderTop: '1px solid var(--border)',
      textAlign: 'center', background: 'var(--bg)',
    }}>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ fontFamily: 'DM Sans', fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
      >
        Built with <Heart size={13} color="#f43f5e" fill="#f43f5e" /> by{' '}
        <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Talha Ishtiaq</span>
        {' '}&copy; {new Date().getFullYear()}
      </motion.p>
    </footer>
  )
}
