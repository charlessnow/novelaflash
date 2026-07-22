import type { Metadata } from "next";
import { ConversionGuidePage, type ConversionGuide } from "../ConversionGuidePage";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Las Mejores Apps de Miniseries BL en 2026 — NovelaFlash",
  description: "Descubre dónde ver los mejores dramas cortos BL (Boys' Love), comparando catálogos de Tailandia, Corea y producciones originales exclusivas.",
  alternates: {
    canonical: "/guides/mejores-apps-de-miniseries-bl",
    languages: {
      "en": "https://reelpulse.net/guides/best-bl-short-drama-apps",
      "es-419": "https://novelaflash.com/guides/mejores-apps-de-miniseries-bl",
    },
  },
  openGraph: {
    title: "Las Mejores Apps de Miniseries BL en 2026",
    description: "Descubre dónde ver los mejores dramas cortos BL (Boys' Love), comparando catálogos de Tailandia, Corea y producciones originales exclusivas.",
    url: "/guides/mejores-apps-de-miniseries-bl",
  },
};

const guide: ConversionGuide = {
  slug: "mejores-apps-de-miniseries-bl",
  badge: "Clasificación BL",
  title: "Las Mejores Apps de Miniseries BL en 2026",
  dek: "Descubre dónde ver los mejores dramas cortos BL (Boys' Love), comparando catálogos de Tailandia, Corea y producciones originales exclusivas.",
  updated: "20 de Julio, 2026",
  verdicts: [
    { label: "Veredicto General", value: "ReelShort lidera" },
    { label: "Mejor Para", value: "Fans de BL Asiático" },
    { label: "Riesgo Principal", value: "Suscripciones costosas" }
  ],
  sections: [
    {
      title: "¿Qué es una Miniserie BL?",
      paragraphs: [
        "Las miniseries BL (Boys' Love) son series románticas y dramáticas de episodios cortos que giran en torno a relaciones entre hombres. Cada episodio suele durar entre 5 y 15 minutos, pensado para verse desde el celular. El género BL ha explotado en popularidad en toda Asia, especialmente en Corea, Tailandia y China, y ofrece historias que van desde el romance hasta el suspenso y la comedia de acción."
      ]
    },
    {
      title: "Las 5 Mejores Series BL",
      paragraphs: [
        "Estas son las series BL más aclamadas y populares disponibles en apps de miniseries:"
      ],
      bullets: [
        "\"Wicked Game\" (Tailandia) — Thriller psicológico sobre dos hombres atrapados en un peligroso juego de manipulación y deseo. Disponible en ReelShort. Calificación: 9.2/10.",
        "\"My School President\" (Tailandia) — Romance adolescente ambientado en un club de música escolar, con humor y momentos genuinamente emotivos. Disponible en YouTube. Calificación: 8.9/10.",
        "\"Hometown's Embrace\" (Corea) — Reencuentro de dos amigos de la infancia que descubren sentimientos más profundos entre ellos. Disponible en MoboReels. Calificación: 8.7/10.",
        "\"Destiny Seeker\" (China) — Fantasía-romance sobre dos guerreros de bandos opuestos que encuentran el amor en medio del conflicto. Disponible en DramaBox. Calificación: 8.5/10.",
        "\"Office Crush\" (Corea) — Comedia romántica de oficina sobre dos colegas navegando los límites profesionales y sus sentimientos. Disponible en ReelShort. Calificación: 8.3/10."
      ]
    },
    {
      title: "Mejores Apps para Contenido BL",
      paragraphs: [
        "ReelShort tiene el catálogo BL más generoso en su nivel gratuito y una fuerte presencia de contenido coreano y tailandés. DramaBox destaca por la diversidad de su catálogo (China, Tailandia y Corea) y sus eventos promocionales frecuentes. MoboReels ofrece una selección más curada, enfocada en calidad sobre cantidad, con fuerte presencia de BL coreano. WeTV es la plataforma oficial de muchos dramas BL tailandeses, con producciones de mayor presupuesto pero un catálogo más pequeño."
      ]
    }
  ],
  faqs: [
    { question: "¿Cuál es la diferencia entre BL y otros géneros románticos?", answer: "BL se enfoca específicamente en relaciones entre hombres. Mientras otros géneros románticos pueden incluir contenido LGBTQ+, el BL centra la experiencia y las relaciones gay como el foco narrativo principal." },
    { question: "¿Las miniseries BL son aptas para todo público?", answer: "La mayoría de las miniseries BL están clasificadas para audiencias maduras (16+) por contenido romántico y a veces explícito. Revisa siempre la clasificación antes de ver." },
    { question: "¿Cuánto duran los episodios de las miniseries BL?", answer: "Los episodios suelen durar entre 5 y 15 minutos, con un promedio de 8 a 10 minutos. Este formato está pensado para verse desde el celular en sesiones cortas." },
    { question: "¿Puedo ver series BL con subtítulos en español?", answer: "Sí, la mayoría de las plataformas ofrecen varios idiomas de subtítulos, incluyendo español. La disponibilidad exacta depende de cada serie y plataforma." }
  ],
  relatedGuides: [
    { href: "/guides/ver-series-bl-gratis", label: "Ver Series BL Gratis", description: "Cómo desbloquear episodios BL sin pagar." },
    { href: "/guides/miniseries-coreanas", label: "Miniseries Coreanas", description: "Las mejores producciones coreanas del momento." },
    { href: "/guides/mejores-series-reelshort", label: "Mejores Series de ReelShort", description: "El catálogo completo de ReelShort, incluyendo BL." }
  ]
};

export default function GuidePage() {
  return <ConversionGuidePage guide={guide} />;
}
