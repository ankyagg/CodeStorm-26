"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function WavyBackground() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Parallax shifts for the waves as you scroll down
  const x1 = useTransform(scrollY, [0, 2000], [0, -300]);
  const x2 = useTransform(scrollY, [0, 2000], [0, 300]);
  const x3 = useTransform(scrollY, [0, 2000], [0, -500]);
  
  const y1 = useTransform(scrollY, [0, 2000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -150]);

  // Prevent hydration mismatch by only rendering after mount
  if (!mounted) return null;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: -1, overflow: "hidden", pointerEvents: "none" }}>
      
      {/* Wave 1: Deep Dark Red Base */}
      <motion.div 
        style={{ position: "absolute", top: "-10%", left: "-20%", width: "140vw", height: "120vh", opacity: 0.08, x: x1, y: y1 }}
      >
        <svg viewBox="0 0 1440 800" preserveAspectRatio="none" style={{ width: "100%", height: "100%", fill: "var(--color-red-dark)" }}>
          <path d="M0,320L60,341.3C120,363,240,405,360,400C480,395,600,341,720,314.7C840,288,960,288,1080,314.7C1200,341,1320,395,1380,421.3L1440,448L1440,800L1380,800C1320,800,1200,800,1080,800C960,800,840,800,720,800C600,800,480,800,360,800C240,800,120,800,60,800L0,800Z"></path>
        </svg>
      </motion.div>

      {/* Wave 2: Glowing overlapping wave */}
      <motion.div 
        style={{ position: "absolute", top: "20%", left: "-10%", width: "120vw", height: "100vh", opacity: 0.1, x: x2, y: y2 }}
      >
        <svg viewBox="0 0 1440 800" preserveAspectRatio="none" style={{ width: "100%", height: "100%", fill: "var(--color-red-glow)" }}>
          <path d="M0,640L60,613.3C120,587,240,533,360,533C480,533,600,587,720,597.3C840,608,960,576,1080,544C1200,512,1320,480,1380,464L1440,448L1440,800L1380,800C1320,800,1200,800,1080,800C960,800,840,800,720,800C600,800,480,800,360,800C240,800,120,800,60,800L0,800Z"></path>
        </svg>
      </motion.div>

      {/* Wave 3: Fast moving sharp accent line */}
      <motion.div 
        style={{ position: "absolute", top: "30%", left: "-10%", width: "130vw", height: "100vh", opacity: 0.15, x: x3 }}
      >
        <svg viewBox="0 0 1440 800" preserveAspectRatio="none" style={{ width: "100%", height: "100%", stroke: "var(--color-red-bright)", fill: "transparent", strokeWidth: 2 }}>
          <path d="M0,160L60,186.7C120,213,240,267,360,250.7C480,235,600,149,720,133.3C840,117,960,171,1080,186.7C1200,203,1320,181,1380,170.7L1440,160"></path>
        </svg>
      </motion.div>

    </div>
  );
}
