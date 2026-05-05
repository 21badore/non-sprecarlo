import Image from "next/image";

interface SectionProps {
  id: string;
  bgImage: string;
  bgAlt: string;
  bgPosition?: string;
  /**
   * - "bottom": testo ancorato al fondo, gradiente verticale (default).
   * - "right": testo ancorato a destra (md+), gradiente da destra che lascia libero il lato sinistro della foto.
   */
  variant?: "bottom" | "right";
  /** Quanto si estende il gradiente di leggibilità (0–100). Default 65. */
  fadeHeight?: number;
  children: React.ReactNode;
}

export default function Section({
  id,
  bgImage,
  bgAlt,
  bgPosition = "center",
  variant = "bottom",
  fadeHeight = 65,
  children,
}: SectionProps) {
  const isRight = variant === "right";

  const bottomGradient =
    "linear-gradient(to top, rgba(15,10,7,0.94) 0%, rgba(15,10,7,0.85) 20%, rgba(15,10,7,0.55) 50%, rgba(15,10,7,0.18) 80%, rgba(15,10,7,0) 100%)";

  const rightGradient =
    "linear-gradient(to left, rgba(15,10,7,0.94) 0%, rgba(15,10,7,0.85) 25%, rgba(15,10,7,0.55) 55%, rgba(15,10,7,0.15) 85%, rgba(15,10,7,0) 100%)";

  return (
    <section
      id={id}
      className={`relative min-h-screen w-full flex overflow-hidden text-white ${
        isRight
          ? "items-end md:items-center justify-start md:justify-end"
          : "items-end justify-start"
      }`}
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

      {/* Gradiente per leggibilità del testo: bottom su mobile, side su md+ se variant=right */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 pointer-events-none md:hidden"
        style={{ height: `${fadeHeight}%`, background: bottomGradient }}
        aria-hidden
      />
      {!isRight && (
        <div
          className="absolute inset-x-0 bottom-0 -z-10 pointer-events-none hidden md:block"
          style={{ height: `${fadeHeight}%`, background: bottomGradient }}
          aria-hidden
        />
      )}
      {isRight && (
        <div
          className="absolute inset-y-0 right-0 -z-10 pointer-events-none hidden md:block"
          style={{ width: "62%", background: rightGradient }}
          aria-hidden
        />
      )}

      <div
        className={`relative w-full mx-auto px-6 md:px-12 pt-32 pb-20 md:pb-28 ${
          isRight ? "md:max-w-2xl md:mr-12 md:ml-auto md:pb-12" : "max-w-6xl"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
