"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  const links = [
    { href: "/#hackathons", label: "Our Hackathons" },
    { href: "/about", label: "About Us" },
    { href: "/winners", label: "Hall of Fame" },
    { href: "/practice", label: "Practice" },
  ];

  return (
    <>
      <nav className="navbar" id="navbar">
        <Link href="/" className="navbar__logo">
          <span className="navbar__logo-icon" style={{ background: "transparent", boxShadow: "none" }}>
            <Image src="/logo.png" alt="TSEC Codestorm" width={32} height={32} style={{ borderRadius: "8px", objectFit: "contain" }} />
          </span>
          TSEC Codestorm
        </Link>
        
        {/* Desktop Links */}
        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="navbar__link"
                style={{ color: pathname === link.href || (link.href === '/#hackathons' && pathname === '/') ? "var(--color-white)" : undefined }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link href="/codeissance" className="navbar__cta desktop-cta">Codeissance 2026</Link>

        {/* Mobile Hamburger Button */}
        <button 
          className="navbar__mobile-btn"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open mobile menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mobile-menu__backdrop" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div 
              className="mobile-menu__content"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="mobile-menu__header">
                <Link href="/" className="navbar__logo" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "1.25rem" }}>
                  <span className="navbar__logo-icon" style={{ background: "transparent", boxShadow: "none", width: 28, height: 28 }}>
                    <Image src="/logo.png" alt="TSEC Codestorm" width={28} height={28} style={{ borderRadius: "6px", objectFit: "contain" }} />
                  </span>
                  TSEC Codestorm
                </Link>
                <button 
                  className="mobile-menu__close"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close mobile menu"
                >
                  <X size={28} />
                </button>
              </div>
              
              <div className="mobile-menu__links">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="mobile-menu__link"
                    style={{ color: pathname === link.href ? "var(--color-white)" : undefined }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link 
                  href="/codeissance" 
                  className="navbar__cta mobile-cta" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Codeissance 2026
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
