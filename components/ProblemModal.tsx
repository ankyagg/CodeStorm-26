"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, BrainCircuit, Factory } from "lucide-react";
import type { HackathonProblem } from "../data/hackathonProblems";
import { DOMAIN_COLORS } from "../data/hackathonProblems";

/* ─── Icon resolver ─── */
const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  Globe,
  BrainCircuit,
  Factory,
};

interface ProblemModalProps {
  problem: HackathonProblem | null;
  onClose: () => void;
}

export default function ProblemModal({ problem, onClose }: ProblemModalProps) {
  /* ─── Escape key ─── */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!problem) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [problem, handleKeyDown]);

  if (!problem) return null;

  const colors = DOMAIN_COLORS[problem.domain];
  const IconComp = ICON_MAP[problem.icon] ?? Globe;

  return (
    <AnimatePresence>
      {problem && (
        <motion.div
          className="pg-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          key="modal-backdrop"
        >
          <motion.article
            className="pg-modal"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pg-modal-title"
          >
            {/* Close button */}
            <button
              className="pg-modal__close"
              onClick={onClose}
              aria-label="Close modal"
              type="button"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <header className="pg-modal__header">
              <div
                className="pg-modal__icon"
                style={{ background: colors.bg, color: colors.text }}
              >
                <IconComp size={24} />
              </div>
              <div>
                <h2 className="pg-modal__title" id="pg-modal-title">
                  {problem.title}
                </h2>
                <span
                  className="pg-modal__domain"
                  style={{
                    background: colors.bg,
                    color: colors.text,
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  {problem.domain}
                </span>
              </div>
            </header>

            {/* Full Statement */}
            <div className="pg-modal__divider" />
            <p className="pg-modal__section-label">Problem Statement</p>
            <p className="pg-modal__text">{problem.fullStatement}</p>

            {/* Background */}
            <div className="pg-modal__divider" />
            <p className="pg-modal__section-label">Background & Context</p>
            <p className="pg-modal__text">{problem.background}</p>

            {/* Deliverables */}
            <div className="pg-modal__divider" />
            <p className="pg-modal__section-label">Expected Deliverables</p>
            <ul className="pg-modal__list">
              {problem.deliverables.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* Evaluation Criteria (optional) */}
            {problem.evaluationCriteria && problem.evaluationCriteria.length > 0 && (
              <>
                <div className="pg-modal__divider" />
                <p className="pg-modal__section-label">Evaluation Criteria</p>
                <ul className="pg-modal__list">
                  {problem.evaluationCriteria.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
