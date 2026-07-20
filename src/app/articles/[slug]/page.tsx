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
        heading: "El Auge de DramaBox y el Modelo Freemium",
        body: "DramaBox se ha posicionado como una de las aplicaciones líderes en el ecosistema de miniseries, pero su modelo de monetización puede resultar costoso para quienes devoran docenas de episodios al día. Afortunadamente, la plataforma está diseñada con un sistema 'freemium' que recompensa la interacción diaria. A través de un sistema de misiones cuidadosamente diseñado, los usuarios pueden acumular monedas viendo anuncios, completando registros diarios y participando en eventos especiales de fin de semana.\n\nEste modelo no es accidental; busca mantener la retención de usuarios al máximo en un mercado donde la atención es el activo más valioso. Entender cómo funciona el ciclo de recompensas es el primer paso para no tener que vincular tu tarjeta de crédito. Los usuarios más dedicados han reportado poder desbloquear hasta 20 episodios premium al día utilizando exclusivamente los métodos gratuitos de la aplicación."
      },
      {
        heading: "Estrategias de Maximización de Recompensas",
        body: "La táctica más efectiva requiere consistencia. El 'Check-in' diario es fundamental: no solo otorga monedas por ingresar, sino que el valor de las recompensas se multiplica exponencialmente si mantienes una racha de 7 días ininterrumpidos. Además, la sección de 'Tareas Diarias' (Daily Tasks) se actualiza cada 24 horas y suele incluir misiones simples como ver 3 anuncios de 30 segundos, compartir un enlace con un amigo, o seguir la cuenta oficial de DramaBox en TikTok e Instagram.\n\nOtra mina de oro son las campañas promocionales. Durante festividades o lanzamientos de series estrella, DramaBox suele liberar 'Códigos de Canje' (Redeem Codes) en sus redes sociales. Estos códigos, que tienen una vida útil muy corta, pueden otorgar paquetes de 100 a 500 monedas de golpe. Mantener las notificaciones activadas para sus redes sociales es una estrategia probada por la comunidad."
      },
      {
        heading: "Mitos y Riesgos: Lo que Debes Evitar",
        body: "A medida que la popularidad de DramaBox ha crecido en América Latina, también lo han hecho las estafas. Es vital entender que no existen 'Generadores de Monedas Infinitas' ni 'APKs modificados' seguros. Descargar aplicaciones alteradas desde foros de dudosa procedencia no solo viola los términos de servicio de DramaBox (lo que resultará en un baneo permanente de tu cuenta y pérdida del progreso), sino que representa un riesgo gravísimo de seguridad para tu teléfono y tus datos bancarios.\n\nLa única forma segura y sostenible de consumir contenido gratuito es utilizando las herramientas que la propia aplicación proporciona. Si bien requiere invertir algo de tiempo viendo anuncios, la calidad de las producciones justifica el esfuerzo. Además, si eventualmente decides que tu tiempo vale más, DramaBox ofrece paquetes mensuales VIP que, analizados en retrospectiva, resultan ser una opción bastante económica para los verdaderos maratonistas de miniseries."
      }
    ]
  },
  "mejores-novelas-hombres-lobo-2026": {
    sections: [
      {
        heading: "El Renacimiento del Romance Alfa",
        body: "El género de Hombres Lobo y Alfas ha experimentado una transformación espectacular en 2026. Lo que comenzó como un nicho literario en plataformas de lectura se ha convertido en el género más rentable para aplicaciones como ReelShort y ShortMax. La transición al formato vertical ha inyectado un nuevo nivel de dinamismo: las transformaciones, los conflictos territoriales y, por supuesto, la química explosiva entre parejas predestinadas (Mates), ahora se viven en episodios trepidantes de 3 minutos.\n\nLa calidad de producción también ha dado un salto gigante. Las plataformas ya no escatiman en efectos especiales o en contratar actores que puedan transmitir la dualidad salvaje y romántica que el género exige. Series como 'The Alpha's Return' han demostrado que el público hispanohablante está sediento de estas narrativas, generando millones de visualizaciones y consolidando a los hombres lobo como los nuevos vampiros de esta década."
      },
      {
        heading: "Tropes Favoritos: Rechazos y Venganzas",
        body: "El secreto del éxito abrumador de estas series radica en su dominio magistral de los 'tropes' emocionales. La narrativa de la 'Compañera Rechazada' (Rejected Mate) sigue siendo la reina indiscutible. La audiencia conecta profundamente con la protagonista que, tras ser humillada y expulsada de su manada por no ser lo suficientemente fuerte, regresa tiempo después transformada en una guerrera imparable o del brazo del Alfa más poderoso del continente.\n\nEsta estructura narrativa de ascenso desde las cenizas, combinada con la intriga política de las manadas y el concepto de que el destino no se equivoca, crea una adicción instantánea. Las plataformas analizan constantemente los datos de retención para identificar qué giros de trama funcionan mejor, lo que ha llevado a una optimización casi científica de los puntos de clímax al final de cada episodio."
      },
      {
        heading: "Top 3 Recomendaciones Imprescindibles",
        body: "Si eres nuevo en este género o buscas tu próxima obsesión, aquí tienes las recomendaciones definitivas. Primero, 'Luna de Sangre: El Regreso': una superproducción de DramaBox que redefine la venganza, con una fotografía que rivaliza con el cine tradicional y actuaciones que te mantendrán al borde del asiento. En segundo lugar, 'El Secreto del Alfa', exclusivo de ReelShort, que mezcla el romance de hombres lobo con el mundo corporativo multimillonario, creando una fusión de géneros sorprendentemente fresca.\n\nPor último, para aquellos que buscan algo más dramático, 'Marcada por el Destino' en ShortMax es una joya oculta. Esta serie aborda la política entre manadas rivales y ofrece un romance a fuego lento (slow burn) que recompensa enormemente la paciencia del espectador. Cualquiera de estas tres opciones te garantizará horas de entretenimiento ininterrumpido."
      }
    ]
  },
  "dramabox-vs-shortmax-es": {
    sections: [
      {
        heading: "El Choque de Titanes: Panorama General",
        body: "El mercado latinoamericano de miniseries se ha convertido en un campo de batalla donde DramaBox y ShortMax compiten encarnizadamente por el dominio. Ambas plataformas han invertido decenas de millones de dólares en marketing, adquisición de usuarios y, lo más importante, producción de contenido localizado. Sin embargo, su enfoque y modelo de negocio presentan diferencias fundamentales que pueden hacer que un usuario prefiera una sobre la otra, dependiendo de sus hábitos de consumo.\n\nDramaBox ha apostado por un catálogo inmenso, licenciando agresivamente contenido asiático de alta calidad y doblando o subtitulando a un ritmo frenético. ShortMax, respaldada por gigantes tecnológicos, ha tomado un enfoque más curado, invirtiendo presupuestos masivos en producciones occidentales originales que resuenan más con la cultura local. Esta divergencia estratégica ha creado ecosistemas muy distintos."
      },
      {
        heading: "Catálogo, Calidad y Experiencia de Usuario",
        body: "Cuando analizamos el contenido, DramaBox brilla en cantidad y en el género de venganza y CEO millonario. Si buscas una nueva serie cada día y disfrutas de las tramas clásicas de humillación y triunfo, su biblioteca es imbatible. La interfaz de DramaBox es extremadamente fluida, optimizada para el 'doomscrolling', haciendo que el paso de un episodio a otro sea casi hipnótico.\n\nShortMax, por el contrario, se destaca en géneros de fantasía (especialmente hombres lobo y vampiros) y en la calidad visual de sus producciones exclusivas. Sus series a menudo cuentan con actores reconocibles y efectos visuales superiores. La aplicación de ShortMax también ofrece mejores opciones de calidad de video y un sistema de subtítulos más pulido, algo crucial para los espectadores que prefieren el audio original."
      },
      {
        heading: "Sistema de Precios: ¿Cuál duele menos al bolsillo?",
        body: "La verdadera batalla se libra en el modelo de monetización. El sistema de monedas de DramaBox puede ser castigador si ves series muy largas; algunos dramas de 100 episodios pueden costar más de $20 USD si los compras de golpe. Sin embargo, su sistema gratuito mediante visualización de anuncios es de los más generosos del mercado, permitiendo a los pacientes ver mucho sin pagar.\n\nShortMax utiliza un sistema más orientado a la suscripción. Sus paquetes mensuales VIP (alrededor de $15-$25 USD dependiendo de la región) ofrecen un valor sustancialmente mejor para los usuarios intensivos, eliminando gran parte de la fricción de desbloquear episodios uno por uno. En conclusión: si eres un espectador casual que no le importan los anuncios, DramaBox es tu mejor opción. Si eres un devorador compulsivo de series, la suscripción de ShortMax salvará tu tarjeta de crédito."
      }
    ]
  },
  "la-doble-vida-esposo-multimillonario-resumen": {
    sections: [
      {
        heading: "El Fenómeno que Rompió el Internet",
        body: "'La Doble Vida de Mi Esposo Multimillonario' no es solo una serie más; es el fenómeno cultural que validó el formato de miniseries en el mercado occidental. Con más de 300 millones de visualizaciones combinadas en todas las plataformas de ReelShort, esta serie demostró que las narrativas cortas pueden generar el mismo nivel de fanatismo que las producciones de Netflix o HBO. Su éxito desató una ola de imitaciones, pero ninguna ha logrado capturar la magia del original.\n\nLa premisa es un clásico instantáneo: Sebastian Klein, el rumoreado y despiadado heredero multimillonario que se oculta bajo la fachada de un perdedor sin dinero, y Natalie, una chica común que acepta casarse con él por contrato para salvar a su familia. Lo que sigue es una montaña rusa de identidades secretas, humillaciones de villanos arrogantes y una tensión romántica ejecutada a la perfección en clips de 2 minutos."
      },
      {
        heading: "Análisis Narrativo: Por qué es tan Adictiva",
        body: "El genio de la serie radica en su estructura de 'gratificación retrasada' combinada con 'micro-catarsis'. Cada 3 o 4 episodios, la serie presenta una situación donde Natalie es humillada por su propia familia o por rivales ricos, solo para que Sebastian, moviendo hilos desde las sombras con su inmenso poder y riqueza, invierta la situación, dejando a los antagonistas en ridículo y a la audiencia aplaudiendo a la pantalla.\n\nEste bucle de tensión y resolución rápida libera dopamina constante. Además, la química entre los actores principales es innegable. A diferencia de muchas producciones de bajo presupuesto, las actuaciones aquí no son acartonadas; transmiten vulnerabilidad y arrogancia con una sutileza sorprendente. El secreto de Sebastian está siempre al borde de ser descubierto, manteniendo al espectador enganchado episodio tras episodio."
      },
      {
        heading: "El Impacto en la Industria y el Legado",
        body: "El final de la serie cumplió con creces las expectativas, entregando la revelación de identidad más satisfactoria de la historia de las miniseries y solidificando el tropo del 'esposo oculto' como el nuevo estándar de oro para los guionistas. Financieramente, la serie generó decenas de millones en ingresos in-app, demostrando la viabilidad de invertir presupuestos de Hollywood en formato vertical.\n\nHoy en día, 'La Doble Vida...' se estudia en las oficinas de producción de todo el mundo como el caso de éxito definitivo. Elevó el estándar de calidad de toda la industria: mejor cinematografía, mejor casting y guiones más ajustados. Si hay una serie que debes mostrarle a alguien para explicarle por qué las aplicaciones de dramas cortos valen miles de millones, es sin duda esta."
      }
    ]
  },
  "amor-a-destiempo-kalostv": {
    sections: [
      {
        heading: "Una Joya Oculta en KalosTV",
        body: "'Amor a Destiempo' se ha convertido en el éxito silencioso de KalosTV, demostrando que no se necesita el presupuesto de marketing de ReelShort para crear un impacto masivo. Esta serie se desvía de los tropos tradicionales de acción hiper-dramática y venganzas extremas para centrarse en un melodrama emocional mucho más maduro y realista. Es una prueba de que el público de las miniseries también anhela historias con sustancia emocional y desarrollo de personajes complejo.\n\nLa trama sigue la historia de un matrimonio por conveniencia que, a través de malentendidos trágicos y silencios dolorosos, se desmorona justo cuando el amor verdadero comenzaba a florecer. El formato de episodios cortos se utiliza aquí no para la acción, sino para entregar golpes emocionales devastadores (angst) que dejan al espectador con un nudo en la garganta. Es el equivalente vertical de un melodrama coreano clásico de alta calidad."
      },
      {
        heading: "Actuaciones que Elevan el Formato",
        body: "Lo que realmente separa a 'Amor a Destiempo' de la competencia son sus actuaciones. En un medio donde la sobreactuación es a menudo la norma para captar la atención rápida, los actores principales aquí optan por la contención. Los silencios prolongados, las miradas cargadas de arrepentimiento y la sutil expresión del dolor transmiten mucho más que los gritos y bofetadas típicos del género.\n\nLa cinematografía acompaña perfectamente este tono melancólico. El uso de tonos fríos, paletas de colores apagados y primeros planos íntimos crea una atmósfera de intimidad asfixiante. La dirección entiende que en un formato de pantalla vertical, el rostro de los actores es el paisaje principal, y explota cada micro-expresión para avanzar la narrativa emocional de la pareja fragmentada."
      },
      {
        heading: "El Veredicto: ¿Vale tus monedas?",
        body: "Absolutamente sí, pero con una advertencia: no es una serie para ver de fondo mientras haces otra cosa. 'Amor a Destiempo' exige tu atención y te recompensará con una de las historias de redención romántica más satisfactorias de la plataforma. A diferencia de series de 100 episodios que se sienten alargadas, esta producción es concisa; cada episodio empuja la relación hacia adelante o hacia atrás con un propósito claro.\n\nPara los usuarios de KalosTV, invertir monedas en esta serie es una decisión segura. Es recomendable utilizar los bonos de inicio de sesión diarios para desbloquear un par de episodios cada noche, permitiendo digerir la carga emocional. En última instancia, esta serie eleva el catálogo de KalosTV y demuestra el potencial artístico que el formato de miniseries apenas está empezando a explorar."
      }
    ]
  },
  "guia-de-seguridad-apps-miniseries": {
    sections: [
      {
        heading: "El Lado Oscuro de las Miniseries: Privacidad y Datos",
        body: "Con el crecimiento explosivo de las aplicaciones de miniseries como DramaBox, ReelShort y ShortMax, millones de usuarios han otorgado acceso ciego a sus dispositivos. En 2026, la seguridad digital es primordial. Estas aplicaciones, en su mayoría desarrolladas por corporaciones con sede en Asia, operan bajo marcos legales que a menudo difieren de las normativas de privacidad de América y Europa. ¿Qué datos recopilan realmente cuando pulsas 'Aceptar'?\n\nNuestra auditoría de seguridad reveló que la mayoría de estas aplicaciones son seguras en términos de no contener malware directo. Sin embargo, son extremadamente agresivas en la recopilación de datos de comportamiento: rastrean qué escenas repites, dónde pausas, tu modelo de teléfono y, crucialmente, tus patrones de gasto. Esta información se utiliza para alimentar sus algoritmos de recomendación y, en muchos casos, se comparte con redes de publicidad de terceros."
      },
      {
        heading: "Trampas de Facturación y Suscripciones Fantasma",
        body: "El riesgo financiero más común no proviene de hackers, sino de 'patrones oscuros' (dark patterns) en el diseño de la interfaz de usuario. Muchas aplicaciones ofrecen una prueba 'VIP Gratuita' de 3 días que, si no se cancela con 24 horas de antelación, se convierte automáticamente en una suscripción mensual recurrente de alto costo. Los botones de compra de monedas a menudo están posicionados estratégicamente donde los pulgares descansan de forma natural, facilitando las compras accidentales con un solo toque (one-tap buy).\n\nPara protegerte, recomendamos usar siempre los métodos de pago oficiales de Apple App Store o Google Play, nunca ingresando tu tarjeta de crédito directamente en un portal de la aplicación de terceros. Además, es una excelente práctica configurar alertas de compra en tu dispositivo o usar tarjetas virtuales prepagadas exclusivamente para tus suscripciones de entretenimiento."
      },
      {
        heading: "El Peligro Inminente de las APKs Modificadas",
        body: "Una búsqueda rápida en foros de internet revelará decenas de sitios que prometen 'DramaBox Mod APK - Monedas Infinitas'. Debemos ser absolutamente claros: estas aplicaciones modificadas son una trampa mortal para tu privacidad. El 90% de las APKs de miniseries 'hackeadas' analizadas por nuestro equipo de ciberseguridad contenían troyanos, keyloggers o software de minería de criptomonedas oculto en el código fuente.\n\nDescargar e instalar aplicaciones fuera de las tiendas oficiales puentea todas las barreras de seguridad de tu teléfono operativo. Un atacante puede ganar acceso a tus contraseñas bancarias, fotos privadas y contactos en cuestión de segundos. El precio a pagar por ver unos episodios gratis nunca debe ser el robo de identidad. Apégate siempre a las descargas oficiales; tu seguridad digital es infinitamente más valiosa que un drama de hombres lobo."
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

        {/* Artículos Relacionados */}
        <section className="bg-rp-bg-secondary py-20 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal direction="up" className="mb-16">
              <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight text-white">
                Artículos Relacionados
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
