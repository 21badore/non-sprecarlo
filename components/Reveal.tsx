"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: "div" | "h1" | "h2" | "p" | "span" | "section" | "figure" | "ul" | "li" | "a";
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
      { threshold: 0.05, rootMargin: "-80px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? `d${delay}` : "";

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${delayClass} ${visible ? "in" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
