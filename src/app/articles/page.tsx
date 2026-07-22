import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { featuredArticle, trendingArticles, latestArticles, Article } from "@/lib/data";
import { ArticlesClient } from "./ArticlesClient";

export const metadata: Metadata = {
  title: "Noticias y Análisis de la Industria — NovelaFlash",
  description:
    "Lee noticias de la industria de las miniseries, análisis a fondo de plataformas y estudios de mercado de NovelaFlash para seguir las tendencias, el crecimiento y las historias más importantes que están definiendo el 2026.",
  openGraph: {
    title: "Noticias y Análisis de la Industria — NovelaFlash",
    description:
      "Lee noticias de la industria de las miniseries, análisis a fondo de plataformas y estudios de mercado de NovelaFlash para seguir las tendencias, el crecimiento y las historias más importantes que están definiendo el 2026.",
  },
};

export default function ArticlesPage() {
  const allArticles: Article[] = [
    featuredArticle,
    ...trendingArticles,
    ...latestArticles
  ];

  const uniqueArticles = Array.from(new Map(allArticles.map(item => [item.slug, item])).values());

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <Nav />

      <main className="flex-grow pt-32">
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <ScrollReveal direction="up">
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6">
              Artículos
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl">
              Análisis a fondo, noticias de última hora y opinión experta sobre la revolución del microdrama.
            </p>
          </ScrollReveal>
        </section>

        <ArticlesClient articles={uniqueArticles} />
      </main>

      <Footer />
    </div>
  );
}
