import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DATA } from '../data';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full-Stack Web', 'Machine Learning', '.NET Core'];

  const filteredProjects = DATA.projects.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'Full-Stack Web') return p.stack.includes('React.js') || p.stack.includes('Node.js');
    if (filter === 'Machine Learning') return p.stack.includes('Machine Learning') || p.stack.includes('Python');
    if (filter === '.NET Core') return p.stack.includes('ASP.NET Core') || p.stack.includes('Entity Framework');
    return true;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { y: 25, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', damping: 14 } },
  };

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: '2.5rem' }}>
        <div>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.7rem,3vw,2.4rem)', marginBottom: '0.4rem' }}>
            Featured Projects<span style={{ color: 'var(--accent-green)' }}>.</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
            Production web platforms, machine learning systems, and enterprise backends.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                background: filter === cat ? 'var(--accent-green)' : 'var(--alpha-03)',
                color: filter === cat ? '#06090f' : 'var(--text-muted)',
                border: filter === cat ? '1px solid var(--accent-green)' : '1px solid var(--border-muted)',
                fontSize: 12.5,
                fontWeight: filter === cat ? 700 : 500,
                padding: '6px 14px',
                borderRadius: 20,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: 24 }}
      >
        <AnimatePresence>
          {filteredProjects.map((p, i) => (
            <motion.div
              key={p.name}
              layout
              variants={item}
              whileHover={{ y: -6 }}
              className="glass-panel"
              style={{
                borderRadius: 20,
                overflow: 'hidden',
                border: '1px solid var(--border-muted)',
                borderTop: `2px solid ${p.color}`,
                background: 'var(--alpha-02)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Thumbnail Area */}
              <div style={{ position: 'relative', height: 210, overflow: 'hidden', background: '#0a0f18' }}>
                <img 
                  src={p.image} 
                  alt={p.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  className="project-img"
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(to bottom, rgba(6,9,15,0.1), var(--bg))`,
                }} />
                
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  background: `${p.color}25`, border: `1px solid ${p.color}50`,
                  color: p.color, fontSize: 11, padding: '4px 12px', borderRadius: 20,
                  fontWeight: 700, backdropFilter: 'blur(6px)', letterSpacing: '0.4px'
                }}>
                  {p.tag}
                </div>

                {p.featured && (
                  <div style={{
                    position: 'absolute', top: 12, left: 12,
                    background: 'rgba(121, 255, 151, 0.2)', border: '1px solid rgba(121, 255, 151, 0.5)',
                    color: 'var(--accent-green)', fontSize: 10.5, padding: '3px 9px', borderRadius: 14,
                    fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4, backdropFilter: 'blur(6px)'
                  }}>
                    <Sparkles size={12} /> TOP PROJECT
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div style={{ padding: '1.6rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontWeight: 800, fontSize: 20, color: 'var(--text-main)', marginBottom: 8 }}>
                  {p.name}
                </h3>
                <p style={{ color: 'var(--alpha-70)', fontSize: 13.5, lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
                  {p.desc}
                </p>

                {/* Highlights */}
                {p.highlights && (
                  <div style={{ marginBottom: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {p.highlights.map((h, hi) => (
                      <div key={hi} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 12, color: 'var(--alpha-60)' }}>
                        <CheckCircle2 size={14} color={p.color} style={{ flexShrink: 0, marginTop: 2 }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 'auto', paddingTop: 12, borderTop: '1px solid var(--alpha-08)' }}>
                  {p.stack.map(s => (
                    <span key={s} style={{
                      background: 'var(--alpha-04)', border: '1px solid var(--alpha-10)',
                      color: 'var(--text-main)', fontSize: 11, padding: '3px 9px', borderRadius: 6, fontWeight: 500
                    }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
