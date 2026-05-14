"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal, FadeUp, Label } from "./ui";

const items = [
  {
    n: "01", title: "Blockchain Product Builder",
    body: "I design and ship blockchain products from the ground up. From ideation and whitepaper through mainnet deployment, I own the full product lifecycle and ensure every feature delivers real user value on-chain.",
    tags: ["Product Lifecycle", "On-chain UX", "Launch Strategy"],
  },
  {
    n: "02", title: "Web3 Ecosystem Specialist",
    body: "Deep knowledge of the entire Web3 stack. I navigate multi-chain environments, protocol integrations, ecosystem partnerships, and cross-chain interoperability to position products at the center of the decentralized web.",
    tags: ["Multi-chain", "Ecosystem Partnerships", "Interoperability"],
  },
  {
    n: "03", title: "Project Manager",
    body: "I run tight, transparent project cycles that keep distributed teams aligned and shipping on time. Agile-native with a strong track record of delivering complex, multi-stakeholder blockchain projects inside demanding timelines.",
    tags: ["Agile", "Roadmapping", "Cross-team Alignment"],
  },
  {
    n: "04", title: "Crypto Product Strategist",
    body: "I translate market signals, tokenomics models, and competitive landscapes into sharp product strategies that win user attention and retain it. I know how to build for both the early adopter and the mass-market entrant.",
    tags: ["Tokenomics", "GTM Strategy", "Competitive Analysis"],
  },
  {
    n: "05", title: "DeFi & Meme Coin Launch Specialist",
    body: "From fair launches to stealth drops, I have orchestrated DeFi protocol releases and meme coin campaigns that achieved trending status across Ethereum, Solana, and Base. Speed, narrative, and timing are my weapons.",
    tags: ["DeFi Protocols", "Meme Launches", "Fair Launch"],
  },
  {
    n: "06", title: "Full Stack Web3 Engineer",
    body: "I write production-grade smart contracts in Solidity and build the React and Next.js frontends that connect users to them. From ABI integrations to gas optimizations, I handle the full technical depth of a dApp.",
    tags: ["Solidity", "React", "ethers.js", "Next.js"],
  },
  {
    n: "07", title: "Blockchain Operations Manager",
    body: "I build the operational infrastructure that keeps a blockchain project healthy: treasury management, on-chain governance tooling, validator coordination, and protocol upgrade pipelines that minimize downtime and maximize trust.",
    tags: ["Treasury Ops", "Governance", "Protocol Upgrades"],
  },
  {
    n: "08", title: "Web3 Technical Project Lead",
    body: "As a technical lead I bridge the gap between engineering teams and business stakeholders. I define architecture, manage developer sprints, review smart contract audits, and maintain delivery momentum on high-stakes builds.",
    tags: ["Architecture", "Audit Coordination", "Sprint Management"],
  },
  {
    n: "09", title: "Crypto Community & Growth Strategist",
    body: "I build living communities, not just follower counts. Discord architecture, ambassador programs, viral content loops, and community incentive structures are tools I deploy to create ecosystems that sustain projects long after launch.",
    tags: ["Discord", "Ambassador Programs", "Growth Loops"],
  },
  {
    n: "10", title: "Decentralized App Developer",
    body: "I build dApps that are fast, secure, and genuinely usable. From wallet connection and transaction handling to real-time indexing and responsive UI, I architect decentralized applications that feel as polished as their Web2 counterparts.",
    tags: ["dApp Architecture", "Wallet UX", "Indexing"],
  },
];

function ExpertiseRow({ item, idx }: { item: typeof items[number]; idx: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeUp delay={idx * 0.04}>
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: "100%", display: "flex", alignItems: "center",
            gap: 20, padding: "24px 0", background: "none", border: "none",
            cursor: "pointer", textAlign: "left",
            transition: "color 0.2s",
          }}
        >
          <span style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
            color: open ? "var(--accent)" : "var(--subtle)",
            minWidth: 28, flexShrink: 0, transition: "color 0.2s",
          }}>
            {item.n}
          </span>
          <span style={{
            fontSize: "clamp(15px, 2vw, 18px)", fontWeight: 600,
            color: open ? "var(--white)" : "var(--text)",
            letterSpacing: "-0.01em", flex: 1, transition: "color 0.2s",
          }}>
            {item.title}
          </span>
          <span style={{
            width: 28, height: 28, borderRadius: 6,
            border: `1px solid ${open ? "var(--accent)" : "var(--border)"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: open ? "var(--accent)" : "var(--subtle)",
            flexShrink: 0, transition: "border-color 0.2s, color 0.2s",
          }}>
            {open ? <Minus size={13} /> : <Plus size={13} />}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ overflow: "hidden" }}
            >
              <div style={{ paddingBottom: 28, paddingLeft: 48 }}>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8, marginBottom: 16, maxWidth: 620 }}>
                  {item.body}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {item.tags.map(t => (
                    <span key={t} style={{
                      padding: "4px 10px", borderRadius: 4,
                      border: "1px solid var(--border-2)",
                      fontSize: 11, color: "var(--subtle)",
                      fontWeight: 500, letterSpacing: "0.04em",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}

export default function Expertise() {
  return (
    <section id="expertise" style={{
      padding: "112px 32px",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "0 80px",
          marginBottom: 64,
          alignItems: "end",
        }}>
          <div>
            <FadeUp><Label>Core Expertise</Label></FadeUp>
            <Reveal>
              <h2 style={{
                fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800,
                letterSpacing: "-0.035em", lineHeight: 1.02,
                color: "var(--white)", margin: 0,
              }}>
                Ten disciplines,<br />one mission.
              </h2>
            </Reveal>
          </div>
          <FadeUp delay={0.1}>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75, maxWidth: 400 }}>
              Click any role to see how each discipline translates into shipped results.
            </p>
          </FadeUp>
        </div>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          {items.map((item, idx) => (
            <ExpertiseRow key={item.n} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
