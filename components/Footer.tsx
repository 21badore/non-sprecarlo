export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="left">
        <span>© Salvatore Sardu Films — {new Date().getFullYear()}</span>
      </div>
      <div className="right">
        <a
          href="https://github.com/21badore/non-sprecarlo"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub →
        </a>
      </div>
    </footer>
  );
}
