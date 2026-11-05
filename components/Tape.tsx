"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

function useTapePhase() {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"idle" | "arm" | "in">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        setPhase("arm");
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setPhase("in"));
        });
      },
      { threshold: 0.45 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const motion = phase === "idle" ? "" : phase === "arm" ? "tape-from" : "tape-from tape-in";
  return { ref, motion };
}

export function Tape({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, motion } = useTapePhase();
  return (
    <div ref={ref} data-tape className={`tape ${motion} ${className}`.trim()}>
      {children}
    </div>
  );
}

export function TapeBar({ className = "" }: { className?: string }) {
  const { ref, motion } = useTapePhase();
  return <div ref={ref} data-tape className={`${className} ${motion}`.trim()} aria-hidden="true" />;
}
