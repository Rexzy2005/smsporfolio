"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView, type Transition } from "framer-motion";

const SPRING: Transition = { duration: 0.75, ease: [0.16, 1, 0.3, 1] };
const FADE:   Transition = { duration: 0.55, ease: "easeOut" };

/** Clips text behind a mask and sweeps it up — premium heading reveal */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={`clip-wrap ${className}`}>
      <motion.div
        initial={{ y: "108%" }}
        animate={inView ? { y: "0%" } : {}}
        transition={{ ...SPRING, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/** Simple fade + lift reveal for body content */
export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...FADE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Section label — teal, uppercase, tiny */
export function Label({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "var(--accent)",
        marginBottom: 20,
      }}
    >
      {children}
    </p>
  );
}
