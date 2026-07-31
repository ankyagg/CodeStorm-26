"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Trophy, Award, Star, Zap, Code, Flame, Globe, Brain, Building2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";

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

interface DomainWinner {
  domain: string;
  label: string;
  name: string;
  prize: string;
  photo: string;
  icon: React.ReactNode;
}

interface WinnerEntry {
  edition: string;
  team: string;
  project: string;
  track: string;
  prize: string;
  icon: React.ReactNode;
  image: string;
  domainWinners?: DomainWinner[];
  totalPrizePool?: string;
}

const winners: WinnerEntry[] = [
  {
    edition: "Codessiance 2025",
    team: "--------",
    project: "--------",
    track: "--------",
    prize: "--------",
    icon: <Award size={20} />,
    image: "/winners/uploaded-logo-1.jpg",
    domainWinners: [
      {
        domain: "Industry Domain",
        label: "Industry",
        name: "HackNova",
        prize: "₹20,000",
        photo: "/winners/industry-winner.png",
        icon: <Building2 size={18} />,
      },
      {
        domain: "Web/App Domain",
        label: "Web/App",
        name: "CTRL",
        prize: "₹20,000",
        photo: "/winners/webapp-winner.jpg",
        icon: <Globe size={18} />,
      },
      {
        domain: "AI/ML Domain",
        label: "AI/ML",
        name: "What is an Apple",
        prize: "₹20,000",
        photo: "/winners/aiml-winner.jpg",
        icon: <Brain size={18} />,
      },
    ],
    totalPrizePool: "₹60,000"
  },
  {
    edition: "Hack Sprint",
    team: "",
    project: "",
    track: "",
    prize: "",
    icon: <Zap size={20} />,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    domainWinners: [
      {
        domain: "Overall Winner",
        label: "Winner",
        name: "Winning Team",
        prize: "TBA",
        photo: "/winners/Hacksprint.png",
        icon: <Trophy size={18} />,
      }
    ]
  },
  {
    edition: "Technovation 2025",
    team: "",
    project: "",
    track: "",
    prize: "",
    icon: <Star size={20} />,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    domainWinners: [
      {
        domain: "Domain 1",
        label: "Domain 1",
        name: "TBA",
        prize: "₹XX,XXX",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
        icon: <Building2 size={18} />,
      },
      {
        domain: "Domain 2",
        label: "Domain 2",
        name: "TBA",
        prize: "₹XX,XXX",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
        icon: <Globe size={18} />,
      },
      {
        domain: "Domain 3",
        label: "Domain 3",
        name: "TBA",
        prize: "₹XX,XXX",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
        icon: <Brain size={18} />,
      }
    ],
    totalPrizePool: "₹50,000"
  },
  {
    edition: "Codessiance 2024",
    team: "",
    project: "",
    track: "",
    prize: "",
    icon: <Code size={20} />,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    domainWinners: [
      {
        domain: "Offline Mode",
        label: "Offline",
        name: "Offline Winners",
        prize: "₹25,000",
        photo: "/winners/codeissance2024-offline.png",
        icon: <Building2 size={18} />,
      },
      {
        domain: "Online Mode",
        label: "Online",
        name: "Online Winners",
        prize: "₹25,000",
        photo: "/winners/codeissance2024-online.png",
        icon: <Globe size={18} />,
      }
    ],
    totalPrizePool: "₹50,000"
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
    edition: "Codessiance 2023",
    team: "--------",
    project: "--------",
    track: "--------",
    prize: "--------",
    icon: <Zap size={20} />,
    image: "/winners/Codeissance-23.jpg"
  }
];

