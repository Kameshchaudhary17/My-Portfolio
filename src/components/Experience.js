import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DATA } from '../data';
import { Briefcase, Calendar, ChevronDown, ChevronUp, CheckCircle2, Award } from 'lucide-react';

export default function Experience() {
  const [expanded, setExpanded] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const item = {
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>
      <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: '0.5rem' }}>
        Work Experience<span style={{ color: 'var(--accent-green)' }}>.</span>
      </h2>
      <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: '2rem' }}>Professional journey so far</p>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{ position: 'relative' }}
      >
        <div style={{
          position: 'absolute', left: 20, top: 0, bottom: 0,
          width: 1, background: 'linear-gradient(to bottom, var(--accent-green), transparent)',
        }} />

        {DATA.experience.map((exp, i) => (
          <motion.div 
            key={i} 
            variants={item}
            style={{ marginBottom: 24, paddingLeft: 52, position: 'relative' }}
          >
            <div style={{
              position: 'absolute', left: 12, top: 24,
              width: 16, height: 16, borderRadius: '50%',
              background: exp.color, border: '3px solid var(--bg)',
              boxShadow: `0 0 12px ${exp.color}60`,
              zIndex: 1
            }} />

            <motion.div 
              className="glass-panel" 
              whileHover={{ x: 5 }}
              style={{
                padding: '1.5rem',
                borderLeft: `3px solid ${exp.color}`,
                cursor: 'pointer',
                borderRadius: '0 16px 16px 0',
                background: 'var(--alpha-01)',
              }} 
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 4, color: 'var(--text-main)' }}>
                    {exp.role}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: exp.color, fontSize: 14, fontWeight: 500 }}>
                    <Briefcase size={14} /> {exp.company}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    background: `${exp.color}15`, border: `1px solid ${exp.color}30`,
                    color: exp.color, fontSize: 11, padding: '4px 12px', borderRadius: 20,
                    display: 'flex', alignItems: 'center', gap: 5, fontWeight: 600
                  }}>
                    <Calendar size={12} /> {exp.period}
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: 12, marginTop: 6 }}>{exp.type}</p>
                </div>
              </div>

              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <ul style={{ paddingLeft: 0, listStyle: 'none', marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} style={{ display: 'flex', gap: 12, color: 'var(--alpha-70)', fontSize: 13, lineHeight: 1.6 }}>
                          <span style={{ color: exp.color, flexShrink: 0 }}>▹</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              <div style={{ color: 'var(--text-muted)', fontSize: 11, marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4 }}>
                {expanded === i ? <><ChevronUp size={14} /> View Less</> : <><ChevronDown size={14} /> View Details</>}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="glass-panel" 
        style={{ padding: '2rem', marginTop: 40, borderTop: '3px solid var(--accent-blue)', borderRadius: 16 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-main)', marginBottom: 20 }}>
          <Award size={20} color="var(--accent-blue)" />
          <p style={{ color: 'var(--alpha-40)', fontSize: 11, letterSpacing: '1px', fontWeight: 600 }}>ADDITIONAL STRENGTHS</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {DATA.strengths.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, color: 'var(--alpha-70)', fontSize: 14, lineHeight: 1.6 }}>
              <CheckCircle2 size={18} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: 2 }} />
              {s}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
