import type { Metadata } from "next";
import { ConversionGuidePage, type ConversionGuide } from "../ConversionGuidePage";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Las Mejores Miniseries de Hombres Lobo y Alfas — NovelaFlash",
  description: "Rechazos, parejas predestinadas y conflictos de manadas. Las mejores series de hombres lobo en formato vertical.",
  alternates: {
    canonical: "/guides/mejores-novelas-hombres-lobo",
    languages: {
      "en": "https://reelpulse.net/guides/best-werewolf-short-dramas",
      "es-419": "https://novelaflash.com/guides/mejores-novelas-hombres-lobo",
    },
  },
  openGraph: {
    title: "Las Mejores Miniseries de Hombres Lobo y Alfas",
    description: "Rechazos, parejas predestinadas y conflictos de manadas. Las mejores series de hombres lobo en formato vertical.",
    url: "/guides/mejores-novelas-hombres-lobo",
  },
};

const guide: ConversionGuide = {
  slug: "mejores-novelas-hombres-lobo",
  badge: "Género de Fantasía",
  title: "Las Mejores Miniseries de Hombres Lobo y Alfas",
  dek: "Rechazos, parejas predestinadas y conflictos de manadas. Las mejores series de hombres lobo en formato vertical.",
  updated: "15 de Julio, 2026",
  verdicts: [
    { label: "Veredicto General", value: "Adictivo y Romántico" },
    { label: "Mejor Para", value: "Fans de la fantasía" },
    { label: "Riesgo Principal", value: "Tramas repetitivas" }
  ],
  sections: [
    {
      title: "Nuestro Top 4 de Miniseries de Hombres Lobo",
      paragraphs: [
        "El género de hombres lobo (Alfas, Lunas rechazadas, parejas predestinadas) es uno de los más populares dentro de las miniseries verticales. Estas son las series mejor calificadas por nuestro equipo editorial en 2026, con su puntaje sobre 10."
      ],
      bullets: [
        "#1 The Alpha's Possession (ReelShort) — 9.6/10. La serie más comentada del género: una Luna rechazada que descubre que su ex-pareja destinada regresa convertido en el Alfa más poderoso de la región.",
        "#2 Fated to the Lycan King (DramaBox) — 9.4/10. Fantasía oscura con un Rey Lycan milenario y una protagonista humana atrapada en un pacto de sangre.",
        "#3 My Alpha Mate (ShortMax) — 9.1/10. Romance de manada con ritmo más ligero, ideal para quienes buscan menos drama y más química entre los protagonistas.",
        "#4 The Rejected Luna (ReelShort) — 8.9/10. El clásico argumento de venganza y redención tras un rechazo público, con una de las mejores actuaciones del género."
      ]
    },
    {
      title: "¿Por Qué Este Género Es Tan Adictivo?",
      paragraphs: [
        "Las tramas de hombres lobo funcionan tan bien en formato vertical porque combinan tres ingredientes que enganchan de inmediato: el rechazo inicial (que genera empatía instantánea con la protagonista), la revelación de poder (el giro que cambia la dinámica) y el romance de pareja predestinada (el 'destino' como excusa para una química intensa).",
        "Si nunca has visto una serie del género, te recomendamos empezar por The Alpha's Possession en ReelShort: tiene el ritmo más pulido y sirve como excelente introducción antes de explorar el resto del catálogo."
      ]
    }
  ],
  faqs: [
    { question: "¿Cuál es la mejor miniserie de hombres lobo para empezar?", answer: "The Alpha's Possession en ReelShort es la mejor puerta de entrada al género: tiene la producción más cuidada y una trama que resume todos los elementos clásicos (rechazo, poder, pareja destinada)." },
    { question: "¿Las series de hombres lobo están disponibles en español?", answer: "Sí, tanto ReelShort como DramaBox y ShortMax ofrecen doblaje o subtítulos en español para la mayoría de sus títulos más populares, incluidos los de este top." },
    { question: "¿Por qué se repiten tanto los argumentos de 'Luna rechazada'?", answer: "Es la fórmula más popular del género porque genera enganche emocional inmediato. Aun así, cada plataforma le da un giro distinto: DramaBox tiende a lo fantástico, mientras ReelShort apuesta por el drama realista." },
    { question: "¿Necesito pagar para ver estas series completas?", answer: "La mayoría ofrece varios episodios gratis al día. Para terminarlas sin esperar, necesitarás monedas o una suscripción VIP; consulta nuestras guías de precios de cada plataforma para calcular el costo real." }
  ],
  relatedGuides: [
    { href: "/guides/mejores-series-reelshort", label: "Top ReelShort", description: "Las miniseries mejor calificadas de la plataforma." },
    { href: "/guides/mejores-series-dramabox", label: "Top DramaBox", description: "Las series más vistas en DramaBox." },
    { href: "/guides/guia-de-precios-shortmax", label: "Precios de ShortMax", description: "Cuánto cuesta ver el catálogo completo de ShortMax." }
  ]
};

export default function GuidePage() {
  return <ConversionGuidePage guide={guide} />;
}
