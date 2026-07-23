import React from "react";
import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Economía de Creadores de Miniseries — NovelaFlash",
  description: "Cómo ganar dinero en la industria de las miniseries. Guionismo, dirección, actuación de voz — potencial de ingresos y cómo empezar.",
};

export default function CreatorEconomyPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Economía de Creadores de Miniseries — NovelaFlash",
    description:
      "Cómo ganar dinero en la industria de las miniseries. Guionismo, dirección, actuación de voz — potencial de ingresos y cómo empezar.",
    url: `${SITE_URL}/industry/creator-economy`,
  };

  const roles = [
    {
      role: "Guionistas",
      income: "$500-$5,000 por guion",
      description: "Escribir episodios de 1-2 minutos impulsados por cliffhangers. Alta demanda de tramas de romance y venganza.",
    },
    {
      role: "Directores",
      income: "$2,000-$15,000 por proyecto",
      description: "Gestionar cronogramas de producción ajustados de 7-10 días para una serie completa de 60-100 episodios.",
    },
    {
      role: "Actores de Voz",
      income: "$100-$1,000 por episodio",
      description: "Doblar contenido para audiencias globales. Las herramientas de IA aumentan la velocidad, pero la interpretación emocional sigue liderada por humanos.",
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Elige tu rol",
      description: "Identifica dónde encajan tus habilidades en el proceso de producción: escritura, actuación o dirección.",
    },
    {
      step: 2,
      title: "Estudia el contenido de mayor éxito",
      description: "Analiza los primeros 10 episodios de las miniseries en tendencia. Entiende la estructura del 'gancho' y el 'cliffhanger'.",
    },
    {
      step: 3,
      title: "Postúlate a las plataformas",
      description: "Contacta a los estudios socios de las principales apps como ReelShort y DramaBox con tu portafolio.",
    },
    {
      step: 4,
      title: "Escala con herramientas de IA",
      description: "Usa herramientas de IA que aumentan la productividad para lluvia de ideas de guiones, storyboarding y edición rápida.",
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
              Economía de Creadores
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl mx-auto">
              Cómo una nueva generación de artistas está monetizando la pantalla vertical.
            </p>
          </ScrollReveal>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-3xl text-white uppercase tracking-wider mb-12 italic">
              Potencial de Ingresos
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {roles.map((role) => (
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
              Cómo Empezar
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
