import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../data';
import { Code, Server, Database, Cloud, Network, Wrench, Terminal, Cpu } from 'lucide-react';

export default function Skills() {
  const iconMap = {
    Frontend: <Code size={20} color="var(--accent-green)" />,
    Backend: <Server size={20} color="var(--accent-blue)" />,
    Databases: <Database size={20} color="#ffa657" />,
    "DevOps & Cloud": <Cloud size={20} color="#79ff97" />,
    "IT Support & Networking": <Network size={20} color="#e8c87a" />,
    "Tools & Practices": <Wrench size={20} color="#d2a8ff" />,
  };

  const accentColorMap = {
    Frontend: "var(--accent-green)",
    Backend: "var(--accent-blue)",
    Databases: "#ffa657",
    "DevOps & Cloud": "#79ff97",
    "IT Support & Networking": "#e8c87a",
    "Tools & Practices": "#d2a8ff",
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', damping: 15 } },
  };

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.7rem,3vw,2.4rem)', marginBottom: '0.4rem' }}>
          Technical Skills & Expertise<span style={{ color: 'var(--accent-green)' }}>.</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
          Comprehensive toolkit across modern full-stack engineering, cloud infrastructure, and application support.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 20,
        }}
      >
        {Object.entries(DATA.skills).map(([category, list]) => {
          const accentColor = accentColorMap[category] || "var(--accent-green)";
          return (
            <motion.div
              key={category}
              variants={item}
              className="glass-panel"
              whileHover={{ y: -5, boxShadow: `0 12px 30px ${accentColor}15` }}
              style={{
                padding: '1.75rem',
                borderRadius: 18,
                border: '1px solid var(--border-muted)',
                borderTop: `3px solid ${accentColor}`,
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--alpha-02)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    background: `${accentColor}18`,
                    border: `1px solid ${accentColor}30`,
                    padding: 8,
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {iconMap[category] || <Cpu size={20} color={accentColor} />}
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-main)' }}>{category}</h3>
                </div>
                <span style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: accentColor,
                  background: `${accentColor}10`,
                  padding: '3px 8px',
                  borderRadius: 6,
                }}>
                  {list.length} skills
                </span>
              </div>

              {/* Skill Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, flex: 1 }}>
                {list.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: 12.5,
                      padding: '5px 11px',
                      borderRadius: 8,
                      background: 'var(--alpha-04)',
                      border: '1px solid var(--alpha-10)',
                      color: 'var(--text-main)',
                      fontWeight: 500,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    <span style={{ color: accentColor, fontSize: 10 }}>•</span>
                    {skill}
                  </span>
                ))}
              </div>

              {/* Subtle Gradient Glow */}
              <div style={{
                position: 'absolute',
                bottom: -25,
                right: -25,
                width: 120,
                height: 120,
                background: `radial-gradient(circle, ${accentColor}10 0%, transparent 70%)`,
                pointerEvents: 'none'
              }} />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Proficiency Overview Section */}
      <motion.div 
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="glass-panel" 
        style={{ marginTop: '3rem', padding: '2.2rem', borderRadius: 20, border: '1px solid var(--border-muted)' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
          <Terminal size={20} color="var(--accent-green)" />
          <h3 style={{ color: 'var(--text-main)', fontSize: 16, fontWeight: 700, letterSpacing: '0.5px' }}>
            CORE STACK PROFICIENCY OVERVIEW
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem 2.5rem' }}>
          {[
            { label: 'React.js & Next.js (Modern Frontend)', pct: 92, color: '#79ff97' },
            { label: 'Node.js, Express & Nest.js (REST APIs)', pct: 88, color: '#58a6ff' },
            { label: 'ASP.NET Core (.NET) & C# (MVC Architecture)', pct: 82, color: '#ffa657' },
            { label: 'Databases (MongoDB, PostgreSQL, SQL Server)', pct: 85, color: '#e8c87a' },
            { label: 'DevOps & Containers (Docker, Kubernetes, CI/CD)', pct: 80, color: '#79ff97' },
            { label: 'IT Support, Hardware & Networking (TCP/IP, DNS)', pct: 86, color: '#d2a8ff' },
          ].map(({ label, pct, color }, idx) => (
            <div key={label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, marginBottom: 8 }}>
                <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>{label}</span>
                <span style={{ color, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{pct}%</span>
              </div>
              <div style={{ background: 'var(--alpha-06)', borderRadius: 10, height: 8, overflow: 'hidden' }}>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  transition={{ duration: 1.2, delay: 0.08 * idx, ease: "easeOut" }}
                  viewport={{ once: true }}
                  style={{
                    height: '100%',
                    background: `linear-gradient(90deg, ${color}50, ${color})`,
                    borderRadius: 10,
                    boxShadow: `0 0 10px ${color}35`
                  }} 
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
