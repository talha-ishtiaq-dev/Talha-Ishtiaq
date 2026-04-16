'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MessageCircle, ExternalLink, Send, ArrowRight } from 'lucide-react'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'talha@example.com',
    link: 'mailto:talha@example.com',
    color: '#6366f1',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+92 300 0000000',
    link: 'https://wa.me/923000000000',
    color: '#10b981',
  },
  {
    icon: ExternalLink,
    label: 'LinkedIn',
    value: 'linkedin.com/in/talha-ishtiaq',
    link: 'https://linkedin.com/in/talha-ishtiaq',
    color: '#0284c7',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" style={{ padding: '6rem 2rem', background: 'var(--bg-2)' }} ref={ref}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ marginBottom: '1rem' }}>
          <span className="section-label">Contact</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ fontFamily: 'Syne', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}
        >
          Let's <span className="gradient-text">Work Together</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{ fontFamily: 'DM Sans', color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '3rem', fontWeight: 300 }}
        >
          Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours.
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem' }} className="contact-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="card"
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}
                whileHover={{ x: 4 }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                  background: `${c.color}18`, border: `1px solid ${c.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <c.icon size={18} color={c.color} />
                </div>
                <div>
                  <div style={{ fontFamily: 'DM Sans', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>{c.label}</div>
                  <div style={{ fontFamily: 'Syne', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text)' }}>{c.value}</div>
                </div>
                <ArrowRight size={16} color="var(--text-muted)" style={{ marginLeft: 'auto' }} />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="card"
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ fontFamily: 'DM Sans', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Thanks for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { key: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                  { key: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ fontFamily: 'DM Sans', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem', display: 'block' }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={form[field.key as 'name' | 'email']}
                      onChange={e => setForm(p => ({ ...p, [field.key]: e.target.value }))}
                      style={{
                        width: '100%', background: 'var(--bg)', border: '1px solid var(--border)',
                        borderRadius: '10px', padding: '0.7rem 1rem',
                        fontFamily: 'DM Sans', fontSize: '0.88rem', color: 'var(--text)',
                        outline: 'none', transition: 'border 0.2s',
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontFamily: 'DM Sans', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem', display: 'block' }}>
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project..."
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    style={{
                      width: '100%', background: 'var(--bg)', border: '1px solid var(--border)',
                      borderRadius: '10px', padding: '0.7rem 1rem',
                      fontFamily: 'DM Sans', fontSize: '0.88rem', color: 'var(--text)',
                      outline: 'none', resize: 'vertical', transition: 'border 0.2s',
                    }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <Send size={16} /> <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
