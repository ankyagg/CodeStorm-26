"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const overlayContent = (
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
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header row: Brand + Close button */}
            <div className="mobile-nav__header">
              <div className="mobile-nav__brand">
                <Image
                  src="/logo.png"
                  alt="TSEC Codestorm"
                  width={32}
                  height={32}
                  style={{ borderRadius: "8px", objectFit: "contain" }}
                />
                <span>TSEC CODESTORM</span>
              </div>
              <button
                className="mobile-nav__close"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation links */}
            <ul className="mobile-nav__links">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.25 }}
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

            {/* Bottom CTA */}
            <motion.div
              className="mobile-nav__footer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.25 }}
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
  );

  return (
    <>
      <button
        className="mobile-nav__hamburger"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
      >
        <Menu size={22} />
      </button>

      {mounted && createPortal(overlayContent, document.body)}
    </>
  );
}

