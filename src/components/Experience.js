import React, { useState } from 'react';
import { DATA } from '../data';

export default function Experience() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>
      <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: '0.5rem' }}>
        Work Experience<span style={{ color: '#79ff97' }}>.</span>
      </h2>
      <p style={{ color: '#8b949e', fontSize: 13, marginBottom: '2rem' }}>Where I've worked and what I've built</p>

      {/* Timeline */}
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute', left: 20, top: 0, bottom: 0,
          width: 1, background: 'linear-gradient(to bottom,#79ff97,#21262d)',
        }} />

        {DATA.experience.map((exp, i) => (
          <div key={i} style={{ marginBottom: 24, paddingLeft: 52, position: 'relative' }}>
            {/* Dot */}
            <div style={{
              position: 'absolute', left: 12, top: 24,
              width: 16, height: 16, borderRadius: '50%',
              background: exp.color, border: '3px solid #06090f',
              boxShadow: `0 0 12px ${exp.color}60`,
            }} />

            <div className="glass-panel card-anim" style={{
              padding: '1.5rem',
              borderLeft: `3px solid ${exp.color}`,
              cursor: 'pointer',
            }} onClick={() => setExpanded(expanded === i ? null : i)}>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>
                    {exp.role}
                  </h3>
                  <p style={{ color: exp.color, fontSize: 14 }}>{exp.company}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{
                    background: `${exp.color}15`, border: `1px solid ${exp.color}40`,
                    color: exp.color, fontSize: 11, padding: '3px 10px', borderRadius: 20,
                  }}>{exp.period}</span>
                  <p style={{ color: '#8b949e', fontSize: 12, marginTop: 4 }}>{exp.type}</p>
                </div>
              </div>

              <div style={{
                maxHeight: expanded === i ? 400 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.4s ease',
              }}>
                <ul style={{ paddingLeft: 0, listStyle: 'none', marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, color: '#8b949e', fontSize: 13, lineHeight: 1.7 }}>
                      <span style={{ color: exp.color, flexShrink: 0 }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <p style={{ color: '#8b949e', fontSize: 11, marginTop: 12, textAlign: 'right' }}>
                {expanded === i ? '▲ collapse' : '▼ expand'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
