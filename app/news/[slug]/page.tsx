import { getAllNews, getNewsBySlug } from "@/lib/news";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return iso;
  return `${d} · ${m} · ${y}`;
}

export async function generateStaticParams() {
  const news = await getAllNews();
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = await getNewsBySlug(params.slug);
  if (!item) return {};
  return {
    title: `${item.title} — Salvatore Sardu Films`,
    description: item.excerpt,
  };
}

export default async function NewsSlugPage({ params }: Props) {
  const item = await getNewsBySlug(params.slug);
  if (!item) notFound();

  return (
    <main className="news-article">
      <div className="inner">
        <Link
          href="/news"
          className="back"
          style={{
            fontSize: 11,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            fontWeight: 700,
            display: "inline-flex",
            gap: 8,
            marginBottom: 24,
            paddingBottom: 4,
            borderBottom: "1px solid var(--line-strong)",
          }}
        >
          ← Tutti gli aggiornamenti
        </Link>

        <time>{formatDate(item.date)}</time>
        <h1>{item.title}</h1>

        <div className="body">
          <MDXRemote source={item.content} />
        </div>
      </div>
    </main>
  );
}
