"use client";

import { Reveal, FadeUp, Label } from "./ui";

const paras = [
  "I am Meshach Edo Sunday, a full-spectrum Web3 professional with over seven years of hands-on experience turning decentralized ideas into shipped products. My work sits at the intersection of blockchain engineering, product strategy, and community growth, giving me a rare ability to see the whole picture from smart contract to market fit.",
  "I have led cross-functional teams through DeFi protocol launches, guided meme coin campaigns that broke into top trending across major chains, and built dApps serving tens of thousands of active users. I bring engineering precision to every strategic decision and market intuition to every technical call.",
  "Whether you need a technical project lead who can talk to developers or a product strategist who understands tokenomics, I operate confidently in both spaces because I have lived in both.",
];

const highlights = [
  { num: "01", label: "Full product lifecycle from whitepaper to mainnet" },
  { num: "02", label: "Engineering depth across smart contracts and frontends" },
  { num: "03", label: "Strategic clarity on tokenomics, GTM, and positioning" },
  { num: "04", label: "Community systems that retain users past the hype cycle" },
];

export default function About() {
  return (
    <section id="about" style={{
      padding: "112px 32px",
      borderBottom: "1px solid var(--border)",
      maxWidth: 1280, margin: "0 auto",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "64px 80px",
        alignItems: "start",
      }}>
        {/* Left */}
        <div>
          <FadeUp><Label>About</Label></FadeUp>
          <Reveal>
            <h2 style={{
              fontSize: "clamp(32px, 4vw, 54px)",
              fontWeight: 800, letterSpacing: "-0.035em",
              lineHeight: 1.02, color: "var(--white)", margin: 0,
            }}>
              Where strategy<br />meets the chain.
            </h2>
          </Reveal>
        </div>

        {/* Right */}
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 40 }}>
            {paras.map((p, i) => (
              <FadeUp key={i} delay={0.08 + i * 0.08}>
                <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, margin: 0 }}>{p}</p>
              </FadeUp>
            ))}
          </div>

          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32, display: "flex", flexDirection: "column", gap: 16 }}>
            {highlights.map((h, i) => (
              <FadeUp key={h.num} delay={0.3 + i * 0.07}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "var(--subtle)", letterSpacing: "0.08em", flexShrink: 0 }}>
                    {h.num}
                  </span>
                  <span style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.5 }}>{h.label}</span>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.55}>
            <a href="#contact"
              style={{
                marginTop: 36, display: "inline-flex", alignItems: "center", gap: 6,
                padding: "12px 24px", borderRadius: 8,
                background: "var(--accent)", color: "#000",
                fontWeight: 700, fontSize: 14, letterSpacing: "0.01em",
                transition: "background-color 0.2s, transform 0.15s",
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--accent-dark)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Let&apos;s Build Together
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
