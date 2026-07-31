"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProblemGrid from "../../../components/ProblemGrid";
import MobileNav from "../../../components/MobileNav";

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

export default function PracticePage() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar" id="navbar">
        <Link href="/" className="navbar__logo">
          <span className="navbar__logo-icon" style={{ background: "transparent", boxShadow: "none" }}>
            <Image src="/logo.png" alt="TSEC Codestorm" width={32} height={32} style={{ borderRadius: "8px", objectFit: "contain" }} />
          </span>
          TSEC Codestorm
        </Link>
        <ul className="navbar__links">
          <li><Link href="/#hackathons" className="navbar__link">Our Hackathons</Link></li>
          <li><Link href="/about" className="navbar__link">About Us</Link></li>
          <li><Link href="/winners" className="navbar__link">Hall of Fame</Link></li>
          <li><Link href="/practice" className="navbar__link" style={{ color: "var(--color-white)" }}>Practice</Link></li>
        </ul>
        <Link href="/codeissance" className="navbar__cta">Codeissance 2026</Link>
        <MobileNav />
      </nav>

      <main style={{ paddingTop: "140px", paddingBottom: "100px", minHeight: "100vh" }}>
        <div className="section__container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            <motion.h1 className="heading-xl hero__title" variants={fadeUp} custom={1} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              <span style={{ color: "var(--color-white)" }}>THE</span>
              <span className="hero__title-storm"> ARENA</span>
            </motion.h1>
            <motion.p className="text-body hero__subtitle" variants={fadeUp} custom={2} style={{ margin: "0 auto" }}>
              Dive into our archives. Explore past hackathon problem statements<br />
              and sharpen your skills with practice questions.
            </motion.p>
          </motion.div>

          <div style={{ marginBottom: "5rem" }}>
            <ProblemGrid />
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