"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function ScanLines() {
  const { scrollY } = useScroll();
  
  // Scan lines move at a slightly different rate than content
  const y = useTransform(scrollY, [0, 3000], [0, -150]);

  return (
    <motion.div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        y,
        backgroundImage: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 3px,
          rgba(254, 4, 5, 0.015) 3px,
          rgba(254, 4, 5, 0.015) 4px
        )`,
        backgroundSize: "100% 4px",
      }}
    />
  );
}
