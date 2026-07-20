import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import Link from "@/components/ui/InternalLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Guías Prácticas y Consejos para Miniseries — NovelaFlash",
  description: "Descubre cómo conseguir monedas gratis, comparar precios y aprender sobre la seguridad de las mejores plataformas de miniseries.",
};

const guides = [
  {
    slug: "mejores-apps-de-miniseries-bl",
    badge: "Clasificación BL",
    title: "Las Mejores Apps de Miniseries BL en 2026",
    description: "Descubre dónde ver los mejores dramas cortos BL (Boys' Love), comparando catálogos de Tailandia, Corea y producciones originales exclusivas."
  },
  {
    slug: "mejores-miniseries-chinas",
    badge: "Recomendaciones",
    title: "Las Mejores Miniseries Chinas que Debes Ver",
    description: "Desde venganzas de multimillonarios hasta dramas históricos, estas son las producciones chinas que están dominando el formato vertical."
  },
  {
    slug: "mejores-series-dramabox",
    badge: "Guía de Plataforma",
    title: "Las 10 Mejores Series en DramaBox",
    description: "No desperdicies tus monedas. Hemos seleccionado las series mejor calificadas en DramaBox con las tramas más atrapantes."
  },
  {
    slug: "mejores-series-reelshort",
    badge: "Guía de Plataforma",
    title: "Las Mejores Miniseries de ReelShort (2026)",
    description: "El catálogo de ReelShort es enorme. Aquí tienes las producciones originales más costosas e impresionantes que valen tu tiempo."
  },
  {
    slug: "mejores-novelas-hombres-lobo",
    badge: "Género de Fantasía",
    title: "Las Mejores Miniseries de Hombres Lobo y Alfas",
    description: "Rechazos, parejas predestinadas y conflictos de manadas. Las mejores series de hombres lobo en formato vertical."
  },
  {
    slug: "como-cancelar-dramabox",
    badge: "Guía de Facturación",
    title: "¿Cómo Cancelar la Suscripción de DramaBox?",
    description: "Guía paso a paso para cancelar tu suscripción VIP de DramaBox en iOS, Android y evitar cobros automáticos sorpresa."
  },
  {
    slug: "como-cancelar-reelshort",
    badge: "Guía de Facturación",
    title: "¿Cómo Cancelar tu Suscripción a ReelShort?",
    description: "Evita cargos no deseados. Aprende a cancelar tu suscripción de ReelShort a través de Apple App Store o Google Play."
  },
  {
    slug: "actores-de-miniseries-chinas",
    badge: "Cultura Pop",
    title: "Estrellas Emergentes: Actores de Miniseries Chinas",
    description: "Conoce a los actores y actrices que se han convertido en reyes y reinas de la industria de las miniseries verticales en 2026."
  },
  {
    slug: "alternativas-a-dramabox",
    badge: "Comparación",
    title: "Las Mejores Alternativas a DramaBox",
    description: "Si DramaBox te parece muy caro, aquí tienes las mejores alternativas gratuitas y económicas para ver miniseries."
  },
  {
    slug: "conseguir-monedas-dramabox",
    badge: "Guía de Monedas",
    title: "Cómo Conseguir Monedas Gratis en DramaBox",
    description: "Todos los trucos legales, tareas diarias y códigos promocionales para ver series en DramaBox sin gastar dinero real."
  },
  {
    slug: "precios-de-dramabox",
    badge: "Guía de Precios",
    title: "¿Cuánto Cuesta Realmente DramaBox?",
    description: "Analizamos el costo de las monedas, las suscripciones VIP y el precio real de terminar una serie completa de 80 episodios."
  },
  {
    slug: "apps-miniseries-gratis",
    badge: "Lista Gratuita",
    title: "Mejores Apps para Ver Miniseries Gratis",
    description: "No todas las apps requieren suscripción. Clasificamos las plataformas que ofrecen la mayor cantidad de contenido gratuito mediante anuncios."
  },
  {
    slug: "es-seguro-dramabox",
    badge: "Seguridad",
    title: "¿Es Seguro Usar DramaBox?",
    description: "Revisión de seguridad de DramaBox en 2026: privacidad de datos, facturación, anuncios y la legitimidad de la aplicación en la tienda."
  },
  {
    slug: "es-seguro-reelshort",
    badge: "Seguridad",
    title: "¿Es Seguro ReelShort? Revisión de Privacidad",
    description: "Análisis completo de la seguridad de ReelShort. Descubre qué datos recopila y cómo proteger tus métodos de pago."
  },
  {
    slug: "es-seguro-shortmax",
    badge: "Seguridad",
    title: "¿Es Seguro Descargar ShortMax?",
    description: "Nuestra auditoría de seguridad sobre ShortMax. Evaluamos sus políticas de privacidad, permisos de la aplicación y pasarelas de pago."
  },
  {
    slug: "conseguir-monedas-reelshort",
    badge: "Guía de Monedas",
    title: "Trucos para Monedas Gratis en ReelShort",
    description: "Aprende a maximizar tus bonos diarios, ver anuncios de manera eficiente y usar códigos promocionales en ReelShort."
  },
  {
    slug: "precios-de-reelshort",
    badge: "Guía de Precios",
    title: "Análisis de Precios: ¿Vale la pena ReelShort?",
    description: "Desglosamos la economía de ReelShort. ¿Deberías comprar paquetes de monedas o suscribirte a su plan VIP mensual?"
  },
  {
    slug: "ingresos-mercado-miniseries-2026",
    badge: "Reporte de Industria",
    title: "Proyecciones de Ingresos del Mercado de Miniseries 2026",
    description: "Análisis financiero detallado de cómo el formato vertical alcanzará los $26 mil millones a nivel global."
  },
  {
    slug: "miniseries-coreanas",
    badge: "Exploración de Género",
    title: "Las Mejores Miniseries Coreanas Verticales",
    description: "K-Dramas adaptados para la pantalla móvil. Descubre la calidad cinematográfica y el romance de combustión lenta de Corea."
  },
  {
    slug: "guia-de-precios-shortmax",
    badge: "Guía de Precios",
    title: "Guía de Precios de ShortMax",
    description: "Todo lo que necesitas saber sobre las monedas de ShortMax, sus planes VIP y cómo obtener el mejor valor por tu dinero."
  },
  {
    slug: "ver-series-bl-gratis",
    badge: "Guía Gratuita",
    title: "Cómo Ver Series BL Gratis",
    description: "Las mejores tácticas y plataformas legales para ver los dramas BL más candentes sin pagar suscripciones costosas."
  },
  {
    slug: "como-ver-dramabox-gratis",
    badge: "Guía General",
    title: "Cómo Ver Miniseries Completamente Gratis",
    description: "Una guía definitiva aplicable a DramaBox, ReelShort y FlexTV para desbloquear episodios gratuitamente todos los días."
  }
];

