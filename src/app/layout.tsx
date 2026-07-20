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
  title: "NovelaFlash — Your Pulse on the Short Drama Revolution",
  description:
    "Industry intelligence for the $26B micro-drama market. Platform reviews, rankings, creator guides, and breaking news on ReelShort, DramaBox, and the global short drama ecosystem.",
  keywords: [
    "short drama",
    "micro drama",
    "ReelShort",
    "DramaBox",
    "short drama apps",
    "short drama news",
  ],
  openGraph: {
    title: "NovelaFlash — Short Drama Industry Intelligence",
    description:
      "Your pulse on the $26B micro-drama revolution. Reviews, rankings, and breaking industry news.",
    type: "website",
    locale: "en_US",
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'NovelaFlash — Your Pulse on the Short Drama Revolution' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NovelaFlash",
    description: "Your pulse on the short drama revolution.",
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
          "NovelaFlash delivers short drama industry intelligence with platform reviews, rankings, creator guides, and market analysis across the global micro-drama ecosystem.",
      },
      {
        "@type": "WebSite",
        name: "NovelaFlash",
        url: SITE_URL,
      },
    ],
  };

  return (
    <html
      lang="en"
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
