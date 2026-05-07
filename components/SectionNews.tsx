import Link from "next/link";
import Reveal from "./Reveal";
import NewsletterForm from "./NewsletterForm";
import { getAllNews } from "@/lib/news";

function formatDate(iso: string): string {
  // "2026-05-01" -> "01 · 05 · 2026"
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return iso;
  return `${d} · ${m} · ${y}`;
}

export default async function SectionNews() {
  const all = await getAllNews();
  const latest = all.slice(0, 3);

  return (
    <section id="aggiornamenti" className="section s-news">
      <div className="bg-photo" aria-hidden />

      <div className="inner">
        <div className="news-top">
          <Reveal className="news-eyebrow">
            <span className="dot" />
            <span className="num">03 / 03</span>
            <span>— Prossimamente</span>
          </Reveal>

          <h2 className="news-headline">
            <Reveal as="span" delay={1} className="l1">
              Prossima
            </Reveal>
            <Reveal as="span" delay={2} className="l2">
              mente
            </Reveal>
          </h2>
        </div>

        <div className="news-body">
          <Reveal delay={2} className="newsletter">
            <div className="newsletter-label">
              <span>✦ Newsletter</span>
              <span>00 / 248 iscritti</span>
            </div>
            <p className="newsletter-headline">
              Una mail quando il film esce. Niente di più, niente di meno.
            </p>
            <NewsletterForm />
            <span className="newsletter-fineprint">
              Una sola mail, all&apos;uscita del film. Nessun tracker.
            </span>
          </Reveal>

          <Reveal delay={3} className="news-list">
            {latest.length === 0 ? (
              <p className="news-row" style={{ cursor: "default", opacity: 0.6 }}>
                <span className="title">Nessun aggiornamento disponibile.</span>
              </p>
            ) : (
              latest.map((n) => (
                <Link key={n.slug} href={`/news/${n.slug}`} className="news-row">
                  <span className="date">{formatDate(n.date)}</span>
                  <span className="title">{n.title}</span>
                  <span className="arrow">LEGGI →</span>
                </Link>
              ))
            )}
            <div className="news-archive">
              <Link className="cta" href="/news">
                Archivio completo
                <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
