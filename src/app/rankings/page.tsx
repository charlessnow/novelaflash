import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { platforms } from "@/lib/data";
import { createBreadcrumbList, SITE_URL } from "@/lib/seo";
import Link from "@/components/ui/InternalLink";

export const metadata: Metadata = {
  title: "Best Short Drama Apps 2026 — Top Platforms Ranked | NovelaFlash",
  description: "The best short drama apps of 2026, ranked by content quality, user experience, and value. Compare ReelShort, DramaBox, ShortMax & more. Updated monthly.",
};

export default function Rankings() {
  const filterPills = ["Todas", "Premium", "Crecimiento", "Emergentes"];
  const criteria = [
    { title: "Content Quality", desc: "Depth of original library, localization quality, and storytelling consistency." },
    { title: "User Experience", desc: "App performance, billing transparency, and monetization balance." },
    { title: "Value for Money", desc: "Coin economy efficiency, ad-reward balance, and subscription offerings." },
    { title: "Innovation", desc: "Vertical cinema techniques, AI integration, and interactive features." }
  ];
  const rankingsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Short Drama Apps 2026",
    description: metadata.description,
    url: `${SITE_URL}/rankings`,
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
    { name: "Home", item: SITE_URL },
    { name: "Rankings", item: `${SITE_URL}/rankings` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={rankingsSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6">
              Rankings de Plataformas
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl mb-12">
              La guía definitiva de apps de miniseries, clasificada por nuestro equipo basada en calidad de contenido, UX y valor.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-16">
              {filterPills.map((pill, i) => (
                <button
                  key={pill}
                  type="button"
                  className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all
                    ${i === 0 ? 'bg-rp-coral text-white' : 'bg-rp-bg-card border border-white/10 text-rp-text-muted hover:border-white/20 hover:text-white'}`}
                >
                  {pill}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-8 mb-32">
            {platforms.map((platform, index) => (
              <ScrollReveal key={platform.slug} direction="up" delay={index * 0.1}>
                <div className="group card card-glow p-8 md:p-10 flex flex-col md:flex-row items-center gap-10">
                  <div className="flex items-center gap-8 flex-grow">
                    <span className="font-display font-black text-5xl md:text-6xl text-white/10 italic select-none">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    
                    <img
                      src={platform.icon}
                      alt={platform.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-2xl object-cover shadow-2xl"
                    />
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white uppercase">{platform.name}</h3>
                        <div className="badge badge-coral">{platform.category}</div>
                      </div>
                      <p className="text-rp-text-secondary text-sm max-w-md line-clamp-2">
                        {platform.description}
                      </p>
                      <div className="flex items-center gap-6 mt-4">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-rp-text-muted uppercase font-black tracking-widest">Descargas</span>
                          <span className="text-sm font-bold text-white">{platform.downloads}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-rp-text-muted uppercase font-black tracking-widest">Ingresos</span>
                          <span className="text-sm font-bold text-white">{platform.revenue}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-64 flex flex-col gap-4">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-bold uppercase tracking-widest text-rp-text-muted">ReelScore</span>
                      <span className="font-display font-black text-4xl text-rp-coral leading-none">{platform.score.toFixed(1)}</span>
                    </div>
                    <div className="score-bar w-full">
                      <div className="score-bar-fill" style={{ width: `${platform.score * 10}%` }} />
                    </div>
                    <Link href={`/platforms/${platform.slug}`} className="mt-4 block py-3 text-center bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-rp-coral transition-all rounded-lg">
                      Leer Reseña <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="bg-rp-bg-secondary py-32 border-y border-white/5 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-600/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <ScrollReveal direction="up" className="text-center mb-20">
              <h2 className="font-display font-black text-5xl md:text-6xl uppercase tracking-tight text-white mb-6">Nuestra Metodología</h2>
              <p className="text-rp-text-secondary text-lg max-w-2xl mx-auto">
                Cómo evaluamos las plataformas que moldean el futuro del microdrama. Nuestras puntuaciones se recalculan mensualmente.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {criteria.map((item, i) => (
                <ScrollReveal key={item.title} direction="up" delay={i * 0.1}>
                  <div className="glass p-8 rounded-2xl border-white/10 h-full">
                    <div className="w-12 h-12 rounded-xl bg-rose-600/20 flex items-center justify-center text-rp-coral font-display font-black text-xl mb-6">
                      0{i+1}
                    </div>
                    <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-rp-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-32">
          <NewsletterCTA />
        </section>
      </main>

      <Footer />
    </div>
  );
}
