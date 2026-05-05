import { MetadataRoute } from "next";
import { getAllNews } from "@/lib/news";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const news = await getAllNews();
  const base = "https://salvatoresardufilms.com";

  const newsEntries = news.map((n) => ({
    url: `${base}/news/${n.slug}`,
    lastModified: new Date(n.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/news`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...newsEntries,
  ];
}
