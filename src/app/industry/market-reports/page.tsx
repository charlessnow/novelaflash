import React from "react";
import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import Link from "@/components/ui/InternalLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Informes de Mercado de Miniseries — NovelaFlash",
  description: "Informes trimestrales de mercado sobre la industria de las miniseries. Datos de ingresos, métricas de usuarios y proyecciones de crecimiento para el mercado de microdramas de $26B.",
};

export default function MarketReportsPage() {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Informes de Mercado de Miniseries — NovelaFlash",
    description:
      "Informes trimestrales de mercado sobre la industria de las miniseries. Datos de ingresos, métricas de usuarios y proyecciones de crecimiento para el mercado de microdramas de $26B.",
    url: `${SITE_URL}/industry/market-reports`,
  };

  const reports = [
    {
      slug: "ingresos-q1-2026",
      title: "Informe de Ingresos de Miniseries T1 2026",
      date: "Abril 2026",
      stat: "$700M en ingresos trimestrales",
      summary: "Un trimestre récord para la industria, impulsado por la expansión masiva en los mercados de Norteamérica y el sudeste asiático.",
    },
    {
      slug: "tamano-mercado-global-2025",
      title: "Análisis del Tamaño del Mercado Global 2025",
      date: "Enero 2026",
      stat: "$26B en mercado total",
      summary: "Análisis integral de la economía del video vertical, con seguimiento del crecimiento desde 2022 hasta el pico de 2025.",
    },
    {
      slug: "ingresos-exterior-china-2024",
      title: "Ingresos de Miniseries Chinas en el Exterior 2024",
      date: "Diciembre 2025",
      stat: "$4.3B en el exterior",
      summary: "Un análisis de la ola 'Chuhai', con los estudios chinos dominando el panorama del microdrama occidental.",
    },
    {
      slug: "costo-adquisicion-usuarios",
      title: "Referencias de Costo de Adquisición de Usuarios",
      date: "Marzo 2026",
      stat: "$0.40-0.80 CPI",
      summary: "Un análisis a fondo de la eficiencia de marketing y los costos de adquisición específicos por plataforma en Meta, TikTok y Google.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={collectionPageSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <ScrollReveal direction="up">
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tight text-white mb-6">
              Informes de Mercado
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl mx-auto">
              Análisis e inteligencia basados en datos desde la vanguardia de la industria del microdrama.
            </p>
          </ScrollReveal>
        </section>

        {/* Reports Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reports.map((report, i) => (
              <ScrollReveal key={report.title} direction="up" delay={i * 0.1}>
                <Link href={`/industry/market-reports/${report.slug}`} className="group card card-glow p-10 h-full flex flex-col border-white/5 bg-rp-bg-card/50 backdrop-blur-sm relative overflow-hidden block">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rp-coral/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] text-rp-text-muted font-black uppercase tracking-[0.2em]">{report.date}</span>
                    <div className="badge badge-coral">Informe</div>
                  </div>

                  <h3 className="text-3xl font-display font-black text-white uppercase tracking-tight mb-4 group-hover:text-rp-coral transition-colors">
                    {report.title}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="text-2xl font-display font-black text-rp-coral">{report.stat}</span>
                  </div>

                  <p className="text-rp-text-secondary text-base leading-relaxed mb-10">
                    {report.summary}
                  </p>

                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 font-display font-bold text-white uppercase tracking-widest text-xs">
                      Leer Informe <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-rp-coral group-hover:border-rp-coral transition-all"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-32">
          <NewsletterCTA />
        </section>
      </main>

      <Footer />
    </div>
  );
}
