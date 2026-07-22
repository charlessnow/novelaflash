import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://novelaflash.com'),
  title: "NovelaFlash — Tu Pulso en la Revolución del Microdrama",
  description:
    "Inteligencia de la industria para el mercado de microdramas de $26B. Reseñas de plataformas, rankings, guías para creadores y noticias de última hora sobre ReelShort, DramaBox y el ecosistema global de dramas cortos.",
  keywords: [
    "microdrama",
    "dramas cortos",
    "ReelShort",
    "DramaBox",
    "aplicaciones de miniseries",
    "noticias de microdramas",
  ],
  openGraph: {
    title: "NovelaFlash — Inteligencia de la Industria del Microdrama",
    description:
      "Tu pulso en la revolución del microdrama de $26B. Reseñas, rankings y noticias de última hora de la industria.",
    type: "website",
    locale: "es_419",
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'NovelaFlash — Tu Pulso en la Revolución del Microdrama' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NovelaFlash",
    description: "Tu pulso en la revolución del microdrama.",
    images: ['/og.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationAndWebsiteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "NovelaFlash",
        url: SITE_URL,
        description:
          "NovelaFlash ofrece inteligencia de la industria de dramas cortos con reseñas de plataformas, rankings, guías para creadores y análisis de mercado en todo el ecosistema global de microdramas.",
      },
      {
        "@type": "WebSite",
        name: "NovelaFlash",
        url: SITE_URL,
        inLanguage: "es-419",
      },
    ],
  };

  return (
    <html
      lang="es"
      className={`${inter.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="noise min-h-full flex flex-col">
        <JsonLd data={organizationAndWebsiteSchema} />
        {children}
        <GoogleAnalytics gaId="G-46W8F8HNHY" />
      </body>
    </html>
  );
}
