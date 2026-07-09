"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProblemModal from "./ProblemModal";
import DomainStack from "./DomainStack";
import {
  hackathonProblems,
  FILTER_OPTIONS,
  YEAR_OPTIONS,
  type HackathonProblem,
  type Domain,
  type Year,
} from "../data/hackathonProblems";
import "./ProblemGrid.css";

export default function ProblemGrid() {
  const [activeYear, setActiveYear] = useState<Year>(2025);
  const [activeFilter, setActiveFilter] = useState<Domain | "All">("All");
  const [expandedDomain, setExpandedDomain] = useState<Domain | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<HackathonProblem | null>(null);

  /* ─── Year Tab Slider ─── */
  const yearBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const yearSliderRef = useRef<HTMLSpanElement>(null);
  const activeYearIndex = YEAR_OPTIONS.indexOf(activeYear);

  const updateYearSlider = useCallback(() => {
    const btn = yearBtnRefs.current[activeYearIndex];
    const slider = yearSliderRef.current;
    if (btn && slider) {
      slider.style.width = btn.offsetWidth + "px";
      slider.style.transform = "translateX(" + btn.offsetLeft + "px)";
    }
  }, [activeYearIndex]);

  /* ─── Domain Tab Slider ─── */
  const tabBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const sliderRef = useRef<HTMLSpanElement>(null);
  const activeIndex = FILTER_OPTIONS.indexOf(activeFilter);

  const updateDomainSlider = useCallback(() => {
    const btn = tabBtnRefs.current[activeIndex];
    const slider = sliderRef.current;
    if (btn && slider) {
      slider.style.width = btn.offsetWidth + "px";
      slider.style.transform = "translateX(" + btn.offsetLeft + "px)";
    }
  }, [activeIndex]);

  useEffect(() => {
    updateYearSlider();
    updateDomainSlider();
    const handleResize = () => {
      updateYearSlider();
      updateDomainSlider();
    };
    window.addEventListener("resize", handleResize);
    if (document.fonts?.ready) {
      document.fonts.ready.then(handleResize);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [updateYearSlider, updateDomainSlider]);

  /* ─── Data Filtering & Grouping ─── */
  const yearProblems = hackathonProblems.filter((p) => p.year === activeYear);

  // The domains to render. If "All", render all domains present in the selected year.
  // Otherwise, render only the active filter (if it exists for that year).
  const domainsToRender: Domain[] =
    activeFilter === "All"
      ? Array.from(new Set(yearProblems.map((p) => p.domain)))
      : [activeFilter];

  return (
    <section className="pg-section" id="past-problems">

      {/* Year Filter Tabs */}
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <div className="pg-tabs" role="tablist" aria-label="Year filter">
          <span
            className="pg-tabs__slider"
            ref={yearSliderRef}
            aria-hidden="true"
            style={{ transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), width 0.4s cubic-bezier(0.22,1,0.36,1)" }}
          />
          {YEAR_OPTIONS.map((option, i) => (
            <button
              key={option}
              className={`pg-tabs__btn${activeYear === option ? " is-active" : ""}`}
              role="tab"
              aria-selected={activeYear === option}
              type="button"
              ref={(el) => {
                yearBtnRefs.current[i] = el;
              }}
              onClick={() => {
                setActiveYear(option);
                setExpandedDomain(null); // close on year switch
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Domain Filter Tabs */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div className="pg-tabs" role="tablist" aria-label="Domain filter">
          <span
            className="pg-tabs__slider"
            ref={sliderRef}
            aria-hidden="true"
            style={{ transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), width 0.4s cubic-bezier(0.22,1,0.36,1)" }}
          />
          {FILTER_OPTIONS.map((option, i) => (
            <button
              key={option}
              className={`pg-tabs__btn${activeFilter === option ? " is-active" : ""}`}
              role="tab"
              aria-selected={activeFilter === option}
              type="button"
              ref={(el) => {
                tabBtnRefs.current[i] = el;
              }}
              onClick={() => {
                setActiveFilter(option);
                setExpandedDomain(null); // close on filter switch
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Domain Groups (Decks container) */}
      <div className="pg-decks-container">
        <AnimatePresence>
          {domainsToRender.map((domain) => {
            const domainProblems = yearProblems.filter((p) => p.domain === domain);
            
            return (
              <DomainStack
                key={`${activeYear}-${domain}`}
                domain={domain}
                problems={domainProblems}
                isExpanded={expandedDomain === domain}
                onExpand={() => setExpandedDomain(domain)}
                onClose={() => setExpandedDomain(null)}
                onViewProblem={setSelectedProblem}
              />
            );
          })}
        </AnimatePresence>
        
        {/* Empty State if absolutely nothing matches */}
        {yearProblems.length === 0 && (
           <p className="pg-empty" style={{ textAlign: 'center', marginTop: '2rem', width: '100%' }}>
             No problems found for {activeYear}.
           </p>
        )}
      </div>

      {/* Detail Modal */}
      <ProblemModal
        problem={selectedProblem}
        onClose={() => setSelectedProblem(null)}
      />
    </section>
  );
}
