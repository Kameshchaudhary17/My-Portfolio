import React from 'react';
import { DATA } from '../data';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #21262d', padding: '2.5rem 1.5rem',
      textAlign: 'center', color: '#8b949e', fontSize: 12, marginTop: '3rem',
    }}>
      <p style={{ fontWeight: 800, fontSize: 18, color: '#79ff97', marginBottom: 8 }}>
        Kamesh Chaudhary
      </p>
      <p style={{ marginBottom: 6 }}>Full-Stack Developer · Kathmandu, Nepal</p>
      <p style={{ marginBottom: 16 }}>
        <a href={`mailto:${DATA.email}`} style={{ color: '#58a6ff', textDecoration: 'none' }}>{DATA.email}</a>
        {' · '}
        <a href={DATA.github} target="_blank" rel="noreferrer" style={{ color: '#58a6ff', textDecoration: 'none' }}>GitHub</a>
        {' · '}
        <a href={DATA.linkedin} target="_blank" rel="noreferrer" style={{ color: '#58a6ff', textDecoration: 'none' }}>LinkedIn</a>
      </p>
      <p style={{ fontSize: 11, color: '#21262d' }}>Built with React · Powered by Claude AI · {new Date().getFullYear()}</p>
    </footer>
  );
}
