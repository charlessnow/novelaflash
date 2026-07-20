import React from "react";
import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export const metadata: Metadata = {
  title: "Short Drama Content Studios — NovelaFlash",
  description: "Meet the studios powering the short drama revolution. From Crazy Maple Studio to StoReel, profiles of the companies creating micro-drama content.",
};

export default function ContentStudios() {
  const studios = [
    {
      name: "Crazy Maple Studio",
      platform: "ReelShort",
      funding: "TIME 100",
      desc: "The market leader behind ReelShort, recognized as a TIME 100 most influential company."
    },
    {
      name: "Chongqing Holdings",
      platform: "DramaBox",
      funding: "Venture-Backed",
      desc: "Fast-growing studio powering DramaBox, focusing on high-frequency content production."
    },
    {
      name: "StoReel",
      platform: "AI-Native",
      funding: "$34M Funded",
      desc: "AI-native entertainment studio pushing the boundaries of automated short drama production."
    },
    {
      name: "GammaTime",
      platform: "Interactive",
      funding: "$14M Seed",
      desc: "Next-gen platform specializing in interactive storylines and personalized content."
    },
    {
      name: "THINGMEDIA",
      platform: "Asia-Pacific",
      funding: "¥200M Funded",
      desc: "Japanese studio targeting the massive Asian micro-drama market with high-quality titles."
    },
    {
      name: "Chai Shots",
      platform: "India Market",
      funding: "$5M Seed",
      desc: "India's micro-drama pioneer, bringing vertical cinema to the subcontinent's growing audience."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <Nav />

      <main className="flex-grow pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="mb-20">
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tight text-white mb-4">
              CONTENT STUDIOS
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl">
              Meet the production powerhouses defining the next era of vertical cinema.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studios.map((studio, i) => (
              <ScrollReveal key={studio.name} direction="up" delay={i * 0.1}>
                <div className="card card-glow p-8 flex flex-col h-full h-full min-h-[250px] justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-white uppercase">{studio.name}</h3>
                        <span className="text-xs font-bold text-rp-coral uppercase tracking-widest">{studio.platform}</span>
                      </div>
                      <div className="badge badge-coral text-[10px] py-1 px-4">{studio.funding}</div>
                    </div>
                    <p className="text-rp-text-secondary leading-relaxed">
                      {studio.desc}
                    </p>
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
