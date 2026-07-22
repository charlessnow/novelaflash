import type { Metadata } from "next";
import { ConversionGuidePage, type ConversionGuide } from "../ConversionGuidePage";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Las 10 Mejores Series en DramaBox — NovelaFlash",
  description: "No desperdicies tus monedas. Hemos seleccionado las series mejor calificadas en DramaBox con las tramas más atrapantes.",
  alternates: {
    canonical: "/guides/mejores-series-dramabox",
    languages: {
      "en": "https://reelpulse.net/guides/best-dramabox-shows",
      "es-419": "https://novelaflash.com/guides/mejores-series-dramabox",
    },
  },
  openGraph: {
    title: "Las 10 Mejores Series en DramaBox",
    description: "No desperdicies tus monedas. Hemos seleccionado las series mejor calificadas en DramaBox con las tramas más atrapantes.",
    url: "/guides/mejores-series-dramabox",
  },
};

const guide: ConversionGuide = {
  slug: "mejores-series-dramabox",
  badge: "Guía de Plataforma",
  title: "Las 10 Mejores Series en DramaBox",
  dek: "No desperdicies tus monedas. Hemos seleccionado las series mejor calificadas en DramaBox con las tramas más atrapantes.",
  updated: "21 de Julio, 2026",
  verdicts: [
    { label: "Veredicto General", value: "Excelente Selección" },
    { label: "Mejor Para", value: "Nuevos Usuarios" },
    { label: "Riesgo Principal", value: "Gastar demasiadas monedas" }
  ],
  sections: [
    {
      title: "Las 5 Series Mejor Calificadas de DramaBox",
      paragraphs: [
        "DramaBox tiene uno de los catálogos más grandes del sector. Estas son las series con mejor calificación de audiencia (sobre 5 estrellas) según nuestro análisis de 2026."
      ],
      bullets: [
        "Divorced at the Wedding Day (Romance) — 4.9/5. Empieza con una boda y termina con un anuncio de divorcio; la serie más vista de DramaBox por sus giros inesperados.",
        "Return of His Majesty (Fantasía) — 4.8/5. Un rey que regresa a reclamar su trono, con intriga política y elementos sobrenaturales.",
        "Miss You After Goodbye (Drama) — 4.8/5. Una historia sobre el duelo y los mensajes que dejamos atrás; una de las más emotivas del catálogo.",
        "Forever Was a Lie (Suspenso) — 4.7/5. Thriller psicológico sobre una mujer que descubre que toda su vida fue una mentira.",
        "Mafia Lover (Romance) — 4.7/5. Romance de riesgo entre una mujer inocente y un jefe de la mafia."
      ]
    },
    {
      title: "Cómo Empezar en DramaBox",
      paragraphs: [
        "DramaBox ofrece entre 5 y 7 episodios gratis al día, lo que la convierte en una de las plataformas más generosas del mercado para maratonear sin gastar. Si te enganchas con alguna de estas series y quieres verla completa sin esperar, revisa nuestra guía de precios para comparar monedas vs. suscripción VIP.",
        "Para nuevos usuarios recomendamos empezar por Divorced at the Wedding Day: tiene el ritmo más adictivo y suele estar disponible con más episodios gratuitos por las promociones de bienvenida."
      ]
    }
  ],
  faqs: [
    { question: "¿Cuál es la serie mejor calificada de DramaBox?", answer: "Divorced at the Wedding Day encabeza el ranking con 4.9/5, seguida de Return of His Majesty y Miss You After Goodbye, ambas con 4.8/5." },
    { question: "¿Puedo ver estas series sin pagar?", answer: "Sí. DramaBox regala entre 5 y 7 episodios gratis por día, suficiente para terminar series cortas en menos de una semana sin gastar monedas." },
    { question: "¿Con qué frecuencia se actualiza este ranking?", answer: "Revisamos las calificaciones y el catálogo de DramaBox mensualmente para mantener esta lista actualizada con los estrenos y tendencias más recientes." },
    { question: "¿Hay series de DramaBox dobladas al español?", answer: "La mayoría de los títulos populares, incluidos los de este top, cuentan con subtítulos en español y varios ya tienen doblaje disponible." }
  ],
  relatedGuides: [
    { href: "/guides/precios-de-dramabox", label: "Precios de DramaBox", description: "Cuánto cuesta ver el catálogo completo." },
    { href: "/guides/como-ver-dramabox-gratis", label: "Ver Gratis", description: "Trucos para conseguir monedas y episodios gratis." },
    { href: "/guides/alternativas-a-dramabox", label: "Alternativas", description: "Otras plataformas si ya viste todo el catálogo." }
  ]
};

export default function GuidePage() {
  return <ConversionGuidePage guide={guide} />;
}
