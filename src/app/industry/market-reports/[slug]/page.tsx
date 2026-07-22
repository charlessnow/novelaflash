import type { Metadata } from "next";
import Link from "@/components/ui/InternalLink";
import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

interface Report {
  slug: string;
  title: string;
  date: string;
  stat: string;
  summary: string;
}

interface ReportSection {
  heading: string;
  body: string;
}

interface ReportContent {
  sections: ReportSection[];
}

const REPORTS: Report[] = [
  {
    slug: "ingresos-q1-2026",
    title: "Informe de Ingresos de Miniseries T1 2026",
    date: "Abril 2026",
    stat: "$700M en ingresos trimestrales",
    summary:
      "Un trimestre récord para la industria, impulsado por la expansión masiva en los mercados de Norteamérica y el sudeste asiático.",
  },
  {
    slug: "tamano-mercado-global-2025",
    title: "Análisis del Tamaño del Mercado Global 2025",
    date: "Enero 2026",
    stat: "$26B en mercado total",
    summary:
      "Análisis integral de la economía del video vertical, con seguimiento del crecimiento desde 2022 hasta el pico de 2025.",
  },
  {
    slug: "ingresos-exterior-china-2024",
    title: "Ingresos de Miniseries Chinas en el Exterior 2024",
    date: "Diciembre 2025",
    stat: "$4.3B en el exterior",
    summary:
      "Un análisis de la ola 'Chuhai', con los estudios chinos dominando el panorama del microdrama occidental.",
  },
  {
    slug: "costo-adquisicion-usuarios",
    title: "Referencias de Costo de Adquisición de Usuarios",
    date: "Marzo 2026",
    stat: "$0.40-0.80 CPI",
    summary:
      "Un análisis a fondo de la eficiencia de marketing y los costos de adquisición específicos por plataforma en Meta, TikTok y Google.",
  },
];

