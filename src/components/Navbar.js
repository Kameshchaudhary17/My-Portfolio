import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, DATA } from '../data';
import ThemeToggle from './ThemeToggle';
import { Download } from 'lucide-react';

export default function Navbar({ active, setActive, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const styles = {
    nav: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'var(--bg-glass-hover)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-muted)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      padding: '0 1.5rem',
    },
    inner: {
      maxWidth: 1100, margin: '0 auto',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: 62,
    },
    logo: {
      fontWeight: 800, fontSize: 23,
      color: 'var(--text-main)', letterSpacing: '-0.5px', cursor: 'pointer',
      display: 'flex', alignItems: 'center', gap: 6,
    },
    desktopNav: { display: 'flex', alignItems: 'center', gap: 4 },
    navBtn: (isActive) => ({
      background: isActive ? 'var(--bg-glass-hover)' : 'transparent',
      border: isActive ? '1px solid var(--border-glow)' : '1px solid transparent',
      color: isActive ? 'var(--accent-green)' : 'var(--text-muted)',
      fontSize: 13,
      fontWeight: isActive ? 600 : 500,
      padding: '7px 15px', borderRadius: 8, cursor: 'pointer',
      transition: 'all 0.25s', boxShadow: isActive ? '0 0 10px rgba(121,255,151,0.1)' : 'none',
    }),
    resumeBtn: {
      textDecoration: 'none',
      color: 'var(--accent-green)',
      border: '1px solid rgba(121, 255, 151, 0.4)',
      background: 'rgba(121, 255, 151, 0.08)',
      fontSize: 12.5,
      fontWeight: 700,
      padding: '7px 13px',
      borderRadius: 8,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      marginLeft: 6,
      transition: 'all 0.25s ease',
    },
    hamburger: {
      display: 'none', background: 'transparent', border: 'none',
      color: 'var(--text-main)', cursor: 'pointer', fontSize: 20, padding: 4,
    },
    mobileMenu: {
      display: menuOpen ? 'flex' : 'none',
      flexDirection: 'column', gap: 6,
      padding: '1.2rem 1.5rem', background: 'var(--bg-card)',
      borderTop: '1px solid var(--border-muted)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    },
    mobileBtn: (isActive) => ({
      background: isActive ? 'var(--alpha-08)' : 'transparent',
      border: isActive ? '1px solid var(--border-glow)' : '1px solid transparent',
      color: isActive ? 'var(--accent-green)' : 'var(--text-muted)',
      fontSize: 13.5,
      fontWeight: isActive ? 700 : 500,
      padding: '10px 16px', borderRadius: 8, cursor: 'pointer',
      textAlign: 'left', transition: 'all 0.2s',
    }),
  };

  const handleNav = (item) => {
    setActive(item);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        <div style={styles.logo} onClick={() => handleNav('About')}>
          <span>KC</span>
          <span style={{ color: 'var(--accent-green)' }}>.</span>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--alpha-40)', marginLeft: 4 }}>dev</span>
        </div>

        {/* Desktop Navigation */}
        <div style={styles.desktopNav} className="desktop-nav">
          {NAV_ITEMS.map(n => (
            <button key={n} style={styles.navBtn(active === n)} className={active !== n ? "glow-btn" : ""} onClick={() => handleNav(n)}>
              {n}
            </button>
          ))}
          <a
            href={DATA.resumePdf}
            download="Kamesh_Chaudhary_Resume.pdf"
            style={styles.resumeBtn}
            className="hover-glow"
          >
            <Download size={14} /> Resume
          </a>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Mobile controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="mobile-only">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button style={{ ...styles.hamburger, display: 'block' }} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div style={styles.mobileMenu} className="mobile-menu">
        {NAV_ITEMS.map(n => (
          <button key={n} style={styles.mobileBtn(active === n)} onClick={() => handleNav(n)}>
            {n}
          </button>
        ))}
        <a
          href={DATA.resumePdf}
          download="Kamesh_Chaudhary_Resume.pdf"
          style={{
            ...styles.mobileBtn(false),
            textDecoration: 'none',
            color: 'var(--accent-green)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontWeight: 700,
          }}
        >
          <Download size={15} /> Download Resume (PDF)
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu { display: ${menuOpen ? 'flex' : 'none'} !important; }
        }
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
