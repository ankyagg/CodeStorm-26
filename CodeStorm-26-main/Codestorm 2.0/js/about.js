/* ═══════════════════════════════════════════════
   About Page — Committee "Spotify Player"
   Tabs → Domains (albums) → Members (tracks)
   Vinyl switch · slide/blur member transitions ·
   dynamic counters · like · fake playback.
   ═══════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ─── Data ─── */

  const U = function (id) {
    return "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=600&q=80";
  };

  const COMMITTEES = [
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

  /* ─── State ─── */
  let committeeIdx = 0;
  let domainIdx = 0;
  let memberIdx = 0;
  let playing = true;
  let shuffle = false;
  let repeat = false;
  let progress = 0; // 0..1 fake playback
  let liked = {};
  let lastFrame = performance.now();

  const TRACK_SECONDS = 24;

  /* ─── DOM ─── */
  const $ = function (id) {
    return document.getElementById(id);
  };

  const els = {};

  function cacheDom() {
    els.tabs = $("committee-tabs");
    els.slider = $("tabs-slider");
    els.tabBtns = Array.prototype.slice.call(
      els.tabs.querySelectorAll(".tabs__btn")
    );
    els.counter = $("committee-counter");
    els.domains = $("domains");
    els.card = $("player-card");
    els.album = $("pc-album");
    els.index = $("pc-index");
    els.roletag = $("pc-roletag");
    els.img = $("pc-img");
    els.name = $("pc-name");
    els.role = $("pc-role");
    els.like = $("pc-like");
    els.likeIcon = els.like.querySelector("i");
    els.progressBar = $("pc-progress");
    els.progressFill = $("pc-progress-fill");
    els.timeCur = $("pc-time-current");
    els.timeTotal = $("pc-time-total");
    els.shuffle = $("pc-shuffle");
    els.prev = $("pc-prev");
    els.play = $("pc-play");
    els.playIcon = els.play.querySelector("i");
    els.next = $("pc-next");
    els.repeat = $("pc-repeat");
    els.albumPrev = $("album-prev");
    els.albumNext = $("album-next");
  }

  /* ─── Helpers ─── */
  const committee = function () {
    return COMMITTEES[committeeIdx];
  };
  const domain = function () {
    return committee().domains[domainIdx];
  };
  const member = function () {
    return domain().members[memberIdx];
  };
  const memberId = function () {
    return committee().key + "-" + domainIdx + "-" + memberIdx;
  };

  function fmt(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  /* ─── Render ─── */

  function renderTabsSlider() {
    const active = els.tabBtns[committeeIdx];
    els.slider.style.width = active.offsetWidth + "px";
    els.slider.style.transform = "translateX(" + active.offsetLeft + "px)";
    els.tabBtns.forEach(function (b, i) {
      b.classList.toggle("is-active", i === committeeIdx);
      b.setAttribute("aria-selected", i === committeeIdx ? "true" : "false");
    });
  }

  function renderDomains() {
    const c = committee();
    const multi = c.domains.length > 1;
    els.domains.classList.toggle("is-hidden", !multi);
    els.domains.innerHTML = "";
    if (!multi) return;

    c.domains.forEach(function (d, i) {
      const chip = document.createElement("button");
      chip.className = "domains__chip" + (i === domainIdx ? " is-active" : "");
      chip.type = "button";
      chip.textContent = d.name;
      chip.setAttribute("aria-pressed", i === domainIdx ? "true" : "false");
      chip.addEventListener("click", function () {
        if (i === domainIdx) return;
        switchDomain(i);
      });
      els.domains.appendChild(chip);
    });
  }

  function renderCounter() {
    const c = committee();
    if (c.domains.length > 1) {
      els.counter.innerHTML =
        domain().name +
        ' &nbsp;·&nbsp; <span class="accent">' +
        (domainIdx + 1) +
        "</span> / " +
        c.domains.length +
        " Teams";
    } else {
      els.counter.innerHTML =
        c.label +
        ' &nbsp;·&nbsp; <span class="accent">' +
        domain().members.length +
        "</span> Members";
    }
  }

  function renderCard() {
    const d = domain();
    const m = member();

    els.album.textContent = d.name;
    els.index.innerHTML =
      '<span class="accent">' + (memberIdx + 1) + "</span> / " + d.members.length;
    els.roletag.textContent = m.role;
    els.img.src = m.image;
    els.img.alt = m.name + " — " + m.role;
    els.name.textContent = m.name;
    els.role.textContent = m.role;

    const isLiked = !!liked[memberId()];
    els.like.classList.toggle("is-liked", isLiked);
    els.likeIcon.className = isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart";
    els.like.setAttribute("aria-pressed", isLiked ? "true" : "false");

    els.timeTotal.textContent = fmt(TRACK_SECONDS);
  }

  function renderPlay() {
    els.playIcon.className = playing ? "fa-solid fa-pause" : "fa-solid fa-play";
    els.play.setAttribute("aria-label", playing ? "Pause" : "Play");
  }

  function renderAll() {
    renderTabsSlider();
    renderDomains();
    renderCounter();
    renderCard();
    renderPlay();
    els.shuffle.classList.toggle("is-on", shuffle);
    els.repeat.classList.toggle("is-on", repeat);
  }

  /* ─── Transitions ─── */

  // Member change: slide + blur + fade on the animated bits
  function transitionMember(dir, apply) {
    const cls = dir >= 0 ? "member-exit-next" : "member-exit-prev";
    els.card.classList.add(cls);
    setTimeout(function () {
      apply();
      progress = 0;
      renderCard();
      renderCounter();
      els.card.classList.remove("member-exit-next", "member-exit-prev");
    }, 300);
  }

  // Committee/domain change: vinyl rotate out, slide in
  function transitionCard(apply) {
    els.card.classList.remove("card-enter");
    els.card.classList.add("card-exit");
    setTimeout(function () {
      apply();
      progress = 0;
      playing = true;
      renderAll();
      els.card.classList.remove("card-exit");
      // restart enter animation
      void els.card.offsetWidth;
      els.card.classList.add("card-enter");
    }, 420);
  }

  /* ─── Actions ─── */

  function switchCommittee(i) {
    if (i === committeeIdx) return;
    committeeIdx = i;
    renderTabsSlider();
    transitionCard(function () {
      domainIdx = 0;
      memberIdx = 0;
    });
  }

  function switchDomain(i) {
    transitionCard(function () {
      domainIdx = i;
      memberIdx = 0;
    });
  }

  function nextMember(fromAutoplay) {
    const total = domain().members.length;
    transitionMember(1, function () {
      if (shuffle && total > 1) {
        let n;
        do {
          n = Math.floor(Math.random() * total);
        } while (n === memberIdx);
        memberIdx = n;
      } else {
        memberIdx = (memberIdx + 1) % total;
      }
    });
    if (!fromAutoplay) playing = true;
    renderPlay();
  }

  function prevMember() {
    const total = domain().members.length;
    transitionMember(-1, function () {
      memberIdx = (memberIdx - 1 + total) % total;
    });
  }

  function nextDomain(dir) {
    const total = committee().domains.length;
    if (total <= 1) return;
    transitionCard(function () {
      domainIdx = (domainIdx + dir + total) % total;
      memberIdx = 0;
    });
  }

  /* ─── Fake playback loop ─── */
  function tick(now) {
    const dt = (now - lastFrame) / 1000;
    lastFrame = now;

    if (playing) {
      progress += dt / TRACK_SECONDS;
      if (progress >= 1) {
        if (repeat) {
          progress = 0;
        } else {
          progress = 0;
          nextMember(true);
        }
      }
    }

    els.progressFill.style.width = progress * 100 + "%";
    els.timeCur.textContent = fmt(progress * TRACK_SECONDS);
    requestAnimationFrame(tick);
  }

  /* ─── Wire up ─── */

  function bind() {
    els.tabBtns.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        switchCommittee(i);
      });
    });

    els.next.addEventListener("click", function () {
      nextMember(false);
    });
    els.prev.addEventListener("click", prevMember);

    els.play.addEventListener("click", function () {
      playing = !playing;
      renderPlay();
    });

    els.shuffle.addEventListener("click", function () {
      shuffle = !shuffle;
      els.shuffle.classList.toggle("is-on", shuffle);
    });

    els.repeat.addEventListener("click", function () {
      repeat = !repeat;
      els.repeat.classList.toggle("is-on", repeat);
    });

    els.like.addEventListener("click", function () {
      const id = memberId();
      liked[id] = !liked[id];
      renderCard();
      if (liked[id]) {
        // retrigger pop
        els.like.classList.remove("is-liked");
        void els.like.offsetWidth;
        els.like.classList.add("is-liked");
      }
    });

    // scrub on progress bar
    els.progressBar.addEventListener("click", function (e) {
      const rect = els.progressBar.getBoundingClientRect();
      progress = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    });

    els.albumPrev.addEventListener("click", function () {
      nextDomain(-1);
    });
    els.albumNext.addEventListener("click", function () {
      nextDomain(1);
    });

    // keyboard navigation
    document.addEventListener("keydown", function (e) {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowRight") nextMember(false);
      else if (e.key === "ArrowLeft") prevMember();
      else if (e.key === " " && document.activeElement === document.body) {
        e.preventDefault();
        playing = !playing;
        renderPlay();
      }
    });

    window.addEventListener("resize", renderTabsSlider);
    // fonts change tab widths — re-measure once loaded
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(renderTabsSlider);
    }
  }

  /* ─── Stat counter animation ─── */
  function initStatCounters() {
    const values = document.querySelectorAll(".stat-card__value [data-count]");
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const dur = 1400;
          const start = performance.now();
          function step(now) {
            const t = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(target * eased);
            if (t < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          io.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    values.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ─── Init ─── */
  document.addEventListener("DOMContentLoaded", function () {
    cacheDom();
    bind();
    renderAll();
    initStatCounters();
    els.card.classList.add("card-enter");
    lastFrame = performance.now();
    requestAnimationFrame(tick);
  });
})();
