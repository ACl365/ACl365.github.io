'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Simple particle animation using Canvas
const HeroBackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 50; // Adjust density as needed

    // Set canvas dimensions based on container size
    const resizeCanvas = () => {
        const container = canvas.parentElement;
        if (container) {
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
            // Reinitialize particles on resize if needed, or just clear and redraw
            initParticles();
        }
    };


    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 1.5 + 0.5; // Smaller particles
        this.speedX = (Math.random() * 0.6 - 0.3); // Slower speed
        this.speedY = (Math.random() * 0.6 - 0.3); // Slower speed
        // Use primary color with varying opacity for subtlety
        const opacity = Math.random() * 0.4 + 0.1; // Low opacity
        this.color = `rgba(10, 102, 194, ${opacity})`; // LinkedIn Blue from config: #0A66C2
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Boundary check (wrap around)
        if (this.x < 0) this.x = canvasWidth;
        if (this.x > canvasWidth) this.x = 0;
        if (this.y < 0) this.y = canvasHeight;
        if (this.y > canvasHeight) this.y = 0;
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    function initParticles() {
      particles = [];
      if (canvas) {
          for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(canvas.width, canvas.height));
          }
      }
    }

    function connectParticles(context: CanvasRenderingContext2D) {
      const maxDistance = 100; // Max distance to draw a line
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance; // Line fades with distance
            context.strokeStyle = `rgba(10, 102, 194, ${opacity * 0.2})`; // Very faint lines
            context.lineWidth = 0.5;
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.stroke();
          }
        }
      }
    }


    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });
      connectParticles(ctx); // Draw connecting lines

      animationFrameId = requestAnimationFrame(animate);
    }

    // Initial setup
    resizeCanvas(); // Set initial size
    // initParticles(); // Called within resizeCanvas
    animate();

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10" // Position behind content
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  );
};

export default HeroBackgroundAnimation;