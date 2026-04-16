'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact']

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          padding: scrolled ? '0.75rem 2rem' : '1.25rem 2rem',
          background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
          transition: 'all 0.3s ease',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <motion.a
          href="#hero"
          style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.25rem', textDecoration: 'none' }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="gradient-text">T.I</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginLeft: '0.5rem', fontFamily: 'DM Sans', fontWeight: 400 }}>dev</span>
        </motion.a>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden md:flex">
          {links.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              style={{
                color: 'var(--text-muted)', textDecoration: 'none',
                fontFamily: 'DM Sans', fontSize: '0.88rem', fontWeight: 500,
                transition: 'color 0.2s',
              }}
              whileHover={{ color: 'var(--accent)' }}
            >
              {link}
            </motion.a>
          ))}
          <motion.button
            onClick={toggle}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: '10px', padding: '0.5rem', cursor: 'pointer',
              color: 'var(--text)', display: 'flex', alignItems: 'center',
            }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }} className="flex md:hidden">
          <button onClick={toggle} style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: '70px', left: '1rem', right: '1rem', zIndex: 49,
              background: 'var(--bg-card)', borderRadius: '16px',
              border: '1px solid var(--border)', padding: '1.5rem',
              display: 'flex', flexDirection: 'column', gap: '1.25rem',
            }}
          >
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                style={{ color: 'var(--text)', textDecoration: 'none', fontFamily: 'Syne', fontWeight: 600 }}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
