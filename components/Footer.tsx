export default function Footer() {
  return (
    <footer className="bg-[#1A1612] text-[#F5EFE6]/70 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <p className="font-mono-custom text-[11px] tracking-[0.2em] uppercase">
          © Salvatore Sardu Films · {new Date().getFullYear()}
        </p>

        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Link footer">
          {[
            { href: "#", label: "Instagram" },
            { href: "#", label: "Vimeo" },
            { href: "#", label: "IMDB" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono-custom text-[11px] tracking-[0.2em] uppercase hover:text-[#C75D3D] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:contatto@salvatoresardu.com"
          className="font-mono-custom text-[11px] tracking-[0.2em] uppercase hover:text-[#C75D3D] transition-colors duration-200"
        >
          contatto@salvatoresardu.com
        </a>
      </div>
    </footer>
  );
}
