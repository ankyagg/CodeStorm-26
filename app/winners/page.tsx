"use client";

import { motion, type Variants } from "framer-motion";
import { Trophy, Award, Star, Zap, Code, ChevronRight } from "lucide-react";
import Image from "next/image";
import Aurora from "../../components/Aurora";
import EmberParticles from "../../components/EmberParticles";
import ScanLines from "../../components/ScanLines";

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

const winners = [
  {
    edition: "Codessiance 2023",
    team: "--------",
    project: "--------",
    track: "--------",
    prize: "--------",
    icon: <Zap size={20} />,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    edition: "Codessiance 2024",
    team: "-------",
    project: "------",
    track: "------",
    prize: "------",
    icon: <Code size={20} />,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    edition: "Technovation 2024",
    team: "--------",
    project: "--------",
    track: "--------",
    prize: "--------",
    icon: <Star size={20} />,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    edition: "Codessiance 2025",
    team: "--------",
    project: "--------",
    track: "--------",
    prize: "--------",
    icon: <Award size={20} />,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
  }
];

export default function WinnersPage() {
  return (
    <>
      {/* Aurora Background — matches home page */}
      <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
        <Aurora
          colorStops={["#d70025", "#000000", "#b90020"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <EmberParticles />
      <ScanLines />

      {/* Navbar — matches home page */}
      <nav className="navbar" id="navbar">
        <a href="/" className="navbar__logo">
          <span className="navbar__logo-icon" style={{ background: "transparent", boxShadow: "none" }}>
            <Image src="/logo.png" alt="TSEC Codestorm" width={32} height={32} style={{ borderRadius: "8px", objectFit: "contain" }} />
          </span>
          TSEC Codestorm
        </a>
        <ul className="navbar__links">
          <li><a href="/#hackathons" className="navbar__link">Our Hackathons</a></li>
          <li><a href="/about" className="navbar__link">About Us</a></li>
          <li><a href="/winners" className="navbar__link" style={{ color: "var(--color-white)" }}>Hall of Fame</a></li>
          <li><a href="/practice" className="navbar__link">Practice</a></li>
        </ul>
        <a href="/#hackathons" className="navbar__cta">Codeissance 2026</a>
      </nav>

      <main style={{ paddingTop: "140px", paddingBottom: "100px", minHeight: "100vh" }}>
        <div className="section__container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            <motion.h1 className="heading-xl hero__title" variants={fadeUp} custom={1} style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
              <span style={{ color: "var(--color-white)" }}>HALL OF</span>
              <span className="hero__title-storm"> FAME</span>
            </motion.h1>
            <motion.p className="text-body hero__subtitle" variants={fadeUp} custom={2} style={{ margin: "0 auto" }}>
              Celebrating the teams that built extraordinary solutions under immense pressure.<br />
              These are the champions of Codestorm.
            </motion.p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {winners.map((winner, i) => (
              <motion.div
                key={winner.team + winner.edition}
                className="winner-card"
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring", bounce: 0.4 }}
              >
                {winner.image && (
                  <img src={winner.image} alt="Winners" className="winner-card__image" />
                )}
                <div className="winner-card__edition">
                  <Trophy size={20} />
                  {winner.edition}
                </div>
                <h3 className="winner-card__team">{winner.team}</h3>
                <p className="winner-card__project">{winner.project}</p>

                <div className="winner-card__meta">
                  <span className="winner-card__pill">
                    {winner.icon} {winner.track}
                  </span>
                  <span className="winner-card__pill winner-card__prize">
                    Prize: {winner.prize}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__brand">
            <Image src="/logo.png" alt="Codestorm" width={20} height={20} style={{ display: "inline", marginRight: 8, verticalAlign: "middle", borderRadius: "4px" }} />
            Codestorm
          </div>
          <div className="footer__socials">
            <a href="https://www.instagram.com/tseccodestorm/?hl=en" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/codestorm-tsec/mycompany/" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="LinkedIn">
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
