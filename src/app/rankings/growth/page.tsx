import React from "react";
import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export const metadata: Metadata = {
  title: "Short Drama Growth Metrics 2026 — ReelPulse",
  description: "Key growth metrics for the $26B short drama industry. Market size, revenue trends, user growth, and funding data updated quarterly.",
};

export default function GrowthMetrics() {
  const metrics = [
    { value: "~4x", label: "Q1 2025 vs Q1 2024 Revenue", context: "Q1 2025 global in-app revenue reached ~$700M, nearly 4x higher than Q1 2024 (Sensor Tower)." },
    { value: "$26B", label: "Global Market Size 2025", context: "Projected market capitalization of the short drama industry." },
    { value: "2.7M", label: "ReelShort DAU", context: "Leading active user base in the Western market." },
    { value: "$3M+", label: "Daily Spending (Top 3)", context: "Combined daily revenue of the top three global platforms." },
    { value: "156%", label: "ReelShort 2024 Revenue Growth", context: "Year-over-year revenue expansion for the market leader." },
    { value: "$4.3B", label: "Overseas Revenue 2024", context: "Revenue generated from Chinese short dramas in Western markets." }
  ];

  const milestones = [
    { year: "2022", event: "ReelShort launches", desc: "First dedicated vertical drama platform hits Western markets." },
    { year: "2023", event: "First $1M day", desc: "Single-day revenue across platforms crosses $1M milestone." },
    { year: "2024", event: "TIME 100", desc: "Short drama industry recognized by TIME 100 Most Influential Companies." },
    { year: "2025", event: "$26B market", desc: "Global industry reaches multi-billion dollar scale." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <Nav />

      <main className="flex-grow pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="mb-20">
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tight text-white mb-4">
              GROWTH METRICS
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl">
              Tracking the exponential rise of short-form entertainment through data.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {metrics.map((metric, i) => (
              <ScrollReveal key={metric.label} direction="up" delay={i * 0.1}>
                <div className="glass p-10 rounded-2xl border-white/5 h-full">
                  <span className="font-display font-black text-6xl text-rp-coral block mb-4 leading-none">
                    {metric.value}
                  </span>
                  <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-tight">{metric.label}</h4>
                  <p className="text-rp-text-muted text-sm leading-relaxed">{metric.context}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-16 text-center">Market Timeline</h2>
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/10 hidden md:block" />
              <div className="space-y-12">
                {milestones.map((ms, i) => (
                  <div key={ms.year} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                      <div className="card p-8 md:p-10 max-w-md w-full relative">
                        <span className="absolute -top-4 -left-4 font-display font-black text-6xl text-rp-coral/20">
                          {ms.year}
                        </span>
                        <h4 className="text-white font-bold text-xl mb-2 uppercase">{ms.event}</h4>
                        <p className="text-rp-text-secondary">{ms.desc}</p>
                      </div>
                    </div>
                    <div className="relative z-10 w-4 h-4 rounded-full bg-rp-coral shadow-[0_0_20px_rgba(244,63,94,0.5)] hidden md:block" />
                    <div className="w-full md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
