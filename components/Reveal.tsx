"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Optional stagger, in ms, before the element animates in. */
  delay?: number;
  className?: string;
}

/**
 * Reveals its children with a subtle fade + slide-up the first time they enter
 * the viewport. Respects prefers-reduced-motion (the CSS layer disables the
 * animation, and content is visible regardless).
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? undefined : 0,
        animation: shown
          ? `fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms forwards`
          : undefined,
      }}
    >
      {children}
    </div>
  );
}
