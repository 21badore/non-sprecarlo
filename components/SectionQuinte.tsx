import Image from "next/image";
import Reveal from "./Reveal";

export default function SectionQuinte() {
  return (
    <section id="produzione" className="section s-quinte">
      <div className="quinte-grid">
        <div className="quinte-top">
          <Reveal as="figure" className="quinte-photo-top">
            <Image
              src="/images/film/film-06.png"
              alt="Still dal film — close-up"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <figcaption className="photo-meta">
              <span>Still / film-06</span>
              <span>S. SARDU · 2026</span>
            </figcaption>
          </Reveal>

          <div className="quinte-top-right">
            <Reveal className="quinte-eyebrow">
              <span className="num">02 / 03</span>
              <span className="label">— Dietro le quinte</span>
            </Reveal>

            <h2 className="quinte-headline">
              <Reveal as="span" delay={1} className="l1">
                Dietro
              </Reveal>
              <Reveal as="span" delay={2} className="l2">
                le quinte
              </Reveal>
            </h2>
          </div>
        </div>

        <div className="quinte-body">
          <Reveal as="figure" delay={2} className="quinte-photo">
            <Image
              src="/images/film/film-02.png"
              alt="Still dal film — atmosfera rossa"
              fill
              sizes="(max-width: 900px) 100vw, 60vw"
              style={{ objectFit: "cover" }}
            />
            <figcaption className="photo-meta">
              <span>Still / film-02</span>
              <span>S. SARDU · 2026</span>
            </figcaption>
          </Reveal>

          <div className="quinte-right">
            <Reveal as="p" delay={2} className="quinte-paragraph">
              Cinque minuti girati in <strong>2,39:1 anamorfico</strong>, in un loculo
              ricostruito sul set. Niente CGI: solo luce praticabile, scarti veri, e un
              lavoro di set design che ha trasformato lo spazio in un personaggio.
              Un cortometraggio di ricerca — sobrio, claustrofobico, post-apocalittico.
            </Reveal>

            <Reveal delay={3} className="tech-sheet">
              <div className="row"><span className="k">Anno</span><span className="v">2026</span></div>
              <div className="row"><span className="k">Durata</span><span className="v">5 minuti</span></div>
              <div className="row"><span className="k">Formato</span><span className="v">2,39 : 1</span></div>
              <div className="row"><span className="k">Genere</span><span className="v">Sci-fi · Distopia</span></div>
              <div className="row"><span className="k">Lingua</span><span className="v">Italiano</span></div>
              <div className="row"><span className="k">Regia</span><span className="v">Salvatore Sardu</span></div>
            </Reveal>

            <Reveal delay={4} className="sponsors">
              <span className="label">— con il supporto di</span>
              <div className="marks">
                <span>Weave</span>
                <span>Moviepeople</span>
                <span>SCPT</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
