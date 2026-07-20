import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { featuredArticle, trendingArticles, latestArticles, Article } from "@/lib/data";
import { ArticlesClient } from "./ArticlesClient";

export const metadata: Metadata = {
  title: "Industry News & Analysis — ReelPulse",
  description:
    "Read short drama industry news, platform deep dives, and market analysis from ReelPulse to track trends, growth, and the biggest stories shaping 2026.",
  openGraph: {
    title: "Industry News & Analysis — ReelPulse",
    description:
      "Read short drama industry news, platform deep dives, and market analysis from ReelPulse to track trends, growth, and the biggest stories shaping 2026.",
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
              Articles
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl">
              Deep dives, breaking news, and expert analysis on the micro-drama revolution.
            </p>
          </ScrollReveal>
        </section>

        <ArticlesClient articles={uniqueArticles} />
      </main>

      <Footer />
    </div>
  );
}
