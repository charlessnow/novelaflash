import type { Metadata } from "next";
import { ConversionGuidePage, type ConversionGuide } from "../ConversionGuidePage";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Las Mejores Miniseries Chinas que Debes Ver — NovelaFlash",
  description: "Desde venganzas de multimillonarios hasta dramas históricos, estas son las producciones chinas que están dominando el formato vertical.",
  alternates: {
    canonical: "/guides/mejores-miniseries-chinas",
    languages: {
      "en": "https://reelpulse.net/guides/best-chinese-short-dramas",
      "es-419": "https://novelaflash.com/guides/mejores-miniseries-chinas",
    },
  },
  openGraph: {
    title: "Las Mejores Miniseries Chinas que Debes Ver",
    description: "Desde venganzas de multimillonarios hasta dramas históricos, estas son las producciones chinas que están dominando el formato vertical.",
    url: "/guides/mejores-miniseries-chinas",
  },
};

const guide: ConversionGuide = {
  slug: "mejores-miniseries-chinas",
  badge: "Recomendaciones",
  title: "Las Mejores Miniseries Chinas que Debes Ver",
  dek: "Desde venganzas de multimillonarios hasta dramas históricos, estas son las producciones chinas que están dominando el formato vertical.",
  updated: "18 de Mayo, 2026",
  verdicts: [
    { label: "Veredicto General", value: "Altamente Adictivo" },
    { label: "Mejor Para", value: "Amantes del drama" },
    { label: "Riesgo Principal", value: "Mala traducción" }
  ],
  sections: [
    {
      title: "El Fenómeno de las Miniseries Chinas",
      paragraphs: [
        "Las miniseries chinas se han convertido en un fenómeno global que genera más de $26 mil millones de dólares en ingresos al año. Lo que empezó como un formato de nicho es hoy una fuerza cultural que cautiva audiencias en todo el mundo con historias adictivas, alta calidad de producción y tecnología de cine vertical.",
        "El éxito del formato está en su capacidad de contar historias completas en episodios cortos, perfectos para los hábitos de consumo actuales. Los creadores chinos han perfeccionado el arte del cliffhanger, la profundidad emocional y el desarrollo de personajes dentro de tiempos muy ajustados."
      ]
    },
    {
      title: "Las 8 Series Chinas Más Recomendadas",
      paragraphs: [
        "Estas son algunas de las series chinas mejor calificadas del momento, disponibles principalmente en ReelShort y DramaBox:"
      ],
      bullets: [
        "\"No Return\" (Thriller, 4.9/5) — Una mujer descubre que no puede volver a su antigua vida. Explora temas de transformación, supervivencia y redención con actuaciones intensas.",
        "\"Mute Girl Who Sings\" (Drama, 4.8/5) — La historia inspiradora de una chica muda que encuentra su voz a través de la música. Celebra la resiliencia y el autodescubrimiento.",
        "\"The Past Drowned in Moonlight\" (Romance, 4.8/5) — Un romance poético sobre dos personas que se reencuentran con su pasado, con una fotografía cuidada y temas de nostalgia y segundas oportunidades.",
        "\"Boxing Champion\" (Deportes, 4.7/5) — El camino de un boxeador hacia la grandeza, combinando acción deportiva con superación personal.",
        "\"Love Never Ends\" (Romance, 4.7/5) — Un romance que trasciende el tiempo y las circunstancias, con un alcance épico y gran intensidad emocional.",
        "\"Iron Lady\" (Drama, 4.6/5) — Una mujer que asciende al poder en un mundo dominado por hombres. Una historia empoderadora sin ser moralizante.",
        "\"East of Eden\" (Drama, 4.6/5) — Un drama familiar épico sobre el conflicto generacional y la redención, con momentos íntimos dentro de una narrativa amplia.",
        "\"My Heroine\" (Romance, 4.5/5) — Una comedia romántica encantadora sobre una mujer que se convierte en la heroína de su propia historia."
      ]
    },
    {
      title: "Dónde Ver Miniseries Chinas",
      paragraphs: [
        "ReelShort y DramaBox se especializan en miniseries chinas con subtítulos en varios idiomas, incluyendo español, y ofrecen tanto opciones gratuitas como premium. YouTube también tiene canales que suben series completas con subtítulos. Douyin (la versión china de TikTok), donde muchas de estas series se estrenan originalmente, solo está disponible en China continental y Hong Kong; los usuarios internacionales pueden encontrar contenido similar en TikTok."
      ]
    }
  ],
  faqs: [
    { question: "¿Por qué las miniseries chinas usan títulos en inglés?", answer: "La mayoría de las plataformas (ReelShort, DramaBox) publican estas series para audiencias internacionales bajo títulos en inglés, incluso cuando la producción original es china. Es la forma más fácil de encontrarlas al buscar dentro de la app." },
    { question: "¿Las miniseries chinas tienen subtítulos en español?", answer: "Sí, la mayoría de las series populares en ReelShort y DramaBox incluyen subtítulos en español además de inglés y otros idiomas." },
    { question: "¿Cuánto duran los episodios de estas series?", answer: "Normalmente entre 1 y 3 minutos por episodio, con series completas de 60 a 100 episodios pensadas para maratones cortos." },
    { question: "¿Necesito pagar para ver estas series completas?", answer: "Los primeros episodios suelen ser gratuitos. Para continuar la serie completa generalmente necesitas monedas o una suscripción VIP; consulta nuestra guía de precios de cada plataforma." }
  ],
  relatedGuides: [
    { href: "/guides/mejores-series-reelshort", label: "Mejores Series de ReelShort", description: "El catálogo completo de originales de ReelShort." },
    { href: "/guides/mejores-series-dramabox", label: "Mejores Series de DramaBox", description: "Las producciones más populares de DramaBox." },
    { href: "/guides/actores-de-miniseries-chinas", label: "Actores de Miniseries Chinas", description: "Conoce a los protagonistas detrás de estas series." }
  ]
};

export default function GuidePage() {
  return <ConversionGuidePage guide={guide} />;
}
