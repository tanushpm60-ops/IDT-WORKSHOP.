import React, { useEffect, useRef } from 'react';

/**
 * Interactive Matrix-Dot Grid with dynamic perspective shifting and cursor ripple physics
 * Theme: Cyber-Emerald / Dark Mode (#0d1117 with #10b981 and lime accents)
 */
export const MatrixGridCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse with smooth interpolation
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovering: false,
      radius: 180, // influence radius
    };

    // Grid configuration
    const spacing = 36;
    let cols = Math.ceil(width / spacing) + 2;
    let rows = Math.ceil(height / spacing) + 2;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      cols = Math.ceil(width / spacing) + 2;
      rows = Math.ceil(height / spacing) + 2;
    };

    handleResize();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.025;

      // Smooth mouse interpolation (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle radial glow in the background centered on cursor or hero center
      const gradientX = mouse.isHovering ? mouse.x : width * 0.5;
      const gradientY = mouse.isHovering ? mouse.y : height * 0.35;
      const radialGlow = ctx.createRadialGradient(
        gradientX,
        gradientY,
        0,
        gradientX,
        gradientY,
        500
      );
      radialGlow.addColorStop(0, 'rgba(16, 185, 129, 0.07)');
      radialGlow.addColorStop(0.5, 'rgba(163, 230, 53, 0.025)');
      radialGlow.addColorStop(1, 'rgba(13, 17, 23, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Render Matrix Grid Dots
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const originX = (i - 1) * spacing;
          const originY = (j - 1) * spacing;

          // Gentle ambient cyber-wave breathing effect
          const ambientWave = Math.sin(time + originX * 0.015 + originY * 0.015) * 2.5;

          // Distance to mouse
          const dx = mouse.x - originX;
          const dy = mouse.y - originY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let posX = originX;
          let posY = originY + ambientWave;
          let dotRadius = 1.25;
          let alpha = 0.18;
          let isNeonAccent = false;

          // Interactive ripple & perspective shift near cursor
          if (dist < mouse.radius) {
            const factor = (1 - dist / mouse.radius);
            const ripple = Math.sin(dist * 0.07 - time * 3.5) * 8 * factor;

            // Push dots slightly away from cursor to create tactile ripple
            const angle = Math.atan2(dy, dx);
            posX -= Math.cos(angle) * ripple;
            posY -= Math.sin(angle) * ripple;

            dotRadius = 1.3 + factor * 2.2;
            alpha = 0.25 + factor * 0.65;

            // Shift dots closest to cursor to bright neon lime/emerald
            if (factor > 0.45) {
              isNeonAccent = true;
            }
          }

          // Render dot
          ctx.beginPath();
          ctx.arc(posX, posY, dotRadius, 0, Math.PI * 2);

          if (isNeonAccent) {
            ctx.fillStyle = `rgba(163, 230, 53, ${alpha})`;
            ctx.shadowColor = 'rgba(16, 185, 129, 0.8)';
            ctx.shadowBlur = 6;
          } else {
            ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.shadowBlur = 0;
          }

          ctx.fill();

          // Connect neighboring dots with subtle lines when energized near mouse
          if (dist < mouse.radius * 0.65 && i < cols - 1) {
            const nextX = (i) * spacing;
            const nextY = (j - 1) * spacing + ambientWave;
            const dNext = Math.hypot(mouse.x - nextX, mouse.y - nextY);
            if (dNext < mouse.radius * 0.65) {
              ctx.beginPath();
              ctx.moveTo(posX, posY);
              ctx.lineTo(nextX, nextY);
              ctx.strokeStyle = `rgba(16, 185, 129, ${0.12 * (1 - dist / (mouse.radius * 0.65))})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none w-full h-full"
    />
  );
};

export default MatrixGridCanvas;

