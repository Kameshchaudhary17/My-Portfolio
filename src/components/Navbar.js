import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../data';
import ThemeToggle from './ThemeToggle';

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
      height: 60,
    },
    logo: {
      fontWeight: 800, fontSize: 24,
      color: 'var(--text-main)', letterSpacing: '-0.5px', cursor: 'pointer',
    },
    desktopNav: { display: 'flex', gap: 4 },
    navBtn: (isActive) => ({
      background: isActive ? 'var(--bg-glass-hover)' : 'transparent',
      border: isActive ? '1px solid var(--border-glow)' : '1px solid transparent',
      color: isActive ? 'var(--accent-green)' : 'var(--text-muted)',
      fontSize: 13,
      padding: '8px 16px', borderRadius: 8, cursor: 'pointer',
      transition: 'all 0.3s', boxShadow: isActive ? '0 0 10px rgba(121,255,151,0.1)' : 'none',
    }),
    hamburger: {
      display: 'none', background: 'transparent', border: 'none',
      color: 'var(--text-main)', cursor: 'pointer', fontSize: 20, padding: 4,
    },
    mobileMenu: {
      display: menuOpen ? 'flex' : 'none',
      flexDirection: 'column', gap: 4,
      padding: '1rem 1.5rem', background: 'var(--bg-card)',
      borderTop: '1px solid var(--border-muted)',
    },
    mobileBtn: (isActive) => ({
      background: isActive ? 'var(--alpha-08)' : 'transparent',
      border: isActive ? '1px solid var(--border-glow)' : '1px solid transparent',
      color: isActive ? 'var(--accent-green)' : 'var(--text-muted)',
      fontSize: 13,
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
        <span style={styles.logo} onClick={() => handleNav('About')}>
          KC<span style={{ color: 'var(--text-main)' }}>.</span>
        </span>

        {/* Desktop */}
        <div style={styles.desktopNav} className="desktop-nav">
          {NAV_ITEMS.map(n => (
            <button key={n} style={styles.navBtn(active === n)} className={active !== n ? "glow-btn" : ""} onClick={() => handleNav(n)}>
              {n}
            </button>
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="mobile-only">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button style={{ ...styles.hamburger, display: 'block' }} onClick={() => setMenuOpen(!menuOpen)}>
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
      </div>

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu { display: ${menuOpen ? 'flex' : 'none'} !important; }
        }
        @media (min-width: 641px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
