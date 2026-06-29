import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DATA } from '../data';
import { Award, ExternalLink, Download, Eye, X, Cloud, Database, Brain, Network } from 'lucide-react';

const AwsBadgeIcon = ({ color, id }) => {
  // Select matching sub-icon based on certification type
  const getIcon = () => {
    switch (id) {
      case 'aws-data-engineering':
        return <Database size={24} color={color} />;
      case 'aws-ml-foundations':
        return <Brain size={24} color={color} />;
      case 'aws-ml-nlp':
        return <Network size={24} color={color} />;
      case 'aws-cloud-foundations':
      default:
        return <Cloud size={24} color={color} />;
    }
  };

  return (
    <div style={{ position: 'relative', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Outer Hexagon Shape */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={`${color}10`} stopOpacity="0.2" />
          </linearGradient>
          <filter id={`glow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <path 
          d="M50 5 L89.9 28 L89.9 74 L50 97 L10.1 74 L10.1 28 Z" 
          fill={`url(#grad-${id})`} 
          stroke={color} 
          strokeWidth="1.5" 
          style={{ filter: `url(#glow-${id})`, opacity: 0.85 }}
        />
        <path 
          d="M50 10 L84.9 30.2 L84.9 69.8 L50 90 L15.1 69.8 L15.1 30.2 Z" 
          stroke="rgba(255,255,255,0.15)" 
          strokeWidth="1" 
          strokeDasharray="3 3"
        />
      </svg>

      {/* Inner Icon */}
      <div style={{ zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {getIcon()}
      </div>

      {/* Mini AWS Sub-tag */}
      <div style={{
        position: 'absolute',
        bottom: -2,
        background: '#232f3e',
        color: '#ff9900',
        fontSize: 7.5,
        fontWeight: 800,
        padding: '1px 5px',
        borderRadius: 4,
        border: '1px solid #ff9900',
        letterSpacing: '0.5px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.5)'
      }}>
        AWS
      </div>
    </div>
  );
};

export default function Certifications() {
  const certs = DATA.certifications || [];
  const [activeCert, setActiveCert] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', damping: 15 } },
  };

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '0.5rem' }}>
        <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>
          Certifications<span style={{ color: 'var(--accent-green)' }}>.</span>
        </h2>
        <Award size={24} color="var(--accent-green)" />
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: '2.5rem' }}>
        Professional validation of cloud expertise and machine learning implementations
      </p>

      {/* Grid Layout */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
        }}
      >
        {certs.map((c) => (
          <motion.div
            key={c.id}
            variants={item}
            whileHover={{ y: -8, boxShadow: `0 12px 30px ${c.color}15`, borderColor: `${c.color}40` }}
            className="glass-panel"
            style={{
              padding: '2rem',
              borderRadius: 20,
              border: '1px solid var(--border-muted)',
              display: 'flex',
              flexDirection: 'column',
              background: 'var(--alpha-02)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Header section with Badge Icon & Issuer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
              <AwsBadgeIcon color={c.color} id={c.id} />
              
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                <span style={{
                  background: 'rgba(255, 153, 0, 0.08)',
                  border: '1px solid rgba(255, 153, 0, 0.25)',
                  color: '#ff9900',
                  fontSize: 10,
                  padding: '4px 10px',
                  borderRadius: 20,
                  fontWeight: 700,
                  letterSpacing: '0.5px'
                }}>
                  {c.issuer.toUpperCase()}
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: 11, fontWeight: 500 }}>
                  Issued {c.date}
                </span>
              </div>
            </div>

            {/* Cert Description */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text-main)', marginBottom: 10, lineHeight: 1.3 }}>
                {c.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 12.5, lineHeight: 1.6, marginBottom: 20 }}>
                {c.description}
              </p>

              {/* Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                {c.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: 11,
                      padding: '3px 9px',
                      borderRadius: 6,
                      background: `${c.color}08`,
                      border: `1px solid ${c.color}18`,
                      color: 'var(--text-main)',
                      fontWeight: 500
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Footer */}
            <div style={{ display: 'flex', gap: 12, borderTop: '1px solid var(--border-muted)', paddingTop: 16 }}>
              <button
                onClick={() => setActiveCert(c)}
                className="glow-btn"
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  fontSize: 12,
                  padding: '10px 14px',
                  borderRadius: 10,
                  cursor: 'pointer',
                  fontWeight: 600,
                  border: '1px solid var(--border-muted)'
                }}
              >
                <Eye size={14} />
                View Certificate
              </button>

              <a
                href={c.pdfUrl}
                download
                className="glow-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  cursor: 'pointer',
                  border: '1px solid var(--border-muted)',
                  color: 'var(--text-main)'
                }}
                title="Download PDF"
              >
                <Download size={14} />
              </a>
            </div>

            {/* Glowing Accent Corner */}
            <div style={{
              position: 'absolute',
              top: -30,
              right: -30,
              width: 80,
              height: 80,
              background: `radial-gradient(circle, ${c.color}15 0%, transparent 70%)`,
              pointerEvents: 'none',
              borderRadius: '50%'
            }} />
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox / Modal for PDF Viewing */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(5, 7, 12, 0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25 }}
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: 900,
                height: '85vh',
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-muted)',
                borderRadius: 24,
                overflow: 'hidden',
                boxShadow: '0 24px 50px rgba(0, 0, 0, 0.6)'
              }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* Modal Header */}
              <div style={{
                padding: '1.2rem 1.8rem',
                borderBottom: '1px solid var(--border-muted)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'var(--alpha-02)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ 
                    width: 10, 
                    height: 10, 
                    borderRadius: '50%', 
                    background: activeCert.color, 
                    boxShadow: `0 0 10px ${activeCert.color}` 
                  }} />
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--text-main)' }}>
                      {activeCert.title}
                    </h3>
                    <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                      {activeCert.issuer} Verified Credential
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <a
                    href={activeCert.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="glow-btn"
                    style={{
                      background: 'var(--alpha-03)',
                      border: '1px solid var(--border-muted)',
                      borderRadius: 10,
                      padding: '8px 14px',
                      fontSize: 12,
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      color: 'var(--text-main)',
                      textDecoration: 'none'
                    }}
                    title="Open in new tab"
                  >
                    <ExternalLink size={13} />
                    <span className="hide-mobile">Open Tab</span>
                  </a>
                  
                  <button
                    onClick={() => setActiveCert(null)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-muted)',
                      color: 'var(--text-main)',
                      cursor: 'pointer',
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s'
                    }}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Modal Body / PDF IFrame */}
              <div style={{ flex: 1, background: '#12161f', position: 'relative', padding: 10 }}>
                {/* Fallback & Helper Notice */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 16,
                  color: 'var(--text-muted)',
                  fontSize: 13,
                  zIndex: 0,
                  padding: 20,
                  textAlign: 'center'
                }}>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                    <Cloud size={20} className="float-anim" />
                    <span>Loading Document Viewer...</span>
                  </div>
                  <p style={{ fontSize: 11, maxWidth: 300, color: 'var(--alpha-40)' }}>
                    If the certificate does not render directly in your browser, you can download or open it.
                  </p>
                  <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
                    <a
                      href={activeCert.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        background: 'rgba(121,255,151,0.1)',
                        border: '1px solid rgba(121,255,151,0.3)',
                        color: 'var(--accent-green)',
                        padding: '6px 14px',
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 600,
                        textDecoration: 'none'
                      }}
                    >
                      Open Document
                    </a>
                    <a
                      href={activeCert.pdfUrl}
                      download
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--border-muted)',
                        color: 'var(--text-main)',
                        padding: '6px 14px',
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 600,
                        textDecoration: 'none'
                      }}
                    >
                      Download
                    </a>
                  </div>
                </div>

                <iframe
                  src={`${activeCert.pdfUrl}#toolbar=0&navpanes=0`}
                  title={activeCert.title}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: 12,
                    zIndex: 1,
                    background: 'transparent'
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styled css helper for responsiveness */}
      <style>{`
        @media (max-width: 500px) {
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </section>
  );
}
