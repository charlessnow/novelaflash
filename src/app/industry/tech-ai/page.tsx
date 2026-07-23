import React from "react";
import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "IA en las Miniseries — Tendencias Tecnológicas — NovelaFlash",
  description: "Cómo la IA está transformando la producción de miniseries. Desde guiones generados por IA hasta video automatizado, explora la tecnología que redefine el micro-entretenimiento.",
};

export default function TechAIPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "IA en las Miniseries — Tendencias Tecnológicas — NovelaFlash",
    description:
      "Cómo la IA está transformando la producción de miniseries. Desde guiones generados por IA hasta video automatizado, explora la tecnología que redefine el micro-entretenimiento.",
    url: `${SITE_URL}/industry/tech-ai`,
  };

  const timeline = [
    {
      year: "2024",
      milestone: "Primer microdrama con IA 'Chopping Waves' en Kuaishou",
      description: "Un momento decisivo en el que el contenido generado por IA demostró ser viable para el consumo masivo en formato vertical.",
    },
    {
      year: "2025",
      milestone: "China lanza su primera serie de ciencia ficción con IA",
      description: "Empresas de medios respaldadas por el Estado apuestan por la IA para reducir costos y aumentar la velocidad de producción en ciencia ficción de alto concepto.",
    },
    {
      year: "2026",
      milestone: "StoReel recauda $34M para producción nativa de IA",
      description: "El capital de riesgo fluye hacia plataformas que priorizan guiones generados por IA, clonación de voz y generación automática de escenas.",
    },
    {
      year: "2026",
      milestone: "Las herramientas de IA reducen los costos de producción entre un 30-50%",
      description: "La realidad económica de la IA: tiempos de entrega más rápidos y costos operativos mucho menores para estudios independientes.",
    },
  ];

  const technologies = [
    {
      name: "Generación de Guiones con IA",
      description: "Entrenar modelos de lenguaje con los tropos de miniseries más exitosos para generar guiones de alto engagement en segundos.",
    },
    {
      name: "Generación de Video con IA",
      description: "Uso de modelos de difusión para generar fondos y efectos visuales, reduciendo la necesidad de costosas grabaciones en locación.",
    },
    {
      name: "TTS/Clonación de Voz",
      description: "Traducir contenido entre idiomas manteniendo el tono emocional y la identidad vocal del actor original.",
    },
    {
      name: "Edición Automatizada",
      description: "Herramientas de IA que identifican automáticamente los momentos 'cliffhanger' y optimizan el ritmo para maximizar la retención.",
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
              Tecnología e IA
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl">
              El motor de silicio que impulsa la próxima generación del cine vertical.
            </p>
          </ScrollReveal>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <h2 className="font-display font-black text-3xl text-white uppercase tracking-wider mb-12 italic">
              Cronología de la IA
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
              Tecnologías Clave
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech) => (
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
