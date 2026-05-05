import { getAllNews } from "@/lib/news";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News — Salvatore Sardu Films",
  description: "Tutti gli aggiornamenti su Non Sprecarlo e i progetti di Salvatore Sardu Films.",
};

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <main className="bg-[#F5EFE6] text-[#1A1612] pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <p className="font-mono-custom text-[11px] tracking-[0.3em] uppercase opacity-60 mb-6">
          Aggiornamenti
        </p>
        <h1 className="font-display font-bold uppercase text-fluid-section mb-16">News</h1>

        {news.length === 0 ? (
          <p className="font-mono-custom text-sm tracking-wide uppercase opacity-50">
            Nessun aggiornamento disponibile.
          </p>
        ) : (
          <ul className="divide-y divide-[#1A1612]/15">
            {news.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/news/${item.slug}`}
                  className="group block py-10 hover:opacity-100 transition-opacity duration-200"
                >
                  <time className="font-mono-custom text-[11px] tracking-[0.25em] uppercase opacity-50 block mb-3">
                    {item.date}
                  </time>
                  <h2 className="font-display font-medium text-2xl md:text-3xl leading-tight mb-3 group-hover:text-[#C75D3D] transition-colors duration-200">
                    {item.title}
                  </h2>
                  <p className="font-display text-base md:text-lg leading-relaxed opacity-70 max-w-2xl">
                    {item.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 font-mono-custom text-[11px] tracking-[0.25em] uppercase mt-4 text-[#C75D3D]">
                    Leggi <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono-custom text-[11px] tracking-[0.25em] uppercase mt-16 border-b border-[#1A1612]/40 pb-1 hover:border-[#C75D3D] hover:text-[#C75D3D] transition-colors duration-200"
        >
          ← Torna alla home
        </Link>
      </div>
    </main>
  );
}
