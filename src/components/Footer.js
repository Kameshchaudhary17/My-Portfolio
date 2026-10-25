import React from 'react';
import { DATA } from '../data';
import { Mail, Phone, Github, Linkedin, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-muted)', padding: '3.5rem 1.5rem 2.5rem',
      textAlign: 'center', color: 'var(--text-muted)', fontSize: 13, marginTop: '4rem',
      background: 'var(--alpha-01)',
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <p style={{ fontWeight: 800, fontSize: 20, color: 'var(--accent-green)', marginBottom: 6 }}>
          {DATA.name}
        </p>
        <p style={{ color: 'var(--text-main)', fontSize: 14, fontWeight: 500, marginBottom: 8 }}>
          Software Developer | Application Support · {DATA.location}
        </p>
        <p style={{ color: 'var(--alpha-50)', fontSize: 12.5, marginBottom: 20 }}>
          Currently delivering remote full-stack engineering at <strong>Altren Group</strong>.
        </p>

        {/* Quick Contact Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
          <a href={`mailto:${DATA.email}`} style={{ color: 'var(--accent-blue)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }} className="hover-underline">
            <Mail size={15} /> {DATA.email}
          </a>
          <span style={{ color: 'var(--alpha-30)' }}>•</span>
          <a href={`tel:${DATA.phone}`} style={{ color: 'var(--accent-green)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }} className="hover-underline">
            <Phone size={15} /> {DATA.phone}
          </a>
          <span style={{ color: 'var(--alpha-30)' }}>•</span>
          <a href={DATA.resumePdf} download="Kamesh_Chaudhary_Resume.pdf" style={{ color: 'var(--accent-green)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700 }} className="hover-underline">
            <Download size={15} /> Resume (PDF)
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 24 }}>
          <a href={DATA.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }} className="hover-underline">
            <Github size={16} /> GitHub
          </a>
          <a href={DATA.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }} className="hover-underline">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        <p style={{ color: 'var(--alpha-40)', fontSize: 12 }}>
          Crafted with React, Framer Motion & Vanilla CSS · © {new Date().getFullYear()} Kamesh Chaudhary
        </p>
      </div>
    </footer>
  );
}
