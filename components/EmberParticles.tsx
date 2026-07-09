"use client";

import { useEffect, useRef } from "react";

interface Ember {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

export default function EmberParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const embersRef = useRef<Ember[]>([]);
  const scrollSpeedRef = useRef(0);
  const lastScrollRef = useRef(0);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Track scroll speed
    const onScroll = () => {
      const currentScroll = window.scrollY;
      scrollSpeedRef.current = Math.abs(currentScroll - lastScrollRef.current);
      lastScrollRef.current = currentScroll;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Create embers
    const EMBER_COUNT = 60;
    const embers: Ember[] = [];
    for (let i = 0; i < EMBER_COUNT; i++) {
      embers.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        speedY: -(Math.random() * 0.4 + 0.15),
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }
    embersRef.current = embers;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Scroll boost decays smoothly
      scrollSpeedRef.current *= 0.92;
      const scrollBoost = 1 + scrollSpeedRef.current * 0.15;

      for (const ember of embers) {
        // Update pulse
        ember.pulse += ember.pulseSpeed;
        const pulseAlpha = Math.sin(ember.pulse) * 0.3 + 0.7;

        // Move ember upward (faster when scrolling)
        ember.y += ember.speedY * scrollBoost;
        ember.x += ember.speedX;

        // Wrap around
        if (ember.y < -10) {
          ember.y = canvas.height + 10;
          ember.x = Math.random() * canvas.width;
        }
        if (ember.x < -10) ember.x = canvas.width + 10;
        if (ember.x > canvas.width + 10) ember.x = -10;

        const finalAlpha = ember.opacity * pulseAlpha;

        // Glow layer
        const gradient = ctx.createRadialGradient(
          ember.x, ember.y, 0,
          ember.x, ember.y, ember.size * 4
        );
        gradient.addColorStop(0, `rgba(254, 4, 5, ${finalAlpha * 0.6})`);
        gradient.addColorStop(0.4, `rgba(254, 4, 5, ${finalAlpha * 0.15})`);
        gradient.addColorStop(1, "rgba(254, 4, 5, 0)");

        ctx.beginPath();
        ctx.arc(ember.x, ember.y, ember.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(ember.x, ember.y, ember.size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 120, 80, ${finalAlpha})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
