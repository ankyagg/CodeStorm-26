"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/codeissance/ui/accordion";
import { FAQ_ITEMS } from "@/lib/codeissance/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Recap() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );

      const cards = faqRef.current?.querySelectorAll(".faq-card");

      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: faqRef.current,
              start: "top 85%",
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
      id="faq"
      className="relative overflow-hidden bg-[#EBE6DF] py-24 md:py-32 text-[#121212] select-none"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-14 opacity-0">
          <h2
            className="text-4xl sm:text-6xl font-black text-[#121212] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Frequently Asked <span className="text-[#1DB954]">Questions</span>
          </h2>
          <p
            className="mt-3 text-base sm:text-lg text-[#555555] font-medium"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Everything you need to know about Codeissance &apos;26.
          </p>
        </div>

        {/* Clean FAQ Accordion */}
        <div ref={faqRef} className="space-y-4">
          <Accordion className="space-y-4">
            {FAQ_ITEMS.map((item, index) => {
              const num = (index + 1).toString().padStart(2, "0");

              return (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="faq-card group rounded-2xl border border-[#121212]/10 bg-white/90 shadow-sm transition-all duration-300 hover:border-[#1DB954]"
                >
                  <AccordionTrigger className="px-6 py-5 text-left no-underline hover:no-underline flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <span
                        className="text-sm font-black text-[#1DB954] tracking-widest shrink-0"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {num}
                      </span>
                      <h3
                        className="text-lg sm:text-xl font-bold text-[#121212] tracking-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.question}
                      </h3>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 pb-6 pt-1">
                    <p
                      className="text-sm sm:text-base text-[#444444] leading-relaxed font-medium pl-8 border-l-2 border-[#1DB954]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}