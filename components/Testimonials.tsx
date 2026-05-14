"use client";

import { Reveal, FadeUp, Label } from "./ui";

const quotes = [
  {
    text: "Working with Meshach was the difference between a good idea and a live protocol. He understood the product at every layer, from the smart contracts up to the community Discord, and he held the entire build together.",
    name: "Marcus T.",
    role: "Founder, NovaDEX",
    initials: "MT",
  },
  {
    text: "Meshach led our launchpad build from zero to live in eight weeks. Every technical decision he made was clean and well-reasoned. Our devs respected him, our investors trusted him, and the product shipped.",
    name: "Priya S.",
    role: "CEO, ChainFlow Labs",
    initials: "PS",
  },
  {
    text: "Most people who call themselves Web3 strategists have never shipped anything. Meshach has shipped everything. He brings real engineering depth to every strategic conversation and the results speak for themselves.",
    name: "Jake R.",
    role: "Core Contributor, VaultSync DAO",
    initials: "JR",
  },
];

export default function Testimonials() {
  return (
    <section style={{
      padding: "112px 32px",
      background: "var(--surface)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeUp><Label>What Builders Are Saying</Label></FadeUp>
        <Reveal>
          <h2 style={{
            fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800,
            letterSpacing: "-0.035em", lineHeight: 1.02,
            color: "var(--white)", marginBottom: 64,
          }}>
            Trusted by builders<br />across the ecosystem.
          </h2>
        </Reveal>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 1, background: "var(--border)",
        }}>
          {quotes.map((q, i) => (
            <FadeUp key={q.name} delay={i * 0.1}>
              <div style={{
                background: "var(--surface)",
                padding: "40px 32px",
                display: "flex", flexDirection: "column", gap: 0,
              }}>
                {/* Quote mark */}
                <div style={{
                  fontSize: 64, lineHeight: 1, color: "var(--accent)",
                  fontWeight: 800, marginBottom: 16, letterSpacing: "-0.04em",
                }}>
                  &ldquo;
                </div>
                <p style={{
                  fontSize: 15, color: "var(--text)",
                  lineHeight: 1.8, flex: 1, marginBottom: 32,
                  fontStyle: "normal",
                }}>
                  {q.text}
                </p>
                <div style={{
                  display: "flex", alignItems: "center", gap: 14,
                  borderTop: "1px solid var(--border)", paddingTop: 24,
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 8,
                    background: "var(--surface-2)",
                    border: "1px solid var(--border-2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 800, color: "var(--accent)",
                    letterSpacing: "0.05em", flexShrink: 0,
                  }}>
                    {q.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--white)" }}>{q.name}</div>
                    <div style={{ fontSize: 12, color: "var(--subtle)", marginTop: 2 }}>{q.role}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
