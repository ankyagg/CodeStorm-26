"use client";

import "./team.css";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Aurora from "../../components/Aurora";
import EmberParticles from "../../components/EmberParticles";
import ScanLines from "../../components/ScanLines";
import CommitteeCard from "../../components/CommitteeCard";
import type { CommitteeMember } from "../../components/CommitteeCard";

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

/* ─── Team Data ─── */
const techTeam: CommitteeMember[] = [
  { name: "Alex Mercer", role: "Team Lead", photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80" },
  { name: "Sarah Jenkins", role: "Full-Stack Developer", photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80" },
  { name: "Michael Chang", role: "Backend Engineer", photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
  { name: "Priya Patel", role: "DevOps Lead", photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80" },
  { name: "David Rodriguez", role: "Platform Engineer", photoUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80" },
];

const designTeam: CommitteeMember[] = [
  { name: "Jordan Lee", role: "Team Lead", photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80" },
  { name: "Emma Wilson", role: "UI/UX Designer", photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" },
  { name: "Marcus Johnson", role: "Visual Designer", photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" },
  { name: "Sophia Chen", role: "Motion Designer", photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80" },
];

const prTeam: CommitteeMember[] = [
  { name: "Taylor Smith", role: "Team Lead", photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80" },
  { name: "Chris Evans", role: "Social Media Manager", photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80" },
  { name: "Jessica Alba", role: "Content Writer", photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80" },
];

const opsTeam: CommitteeMember[] = [
  { name: "Morgan Davies", role: "Team Lead", photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" },
  { name: "Ryan Gosling", role: "Logistics Head", photoUrl: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=600&q=80" },
  { name: "Emma Stone", role: "Event Coordinator", photoUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80" },
];

const committees = [
  { name: "Tech Team", members: techTeam },
  { name: "Design Team", members: designTeam },
  { name: "PR & Outreach", members: prTeam },
  { name: "Operations", members: opsTeam },
];

export default function TeamPage() {
  return (
    <>
      {/* Background */}
      <div style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", zIndex: -1, pointerEvents: "none" }}>
        <Aurora
          colorStops={["#d70025", "#000000", "#b90020"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <EmberParticles />
      <ScanLines />

      {/* Navbar */}
      <nav className="navbar" id="navbar">
        <a href="/" className="navbar__logo">
          <span className="navbar__logo-icon" style={{ background: "transparent", boxShadow: "none" }}>
            <Image src="/logo.png" alt="Codestorm" width={32} height={32} style={{ borderRadius: "8px", objectFit: "contain" }} />
          </span>
          CODESTORM
        </a>
        <ul className="navbar__links">
          <li><a href="/#hackathons" className="navbar__link">Our Hackathons</a></li>
          <li><a href="/#achievements" className="navbar__link">Achievements</a></li>
          <li><a href="/team" className="navbar__link" style={{ color: "var(--color-white)" }}>Team</a></li>
          <li><a href="/winners" className="navbar__link">Hall of Fame</a></li>
          <li><a href="/practice" className="navbar__link">Practice</a></li>
        </ul>
        <a href="/" className="navbar__cta">Codeissance 2026</a>
      </nav>

      {/* Page Content */}
      <main style={{ paddingTop: "140px", paddingBottom: "100px", minHeight: "100vh" }}>
        <div className="section__container">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            <motion.span className="section__label" variants={fadeUp} custom={0}>
              The People
            </motion.span>
            <motion.h1
              className="heading-xl hero__title"
              variants={fadeUp}
              custom={1}
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
            >
              <span style={{ color: "var(--color-white)" }}>MEET THE</span>
              <span className="hero__title-storm"> TEAM</span>
            </motion.h1>
            <motion.p
              className="text-body hero__subtitle"
              variants={fadeUp}
              custom={2}
              style={{ margin: "0 auto" }}
            >
              A hackathon is only as good as the people behind it.<br />
              Meet the squads working late nights to make Codestorm a reality.
            </motion.p>
          </motion.div>

          {/* Committee Cards Grid */}
          <div className="team-grid">
            {committees.map((committee, i) => (
              <motion.div
                key={committee.name}
                className="team-grid__item"
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.12, type: "spring", bounce: 0.35 }}
              >
                <h2 className="team-grid__label">{committee.name}</h2>
                <CommitteeCard
                  members={committee.members}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
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
