"use client";
import TiltedCard from "../../components/TiltedCard";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Aurora from "../../components/Aurora";
import EmberParticles from "../../components/EmberParticles";
import ScanLines from "../../components/ScanLines";
import SplashCursor from "../../components/SplashCursor";
import "./about.css";

/* ─── Committee Data ─── */
const U = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`;

interface Member {
  name: string;
  role: string;
  image: string;
}

interface Domain {
  name: string;
  members: Member[];
}

interface Committee {
  key: string;
  label: string;
  domains: Domain[];
}

const COMMITTEES: Committee[] = [
  {
    key: "head-teachers",
    label: "Head Teachers",
    domains: [
      {
        name: "Head Teachers",
        members: [
          { name: "Morgan Davies", role: "Head Teacher", image: U("photo-1560250097-0b93528c311a") },
          { name: "Elena Ruiz", role: "Head Teacher", image: U("photo-1573496359142-b8d87734a5a2") },
        ],
      },
    ],
  },
  {
    key: "senior-committee",
    label: "Senior Committee",
    domains: [
      {
        name: "Tech Team",
        members: [
          { name: "Alex Mercer", role: "Team Lead", image: U("photo-1506794778202-cad84cf45f1d") },
          { name: "Sarah Jenkins", role: "Team Member", image: U("photo-1494790108377-be9c29b29330") },
          { name: "Michael Chang", role: "Team Member", image: U("photo-1507003211169-0a1dd7228f2d") },
          { name: "Priya Patel", role: "Team Member", image: U("photo-1438761681033-6461ffad8d80") },
          { name: "David Rodriguez", role: "Team Member", image: U("photo-1492562080023-ab3db95bfbce") },
        ],
      },
      {
        name: "Design Team",
        members: [
          { name: "Jordan Lee", role: "Team Lead", image: U("photo-1472099645785-5658abf4ff4e") },
          { name: "Emma Wilson", role: "Team Member", image: U("photo-1534528741775-53994a69daeb") },
          { name: "Marcus Johnson", role: "Team Member", image: U("photo-1500648767791-00dcc994a43e") },
          { name: "Sophia Chen", role: "Team Member", image: U("photo-1517841905240-472988babdf9") },
        ],
      },
      {
        name: "Social Media Management",
        members: [
          { name: "Taylor Smith", role: "Team Lead", image: U("photo-1544005313-94ddf0286df2") },
          { name: "Chris Evans", role: "Team Member", image: U("photo-1519085360753-af0119f7cbe7") },
          { name: "Jessica Alba", role: "Team Member", image: U("photo-1524504388940-b1c1722653e1") },
        ],
      },
      {
        name: "Logistics",
        members: [
          { name: "Ryan Gosling", role: "Team Lead", image: U("photo-1503023345310-bd7c1de61c7d") },
          { name: "Emma Stone", role: "Team Member", image: U("photo-1529626455594-4ff0802cfb7e") },
          { name: "Dev Sharma", role: "Team Member", image: U("photo-1568602471122-7832951cc4c5") },
        ],
      },
      {
        name: "Marketing",
        members: [
          { name: "Nina Kapoor", role: "Team Lead", image: U("photo-1580489944761-15a19d654956") },
          { name: "Leo Fernandes", role: "Team Member", image: U("photo-1520813792240-56fc4a3765a7") },
          { name: "Aisha Khan", role: "Team Member", image: U("photo-1544723795-3fb6469f5b39") },
        ],
      },
      {
        name: "PR",
        members: [
          { name: "Rohan Mehta", role: "Team Lead", image: U("photo-1519345182560-3f2917c472ef") },
          { name: "Zara Ali", role: "Team Member", image: U("photo-1531123897727-8f129e1688ce") },
        ],
      },
      {
        name: "Editorial",
        members: [
          { name: "Ishaan Verma", role: "Team Lead", image: U("photo-1508341591423-4347099e1f19") },
          { name: "Maya Iyer", role: "Team Member", image: U("photo-1487412720507-e7ab37603c6f") },
          { name: "Kabir Nair", role: "Team Member", image: U("photo-1463453091185-61582044d556") },
        ],
      },
    ],
  },
  {
    key: "junior-committee",
    label: "Junior Committee",
    domains: [
      {
        name: "Tech Team",
        members: [
          { name: "Arjun Rao", role: "Team Lead", image: U("photo-1500048993953-d23a436266cf") },
          { name: "Sneha Kulkarni", role: "Team Member", image: U("photo-1487412720507-e7ab37603c6f") },
          { name: "Vivaan Joshi", role: "Team Member", image: U("photo-1519244703995-f4e0f30006d5") },
        ],
      },
      {
        name: "Design Team",
        members: [
          { name: "Riya Desai", role: "Team Lead", image: U("photo-1489424731084-a5d8b219a5bb") },
          { name: "Aditya Singh", role: "Team Member", image: U("photo-1506277886164-e25aa3f4ef7f") },
        ],
      },
      {
        name: "Social Media Management",
        members: [
          { name: "Kiara Shah", role: "Team Lead", image: U("photo-1531746020798-e6953c6e8e04") },
          { name: "Ansh Gupta", role: "Team Member", image: U("photo-1492446845049-9c50cc313f00") },
        ],
      },
      {
        name: "Logistics",
        members: [
          { name: "Om Patil", role: "Team Lead", image: U("photo-1504257432389-52343af06ae3") },
          { name: "Tanvi More", role: "Team Member", image: U("photo-1499996860823-5214fcc65f8f") },
        ],
      },
      {
        name: "Marketing",
        members: [
          { name: "Ira Bhatt", role: "Team Lead", image: U("photo-1517365830460-955ce3ccd263") },
          { name: "Yash Thakur", role: "Team Member", image: U("photo-1521119989659-a83eee488004") },
        ],
      },
      {
        name: "PR",
        members: [
          { name: "Advait Kelkar", role: "Team Lead", image: U("photo-1522075469751-3a6694fb2f61") },
          { name: "Naina Chopra", role: "Team Member", image: U("photo-1509967419530-da38b4704bc6") },
        ],
      },
      {
        name: "Editorial",
        members: [
          { name: "Reyansh Jain", role: "Team Lead", image: U("photo-1502823403499-6ccfcf4fb453") },
          { name: "Anika Reddy", role: "Team Member", image: U("photo-1494959764136-6be9eb3c261e") },
        ],
      },
    ],
  },
];

const TRACK_SECONDS = 24;

function fmt(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m + ":" + (s < 10 ? "0" : "") + s;
}

/* ─── Stat counter hook ─── */
function useCountUp(target: number, inView: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf: number;
    function step(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return value;
}

function StatCard({ target, label, plus, delay }: { target: number; label: string; plus?: boolean; delay: number }) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const count = useCountUp(target, inView);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article className="stat-card" ref={ref} data-reveal style={{ "--reveal-delay": `${delay}s` } as React.CSSProperties}>
      <div className="stat-card__inner">
        <span className="stat-card__value">
          {count}{plus && <span className="stat-plus">+</span>}
        </span>
        <span className="stat-card__label">{label}</span>
      </div>
    </article>
  );
}
function useCardTilt(rotateAmplitude = 4, scaleOnHover = 1.01) {
  const ref = useRef<HTMLElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const rotateX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotateY = (offsetX / (rect.width / 2)) * rotateAmplitude;
    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scaleOnHover})`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(900px) rotateX(0) rotateY(0) scale(1)",
      transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
    });
  };

  return { ref, style, handleMouseMove, handleMouseLeave };
}
/* ═══════════════════════════════════════════════ */
/*  About Page Component                          */
/* ═══════════════════════════════════════════════ */

