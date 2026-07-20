import type { Metadata } from "next";
import Link from "@/components/ui/InternalLink";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import {
  featuredArticle,
  trendingArticles,
  latestArticles,
} from "@/lib/data";
import {
  ARTICLE_FAQ_SCHEMA,
  createBreadcrumbList,
  parsePublishedDate,
  SITE_URL,
  toAbsoluteUrl,
} from "@/lib/seo";

// Combine all articles
const ALL_ARTICLES = [featuredArticle, ...trendingArticles, ...latestArticles];

// Article content with 3 sections each
interface ArticleSection {
  heading: string;
  body: string;
}

interface ArticleContent {
  sections: ArticleSection[];
}

interface FaqEntry {
  name: string;
  acceptedAnswer?: {
    text?: string;
  };
}

function isFaqEntry(value: unknown): value is FaqEntry {
  if (typeof value !== "object" || value === null) return false;

  const entry = value as Record<string, unknown>;
  return typeof entry.name === "string";
}

const ARTICLE_CONTENT: Record<string, ArticleContent> = {
  "como-ver-dramabox-gratis": {
    sections: [
      {
        heading: "Trucos Legales para Monedas Gratis",
        body: "DramaBox se ha convertido en una de las aplicaciones más populares de América Latina. Aunque sus episodios premium requieren monedas, existen múltiples formas legales de conseguirlas sin gastar un centavo. El método principal es el inicio de sesión diario (Daily Check-in). Al abrir la aplicación todos los días de manera consecutiva, las recompensas aumentan gradualmente."
      },
      {
        heading: "Tareas Diarias y Anuncios",
        body: "Otra forma extremadamente efectiva de desbloquear episodios es a través del sistema de tareas. DramaBox permite ver hasta 10 anuncios diarios que te recompensan con monedas al instante. Además, compartir enlaces de episodios en tus redes sociales (como TikTok o WhatsApp) y agregar series a tu lista de favoritos también te otorgará bonos adicionales."
      },
      {
        heading: "Códigos Promocionales y Eventos",
        body: "Sigue las redes sociales oficiales de DramaBox. La plataforma frecuentemente publica 'Promo Codes' durante fines de semana, días festivos o lanzamientos de nuevas series. Estos códigos tienen un límite de tiempo o de usos, por lo que debes ser rápido para canjearlos en la sección de tu perfil."
      }
    ]
  },
  "mejores-novelas-hombres-lobo-2026": {
    sections: [
      {
        heading: "El Auge de los Hombres Lobo en Formato Vertical",
        body: "Las historias de Alfa, Omega, y vínculos predestinados han encontrado su formato perfecto en las miniseries verticales. En 2026, la producción de estas series ha alcanzado niveles cinematográficos, con efectos especiales impresionantes y actores que capturan a la perfección la intensidad de la jerarquía de las manadas."
      },
      {
        heading: "Las 3 Mejores Series de la Temporada",
        body: "1. 'El Secreto del Alfa': Una historia de venganza y romance prohibido que ha roto récords de audiencia. 2. 'Rechazada pero Poderosa': El clásico tropo de la chica rechazada que descubre su verdadero poder ancestral. 3. 'Luna de Sangre': Un thriller de suspenso y romance que te mantendrá al borde de tu asiento."
      },
      {
        heading: "Dónde Verlas",
        body: "La mayoría de estas producciones están disponibles en DramaBox y ShortMax. Si eres un fanático acérrimo del género, te recomendamos adquirir la suscripción VIP mensual de ShortMax, que ofrece el mejor catálogo de fantasía paranormal de la actualidad."
      }
    ]
  },
  "dramabox-vs-shortmax-es": {
    sections: [
      {
        heading: "Batalla de Titanes: DramaBox y ShortMax",
        body: "En 2026, si tienes un teléfono inteligente en América Latina, es casi seguro que has visto anuncios de DramaBox o ShortMax. Ambas plataformas dominan el mercado de los microdramas, pero ¿cuál es mejor? ReelShort puede ser el rey global, pero en contenido en español, estas dos se llevan la corona."
      },
      {
        heading: "Catálogo y Calidad",
        body: "DramaBox brilla por su inmenso volumen de contenido. Siempre hay algo nuevo que ver, especialmente si amas los tropos de multimillonarios y venganza. ShortMax, por otro lado, invierte un poco más en la calidad de producción por serie y destaca fuertemente en el género de Hombres Lobo y fantasía urbana."
      },
      {
        heading: "Precios y Veredicto",
        body: "Ambas aplicaciones usan un modelo similar de pago por episodio (monedas). Sin embargo, ShortMax suele tener paquetes promocionales más agresivos para nuevos usuarios, mientras que DramaBox recompensa mejor a los usuarios constantes con su sistema de tareas gratuitas. Si buscas ver contenido gratis, DramaBox es más amigable; si estás dispuesto a pagar por alta calidad de producción, elige ShortMax."
      }
    ]
  },
  "la-doble-vida-esposo-multimillonario-resumen": {
    sections: [
      {
        heading: "El Fenómeno Global de ReelShort",
        body: "Ninguna serie ha revolucionado el formato vertical como 'La doble vida de mi esposo multimillonario' (The Double Life of My Billionaire Husband). Esta miniserie de 49 episodios de ReelShort generó cientos de millones de vistas en todo el mundo, estableciendo el estándar para todos los dramas que le siguieron."
      },
      {
        heading: "Análisis de Personajes: Sebastian y Natalie",
        body: "La trama sigue a Sebastian Klein, el hijo ilegítimo de la poderosa familia Klein, quien finge ser un vago arruinado para ocultar su verdadera identidad como un magnate multimillonario secreto. Se casa con Natalie Adams, una mujer desesperada por pagar las facturas médicas de su madre. La química entre ambos actores eleva esta serie de una simple telenovela a un romance adictivo de combustión lenta."
      },
      {
        heading: "Explicación del Final y Costos",
        body: "Desbloquear toda la serie requiere aproximadamente 2,500 monedas (unos $19.99 USD). Sin embargo, con paciencia y usando los bonos diarios, puedes verla completamente gratis en una semana. El clímax final, donde Sebastian revela su verdadera identidad frente a la familia que maltrató a Natalie, es uno de los momentos más satisfactorios de la historia de los microdramas."
      }
    ]
  },
  "amor-a-destiempo-kalostv": {
    sections: [
      {
        heading: "El Éxito de Matrimonio Sorpresa de KalosTV",
        body: "'Amor a Destiempo' (Timely Love) se ha convertido en el título estrella de KalosTV este verano. Con 82 episodios vertiginosos y una producción cinematográfica, esta serie de romance urbano de alto riesgo ha capturado a la audiencia hispanohablante."
      },
      {
        heading: "Dinámica de la Trama",
        body: "Charlotte Sanders se casa repentinamente con William Shaw, creyendo que él es un simple empleado corporativo. No sabe que en realidad es el único heredero del imperio financiero Shaw. A diferencia de las heroínas tradicionales, Charlotte no es una damisela en apuros; es inteligente, ingeniosa y defiende a su marido de los ataques de la alta sociedad."
      },
      {
        heading: "Economía de KalosTV",
        body: "Los primeros 10 episodios son gratuitos. A partir de ahí, los episodios cuestan entre 40 y 60 monedas. Para los que hacen maratones, el Pase VIP Semanal ($14.99) de KalosTV es la mejor inversión. Para los usuarios gratuitos, KalosTV ofrece uno de los sistemas de registro diario más generosos del mercado."
      }
    ]
  },
  "guia-de-seguridad-apps-miniseries": {
    sections: [
      {
        heading: "Metodología de Prueba y Hallazgos",
        body: "Realizamos pruebas exhaustivas de seguridad en las 12 principales aplicaciones de miniseries, evaluando la privacidad de datos, transparencia de facturación y moderación de contenido. Muchas apps recopilan datos extensos del usuario con mínima transparencia. Es crucial saber qué aplicaciones son seguras para instalar en tu teléfono."
      },
      {
        heading: "Las Apps Más Seguras",
        body: "Nuestras pruebas revelan que plataformas como ReelShort, DramaBox y ShortMax implementan prácticas de seguridad estándar de la industria, incluyendo cifrado fuerte y procesamiento seguro de pagos. Aplicaciones emergentes más pequeñas a veces fallan en ofrecer políticas de privacidad claras."
      },
      {
        heading: "Recomendaciones para Usuarios",
        body: "Revisa siempre la política de privacidad. Sé cauteloso con las compras dentro de la aplicación (in-app purchases) y monitorea tus estados de cuenta. Los padres deben usar controles parentales, ya que muchas de estas aplicaciones contienen contenido maduro o violento no apto para menores."
      }
    ]
  },
  "mejores-apps-de-miniseries-2026": {
    sections: [
      {
        heading: "El Boom de las Miniseries",
        body: "En 2026, el ecosistema de aplicaciones de dramas cortos ha madurado enormemente. Ya no solo se trata de ReelShort. Hemos clasificado las principales aplicaciones considerando la calidad del contenido, facilidad de uso, sistema de recompensas gratuitas y precios de suscripción."
      },
      {
        heading: "Las 3 Principales Plataformas",
        body: "1. ReelShort: Sigue siendo el rey de la calidad visual y el contenido original en inglés (subtitulado). 2. DramaBox: El rey de América Latina, con un catálogo masivo y excelentes opciones gratuitas. 3. ShortMax: La opción premium para contenido de fantasía y hombres lobo."
      },
      {
        heading: "Plataformas Emergentes a Seguir",
        body: "Aplicaciones como KalosTV y MoboReels están creciendo rápidamente, ofreciendo géneros de nicho y modelos de monetización más amigables. Te recomendamos instalar varias y usar sus monedas gratuitas diarias para maximizar tu visualización."
      }
    ]
  },
  "como-ganar-dinero-con-miniseries": {
    sections: [
      {
        heading: "Nuevas Fuentes de Ingreso para Creadores",
        body: "El auge de los microdramas ha creado oportunidades sin precedentes. Escritores exitosos pueden ganar entre $500 y $5,000 por guion. A diferencia de la televisión tradicional, un guion de miniserie tiene solo 15-20 páginas, lo que permite a los escritores producir mucho más rápido."
      },
      {
        heading: "Modelos de Monetización",
        body: "Existen múltiples plataformas que conectan escritores con productores. Algunas ofrecen pagos por adelantado, mientras que otras usan modelos de reparto de ingresos (royalties) donde los escritores ganan un porcentaje del dinero que su serie genera."
      },
      {
        heading: "Desafíos y Oportunidades",
        body: "El mercado es competitivo y la calidad exigida está aumentando. Además, algunas plataformas están experimentando con guiones generados por Inteligencia Artificial. Sin embargo, los escritores que logran capturar la atención de la audiencia con ganchos fuertes y emociones intensas están siendo sumamente solicitados."
      }
    ]
  },
  "dramabox-vs-reelshort-es": {
    sections: [
      {
        heading: "Comparación de Cuota de Mercado",
        body: "ReelShort y DramaBox son los dos gigantes globales. ReelShort lidera en Estados Unidos con ingresos masivos, pero DramaBox está creciendo a un ritmo vertiginoso en América Latina y el Sudeste Asiático gracias a su fuerte inversión en marketing local y contenido adaptado."
      },
      {
        heading: "Estrategia de Contenido",
        body: "ReelShort se centra en contenido premium de alto presupuesto con actores occidentales. DramaBox tiene una estrategia más agresiva de adquisición, licenciando un volumen enorme de contenido asiático (doblado y subtitulado) y ofreciendo una diversidad de géneros inigualable."
      },
      {
        heading: "Perspectiva Futura",
        body: "Se espera que ReelShort mantenga su dominio como la marca global de prestigio, mientras que DramaBox continuará ganando participación de mercado en geografías regionales ofreciendo opciones más económicas y contenido localmente relevante."
      }
    ]
  },
  "guia-de-precios-shortmax": {
    sections: [
      {
        heading: "Entendiendo el Sistema de Monedas",
        body: "ShortMax utiliza una economía basada en monedas. Para desbloquear un episodio premium, normalmente necesitas entre 50 y 70 monedas. Comprar monedas sueltas suele ser costoso, por lo que entender los paquetes y ofertas es vital para no gastar de más."
      },
      {
        heading: "Suscripciones VIP y Pases",
        body: "La opción más inteligente para los maratonistas es la Suscripción VIP. ShortMax ofrece planes semanales, mensuales y anuales que otorgan acceso ilimitado sin anuncios a todo el catálogo. Si ves más de 3 series al mes, el pase VIP mensual se paga solo."
      },
      {
        heading: "Cómo Evitar la Trampa de Gastos",
        body: "Los microdramas están diseñados para ser adictivos. Establece un presupuesto mensual antes de empezar a ver. Combina las recompensas gratuitas diarias con compras de paquetes promocionales limitados (como las ofertas de fin de semana) para estirar tu dinero al máximo."
      }
    ]
  },
  "es-seguro-reelshort": {
    sections: [
      {
        heading: "Evaluación de Privacidad y Legitimidad",
        body: "ReelShort es operado por Crazy Maple Studio, una empresa legítima con sede en California (respaldada por gigantes tecnológicos). La aplicación es completamente segura, no contiene malware y cumple con las regulaciones de la App Store y Google Play."
      },
      {
        heading: "Privacidad de Datos",
        body: "Como muchas aplicaciones modernas, ReelShort recopila datos de uso para alimentar su algoritmo de recomendación y orientar anuncios. Su política de privacidad es estándar para la industria. Sus pasarelas de pago están cifradas, por lo que las compras de monedas son seguras."
      },
      {
        heading: "Moderación de Contenido",
        body: "ReelShort cuenta con sistemas robustos de moderación para evitar contenido explícitamente ilegal. Sin embargo, sus series a menudo incluyen temáticas maduras (romance, violencia leve). Se recomienda precaución y control parental si menores de edad usan la aplicación."
      }
    ]
  },
  "como-subir-contenido-a-plataformas": {
    sections: [
      {
        heading: "El Ecosistema de Distribución",
        body: "Si eres un creador de contenido o estudio independiente, distribuir tu microdrama en plataformas como DramaBox o ReelShort puede generar ingresos masivos. Estas aplicaciones están constantemente buscando nuevo contenido para satisfacer la demanda insaciable de los usuarios."
      },
      {
        heading: "Requisitos Técnicos",
        body: "El contenido debe estar grabado en formato vertical (9:16), idealmente en 4K o 1080p, con iluminación cinematográfica y audio claro. Los episodios deben durar estrictamente entre 1 y 3 minutos, con ganchos narrativos (cliffhangers) intensos al final de cada uno."
      },
      {
        heading: "Proceso de Envío",
        body: "La mayoría de las plataformas tienen portales específicos para creadores o correos de adquisición de contenido en sus sitios web corporativos. Prepara un 'pitch deck' profesional, un tráiler de tu serie y los primeros 5 episodios para enviar como muestra a sus equipos de adquisición."
      }
    ]
  }
};

