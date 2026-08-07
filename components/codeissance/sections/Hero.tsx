"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { CheckeredPattern, ConcentricCircles, DotGrid } from "@/components/codeissance/ui/DecorativePatterns";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pattern1Ref = useRef<HTMLDivElement>(null);
  const pattern2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
      );

      // Rotate Concentric Circles
      gsap.to(pattern1Ref.current, {
        rotation: 360,
        duration: 40,
        ease: "linear",
        repeat: -1,
      });

      // Subtle float for Dot Grid
      gsap.to(pattern2Ref.current, {
        y: -30,
        x: 20,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative z-20 overflow-visible bg-[#EBE6DF] min-h-screen flex items-center justify-center py-10 md:py-16"
    >
      {/* Figma Pattern 1: Concentric Circles (Green Highlight) */}
      <div
        ref={pattern1Ref}
        className="absolute -top-[30%] -left-[10%] w-[150vw] h-[150vw] md:w-[70vw] md:h-[70vw] opacity-90 pointer-events-none flex justify-center items-center"
      >
        <ConcentricCircles size={1200} rings={14} baseColor="#1A1A1A" altColor="#EBE6DF" highlightRing={4} highlightColor="#1DB954" />
      </div>

      {/* Figma Pattern 2: Polka Dots */}
      <div
        ref={pattern2Ref}
        className="absolute -bottom-[5%] -right-[5%] opacity-80 pointer-events-none mix-blend-multiply hidden md:block"
      >
        <DotGrid rows={8} cols={14} dotSize={28} gap={16} color="#1A1A1A" />
      </div>

      {/* Figma Pattern 3: Warped Checkered (Top Right) */}
      <div className="absolute top-[5%] -right-[5%] opacity-15 pointer-events-none mix-blend-multiply scale-150">
        <CheckeredPattern cols={10} rows={10} size={50} color1="#1A1A1A" color2="transparent" warp={true} />
      </div>

      {/* Main Hero Content */}
      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-6 flex flex-col items-center justify-center opacity-0 py-6"
      >
        {/* Powered By — Top Eyebrow Badge */}
        <div className="mb-20 md:mb-5 text-center z-20 mx-4">
          <div className="inline-flex flex-col items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-9 py-2.5 sm:py-3.5 bg-[#1A1A1A] shadow-[6px_6px_0px_0px_rgba(139,124,255,1)] hover:-translate-y-1 transition-transform border border-transparent">
            <span
              className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#F0EDEA]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Powered by
            </span>
            <div className="flex items-center gap-4 sm:gap-6">
              <img
                src="/sponsors/choice.png"
                alt="Choice TechLab"
                style={{ height: "32px", width: "auto", objectFit: "contain", borderRadius: "4px" }}
                draggable={false}
              />
              <div style={{ width: "1px", height: "20px", backgroundColor: "rgba(255,255,255,0.2)" }} />
              <img
                src="/sponsors/unstop.png"
                alt="Unstop"
                style={{ height: "32px", width: "auto", objectFit: "contain", borderRadius: "4px" }}
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Center Title Group */}
        <div className="relative w-full flex flex-col items-center justify-center">

          {/* Main Title Block — Full Width on Mobile, Snug fit on Desktop */}
          <div className="relative z-10 my-5 md:my-12 w-full sm:w-auto flex justify-center perspective-1000 -mt-4 md:mt-5">
            <div className="group relative w-full sm:w-auto flex justify-center">

              {/* Date Tag - Top Right of Banner */}
              <div className="absolute -top-6 -right-1 sm:-top-8 sm:-right-8 z-30 inline-flex items-center justify-center gap-2 px-3.5 py-1.5 sm:px-6 sm:py-3 bg-[#1A1A1A] shadow-[4px_4px_0px_0px_rgba(255,70,50,1)] sm:shadow-[6px_6px_0px_0px_rgba(255,70,50,1)] hover:-translate-y-1 transition-transform border border-transparent transform rotate-[4deg]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1DB954] animate-pulse"></span>
                <p
                  className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-[#F0EDEA]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Happening on 20 to 21st August
                </p>
              </div>

              {/* Title Banner Box */}
              <div className="relative w-full sm:w-auto bg-[#1A1A1A] border-4 border-[#1DB954] text-[#F0EDEA] px-1.5 sm:px-14 md:px-24 py-5 sm:py-12 shadow-[8px_8px_0px_0px_rgba(29,185,84,1)] sm:shadow-[12px_12px_0px_0px_rgba(29,185,84,1)] overflow-hidden transition-transform hover:-translate-y-2 hover:-translate-x-2 text-center flex justify-center items-center">
                <h1
                  className="relative z-10 text-[clamp(2.2rem,9.5vw,10rem)] sm:text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none text-center whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Codeissance
                </h1>
              </div>
            </div>
          </div>

          {/* Bold 26 Overlay */}
          <div
            className="absolute -bottom-8 md:-bottom-16 right-[2%] sm:right-[8%] md:right-[15%] pointer-events-none select-none z-20 transform rotate-[-4deg]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(6rem, 16vw, 12rem)",
              fontWeight: "900",
              color: "#FF4632",
              lineHeight: 0.8,
              WebkitTextStroke: "4px #1A1A1A",
              textShadow: "6px 6px 0px #1A1A1A"
            }}
          >
            &apos;26
          </div>
        </div>

        {/* Bottom Subtitle Tag */}
        <div className="mt-16 md:mt-24 text-center z-20 mx-4">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 sm:px-8 py-2 sm:py-4 bg-[#1A1A1A] shadow-[8px_8px_0px_0px_rgba(255,70,50,1)] hover:-translate-y-1 transition-transform border border-transparent">
            <span className="w-3 h-3 rounded-full bg-[#1DB954] animate-pulse"></span>
            <p
              className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.25em] text-[#F0EDEA]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              TSEC CodeStorm • 24-Hour Offline Hackathon
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
