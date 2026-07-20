import React from "react";
import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Short Drama Creator Economy — ReelPulse",
  description: "How to earn money in the short drama industry. Script writing, directing, voice acting — earning potential and how to get started.",
};

export default function CreatorEconomyPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Short Drama Creator Economy — ReelPulse",
    description:
      "How to earn money in the short drama industry. Script writing, directing, voice acting — earning potential and how to get started.",
    url: `${SITE_URL}/industry/creator-economy`,
  };

  const roles = [
    {
      role: "Script Writers",
      income: "$500-$5,000 per script",
      description: "Writing 1-2 minute cliffhanger-driven episodes. High demand for romance and revenge plots.",
    },
    {
      role: "Directors",
      income: "$2,000-$15,000 per project",
      description: "Managing tight 7-10 day production schedules for a full 60-100 episode series.",
    },
    {
      role: "Voice Actors",
      income: "$100-$1,000 per episode",
      description: "Dubbing content for global audiences. AI tools are increasing speed, but emotional performance remains human-led.",
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Choose your role",
      description: "Identify where your skills fit in the production pipeline — writing, acting, or directing.",
    },
    {
      step: 2,
      title: "Study top-performing content",
      description: "Analyze the first 10 episodes of trending dramas. Understand the 'hook' and 'cliffhanger' structure.",
    },
    {
      step: 3,
      title: "Submit to platforms",
      description: "Reach out to studio partners for major apps like ReelShort and DramaBox with your portfolio.",
    },
    {
      step: 4,
      title: "Scale with AI tools",
      description: "Use productivity-enhancing AI tools for script brainstorming, storyboarding, and rapid editing.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={webPageSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <ScrollReveal direction="up">
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tight text-white mb-6">
              Creator Economy
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl mx-auto">
              How a new generation of artists is monetizing the vertical screen.
            </p>
          </ScrollReveal>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-3xl text-white uppercase tracking-wider mb-12 italic">
              Earning Potential
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {roles.map((role, i) => (
                <div key={role.role} className="card p-10 flex flex-col h-full border-white/5 bg-rp-bg-card relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rp-coral/5 blur-3xl group-hover:bg-rp-coral/10 transition-colors" />
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{role.role}</h3>
                  <div className="text-3xl font-display font-black text-rp-coral mb-8 uppercase italic tracking-tight">{role.income}</div>
                  <p className="text-rp-text-secondary leading-relaxed mb-10">{role.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section className="max-w-4xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-3xl text-white uppercase tracking-wider mb-12 italic text-center">
              How to Get Started
            </h2>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-8 items-start p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-rp-coral/30 transition-colors group">
                  <div className="w-16 h-16 rounded-full bg-rp-coral flex items-center justify-center font-display font-black text-2xl text-white shrink-0 group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight font-display italic">
                      {step.title}
                    </h3>
                    <p className="text-rp-text-secondary text-lg leading-relaxed">
                      {step.description}
                    </p>
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
