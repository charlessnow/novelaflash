import React from "react";
import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Estudios de Contenido de Miniseries — NovelaFlash",
  description: "Conoce a los estudios detrás de la revolución de las miniseries. De Crazy Maple Studio a StoReel, perfiles de las empresas que crean contenido de microdramas.",
};

export default function ContentStudios() {
  const studios = [
    {
      name: "Crazy Maple Studio",
      platform: "ReelShort",
      funding: "TIME 100",
      desc: "El líder del mercado detrás de ReelShort, reconocida como una de las empresas más influyentes del TIME 100."
    },
    {
      name: "Chongqing Holdings",
      platform: "DramaBox",
      funding: "Con Capital de Riesgo",
      desc: "Estudio de rápido crecimiento detrás de DramaBox, enfocado en la producción de contenido de alta frecuencia."
    },
    {
      name: "StoReel",
      platform: "Nativo de IA",
      funding: "$34M en Financiamiento",
      desc: "Estudio de entretenimiento nativo de IA que empuja los límites de la producción automatizada de miniseries."
    },
    {
      name: "GammaTime",
      platform: "Interactivo",
      funding: "$14M en Ronda Semilla",
      desc: "Plataforma de nueva generación especializada en historias interactivas y contenido personalizado."
    },
    {
      name: "THINGMEDIA",
      platform: "Asia-Pacífico",
      funding: "¥200M en Financiamiento",
      desc: "Estudio japonés que apunta al enorme mercado asiático de microdramas con títulos de alta calidad."
    },
    {
      name: "Chai Shots",
      platform: "Mercado de India",
      funding: "$5M en Ronda Semilla",
      desc: "Pionero de microdramas en India, llevando el cine vertical a la creciente audiencia del subcontinente."
    }
  ];

  const studiosSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Estudios de Contenido de Miniseries",
    description: metadata.description,
    url: `${SITE_URL}/rankings/studios`,
    inLanguage: "es-419",
    numberOfItems: studios.length,
    itemListElement: studios.map((studio, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Organization",
        name: studio.name,
        description: studio.desc,
      },
    })),
  };
  const breadcrumbSchema = createBreadcrumbList([
    { name: "Inicio", item: SITE_URL },
    { name: "Rankings", item: `${SITE_URL}/rankings` },
    { name: "Estudios", item: `${SITE_URL}/rankings/studios` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={studiosSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="mb-20">
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tight text-white mb-4">
              ESTUDIOS DE CONTENIDO
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl">
              Conoce a las potencias de producción que están definiendo la próxima era del cine vertical.
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
