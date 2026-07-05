"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TiltedCard from "./TiltedCard";
import "./Committee.css";

/* ─── Types ─── */
export interface CommitteeMember {
  name: string;
  role: string;
  photoUrl: string;
}

interface CommitteeCardProps {
  members: CommitteeMember[];
  divisionTitle?: string;
}

/* ─── Component ─── */
export default function CommitteeCard({ members }: CommitteeCardProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  if (!members || members.length === 0) return null;

  const member = members[index];

  const goNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % members.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  const progressPct = ((index + 1) / members.length) * 100;

  return (
    <div className="cc-card">
      {/* Counter */}
      <div className="cc-counter">
        <span className="cc-counter-current">{index + 1}</span>
        {" / "}
        {members.length}
      </div>

      {/* Photo */}
      <div className="cc-photo-wrapper">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", ease: "easeInOut", duration: 0.25 }}
            className="cc-photo-motion"
          >
            <TiltedCard
              imageSrc={member.photoUrl}
              altText={member.name}
              containerWidth="100%"
              containerHeight="100%"
              imageWidth="100%"
              imageHeight="100%"
              rotateAmplitude={10}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Name + Role */}
      <div className="cc-info">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="cc-name">{member.name}</h3>
            <p className="cc-role">{member.role}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative divider / progress bar */}
      <div className="cc-divider">
        <div className="cc-divider-fill" style={{ width: `${progressPct}%` }} />
        <div className="cc-divider-dot" style={{ left: `${progressPct}%` }} />
      </div>

      {/* Prev / Next buttons */}
      <div className="cc-controls">
        <button onClick={goPrev} className="cc-nav-btn" aria-label="Previous member">
          <ChevronLeft size={26} strokeWidth={2.5} />
        </button>
        <button onClick={goNext} className="cc-nav-btn" aria-label="Next member">
          <ChevronRight size={26} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
