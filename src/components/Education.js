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
        Education<span style={{ color: '#79ff97' }}>.</span>
      </h2>
      <p style={{ color: '#8b949e', fontSize: 13, marginBottom: '2rem' }}>Academic background & qualifications</p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div 
          variants={item}
          className="glass-panel" 
          style={{ padding: '2rem', marginBottom: 24, borderTop: '3px solid #79ff97', borderRadius: 16 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#e6edf3', marginBottom: 6 }}>
                <GraduationCap size={24} color="#79ff97" />
                <h3 style={{ fontWeight: 800, fontSize: 22 }}>{edu.degree}</h3>
              </div>
              <p style={{ color: '#79ff97', fontSize: 15, fontWeight: 500 }}>{edu.school}</p>
            </div>
            <span style={{
              background: 'rgba(121,255,151,0.1)', border: '1px solid rgba(121,255,151,0.3)',
              color: '#79ff97', fontSize: 12, padding: '6px 14px', borderRadius: 20, fontWeight: 600
            }}>
              Graduated {edu.year}
            </span>
          </div>

          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, letterSpacing: '1px', marginBottom: 12, fontWeight: 600 }}>RELEVANT COURSEWORK</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {edu.modules.map(m => (
              <span key={m} style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                color: '#c9d1d9', fontSize: 13, padding: '5px 14px', borderRadius: 8,
              }}>{m}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
