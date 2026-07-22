import React from "react";
import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { platforms } from "@/lib/data";
import { createBreadcrumbList, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Líderes en Ingresos de Miniseries 2026 — NovelaFlash",
  description: "¿Qué apps de miniseries generan más ingresos? Análisis basado en datos de ReelShort, DramaBox y las plataformas de microdramas con mayores ganancias.",
};

export default function RevenueLeaders() {
  const revenueSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Líderes en Ingresos de Miniseries 2026",
    description: metadata.description,
    url: `${SITE_URL}/rankings/revenue`,
    inLanguage: "es-419",
    numberOfItems: platforms.length,
    itemListElement: platforms.map((platform, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/platforms/${platform.slug}`,
      item: {
        "@type": "SoftwareApplication",
        name: platform.name,
        description: platform.description,
      },
    })),
  };
  const breadcrumbSchema = createBreadcrumbList([
    { name: "Inicio", item: SITE_URL },
    { name: "Rankings", item: `${SITE_URL}/rankings` },
    { name: "Ingresos", item: `${SITE_URL}/rankings/revenue` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={revenueSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="mb-20">
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tight text-white mb-4">
              LÍDERES EN INGRESOS
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl">
              Mapeando el panorama financiero de la industria de microdramas de $26 mil millones.
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
                          <span className="text-[10px] text-rp-text-muted uppercase font-black tracking-widest">Descargas</span>
                          <span className="text-lg font-bold text-white/80">{platform.downloads}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-rp-text-muted uppercase font-black tracking-widest">Crecimiento</span>
                          <span className="text-lg font-bold text-rp-green">+156%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center md:text-right">
                    <span className="text-xs font-bold uppercase tracking-widest text-rp-text-muted block mb-1">Ingreso Anual Estimado</span>
                    <span className="font-display font-black text-6xl text-rp-coral">{platform.revenue}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up">
            <div className="glass p-10 rounded-3xl border-rp-coral/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rp-coral/5 blur-[80px] rounded-full" />
              <h2 className="font-display font-bold text-3xl text-white uppercase tracking-tight mb-6">Dato Clave</h2>
              <p className="text-rp-text-secondary text-xl leading-relaxed max-w-4xl">
                Las 3 plataformas principales ahora concentran más de <span className="text-white font-bold">$3M diarios</span> en gasto de los consumidores. Esto refleja un cambio fundamental en el consumo de entretenimiento, donde los usuarios están cada vez más dispuestos a pagar por contenido vertical corto y de alta emotividad, en lugar de suscripciones tradicionales de formato largo.
              </p>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
