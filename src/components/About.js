import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../data';
import { Mail, Github, Linkedin, MapPin, Phone, MessageSquare, Download, ExternalLink, CheckCircle, Sparkles, Terminal } from 'lucide-react';

function CountUp({ value }) {
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : '';
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered) setTriggered(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;
    const steps = 50;
    const stepTime = 1500 / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      setCount(Math.round(eased * target));
      if (step >= steps) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [triggered, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About({ setActive }) {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = DATA.roles[roleIndex];
    let timeout;
    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex(prev => (prev + 1) % DATA.roles.length);
      }, 400);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(isDeleting
          ? displayText.slice(0, -1)
          : currentRole.slice(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const s = {
    section: { maxWidth: 1100, margin: '0 auto', padding: '6rem 1.5rem 3rem' },
    grid: { display: 'grid', gridTemplateColumns: '1fr auto', gap: '3.5rem', alignItems: 'center' },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'rgba(121, 255, 151, 0.1)',
      border: '1px solid rgba(121, 255, 151, 0.3)',
      color: 'var(--accent-green)',
      fontSize: 12,
      fontWeight: 600,
      padding: '6px 14px',
      borderRadius: 20,
      marginBottom: 20,
      fontFamily: 'var(--font-mono)',
    },
    pulseDot: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--accent-green)',
      boxShadow: '0 0 10px var(--accent-green)',
    },
    name: { fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', lineHeight: 1.1, marginBottom: '0.6rem' },
    title: { fontWeight: 600, fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)', color: 'var(--alpha-70)', marginBottom: '1.25rem', minHeight: '2rem' },
    summary: { color: 'var(--alpha-70)', lineHeight: 1.85, fontSize: 15.5, maxWidth: 660, marginBottom: '2rem' },
    links: { display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' },
    meta: { display: 'flex', gap: '1.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' },
    metaItem: { color: 'var(--alpha-60)', fontSize: 13.5, display: 'flex', alignItems: 'center', gap: 7 },
    avatarCard: {
      position: 'relative',
      width: 170,
      height: 170,
      borderRadius: 28,
      background: 'linear-gradient(135deg, rgba(121,255,151,0.15), rgba(88,166,255,0.15))',
      border: '1px solid rgba(121,255,151,0.3)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      color: 'var(--accent-green)',
      flexShrink: 0,
      boxShadow: '0 0 50px rgba(121,255,151,0.12)',
    },
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const keySkills = ["React.js", "Next.js", "Nest.js", "Node.js", "ASP.NET Core", "Docker", "Kubernetes", "AWS"];

  return (
    <motion.section 
      style={s.section}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div style={s.grid} className="hero-grid">
        <div>
          {/* Status Badge */}
          <motion.div variants={item} style={s.badge}>
            <span style={s.pulseDot} />
            <span>Currently Software Developer @ Altren Group (Remote)</span>
          </motion.div>

          <motion.h1 
            variants={item} 
            style={s.name} 
            className="text-gradient"
          >
            {DATA.name}
          </motion.h1>

          <motion.p variants={item} style={s.title}>
            <span style={{ color: 'var(--accent-blue)' }}>&gt; </span>
            {displayText}
            <span style={{
              display: 'inline-block', width: 2, height: '1em',
              background: 'var(--accent-green)', marginLeft: 3,
              verticalAlign: 'text-bottom',
              animation: 'blink 1s step-end infinite',
            }} />
          </motion.p>

          <motion.p variants={item} style={s.summary}>
            {DATA.summary}
          </motion.p>

          {/* Quick Skill Chips */}
          <motion.div variants={item} style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: '2rem' }}>
            {keySkills.map(sk => (
              <span key={sk} style={{
                fontSize: 11.5,
                fontWeight: 600,
                padding: '4px 10px',
                borderRadius: 6,
                background: 'var(--alpha-04)',
                border: '1px solid var(--alpha-10)',
                color: 'var(--text-main)',
              }}>
                {sk}
              </span>
            ))}
          </motion.div>

          {/* Action & Contact Links */}
          <motion.div variants={item} style={s.links}>
            <a
              href={DATA.resumePdf}
              download="Kamesh_Chaudhary_Resume.pdf"
              className="hover-glow"
              style={{
                textDecoration: 'none', color: '#06090f',
                padding: '11px 22px', borderRadius: 10,
                display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 700,
                background: 'var(--accent-green)',
                border: '1px solid var(--accent-green)',
                boxShadow: '0 4px 20px rgba(121, 255, 151, 0.25)',
              }}
            >
              <Download size={18} /> Download Resume
            </a>

            <a
              href={DATA.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="glass-panel hover-glow"
              style={{
                textDecoration: 'none', color: 'var(--text-main)',
                padding: '11px 20px', borderRadius: 10,
                display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600,
              }}
            >
              <ExternalLink size={17} color="var(--accent-green)" /> View Resume PDF
            </a>

            <a href={`mailto:${DATA.email}`} className="glass-panel hover-glow" style={{ textDecoration: 'none', color: 'var(--text-main)', padding: '11px 20px', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 500 }}>
              <Mail size={17} color="var(--accent-green)" /> {DATA.email}
            </a>

            <a href={DATA.github} target="_blank" rel="noreferrer" className="glass-panel hover-glow" style={{ textDecoration: 'none', color: 'var(--text-main)', padding: '11px 18px', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
              <Github size={17} color="var(--accent-green)" /> GitHub
            </a>

            <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="glass-panel hover-glow" style={{ textDecoration: 'none', color: 'var(--text-main)', padding: '11px 18px', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
              <Linkedin size={17} color="var(--accent-green)" /> LinkedIn
            </a>
          </motion.div>

          <motion.div variants={item} style={s.meta}>
            <span style={s.metaItem}><MapPin size={16} color="var(--accent-blue)" /> {DATA.location}</span>
            <a href={`tel:${DATA.phone}`} style={{ ...s.metaItem, textDecoration: 'none', cursor: 'pointer' }} className="hover-underline">
              <Phone size={16} color="var(--accent-green)" /> {DATA.phone}
            </a>
            <span style={s.metaItem}><CheckCircle size={16} color="var(--accent-green)" /> Open to Remote & Full-Time Roles</span>
          </motion.div>

          {/* Assistant Button */}
          <motion.div variants={item} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              onClick={() => setActive('Experience')}
              className="glow-btn"
              style={{
                background: 'rgba(88,166,255,0.06)', border: '1px solid rgba(88,166,255,0.3)',
                color: 'var(--accent-blue)', fontSize: 13.5, fontWeight: 600,
                padding: '11px 22px', borderRadius: 10, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 8
              }}
            >
              <Terminal size={16} /> Explore Experience →
            </button>
            <button
              onClick={() => setActive('Projects')}
              className="glow-btn"
              style={{
                background: 'rgba(121,255,151,0.06)', border: '1px solid rgba(121,255,151,0.3)',
                color: 'var(--accent-green)', fontSize: 13.5, fontWeight: 600,
                padding: '11px 22px', borderRadius: 10, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 8
              }}
            >
              <Sparkles size={16} /> View Projects →
            </button>
            <button
              onClick={() => setActive('Chat')}
              className="glow-btn"
              style={{
                background: 'var(--alpha-03)', border: '1px solid var(--border-muted)',
                color: 'var(--text-main)', fontSize: 13.5, fontWeight: 600,
                padding: '11px 22px', borderRadius: 10, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 8
              }}
            >
              <MessageSquare size={16} color="var(--accent-green)" /> Ask AI Assistant →
            </button>
          </motion.div>
        </div>

        {/* Profile Card / Avatar */}
        <motion.div 
          variants={item}
          style={s.avatarCard} 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div style={{ fontSize: 50, fontWeight: 800, letterSpacing: '-1px' }}>KC</div>
          <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--alpha-80)', letterSpacing: '1px', marginTop: 4 }}>
            DEV & SUPPORT
          </span>
          <div style={{
            position: 'absolute',
            bottom: -10,
            background: 'var(--bg-card)',
            border: '1px solid rgba(121,255,151,0.4)',
            color: 'var(--accent-green)',
            fontSize: 10,
            padding: '3px 10px',
            borderRadius: 12,
            fontWeight: 700,
          }}>
            NEPAL · REMOTE
          </div>
        </motion.div>
      </div>

      {/* Stats Counter Section */}
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 16, marginTop: '4.5rem',
        }}
      >
        {DATA.stats.map((st, i) => (
          <motion.div 
            key={i} 
            variants={item}
            className="glass-panel" 
            whileHover={{ y: -5, background: 'var(--alpha-03)' }}
            style={{ padding: '1.8rem 1.5rem', textAlign: 'center', borderRadius: 16 }}
          >
            <div style={{ fontWeight: 800, fontSize: 36, color: 'var(--text-main)', marginBottom: 4 }}><CountUp value={st.value} /></div>
            <div style={{ color: 'var(--accent-green)', fontSize: 13, letterSpacing: '0.5px', fontWeight: 600 }}>{st.label}</div>
            <div style={{ color: 'var(--alpha-40)', fontSize: 12 }}>{st.sub}</div>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: left;
          }
        }
      `}</style>
    </motion.section>
  );
}
