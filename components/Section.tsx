import Image from "next/image";

interface SectionProps {
  id: string;
  bgImage: string;
  bgAlt: string;
  bgPosition?: string;
  children: React.ReactNode;
  /** Quanto in alto sale il gradiente di leggibilità dal fondo (0–100). Default 65. */
  fadeHeight?: number;
}

export default function Section({
  id,
  bgImage,
  bgAlt,
  bgPosition = "center",
  fadeHeight = 65,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen w-full flex items-end justify-start text-white overflow-hidden"
    >
      <Image
        src={bgImage}
        alt={bgAlt}
        fill
        priority={id === "film"}
        className="object-cover -z-10"
        style={{ objectPosition: bgPosition }}
        sizes="100vw"
      />

      {/* Velo leggero in alto, solo per leggibilità dell'header */}
      <div
        className="absolute inset-x-0 top-0 h-28 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,10,7,0.55) 0%, rgba(15,10,7,0.15) 70%, rgba(15,10,7,0) 100%)",
        }}
        aria-hidden
      />

      {/* Gradiente forte in basso: protegge il copy senza scurire la foto */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 pointer-events-none"
        style={{
          height: `${fadeHeight}%`,
          background:
            "linear-gradient(to top, rgba(15,10,7,0.94) 0%, rgba(15,10,7,0.85) 20%, rgba(15,10,7,0.55) 50%, rgba(15,10,7,0.18) 80%, rgba(15,10,7,0) 100%)",
        }}
        aria-hidden
      />

      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-20 md:pb-28">
        {children}
      </div>
    </section>
  );
}
