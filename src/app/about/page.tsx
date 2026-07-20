import React from "react";
import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About NovelaFlash — Short Drama Industry Intelligence",
  description: "NovelaFlash is the definitive source for short drama industry intelligence. Platform reviews, market analysis, and creator resources.",
};

export default function AboutPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "NovelaFlash",
    description:
      "NovelaFlash is the definitive source for short drama industry intelligence. Platform reviews, market analysis, and creator resources.",
    url: `${SITE_URL}/about`,
  };

  const coverage = [
    { title: "Platform Reviews", description: "In-depth analysis of the apps leading the revolution." },
    { title: "Industry Analysis", description: "Market data and strategic insights for professionals." },
    { title: "Creator Resources", description: "Helping a new generation of talent master the vertical screen." },
    { title: "Market Data", description: "Live tracking of revenue, downloads, and growth metrics." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={aboutPageSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <ScrollReveal direction="up">
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tight text-white mb-6">
              About
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl mx-auto italic uppercase tracking-[0.2em] text-rp-coral">
              NovelaFlash
            </p>
          </ScrollReveal>
        </section>

        <section className="max-w-4xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <p className="text-white text-3xl md:text-5xl font-display font-black uppercase tracking-tight leading-[1.1] mb-12">
              NovelaFlash is the definitive source for short drama industry intelligence, tracking the evolution of the $26B micro-entertainment economy.
            </p>
            <p className="text-rp-text-secondary text-xl leading-relaxed mb-10">
              We provide the data, analysis, and deep dives required to understand how vertical cinema is reshaping the global media landscape. From the studios in Beijing to the growing audiences in North America, we are the pulse of this revolution.
            </p>
          </ScrollReveal>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-3xl text-white uppercase tracking-wider mb-12 italic">
              What We Cover
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coverage.map((item, i) => (
                <div key={item.title} className="card p-10 flex flex-col h-full border-white/5 bg-rp-bg-card relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rp-coral/5 blur-3xl group-hover:bg-rp-coral/10 transition-colors" />
                  <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight font-display italic group-hover:text-rp-coral transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-rp-text-secondary text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section className="max-w-4xl mx-auto px-6 mb-32 text-center py-20 bg-rp-bg-card/30 rounded-3xl border border-white/5 backdrop-blur-sm">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-3xl text-white uppercase tracking-wider mb-8 italic">
              Our Team
            </h2>
            <p className="text-rp-text-secondary text-xl leading-relaxed max-w-2xl mx-auto">
              NovelaFlash is an independent editorial team covering the $26B micro-drama industry.
            </p>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