export default function GuidesPage() {
  const breadcrumbSchema = createBreadcrumbList([
    { name: "Inicio", item: SITE_URL },
    { name: "Guías", item: `${SITE_URL}/guides` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={breadcrumbSchema} />
      <Nav />
      <main className="flex-grow pt-32">
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6">
              Guías
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl mb-16">
              Consejos prácticos, guías de precios y trucos para maximizar tu experiencia de visualización.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <ScrollReveal key={guide.slug} direction="up" delay={index * 0.05}>
                <Link href={`/guides/${guide.slug}`}>
                  <div className="group card p-8 h-full flex flex-col hover:-translate-y-1 transition-transform border border-white/5 hover:border-rp-coral/30">
                    <div className="mb-4">
                      <div className="badge badge-coral text-xs py-1 px-3 mb-4 inline-block">{guide.badge}</div>
                      <h2 className="font-display font-bold text-2xl text-white group-hover:text-rp-coral transition-colors mb-3 leading-tight">
                        {guide.title}
                      </h2>
                    </div>
                    <p className="text-rp-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                      {guide.description}
                    </p>
                    <div className="flex items-center text-xs font-black uppercase tracking-[0.2em] text-rp-coral mt-auto">
                      Leer Guía <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-32">
          <ScrollReveal direction="up">
            <NewsletterCTA />
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}