import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jost = Jost({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Non Sprecarlo — Salvatore Sardu Films",
  description:
    "Cortometraggio di Salvatore Sardu. Anno 2984: un essere vive nel suo loculo, parlando con se stesso, mentre il mondo finisce.",
  openGraph: {
    title: "Non Sprecarlo — Salvatore Sardu Films",
    description:
      "Cortometraggio di Salvatore Sardu. Anno 2984: un essere vive nel suo loculo, parlando con se stesso, mentre il mondo finisce.",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={jost.variable}>
      <body className="font-display">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
