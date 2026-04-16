import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../data';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', damping: 12 } },
  };

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>
      <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: '0.5rem' }}>
        Projects<span style={{ color: '#79ff97' }}>.</span>
      </h2>
      <p style={{ color: '#8b949e', fontSize: 13, marginBottom: '2rem' }}>A selection of my recent work</p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}
      >
        {DATA.projects.map((p, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -8 }}
            className="glass-panel"
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              border: '1px solid var(--border-muted)',
              background: 'rgba(255, 255, 255, 0.02)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Thumbnail Area */}
            <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
              <img 
                src={p.image} 
                alt={p.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                className="project-img"
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(to bottom, transparent, rgba(6, 9, 15, 0.9))`,
              }} />
              <div style={{
                position: 'absolute', top: 12, right: 12,
                background: `${p.color}20`, border: `1px solid ${p.color}40`,
                color: p.color, fontSize: 10, padding: '4px 10px', borderRadius: 20,
                fontWeight: 600, backdropFilter: 'blur(4px)'
              }}>
                {p.tag}
              </div>
            </div>

            {/* Content Area */}
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontWeight: 800, fontSize: 20, color: '#e6edf3', marginBottom: 8 }}>
                {p.name}
              </h3>
              <p style={{ color: '#8b949e', fontSize: 13, lineHeight: 1.6, marginBottom: 20, flex: 1 }}>
                {p.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                {p.stack.map(s => (
                  <span key={s} style={{
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    color: '#c9d1d9', fontSize: 11, padding: '4px 10px', borderRadius: 6,
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
