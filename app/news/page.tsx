import { getAllNews } from "@/lib/news";
import Link from "next/link";
import type { Metadata } from "next";

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return iso;
  return `${d} · ${m} · ${y}`;
}

export const metadata: Metadata = {
  title: "News — Salvatore Sardu Films",
  description: "Tutti gli aggiornamenti su Non Sprecarlo e i progetti di Salvatore Sardu Films.",
};

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <main className="news-page">
      <div className="inner">
        <h1>News</h1>

        {news.length === 0 ? (
          <p>Nessun aggiornamento disponibile.</p>
        ) : (
          news.map((item) => (
            <article key={item.slug}>
              <time>{formatDate(item.date)}</time>
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
              <Link href={`/news/${item.slug}`} className="read">
                Leggi →
              </Link>
            </article>
          ))
        )}

        <Link href="/" className="back">
          ← Torna alla home
        </Link>
      </div>
    </main>
  );
}
