"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { Reveal, FadeUp, Label } from "./ui";

const projects = [
  {
    n: "01",
    title: "NovaDEX Protocol",
    type: "DeFi / AMM",
    year: "2024",
    result: "$12M TVL in 30 days",
    body: "Architected and launched a next-generation automated market maker on Ethereum with concentrated liquidity positions and dynamic fee tiers.",
    tags: ["Solidity", "React", "Uniswap V3 Fork", "TheGraph"],
  },
  {
    n: "02",
    title: "MoonPepe Campaign",
    type: "Meme Coin Launch",
    year: "2024",
    result: "18K holders in 72 hours",
    body: "Led the full-cycle launch of a meme coin that trended on Dextools and DEXScreener within six hours of deployment through coordinated community and KOL strategy.",
    tags: ["Base", "Fair Launch", "Community Ops", "KOL Strategy"],
  },
  {
    n: "03",
    title: "VaultSync DAO",
    type: "DAO Tooling",
    year: "2023",
    result: "200+ active DAOs",
    body: "Built a DAO treasury management dApp with on-chain voting, multi-sig proposal flows, and real-time portfolio tracking across ten EVM chains.",
    tags: ["Next.js", "Solidity", "Snapshot", "Gnosis Safe"],
  },
  {
    n: "04",
    title: "ChainFlow Launchpad",
    type: "IDO Platform",
    year: "2023",
    result: "$4M raised across 22 projects",
    body: "Designed and shipped a full-featured IDO launchpad supporting tiered allocations, vesting contracts, and KYC-gated pools.",
    tags: ["Solidity", "TypeScript", "Chainlink", "Next.js"],
  },
];

function ProjectRow({ p, idx }: { p: typeof projects[number]; idx: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeUp delay={idx * 0.07}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderBottom: "1px solid var(--border)",
          padding: "40px 0",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: "0 24px",
          cursor: "default",
          transition: "padding 0.2s",
        }}
      >
        {/* Number */}
        <span style={{
          fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
          color: hovered ? "var(--accent)" : "var(--subtle)",
          paddingTop: 6, transition: "color 0.2s", flexShrink: 0,
        }}>
          {p.n}
        </span>

        <div>
          {/* Top row */}
          <div style={{
            display: "flex", flexWrap: "wrap",
            justifyContent: "space-between", alignItems: "flex-start",
            gap: "8px 24px", marginBottom: 12,
          }}>
            <div>
              <h3 style={{
                fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 800,
                letterSpacing: "-0.03em", color: "var(--white)", margin: 0,
                lineHeight: 1.1,
              }}>
                {p.title}
              </h3>
              <div style={{ display: "flex", gap: 12, marginTop: 6, alignItems: "center" }}>
                <span style={{ fontSize: 12, color: "var(--muted)" }}>{p.type}</span>
                <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--border-2)", flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: "var(--subtle)" }}>{p.year}</span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{
                padding: "5px 12px", borderRadius: 4,
                border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
                background: hovered ? "rgba(45,212,191,0.06)" : "transparent",
                fontSize: 11, color: hovered ? "var(--accent)" : "var(--subtle)",
                fontWeight: 600, transition: "all 0.2s", whiteSpace: "nowrap",
              }}>
                {p.result}
              </span>
              <div style={{ display: "flex", gap: 8 }}>
                {[{ Icon: GithubIcon, label: "GitHub" }, { Icon: ExternalLink, label: "Live" }].map(({ Icon, label }) => (
                  <button key={label} aria-label={label}
                    style={{
                      width: 34, height: 34, borderRadius: 6,
                      border: "1px solid var(--border)", background: "none",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "var(--subtle)", transition: "border-color 0.2s, color 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--subtle)"; }}
                  >
                    <Icon size={14} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.75, maxWidth: 640, marginBottom: 16 }}>
            {p.body}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {p.tags.map(t => (
              <span key={t} style={{
                padding: "3px 10px", borderRadius: 4,
                border: "1px solid var(--border)",
                fontSize: 11, color: "var(--subtle)", fontWeight: 500, letterSpacing: "0.03em",
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{
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
            <FadeUp><Label>Selected Work</Label></FadeUp>
            <Reveal>
              <h2 style={{
                fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800,
                letterSpacing: "-0.035em", lineHeight: 1.02,
                color: "var(--white)", margin: 0,
              }}>
                Projects that shipped<br />and scaled.
              </h2>
            </Reveal>
          </div>
          <FadeUp delay={0.1}>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75, maxWidth: 400 }}>
              A snapshot of real products built, launched, and grown across the Web3 ecosystem.
            </p>
          </FadeUp>
        </div>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          {projects.map((p, i) => <ProjectRow key={p.n} p={p} idx={i} />)}
        </div>
      </div>
    </section>
  );
}
