import Link from "next/link";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import NewsletterForm from "@/components/NewsletterForm";
import { getAllNews } from "@/lib/news";

const TRAILER_URL = "https://vimeo.com/000000000"; // sostituisci con l'URL reale

export default async function Home() {
  const allNews = await getAllNews();
  const latest = allNews.slice(0, 3);

  return (
    <main>
      {/* SEZIONE 1 — IL FILM */}
      <Section
        id="film"
        bgImage="/images/film/film-04.png"
        bgAlt="Still del cortometraggio Non Sprecarlo: silhouette di profilo"
        bgPosition="center 30%"
        fadeHeight={62}
      >
        <Reveal as="p" className="font-mono-custom text-[11px] tracking-[0.3em] uppercase opacity-80 mb-6">
          Cortometraggio · 2026
        </Reveal>

        <Reveal as="h1" delay={1} className="font-display font-bold uppercase text-fluid-section mb-8 max-w-4xl">
          Non Sprecarlo
        </Reveal>

        <Reveal as="p" delay={2} className="font-display text-lg md:text-xl leading-relaxed max-w-2xl mb-10 opacity-90">
          Anno 2984. Il mondo sta finendo. Per davvero. Infatti stavolta non ci sono previsioni.
          Un essere, che di umano ha poco, vive nel suo loculo, dove nasce, muore e produce
          con quei pochi scarti che le vecchie generazioni hanno lasciato sulla terra.
          Parla con se stesso perché è l&apos;unica compagnia possibile. Anche se la sua voce non è sola.
        </Reveal>

        <Reveal delay={3} className="flex flex-wrap items-center gap-6">
          <a
            href={TRAILER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-mono-custom text-xs tracking-[0.25em] uppercase border-b border-white/60 pb-1 hover:border-[#C75D3D] hover:text-[#FFB088] transition-colors duration-200"
          >
            Guarda il corto
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <span className="font-mono-custom text-[11px] tracking-[0.2em] uppercase opacity-60">
            5&apos; · Regia di Salvatore Sardu
          </span>
        </Reveal>
      </Section>

      {/* SEZIONE 2 — DIETRO LE QUINTE / PRODUZIONE */}
      <Section
        id="produzione"
        bgImage="/images/film/film-02.png"
        bgAlt="Still dal cortometraggio: figura alla macchina da cucire"
        bgPosition="center 25%"
        fadeHeight={68}
      >
        <Reveal as="p" className="font-mono-custom text-[11px] tracking-[0.3em] uppercase opacity-80 mb-6">
          02 · La produzione
        </Reveal>

        <Reveal as="h2" delay={1} className="font-display font-bold uppercase text-fluid-section mb-10 max-w-3xl">
          Dietro le quinte
        </Reveal>

        <Reveal as="p" delay={2} className="font-display text-lg md:text-xl leading-relaxed max-w-2xl opacity-90 mb-12">
          Abbiamo costruito la scenografia. Registrato per due giorni interamente in interni.
          Tanti professionisti che ci hanno dato una mano. Cinema indipendente allo stato puro.
        </Reveal>

        <Reveal delay={3} className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 max-w-3xl">
          {[
            { label: "Anno", value: "2026" },
            { label: "Durata", value: "5'" },
            { label: "Formato", value: "2,39:1" },
            { label: "Regia", value: "Salvatore Sardu" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-mono-custom text-[10px] tracking-[0.25em] uppercase opacity-60 mb-2">
                {item.label}
              </p>
              <p className="font-display text-base md:text-lg">{item.value}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={3} className="mt-16 pt-8 border-t border-white/15 max-w-3xl">
          <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase opacity-60 mb-4">
            Hanno reso possibile il film
          </p>
          <p className="font-display text-base md:text-lg uppercase tracking-wide opacity-85">
            Weave · Moviepeople · SCPT
          </p>
        </Reveal>
      </Section>

      {/* SEZIONE 3 — AGGIORNAMENTI */}
      <Section
        id="aggiornamenti"
        bgImage="/images/film/film-05.png"
        bgAlt="Still dal cortometraggio: atmosfera rossa"
        bgPosition="center 30%"
        fadeHeight={70}
      >
        <Reveal as="p" className="font-mono-custom text-[11px] tracking-[0.3em] uppercase opacity-80 mb-6">
          03 · Aggiornamenti
        </Reveal>

        <Reveal as="h2" delay={1} className="font-display font-bold uppercase text-fluid-section mb-8 max-w-3xl">
          Prossimamente
        </Reveal>

        <Reveal as="p" delay={2} className="font-display text-lg md:text-xl leading-relaxed max-w-xl opacity-90 mb-10">
          Iscriviti per ricevere le selezioni festival, le date delle proiezioni
          e i nuovi progetti — niente di più.
        </Reveal>

        <Reveal delay={3} className="mb-16">
          <NewsletterForm />
        </Reveal>

        {latest.length > 0 && (
          <Reveal delay={3} className="pt-12 border-t border-white/15 max-w-3xl">
            <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase opacity-60 mb-6">
              Ultime news
            </p>
            <ul className="space-y-4">
              {latest.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/news/${n.slug}`}
                    className="group flex flex-col sm:flex-row sm:items-baseline sm:gap-6 hover:opacity-100 opacity-85 transition-opacity duration-200"
                  >
                    <time className="font-mono-custom text-[11px] tracking-[0.2em] uppercase opacity-60 sm:w-32 shrink-0">
                      {n.date}
                    </time>
                    <span className="font-display text-base md:text-lg group-hover:text-[#FFB088] transition-colors duration-200">
                      {n.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 font-mono-custom text-[11px] tracking-[0.25em] uppercase mt-8 border-b border-white/40 pb-1 hover:border-[#C75D3D] hover:text-[#FFB088] transition-colors duration-200"
            >
              Vedi tutti gli aggiornamenti
              <span>→</span>
            </Link>
          </Reveal>
        )}
      </Section>
    </main>
  );
}
