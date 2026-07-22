import React from "react";
import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { platforms } from "@/lib/data";
import { createBreadcrumbList, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Top 100 Apps de Miniseries 2026 — NovelaFlash",
  description: "El ranking más completo de apps de miniseries del mundo. Descubre las mejores plataformas de microdramas, calificadas por contenido, UX y valor.",
};

export default function Top100Apps() {
  const top100Schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top 100 Apps de Miniseries 2026",
    description: metadata.description,
    url: `${SITE_URL}/rankings/top-100`,
    inLanguage: "es-419",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
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
    { name: "Top 100", item: `${SITE_URL}/rankings/top-100` },
  ]);

  const morePlatforms = [
    { name: "GoodShort", icon: "/platforms/goodshort.png", score: 7.2, desc: "Hub curado de miniseries con calificaciones consistentemente altas en la App Store. Conocida por su calidad cinematográfica, talento reconocido de la industria y narrativa equilibrada en géneros de romance, suspenso y fantasía.", category: "Crecimiento" },
    { name: "ShortMax", icon: "/platforms/shortmax.png", score: 7.0, desc: "Producción visual de alta calidad con contenido pulido. Popular por sus géneros de hombres lobo y romance con multimillonarios. Calificada con más de 4.5 estrellas en la App Store, con una base de usuarios global en crecimiento.", category: "Crecimiento" },
    { name: "DramaWave", icon: "/platforms/dramawave.png", score: 6.8, desc: "Biblioteca de más de 30,000 dramas en 17 idiomas. Incluye comentarios en pantalla y visualización sin conexión. Identificada por Sensor Tower como una de las apps de más rápido crecimiento en 2025.", category: "Emergente" },
    { name: "PineDrama", icon: "/platforms/pinedrama.png", score: 6.5, desc: "App de microdramas de TikTok lanzada en Estados Unidos y Brasil. Totalmente libre de anuncios y sin muro de pago: una de las pocas plataformas de miniseries completamente gratis. Formato HD en pantalla completa con audio nítido.", category: "Emergente" },
    { name: "DreameShort", icon: "/platforms/dreameshort.png", score: 6.3, desc: "Plataforma de streaming de miniseries de nueva generación de Dreame (ecosistema de Bytedance). Se especializa en amores prohibidos, romances sobrenaturales, matrimonios arreglados e historias de herederas secretas.", category: "Emergente" },
  ];

  const allApps = [
    ...platforms.map((p, i) => ({ ...p, rank: i + 1 })),
    ...morePlatforms.map((p, i) => ({ 
      slug: p.name.toLowerCase().replace(/\s/g, ""), 
      name: p.name, 
      icon: p.icon,
      score: p.score, 
      description: p.desc, 
      rank: i + 6,
      category: p.category,
    }))
  ];

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={top100Schema} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="mb-20">
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tight text-white mb-4">
              TOP 100 APPS
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl">
              El ranking definitivo de plataformas de miniseries basado en descargas, retención y calidad de contenido.
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            {allApps.map((app) => (
              <ScrollReveal key={app.name} direction="up">
                <div className="card card-glow p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex items-center gap-6 flex-grow">
                    <span className="font-display font-black text-4xl text-white/10 w-12 text-center">
                      {app.rank.toString().padStart(2, '0')}
                    </span>
                    
                    {app.icon ? (
                      <img
                        src={app.icon}
                        alt={app.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-2xl object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rp-bg-secondary to-rp-bg-elevated border border-white/5 flex items-center justify-center font-display font-black text-2xl text-white">
                        {app.name.charAt(0)}
                      </div>
                    )}
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-white uppercase">{app.name}</h3>
                        <div className="badge badge-coral text-[10px] py-0.5">{app.category}</div>
                      </div>
                      <p className="text-rp-text-secondary text-sm line-clamp-1 max-w-xl">
                        {app.description}
                      </p>
                    </div>
                  </div>

                  <div className="w-full md:w-64 flex flex-col gap-2">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-rp-text-muted">Puntaje</span>
                      <span className="font-display font-black text-2xl text-rp-coral leading-none">{app.score.toFixed(1)}</span>
                    </div>
                    <div className="score-bar w-full">
                      <div className="score-bar-fill" style={{ width: `${app.score * 10}%` }} />
                    </div>
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
