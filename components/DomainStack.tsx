"use client";

import { useEffect } from "react";
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

  // Use escape key to close
  useEffect(() => {
    if (!isExpanded) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded, onClose]);

  if (isExpanded) {
    return (
      <motion.div
        layoutId={`domain-stack-${domain}`}
        className="ds-overlay"
        style={styleVars}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
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
        
        <div className="pg-grid">
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
    );
  }

  // Collapsed Stack View
  return (
    <motion.div
      layoutId={`domain-stack-${domain}`}
      className="ds-deck"
      style={styleVars}
      onClick={onExpand}
    >
      {/* Back dummy cards */}
      <div className="ds-deck-card ds-deck-card--back2" />
      <div className="ds-deck-card ds-deck-card--back1" />
      
      {/* Front cover card */}
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
