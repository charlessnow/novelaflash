import type { Metadata } from "next";
import { ConversionGuidePage, type ConversionGuide } from "../ConversionGuidePage";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Las Mejores Miniseries Coreanas Verticales — NovelaFlash",
  description: "K-Dramas adaptados para la pantalla móvil. Descubre la calidad cinematográfica y el romance de combustión lenta de Corea.",
  alternates: {
    canonical: "/guides/miniseries-coreanas",
    languages: {
      "en": "https://reelpulse.net/guides/short-korean-dramas",
      "es-419": "https://novelaflash.com/guides/miniseries-coreanas",
    },
  },
  openGraph: {
    title: "Las Mejores Miniseries Coreanas Verticales",
    description: "K-Dramas adaptados para la pantalla móvil. Descubre la calidad cinematográfica y el romance de combustión lenta de Corea.",
    url: "/guides/miniseries-coreanas",
  },
};

const guide: ConversionGuide = {
  slug: "miniseries-coreanas",
  badge: "Exploración de Género",
  title: "Las Mejores Miniseries Coreanas Verticales",
  dek: "K-Dramas adaptados para la pantalla móvil. Descubre la calidad cinematográfica y el romance de combustión lenta de Corea.",
  updated: "19 de Abril, 2026",
  verdicts: [
    { label: "Veredicto General", value: "Excelente Fotografía" },
    { label: "Mejor Para", value: "Fans de K-Dramas" },
    { label: "Riesgo Principal", value: "Ritmo más lento" }
  ],
  sections: [
    {
      title: "Nuestro Top 5 de Miniseries Coreanas",
      paragraphs: [
        "Los estudios coreanos han adoptado el formato vertical sin perder su sello característico: profundidad emocional y producción cuidada. Estos son los K-dramas cortos mejor calificados de 2026."
      ],
      bullets: [
        "First Marriage Then Love (Romance) — 4.8/5. Un matrimonio de conveniencia que se convierte en amor genuino, con diálogos ingeniosos y química auténtica.",
        "Hometown's Embrace (Drama) — 4.7/5. Una historia sobre volver a casa y reconectar con el pasado, con una fotografía especialmente cuidada.",
        "Midnight Confessions (Romance) — 4.6/5. Secretos revelados de noche; combina misterio y romance con gran manejo de la tensión.",
        "Seoul Nights (Suspenso) — 4.6/5. Thriller urbano ambientado en las calles de Seúl, de ritmo más rápido que el K-drama tradicional.",
        "Love in the Workplace (Romance) — 4.5/5. Romance de oficina sobre los límites entre lo profesional y lo personal."
      ]
    },
    {
      title: "K-Drama vs. C-Drama: Diferencias Clave",
      paragraphs: [
        "Si vienes del mundo de las miniseries chinas (C-drama), notarás varias diferencias. Los K-dramas priorizan el desarrollo de personajes y el romance de combustión lenta, mientras que los C-dramas suelen ser más rápidos en los giros de trama y las escaladas emocionales.",
        "En cuanto a producción, los estudios coreanos mantienen un estándar cinematográfico muy consistente, aunque los estudios chinos están cerrando esa brecha rápidamente. Si te gusta el romance con más tensión y menos prisa, empieza por First Marriage Then Love; si prefieres más drama y giros constantes, nuestras guías de ReelShort y DramaBox tienen mejores opciones."
      ]
    }
  ],
  faqs: [
    { question: "¿Cuál es la mejor miniserie coreana para empezar?", answer: "First Marriage Then Love es la mejor introducción al género: combina el romance de combustión lenta típico del K-drama con episodios cortos fáciles de maratonear." },
    { question: "¿En qué se diferencian los K-dramas de los C-dramas verticales?", answer: "Los K-dramas se enfocan más en el desarrollo emocional de los personajes y un ritmo más pausado, mientras que los C-dramas priorizan giros de trama rápidos y conflictos externos intensos." },
    { question: "¿Dónde puedo ver estas miniseries coreanas?", answer: "Estas series están disponibles principalmente en las apps de miniseries verticales que reseñamos en NovelaFlash, la mayoría con subtítulos en español." },
    { question: "¿Los K-dramas cortos tienen la misma calidad que los K-dramas tradicionales?", answer: "Sí, los estudios coreanos mantienen el mismo estándar de producción que en sus series largas, solo que condensado en episodios de formato vertical." }
  ],
  relatedGuides: [
    { href: "/guides/mejores-miniseries-chinas", label: "Top C-Dramas", description: "Las mejores miniseries chinas para comparar estilos." },
    { href: "/guides/mejores-novelas-hombres-lobo", label: "Hombres Lobo", description: "El género de fantasía más popular del momento." },
    { href: "/guides/apps-miniseries-gratis", label: "Apps Gratuitas", description: "Dónde ver miniseries sin pagar suscripción." }
  ]
};

export default function GuidePage() {
  return <ConversionGuidePage guide={guide} />;
}
