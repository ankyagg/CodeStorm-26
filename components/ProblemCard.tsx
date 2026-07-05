"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, BrainCircuit, Factory } from "lucide-react";
import type { HackathonProblem } from "../data/hackathonProblems";
import { DOMAIN_COLORS } from "../data/hackathonProblems";

/* ─── Icon resolver ─── */
const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  Globe,
  BrainCircuit,
  Factory,
};

interface ProblemCardProps {
  problem: HackathonProblem;
  index: number;
  onViewDetails: (problem: HackathonProblem) => void;
}

export default function ProblemCard({ problem, index, onViewDetails }: ProblemCardProps) {
  const colors = DOMAIN_COLORS[problem.domain];
  const IconComp = ICON_MAP[problem.icon] ?? Globe;

  return (
    <motion.article
      className="pg-card"
      layout
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: -20 }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Header: icon + domain badge */}
      <div className="pg-card__header">
        <div
          className="pg-card__icon"
          style={{ background: colors.bg, color: colors.text }}
        >
          <IconComp size={20} />
        </div>
        <span
          className="pg-card__badge"
          style={{
            background: colors.bg,
            color: colors.text,
            border: `1px solid ${colors.border}`,
          }}
        >
          {problem.domain}
        </span>
      </div>

      {/* Title + teaser */}
      <h3 className="pg-card__title">{problem.title}</h3>
      <p className="pg-card__teaser">{problem.teaser}</p>

      {/* Footer */}
      <div className="pg-card__footer">
        <button
          className="pg-card__btn"
          type="button"
          onClick={() => onViewDetails(problem)}
        >
          View Details <ArrowRight size={16} />
        </button>
      </div>
    </motion.article>
  );
}
