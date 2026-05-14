"use client";

import { FadeUp } from "./ui";

const cats = [
  { label: "Smart Contracts", items: ["Solidity", "Hardhat", "Foundry", "OpenZeppelin", "Chainlink"] },
  { label: "Frontend / dApp",  items: ["React", "Next.js", "TypeScript", "ethers.js", "wagmi", "viem"] },
  { label: "Chains",           items: ["Ethereum", "Solana", "Base", "Arbitrum", "Polygon", "Avalanche"] },
  { label: "Infrastructure",   items: ["TheGraph", "IPFS", "Alchemy", "Moralis", "Gnosis Safe", "Tenderly"] },
  { label: "Community & Ops",  items: ["Discord", "Telegram", "Snapshot", "Collab.Land", "Notion", "Linear"] },
];

export default function TechStack() {
  return (
    <section style={{
      background: "var(--surface)",
      borderBottom: "1px solid var(--border)",
      padding: "72px 32px",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {cats.map((cat, ci) => (
          <FadeUp key={cat.label} delay={ci * 0.06}>
            <div style={{
              display: "flex", flexWrap: "wrap",
              alignItems: "baseline", gap: "12px 24px",
              padding: "20px 0",
              borderBottom: ci < cats.length - 1 ? "1px solid var(--border)" : "none",
            }}>
              <span style={{
                fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "var(--subtle)",
                minWidth: 140, flexShrink: 0,
              }}>{cat.label}</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.items.map(tech => (
                  <span key={tech}
                    style={{
                      padding: "5px 12px", borderRadius: 4,
                      border: "1px solid var(--border-2)",
                      fontSize: 12, color: "var(--muted)", fontWeight: 500,
                      cursor: "default", transition: "border-color 0.15s, color 0.15s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-2)"; e.currentTarget.style.color = "var(--muted)"; }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
