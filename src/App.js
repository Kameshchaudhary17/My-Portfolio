import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Chat from './components/Chat';
import Footer from './components/Footer';

export default function App() {
  const [active, setActive] = useState('About');

  const sections = {
    About: <About setActive={setActive} />,
    Skills: <Skills />,
    Experience: <Experience />,
    Projects: <Projects />,
    Education: <Education />,
    Chat: <Chat />,
  };

  return (
    <div style={{ minHeight: '100vh', background: '#06090f' }}>
      <Navbar active={active} setActive={setActive} />

      {/* Noise texture overlay */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
        opacity: 0.4,
      }} />

      {/* Grid background */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'linear-gradient(#21262d22 1px,transparent 1px),linear-gradient(90deg,#21262d22 1px,transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <main style={{ position: 'relative', zIndex: 1, paddingTop: 60 }}>
        {sections[active]}
      </main>

      <Footer />
    </div>
  );
}