const REPORT_CONTENT: Record<string, ReportContent> = {
  "ingresos-q1-2026": {
    sections: [
      {
        heading: "T1 2026: Un Trimestre Récord",
        body:
          "El primer trimestre de 2026 marcó el trimestre más fuerte en la historia de las miniseries. Solo ReelShort registró $80 millones de dólares en ingresos globales por compras dentro de la app —un aumento del 40% respecto al T4 2025— mientras que DramaBox registró aproximadamente $35 millones. Sumando los ingresos de ShortMax, FlexTV, MoboReels y un nivel creciente de plataformas regionales, los ingresos totales de la categoría por compras dentro de la app para el trimestre se estiman en unos $700 millones a nivel global. Eso representa aproximadamente el triple del nivel registrado en el T1 2025, confirmando que el microdrama ha entrado en una fase de crecimiento acumulativo en lugar de lineal.\n\nEl aporte más fuerte siguió proviniendo de Norteamérica, donde la adaptación al inglés, las pruebas creativas agresivas y los embudos de monetización refinados elevaron el ingreso promedio por usuario pagador en las principales apps. Los 55 millones de descargas de ReelShort y sus 2.7 millones de usuarios activos diarios —un aumento del 125% interanual— establecieron un nuevo referente de engagement en la categoría.",
      },
      {
        heading: "Los Líderes Consolidaron su Posición",
        body:
          "ReelShort y DramaBox mantuvieron su posición como los líderes claros de la categoría al entrar a 2026, controlando juntos aproximadamente el 70%+ de los ingresos de las apps premium de miniseries. El desempeño de $80M de ReelShort en el T1 2026 confirmó su dominio en los mercados occidentales, donde su estrategia de contenido premium y sus valores de producción de cine vertical han impulsado una conversión líder en la industria de espectadores gratuitos a suscriptores pagos.\n\nDetrás de los dos líderes, una segunda ola de competidores continuó escalando rápidamente. ShortMax, FlexTV y MoboReels estuvieron entre los recién llegados de más rápido crecimiento, beneficiándose de menores costos de contenido, empaquetado de género localizado y modelos de nivel gratuito más flexibles. Su ascenso confirmó que el mercado seguía abierto a nuevos participantes capaces de combinar buena retención con una adquisición de usuarios disciplinada. Las 40 millones de descargas de DramaBox y su agresiva expansión de catálogo en el sudeste asiático y América Latina lo posicionaron como el principal retador al dominio global de ReelShort.",
      },
      {
        heading: "Qué Anticipa el T1 2026 para el Resto del Año",
        body:
          "El T1 2026 estableció tres señales claras para el resto del año. Primero, las miniseries ya no son una carrera de descargas: la verdadera ventaja competitiva ahora viene de la profundidad de la monetización: sistemas de monedas, suscripciones VIP y desbloqueos de episodios basados en cliffhangers que convierten a espectadores casuales en suscriptores pagos. Segundo, la diversificación internacional se está acelerando; Norteamérica sigue siendo el mercado de mayores ingresos, pero el sudeste asiático, Japón e India están creciendo rápidamente.\n\nTercero, la producción asistida por IA está reduciendo significativamente los costos de contenido, permitiendo a las plataformas aumentar su ritmo de lanzamientos sin un crecimiento proporcional de costos. Los estudios que logren combinar contenido viral con cadenas de producción localizadas y colocación de cliffhangers basada en datos dominarán el segundo semestre de 2026. El trimestre de $700M del T1 2026 no es un techo: es evidencia de que la demanda subyacente por narrativas seriadas nativas para móviles se ha vuelto estructuralmente duradera.",
      },
    ],
  },
  "tamano-mercado-global-2025": {
    sections: [
      {
        heading: "Qué Tan Grande se Volvió el Mercado",
        body:
          "Para 2025, la economía de las miniseries se había vuelto lo suficientemente grande como para medirse como un segmento mediático global y no como una tendencia nicho de apps móviles. Los reportes de la industria de medios comerciales chinos, las declaraciones de las plataformas y el seguimiento de ingresos de apps de Sensor Tower apuntaban todos en la misma dirección: el microdrama se había convertido en una categoría de miles de millones de dólares, con China aún como la mayor base de producción y los mercados en el exterior aportando el crecimiento incremental más rápido. Buena parte de la creación de valor más citada de la industria provino de los desbloqueos de episodios pagados y los ingresos por suscripción, más que solo de la publicidad.\n\nLa cifra de $26 mil millones citada con frecuencia refleja la amplia oportunidad del video vertical y el microdrama que se discute en toda la industria, especialmente al combinar la actividad doméstica china con la monetización adyacente en apps en el exterior, servicios de producción y distribución. Lo que importa estratégicamente es menos la estimación exacta que la trayectoria: de un formato marginal a inicios de la década de 2020 a una categoría que capta la atención de los grandes estudios para 2025.",
      },
      {
        heading: "Por Qué 2025 Fue un Año Decisivo",
        body:
          "Varias fuerzas estructurales se alinearon en 2025. Las apps de miniseries habían aprendido a convertir los hábitos de video social en comportamiento de entretenimiento pagado, especialmente mediante narrativas cargadas de cliffhangers y sistemas de desbloqueo sin fricción. Al mismo tiempo, las editoriales refinaron la localización: pasaron de simplemente doblar historias de origen chino a producir variantes en inglés, del sudeste asiático y de América Latina adaptadas a los gustos locales. Eso elevó tanto la retención como la disposición a gastar.\n\nLos comentarios de Sensor Tower en 2025 también mostraron que la concentración de la categoría seguía siendo alta en la cima, con ReelShort y DramaBox liderando los ingresos, pero el mercado se estaba ampliando por debajo de ellos. Un número creciente de apps podía comprar tráfico de forma eficiente, probar creativos rápidamente y reciclar estructuras de trama comprobadas en nuevos géneros. Esa combinación de formatos narrativos repetibles y distribución vía tiendas de apps le dio a la categoría una escalabilidad inusual para un negocio de entretenimiento.",
      },
      {
        heading: "Implicaciones para el Panorama Competitivo",
        body:
          "La historia del tamaño del mercado en 2025 fue, en última instancia, una historia de industrialización. Las miniseries dejaron de parecer una colección de éxitos virales y empezaron a parecer un modelo operativo: producción rápida, pruebas de alto volumen, adquisición pagada agresiva y optimización del valor de vida del usuario. Eso favoreció a las empresas con redes de producción transfronterizas, analítica sólida y capacidad de lanzar contenido al ritmo necesario sin sacrificar calidad.\n\nEl resultado fue un mercado en el que los líderes establecidos tenían ventajas significativas, pero los nuevos participantes aún tenían espacio si se especializaban. Las empresas enfocadas en romance, venganza, melodrama familiar y ficción premium localizada todavía podían encontrar distribución porque la demanda crecía más rápido de lo que cualquier catálogo podía satisfacer. En ese sentido, 2025 fue el año en que el mercado demostró tanto su escala como su profundidad.",
      },
    ],
  },
  "ingresos-exterior-china-2024": {
    sections: [
      {
        heading: "El Avance de $4,300 Millones en el Exterior",
        body:
          "Los medios y reportes de mercado chinos en 2025 situaron los ingresos en el exterior de la industria china de miniseries en unos $4,300 millones de dólares para 2024. Esa cifra se convirtió en uno de los indicadores más claros de la expansión internacional del sector. Reflejó no solo los ingresos de apps orientadas al consumidor en el extranjero, sino también la creciente capacidad de exportación de los estudios, equipos de producción y estructuras narrativas chinas que ya habían sido probadas a nivel doméstico antes de adaptarse a audiencias extranjeras.\n\nLa importancia de la cifra de $4,300 millones es que redefinió 'salir al exterior' de una estrategia experimental a un motor de crecimiento central. Las empresas chinas ya habían desarrollado la memoria muscular de producción para narrativas seriadas de alto volumen y rápido recambio. Una vez que esas capacidades se combinaron con la compra de publicidad y la localización en el exterior, produjeron un negocio capaz de escalar rápidamente fuera del mercado continental.",
      },
      {
        heading: "Cómo Ganaron las Editoriales Chinas en el Extranjero",
        body:
          "La estrategia en el exterior se apoyó en tres ventajas. Primero, los estudios chinos tenían amplia experiencia produciendo microdramas a velocidad industrial, dándoles una ventaja de costo e iteración sobre los equipos occidentales que todavía aprendían el formato. Segundo, entendían la mecánica de ritmo que convierte espectadores en pagadores: riesgos inmediatos, giros frecuentes y un cierre de episodios agresivo. Tercero, trataban la distribución de forma científica, probando grandes cantidades de creativos publicitarios en Meta, TikTok y otros canales hasta que la economía unitaria funcionara.\n\nApps como ReelShort y DramaBox se convirtieron en las expresiones más visibles de ese modelo en los mercados de habla inglesa, pero la historia más profunda era el ecosistema detrás de ellas. La adaptación de guiones, la posproducción, los procesos de casting y el marketing de rendimiento se coordinaban cada vez más a través de fronteras. Eso permitió a las editoriales llevar el ADN narrativo de origen chino a mercados en el exterior mientras empaquetaban el contenido de una forma que se sentía suficientemente local para las audiencias de cada región.",
      },
      {
        heading: "Qué Sigue Después de la Ola Chuhai",
        body:
          "El hito de ingresos en el exterior de 2024 mostró que las empresas chinas estaban exportando no solo contenido, sino know-how operativo. Para 2025, su reto ya no era demostrar que existía demanda en el extranjero, sino defender el margen a medida que la competencia se intensificaba y subían los costos de adquisición de clientes. Las editoriales que sostuvieron el crecimiento fueron las que invirtieron en producción local, identidades de marca más fuertes y profundidad de catálogo, en lugar de depender solo de importaciones traducidas.\n\nPara el mercado de medios en general, el resultado de $4,300 millones en el exterior de China demostró que el microdrama se había convertido en uno de los ejemplos recientes más exitosos de globalización del entretenimiento digital chino. También sugirió que la siguiente fase de competencia dependería menos de la ventaja de ser el primero en moverse y más de quién pudiera combinar la eficiencia de producción china con una ejecución creativa genuinamente local.",
      },
    ],
  },
  "costo-adquisicion-usuarios": {
    sections: [
      {
        heading: "El Rango de CPI que Definió 2025",
        body:
          "Una referencia práctica usada en todo el sector de miniseries en 2025 fue un costo por instalación de aproximadamente $0.40 a $0.80 dólares para campañas de rendimiento a gran escala, especialmente cuando las editoriales compraban alcance amplio en el inventario de Meta, TikTok y Google. Los costos reales variaban según el mercado, la calidad del creativo y el objetivo de la campaña, pero este rango capturaba el nivel en el que muchas editoriales todavía podían adquirir suficientes usuarios para alimentar sus embudos de monetización sin destruir los periodos de recuperación.\n\nLa razón por la que el CPI importaba tanto en las miniseries es que el formato depende de una reposición intensa en la parte alta del embudo. Estas apps pueden monetizar muy bien a los usuarios más comprometidos, pero también enfrentan una fuga significativa porque los espectadores suelen llegar por un solo gancho argumental o concepto publicitario. Eso hace que la eficiencia de adquisición sea inseparable de la estrategia de contenido: las apps con mejor desempeño solían ser las que podían lanzar nuevos creativos con la misma rapidez con la que lanzaban nuevos episodios.",
      },
      {
        heading: "Diferencias entre Plataformas: Meta, TikTok y Google",
        body:
          "Meta siguió siendo central porque ofrecía una optimización de conversión madura y una base de audiencia amplia para creativos seriados de romance, venganza y drama familiar. TikTok fue especialmente efectivo para sembrar demanda mediante conceptos de video cargados de ganchos que se parecían al contenido nativo del feed, aunque la volatilidad de las campañas podía ser mayor a medida que se agotaba la fatiga creativa. Google ayudó a capturar intención y tráfico más amplio de descubrimiento de apps, a menudo complementando los canales sociales en lugar de reemplazarlos.\n\nEn la práctica, las editoriales más sofisticadas no trataban estos canales como intercambiables. Construían sistemas creativos específicos para cada uno. El creativo de TikTok solía enfatizar el giro más impactante en los primeros segundos, mientras que los anuncios de Meta se apoyaban más en el conflicto de pareja y el texto tipo cliffhanger. El rango de CPI de referencia solo se mantenía cuando la estrategia de canal, el empaquetado de contenido y el flujo de aterrizaje estaban alineados.",
      },
      {
        heading: "Por Qué las Referencias Solas No Bastan",
        body:
          "El rango de CPI titular es útil, pero puede ser engañoso sin contexto de ingresos. Los datos de mercado de Sensor Tower de 2025 mostraron qué tan rápido escalaban los ingresos de la categoría, pero esos ingresos estaban concentrados en las apps que lograban convertir a los usuarios adquiridos en compradores recurrentes. Una instalación barata no vale nada si el usuario nunca llega al primer desbloqueo pagado o abandona después de una sola historia. Los operadores más sólidos medían el costo contra el comportamiento posterior, como la finalización del tutorial, la conversión de la primera compra y la recuperación a siete días.\n\nPor eso las principales editoriales de la categoría seguían reinvirtiendo en pruebas narrativas, ritmo del muro de pago y optimización de la página de la tienda, en lugar de tratar la adquisición como una función aparte. En las miniseries, el crecimiento eficiente viene de lograr que la promesa del anuncio y la experiencia narrativa dentro de la app se sientan como un solo embudo continuo. La referencia de 2025 de $0.40 a $0.80 de CPI se entiende mejor como el boleto de entrada para competir, no como la fórmula completa para una escala rentable.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return REPORTS.map((report) => ({
    slug: report.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const report = REPORTS.find((item) => item.slug === slug);

  if (!report) {
    notFound();
  }

  const canonical = `/industry/market-reports/${report.slug}`;

  return {
    title: `${report.title} — NovelaFlash`,
    description: report.summary,
    alternates: { canonical },
    openGraph: {
      title: `${report.title} — NovelaFlash`,
      description: report.summary,
      url: canonical,
      type: "article",
      locale: "es_419",
    },
  };
}

export default async function MarketReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = REPORTS.find((item) => item.slug === slug);
  const content = REPORT_CONTENT[slug];

  if (!report || !content) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <Nav />

      <main className="flex-grow">
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 via-transparent to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-600/5 blur-[120px] rounded-full" />

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <ScrollReveal direction="up">
              <Link
                href="/industry/market-reports"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-rp-text-secondary hover:text-white transition-colors mb-8"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Volver a Informes de Mercado
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="badge badge-coral">Informe</div>
                <div className="badge badge-violet">{report.stat}</div>
              </div>

              <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tight text-white mb-8 leading-tight">
                {report.title}
              </h1>

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-8">
                <p className="text-white font-bold text-sm uppercase tracking-[0.2em]">
                  {report.date}
                </p>
                <p className="text-rp-text-secondary text-base md:text-lg max-w-3xl leading-relaxed">
                  {report.summary}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

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
        </section>
      </main>

      <Footer />
    </div>
  );
}
