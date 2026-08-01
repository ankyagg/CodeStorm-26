"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import {
  Trophy,
  Disc,
  Radio,
  Gift,
  ExternalLink,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CheckeredPattern,
  ConcentricCircles,
  VerticalBars,
} from "@/components/codeissance/ui/DecorativePatterns";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const prizes = [
  {
    rank: 1,
    domain: "Web & App Development",
    image: "/webPool.png",
  },
  {
    rank: 2,
    domain: "AI & Machine Learning",
    image: "/aimlPool.png",
  },
  {
    rank: 3,
    domain: "Industry Innovation",
    image: "/industryPool.png",
  },
];

export default function TopArtist() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 75%" },
        }
      );

      const items = cardsRef.current?.querySelectorAll(".prize-card");

      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="prizes"
      className="section-dark grain-overlay relative overflow-hidden py-24 md:py-36 bg-[#121212] text-white select-none"
    >
      {/* Decorative: Warped Checkered — top left */}
      <div className="absolute -top-[5%] -left-[8%] opacity-[0.04] pointer-events-none scale-125 rotate-[-8deg]">
        <CheckeredPattern
          cols={8}
          rows={12}
          size={50}
          color1="#1DB954"
          color2="transparent"
          warp
        />
      </div>

      {/* Decorative: Concentric Circles — bottom right */}
      <div className="absolute -bottom-[25%] -right-[20%] w-[50vw] h-[50vw] md:w-[35vw] md:h-[35vw] opacity-[0.04] pointer-events-none">
        <ConcentricCircles
          size={700}
          rings={10}
          baseColor="#1DB954"
          altColor="#121212"
          highlightRing={2}
          highlightColor="#1DB954"
        />
      </div>

      {/* Decorative: Vertical Bars — right edge */}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 opacity-10 pointer-events-none hidden lg:block rotate-90">
        <VerticalBars bars={4} color="#FFFFFF" className="h-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-8 max-w-4xl opacity-0">

          <h2
            className="text-4xl sm:text-6xl md:text-7xl font-black leading-[1.08] text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Prize Pool<br />

          </h2>


        </div>

        {/* Prize Pool Display — Pure Uncropped Images Only (No Modals) */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          {prizes.map((prize) => {
            return (
              <div
                key={prize.rank}
                className="prize-card group relative opacity-0"
              >
                <Image
                  src={prize.image}
                  alt={prize.domain}
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            );
          })}
        </div>

        {/* Bottom Spotify Action Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#181818] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-14 h-14 rounded-full bg-[#1DB954]/20 border border-[#1DB954]/40 flex items-center justify-center shrink-0">
              <Disc className="w-7 h-7 text-[#1DB954] animate-spin-slow" />
            </div>
            <div>
              <h4
                className="text-lg font-black text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ready to release your top track at Codeissance &apos;26?
              </h4>
              <p className="text-xs text-white/60 font-medium">
                Showcase your skills across 3 main competition categories.
              </p>
            </div>
          </div>

          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 shrink-0 px-6 py-3.5 rounded-full bg-[#1DB954] hover:bg-[#1ED760] text-black font-extrabold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <span>Register Track on Unstop</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}