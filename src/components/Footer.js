import React from 'react';
import { DATA } from '../data';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-muted)', padding: '2.5rem 1.5rem',
      textAlign: 'center', color: 'var(--text-muted)', fontSize: 12, marginTop: '3rem',
    }}>
      <p style={{ fontWeight: 800, fontSize: 18, color: 'var(--accent-green)', marginBottom: 8 }}>
        Kamesh Chaudhary
      </p>
      <p style={{ marginBottom: 6 }}>Full-Stack Developer · Kathmandu, Nepal</p>
      <p style={{ marginBottom: 16 }}>
        <a href={`mailto:${DATA.email}`} style={{ color: 'var(--accent-blue)', textDecoration: 'none' }} className="hover-underline">{DATA.email}</a>
        {' · '}
        <a href={`tel:${DATA.phone}`} style={{ color: 'var(--accent-blue)', textDecoration: 'none' }} className="hover-underline">{DATA.phone}</a>
      </p>
      <p style={{ marginBottom: 16 }}>
        <a href={DATA.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} className="hover-underline">GitHub</a>
        {' · '}
        <a href={DATA.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} className="hover-underline">LinkedIn</a>
      </p>
    </footer>
  );
}
