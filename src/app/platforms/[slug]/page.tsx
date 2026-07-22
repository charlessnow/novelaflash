import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { platforms } from "@/lib/data";
import { createBreadcrumbList, SITE_URL, toAbsoluteUrl } from "@/lib/seo";
import Link from "@/components/ui/InternalLink";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const PLATFORM_REVIEWS: Record<string, {
  tagline: string;
  overview: string;
  contentLibrary: string;  
  pricing: string;
  verdict: string;
  pros: string[];
  cons: string[];
}> = {
  reelshort: {
    tagline: "El líder indiscutido del entretenimiento en miniseries",
    overview: "ReelShort, desarrollada por Crazy Maple Studio (subsidiaria de COL Group), se ha convertido en la fuerza dominante del mercado de microdramas. Lanzada en agosto de 2022, la plataforma generó un estimado de $250 millones de dólares en ingresos en 2024, con más de 55 millones de descargas a nivel global. ReelShort fue reconocida como una de las TIME 100 Most Influential Companies en 2024. Su gran éxito, 'The Double Life of My Billionaire Husband', superó los 500 millones de reproducciones. La plataforma destaca por la calidad de su localización, ofreciendo miniseries verticales de alta calidad en géneros de romance, suspenso, fantasía y venganza pensadas para audiencias occidentales.",
    contentLibrary: "ReelShort cuenta con la biblioteca de contenido más grande y diversa entre las apps de miniseries. La plataforma produce y adquiere cientos de títulos originales cada año, con una oferta sólida en romance con CEOs, fantasía de hombres lobo, dramas de multimillonarios y thrillers de venganza. La calidad del contenido es consistentemente alta, con valores de producción profesionales que rivalizan con las plataformas de streaming tradicionales. La localización desde el material original chino hacia el inglés es de las mejores de la industria.",
    pricing: "ReelShort funciona con un sistema de monedas donde cada episodio cuesta entre $0.20 y $0.50 dólares. Una serie típica de 80 episodios cuesta entre $16 y $40 dólares para verla completa. Las suscripciones VIP están disponibles desde $6.99/semana o $19.99/mes, con acceso ilimitado a contenido seleccionado. La plataforma también ofrece una cantidad limitada de episodios gratis al día mediante anuncios. Aunque el precio es premium frente a la competencia, la calidad del contenido justifica el costo para la mayoría de los usuarios.",
    verdict: "ReelShort es el líder claro del mercado, y con razón. La calidad de su contenido, su biblioteca diversa y su experiencia de usuario pulida marcan el estándar de la industria de miniseries. El precio premium puede alejar a usuarios con presupuesto ajustado, pero para quienes están dispuestos a invertir, ReelShort ofrece la mejor experiencia disponible.",
    pros: ["La mejor calidad de contenido del mercado", "La biblioteca más grande y diversa", "Excelente localización y valores de producción", "Empresa reconocida en el TIME 100", "Algoritmo de recomendaciones sólido"],
    cons: ["Precios premium frente a la competencia", "Monetización agresiva con avisos de compra frecuentes", "Algunos usuarios reportan dificultad para cancelar la suscripción"],
  },
  dramabox: {
    tagline: "El retador de crecimiento acelerado con una biblioteca de contenido imbatible",
    overview: "DramaBox, desarrollada por STORYMATRIX PTE. LTD., se ha establecido rápidamente como el principal competidor de ReelShort. Con más de 40 millones de descargas y una calificación de ~4.8 estrellas en la App Store (más de 598K reseñas), DramaBox suele ser la app de miniseries #1 en descargas e ingresos a nivel global. La plataforma se enfoca fuertemente en los géneros de romance y venganza, ofreciendo una de las bibliotecas de contenido más grandes del rubro, con recomendaciones basadas en IA y lanzamientos casi diarios.",
    contentLibrary: "DramaBox ofrece una biblioteca enorme que rivaliza, y a veces supera, a ReelShort en volumen puro. La plataforma es particularmente fuerte en géneros de romance, venganza y drama con CEOs. El contenido proviene de una amplia red de estudios de producción chinos, lo que resulta en un flujo constante de estrenos. Aunque la calidad de los títulos individuales puede ser inconsistente, la amplitud de la selección garantiza algo para cada gusto.",
    pricing: "DramaBox usa un modelo similar de monedas, pero generalmente ofrece precios más competitivos que ReelShort. Los episodios suelen costar entre $0.15 y $0.40 dólares, y la plataforma corre promociones frecuentes con monedas de regalo. También hay una opción de suscripción a un precio menor que la de ReelShort. El nivel gratuito con anuncios es más generoso, lo que la convierte en una mejor opción para espectadores con presupuesto limitado.",
    verdict: "DramaBox es la mejor opción para quienes priorizan volumen y valor. Su biblioteca masiva y sus precios competitivos la convierten en una excelente alternativa a ReelShort, en particular para fans del romance dramático. La contraparte es una calidad ligeramente menos consistente y una interfaz un poco menos pulida.",
    pros: ["Biblioteca de contenido masiva con estrenos diarios", "Precios más competitivos que ReelShort", "Nivel gratuito generoso y promociones frecuentes", "Fuerte en los géneros de romance y venganza"],
    cons: ["Calidad de contenido inconsistente entre títulos", "Interfaz de usuario menos pulida", "Algunas localizaciones podrían mejorar"],
  },
  shortmax: {
    tagline: "La potencia de contenido con más de 50M de descargas en el mundo",
    overview: "ShortMax, desarrollada por SHORTMAX LIMITED, se ha convertido en uno de los nombres más grandes de las miniseries, con más de 50 millones de descargas entre iOS y Android. La plataforma se ha ganado una sólida reputación en los géneros de romance y drama, combinando un catálogo de contenido masivo con un motor de recomendaciones eficaz que mantiene a los espectadores enganchados con nuevas series. En Google Play tiene una calificación de 4.2 estrellas con 1.42 millones de reseñas, lo que confirma tanto su escala como su amplio atractivo masivo en el mercado global de streaming de formato corto.",
    contentLibrary: "ShortMax ofrece una biblioteca grande que rivaliza con DramaBox en volumen puro, con particular fortaleza en historias de romance, venganza y drama con CEOs. La app impulsa agresivamente estrenos diarios, dando a los espectadores frecuentes un flujo constante de episodios nuevos y ganchos seriales. La amplitud de su catálogo es una ventaja importante para quienes buscan variedad máxima sin salir de la plataforma.",
    pricing: "ShortMax usa el conocido modelo de desbloqueo por monedas que usan los principales competidores de miniseries, y también ofrece opciones de suscripción para quienes quieren un acceso más predecible. Los precios son generalmente competitivos dentro de la categoría, y la plataforma corre promociones regulares que mejoran el valor para espectadores frecuentes.",
    verdict: "ShortMax es una excelente opción para espectadores enfocados en volumen que quieren una biblioteca masiva, recomendaciones confiables y precios competitivos en una sola app.",
    pros: ["Base de usuarios masiva de más de 50M de descargas", "Biblioteca de contenido grande y diversa", "Algoritmo de recomendaciones sólido", "Precios competitivos con promociones frecuentes"],
    cons: ["La interfaz de la app podría estar más pulida", "Cierta inconsistencia en la calidad del contenido", "Presencia fuerte de anuncios en el nivel gratuito"],
  },
  flextv: {
    tagline: "Diversidad de géneros más allá de la fórmula del romance",
    overview: "FlexTV se diferencia al ofrecer la mayor diversidad de géneros entre las apps de miniseries. Mientras la mayoría de sus competidores se enfocan fuertemente en el romance, FlexTV ha invertido en contenido de suspenso, fantasía, ciencia ficción y acción. Con más de 5 millones de descargas en Google Play y soporte de subtítulos en varios idiomas, la plataforma atrae a espectadores que buscan algo más allá de la típica fórmula de romance con CEO.",
    contentLibrary: "La estrategia de contenido de FlexTV prioriza la amplitud de géneros por sobre la profundidad. La plataforma ofrece una selección competitiva en categorías de suspenso, sobrenatural y acción que la competencia atiende poco. El contenido de romance está disponible, pero no domina la biblioteca. Esto convierte a FlexTV en la plataforma preferida para espectadores hombres y para cualquiera que busque miniseries que no sean de romance.",
    pricing: "Los precios de FlexTV son competitivos, con episodios que van entre $0.15 y $0.40 dólares. La plataforma ofrece un nivel gratuito razonable con contenido patrocinado por anuncios y ofertas promocionales regulares. Los precios de suscripción están alineados con el promedio de la industria.",
    verdict: "FlexTV es la mejor opción para quienes quieren algo más que romance. Su diversidad de géneros llena un vacío real en el mercado. La contraparte es una base de usuarios más pequeña y actualizaciones de contenido ocasionalmente más lentas.",
    pros: ["La mejor diversidad de géneros del mercado", "Contenido sólido de suspenso y fantasía", "Atrae a audiencia masculina", "Precios competitivos"],
    cons: ["Base de usuarios más pequeña que las plataformas líderes", "Ciclo de actualización de contenido más lento", "Producción menos pulida en algunos títulos"],
  },
  moboreels: {
    tagline: "La puerta de entrada económica a las miniseries",
    overview: "MoboReels es el nuevo gran competidor del espacio de miniseries, y se posiciona como la plataforma más accesible gracias a su generoso nivel gratuito con anuncios. Con 3 millones de descargas y $15 millones de dólares en ingresos anuales, MoboReels apunta a espectadores con presupuesto limitado que quieren explorar las miniseries sin una inversión inicial significativa.",
    contentLibrary: "MoboReels tiene la biblioteca más pequeña entre las cinco plataformas principales, pero está creciendo rápidamente. El contenido se inclina hacia géneros populares como romance y venganza, con una mezcla de títulos con licencia y originales. La plataforma compensa su biblioteca más chica con una oferta agresiva de contenido gratis mediante su modelo con anuncios.",
    pricing: "MoboReels ofrece el nivel gratuito más generoso de la industria. Los usuarios pueden ver una cantidad importante de contenido gratis con anuncios, y los episodios pagos son los más baratos entre las plataformas principales, entre $0.10 y $0.30 dólares cada uno. Esto la convierte en un excelente punto de partida para usuarios nuevos en las miniseries que no quieren comprometerse con precios premium.",
    verdict: "MoboReels es perfecta para quienes recién descubren las miniseries o tienen presupuesto limitado. Su nivel gratuito es genuinamente útil, y su contenido pago es el más barato disponible. El compromiso es una biblioteca más pequeña y anuncios más frecuentes.",
    pros: ["El mejor nivel gratuito de la industria", "El contenido pago más barato", "Bajo costo de entrada para usuarios nuevos", "Biblioteca de contenido en crecimiento"],
    cons: ["La biblioteca de contenido más pequeña", "Anuncios más frecuentes e intrusivos", "Sensación menos premium en general", "Producciones originales limitadas"],
  },
  flickreels: {
    tagline: "Plataforma de Miniseries",
    overview: "Plataforma oficial de streaming de miniseries.",
    contentLibrary: "Microdramas verticales.",
    pricing: "Disponible con compras dentro de la app y opciones de suscripción.",
    verdict: "Reseña detallada pendiente.",
    pros: ["App oficial"],
    cons: ["Métricas detalladas no disponibles por el momento"],
  },
  snackshort: {
    tagline: "Plataforma de Miniseries",
    overview: "Plataforma oficial de streaming de miniseries.",
    contentLibrary: "Microdramas verticales.",
    pricing: "Disponible con compras dentro de la app y opciones de suscripción.",
    verdict: "Reseña detallada pendiente.",
    pros: ["App oficial"],
    cons: ["Métricas detalladas no disponibles por el momento"],
  },
  starshort: {
    tagline: "Plataforma de Miniseries",
    overview: "Plataforma oficial de streaming de miniseries.",
    contentLibrary: "Microdramas verticales.",
    pricing: "Disponible con compras dentro de la app y opciones de suscripción.",
    verdict: "Reseña detallada pendiente.",
    pros: ["App oficial"],
    cons: ["Métricas detalladas no disponibles por el momento"],
  },
  honeyreels: {
    tagline: "Plataforma de Miniseries",
    overview: "Plataforma oficial de streaming de miniseries.",
    contentLibrary: "Microdramas verticales.",
    pricing: "Disponible con compras dentro de la app y opciones de suscripción.",
    verdict: "Reseña detallada pendiente.",
    pros: ["App oficial"],
    cons: ["Métricas detalladas no disponibles por el momento"],
  },
  topshort: {
    tagline: "Plataforma de Miniseries",
    overview: "Plataforma oficial de streaming de miniseries.",
    contentLibrary: "Microdramas verticales.",
    pricing: "Disponible con compras dentro de la app y opciones de suscripción.",
    verdict: "Reseña detallada pendiente.",
    pros: ["App oficial"],
    cons: ["Métricas detalladas no disponibles por el momento"],
  },
  footage: {
    tagline: "Plataforma de Miniseries",
    overview: "Plataforma oficial de streaming de miniseries.",
    contentLibrary: "Microdramas verticales.",
    pricing: "Disponible con compras dentro de la app y opciones de suscripción.",
    verdict: "Reseña detallada pendiente.",
    pros: ["App oficial"],
    cons: ["Métricas detalladas no disponibles por el momento"],
  },
  veloria: {
    tagline: "Plataforma de Miniseries",
    overview: "Plataforma oficial de streaming de miniseries.",
    contentLibrary: "Microdramas verticales.",
    pricing: "Disponible con compras dentro de la app y opciones de suscripción.",
    verdict: "Reseña detallada pendiente.",
    pros: ["App oficial"],
    cons: ["Métricas detalladas no disponibles por el momento"],
  },
  pancake: {
    tagline: "Plataforma de Miniseries",
    overview: "Plataforma oficial de streaming de miniseries.",
    contentLibrary: "Microdramas verticales.",
    pricing: "Disponible con compras dentro de la app y opciones de suscripción.",
    verdict: "Reseña detallada pendiente.",
    pros: ["App oficial"],
    cons: ["Métricas detalladas no disponibles por el momento"],
  },
  stardusttv: {
    tagline: "Plataforma de Miniseries",
    overview: "Plataforma oficial de streaming de miniseries.",
    contentLibrary: "Microdramas verticales.",
    pricing: "Disponible con compras dentro de la app y opciones de suscripción.",
    verdict: "Reseña detallada pendiente.",
    pros: ["App oficial"],
    cons: ["Métricas detalladas no disponibles por el momento"],
  },
  playlet: {
    tagline: "Plataforma de Miniseries",
    overview: "Plataforma oficial de streaming de miniseries.",
    contentLibrary: "Microdramas verticales.",
    pricing: "Disponible con compras dentro de la app y opciones de suscripción.",
    verdict: "Reseña detallada pendiente.",
    pros: ["App oficial"],
    cons: ["Métricas detalladas no disponibles por el momento"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const platform = platforms.find((item) => item.slug === slug);

  if (!platform) {
    notFound();
  }

  const title = `Reseña de ${platform.name} 2026 — NovelaFlash`;
  const description = `Reseña de ${platform.name} con una calificación de ${platform.score.toFixed(1)}/10, ${platform.downloads} descargas, y análisis clave de precios, contenido y valor. Compara las mejores apps ahora.`;
  const canonical = `/platforms/${platform.slug}`;
  // These platforms also have a review on the English (reelpulse.net) sister site.
  const REELPULSE_PLATFORM_SLUGS = new Set([
    "dramabox", "shortmax", "moboreels", "reelshort", "flextv", "goodshort", "kalostv", "dreameshort", "flickreels", "playlet",
  ]);
  const hasEnglishAlternate = REELPULSE_PLATFORM_SLUGS.has(platform.slug);

  return {
    title,
    description,
    alternates: {
      canonical,
      ...(hasEnglishAlternate && {
        languages: {
          "en": `https://reelpulse.net/platforms/${platform.slug}`,
          "es-419": `https://novelaflash.com/platforms/${platform.slug}`,
        },
      }),
    },
    openGraph: {
      title,
      description,
      url: canonical,
    },
  };
}

export default async function PlatformReview({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const platform = platforms.find(p => p.slug === slug);

  if (!platform) {
    notFound();
  }

  const review = PLATFORM_REVIEWS[slug as keyof typeof PLATFORM_REVIEWS];
  const platformUrl = `${SITE_URL}/platforms/${platform.slug}`;
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: `${platform.name} review`,
    reviewBody: review?.verdict ?? platform.description,
    url: platformUrl,
    author: {
      "@type": "Organization",
      name: "NovelaFlash",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: platform.score,
      bestRating: 10,
    },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: platform.name,
      description: platform.description,
      applicationCategory: platform.category,
      image: toAbsoluteUrl(platform.icon),
      operatingSystem: "iOS, Android, Web",
      url: platform.links?.website ?? platformUrl,
    },
  };
  const breadcrumbSchema = createBreadcrumbList([
    { name: "Inicio", item: SITE_URL },
    { name: "Plataformas", item: `${SITE_URL}/platforms` },
    { name: platform.name, item: platformUrl },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={reviewSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-b from-rp-bg-secondary to-rp-bg-primary py-20 border-b border-white/5 relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-rose-600/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4`} />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <ScrollReveal direction="up">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
                <img
                  src={platform.icon}
                  alt={platform.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-3xl object-cover shadow-2xl shadow-rose-500/20"
                />
                <div>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tight text-white">
                      {platform.name}
                    </h1>
                    <div className="badge badge-coral text-sm py-1.5 px-4">{platform.category}</div>
                  </div>
                  <p className="text-rp-text-secondary text-xl font-medium max-w-2xl">
                    {platform.description}
                  </p>
                  <div className="mt-8">
                    <a href={`/go/${platform.slug}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-5 bg-rp-coral text-white text-sm font-black uppercase tracking-[0.2em] rounded-2xl shadow-[0_0_30px_rgba(255,87,87,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:bg-white hover:text-rp-bg-primary transition-all group">
                      Reclama Monedas Gratis y Ve Ahora
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass p-8 rounded-2xl border-white/10">
                  <span className="text-rp-text-muted text-xs uppercase tracking-widest font-bold block mb-2">Calificación Editorial</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-5xl text-rp-coral">{platform.score.toFixed(1)}</span>
                    <span className="text-rp-text-muted font-bold">/ 10</span>
                  </div>
                </div>
                <div className="glass p-8 rounded-2xl border-white/10">
                  <span className="text-rp-text-muted text-xs uppercase tracking-widest font-bold block mb-2">Descargas Globales</span>
                  <span className="font-display font-black text-5xl text-white">{platform.downloads}</span>
                </div>
                <div className="glass p-8 rounded-2xl border-white/10">
                  <span className="text-rp-text-muted text-xs uppercase tracking-widest font-bold block mb-2">Ingreso Anual Estimado</span>
                  <span className="font-display font-black text-5xl text-white">{platform.revenue}</span>
                </div>
              </div>

              {platform.links && (
                <div className="flex flex-wrap gap-4 mt-8">
                  {platform.links.appStore && (
                    <a href={`/go/${platform.slug}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-xl hover:bg-rp-coral hover:text-white transition-all">
                      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                      App Store
                    </a>
                  )}
                  {platform.links.googlePlay && (
                    <a href={`/go/${platform.slug}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-xl hover:bg-rp-coral hover:text-white transition-all">
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 32 32" fill="currentColor"><path d="M17,14.5l4.2-4.5L4.9,1.2C4.8,1.1,4.6,1.1,4.3,1L17,14.5z"/><path d="M23,21l5.9-3.2c0.7-0.4,1.1-1,1.1-1.8s-0.4-1.5-1.1-1.8L23,11l-4.7,5L23,21z"/><path d="M2.4,1.9C2.1,2.2,2,2.6,2,3V29c0,0.4,0.1,0.8,0.4,1.2L15.6,16L2.4,1.9z"/><path d="M17,17.5L4.3,31c0.2,0,0.4-0.1,0.6-0.2L21.2,22L17,17.5z"/></svg>
                      Google Play
                    </a>
                  )}
                  {platform.links.website && (
                    <a href={`/go/${platform.slug}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3.5 border border-white/20 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all">
                      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                      Sitio Oficial
                    </a>
                  )}
                </div>
              )}
            </ScrollReveal>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <div className="space-y-16">
                <section>
                   <h2 className="font-display font-black text-3xl uppercase tracking-tight text-white mb-6">Visión General</h2>
                   <div className="prose prose-invert max-w-none text-rp-text-secondary text-lg leading-relaxed space-y-6">
                     <p>{review?.overview}</p>
                   </div>
                 </section>

                <section>
                   <h2 className="font-display font-black text-3xl uppercase tracking-tight text-white mb-6">Biblioteca de Contenido</h2>
                   <div className="prose prose-invert max-w-none text-rp-text-secondary text-lg leading-relaxed space-y-6">
                     <p>{review?.contentLibrary}</p>
                   </div>
                 </section>

                <section>
                   <h2 className="font-display font-black text-3xl uppercase tracking-tight text-white mb-6">Precios y Valor</h2>
                   <div className="prose prose-invert max-w-none text-rp-text-secondary text-lg leading-relaxed space-y-6">
                     <p>{review?.pricing}</p>
                   </div>
                 </section>

                <section className="p-8 rounded-2xl bg-rp-bg-card border border-white/5">
                   <h2 className="font-display font-black text-3xl uppercase tracking-tight text-white mb-8">El Veredicto</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                     <div>
                       <h4 className="text-rp-green font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-rp-green" /> A Favor
                       </h4>
                       <ul className="space-y-3 text-sm text-rp-text-secondary">
                         {review?.pros.map((pro) => (
                           <li key={pro} className="flex items-start gap-2">
                             <span className="text-rp-green font-bold">✓</span> {pro}
                           </li>
                         ))}
                       </ul>
                     </div>
                     <div>
                       <h4 className="text-rp-pink font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-rp-pink" /> En Contra
                       </h4>
                       <ul className="space-y-3 text-sm text-rp-text-secondary">
                         {review?.cons.map((con) => (
                           <li key={con} className="flex items-start gap-2">
                             <span className="text-rp-pink font-bold">×</span> {con}
                           </li>
                         ))}
                       </ul>
                     </div>
                   </div>
                    <p className="text-white font-medium italic border-t border-white/5 pt-6">
                      &ldquo;{review?.verdict}&rdquo;
                    </p>
                 </section>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-32 space-y-8">
                <div className="bg-rp-bg-card border border-white/5 rounded-2xl p-8">
                  <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-8">Desglose de Calificación</h3>
                  <div className="space-y-6">
                    {[
                      { label: "Calidad de Contenido", score: 9.5 },
                      { label: "Experiencia de Usuario", score: 9.0 },
                      { label: "Relación Precio-Valor", score: 8.5 },
                      { label: "Innovación", score: 9.8 },
                    ].map((item) => (
                      <div key={item.label} className="space-y-2">
                        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                          <span className="text-rp-text-secondary">{item.label}</span>
                          <span className="text-white">{item.score}</span>
                        </div>
                        <div className="score-bar">
                          <div className="score-bar-fill" style={{ width: `${item.score * 10}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-rp-bg-card border border-white/5 rounded-2xl p-8">
                  <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-6">Datos Rápidos</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Desarrollador", value: "Crazy Maple Studio" },
                      { label: "Sede", value: "Sunnyvale, CA" },
                      { label: "Fecha de Lanzamiento", value: "Agosto 2022" },
                      { label: "Disponibilidad", value: "iOS, Android, Web" },
                    ].map((fact) => (
                      <div key={fact.label} className="flex flex-col">
                        <span className="text-[10px] text-rp-text-muted uppercase tracking-widest font-black mb-1">{fact.label}</span>
                        <span className="text-sm font-bold text-white">{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-rp-bg-card border border-white/5 rounded-2xl p-8">
                  <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-6">Alternativas</h3>
                  <div className="flex flex-col gap-4">
                    {platforms.slice(1, 4).map((alt) => (
                      <Link key={alt.slug} href={`/platforms/${alt.slug}`} className="group card p-4 flex items-center gap-4">
                        <img
                          src={alt.icon}
                          alt={alt.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-xl object-cover"
                        />
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-white group-hover:text-rp-coral transition-colors">{alt.name}</span>
                          <span className="text-[10px] text-rp-text-muted uppercase font-black">Calificación {alt.score}</span>
                        </div>
                         <span className="ml-auto text-rp-text-muted group-hover:text-white transition-colors"><svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return platforms.map(p => ({ slug: p.slug }));
}
