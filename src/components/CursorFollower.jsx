import React, { useEffect, useState, useRef } from 'react';

/**
 * Interactive Mouse Feature (Easter Egg):
 * A subtle custom cursor follower / trailing light spark that smoothly tracks
 * the user's cursor position across the screen with gentle emerald luminescence.
 */
export const CursorFollower = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const requestRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Check if device is touch-only
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Check if cursor is over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.group\\/pill') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHoveringInteractive(true);
      } else {
        setIsHoveringInteractive(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    // Smooth physics loop for the trailing spark
    const animateTrail = () => {
      // Lerp (Linear interpolation) factor
      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.15;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.15;

      setTrailing({ x: trailPos.current.x, y: trailPos.current.y });
      requestRef.current = requestAnimationFrame(animateTrail);
    };

    requestRef.current = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* 1. Ambient Trailing Glow Spark */}
      <div
        className="pointer-events-none fixed z-50 rounded-full transition-all duration-300 ease-out will-change-transform"
        style={{
          transform: `translate3d(${trailing.x}px, ${trailing.y}px, 0) translate(-50%, -50%)`,
          width: isHoveringInteractive ? '54px' : '36px',
          height: isHoveringInteractive ? '54px' : '36px',
          background: isHoveringInteractive
            ? 'radial-gradient(circle, rgba(16, 185, 129, 0.28) 0%, rgba(163, 230, 53, 0.12) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(16, 185, 129, 0.20) 0%, rgba(163, 230, 53, 0.08) 50%, transparent 80%)',
          filter: 'blur(4px)',
        }}
      />

      {/* 2. Crisp Core Light Spark Dot */}
      <div
        className="pointer-events-none fixed z-50 rounded-full transition-transform duration-75 ease-out will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          width: isHoveringInteractive ? '8px' : '5px',
          height: isHoveringInteractive ? '8px' : '5px',
          backgroundColor: isHoveringInteractive ? '#a3e635' : '#10b981',
          boxShadow: isHoveringInteractive
            ? '0 0 12px 2px #a3e635, 0 0 20px 4px rgba(16, 185, 129, 0.8)'
            : '0 0 8px 1px #10b981, 0 0 14px 2px rgba(16, 185, 129, 0.6)',
        }}
      />
    </>
  );
};

export default CursorFollower;

