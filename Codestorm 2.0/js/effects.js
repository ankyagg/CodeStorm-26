/* ═══════════════════════════════════════════════
   Atmosphere FX — EmberParticles, red mouse
   spotlight, scroll reveals, char reveal.
   Ported from the CodeStorm homepage components.
   ═══════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ─── Ember Particles ─── */
  function initEmbers() {
    const canvas = document.getElementById("ember-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H;
    let embers = [];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const COUNT = Math.min(70, Math.floor(window.innerWidth / 18));

    function spawn(initial) {
      return {
        x: Math.random() * W,
        y: initial ? Math.random() * H : H + 10,
        r: Math.random() * 1.8 + 0.5,
        vy: -(Math.random() * 0.45 + 0.15),
        vx: (Math.random() - 0.5) * 0.25,
        life: Math.random(),
        flicker: Math.random() * Math.PI * 2,
        hue: Math.random() > 0.85 ? 20 : 350, // mostly red, occasional orange
      };
    }

    for (let i = 0; i < COUNT; i++) embers.push(spawn(true));

    function frame(t) {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.x += e.vx + Math.sin(t / 1400 + e.flicker) * 0.15;
        e.y += e.vy;
        if (e.y < -12 || e.x < -12 || e.x > W + 12) embers[i] = spawn(false);

        const a = 0.25 + 0.35 * Math.abs(Math.sin(t / 600 + e.flicker));
        const grad = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.r * 4);
        grad.addColorStop(0, "hsla(" + e.hue + ", 100%, 58%, " + a + ")");
        grad.addColorStop(1, "hsla(" + e.hue + ", 100%, 40%, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ─── Interactive Red Spotlight ─── */
  function initSpotlight() {
    const el = document.getElementById("spotlight");
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    let mx = window.innerWidth / 2,
      my = window.innerHeight / 3,
      cx = mx,
      cy = my;

    window.addEventListener("mousemove", function (e) {
      mx = e.clientX;
      my = e.clientY;
    });

    function frame() {
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;
      el.style.transform = "translate(" + (cx - 400) + "px, " + (cy - 400) + "px)";
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ─── Scroll Reveals (Framer Motion whileInView equivalent) ─── */
  function initReveals() {
    const items = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ─── Character Reveal (blur + fade up, staggered) ─── */
  function initCharReveal() {
    document.querySelectorAll("[data-chars]").forEach(function (el) {
      const baseDelay = parseFloat(el.dataset.delay || "0");
      const nodes = [];

      el.childNodes.forEach(function (node) {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent.split("").forEach(function (ch) {
            nodes.push({ ch: ch, cls: "" });
          });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const cls = node.className;
          node.textContent.split("").forEach(function (ch) {
            nodes.push({ ch: ch, cls: cls });
          });
        }
      });

      el.textContent = "";
      nodes.forEach(function (n, i) {
        const span = document.createElement("span");
        span.className = "char-reveal" + (n.cls ? " " + n.cls : "");
        span.textContent = n.ch === " " ? "\u00A0" : n.ch;
        span.style.transitionDelay = baseDelay + i * 0.045 + "s";
        el.appendChild(span);
      });

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          el.classList.add("chars-in");
        });
      });
    });
  }

  /* ─── Navbar scroll state ─── */
  function initNavbar() {
    const nav = document.getElementById("navbar");
    if (!nav) return;
    function onScroll() {
      nav.classList.toggle("navbar--scrolled", window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initEmbers();
    initSpotlight();
    initReveals();
    initCharReveal();
    initNavbar();
  });
})();
