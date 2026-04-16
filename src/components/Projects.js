import React, { useState } from 'react';
import { DATA } from '../data';

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>
      <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: '0.5rem' }}>
        Projects<span style={{ color: '#79ff97' }}>.</span>
      </h2>
      <p style={{ color: '#8b949e', fontSize: 13, marginBottom: '2rem' }}>Things I've built from scratch</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 16 }}>
        {DATA.projects.map((p, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="glass-panel"
            style={{
              border: `1px solid ${hovered === i ? p.color + '50' : 'var(--border-muted)'}`,
              borderRadius: 12, padding: '1.5rem',
              borderTop: `3px solid ${p.color}`,
              transition: 'all 0.3s ease',
              transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
              position: 'relative', overflow: 'hidden',
            }}
          >
            {/* Glow bg */}
            <div style={{
              position: 'absolute', top: -20, right: -20,
              width: 100, height: 100, borderRadius: '50%',
              background: `${p.color}08`,
              filter: 'blur(20px)',
              pointerEvents: 'none',
            }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
              <h3 style={{ fontWeight: 700, fontSize: 18, color: p.color }}>
                {p.name}
              </h3>
              <span style={{
                background: `${p.color}15`, border: `1px solid ${p.color}30`,
                color: p.color, fontSize: 10, padding: '2px 8px', borderRadius: 20,
              }}>
                {p.tag}
              </span>
            </div>

            <p style={{ color: '#8b949e', fontSize: 13, lineHeight: 1.75, marginBottom: 16 }}>
              {p.desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {p.stack.map(s => (
                <span key={s} style={{
                  background: `${p.color}10`, border: `1px solid ${p.color}30`,
                  color: '#e6edf3', fontSize: 11, padding: '3px 8px', borderRadius: 5,
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
