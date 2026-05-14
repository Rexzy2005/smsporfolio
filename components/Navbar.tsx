"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";

const links = [
  { label: "About",     href: "#about",     id: "about"     },
  { label: "Expertise", href: "#expertise", id: "expertise" },
  { label: "Work",      href: "#projects",  id: "projects"  },
  { label: "Contact",   href: "#contact",   id: "contact"   },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [active,   setActive]   = useState("");

  /* Scroll-based background */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Active section tracking */
  useEffect(() => {
    const ids = links.map(l => l.id);
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        style={{
          position:        "sticky",
          top:             0,
          zIndex:          40,
          height:          64,
          display:         "flex",
          alignItems:      "center",
          backgroundColor: scrolled ? "rgba(9,9,11,0.94)" : "transparent",
          borderBottom:    scrolled ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter:  scrolled ? "blur(20px)" : "none",
          transition:      "background-color 0.3s, border-color 0.3s",
        }}
      >
        <div style={{
          width: "100%",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}>

          {/* ── Logo ── */}
          <a href="#" style={{
            display: "flex", alignItems: "center", gap: 10,
            textDecoration: "none", flexShrink: 0,
          }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect x="1"  y="1"  width="9" height="9" rx="2.5" stroke="var(--accent)" strokeWidth="1.6"/>
              <rect x="12" y="12" width="9" height="9" rx="2.5" stroke="var(--accent)" strokeWidth="1.6"/>
              <rect x="12" y="1"  width="9" height="9" rx="2.5" stroke="var(--border-2)" strokeWidth="1.6"/>
              <rect x="1"  y="12" width="9" height="9" rx="2.5" stroke="var(--border-2)" strokeWidth="1.6"/>
              <line x1="10" y1="5.5" x2="12" y2="5.5" stroke="var(--accent)"   strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="10" y1="16.5" x2="12" y2="16.5" stroke="var(--border-2)" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="5.5" y1="10" x2="5.5" y2="12" stroke="var(--border-2)" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="16.5" y1="10" x2="16.5" y2="12" stroke="var(--accent)"   strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="nav-name" style={{
              fontWeight: 800, fontSize: 15,
              letterSpacing: "-0.025em",
              color: "var(--text)",
              lineHeight: 1,
            }}>
              Meshach
              <span style={{ color: "var(--accent)", marginLeft: 1 }}>.</span>
            </span>
          </a>

          {/* ── Desktop nav links ── */}
          <nav style={{
            display: "none",
            alignItems: "center",
            gap: 4,
          }} className="md-nav">
            {links.map(l => {
              const isActive = active === l.id;
              return (
                <a key={l.href} href={l.href}
                  style={{
                    position: "relative",
                    padding: "6px 14px",
                    borderRadius: 6,
                    fontSize: 13,
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "var(--text)" : "var(--muted)",
                    transition: "color 0.2s, background-color 0.2s",
                    backgroundColor: isActive ? "var(--surface-2)" : "transparent",
                    textDecoration: "none",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={e => {
                    if (!isActive) e.currentTarget.style.color = "var(--text)";
                  }}
                  onMouseLeave={e => {
                    if (!isActive) e.currentTarget.style.color = "var(--muted)";
                  }}
                >
                  {l.label}
                  {isActive && (
                    <span style={{
                      position: "absolute",
                      bottom: 4, left: "50%",
                      transform: "translateX(-50%)",
                      width: 4, height: 4,
                      borderRadius: "50%",
                      background: "var(--accent)",
                    }} />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ── Desktop right side ── */}
          <div style={{ display: "none", alignItems: "center", gap: 12 }} className="md-right">
            <span style={{
              display: "flex", alignItems: "center", gap: 6,
              fontSize: 12, color: "var(--subtle)",
              fontWeight: 500,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 0 2px rgba(34,197,94,0.2)",
                flexShrink: 0,
              }} />
              Available
            </span>

            <div style={{ width: 1, height: 16, background: "var(--border)" }} />

            <a href="#contact"
              style={{
                display: "flex", alignItems: "center", gap: 5,
                padding: "8px 18px",
                borderRadius: 6,
                background: "var(--accent)",
                color: "#000",
                fontSize: 13, fontWeight: 700,
                letterSpacing: "0.01em",
                textDecoration: "none",
                transition: "background-color 0.2s, transform 0.15s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = "var(--accent-dark)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = "var(--accent)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Hire Me <ArrowUpRight size={13} />
            </a>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            onClick={() => setOpen(true)}
            className="mobile-menu-btn"
            style={{
              display: "none",
              width: 40, height: 40,
              borderRadius: 8,
              border: "1px solid var(--border-2)",
              background: "transparent",
              color: "var(--muted)",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border-2)";
              e.currentTarget.style.color = "var(--muted)";
            }}
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </motion.header>

      {/* ── Mobile full-screen overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              background: "var(--bg)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Overlay top bar */}
            <div style={{
              height: 64,
              padding: "0 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid var(--border)",
              flexShrink: 0,
            }}>
              <a href="#" onClick={closeMenu} style={{
                display: "flex", alignItems: "center", gap: 10, textDecoration: "none",
              }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="1"  y="1"  width="9" height="9" rx="2.5" stroke="var(--accent)"   strokeWidth="1.6"/>
                  <rect x="12" y="12" width="9" height="9" rx="2.5" stroke="var(--accent)"   strokeWidth="1.6"/>
                  <rect x="12" y="1"  width="9" height="9" rx="2.5" stroke="var(--border-2)" strokeWidth="1.6"/>
                  <rect x="1"  y="12" width="9" height="9" rx="2.5" stroke="var(--border-2)" strokeWidth="1.6"/>
                </svg>
                <span style={{ fontWeight: 800, fontSize: 15, letterSpacing: "-0.025em", color: "var(--text)" }}>
                  Meshach<span style={{ color: "var(--accent)" }}>.</span>
                </span>
              </a>

              <button onClick={closeMenu}
                style={{
                  width: 40, height: 40, borderRadius: 8,
                  border: "1px solid var(--border-2)", background: "transparent",
                  color: "var(--muted)", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  cursor: "pointer", transition: "border-color 0.2s, color 0.2s",
                }}
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Overlay links */}
            <div style={{ flex: 1, padding: "48px 32px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, ease: EASE, delay: 0.05 + i * 0.06 }}
                  >
                    <a href={l.href} onClick={closeMenu}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "22px 0",
                        borderBottom: "1px solid var(--border)",
                        textDecoration: "none",
                        gap: 16,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                        <span style={{
                          fontSize: 11, fontWeight: 700,
                          color: "var(--subtle)", letterSpacing: "0.1em",
                          minWidth: 24,
                        }}>
                          0{i + 1}
                        </span>
                        <span style={{
                          fontSize: "clamp(28px, 6vw, 40px)",
                          fontWeight: 800,
                          letterSpacing: "-0.03em",
                          color: "var(--text)",
                          lineHeight: 1,
                          transition: "color 0.2s",
                        }}
                          onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                          onMouseLeave={e => (e.currentTarget.style.color = "var(--text)")}
                        >
                          {l.label}
                        </span>
                      </div>
                      <ArrowUpRight size={20} style={{ color: "var(--subtle)", flexShrink: 0 }} />
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Overlay bottom */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.32, ease: "easeOut" }}
                style={{ display: "flex", flexDirection: "column", gap: 24, paddingTop: 32 }}
              >
                <a href="#contact" onClick={closeMenu}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "16px 24px", borderRadius: 8,
                    background: "var(--accent)", color: "#000",
                    fontWeight: 700, fontSize: 15, textDecoration: "none",
                    letterSpacing: "0.01em",
                  }}
                >
                  Hire Me <ArrowUpRight size={16} />
                </a>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: "var(--subtle)" }}>
                    <span style={{
                      width: 7, height: 7, borderRadius: "50%",
                      background: "#22c55e", boxShadow: "0 0 0 2px rgba(34,197,94,0.2)",
                    }} />
                    Available for new projects
                  </span>

                  <div style={{ display: "flex", gap: 10 }}>
                    {[
                      { Icon: GithubIcon,   label: "GitHub"   },
                      { Icon: LinkedinIcon, label: "LinkedIn" },
                      { Icon: TwitterIcon,  label: "Twitter"  },
                    ].map(({ Icon, label }) => (
                      <a key={label} href="#" aria-label={label}
                        style={{
                          width: 36, height: 36, borderRadius: 8,
                          border: "1px solid var(--border-2)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "var(--subtle)", textDecoration: "none",
                          transition: "border-color 0.2s, color 0.2s",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-2)"; e.currentTarget.style.color = "var(--subtle)"; }}
                      >
                        <Icon size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .md-nav      { display: flex !important; }
          .md-right    { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
          .nav-name    { display: inline !important; }
        }
        @media (max-width: 767px) {
          .md-nav      { display: none !important; }
          .md-right    { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .nav-name    { display: none !important; }
        }
      `}</style>
    </>
  );
}
