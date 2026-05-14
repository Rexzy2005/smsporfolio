import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meshach Edo Sunday | Web3 Product Builder & Blockchain Strategist",
  description:
    "Seasoned Web3 professional specializing in blockchain product development, DeFi launches, and decentralized application engineering.",
  keywords: ["Web3", "Blockchain", "DeFi", "dApp", "Crypto", "Product Manager", "Smart Contracts"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ background: "var(--bg)", color: "var(--text)" }}>
        <div style={{
          maxWidth: 1440,
          margin: "0 auto",
          borderLeft: "1px solid var(--border)",
          borderRight: "1px solid var(--border)",
          minHeight: "100vh",
          position: "relative",
        }}>
          {children}
        </div>
      </body>
    </html>
  );
}
