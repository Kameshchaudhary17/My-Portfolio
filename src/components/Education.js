import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../data';
import { GraduationCap, BookOpen, Network, Code, Database, Award, CheckCircle } from 'lucide-react';

export default function Education() {
  const edu = DATA.education;

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.18 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const moduleIcons = {
    "Web Development": <Code size={16} color="var(--accent-green)" />,
    "Software Engineering": <Award size={16} color="var(--accent-blue)" />,
    "Database Systems": <Database size={16} color="#ffa657" />,
    "Object-Oriented Programming": <BookOpen size={16} color="#e8c87a" />,
    "Networks": <Network size={16} color="#d2a8ff" />,
  };

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.7rem,3vw,2.4rem)', marginBottom: '0.4rem' }}>
          Education & Academic Background<span style={{ color: 'var(--accent-green)' }}>.</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
          Formal computing degree and academic foundations in software engineering and systems.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div 
          variants={item}
          className="glass-panel" 
          style={{
            padding: '2.4rem',
            marginBottom: 28,
            borderTop: '3px solid var(--accent-green)',
            borderRadius: 20,
            background: 'var(--alpha-02)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 14, marginBottom: 24 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-main)', marginBottom: 6 }}>
                <div style={{
                  background: 'rgba(121,255,151,0.12)', border: '1px solid rgba(121,255,151,0.3)',
                  padding: 10, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <GraduationCap size={26} color="var(--accent-green)" />
                </div>
                <div>
                  <h3 style={{ fontWeight: 800, fontSize: 23, color: 'var(--text-main)' }}>{edu.degree}</h3>
                  <p style={{ color: 'var(--accent-green)', fontSize: 16, fontWeight: 600 }}>{edu.school}</p>
                </div>
              </div>
            </div>
            <span style={{
              background: 'rgba(121,255,151,0.1)', border: '1px solid rgba(121,255,151,0.35)',
              color: 'var(--accent-green)', fontSize: 12.5, padding: '6px 16px', borderRadius: 20, fontWeight: 700
            }}>
              Graduated {edu.year}
            </span>
          </div>

          <p style={{ color: 'var(--alpha-70)', fontSize: 14.5, lineHeight: 1.75, marginBottom: 24, maxWidth: 800 }}>
            Comprehensive computing program emphasizing full-stack software architecture, distributed network systems, database design, and algorithmic problem-solving. Served as a <strong>Graduate Teaching Assistant (GTA)</strong> during senior year, mentoring peers and undergraduates in network operating system labs.
          </p>

          <p style={{ color: 'var(--alpha-50)', fontSize: 11.5, letterSpacing: '1px', marginBottom: 14, fontWeight: 700 }}>
            CORE ACADEMIC MODULES
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
            {edu.modules.map(m => (
              <div key={m} style={{
                background: 'var(--alpha-03)', border: '1px solid var(--alpha-08)',
                padding: '12px 16px', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10,
              }}>
                {moduleIcons[m] || <CheckCircle size={16} color="var(--accent-green)" />}
                <span style={{ color: 'var(--text-main)', fontSize: 13.5, fontWeight: 600 }}>{m}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
