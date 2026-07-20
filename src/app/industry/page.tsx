import React from "react";
import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { IndustryArticleList } from "@/components/home/IndustryArticleList";
import { stats, latestArticles, trendingArticles, industrySpotlights } from "@/lib/data";
import Link from "@/components/ui/InternalLink";

export const metadata: Metadata = {
  title: "Short Drama Industry Analysis — ReelPulse",
  description: "Data-driven analysis of the global micro-drama market. Market reports, AI trends, global expansion, and creator economy insights.",
};

export default function IndustryPage() {
  const allAnalysis = [...latestArticles, ...trendingArticles].filter(
    (a) => a.category === "Industry Analysis" || a.category === "Global Markets" || a.category === "Funding" || a.category === "AI & Tech" || a.category === "Platform News"
  );

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <Nav />

      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6">
              Industry
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl">
              Data, analysis, and intelligence from the $26B micro-drama market.
            </p>
          </ScrollReveal>
        </section>

        {/* Market Overview */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-display font-black text-3xl text-white uppercase tracking-wider mb-10 italic">
              Market Overview
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={stat.label} className="card p-8 flex flex-col gap-4 border-white/5 bg-rp-bg-card/50 backdrop-blur-sm">
                  <span className="text-[10px] text-rp-text-muted uppercase font-black tracking-widest">{stat.label}</span>
                  <div className="flex items-end justify-between">
                    <span className="text-4xl font-display font-black text-white leading-none">{stat.value}</span>
                    <span className={`text-xs font-bold ${stat.trend === 'up' ? 'text-rp-green' : 'text-rp-coral'}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Q3 2026 Trends Prediction */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="glass p-10 rounded-3xl border-l-4 border-l-rp-coral bg-gradient-to-r from-rp-coral/5 to-transparent">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-rp-coral text-white text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase">Mid-2026 Update</span>
                <h2 className="font-display font-black text-2xl text-white uppercase tracking-wider">Q3 2026 Industry Forecast</h2>
              </div>
              <p className="text-rp-text-secondary text-base leading-relaxed max-w-4xl">
                As we move into Q3 2026, ReelPulse analysts predict a massive surge in localized production outside of China. Look for intense competition in the <span className="text-white font-bold">Southeast Asian BL market</span> and a rapid integration of <span className="text-white font-bold">AI dubbing technologies</span>, drastically reducing localization costs for top platforms like ReelShort and DramaBox.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Latest Analysis */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-3xl text-white uppercase tracking-wider mb-10 italic">
              Latest Analysis
            </h2>
            <IndustryArticleList articles={allAnalysis} />
          </ScrollReveal>
        </section>

        {/* Industry Spotlights */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-3xl text-white uppercase tracking-wider mb-10 italic">
              Industry Spotlights
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {industrySpotlights.map((spotlight, i) => (
                <div key={spotlight.slug} className="card-glow rounded-3xl overflow-hidden group">
                  <div className={`p-10 h-full min-h-[400px] bg-gradient-to-br border border-white/5 flex flex-col relative
                    ${i === 0 ? 'from-rose-600/10 to-red-900/20' : 
                      i === 1 ? 'from-pink-600/10 to-rose-900/20' : 
                      'from-amber-600/10 to-orange-900/20'}`}
                  >
                    <div className="mb-8 group-hover:scale-110 transition-transform">
                      <img
                        src={`/images/spotlights/${spotlight.slug}.png`}
                        alt={spotlight.title}
                        className="w-16 h-16 object-contain rounded-2xl"
                      />
                    </div>
                    <h3 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-4">
                      {spotlight.title}
                    </h3>
                    <p className="text-rp-text-secondary text-base leading-relaxed mb-10">
                      {spotlight.description}
                    </p>
                    <div className="mt-auto">
                      <Link href={`/industry/${spotlight.slug}`} className="group/link inline-flex items-center gap-3 font-display font-bold text-white uppercase tracking-widest text-xs">
                        View Insight <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/link:border-rp-coral group-hover/link:bg-rp-coral transition-all"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-32">
          <NewsletterCTA />
        </section>
      </main>

      <Footer />
    </div>
  );
}
