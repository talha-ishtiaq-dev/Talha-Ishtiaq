'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'var(--bg)', padding: '2rem', textAlign: 'center',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div style={{
          fontFamily: 'var(--font-syne), Syne, sans-serif',
          fontSize: 'clamp(5rem, 15vw, 10rem)',
          fontWeight: 800, lineHeight: 1,
          background: 'linear-gradient(135deg, #6366f1, #a78bfa, #38bdf8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1rem',
        }}>
          404
        </div>
        <h1 style={{
          fontFamily: 'var(--font-syne), Syne, sans-serif',
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          fontWeight: 700, marginBottom: '1rem', color: 'var(--text)',
        }}>
          Page Not Found
        </h1>
        <p style={{
          fontFamily: 'var(--font-dm), DM Sans, sans-serif',
          color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '400px',
        }}>
          Looks like this page doesn't exist. Head back to the portfolio.
        </p>
        <Link href="/" className="btn-primary">
          <span>← Back to Home</span>
        </Link>
      </motion.div>
    </main>
  )
}
