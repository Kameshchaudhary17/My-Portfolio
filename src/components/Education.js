import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../data';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const edu = DATA.education;

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>
      <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: '0.5rem' }}>
        Education<span style={{ color: 'var(--accent-green)' }}>.</span>
      </h2>
      <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: '2rem' }}>Academic background & qualifications</p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div 
          variants={item}
          className="glass-panel" 
          style={{ padding: '2rem', marginBottom: 24, borderTop: '3px solid var(--accent-green)', borderRadius: 16 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-main)', marginBottom: 6 }}>
                <GraduationCap size={24} color="var(--accent-green)" />
                <h3 style={{ fontWeight: 800, fontSize: 22 }}>{edu.degree}</h3>
              </div>
              <p style={{ color: 'var(--accent-green)', fontSize: 15, fontWeight: 500 }}>{edu.school}</p>
            </div>
            <span style={{
              background: 'rgba(121,255,151,0.1)', border: '1px solid rgba(121,255,151,0.3)',
              color: 'var(--accent-green)', fontSize: 12, padding: '6px 14px', borderRadius: 20, fontWeight: 600
            }}>
              Graduated {edu.year}
            </span>
          </div>

          <p style={{ color: 'var(--alpha-40)', fontSize: 11, letterSpacing: '1px', marginBottom: 12, fontWeight: 600 }}>RELEVANT COURSEWORK</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {edu.modules.map(m => (
              <span key={m} style={{
                background: 'var(--alpha-03)', border: '1px solid var(--alpha-08)',
                color: 'var(--text-main)', fontSize: 13, padding: '5px 14px', borderRadius: 8,
              }}>{m}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
