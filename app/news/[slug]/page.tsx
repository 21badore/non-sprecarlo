import { getAllNews, getNewsBySlug } from "@/lib/news";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
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
    <main className="bg-[#F5EFE6] text-[#1A1612] pt-32 pb-24 min-h-screen">
      <article className="max-w-2xl mx-auto px-6 md:px-12">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 font-mono-custom text-[11px] tracking-[0.25em] uppercase mb-12 border-b border-[#1A1612]/30 pb-1 hover:border-[#C75D3D] hover:text-[#C75D3D] transition-colors duration-200"
        >
          ← Tutti gli aggiornamenti
        </Link>

        <time className="font-mono-custom text-[11px] tracking-[0.25em] uppercase opacity-60 block mb-4">
          {item.date}
        </time>
        <h1 className="font-display font-bold uppercase text-3xl md:text-5xl leading-tight tracking-tight mb-12">
          {item.title}
        </h1>

        <div className="prose-content font-display text-lg leading-relaxed
          [&_p]:mb-6 [&_p]:opacity-90
          [&_h2]:font-display [&_h2]:font-medium [&_h2]:text-2xl [&_h2]:mt-12 [&_h2]:mb-4
          [&_blockquote]:border-l-2 [&_blockquote]:border-[#C75D3D] [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:my-8 [&_blockquote]:opacity-80
          [&_strong]:font-medium
          [&_a]:text-[#C75D3D] [&_a]:border-b [&_a]:border-[#C75D3D]/30 [&_a]:hover:border-[#C75D3D] [&_a]:transition-colors [&_a]:duration-200
        ">
          <MDXRemote source={item.content} />
        </div>
      </article>
    </main>
  );
}
