import React, { useEffect, useState } from 'react';
import { DATA } from '../data';

export default function About({ setActive }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const s = {
    section: {
      maxWidth: 1100, margin: '0 auto', padding: '8rem 1.5rem 3rem',
      opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: 'all 0.6s ease',
    },
    grid: { display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' },
    tag: { color: 'var(--accent-green)', fontSize: 14, marginBottom: 16, letterSpacing: '1px' },
    name: { fontWeight: 800, fontSize: 'clamp(2.5rem,6vw,4.5rem)', lineHeight: 1.05, marginBottom: '0.8rem' },
    title: { fontWeight: 500, fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', color: 'var(--text-muted)', marginBottom: '1.5rem' },
    summary: { color: 'var(--text-muted)', lineHeight: 1.85, fontSize: 16, maxWidth: 600, marginBottom: '2.5rem' },
    links: { display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: '2rem' },
    emailBtn: {
      display: 'flex', alignItems: 'center', gap: 8,
      color: 'var(--text-main)', textDecoration: 'none',
      padding: '10px 20px', fontSize: 14, fontWeight: 500,
    },
    ghBtn: {
      background: 'var(--accent-green)', color: 'var(--bg)', textDecoration: 'none',
      padding: '10px 24px', borderRadius: 8, fontSize: 14, fontWeight: 700,
      transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(121,255,151,0.2)'
    },
    liBtn: {
      color: 'var(--text-main)', textDecoration: 'none',
      padding: '10px 24px', fontSize: 14, fontWeight: 500,
    },
    meta: { display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' },
    metaItem: { color: 'var(--text-muted)', fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 },
    avatar: {
      width: 140, height: 140, borderRadius: '50%',
      background: 'linear-gradient(135deg,rgba(121,255,151,0.15),rgba(88,166,255,0.15))',
      border: '2px solid rgba(121,255,151,0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 800, fontSize: 44, color: 'var(--accent-green)',
      flexShrink: 0, boxShadow: '0 0 30px rgba(121,255,151,0.2)'
    },
    statsGrid: {
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
      gap: 16, marginTop: '3.5rem',
    },
    statVal: { fontWeight: 800, fontSize: 36, color: 'var(--text-main)', marginBottom: 4 },
    statLabel: { color: 'var(--accent-green)', fontSize: 13, letterSpacing: '0.5px' },
    statSub: { color: 'var(--text-muted)', fontSize: 13 },
  };

  return (
    <section style={s.section}>
      <div style={s.grid}>
        <div>
          <p style={s.tag} className="card-anim stagger-1">&gt; hello world</p>
          <h1 style={s.name} className="text-gradient card-anim stagger-2">{DATA.name}</h1>
          <p style={s.title} className="card-anim stagger-2">{DATA.title}</p>
          <p style={s.summary} className="card-anim stagger-3">{DATA.summary}</p>
          <div style={s.links} className="card-anim stagger-4">
            <a href={`mailto:${DATA.email}`} style={s.emailBtn} className="glass-panel glow-btn">✉ Email Me</a>
            <a href={DATA.github} target="_blank" rel="noreferrer" style={s.ghBtn}>GitHub ↗</a>
            <a href={DATA.linkedin} target="_blank" rel="noreferrer" style={s.liBtn} className="glass-panel glow-btn">LinkedIn ↗</a>
          </div>
          <div style={s.meta} className="card-anim stagger-4">
            <span style={s.metaItem}>📍 {DATA.location}</span>
            <span style={s.metaItem}>📱 {DATA.phone}</span>
          </div>
          <button
            onClick={() => setActive('Chat')}
            className="glow-btn card-anim stagger-4"
            style={{
              background: 'transparent', border: '1px solid var(--border-glow)',
              color: 'var(--accent-green)', fontSize: 13,
              padding: '10px 20px', borderRadius: 8, cursor: 'pointer',
            }}
          >
            ⬡ Ask AI about me →
          </button>
        </div>
        <div style={s.avatar} className="float-anim">KC</div>
      </div>

      <div style={s.statsGrid}>
        {DATA.stats.map((st, i) => (
          <div key={i} className="glass-panel card-anim" style={{ animationDelay: `${0.2 + i * 0.1}s`, padding: '1.5rem', textAlign: 'center' }}>
            <div style={s.statVal}>{st.value}</div>
            <div style={s.statLabel}>{st.label}</div>
            <div style={s.statSub}>{st.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
