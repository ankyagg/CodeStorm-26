"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "./codeissance.css";

/* ─── Framer variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function CodeissancePage() {
  return (
    <div className="ci-page">
      {/* ─── Ambient glow orbs ─── */}
      <div className="ci-bg" aria-hidden="true">
        <motion.div
          className="ci-orb ci-orb--green"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="ci-orb ci-orb--pink"
          animate={{
            x: [0, -30, 15, 0],
            y: [0, 25, -35, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="ci-orb ci-orb--orange"
          animate={{
            x: [0, 20, -25, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.92, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Noise grain overlay */}
        <div className="ci-grain" />
      </div>

      {/* ─── Minimal nav ─── */}
      <nav className="ci-nav" aria-label="Codeissance navigation">
        <Link href="/" className="ci-nav__logo">
          <Image
            src="/logo.png"
            alt="TSEC Codestorm"
            width={32}
            height={32}
            style={{ borderRadius: "8px", objectFit: "contain" }}
          />
          <span className="ci-nav__wordmark">Codeissance 2026</span>
        </Link>
      </nav>

      {/* ─── Hero ─── */}
      <main className="ci-hero">
        <motion.div
          className="ci-hero__content"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Eyebrow */}
          <motion.span className="ci-eyebrow" variants={fadeUp} custom={0}>
            TSEC CODESTORM
          </motion.span>

          {/* Headline */}
          <motion.h1 className="ci-headline" variants={fadeUp} custom={1}>
            <span className="ci-headline__code">Codeissance</span>
            <br />
            <span className="ci-headline__year">2026</span>
          </motion.h1>

          {/* Coming soon */}
          <motion.p className="ci-coming" variants={fadeUp} custom={2}>
            Coming soon
          </motion.p>

          {/* Teaser line */}
          <motion.p className="ci-teaser" variants={fadeUp} custom={3}>
            this year&apos;s wrapped hits different
          </motion.p>

          {/* Pill badge */}
          <motion.div className="ci-pill" variants={fadeUp} custom={4}>
            <i className="fa-solid fa-compact-disc ci-pill__icon" aria-hidden="true" />
            <span>your 2026 is loading</span>
          </motion.div>
        </motion.div>
      </main>

      {/* ─── Footer (same as main site) ─── */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__brand">
            <Image
              src="/logo.png"
              alt="Codestorm"
              width={20}
              height={20}
              style={{
                display: "inline",
                marginRight: 8,
                verticalAlign: "middle",
                borderRadius: "4px",
              }}
            />
            CODESTORM
          </div>
          <ul className="footer__links">
            <li>
              <Link href="/#hackathons" className="footer__link">
                Hackathons
              </Link>
            </li>
            <li>
              <Link href="/about" className="footer__link">
                About
              </Link>
            </li>
            <li>
              <Link href="/#achievements" className="footer__link">
                Achievements
              </Link>
            </li>
          </ul>
          <div className="footer__socials">
            <a
              href="https://www.instagram.com/tseccodestorm/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/company/codestorm-tsec/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/tseccodestorm/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f" aria-hidden="true" />
            </a>
          </div>
          <div className="footer__copy">
            &copy; {new Date().getFullYear()} TSEC Codestorm. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
