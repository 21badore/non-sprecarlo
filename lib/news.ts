import fs from "fs";
import path from "path";
import matter from "gray-matter";

const newsDir = path.join(process.cwd(), "content/news");

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  /** Se presente, la voce punta fuori dal sito e non ha una pagina propria. */
  link?: string;
}

export async function getAllNews(): Promise<NewsItem[]> {
  if (!fs.existsSync(newsDir)) return [];

  const files = fs
    .readdirSync(newsDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const items = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const raw = fs.readFileSync(path.join(newsDir, filename), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title ?? "",
      date: data.date ?? "",
      excerpt: data.excerpt ?? "",
      content,
      link: data.link || undefined,
    };
  });

  return items.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  const all = await getAllNews();
  const item = all.find((n) => n.slug === slug);
  // Le voci che puntano fuori dal sito non generano una pagina.
  return item && !item.link ? item : null;
}
