"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#film", label: "FILM" },
  { href: "#produzione", label: "PRODUZIONE" },
  { href: "#aggiornamenti", label: "AGGIORNAMENTI" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#F5EFE6]/85 backdrop-blur-md text-[#1A1612]" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-medium text-xs md:text-sm tracking-[0.2em] uppercase"
        >
          Salvatore Sardu Films
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navigazione principale">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono-custom text-[10px] tracking-[0.25em] uppercase hover:text-[#C75D3D] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
