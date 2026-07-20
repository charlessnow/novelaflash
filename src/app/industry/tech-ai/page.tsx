import React from "react";
import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI in Short Dramas — Technology Trends — ReelPulse",
  description: "How AI is transforming short drama production. From AI-generated scripts to automated video, explore the technology reshaping micro-entertainment.",
};

export default function TechAIPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI in Short Dramas — Technology Trends — ReelPulse",
    description:
      "How AI is transforming short drama production. From AI-generated scripts to automated video, explore the technology reshaping micro-entertainment.",
    url: `${SITE_URL}/industry/tech-ai`,
  };

  const timeline = [
    {
      year: "2024",
      milestone: "First AI micro-drama 'Chopping Waves' on Kuaishou",
      description: "A pivotal moment where AI-generated content proved viable for mass consumption in the vertical format.",
    },
    {
      year: "2025",
      milestone: "China releases first AI sci-fi series",
      description: "State-backed media enterprises pivot toward AI to reduce cost and increase production speed for high-concept sci-fi.",
    },
    {
      year: "2026",
      milestone: "StoReel raises $34M for AI-native production",
      description: "Venture capital floods into platforms that prioritize AI scripts, voice cloning, and automated scene generation.",
    },
    {
      year: "2026",
      milestone: "AI tools reduce production costs by 30-50%",
      description: "The economic reality of AI: faster turnarounds and significantly lower overhead for independent studios.",
    },
  ];

  const technologies = [
    {
      name: "AI Script Generation",
      description: "Training LLMs on top-performing short drama tropes to generate high-engagement scripts in seconds.",
    },
    {
      name: "AI Video Generation",
      description: "Using diffusion models to generate background plates and VFX, reducing the need for expensive location shoots.",
    },
    {
      name: "TTS/Voice Cloning",
      description: "Translating content across languages while maintaining the original actor's emotional tone and voice identity.",
    },
    {
      name: "Automated Editing",
      description: "AI tools that automatically identify 'cliffhanger' moments and optimize pacing for maximum retention.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={webPageSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tight text-white mb-6">
              Tech & AI
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl">
              The silicon engine powering the next generation of vertical cinema.
            </p>
          </ScrollReveal>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-3xl text-white uppercase tracking-wider mb-12 italic">
              AI Timeline
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((item, i) => (
                <div key={i} className="card p-8 border-white/5 bg-rp-bg-card/30 backdrop-blur-sm group">
                  <span className="text-4xl font-display font-black text-rp-coral mb-4 block group-hover:scale-110 transition-transform origin-left">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                    {item.milestone}
                  </h3>
                  <p className="text-rp-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-3xl text-white uppercase tracking-wider mb-12 italic text-right">
              Key Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech, i) => (
                <div key={tech.name} className="group p-1 bg-gradient-to-br from-white/5 to-transparent rounded-3xl transition-all hover:from-rp-coral/20">
                  <div className="bg-rp-bg-card p-10 rounded-[22px] h-full">
                    <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight mb-4 group-hover:text-rp-coral transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-rp-text-secondary text-base leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
