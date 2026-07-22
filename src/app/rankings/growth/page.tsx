import React from "react";
import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Métricas de Crecimiento de Miniseries 2026 — NovelaFlash",
  description: "Métricas clave de crecimiento de la industria de miniseries de $26 mil millones. Tamaño de mercado, tendencias de ingresos, crecimiento de usuarios y datos de financiamiento actualizados trimestralmente.",
};

export default function GrowthMetrics() {
  const breadcrumbSchema = createBreadcrumbList([
    { name: "Inicio", item: SITE_URL },
    { name: "Rankings", item: `${SITE_URL}/rankings` },
    { name: "Crecimiento", item: `${SITE_URL}/rankings/growth` },
  ]);

  const metrics = [
    { value: "~4x", label: "Ingresos Q1 2025 vs Q1 2024", context: "Los ingresos globales dentro de apps en el Q1 2025 alcanzaron ~$700M, casi 4 veces más que en el Q1 2024 (Sensor Tower)." },
    { value: "$26B", label: "Tamaño del Mercado Global 2025", context: "Capitalización de mercado proyectada de la industria de miniseries." },
    { value: "2.7M", label: "Usuarios Activos Diarios de ReelShort", context: "La base de usuarios activos más grande en el mercado occidental." },
    { value: "$3M+", label: "Gasto Diario (Top 3)", context: "Ingresos diarios combinados de las tres plataformas globales líderes." },
    { value: "156%", label: "Crecimiento de Ingresos de ReelShort en 2024", context: "Expansión de ingresos interanual del líder del mercado." },
    { value: "$4.3B", label: "Ingresos en el Extranjero 2024", context: "Ingresos generados por miniseries chinas en mercados occidentales." }
  ];

  const milestones = [
    { year: "2022", event: "Se lanza ReelShort", desc: "La primera plataforma dedicada de drama vertical llega a los mercados occidentales." },
    { year: "2023", event: "Primer día con $1M", desc: "Los ingresos combinados de un solo día en todas las plataformas superan el hito de $1M." },
    { year: "2024", event: "TIME 100", desc: "La industria de miniseries es reconocida por el TIME 100 Most Influential Companies." },
    { year: "2025", event: "Mercado de $26B", desc: "La industria global alcanza una escala de miles de millones de dólares." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="mb-20">
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tight text-white mb-4">
              MÉTRICAS DE CRECIMIENTO
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl">
              Siguiendo con datos el ascenso exponencial del entretenimiento de formato corto.
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
            <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-16 text-center">Línea de Tiempo del Mercado</h2>
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