export async function generateStaticParams() {
  return ALL_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

// Generate metadata for each article
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ALL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const canonical = `/articles/${article.slug}`;

  return {
    title: article.metaTitle ?? `${article.title} — NovelaFlash`,
    description: article.metaDescription ?? article.excerpt,
    alternates: { canonical },
    openGraph: {
      title: article.metaTitle ?? `${article.title} — NovelaFlash`,
      description: article.metaDescription ?? article.excerpt,
      url: canonical,
      type: "article",
      images: [{ url: article.image, width: 1200, height: 630, alt: article.title }],
    },
  };
}

// Get category color class
function getCategoryColorClass(color: string): string {
  const colorMap: Record<string, string> = {
    violet: "badge-violet",
    pink: "badge-pink",
    cyan: "badge-cyan",
    green: "badge-green",
  };
  return colorMap[color] || "badge-coral";
}

// Main page component
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ALL_ARTICLES.find((a) => a.slug === slug);
  const content = ARTICLE_CONTENT[slug];

  if (!article || !content) {
    notFound();
  }

  // Get related articles (exclude current article)
  const relatedArticles = ALL_ARTICLES.filter(
    (a) => a.slug !== article.slug
  ).slice(0, 3);
  const articleUrl = `${SITE_URL}/articles/${article.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: parsePublishedDate(article.publishedAt),
    dateModified: parsePublishedDate(article.publishedAt),
    author: {
      "@type": "Person",
      name: article.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "NovelaFlash",
      url: SITE_URL,
      logo: toAbsoluteUrl("/og.jpg"),
    },
    image: toAbsoluteUrl(article.image),
    mainEntityOfPage: articleUrl,
    url: articleUrl,
  };
  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Articles", item: `${SITE_URL}/articles` },
    { name: article.title, item: articleUrl },
  ]);

  const faqSchema = ARTICLE_FAQ_SCHEMA[slug];

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <Nav />

      <main className="flex-grow">
        {/* Gradient Header */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 via-transparent to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-600/5 blur-[120px] rounded-full" />

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <ScrollReveal direction="up">
              <div className="flex items-center gap-3 mb-6">
                <div className={`badge ${getCategoryColorClass(article.categoryColor)}`}>
                  {article.category}
                </div>
                {article.featured && (
                  <div className="badge badge-coral">Featured</div>
                )}
              </div>

              <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tight text-white mb-8 leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                <div className="flex items-center gap-4">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-bold text-sm">
                      {article.author.name}
                    </p>
                    <p className="text-rp-text-muted text-xs">
                      {article.publishedAt}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-rp-text-secondary">
                  <span className="flex items-center gap-2">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {article.readTime}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Article Body */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          {content.sections.map((section, index) => (
            <ScrollReveal key={section.heading} direction="up" delay={index * 0.1}>
              <div className="mb-16">
                <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tight text-white mb-6">
                  {section.heading}
                </h2>
                <div className="prose prose-invert max-w-none">
                  {section.body.split("\n\n").map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-rp-text-secondary leading-relaxed mb-6 text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
          
          {/* Visual FAQ Section for SEO compliance */}
          {Array.isArray(faqSchema?.mainEntity) && (
            <ScrollReveal direction="up" delay={0.4}>
              <div className="mt-16 pt-12 border-t border-white/10">
                <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tight text-white mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {faqSchema.mainEntity.filter(isFaqEntry).map((faq, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <h3 className="text-xl font-bold text-white mb-3">{faq.name}</h3>
                      <p className="text-rp-text-secondary leading-relaxed">{faq.acceptedAnswer?.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </section>

        {/* Related Articles */}
        <section className="bg-rp-bg-secondary py-20 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal direction="up" className="mb-16">
              <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight text-white">
                Related Articles
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <ScrollReveal
                  key={relatedArticle.slug}
                  direction="up"
                  delay={index * 0.1}
                >
                  <Link href={`/articles/${relatedArticle.slug}`}>
                    <div className="group card card-glow p-6 h-full flex flex-col hover:scale-105 transition-transform">
                      <div className="flex items-center gap-2 mb-4">
                        <div
                          className={`badge ${getCategoryColorClass(relatedArticle.categoryColor)}`}
                        >
                          {relatedArticle.category}
                        </div>
                      </div>

                      <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-rp-coral transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>

                      <p className="text-rp-text-secondary text-sm mb-6 flex-grow line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-rp-text-muted">
                        <span>{relatedArticle.publishedAt}</span>
                        <span>{relatedArticle.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
