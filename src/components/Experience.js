import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DATA } from '../data';
import { Calendar, ChevronDown, ChevronUp, CheckCircle2, Award, Globe, Building2, GraduationCap } from 'lucide-react';

export default function Experience() {
  // Keep the current role (index 0) expanded by default for an engaging first view
  const [expanded, setExpanded] = useState([0]);

  const toggleExpand = (idx) => {
    setExpanded(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const getCompanyIcon = (company) => {
    if (company.includes('Altren')) return <Globe size={15} />;
    if (company.includes('Portpro')) return <Building2 size={15} />;
    return <GraduationCap size={15} />;
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.18 } }
  };

  const item = {
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.7rem,3vw,2.4rem)', marginBottom: '0.4rem' }}>
          Work Experience<span style={{ color: 'var(--accent-green)' }}>.</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
          Professional engineering track record spanning international remote teams, agile software delivery, and technical mentorship.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{ position: 'relative' }}
      >
        <div style={{
          position: 'absolute', left: 20, top: 10, bottom: 20,
          width: 2, background: 'linear-gradient(to bottom, var(--accent-green), var(--accent-blue), transparent)',
        }} />

        {DATA.experience.map((exp, i) => {
          const isExp = expanded.includes(i);
          return (
            <motion.div 
              key={i} 
              variants={item}
              style={{ marginBottom: 28, paddingLeft: 52, position: 'relative' }}
            >
              {/* Timeline Marker Dot */}
              <div style={{
                position: 'absolute', left: 11, top: 22,
                width: 20, height: 20, borderRadius: '50%',
                background: exp.color, border: '4px solid var(--bg)',
                boxShadow: `0 0 16px ${exp.color}90`,
                zIndex: 1
              }} />

              <motion.div 
                className="glass-panel" 
                whileHover={{ x: 4 }}
                style={{
                  padding: '1.75rem',
                  borderLeft: `3px solid ${exp.color}`,
                  cursor: 'pointer',
                  borderRadius: '0 18px 18px 0',
                  background: 'var(--alpha-02)',
                  transition: 'all 0.3s ease',
                }} 
                onClick={() => toggleExpand(i)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 6 }}>
                      <h3 style={{ fontWeight: 700, fontSize: 19, color: 'var(--text-main)' }}>
                        {exp.role}
                      </h3>
                      {i === 0 && (
                        <span style={{
                          background: 'rgba(121, 255, 151, 0.15)',
                          border: '1px solid rgba(121, 255, 151, 0.4)',
                          color: 'var(--accent-green)',
                          fontSize: 10.5,
                          fontWeight: 700,
                          padding: '2px 8px',
                          borderRadius: 12,
                          letterSpacing: '0.5px'
                        }}>
                          CURRENT ROLE
                        </span>
                      )}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: exp.color, fontSize: 15, fontWeight: 600 }}>
                      {getCompanyIcon(exp.company)}
                      <span>{exp.company}</span>
                      <span style={{ color: 'var(--alpha-40)', fontSize: 12 }}>•</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: 13, fontWeight: 500 }}>
                        {exp.workplaceType}
                      </span>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      background: `${exp.color}15`, border: `1px solid ${exp.color}35`,
                      color: exp.color, fontSize: 12, padding: '5px 14px', borderRadius: 20,
                      display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 600
                    }}>
                      <Calendar size={13} /> {exp.period}
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: 12, marginTop: 6 }}>{exp.type}</p>
                  </div>
                </div>

                <AnimatePresence>
                  {isExp && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <ul style={{ paddingLeft: 0, listStyle: 'none', marginTop: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {exp.bullets.map((b, j) => (
                          <li key={j} style={{ display: 'flex', gap: 12, color: 'var(--alpha-70)', fontSize: 14, lineHeight: 1.65 }}>
                            <span style={{ color: exp.color, flexShrink: 0, fontSize: 16 }}>▹</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div style={{ color: 'var(--text-muted)', fontSize: 12, marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4 }}>
                  {isExp ? <><ChevronUp size={15} /> Show Less</> : <><ChevronDown size={15} /> View Key Achievements</>}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Additional Strengths from Resume */}
      <motion.div 
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="glass-panel" 
        style={{ padding: '2.2rem', marginTop: 40, borderTop: '3px solid var(--accent-blue)', borderRadius: 18 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-main)', marginBottom: 20 }}>
          <Award size={22} color="var(--accent-blue)" />
          <h3 style={{ color: 'var(--text-main)', fontSize: 15, letterSpacing: '0.5px', fontWeight: 700 }}>
            ADDITIONAL CORE STRENGTHS & COMPETENCIES
          </h3>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
          {DATA.strengths.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, color: 'var(--alpha-70)', fontSize: 14, lineHeight: 1.65 }}>
              <CheckCircle2 size={19} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: 2 }} />
              <span>{s}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
