"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";
import { Reveal, FadeUp, Label } from "./ui";

const socials = [
  { Icon: GithubIcon,   label: "GitHub",     href: "#" },
  { Icon: LinkedinIcon, label: "LinkedIn",   href: "#" },
  { Icon: TwitterIcon,  label: "Twitter / X", href: "#" },
];

export default function Contact() {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const field: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    background: "var(--surface-2)",
    border: "1px solid var(--border-2)",
    borderRadius: 8,
    fontSize: 14,
    color: "var(--text)",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{
      padding: "112px 32px",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "64px 80px",
          alignItems: "start",
        }}>
          {/* Info */}
          <div>
            <FadeUp><Label>Contact</Label></FadeUp>
            <Reveal>
              <h2 style={{
                fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800,
                letterSpacing: "-0.035em", lineHeight: 1.02,
                color: "var(--white)", marginBottom: 24,
              }}>
                Ready to build<br />something real?
              </h2>
            </Reveal>
            <FadeUp delay={0.1}>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, marginBottom: 40 }}>
                Whether you have a product in mind or a problem to solve, reach
                out and let&apos;s talk about what we can build together.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div style={{ marginBottom: 32 }}>
                {[
                  { val: "meshach@example.com",   meta: "Email"    },
                  { val: "@meshach_web3",         meta: "Telegram" },
                ].map(({ val, meta }) => (
                  <a key={meta} href={meta === "Email" ? `mailto:${val}` : "#"}
                    style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "16px 0", borderBottom: "1px solid var(--border)",
                      color: "var(--muted)", fontSize: 14,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                  >
                    <span>{val}</span>
                    <span style={{ fontSize: 10, letterSpacing: "0.12em", color: "var(--subtle)", textTransform: "uppercase" }}>
                      {meta}
                    </span>
                  </a>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div style={{ display: "flex", gap: 10 }}>
                {socials.map(({ Icon, label, href }) => (
                  <a key={label} href={href} aria-label={label}
                    style={{
                      width: 40, height: 40, borderRadius: 8,
                      border: "1px solid var(--border)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "var(--subtle)", transition: "border-color 0.2s, color 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--subtle)"; }}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Form */}
          <FadeUp delay={0.12}>
            {done ? (
              <div style={{
                border: "1px solid var(--border-2)", borderRadius: 12,
                padding: "80px 32px",
                display: "flex", flexDirection: "column", alignItems: "center",
                textAlign: "center", gap: 16,
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: "var(--accent)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Send size={22} color="#000" />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--white)", letterSpacing: "-0.02em" }}>
                  Message received.
                </h3>
                <p style={{ fontSize: 14, color: "var(--muted)" }}>
                  I will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={e => { e.preventDefault(); setDone(true); }}
                style={{
                  border: "1px solid var(--border-2)", borderRadius: 12,
                  padding: "40px 32px",
                  display: "flex", flexDirection: "column", gap: 14,
                }}
              >
                <input type="text" placeholder="Your name" required
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  style={field}
                  onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border-2)")}
                />
                <input type="email" placeholder="your@email.com" required
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  style={field}
                  onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border-2)")}
                />
                <textarea rows={5} placeholder="Tell me about your project..." required
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ ...field, resize: "none" }}
                  onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border-2)")}
                />
                <button type="submit"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "14px 24px", borderRadius: 8,
                    background: "var(--accent)", color: "#000",
                    fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer",
                    transition: "background-color 0.2s, transform 0.15s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--accent-dark)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Send Message <Send size={15} />
                </button>
              </form>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
