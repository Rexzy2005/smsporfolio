"use client";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "28px 32px" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "flex", flexWrap: "wrap",
        justifyContent: "space-between", alignItems: "center", gap: 16,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <rect x="1" y="1" width="8" height="8" rx="2" stroke="var(--accent)" strokeWidth="1.5"/>
            <rect x="11" y="11" width="8" height="8" rx="2" stroke="var(--accent)" strokeWidth="1.5"/>
            <line x1="9" y1="5" x2="11" y2="5" stroke="var(--accent)" strokeWidth="1.5"/>
            <line x1="9" y1="15" x2="11" y2="15" stroke="var(--accent)" strokeWidth="1.5"/>
            <line x1="5" y1="9" x2="5" y2="11" stroke="var(--accent)" strokeWidth="1.5"/>
            <line x1="15" y1="9" x2="15" y2="11" stroke="var(--accent)" strokeWidth="1.5"/>
          </svg>
          <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em" }}>
            Meshach Edo Sunday
          </span>
        </div>
        <p style={{ fontSize: 12, color: "var(--subtle)" }}>
          &copy; {new Date().getFullYear()} Meshach Edo Sunday. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy", "Terms"].map(l => (
            <a key={l} href="#"
              style={{ fontSize: 12, color: "var(--subtle)", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--muted)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--subtle)")}
            >{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
