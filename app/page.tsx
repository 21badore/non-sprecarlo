import Image from "next/image";
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
      {/* SEZIONE 1 — IL FILM (layout editoriale, asimmetrico) */}
      <section
        id="film"
        className="relative min-h-screen w-full overflow-hidden text-white"
      >
        <Image
          src="/images/film/film-04.png"
          alt="Still di Non Sprecarlo: rubinetto, mano, bicchiere"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Velo sottile in alto, solo per leggibilità header */}
        <div
          className="absolute inset-x-0 top-0 h-28 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,10,7,0.55) 0%, rgba(15,10,7,0) 100%)",
          }}
          aria-hidden
        />

        {/* Velo basso forte: protegge SPRECARLO + CTA, lascia libero il centro */}
        <div
          className="absolute inset-x-0 bottom-0 z-0 pointer-events-none"
          style={{
            height: "55%",
            background:
              "linear-gradient(to top, rgba(15,10,7,0.93) 0%, rgba(15,10,7,0.78) 25%, rgba(15,10,7,0.35) 65%, rgba(15,10,7,0) 100%)",
          }}
          aria-hidden
        />

        {/* Marca verticale decorativa, solo desktop xl */}
        <div
          className="hidden xl:block absolute top-32 right-12 z-10 font-mono-custom text-[10px] tracking-[0.5em] uppercase opacity-50"
          style={{ writingMode: "vertical-rl" }}
          aria-hidden
        >
          MMXXVI · Salvatore Sardu Films
        </div>

        {/* Layout: 5 righe, riga 3 (1fr) per far respirare la foto */}
        <div className="relative z-10 min-h-screen px-6 md:px-12 pt-24 pb-6 grid grid-rows-[auto_auto_1fr_auto_auto] gap-y-5">
          {/* row 1: eyebrow */}
          <Reveal
            as="p"
            className="row-start-1 font-mono-custom text-[11px] tracking-[0.3em] uppercase opacity-80"
          >
            <span className="inline-block w-6 h-px bg-white/60 align-middle mr-3" />
            Cortometraggio · 2026
          </Reveal>

          {/* h1 con display:contents: i due span partecipano direttamente alla grid */}
          <h1 aria-label="Non Sprecarlo" style={{ display: "contents" }}>
            <Reveal
              as="span"
              delay={1}
              className="row-start-2 font-display font-bold uppercase"
              style={{
                fontSize: "clamp(4.5rem, 13vw, 12rem)",
                lineHeight: 0.85,
                letterSpacing: "-0.045em",
              }}
            >
              Non
            </Reveal>
            <Reveal
              as="span"
              delay={2}
              className="row-start-4 font-display font-bold uppercase"
              style={{
                fontSize: "clamp(4rem, 17vw, 16rem)",
                lineHeight: 0.85,
                letterSpacing: "-0.05em",
              }}
            >
              Sprecarlo
            </Reveal>
          </h1>

          {/* row 3: body copy ancorato in basso */}
          <Reveal
            as="p"
            delay={2}
            className="row-start-3 self-end font-display text-sm md:text-[15px] leading-relaxed opacity-95 md:max-w-[34ch]"
          >
            Anno 2984. Il mondo sta finendo. Per davvero. Infatti stavolta non ci sono previsioni.
            Un essere, che di umano ha poco, vive nel suo loculo, dove nasce, muore e produce
            con quei pochi scarti che le vecchie generazioni hanno lasciato sulla terra.
            Parla con se stesso perché è l&apos;unica compagnia possibile. Anche se la sua voce non è sola.
          </Reveal>

          {/* row 5: striscia CTA */}
          <Reveal
            delay={3}
            className="row-start-5 border-t border-white/25 pt-4 md:pt-5 flex flex-wrap items-center justify-between gap-4"
          >
            <a
              href={TRAILER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-mono-custom text-xs tracking-[0.25em] uppercase border-b border-white/60 pb-1 hover:border-[#C75D3D] hover:text-[#FFB088] transition-colors duration-200"
            >
              Guarda il corto
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <span className="font-mono-custom text-[11px] tracking-[0.2em] uppercase opacity-60">
              5&apos; · Regia di Salvatore Sardu
            </span>
          </Reveal>
        </div>
      </section>

      {/* SEZIONE 2 — DIETRO LE QUINTE (titolo spezzato su due righe sfalsate) */}
      <Section
        id="produzione"
        bgImage="/images/film/film-02.png"
        bgAlt="Still dal cortometraggio: dettaglio in tonalità rossa"
        bgPosition="left center"
        fadeHeight={70}
      >
        <Reveal
          as="p"
          className="font-mono-custom text-[11px] tracking-[0.3em] uppercase opacity-80 mb-6"
        >
          <span className="inline-block w-6 h-px bg-white/60 align-middle mr-3" />
          02 · La produzione
        </Reveal>

        <h2
          className="font-display font-bold uppercase mb-10 text-right"
          style={{
            fontSize: "clamp(3rem, 11vw, 11rem)",
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
          }}
        >
          <Reveal as="span" delay={1} className="block">
            Dietro
          </Reveal>
          <Reveal as="span" delay={2} className="block md:mr-[3vw]">
            le quinte
          </Reveal>
        </h2>

        <Reveal
          as="p"
          delay={2}
          className="font-display text-base md:text-lg leading-relaxed max-w-2xl opacity-95 mb-12"
        >
          Abbiamo costruito la scenografia. Registrato per due giorni interamente in interni.
          Tanti professionisti che ci hanno dato una mano. Cinema indipendente allo stato puro.
        </Reveal>

        <Reveal
          delay={3}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 max-w-3xl border-t border-white/20 pt-6"
        >
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

        <Reveal delay={3} className="mt-12 pt-6 border-t border-white/15 max-w-3xl">
          <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase opacity-60 mb-3">
            Hanno reso possibile il film
          </p>
          <p className="font-display text-base md:text-lg uppercase tracking-wide opacity-85">
            Weave · Moviepeople · SCPT
          </p>
        </Reveal>
      </Section>

      {/* SEZIONE 3 — PROSSIMAMENTE (titolo spezzato in due sillabe) */}
      <Section
        id="aggiornamenti"
        bgImage="/images/film/film-05.png"
        bgAlt="Still di Non Sprecarlo: figura alla macchina da cucire"
        bgPosition="left center"
        fadeHeight={75}
      >
        <Reveal
          as="p"
          className="font-mono-custom text-[11px] tracking-[0.3em] uppercase opacity-80 mb-6"
        >
          <span className="inline-block w-6 h-px bg-white/60 align-middle mr-3" />
          03 · Aggiornamenti
        </Reveal>

        <h2
          className="font-display font-bold uppercase mb-10 text-right"
          style={{
            fontSize: "clamp(3rem, 11vw, 11rem)",
            lineHeight: 0.85,
            letterSpacing: "-0.045em",
          }}
        >
          <Reveal as="span" delay={1} className="block">
            Prossima
          </Reveal>
          <Reveal as="span" delay={2} className="block md:mr-[3vw]">
            mente
          </Reveal>
        </h2>

        <Reveal
          as="p"
          delay={2}
          className="font-display text-base md:text-lg leading-relaxed max-w-xl opacity-95 mb-10"
        >
          Iscriviti per ricevere le selezioni festival, le date delle proiezioni
          e i nuovi progetti — niente di più.
        </Reveal>

        <Reveal delay={3} className="mb-14">
          <NewsletterForm />
        </Reveal>

        {latest.length > 0 && (
          <Reveal delay={3} className="pt-10 border-t border-white/15 max-w-3xl">
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