export default function AboutPage() {
  // Player state
  const [committeeIdx, setCommitteeIdx] = useState(0);
  const [domainIdx, setDomainIdx] = useState(0);
  const [memberIdx, setMemberIdx] = useState(0);
  const cardTilt = useCardTilt(8, 1.02);
  const [playing, setPlaying] = useState(true);
  const [shuffleOn, setShuffleOn] = useState(false);
  const [repeatOn, setRepeatOn] = useState(false);
  const [progress, setProgress] = useState(0);
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [cardAnim, setCardAnim] = useState<"" | "card-exit" | "card-enter">("");
  const [memberAnim, setMemberAnim] = useState<"" | "member-exit-next" | "member-exit-prev">("");
  const [likePopping, setLikePopping] = useState(false);

  // Refs
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const sliderRef = useRef<HTMLSpanElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const lastFrameRef = useRef(performance.now());
  const playingRef = useRef(playing);
  const progressRef2 = useRef(progress);
  const repeatRef = useRef(repeatOn);

  // Pending state for card transitions
  const pendingRef = useRef<{ committeeIdx: number; domainIdx: number; memberIdx: number } | null>(null);

  // Keep refs in sync with state
  useEffect(() => { playingRef.current = playing; }, [playing]);
  useEffect(() => { progressRef2.current = progress; }, [progress]);
  useEffect(() => { repeatRef.current = repeatOn; }, [repeatOn]);

  const committee = COMMITTEES[committeeIdx];
  const domain = committee.domains[domainIdx];
  const member = domain.members[memberIdx];
  const memberId = `${committee.key}-${domainIdx}-${memberIdx}`;

  // ─── Tab slider positioning ───
  const updateSlider = useCallback(() => {
    const btn = tabBtnRefs.current[committeeIdx];
    const slider = sliderRef.current;
    if (btn && slider) {
      slider.style.width = btn.offsetWidth + "px";
      slider.style.transform = "translateX(" + btn.offsetLeft + "px)";
    }
  }, [committeeIdx]);

  useEffect(() => {
    updateSlider();
    window.addEventListener("resize", updateSlider);
    if (document.fonts?.ready) document.fonts.ready.then(updateSlider);
    return () => window.removeEventListener("resize", updateSlider);
  }, [updateSlider]);

  // ─── Spotlight follow ───
  useEffect(() => {
    const el = spotlightRef.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    let mx = window.innerWidth / 2, my = window.innerHeight / 3;
    let cx = mx, cy = my;
    let raf: number;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove);

    function frame() {
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;
      el!.style.transform = `translate(${cx - 400}px, ${cy - 400}px)`;
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  // ─── Scroll reveals ───
  useEffect(() => {
    const items = document.querySelectorAll(".about-page [data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ─── Fake playback loop ───
  const nextMemberRef = useRef<(fromAutoplay: boolean) => void>(() => { });

  useEffect(() => {
    let raf: number;
    function tick(now: number) {
      const dt = (now - lastFrameRef.current) / 1000;
      lastFrameRef.current = now;

      if (playingRef.current) {
        const next = progressRef2.current + dt / TRACK_SECONDS;
        if (next >= 1) {
          if (repeatRef.current) {
            setProgress(0);
            progressRef2.current = 0;
          } else {
            setProgress(0);
            progressRef2.current = 0;
            nextMemberRef.current(true);
          }
        } else {
          setProgress(next);
          progressRef2.current = next;
        }
      }

      raf = requestAnimationFrame(tick);
    }
    lastFrameRef.current = performance.now();
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // ─── Actions ───
  const transitionMember = useCallback((dir: number, apply: () => void) => {
    const cls = dir >= 0 ? "member-exit-next" : "member-exit-prev";
    setMemberAnim(cls as "member-exit-next" | "member-exit-prev");
    setTimeout(() => {
      apply();
      setProgress(0);
      progressRef2.current = 0;
      setMemberAnim("");
    }, 300);
  }, []);

  const transitionCard = useCallback((newCommittee: number, newDomain: number) => {
    setCardAnim("card-exit");
    pendingRef.current = { committeeIdx: newCommittee, domainIdx: newDomain, memberIdx: 0 };
    setTimeout(() => {
      const p = pendingRef.current;
      if (p) {
        setCommitteeIdx(p.committeeIdx);
        setDomainIdx(p.domainIdx);
        setMemberIdx(p.memberIdx);
        pendingRef.current = null;
      }
      setProgress(0);
      progressRef2.current = 0;
      setPlaying(true);
      setCardAnim("card-enter");
      setTimeout(() => setCardAnim(""), 600);
    }, 420);
  }, []);

  const nextMember = useCallback((fromAutoplay: boolean) => {
    const total = domain.members.length;
    transitionMember(1, () => {
      setMemberIdx(prev => {
        if (shuffleOn && total > 1) {
          let n: number;
          do { n = Math.floor(Math.random() * total); } while (n === prev);
          return n;
        }
        return (prev + 1) % total;
      });
    });
    if (!fromAutoplay) setPlaying(true);
  }, [domain.members.length, shuffleOn, transitionMember]);

  // Keep ref in sync
  useEffect(() => { nextMemberRef.current = nextMember; }, [nextMember]);

  const prevMember = useCallback(() => {
    const total = domain.members.length;
    transitionMember(-1, () => {
      setMemberIdx(prev => (prev - 1 + total) % total);
    });
  }, [domain.members.length, transitionMember]);

  const nextDomain = useCallback((dir: number) => {
    const total = committee.domains.length;
    if (total <= 1) return;
    const newDomain = (domainIdx + dir + total) % total;
    transitionCard(committeeIdx, newDomain);
  }, [committee.domains.length, domainIdx, committeeIdx, transitionCard]);

  const switchCommittee = useCallback((i: number) => {
    if (i === committeeIdx) return;
    transitionCard(i, 0);
  }, [committeeIdx, transitionCard]);

  // ─── Keyboard navigation ───
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight") nextMember(false);
      else if (e.key === "ArrowLeft") prevMember();
      else if (e.key === " " && document.activeElement === document.body) {
        e.preventDefault();
        setPlaying(p => !p);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [nextMember, prevMember]);

  // ─── Like toggle ───
  const toggleLike = () => {
    const isNowLiked = !liked[memberId];
    setLiked(prev => ({ ...prev, [memberId]: isNowLiked }));
    if (isNowLiked) {
      setLikePopping(false);
      requestAnimationFrame(() => requestAnimationFrame(() => setLikePopping(true)));
    } else {
      setLikePopping(false);
    }
  };

  // Reset like pop on member change
  useEffect(() => {
    setLikePopping(false);
  }, [memberIdx, domainIdx, committeeIdx]);

  // ─── Progress scrub ───
  const handleProgressClick = (e: React.MouseEvent) => {
    const rect = progressRef.current?.getBoundingClientRect();
    if (!rect) return;
    const newP = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    setProgress(newP);
    progressRef2.current = newP;
  };



  const isLiked = !!liked[memberId];

  return (
    <div className="about-page">
      {/* Background Effects */}
      <SplashCursor
        DENSITY_DISSIPATION={5}
        CURL={5}
        COLOR_UPDATE_SPEED={14}
        COLOR="#ffffff"
      />
      <div style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", zIndex: -3, pointerEvents: "none" }}>
        <Aurora colorStops={["#d60028", "#000000", "#98001b"]} blend={0.5} amplitude={1.0} speed={0.5} />
      </div>
      <div ref={spotlightRef} className="about-spotlight" aria-hidden="true" />
      <EmberParticles />
      <ScanLines />

      {/* ═══ Navbar (reused from homepage) ═══ */}
      <nav className="navbar" id="navbar" aria-label="Main navigation">
        <a href="/" className="navbar__logo">
          <span className="navbar__logo-icon" style={{ background: "transparent", boxShadow: "none" }}>
            <Image src="/logo.png" alt="TSEC Codestorm" width={32} height={32} style={{ borderRadius: "8px", objectFit: "contain" }} />
          </span>
          TSEC Codestorm
        </a>
        <ul className="navbar__links">
          <li><a href="/#hackathons" className="navbar__link">Our Hackathons</a></li>
          <li><a href="/about" className="navbar__link" style={{ color: "var(--color-white)" }}>About Us</a></li>
          <li><a href="/winners" className="navbar__link">Hall of Fame</a></li>
          <li><a href="/practice" className="navbar__link">Practice</a></li>
        </ul>
        <a href="/#hackathons" className="navbar__cta">Codeissance 2026</a>
      </nav>

      <main>
        {/* ═══ Hero ═══ */}
        <section className="about-hero" id="about-hero">
          <span className="about-hero__watermark" aria-hidden="true">CODESTORM</span>

          <div className="about-hero__content">
            <span className="ab-section__label" data-reveal>The Story</span>

            <div className="about-hero__banner" data-reveal style={{ "--reveal-delay": "0.3s" } as React.CSSProperties}>
              <img src="/codestorm-banner.png" alt="CODESTORM" className="about-hero__banner-img" />
            </div>

            <p className="ab-text-body about-hero__subtitle" data-reveal style={{ "--reveal-delay": "1.4s" } as React.CSSProperties}>
              TSEC CodeStorm stands out as a unique platform to help develop coding and presentation skills.
              Their mantra: &ldquo;Opportunities don&rsquo;t happen, you create them.&rdquo;
              They organize workshops and hackathons that propel students toward a glorious tech career.
            </p>
          </div>

          <i className="fa-solid fa-chevron-down about-hero__scroll" aria-hidden="true" />
        </section>

        {/* ═══ Statistics ═══ */}
        <section className="about-stats" id="stats-section" aria-label="CodeStorm statistics">
          <div className="ab-section__container">
            <div className="stats__grid">
              <StatCard target={10} label="Events Hosted" plus delay={0} />
              <StatCard target={100} label="Teams Registered" plus delay={0.12} />
              <StatCard target={20} label="Teams Selected" delay={0.24} />
              <StatCard target={3} label="Domains" plus delay={0.36} />
            </div>
          </div>
        </section>

        {/* ═══ Team ═══ */}
        <section className="about-team" id="team-section">
          <div className="ab-section__container">
            <header className="team__header">
              <span className="ab-section__label" data-reveal>The People</span>
              <h2 className="ab-heading-xl" data-reveal style={{ "--reveal-delay": "0.1s", fontSize: "clamp(2rem, 5vw, 3.4rem)" } as React.CSSProperties}>
                MEET THE <span style={{ color: "var(--ab-color-red)", textShadow: "0 0 40px var(--ab-color-red-glow)" }}>PEOPLE</span>
              </h2>
              <p className="ab-text-body" data-reveal style={{ "--reveal-delay": "0.2s", marginTop: "1rem" } as React.CSSProperties}>
                The people behind every successful hackathon.
              </p>
            </header>

            {/* Committee pill selector */}
            <div data-reveal style={{ "--reveal-delay": "0.25s" } as React.CSSProperties}>
              <div className="tabs" ref={tabsRef} role="tablist" aria-label="Committee selector">
                <span className="tabs__slider" ref={sliderRef} aria-hidden="true" />
                {COMMITTEES.map((c, i) => (
                  <button
                    key={c.key}
                    className={`tabs__btn${i === committeeIdx ? " is-active" : ""}`}
                    role="tab"
                    aria-selected={i === committeeIdx}
                    type="button"
                    ref={el => { tabBtnRefs.current[i] = el; }}
                    onClick={() => switchCommittee(i)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>



            {/* Domain chips */}
            <nav className={`domains${committee.domains.length <= 1 ? " is-hidden" : ""}`} aria-label="Committee domains">
              {committee.domains.length > 1 && committee.domains.map((d, i) => (
                <button
                  key={d.name}
                  className={`domains__chip${i === domainIdx ? " is-active" : ""}`}
                  type="button"
                  aria-pressed={i === domainIdx}
                  onClick={() => {
                    if (i === domainIdx) return;
                    transitionCard(committeeIdx, i);
                  }}
                >
                  {d.name}
                </button>
              ))}
            </nav>

            {/* Player stage */}
            <div className="player-stage" data-reveal style={{ "--reveal-delay": "0.3s" } as React.CSSProperties}>
              <button
                className={`stage-arrow${committee.domains.length <= 1 ? " is-hidden" : ""}`}
                type="button"
                aria-label="Previous team"
                onClick={() => nextDomain(-1)}
              >
                <i className="fa-solid fa-angles-left" aria-hidden="true" />
              </button>

              {/* Spotify-inspired player card */}
              <article
                ref={cardTilt.ref as React.RefObject<HTMLElement>}
                className={`player-card ${cardAnim} ${memberAnim}`}
                style={cardTilt.style}
                onMouseMove={cardTilt.handleMouseMove}
                onMouseLeave={cardTilt.handleMouseLeave}
              >
                <header className="player-card__head">
                  <div>
                    <p className="player-card__album member-anim">{domain.name}</p>
                    <p className="player-card__index member-anim">
                      <span className="accent">{memberIdx + 1}</span> / {domain.members.length}
                    </p>
                  </div>
                  <p className="player-card__roletag member-anim">{member.role}</p>
                </header>

                <div className="player-card__art">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="player-card__img member-anim"
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    loading="eager"
                  />
                </div>

                <div className="player-card__meta">
                  <div className="member-anim">
                    <h3 className="player-card__name">{member.name}</h3>
                    <p className="player-card__role">{member.role}</p>
                  </div>
                  <button
                    className={`player-card__like${isLiked ? " is-liked" : ""}${likePopping ? " is-liked" : ""}`}
                    type="button"
                    aria-label="Like member"
                    aria-pressed={isLiked}
                    onClick={toggleLike}
                  >
                    <i className={isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"} aria-hidden="true" />
                  </button>
                </div>

                <div
                  className="player-card__progress"
                  ref={progressRef}
                  role="progressbar"
                  aria-label="Member spotlight progress"
                  onClick={handleProgressClick}
                >
                  <div className="player-card__progress-fill" style={{ width: `${progress * 100}%` }} />
                </div>
                <div className="player-card__times">
                  <span>{fmt(progress * TRACK_SECONDS)}</span>
                  <span>{fmt(TRACK_SECONDS)}</span>
                </div>

                <div className="player-card__controls">
                  <button
                    className={`pc-btn${shuffleOn ? " is-on" : ""}`}
                    type="button"
                    aria-label="Shuffle"
                    onClick={() => setShuffleOn(s => !s)}
                  >
                    <i className="fa-solid fa-shuffle" aria-hidden="true" />
                  </button>
                  <button className="pc-btn pc-btn--skip" type="button" aria-label="Previous member" onClick={prevMember}>
                    <i className="fa-solid fa-backward-step" aria-hidden="true" />
                  </button>
                  <button
                    className="pc-btn--play"
                    type="button"
                    aria-label={playing ? "Pause" : "Play"}
                    onClick={() => setPlaying(p => !p)}
                  >
                    <i className={playing ? "fa-solid fa-pause" : "fa-solid fa-play"} aria-hidden="true" />
                  </button>
                  <button className="pc-btn pc-btn--skip" type="button" aria-label="Next member" onClick={() => nextMember(false)}>
                    <i className="fa-solid fa-forward-step" aria-hidden="true" />
                  </button>
                  <button
                    className={`pc-btn${repeatOn ? " is-on" : ""}`}
                    type="button"
                    aria-label="Repeat"
                    onClick={() => setRepeatOn(r => !r)}
                  >
                    <i className="fa-solid fa-repeat" aria-hidden="true" />
                  </button>
                </div>
              </article>

              <button
                className={`stage-arrow${committee.domains.length <= 1 ? " is-hidden" : ""}`}
                type="button"
                aria-label="Next team"
                onClick={() => nextDomain(1)}
              >
                <i className="fa-solid fa-angles-right" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ═══ Footer ═══ */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__brand">
            <Image src="/logo.png" alt="Codestorm" width={20} height={20} style={{ display: "inline", marginRight: 8, verticalAlign: "middle", borderRadius: "4px" }} />
            CODESTORM
          </div>
          <ul className="footer__links">
            <li><a href="/#hackathons" className="footer__link">Hackathons</a></li>
            <li><a href="/about" className="footer__link">About</a></li>
            <li><a href="/#achievements" className="footer__link">Achievements</a></li>
          </ul>
          <div className="footer__socials">
            <a href="https://www.instagram.com/tseccodestorm/?hl=en" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Instagram">
              <i className="fa-brands fa-instagram" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/company/codestorm-tsec/" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/tseccodestorm/" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Facebook">
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
