import React from 'react';
import { DATA } from '../data';

const catColors = {
  Frontend: '#79ff97',
  Backend: '#58a6ff',
  Database: '#f78166',
  'Tools & Practices': '#e8c87a',
};

export default function Skills() {
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>
      <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: '0.5rem' }}>
        Technical Skills<span style={{ color: '#79ff97' }}>.</span>
      </h2>
      <p style={{ color: '#8b949e', fontSize: 13, marginBottom: '2rem' }}>Technologies I work with</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
        {Object.entries(DATA.skills).map(([cat, items]) => {
          const color = catColors[cat] || '#79ff97';
          return (
            <div key={cat} className="glass-panel" style={{
              padding: '1.4rem', borderTop: `3px solid ${color}`,
            }}>
              <p style={{ color, fontSize: 11, letterSpacing: '1px', marginBottom: 14, fontWeight: 500 }}>
                {cat.toUpperCase()}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {items.map(skill => (
                  <span key={skill} style={{
                    background: `${color}10`, border: `1px solid ${color}30`,
                    color: '#e6edf3', fontSize: 12, padding: '4px 10px', borderRadius: 6,
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Skill bars visual */}
      <div className="glass-panel" style={{ marginTop: '2.5rem', padding: '1.5rem' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: 11, letterSpacing: '1px', marginBottom: '1.2rem' }}>PROFICIENCY OVERVIEW</p>
        {[
          { label: 'React.js / Frontend', pct: 88, color: '#79ff97' },
          { label: 'Node.js / Backend', pct: 82, color: '#58a6ff' },
          { label: 'Database Design', pct: 78, color: '#f78166' },
          { label: 'ASP.NET Core (.NET)', pct: 72, color: '#e8c87a' },
          { label: 'Python / ML', pct: 65, color: '#c792ea' },
        ].map(({ label, pct, color }) => (
          <div key={label} style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
              <span style={{ color: '#e6edf3' }}>{label}</span>
              <span style={{ color }}>{pct}%</span>
            </div>
            <div style={{ background: '#161b22', borderRadius: 4, height: 6, overflow: 'hidden' }}>
              <div style={{
                width: `${pct}%`, height: '100%',
                background: `linear-gradient(90deg,${color}80,${color})`,
                borderRadius: 4,
                transition: 'width 1s ease',
              }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
