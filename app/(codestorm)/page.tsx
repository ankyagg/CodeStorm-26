"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { Calendar, Users, Award, Star, ChevronRight, ChevronDown } from "lucide-react";

import Vortex from "../../components/Vortex";
import ParallaxImage from "../../components/ParallaxImage";
import TeamSection from "../../components/TeamSection";
import MobileNav from "../../components/MobileNav";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};
const tickerItems = [
  "Codeissance 2026 — Coming Soon",
  "1000+ Developers & Counting",
  "50+ Colleges. One Stage.",
  "Real Problems. Real Solutions.",
  "Built by students, for students",
  "TSEC's Flagship Hackathon",
];

const hackathons = [
  {
    title: "Codeissance 2023",
    tagline: "Where It All Began",
    date: "March 2023",
    participants: "500+",
    duration: "24 Hours",
    description:
      "Codeissance 2023 was a 24-hour hackathon organised by TSEC CodeStorm on 4th–5th October 2023. It brought together students to solve real-world challenges through innovation, collaboration, and technology. Participants worked in teams to design and build impactful solutions within a limited time, promoting creativity, problem-solving, and teamwork. The event provided a platform for aspiring developers to learn, compete, and connect with the tech community.",
    highlights: [
      "",
      "Mentored by industry experts",
    ],
    winner: "----",
    runnerUp: "----",
    image: "/Codeissance23.jpeg"
  },
  {
    title: "Codeissance 2024",
    tagline: "The Evolution",
    date: "September 2024",
    participants: "1100+",
    duration: "24 Hours",
    description:
      "Codeissance 2024 was a 24-hour hybrid hackathon organised by TSEC CodeStorm on 30th September and 1st October 2024. Participants from across different colleges collaborated to build innovative solutions in Web/App Development, AI/ML, and Social Causes. The event encouraged creativity, teamwork, and problem-solving while giving students an opportunity to showcase their technical skills on both online and offline platforms",
    highlights: [
      "54,000 Prize Pool",
      "1100+ Registrations",
    ],
    winner: "----",
    runnerUp: "----",
    image: "/Codeissance24.jpeg"
  },
  {
    title: "Technovation 2025",
    tagline: "The Innovation",
    date: "April 2025",
    participants: "500+",
    duration: "8 Hours",
    description:
      "Technovation 2025 was a two-day Final Year Project Expo organised by TSEC CodeStorm on 3rd and 4th April 2025. It featured 73 project teams from multiple engineering branches showcasing innovative and practical solutions. The event promoted technical knowledge, teamwork, creativity, and real-world problem-solving through expert evaluation rounds.",
    highlights: [
      "73+ Projects",
      "286+ Participants",
    ],
    image: "/technovation2025.jpg"
  },
  {
    title: "Codeissance 2025",
    tagline: "The Spectacle",
    date: "September 2025",
    participants: "1600+",
    duration: "24 Hours",
    description:
      "Codeissance 2025 was a 24-hour offline hackathon organised by TSEC CodeStorm on 26th–27th September 2025. The event brought together students to build innovative solutions across Web/App Development, AI/ML, and Industry-Relevant Problem Statements, with a strong focus on Agentic AI and real-world problem solving. It encouraged creativity, teamwork, technical excellence, and sustainable innovation through mentorship and expert evaluation.",
    highlights: [
      "₹60,000 Prize Pool",
      "1600+ Registrations",
    ],
    image: "/Codeissance2025.jpeg"
  }
];

const achievements = [
  {
    icon: <Users size={28} />,
    stat: "1000+",
    label: "Developers",
    desc: "Real people. Real late nights. Real breakthroughs.",
  },
  {
    icon: <Award size={28} />,
    stat: "----",
    label: "Opportunities",
    desc: "Doors opened for winning teams — internships & beyond",
  },
  {
    icon: <Star size={28} />,
    stat: "50+",
    label: "Colleges",
    desc: "From across Maharashtra and beyond — all under one roof",
  },
  {
    icon: <Calendar size={28} />,
    stat: "---",
    label: "Hours of Hacking",
    desc: "Sleepless nights, cold coffee, and code that just works",
  },
];

