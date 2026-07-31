"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Globe, BrainCircuit, Factory, X, HeartHandshake } from "lucide-react";
import ProblemCard from "./ProblemCard";
import { type Domain, type HackathonProblem, DOMAIN_COLORS, DOMAIN_ICONS } from "../data/hackathonProblems";
import "./DomainStack.css";

const IconMap: Record<string, React.ElementType> = {
  Globe,
  BrainCircuit,
  Factory,
  HeartHandshake,
};

interface DomainStackProps {
  domain: Domain;
  problems: HackathonProblem[];
  isExpanded: boolean;
  onExpand: () => void;
  onClose: () => void;
  onViewProblem: (problem: HackathonProblem) => void;
}

export default function DomainStack({
  domain,
  problems,
  isExpanded,
  onExpand,
  onClose,
  onViewProblem,
}: DomainStackProps) {
  const colorToken = DOMAIN_COLORS[domain] || { bg: "rgba(255,255,255,0.1)", text: "#fff", border: "rgba(255,255,255,0.2)" };
  const IconComponent = IconMap[DOMAIN_ICONS[domain]] || Globe;

  const styleVars = {
    "--ds-accent-bg": colorToken.bg,
    "--ds-accent-color": colorToken.text,
    "--ds-accent-border": colorToken.border,
  } as React.CSSProperties;

  useEffect(() => {
    if (!isExpanded) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isExpanded, onClose]);

  if (isExpanded) {
    const modalContent = (
      <>
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.7)",
            zIndex: 999998,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Flex container for perfect centering without transforms */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999999,
            pointerEvents: "none",
            padding: "1rem",
          }}
        >
          {/* motion.div: handles fade/scale animation only, no positioning */}
          <motion.div
            className="ds-overlay"
            style={{
              ...styleVars,
              maxHeight: "85vh",
              width: "min(1100px, 92vw)",
              pointerEvents: "auto",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <header className="ds-overlay-header">
              <div className="ds-overlay-title-group">
                <div className="ds-icon-wrapper" style={{ padding: "1rem" }}>
                  <IconComponent size={28} strokeWidth={2} />
                </div>
                <h3 className="ds-overlay-title">{domain}</h3>
              </div>
              <button className="ds-close-btn" onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Close domain overlay">
                <X size={24} />
              </button>
            </header>

            <div className="pg-grid" style={{ overflowY: "auto", paddingRight: "0.5rem" }}>
              {problems.length > 0 ? (
                problems.map((problem, i) => (
                  <motion.div
                    key={problem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <ProblemCard
                      problem={problem}
                      index={i}
                      onViewDetails={onViewProblem}
                    />
                  </motion.div>
                ))
              ) : (
                <p className="pg-empty">No problems found for {domain} in this year.</p>
              )}
            </div>
          </motion.div>
        </div>
      </>
    );

    return typeof document !== "undefined"
      ? createPortal(modalContent, document.body)
      : null;
  }

  return (
    <motion.div
      layoutId={`domain-stack-${domain}`}
      className="ds-deck"
      style={styleVars}
      onClick={onExpand}
    >
      <div className="ds-deck-card ds-deck-card--back2" />
      <div className="ds-deck-card ds-deck-card--back1" />
      <div className="ds-deck-card ds-deck-card--front">
        <div className="ds-icon-wrapper">
          <IconComponent size={40} strokeWidth={1.5} />
        </div>
        <h3 className="ds-title">{domain}</h3>
        <span className="ds-count">{problems.length} Problem{problems.length !== 1 ? 's' : ''}</span>
      </div>
    </motion.div>
  );
}