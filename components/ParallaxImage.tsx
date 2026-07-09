"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // The image height is 130%, so we can move it from -15% to 15% 
  // without showing any blank background behind it.
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden", position: "relative" }}>
      <motion.img 
        src={src} 
        alt={alt} 
        style={{ 
          y, 
          width: "100%", 
          height: "130%", 
          objectFit: "cover", 
          position: "absolute", 
          top: "-15%", 
          left: 0 
        }} 
      />
    </div>
  );
}
