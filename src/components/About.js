import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../data';
import { Mail, Github, Linkedin, MapPin, Phone, MessageSquare } from 'lucide-react';

export default function About({ setActive }) {
  const s = {
    section: { maxWidth: 1100, margin: '0 auto', padding: '8rem 1.5rem 3rem' },
    grid: { display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' },
    tag: { color: 'var(--accent-green)', fontSize: 14, marginBottom: 16, letterSpacing: '1px', fontFamily: 'var(--font-mono)' },
    name: { fontWeight: 800, fontSize: 'clamp(2.5rem,6vw,4.5rem)', lineHeight: 1.05, marginBottom: '0.8rem' },
    title: { fontWeight: 500, fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', color: 'var(--alpha-60)', marginBottom: '1.5rem' },
    summary: { color: 'var(--alpha-70)', lineHeight: 1.85, fontSize: 16, maxWidth: 600, marginBottom: '2.5rem' },
    links: { display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: '2rem' },
    meta: { display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' },
    metaItem: { color: 'var(--alpha-50)', fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 },
    avatar: {
      width: 140, height: 140, borderRadius: '24%',
      background: 'linear-gradient(135deg, rgba(121,255,151,0.1), rgba(88,166,255,0.1))',
      border: '1px solid rgba(121,255,151,0.3)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 800, fontSize: 44, color: 'var(--accent-green)',
      flexShrink: 0, boxShadow: '0 0 40px rgba(121,255,151,0.1)'
    },
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      style={s.section}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div style={s.grid}>
        <div>
          <motion.p variants={item} style={s.tag}>&gt; hello_world_</motion.p>
          <motion.h1 
            variants={item} 
            style={s.name} 
            className="text-gradient"
          >
            {DATA.name}
          </motion.h1>
          <motion.p variants={item} style={s.title}>{DATA.title}</motion.p>
          <motion.p variants={item} style={s.summary}>{DATA.summary}</motion.p>
          
          <motion.div variants={item} style={s.links}>
            <a href={`mailto:${DATA.email}`} className="glass-panel hover-glow" style={{ textDecoration: 'none', color: 'var(--text-main)', padding: '10px 24px', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, fontWeight: 600 }}>
              <Mail size={20} color="var(--accent-green)" /> {DATA.email}
            </a>
            <a href={DATA.github} target="_blank" rel="noreferrer" className="glass-panel hover-glow" style={{ textDecoration: 'none', color: 'var(--text-main)', padding: '10px 20px', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
              <Github size={18} color="var(--accent-green)" /> GitHub
            </a>
            <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="glass-panel hover-glow" style={{ textDecoration: 'none', color: 'var(--text-main)', padding: '10px 20px', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
              <Linkedin size={18} color="var(--accent-green)" /> LinkedIn
            </a>
          </motion.div>

          <motion.div variants={item} style={s.meta}>
            <span style={s.metaItem}><MapPin size={16} /> {DATA.location}</span>
            <a href={`tel:${DATA.phone}`} style={{ ...s.metaItem, textDecoration: 'none', cursor: 'pointer' }} className="hover-underline">
              <Phone size={16} /> {DATA.phone}
            </a>
          </motion.div>

          <motion.button
            variants={item}
            onClick={() => setActive('Chat')}
            className="glow-btn"
            style={{
              background: 'rgba(121,255,151,0.05)', border: '1px solid rgba(121,255,151,0.3)',
              color: 'var(--accent-green)', fontSize: 14, fontWeight: 600,
              padding: '12px 24px', borderRadius: 12, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 10
            }}
          >
            <MessageSquare size={18} /> Ask AI Assistant →
          </motion.button>
        </div>

        <motion.div 
          variants={item}
          style={s.avatar} 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          KC
        </motion.div>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
          gap: 16, marginTop: '5rem',
        }}
      >
        {DATA.stats.map((st, i) => (
          <motion.div 
            key={i} 
            variants={item}
            className="glass-panel" 
            whileHover={{ y: -5, background: 'var(--alpha-02)' }}
            style={{ padding: '2rem', textAlign: 'center', borderRadius: 16 }}
          >
            <div style={{ fontWeight: 800, fontSize: 36, color: 'var(--text-main)', marginBottom: 4 }}>{st.value}</div>
            <div style={{ color: 'var(--accent-green)', fontSize: 13, letterSpacing: '0.5px', fontWeight: 600 }}>{st.label}</div>
            <div style={{ color: 'var(--alpha-40)', fontSize: 12 }}>{st.sub}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
