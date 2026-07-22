import React from "react";
import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mercados Globales de Miniseries — NovelaFlash",
  description: "Análisis geográfico del mercado de miniseries. Norteamérica, sudeste asiático, India y Japón: dónde crecen más rápido los microdramas.",
};

export default function GlobalMarketsPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Mercados Globales de Miniseries — NovelaFlash",
    description:
      "Análisis geográfico del mercado de miniseries. Norteamérica, sudeste asiático, India y Japón: dónde crecen más rápido los microdramas.",
    url: `${SITE_URL}/industry/global-markets`,
  };

  const regions = [
    {
      name: "Norteamérica",
      stat: ">50% de los ingresos en el exterior",
      market: "Mercado de $2B+",
      description: "Alto ARPU y demanda de contenido localizado con arquetipos occidentales.",
    },
    {
      name: "Sudeste Asiático",
      stat: "Región de mayor crecimiento",
      market: "Audiencia mobile-first",
      description: "Escala y adopción masivas, particularmente en Indonesia, Tailandia y Vietnam.",
    },
    {
      name: "India",
      stat: "$50M+ en financiamiento",
      market: "Chai Shots/Flick TV a la cabeza",
      description: "Estudios locales recaudando capital significativo para adaptar el formato a los idiomas y la cultura de India.",
    },
    {
      name: "Japón",
      stat: "THINGMEDIA financiada con ¥200M",
      market: "Preferencias de contenido únicas",
      description: "Mercado altamente sofisticado con un fuerte apetito por valores de producción premium.",
    },
  ];

  const shares = [
    { region: "Norteamérica", value: 55 },
    { region: "Sudeste Asiático", value: 25 },
    { region: "China (Exterior)", value: 15 },
    { region: "Otros", value: 5 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={webPageSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tight text-white mb-6">
              Mercados Globales
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl">
              Mapeando la expansión geográfica del formato de entretenimiento más viral del mundo.
            </p>
          </ScrollReveal>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regions.map((region, i) => (
              <ScrollReveal key={region.name} direction="up" delay={i * 0.1}>
                <div className="group card p-10 border-white/5 bg-rp-bg-card/50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rp-coral/5 blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-rp-coral/10 transition-colors" />
                  
                  <h3 className="text-4xl font-display font-black text-white uppercase tracking-tight mb-8">
                    {region.name}
                  </h3>
                  
                  <div className="space-y-2 mb-10">
                    <p className="text-rp-coral font-display font-black text-2xl uppercase italic">{region.stat}</p>
                    <p className="text-rp-text-primary font-bold text-lg">{region.market}</p>
                  </div>

                  <p className="text-rp-text-secondary text-base leading-relaxed max-w-sm">
                    {region.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-3xl text-white uppercase tracking-wider mb-12 italic text-center">
              Cuota de Mercado (Ingresos)
            </h2>
            <div className="space-y-10 bg-rp-bg-card/50 p-12 rounded-3xl border border-white/5 backdrop-blur-sm">
              {shares.map((share, i) => (
                <div key={share.region} className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="font-display font-black text-white uppercase tracking-widest text-lg leading-none">{share.region}</span>
                    <span className="font-display font-black text-rp-coral text-2xl leading-none">{share.value}%</span>
                  </div>
                  <div className="score-bar">
                    <div 
                      className="score-bar-fill" 
                      style={{ width: `${share.value}%`, transitionDelay: `${i * 0.1}s` }}
                    />
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
