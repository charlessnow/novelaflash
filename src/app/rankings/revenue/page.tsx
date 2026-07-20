import React from "react";
import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { platforms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Short Drama Revenue Leaders 2026 — ReelPulse",
  description: "Which short drama apps generate the most revenue? Data-driven analysis of ReelShort, DramaBox, and the top-earning micro-drama platforms.",
};

export default function RevenueLeaders() {
  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <Nav />

      <main className="flex-grow pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="mb-20">
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tight text-white mb-4">
              REVENUE LEADERS
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl">
              Mapping the financial landscape of the $26B micro-drama industry.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 mb-20">
            {platforms.map((platform, index) => (
              <ScrollReveal key={platform.slug} direction="up" delay={index * 0.1}>
                <div className="card card-glow p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-8">
                    <img
                      src={platform.icon}
                      alt={platform.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-2xl object-cover"
                    />
                    <div>
                      <h3 className="text-3xl font-bold text-white uppercase mb-2">{platform.name}</h3>
                      <div className="flex gap-6">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-rp-text-muted uppercase font-black tracking-widest">Downloads</span>
                          <span className="text-lg font-bold text-white/80">{platform.downloads}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-rp-text-muted uppercase font-black tracking-widest">Growth</span>
                          <span className="text-lg font-bold text-rp-green">+156%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center md:text-right">
                    <span className="text-xs font-bold uppercase tracking-widest text-rp-text-muted block mb-1">Estimated Annual Revenue</span>
                    <span className="font-display font-black text-6xl text-rp-coral">{platform.revenue}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up">
            <div className="glass p-10 rounded-3xl border-rp-coral/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rp-coral/5 blur-[80px] rounded-full" />
              <h2 className="font-display font-bold text-3xl text-white uppercase tracking-tight mb-6">Key Insight</h2>
              <p className="text-rp-text-secondary text-xl leading-relaxed max-w-4xl">
                The top 3 platforms now command over <span className="text-white font-bold">$3M per day</span> in consumer spending. This reflects a fundamental shift in entertainment consumption, where users are increasingly willing to pay for bite-sized, high-emotion vertical content over traditional long-form subscriptions.
              </p>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
