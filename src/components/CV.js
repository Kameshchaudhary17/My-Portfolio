import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../data';
import { CV_CSS, renderCvHtml } from '../cvTemplate';
import { Download, ExternalLink, Printer, MapPin, Mail, Languages } from 'lucide-react';

export default function CV() {
  const actionBtn = {
    textDecoration: 'none', padding: '10px 18px', borderRadius: 10,
    display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13.5, fontWeight: 600,
    cursor: 'pointer',
  };

  const facts = [
    { icon: <MapPin size={15} color="var(--accent-blue)" />, text: DATA.location },
    { icon: <Mail size={15} color="var(--accent-green)" />, text: DATA.email },
    { icon: <Languages size={15} color="var(--accent-yellow)" />, text: DATA.languages.map(l => l.name).join(', ') },
  ];

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: '1.5rem' }}>
        <div>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.7rem,3vw,2.4rem)', marginBottom: '0.4rem' }}>
            Curriculum Vitae<span style={{ color: 'var(--accent-green)' }}>.</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
            Two-page CV for {DATA.title.replace(' | ', ' & ')} roles in the UAE.
          </p>
        </div>

        <div className="cv-actions" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a
            href={DATA.resumePdf}
            download={DATA.resumeFileName}
            className="hover-glow"
            style={{ ...actionBtn, color: '#06090f', background: 'var(--accent-green)', border: '1px solid var(--accent-green)', fontWeight: 700 }}
          >
            <Download size={16} /> Download PDF
          </a>
          <a
            href={DATA.resumePdf}
            target="_blank"
            rel="noreferrer"
            className="glass-panel hover-glow"
            style={{ ...actionBtn, color: 'var(--text-main)' }}
          >
            <ExternalLink size={16} color="var(--accent-green)" /> Open PDF
          </a>
          <button
            onClick={() => window.print()}
            className="glass-panel hover-glow"
            style={{ ...actionBtn, color: 'var(--text-main)' }}
          >
            <Printer size={16} color="var(--accent-blue)" /> Print
          </button>
        </div>
      </div>

      <div className="cv-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem 1.6rem', marginBottom: '1.75rem' }}>
        {facts.map(f => (
          <span key={f.text} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'var(--alpha-70)' }}>
            {f.icon} {f.text}
          </span>
        ))}
      </div>

      <motion.div
        initial={{ y: 16 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="cv-sheet"
        style={{
          background: '#fff',
          borderRadius: 6,
          padding: 'clamp(1.25rem, 4vw, 3rem)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.35), 0 0 0 1px var(--border-muted)',
        }}
      >
        <style>{CV_CSS}</style>
        <div className="cv-doc" dangerouslySetInnerHTML={{ __html: renderCvHtml(DATA) }} />
      </motion.div>

      <style>{`
        @media print {
          @page { size: A4; margin: 14mm 15mm 15mm; }
          body * { visibility: hidden !important; }
          .cv-sheet, .cv-sheet * { visibility: visible !important; }
          .cv-sheet { position: absolute; left: 0; top: 0; width: 100%; padding: 0 !important; box-shadow: none !important; transform: none !important; }
          body { background: #fff !important; }
        }
      `}</style>
    </section>
  );
}
