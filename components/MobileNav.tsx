"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/#hackathons", label: "Our Hackathons" },
  { href: "/about", label: "About Us" },
  { href: "/winners", label: "Hall of Fame" },
  { href: "/practice", label: "Practice" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button — visible only on mobile (≤768px) */}
      <button
        className="mobile-nav__hamburger"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
      >
        <Menu size={22} />
      </button>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="mobile-nav__panel"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="mobile-nav__close"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={24} />
              </button>

              {/* Logo area */}
              <div className="mobile-nav__brand">
                <Image
                  src="/logo.png"
                  alt="TSEC Codestorm"
                  width={36}
                  height={36}
                  style={{ borderRadius: "8px", objectFit: "contain" }}
                />
                <span>TSEC Codestorm</span>
              </div>

              {/* Navigation links */}
              <ul className="mobile-nav__links">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="mobile-nav__link"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <Link
                  href="/codeissance"
                  className="mobile-nav__cta"
                  onClick={() => setIsOpen(false)}
                >
                  Codeissance 2026
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
