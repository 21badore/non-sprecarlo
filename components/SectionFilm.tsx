import Reveal from "./Reveal";
import TimeTicker from "./TimeTicker";

const TRAILER_URL = "https://vimeo.com/000000000"; // sostituisci con l'URL reale

export default function SectionFilm() {
  return (
    <section id="film" className="section s-film">
      <div className="bg" />
      <div className="scanline" />

      <div className="frame">
        <Reveal className="film-markers">
          <div className="left">
            <span className="ticker">REC · CORTOMETRAGGIO</span>
            <span>2,39 : 1 · ANAMORFICO</span>
          </div>
          <div className="right">
            <TimeTicker />
            <span>FRAME 01 / 03</span>
          </div>
        </Reveal>

        <h1 aria-label="Non Sprecarlo" style={{ display: "contents" }}>
          <Reveal as="span" delay={1} className="film-title-top">
            <span className="title-line non">Non</span>
          </Reveal>

          <div className="film-middle">
            <Reveal as="p" delay={2} className="film-synopsis">
              Anno <em>2984</em>. Il mondo sta finendo. Per davvero.<br />
              Un essere, che di umano ha poco, vive nel suo loculo, dove
              nasce, muore e produce con quei pochi scarti che le vecchie generazioni hanno
              lasciato sulla terra. Parla con se stesso perché è l&apos;unica compagnia possibile.
              Anche se la sua voce non è sola.
            </Reveal>

            <Reveal delay={3} className="film-cta-row">
              <div className="meta-row">
                <span>5 MIN</span>
                <span>·</span>
                <span>REGIA DI S. SARDU</span>
              </div>
              <a className="cta" href={TRAILER_URL} target="_blank" rel="noopener noreferrer">
                Guarda il corto
                <span className="arrow">→</span>
              </a>
            </Reveal>
          </div>

          <Reveal as="span" delay={1} className="film-title-bottom">
            <span className="title-line sprecarlo">Sprecarlo</span>
          </Reveal>
        </h1>
      </div>
    </section>
  );
}
