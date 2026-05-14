"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About",     href: "#about"     },
  { label: "Expertise", href: "#expertise" },
  { label: "Work",      href: "#projects"  },
  { label: "Contact",   href: "#contact"   },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position:        "sticky",
        top:             0,
        zIndex:          50,
        backgroundColor: scrolled ? "rgba(9,9,11,0.92)" : "transparent",
        borderBottom:    scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter:  scrolled ? "blur(20px)" : "none",
        transition:      "background-color 0.3s, border-color 0.3s, backdrop-filter 0.3s",
      }}
    >
      <div style={{
        padding: "0 32px", height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="1" y="1" width="8" height="8" rx="2" stroke="var(--accent)" strokeWidth="1.5"/>
            <rect x="11" y="1" width="8" height="8" rx="2" stroke="var(--accent)" strokeWidth="1.5" opacity="0.4"/>
            <rect x="1" y="11" width="8" height="8" rx="2" stroke="var(--accent)" strokeWidth="1.5" opacity="0.4"/>
            <rect x="11" y="11" width="8" height="8" rx="2" stroke="var(--accent)" strokeWidth="1.5"/>
            <line x1="9" y1="5" x2="11" y2="5" stroke="var(--accent)" strokeWidth="1.5"/>
            <line x1="9" y1="15" x2="11" y2="15" stroke="var(--accent)" strokeWidth="1.5"/>
            <line x1="5" y1="9" x2="5" y2="11" stroke="var(--accent)" strokeWidth="1.5"/>
            <line x1="15" y1="9" x2="15" y2="11" stroke="var(--accent)" strokeWidth="1.5"/>
          </svg>
          <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: "-0.02em", color: "var(--text)" }}>
            Meshach Sunday
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 36 }} className="hidden md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href}
              style={{ fontSize: 13, color: "var(--muted)", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact"
            style={{
              padding: "8px 20px", borderRadius: 6,
              backgroundColor: "var(--accent)", color: "#000",
              fontSize: 13, fontWeight: 700, letterSpacing: "0.01em",
              transition: "background-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = "var(--accent-dark)";
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = "var(--accent)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden"
          style={{ color: "var(--muted)", padding: 4, lineHeight: 0 }}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ overflow: "hidden", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}
          >
            <div style={{ padding: "8px 24px 28px" }}>
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "16px 0", borderBottom: "1px solid var(--border)",
                    fontSize: 16, color: "var(--muted)", transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {l.label}
                  <span style={{ fontSize: 12, color: "var(--subtle)" }}>↗</span>
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)}
                style={{
                  display: "block", marginTop: 24, padding: "16px",
                  textAlign: "center", background: "var(--accent)", color: "#000",
                  fontWeight: 700, fontSize: 15, borderRadius: 8,
                }}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
