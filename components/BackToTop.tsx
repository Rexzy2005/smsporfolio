"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0,  scale: 1   }}
          exit={{   opacity: 0, y: 12,  scale: 0.9 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{
            position:     "fixed",
            bottom:       32,
            right:        32,
            zIndex:       50,
            width:        44,
            height:       44,
            borderRadius: 8,
            border:       "1px solid var(--border-2)",
            background:   "var(--surface)",
            color:        "var(--muted)",
            display:      "flex",
            alignItems:   "center",
            justifyContent: "center",
            cursor:       "pointer",
            backdropFilter: "blur(12px)",
            transition:   "border-color 0.2s, color 0.2s, background-color 0.2s, transform 0.15s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.color       = "var(--accent)";
            e.currentTarget.style.backgroundColor = "rgba(45,212,191,0.08)";
            e.currentTarget.style.transform   = "translateY(-2px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "var(--border-2)";
            e.currentTarget.style.color       = "var(--muted)";
            e.currentTarget.style.backgroundColor = "var(--surface)";
            e.currentTarget.style.transform   = "translateY(0)";
          }}
        >
          <ArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
