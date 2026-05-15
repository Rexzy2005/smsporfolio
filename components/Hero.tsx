"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";

const roles = [
  "Web3 Ecosystem Specialist",
  "DeFi & Meme Coin Strategist",
  "Blockchain Product Builder",
  "Full Stack Web3 Engineer",
  "Crypto Community Builder",
  "Decentralized App Developer",
];

const stats = [
  { value: "7+",   label: "Years in Web3"     },
  { value: "50+",  label: "Products Shipped"  },
  { value: "200K+",label: "Community Built"   },
  { value: "15+",  label: "Chains Deployed"   },
];

function RoleRotator() {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setI(n => (n + 1) % roles.length); setVisible(true); }, 300);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <span style={{
      color: "var(--accent)",
      display: "inline-block",
      transition: "opacity 0.25s, transform 0.25s",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(6px)",
    }}>
      {roles[i]}
    </span>
  );
}

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      position: "relative",
      overflow: "hidden",
      borderBottom: "1px solid var(--border)",
      padding: "0 32px 72px",
    }}>
      {/* Dot-grid background */}
      <div className="hero-grid" style={{
        position: "absolute", inset: 0,
        opacity: 0.35, pointerEvents: "none",
      }} />

      {/* Accent blob: single, subtle, no multi-color */}
      <div style={{
        position: "absolute",
        top: "30%", left: "55%",
        width: 600, height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(45,212,191,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          style={{ marginBottom: 40 }}
        >
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 14px", borderRadius: 99,
            border: "1px solid var(--border-2)",
            fontSize: 12, fontWeight: 500, color: "var(--muted)",
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 0 2px rgba(34,197,94,0.25)",
            }} />
            Available for new projects
          </span>
        </motion.div>

        {/* Name: three-line clip reveal */}
        {[
          { word: "Meshach", color: "var(--white)",  delay: 0.2  },
          { word: "Edo",     color: "var(--white)",  delay: 0.28 },
          { word: "Sunday.", color: "var(--subtle)", delay: 0.36 },
        ].map(({ word, color, delay }) => (
          <div key={word} style={{ overflow: "hidden", marginBottom: word === "Sunday." ? 40 : 4 }}>
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, ease: EASE, delay }}
              style={{
                fontSize: "clamp(52px, 9.5vw, 120px)",
                fontWeight: 800,
                lineHeight: 0.93,
                letterSpacing: "-0.04em",
                color,
                margin: 0,
              }}
            >
              {word}
            </motion.h1>
          </div>
        ))}

        {/* Role + description row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px 64px",
            marginBottom: 48,
            alignItems: "flex-start",
          }}
        >
          <div style={{ maxWidth: 420 }}>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>
              Seven years turning protocol ideas into shipped products across DeFi,
              meme coins, dApps, and on-chain communities. Currently{" "}
              <RoleRotator />.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href="#projects"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "12px 24px", borderRadius: 8,
                background: "var(--accent)", color: "#000",
                fontWeight: 700, fontSize: 14, letterSpacing: "0.01em",
                transition: "background-color 0.2s, transform 0.15s",
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--accent-dark)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "var(--accent)";      e.currentTarget.style.transform = "translateY(0)"; }}
            >
              View Work <ArrowUpRight size={15} />
            </a>
            <a href="#contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "12px 24px", borderRadius: 8,
                border: "1px solid var(--border-2)", color: "var(--muted)",
                fontWeight: 600, fontSize: 14,
                transition: "border-color 0.2s, color 0.2s, transform 0.15s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-2)"; e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px 0",
            borderTop: "1px solid var(--border)",
            paddingTop: 32,
          }}
        >
          {stats.map((s, i) => (
            <div key={s.label} style={{
              flex: "1 1 120px",
              paddingRight: 32,
              borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
              paddingLeft: i > 0 ? 32 : 0,
            }}>
              <div style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 800,
                color: "var(--white)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}>{s.value}</div>
              <div style={{
                fontSize: 11, color: "var(--subtle)",
                marginTop: 6, textTransform: "uppercase",
                letterSpacing: "0.1em", fontWeight: 600,
              }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{ display: "flex", gap: 12, marginTop: 32 }}
        >
          {[
            { Icon: GithubIcon,   label: "GitHub",   href: "#" },
            { Icon: LinkedinIcon, label: "LinkedIn",  href: "#" },
            { Icon: TwitterIcon,  label: "Twitter",   href: "https://x.com/sms_scandal?s=21" },
          ].map(({ Icon, label, href }) => (
            <a key={label} href={href} aria-label={label}
              style={{
                width: 38, height: 38, borderRadius: 8,
                border: "1px solid var(--border)", color: "var(--subtle)",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)";  e.currentTarget.style.color = "var(--subtle)"; }}
            >
              <Icon size={15} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
