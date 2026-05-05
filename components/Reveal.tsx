"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: 0 | 1 | 2 | 3;
  as?: "div" | "h1" | "h2" | "p" | "span" | "section";
}

export default function Reveal({
  children,
  className = "",
  style,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement & HTMLHeadingElement & HTMLParagraphElement>}
      className={`reveal ${delayClass} ${visible ? "is-visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
