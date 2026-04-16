import React from 'react';
import { DATA } from '../data';

export default function Education() {
  const edu = DATA.education;
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>
      <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: '0.5rem' }}>
        Education<span style={{ color: '#79ff97' }}>.</span>
      </h2>
      <p style={{ color: '#8b949e', fontSize: 13, marginBottom: '2rem' }}>Academic background & strengths</p>

      <div className="glass-panel card-anim stagger-1" style={{ padding: '1.5rem', marginBottom: 16, borderTop: '3px solid var(--accent-green)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
          <div>
            <h3 style={{ fontWeight: 700, fontSize: 20 }}>{edu.degree}</h3>
            <p style={{ color: '#79ff97', fontSize: 14, marginTop: 4 }}>{edu.school}</p>
          </div>
          <span style={{
            background: 'rgba(121,255,151,0.1)', border: '1px solid rgba(121,255,151,0.3)',
            color: '#79ff97', fontSize: 12, padding: '4px 12px', borderRadius: 20,
          }}>
            Graduated {edu.year}
          </span>
        </div>

        <p style={{ color: '#8b949e', fontSize: 11, letterSpacing: '1px', marginBottom: 10 }}>RELEVANT MODULES</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {edu.modules.map(m => (
            <span key={m} style={{
              background: '#161b22', border: '1px solid #21262d',
              color: '#e6edf3', fontSize: 12, padding: '4px 12px', borderRadius: 6,
            }}>{m}</span>
          ))}
        </div>
      </div>

      <div className="glass-panel card-anim stagger-2" style={{ padding: '1.5rem', borderTop: '3px solid var(--accent-blue)' }}>
        <p style={{ color: '#8b949e', fontSize: 11, letterSpacing: '1px', marginBottom: 14 }}>ADDITIONAL STRENGTHS</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {DATA.strengths.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, color: '#8b949e', fontSize: 13, lineHeight: 1.7 }}>
              <span style={{ color: '#58a6ff', flexShrink: 0 }}>▸</span>
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
