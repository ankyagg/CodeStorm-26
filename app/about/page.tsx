"use client";
import TiltedCard from "../../components/TiltedCard";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
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
          { name: "Manav Sonawane", role: "Technical SCOM Head", image: "/manav-sonawane.jpg" },
          { name: "Aniket Walanj", role: "Technical SCOM", image: "/aniket-walanj.jpg" },
          { name: "Ankit Vishwakarma", role: "Technical SCOM", image: "/ankit-vishwakarma.jpg" },
          { name: "Akshata Pandit", role: "Technical SCOM", image: "/akshata-pandit.jpg" },
        ],
      },
      {
        name: "Design Team",
        members: [
          { name: "Vansh Gaur", role: "Design SCOM", image: "/VanshGaur_SCOM.jpg" },
          { name: "Shreya Yeole", role: "Design SCOM", image: "ShreyaYeole_SCOM.jpg" },
          { name: "Priyanka Patil", role: "Design SCOM", image: "PriyankaPatil_SCOM.jpg" },
        ],
      },
      {
        name: "Social Media Management",
        members: [
          { name: "Aryan Pathare", role: "SMM SCOM Head", image: "/aryan-pathare.jpg" },
        ],
      },
      {
        name: "Logistics",
        members: [
          { name: "Dhruv Hemdev", role: "Logistics SCOM Head", image: "/dhruv-hemdev.jpg" },
        ],
      },
      {
        name: "Marketing",
        members: [
          { name: "Mansi Parande", role: "Marketing SCOM", image: "/mansi-parande.jpg" },
          { name: "Deepesh Jaisingh", role: "Marketing SCOM", image: "/deepesh-jaisingh.jpg" },
        ],
      },
      {
        name: "PR",
        members: [
          { name: "Yash Chinchawade", role: "PR SCOM Head", image: "/yash-chinchawade.jpg" },
        ],
      },
      {
        name: "Editorial",
        members: [
          { name: "Saarthak Patil", role: "Editorial SCOM Head", image: "saarthak-patil.jpg" },
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
          { name: "Aditya Haswani", role: "Technical JCOM", image: "AdityaHaswani_JCOM.jpg" },
          { name: "Sanskar Jadhav", role: "Technical JCOM", image: "SanskarJadhav_JCOM.jpg" },
        ],
      },
      {
        name: "Design Team",
        members: [
          { name: "Khushnuma Vimadalal", role: "Design JCOM", image: "KhushnumaVimadalal_JCOM.jpg" },
          { name: "Piyush Tehlani", role: "Design JCOM", image: "PiyushTehlani_JCOM.jpg" },
        ],
      },
      {
        name: "Social Media Management",
        members: [
          { name: "Dixit Bind", role: "SMM JCOM", image: "dixit-bind.jpg" },
          { name: "Parv Jain", role: "SMM JCOM", image: "/parv-jain.jpg" }
        ],
      },
      {
        name: "Logistics",
        members: [
          { name: "Rishabh Jain", role: "Logistics JCOM", image: "rishabh-jain.jpg" },
        ],
      },
      {
        name: "Marketing",
        members: [
          { name: "Vardaan Grover", role: "Marketing JCOM", image: "/vardaan-grover.jpg" },
          { name: "Dhruv Pareek", role: "Marketing JCOM", image: "/dhruv-pareek.jpg" }
        ],
      },
      {
        name: "PR",
        members: [
          { name: "Arfiya Malkani", role: "PR JCOM", image: "arfiya-malkani.jpg" },
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

  const nextDomain = useCallback((dir: number) => {
    const total = committee.domains.length;
    if (total <= 1) return;
    const newDomain = (domainIdx + dir + total) % total;
    transitionCard(committeeIdx, newDomain);
  }, [committee.domains.length, domainIdx, committeeIdx, transitionCard]);

  const nextMember = useCallback((fromAutoplay: boolean) => {
    const total = domain.members.length;
    
    if (!shuffleOn && memberIdx >= total - 1) {
      nextDomain(1);
      return;
    }

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
  }, [domain.members.length, memberIdx, shuffleOn, transitionMember, nextDomain]);

  // Keep ref in sync
  useEffect(() => { nextMemberRef.current = nextMember; }, [nextMember]);

  const prevMember = useCallback(() => {
    const total = domain.members.length;
    
    if (memberIdx === 0) {
      nextDomain(-1);
      return;
    }

    transitionMember(-1, () => {
      setMemberIdx(prev => (prev - 1 + total) % total);
    });
  }, [domain.members.length, memberIdx, transitionMember, nextDomain]);

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
      {/* Background Effects — Aurora/EmberParticles/ScanLines now render globally via layout.tsx */}
      <div ref={spotlightRef} className="about-spotlight" aria-hidden="true" />

      {/* ═══ Navbar (reused from homepage) ═══ */}
      <nav className="navbar" id="navbar" aria-label="Main navigation">
        <Link href="/" className="navbar__logo">
          <span className="navbar__logo-icon" style={{ background: "transparent", boxShadow: "none" }}>
            <Image src="/logo.png" alt="TSEC Codestorm" width={32} height={32} style={{ borderRadius: "8px", objectFit: "contain" }} />
          </span>
          TSEC Codestorm
        </Link>
        <ul className="navbar__links">
          <li><Link href="/#hackathons" className="navbar__link">Our Hackathons</Link></li>
          <li><Link href="/about" className="navbar__link" style={{ color: "var(--color-white)" }}>About Us</Link></li>
          <li><Link href="/winners" className="navbar__link">Hall of Fame</Link></li>
          <li><Link href="/practice" className="navbar__link">Practice</Link></li>
        </ul>
        <Link href="/#hackathons" className="navbar__cta">Codeissance 2026</Link>
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
                    style={
                      member.image === "/aryan-pathare.jpg" ? { objectPosition: "center 25%" } :
                      member.image === "PriyankaPatil_SCOM.jpg" ? { objectPosition: "center 15%" } :
                      member.image === "KhushnumaVimadalal_JCOM.jpg" ? { objectPosition: "center 80%" } :
                      undefined
                    }
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
            <li><Link href="/#hackathons" className="footer__link">Hackathons</Link></li>
            <li><Link href="/about" className="footer__link">About</Link></li>
            <li><Link href="/#achievements" className="footer__link">Achievements</Link></li>
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