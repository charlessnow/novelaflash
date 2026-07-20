import React from "react";
import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { platforms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Top 100 Short Drama Apps 2026 — NovelaFlash",
  description: "The most comprehensive ranking of short drama apps worldwide. Discover the best platforms for micro-dramas, scored across content, UX, and value.",
};

export default function Top100Apps() {
  const morePlatforms = [
    { name: "GoodShort", icon: "/platforms/goodshort.png", score: 7.2, desc: "Curated short drama hub with consistently strong App Store ratings. Known for cinematic quality, established industry talent, and balanced storytelling across romance, suspense, and fantasy genres.", category: "Growth" },
    { name: "ShortMax", icon: "/platforms/shortmax.png", score: 7.0, desc: "High-quality visual production with polished content. Popular for werewolf and billionaire romance genres. App Store rated 4.5+ stars with growing global user base.", category: "Growth" },
    { name: "DramaWave", icon: "/platforms/dramawave.png", score: 6.8, desc: "Library of 30,000+ dramas across 17 languages. Features on-screen comments and offline viewing. Identified by Sensor Tower as one of the fastest-growing newcomers in 2025.", category: "Emerging" },
    { name: "PineDrama", icon: "/platforms/pinedrama.png", score: 6.5, desc: "TikTok's microdrama app launched in the US and Brazil. Fully ad-free with no paywall — one of the few completely free short drama platforms. HD full-screen format with crisp audio.", category: "Emerging" },
    { name: "DreameShort", icon: "/platforms/dreameshort.png", score: 6.3, desc: "Next-gen mini-drama streaming platform by Dreame (Bytedance ecosystem). Specializes in forbidden love, supernatural romances, arranged marriages, and secret heiress storylines.", category: "Emerging" },
  ];

  const allApps = [
    ...platforms.map((p, i) => ({ ...p, rank: i + 1 })),
    ...morePlatforms.map((p, i) => ({ 
      slug: p.name.toLowerCase().replace(/\s/g, ""), 
      name: p.name, 
      icon: p.icon,
      score: p.score, 
      description: p.desc, 
      rank: i + 6,
      category: p.category,
    }))
  ];

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <Nav />

      <main className="flex-grow pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="mb-20">
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tight text-white mb-4">
              TOP 100 APPS
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl">
              The definitive power ranking of short drama platforms based on downloads, retention, and content quality.
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            {allApps.map((app) => (
              <ScrollReveal key={app.name} direction="up">
                <div className="card card-glow p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex items-center gap-6 flex-grow">
                    <span className="font-display font-black text-4xl text-white/10 w-12 text-center">
                      {app.rank.toString().padStart(2, '0')}
                    </span>
                    
                    {app.icon ? (
                      <img
                        src={app.icon}
                        alt={app.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-2xl object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rp-bg-secondary to-rp-bg-elevated border border-white/5 flex items-center justify-center font-display font-black text-2xl text-white">
                        {app.name.charAt(0)}
                      </div>
                    )}
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-white uppercase">{app.name}</h3>
                        <div className="badge badge-coral text-[10px] py-0.5">{app.category}</div>
                      </div>
                      <p className="text-rp-text-secondary text-sm line-clamp-1 max-w-xl">
                        {app.description}
                      </p>
                    </div>
                  </div>

                  <div className="w-full md:w-64 flex flex-col gap-2">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-rp-text-muted">Score</span>
                      <span className="font-display font-black text-2xl text-rp-coral leading-none">{app.score.toFixed(1)}</span>
                    </div>
                    <div className="score-bar w-full">
                      <div className="score-bar-fill" style={{ width: `${app.score * 10}%` }} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