export default function WinnersPage() {
  const [activeModal, setActiveModal] = useState<WinnerEntry | null>(null);
  const isDash = (s: string) => /^-+$/.test(s.trim());

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <main style={{ paddingTop: "140px", paddingBottom: "100px", minHeight: "100vh" }}>
        <div className="section__container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            <motion.h1 className="heading-xl hero__title" variants={fadeUp} custom={1} style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
              <span style={{ color: "var(--color-white)" }}>HALL OF </span>
              <span className="hero__title-storm"> FAME</span>
            </motion.h1>
            <motion.p className="text-body hero__subtitle" variants={fadeUp} custom={2} style={{ margin: "0 auto" }}>
              Celebrating the teams that built extraordinary solutions under immense pressure.<br />
              These are the champions of Codestorm.
            </motion.p>
          </motion.div>

          {/* ── All Edition Cards ── */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {winners.map((winner, i) => (
              <motion.div
                key={winner.edition}
                className={`winner-card${winner.domainWinners ? ' winner-card--clickable' : ''}`}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring", bounce: 0.4 }}
                onClick={() => winner.domainWinners && setActiveModal(winner)}
              >
                {winner.image && (
                  <img src={winner.image} alt={winner.edition} className="winner-card__image" />
                )}
                <div className="winner-card__edition">
                  <Trophy size={20} />
                  {winner.edition}
                </div>

                {winner.domainWinners ? (
                  <>
                    <div className="winner-card__meta">
                      <span className="winner-card__pill">
                        <Flame size={14} /> {winner.domainWinners.length} {winner.domainWinners.length === 1 ? 'Winner' : 'Domains'}
                      </span>
                      {winner.totalPrizePool && (
                        <span className="winner-card__pill winner-card__prize">
                          Prize Pool: {winner.totalPrizePool}
                        </span>
                      )}
                    </div>
                    <p className="winner-card__view-hint">
                      <Award size={14} /> Click to view winners
                    </p>
                  </>
                ) : (
                  <>
                    {!isDash(winner.team) && (
                      <h3 className="winner-card__team">{winner.team}</h3>
                    )}
                    {!isDash(winner.project) && (
                      <p className="winner-card__project">{winner.project}</p>
                    )}
                    {(!isDash(winner.track) || !isDash(winner.prize)) && (
                      <div className="winner-card__meta">
                        {!isDash(winner.track) && (
                          <span className="winner-card__pill">
                            {winner.icon} {winner.track}
                          </span>
                        )}
                        {!isDash(winner.prize) && (
                          <span className="winner-card__pill winner-card__prize">
                            Prize: {winner.prize}
                          </span>
                        )}
                      </div>
                    )}
                    {isDash(winner.team) && (
                      <p className="winner-card__coming-soon">Details coming soon</p>
                    )}
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* ── Domain Winners Modal ── */}
      <AnimatePresence>
        {activeModal && activeModal.domainWinners && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setActiveModal(null)} aria-label="Close modal">
                <X size={20} />
              </button>

              <div className="modal-header">
                <div className="winner-card__edition" style={{ justifyContent: "center", fontSize: "1.4rem" }}>
                  <Trophy size={22} />
                  {activeModal.edition}
                </div>
                {activeModal.totalPrizePool && (
                  <div className="modal-subheading">
                    <Flame size={14} />
                    <span>{activeModal.domainWinners.length} {activeModal.domainWinners.length === 1 ? 'Winner' : 'Domains'} &bull; Total Prize Pool: {activeModal.totalPrizePool}</span>
                  </div>
                )}
              </div>

              <div className={`winners-grid ${activeModal.domainWinners.length <= 2 ? 'winners-grid--centered' : ''}`}>
                {activeModal.domainWinners.map((dw, j) => (
                  <motion.div
                    key={dw.domain}
                    className="domain-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: j * 0.1 }}
                  >
                    <span className="domain-card__pill">
                      {dw.icon} {dw.label}
                    </span>
                    <div className="domain-card__photo-wrap">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={dw.photo}
                        alt={`${dw.name} — ${dw.domain}`}
                        className="domain-card__photo"
                      />
                    </div>
                    <h3 className="domain-card__name">{dw.name}</h3>
                    <span className="domain-card__domain">{dw.domain}</span>
                    <span className="domain-card__prize">
                      <Trophy size={14} /> {dw.prize}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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