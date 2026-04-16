import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mousePosition.x - (isHovering ? 25 : 10), springConfig);
  const cursorY = useSpring(mousePosition.y - (isHovering ? 25 : 10), springConfig);

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: isHovering ? 50 : 20,
          height: isHovering ? 50 : 20,
          borderRadius: '50%',
          backgroundColor: 'rgba(121, 255, 151, 0.3)',
          pointerEvents: 'none',
          zIndex: 9999,
          x: cursorX,
          y: cursorY,
          border: '1px solid var(--accent-green)',
          backdropFilter: 'blur(2px)',
          boxShadow: '0 0 20px rgba(121, 255, 151, 0.4)',
        }}
      />
      <motion.div
        style={{
          position: 'fixed',
          left: mousePosition.x - 3,
          top: mousePosition.y - 3,
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: 'var(--accent-green)',
          pointerEvents: 'none',
          zIndex: 10000,
        }}
      />
    </>
  );
}
