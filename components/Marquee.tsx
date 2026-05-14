"use client";

const row1 = [
  "Solidity", "DeFi", "Smart Contracts", "Web3", "Tokenomics",
  "DAO", "Ethereum", "Solana", "Base", "Arbitrum",
];

const row2 = [
  "dApps", "NFTs", "Liquidity", "Fair Launch", "Meme Coins",
  "On-chain Governance", "ethers.js", "wagmi", "Chainlink", "IPFS",
];

/* A handful of terms that get the teal treatment */
const accented = new Set(["DeFi", "Smart Contracts", "Ethereum", "wagmi", "On-chain Governance"]);

const pill: React.CSSProperties = {
  display:        "inline-flex",
  alignItems:     "center",
  padding:        "7px 18px",
  borderRadius:   99,
  whiteSpace:     "nowrap",
  fontSize:       12,
  fontWeight:     500,
  letterSpacing:  "0.025em",
  userSelect:     "none",
  flexShrink:     0,
};

function Item({ label }: { label: string }) {
  const hi = accented.has(label);
  return (
    <span style={{
      ...pill,
      border:     `1px solid ${hi ? "rgba(45,212,191,0.3)" : "var(--border-2)"}`,
      background: hi ? "rgba(45,212,191,0.07)" : "var(--surface-2)",
      color:      hi ? "var(--accent)"         : "var(--muted)",
    }}>
      {label}
    </span>
  );
}

function Strip({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  /* 4 copies so both directions have enough content to scroll seamlessly */
  const quads = [...items, ...items, ...items, ...items];

  return (
    <div style={{
      overflow:     "hidden",
      /* soft fade at both edges */
      WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      maskImage:       "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
    }}>
      <div className={reverse ? "marquee-track-reverse" : "marquee-track"}
        style={{ display: "flex", gap: 10, alignItems: "center" }}
      >
        {quads.map((t, i) => <Item key={i} label={t} />)}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section style={{
      background:   "var(--surface)",
      borderTop:    "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      padding:      "28px 0",
      display:      "flex",
      flexDirection:"column",
      gap:          12,
      overflow:     "hidden",
    }}>
      <Strip items={row1} />
      <Strip items={row2} reverse />
    </section>
  );
}
