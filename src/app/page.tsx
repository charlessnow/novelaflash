import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { StatsBanner } from "@/components/home/StatsBanner";
import { FeaturedArticle } from "@/components/home/FeaturedArticle";
import { TrendingSection } from "@/components/home/TrendingSection";
import { LatestNews } from "@/components/home/LatestNews";
import { PlatformRankings } from "@/components/home/PlatformRankings";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { IndustrySpotlight } from "@/components/home/IndustrySpotlight";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "NovelaFlash — El portal N°1 de Microdramas",
  description: "Tu pulso en la revolución del microdrama. Rankings de plataformas, reseñas y las mejores recomendaciones para ver series gratis como DramaBox, ReelShort y más.",
  alternates: {
    languages: {
      "en": "https://reelpulse.net/",
      "es-419": "https://novelaflash.com/",
    },
  },
};

export default function Home() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "NovelaFlash — Inteligencia de la Industria del Microdrama",
    description: metadata.description,
    url: SITE_URL,
    isPartOf: {
      "@type": "WebSite",
      name: "NovelaFlash",
      url: SITE_URL,
    },
    about: {
      "@type": "Thing",
      name: "Inteligencia de la industria de dramas cortos",
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={webPageSchema} />
      <Nav />
      
      <main className="flex-grow">
        <Hero />
        
        <StatsBanner />
        
        <ScrollReveal direction="up" className="max-w-7xl mx-auto">
          <FeaturedArticle />
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.2} className="max-w-7xl mx-auto">
          <TrendingSection />
        </ScrollReveal>
        
        <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <LatestNews />
          </div>
          <div className="lg:col-span-4 flex flex-col gap-12">
            <PlatformRankings />
            <NewsletterCTA />
          </div>
        </section>
        
        <ScrollReveal direction="up" className="max-w-7xl mx-auto">
          <IndustrySpotlight />
        </ScrollReveal>
      </main>
      
      <Footer />
    </div>
  );
}
