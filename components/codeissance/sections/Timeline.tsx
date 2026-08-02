"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { TIMELINE_EVENTS } from "@/lib/codeissance/constants";
import { ConcentricCircles, VerticalBars, DotGrid } from "@/components/codeissance/ui/DecorativePatterns";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ACCENT_COLORS = [
  "#1DB954", "#8B7CFF", "#FF4632", "#1DB954",
  "#8B7CFF", "#FF4632", "#1DB954", "#8B7CFF",
  "#FF4632", "#1DB954",
];

const EVENT_ICONS: Record<string, string> = {
  reporting: "📝",
  inauguration: "🎤",
  "hack-start": "🚀",
  lunch: "🍕",
  mentoring: "💡",
  dinner: "🌙",
  "judging-internal": "⚖️",
  shortlist: "📋",
  "judging-final": "🏆",
  closing: "🎉",
};

const TOTAL = TIMELINE_EVENTS.length;

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const stRef = useRef<globalThis.ScrollTrigger | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const activeIndexRef = useRef(0);
  activeIndexRef.current = activeIndex;

  const resetInactivityTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    const st = stRef.current;
    if (!st || !st.isActive) return;

    if (st.progress > 0 && st.progress < 0.95 && activeIndexRef.current < TOTAL - 1) {
      timerRef.current = setTimeout(() => {
        const currentSt = stRef.current;
        if (!currentSt || !currentSt.isActive) return;
        const nextIdx = activeIndexRef.current + 1;
        if (nextIdx < TOTAL) {
          const targetProgress = (nextIdx + 0.1) / TOTAL;
          const targetY = currentSt.start + (currentSt.end - currentSt.start) * targetProgress;
          window.scrollTo({ top: targetY, behavior: "smooth" });
        }
      }, 2000);
    }
  };

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
    );
  }, [activeIndex]);

  useEffect(() => {
    const handleUserScroll = () => {
      resetInactivityTimer();
    };
    window.addEventListener("scroll", handleUserScroll, { passive: true });
    window.addEventListener("wheel", handleUserScroll, { passive: true });
    window.addEventListener("touchmove", handleUserScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleUserScroll);
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchmove", handleUserScroll);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top", // Pin exactly at the top of the viewport
        end: `+=${TOTAL * (isMobile ? 650 : 500)}`, // Distance per card so single swipe moves 1 card
        pin: true,
        pinSpacing: true,
        anticipatePin: 1, // Eliminates jump/slide before pinning on touch devices
        scrub: 0.2,
        snap: {
          snapTo: 1 / (TOTAL - 1),
          duration: { min: 0.15, max: 0.35 },
          delay: 0.02,
          ease: "power1.inOut",
        },
        onUpdate: (self) => {
          const idx = Math.min(TOTAL - 1, Math.floor(self.progress * TOTAL));
          setActiveIndex(idx);
          resetInactivityTimer();
        },
        onToggle: (self) => {
          if (!self.isActive && timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
          }
        },
      });

      stRef.current = st;
    }, sectionRef);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      ctx.revert();
    };
  }, []);

  const event = TIMELINE_EVENTS[activeIndex];
  const accent = ACCENT_COLORS[activeIndex];
  const icon = EVENT_ICONS[event.id] ?? "⚡";

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="relative section-light grain-overlay"
      style={{ backgroundColor: "#EBE6DF" }}
    >
      {/* Decorative: Concentric Circles bottom-right */}
      <div className="absolute -bottom-[20%] -right-[15%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] opacity-[0.07] pointer-events-none">
        <ConcentricCircles size={800} rings={12} baseColor="#1DB954" altColor="#EBE6DF" highlightRing={3} highlightColor="#8B7CFF" />
      </div>

      {/* Decorative: Vertical Bars top-left */}
      <div className="absolute top-12 left-8 opacity-15 pointer-events-none hidden md:block">
        <VerticalBars bars={5} color="#1A1A1A" className="h-28" />
      </div>

      {/* Decorative: Dot Grid bottom-left */}
      <div className="absolute bottom-8 left-12 opacity-10 pointer-events-none hidden lg:block">
        <DotGrid rows={3} cols={5} dotSize={16} gap={10} color="#1A1A1A" />
      </div>

      {/* Pinned Stage Container */}
      <div
        ref={pinTargetRef}
        className="w-full h-screen flex flex-col justify-between pt-6 pb-8 px-6 md:px-12 relative"
      >

        {/* Top Header */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <h2
              className="text-2xl sm:text-5xl md:text-6xl font-normal leading-tight text-black tracking-tight"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The <strong className="font-black text-black">TimeLine</strong> of 2026
            </h2>
          </div>


        </div>

        {/* Center Event Card Stage */}
        <div className="relative z-10 max-w-2xl mx-auto w-full my-auto flex items-center justify-center">
          <div
            ref={cardRef}
            key={activeIndex}
            className="w-[90%] sm:w-[85%] max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative"
            style={{
              border: "2px solid #000",
            }}
          >
            {/* Background Images (pre-rendered for smooth scroll) */}
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Image
                key={num}
                src={`/timelinecards/card${num}.png`}
                alt={`Timeline Background ${num}`}
                fill
                priority={num === 1 || num === 2}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`object-cover transition-opacity duration-300 ${((activeIndex % 6) + 1) === num ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}

            {/* Inner Content Overlay */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
              {/* Top Row: Icon + Day Badge */}
              <div className="flex items-start justify-end">

              </div>

              {/* Event Time (Positioned in the colored stripe) */}
              <div className="absolute bottom-[34%] left-0 w-full px-4 md:px-8 text-center">
                <div
                  className="text-5xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "#EAE5DE",
                    WebkitTextStroke: "1.5px black",
                  }}
                >
                  {event.time}
                </div>
              </div>

              {/* Event Label (Positioned in the black bottom area) */}
              <div className="absolute bottom-[16%] translate-y-[50%] left-0 w-full px-4 text-white text-center">
                <div
                  className={`font-bold uppercase tracking-wide ${event.fontSize || "text-4xl sm:text-xl md:text-5xl"}`}
                  style={{ fontFamily: event.font || "var(--font-display)" }}
                >
                  {event.label}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="relative z-10 max-w-2xl mx-auto w-full">
          <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-black transition-all duration-300"
              style={{ width: `${((activeIndex + 1) / TOTAL) * 100}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-xs font-bold text-black/50 uppercase tracking-widest">
            <span>{event.label}</span>
            <span>Scroll for Next Event ({activeIndex + 1}/{TOTAL}) ↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
