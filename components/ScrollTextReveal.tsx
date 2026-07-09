"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function ScrollTextReveal({ text, className }: { text: string, className?: string }) {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.5"]
  });

  const words = text.split(" ");

  return (
    <p ref={container} className={className} style={{ display: "flex", flexWrap: "wrap", columnGap: "0.25em", margin: 0 }}>
      {words.map((word, i) => {
        // Calculate the relative position of this word (0 to 1)
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        // Map the scroll progress to opacity. 
        // Before 'start', opacity is 0.15. After 'end', it's 1.
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
        
        return (
          <motion.span key={i} style={{ opacity, display: "inline-block" }}>
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}
