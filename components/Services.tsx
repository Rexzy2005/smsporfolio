"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal, FadeUp, Label } from "./ui";

const services = [
  {
    n: "01",
    title: "End-to-End dApp Development",
    body: "Full-stack decentralized application development from architecture through deployment. Production-ready smart contracts, seamless wallet integrations, and polished frontends optimized for on-chain performance. Every layer handled with engineering rigor.",
    tags: ["Smart Contracts", "Frontend", "Deployment", "Audit Coordination"],
  },
  {
    n: "02",
    title: "Token & DeFi Launch Consulting",
    body: "Complete launch strategy and execution for token projects and DeFi protocols. I guide teams through tokenomics design, liquidity strategy, fair launch mechanics, audit coordination, and community activation at scale.",
    tags: ["Tokenomics", "Liquidity Strategy", "Fair Launch", "KOL Strategy"],
  },
  {
    n: "03",
    title: "Web3 Product Strategy",
    body: "Roadmap definition, positioning, and go-to-market for Web3 products. Competitive analysis, user research, feature prioritization, and milestone planning grounded in on-chain reality, not wishful thinking.",
    tags: ["Roadmap", "GTM", "Competitive Analysis", "Positioning"],
  },
  {
    n: "04",
    title: "Community & Growth Architecture",
    body: "Community infrastructure built to outlast the hype cycle. Discord structure, ambassador frameworks, engagement loops, and retention strategies that convert followers into believers and holders into advocates.",
    tags: ["Discord", "Ambassador Programs", "Growth Loops", "Retention"],
  },
];

export default function Services() {
  return (
    <section id="services" style={{
      padding: "112px 32px",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "0 80px", marginBottom: 64, alignItems: "end",
        }}>
          <div>
            <FadeUp><Label>Services</Label></FadeUp>
            <Reveal>
              <h2 style={{
                fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800,
                letterSpacing: "-0.035em", lineHeight: 1.02,
                color: "var(--white)", margin: 0,
              }}>
                How I can help<br />you ship.
              </h2>
            </Reveal>
          </div>
          <FadeUp delay={0.1}>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75, maxWidth: 400 }}>
              Focused engagements designed to move fast, stay rigorous, and deliver real on-chain results.
            </p>
          </FadeUp>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 1, background: "var(--border)" }}>
          {services.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.08}>
              <div
                style={{
                  background: "var(--bg)",
                  padding: "36px 32px",
                  display: "flex", flexDirection: "column", gap: 16,
                  minHeight: 280,
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--surface)")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--bg)")}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "var(--subtle)" }}>
                    {s.n}
                  </span>
                  <a href="#contact"
                    style={{
                      width: 30, height: 30, borderRadius: 6,
                      border: "1px solid var(--border-2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "var(--subtle)", transition: "border-color 0.2s, color 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-2)"; e.currentTarget.style.color = "var(--subtle)"; }}
                    aria-label="Start this service"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                <h3 style={{
                  fontSize: 16, fontWeight: 700, color: "var(--white)",
                  letterSpacing: "-0.01em", lineHeight: 1.3, margin: 0,
                }}>
                  {s.title}
                </h3>

                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.75, flex: 1, margin: 0 }}>
                  {s.body}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, borderTop: "1px solid var(--border)", paddingTop: 16 }}>
                  {s.tags.map(t => (
                    <span key={t} style={{
                      padding: "3px 8px", borderRadius: 3,
                      background: "var(--surface-2)",
                      fontSize: 10, color: "var(--subtle)",
                      fontWeight: 600, letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
