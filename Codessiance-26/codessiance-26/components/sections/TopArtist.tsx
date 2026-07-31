"use client";

import { useRef, useEffect } from "react";
import { Play, Music2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const prizes = [
  {
    rank: 1,
    label: "Web / App Dev",
    domain: "Web & App Development",
    amount: "₹20,000",
    gradient: "linear-gradient(135deg, #1DB954 0%, #0A5C2E 100%)",
    accent: "#1DB954",
    track: "01",
  },
  {
    rank: 2,
    label: "AI / ML",
    domain: "Artificial Intelligence & Machine Learning",
    amount: "₹20,000",
    gradient: "linear-gradient(135deg, #A374FF 0%, #4A2B8C 100%)",
    accent: "#A374FF",
    track: "02",
  },
  {
    rank: 3,
    label: "Industry",
    domain: "Industry Innovation",
    amount: "₹20,000",
    gradient: "linear-gradient(135deg, #FF4B4B 0%, #8C1F1F 100%)",
    accent: "#FF4B4B",
    track: "03",
  },
];

export default function TopArtist() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);

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

      const bars = barsRef.current?.querySelectorAll(".eq-bar");
      if (bars) {
        bars.forEach((bar, i) => {
          gsap.to(bar, {
            scaleY: 0.3 + Math.random() * 0.7,
            duration: 0.4 + Math.random() * 0.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.08,
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="prizes"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Ambient glow — top left green */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(29,185,84,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Ambient glow — bottom right purple */}
      <div
        className="absolute -bottom-[15%] -right-[10%] w-[45vw] h-[45vw] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(163,116,255,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Faint vinyl grooves — decorative circles */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-[15%] w-[500px] h-[500px] pointer-events-none opacity-[0.04] hidden lg:block">
        <div className="w-full h-full rounded-full border border-white" />
        <div className="absolute inset-[40px] rounded-full border border-white" />
        <div className="absolute inset-[80px] rounded-full border border-white" />
        <div className="absolute inset-[120px] rounded-full border border-white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-20 max-w-3xl opacity-0">
          <div className="flex items-center gap-2 mb-6">
            <div ref={barsRef} className="flex items-end gap-[3px] h-4">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="eq-bar w-[3px] rounded-full origin-bottom"
                  style={{ height: "100%", backgroundColor: "#1DB954" }}
                />
              ))}
            </div>
            <span
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: "#1DB954" }}
            >
              Now Playing · Prize Pool
            </span>
          </div>

          <h2
            className="text-3xl sm:text-6xl md:text-7xl font-normal leading-[1.05] text-white tracking-tight"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Codeissance &apos;26:
            <strong className="font-black text-white block mt-2">
              2026&apos;s Global Hackathon Categories
            </strong>
          </h2>

          <div className="mt-8 flex items-center gap-3">
            <div
              className="flex items-center gap-2 px-5 py-2.5 rounded-full"
              style={{ backgroundColor: "#1DB954" }}
            >
              <Music2 className="w-4 h-4 text-black" />
              <span className="text-sm font-black text-black">
                ₹60,000+ Total Pool
              </span>
            </div>
            <span className="text-sm text-white/40 font-medium">
              3 categories · Equal cash prizes
            </span>
          </div>
        </div>

        {/* Prize Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {prizes.map((prize) => (
            <div
              key={prize.rank}
              className="prize-card group relative flex flex-col justify-between rounded-xl p-5 opacity-0 cursor-pointer transition-colors duration-300"
              style={{ backgroundColor: "#181818" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "#282828";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "#181818";
              }}
            >
              {/* Album-art style block */}
              <div
                className="relative w-full aspect-square rounded-lg mb-5 overflow-hidden shadow-2xl"
                style={{ background: prize.gradient }}
              >
                <span
                  className="absolute top-4 left-4 text-6xl font-black opacity-25 select-none"
                  style={{ fontFamily: "var(--font-display)", color: "#000" }}
                >
                  {prize.track}
                </span>

                {/* Play button — slides + fades in on hover, Spotify signature */}
                <button
                  aria-label={`View ${prize.domain} prize details`}
                  className="absolute bottom-3 right-3 w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  style={{ backgroundColor: "#1DB954" }}
                >
                  <Play
                    className="w-5 h-5 text-black ml-0.5"
                    fill="black"
                  />
                </button>
              </div>

              <div>
                <span
                  className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: `${prize.accent}1A`,
                    color: prize.accent,
                  }}
                >
                  {prize.label}
                </span>

                <h3
                  className="text-xl font-black text-white mt-3 mb-1 leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {prize.domain}
                </h3>
                <p className="text-sm text-white/50 font-medium">
                  Hackathon track
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-white/40">
                  Cash Prize
                </span>
                <span
                  className="text-2xl font-black"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: prize.accent,
                  }}
                >
                  {prize.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}