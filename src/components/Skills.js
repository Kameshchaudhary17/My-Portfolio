import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../data';
import { Code, Server, Database, Settings } from 'lucide-react';

export default function Skills() {
  const iconMap = {
    Frontend: <Code size={20} />,
    Backend: <Server size={20} />,
    Database: <Database size={20} />,
    "Tools & Practices": <Settings size={20} />,
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', damping: 15 } },
  };

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>
      <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: '0.5rem' }}>
        Skills<span style={{ color: 'var(--accent-green)' }}>.</span>
      </h2>
      <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: '2rem' }}>Technologies I work with</p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16,
        }}
      >
        {Object.entries(DATA.skills).map(([category, list], i) => (
          <motion.div
            key={category}
            variants={item}
            className="glass-panel"
            whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}
            style={{
              padding: '1.5rem',
              borderRadius: 16,
              border: '1px solid var(--border-muted)',
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(255, 255, 255, 0.01)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ color: 'var(--accent-green)', background: 'var(--border-glow)', padding: 8, borderRadius: 10 }}>
                {iconMap[category] || <Settings size={20} />}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-main)' }}>{category}</h3>
            </div>

            {/* Skill Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, flex: 1 }}>
              {list.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontSize: 12,
                    padding: '4px 10px',
                    borderRadius: 8,
                    background: 'var(--alpha-04)',
                    border: '1px solid var(--alpha-10)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Subtle Gradient Glow */}
            <div style={{
              position: 'absolute',
              bottom: -20,
              right: -20,
              width: 100,
              height: 100,
              background: 'radial-gradient(circle, rgba(121, 255, 151, 0.05) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Section with Framer Motion */}
      <motion.div 
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="glass-panel" 
        style={{ marginTop: '2.5rem', padding: '2rem', borderRadius: 16 }}
      >
        <p style={{ color: 'var(--alpha-40)', fontSize: 11, letterSpacing: '1px', marginBottom: '1.5rem' }}>PROFICIENCY OVERVIEW</p>
        {[
          { label: 'React.js / Frontend', pct: 88, color: '#79ff97' },
          { label: 'Node.js / Backend', pct: 82, color: '#58a6ff' },
          { label: 'Database Design', pct: 78, color: '#f78166' },
          { label: 'ASP.NET Core (.NET)', pct: 72, color: '#e8c87a' },
          { label: 'Python / ML', pct: 65, color: '#c792ea' },
        ].map(({ label, pct, color }, idx) => (
          <div key={label} style={{ marginBottom: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 8 }}>
              <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>{label}</span>
              <span style={{ color, fontWeight: 700 }}>{pct}%</span>
            </div>
            <div style={{ background: 'var(--alpha-05)', borderRadius: 10, height: 8, overflow: 'hidden' }}>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                transition={{ duration: 1.2, delay: 0.1 * idx, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{
                  height: '100%',
                  background: `linear-gradient(90deg, ${color}40, ${color})`,
                  borderRadius: 10,
                  boxShadow: `0 0 10px ${color}30`
                }} 
              />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