const HackathonDesc = ({ description }: { description: string }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <style>{`
        .mobile-clamp-text {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 0.5rem !important;
        }
        .mobile-read-more {
          display: inline-block;
          color: var(--color-red);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          margin-bottom: 1.5rem;
          text-align: left;
        }
        .mobile-read-more:hover {
          text-decoration: underline;
        }
        @media (min-width: 769px) {
          .mobile-clamp-text {
            display: block !important;
            -webkit-line-clamp: unset !important;
            -webkit-box-orient: unset !important;
            overflow: visible !important;
            margin-bottom: 1.5rem !important;
          }
          .mobile-read-more {
            display: none !important;
          }
        }
      `}</style>
      <p className={`hackathon-card__desc ${!expanded ? 'mobile-clamp-text' : ''}`}>
        {description}
      </p>
      {!expanded && (
        <button 
          className="mobile-read-more" 
          onClick={() => setExpanded(true)}
        >
          Read more
        </button>
      )}
    </>
  );
};

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yOrb1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yOrb2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <>
      {/* Aurora, EmberParticles, ScanLines are rendered globally via BackgroundEffects in layout.tsx */}

      {/* Navbar */}
      <nav className="navbar" id="navbar">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-icon" style={{ background: "transparent", boxShadow: "none" }}>
            <Image src="/logo.png" alt="TSEC Codestorm" width={32} height={32} style={{ borderRadius: "8px", objectFit: "contain" }} />
          </span>
          TSEC Codestorm
        </a>
        <ul className="navbar__links">
          <li><a href="/#hackathons" className="navbar__link">Our Hackathons</a></li>
          <li><a href="/about" className="navbar__link">About Us</a></li>
          <li><a href="/winners" className="navbar__link">Hall of Fame</a></li>
          <li><a href="/practice" className="navbar__link">Practice</a></li>
        </ul>
        <a href="/codeissance" className="navbar__cta"> Codeissance 2026</a>
        <MobileNav />
      </nav>

      <section className="hero" id="hero" ref={heroRef} style={{ overflow: "hidden", position: "relative" }}>
        {/* Vortex tornado — sits inside the hero only. Because the hero has
            overflow:hidden and its own opaque background, this masks the
            page-wide Aurora within the hero bounds without touching Aurora
            anywhere else on the page. */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Vortex
            background="#000000"
            topRadius={380}
            waistRadius={53}
            waistPosition={50}
            bottomRadius={1150}
            twist={3}
            zoom={75}
            speed={10}
            direction="right"
            dots
            dotOptions={{ color: "#ff3333", count: 3000, size: 15 }}
            comets
            cometOptions={{ color: "#F9731A", count: 5 }}
            lineOptions={{ color: "#ff4444", count: 120 }}
            repel={false}
          />
        </div>

        <div className="hero__grain" style={{ position: "relative", zIndex: 1 }} />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          style={{ position: "relative", zIndex: 2, y: yText }}
        >

          <motion.h1 className="heading-xl hero__title codestorm-title" variants={fadeUp} custom={1}>
            <span className="c1">C</span><span className="c2">O</span><span className="c3">D</span><span className="c4">E</span><span className="c5">S</span><span className="c6">T</span><span className="c7">O</span><span className="c8">R</span><span className="c9">M</span>
          </motion.h1>

          <motion.p className="text-body hero__subtitle" variants={fadeUp} custom={2}>
            We didn&apos;t set out to build the biggest hackathon.<br />
            We just wanted to build something{" "}
            <span className="hero__inline-highlight">worth showing up for.</span>
            <br />Turns out, a lot of people agreed.
          </motion.p>



        </motion.div>


      </section>

      {/* ═══════════════ TICKER MARQUEE ═══════════════ */}
      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">{item}</span>
          ))}
        </div>
      </div>

      {/* ═══════════════ HACKATHONS TIMELINE ═══════════════ */}
      <section className="section" id="hackathons">
        <div className="section__container">
          <motion.div
            className="section__header section__header--left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span className="section__label">Our Hackathons</span>
            <h2 className="heading-lg section__title">
              The <span className="text-red">Storm</span>,<br />year by year.
            </h2>
            <p className="text-body section__description">
              One campus. One idea. Three editions later — we&apos;re still going.
            </p>
          </motion.div>

          <div className="timeline">
            {hackathons.map((hack, i) => (
              <motion.div
                key={hack.title}
                className="timeline__item"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
              >
                <div className="timeline__marker" />
                <div className={`hackathon-layout ${i % 2 !== 0 ? 'hackathon-layout--reverse' : ''}`}>
                  {hack.image && (
                    <ParallaxImage src={hack.image} alt={hack.title} className="hackathon-image" />
                  )}
                  <div className="hackathon-card">
                    <div className="hackathon-card__header">
                      <span className="hackathon-card__edition">{hack.title}</span>
                      <span className="hackathon-card__tagline">{hack.tagline}</span>
                    </div>

                    <div className="hackathon-card__meta">
                      <span className="hackathon-card__meta-item">
                        <Calendar size={14} /> {hack.date}
                      </span>
                      <span className="hackathon-card__meta-item">
                        ⏱ {hack.duration}
                      </span>
                      <span className="hackathon-card__meta-item">
                        <Users size={14} /> {hack.participants}
                      </span>
                    </div>

                    <HackathonDesc description={hack.description} />

                    <div className="hackathon-card__highlights">
                      {hack.highlights.map((h, i) => (
                        <span key={i} className="hackathon-card__highlight">
                          <ChevronRight size={12} /> {h}
                        </span>
                      ))}
                    </div>

                    <div className="hackathon-card__stats-row">
                      <div className="hackathon-card__stat-pill">
                        <strong>{hack.duration}</strong>
                      </div>
                      <div className="hackathon-card__stat-pill">
                        <strong>{hack.participants}</strong> Registerations
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote block — feels human */}
          <motion.blockquote
            className="participant-quote"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <span className="participant-quote__mark">&ldquo;</span>
            <p>I came for the prize money. I stayed because I actually built something I was proud of for the first time.</p>
            <cite>— Anonymous participant, Codeissance 2023</cite>
          </motion.blockquote>
        </div>
      </section>



      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__brand">
            <Image src="/logo.png" alt="Codestorm" width={20} height={20} style={{ display: "inline", marginRight: 8, verticalAlign: "middle", borderRadius: "4px" }} />
            CODESTORM
          </div>
          <ul className="footer__links">
            <li><a href="#hackathons" className="footer__link">Hackathons</a></li>
            <li><a href="#achievements" className="footer__link">Achievements</a></li>
          </ul>
          <div className="footer__socials">
            <a href="https://www.instagram.com/tseccodestorm/?hl=en" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/tsec-codestorm/" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://www.facebook.com/tseccodestorm/" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
          <div className="footer__copy">
            &copy; {new Date().getFullYear()} Codestorm. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}