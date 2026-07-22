import type { Metadata } from "next";
import { ConversionGuidePage, type ConversionGuide } from "../ConversionGuidePage";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Análisis de Precios: ¿Vale la pena ReelShort? — NovelaFlash",
  description: "Desglosamos la economía de ReelShort. ¿Deberías comprar paquetes de monedas o suscribirte a su plan VIP mensual?",
  alternates: {
    canonical: "/guides/precios-de-reelshort",
    languages: {
      "en": "https://reelpulse.net/guides/reelshort-pricing",
      "es-419": "https://novelaflash.com/guides/precios-de-reelshort",
    },
  },
  openGraph: {
    title: "Análisis de Precios: ¿Vale la pena ReelShort?",
    description: "Desglosamos la economía de ReelShort. ¿Deberías comprar paquetes de monedas o suscribirte a su plan VIP mensual?",
    url: "/guides/precios-de-reelshort",
  },
};

const guide: ConversionGuide = {
  slug: "precios-de-reelshort",
  badge: "Guía de Precios",
  title: "Análisis de Precios: ¿Vale la pena ReelShort?",
  dek: "Desglosamos la economía de ReelShort. ¿Deberías comprar paquetes de monedas o suscribirte a su plan VIP mensual?",
  updated: "25 de Mayo, 2026",
  verdicts: [
    { label: "Veredicto General", value: "Premium y Costoso" },
    { label: "Mejor Para", value: "Usuarios de Alto Gasto" },
    { label: "Riesgo Principal", value: "Episodios costosos" }
  ],
  sections: [
    {
      title: "Gratis vs. Pago: Qué Incluye Cada Nivel",
      paragraphs: [
        "ReelShort funciona con modelo freemium: puedes ver contenido gratis, pero las funciones premium requieren pago. El nivel gratuito da entre 2 y 3 episodios por día (con anuncios), acceso a todo el catálogo y calidad estándar. El nivel VIP elimina el límite diario, quita los anuncios, da acceso anticipado a nuevos episodios y calidad HD/4K."
      ],
      bullets: [
        "Gratis: 2-3 episodios/día, con anuncios, calidad estándar",
        "VIP: episodios ilimitados, sin anuncios, acceso anticipado, calidad HD/4K, descarga sin conexión en algunos planes"
      ]
    },
    {
      title: "Precio de Monedas y Planes VIP",
      paragraphs: [
        "Comprando monedas sueltas, 1 episodio cuesta entre $0.20 y $0.50 USD, y los paquetes grandes (50-500 monedas) van de $5 a $50+ USD.",
        "Los planes de suscripción son: VIP Semanal $6.99 USD, VIP Mensual $19.99 USD (el más popular, incluye monedas de bonificación) y VIP Anual $99.99 USD, que equivale a $8.33 USD al mes: un ahorro de aproximadamente 58% frente al plan mensual.",
        "Para referencia, terminar una serie de 30 a 50 episodios comprando monedas cuesta entre $9 y $15 USD, frente a $19.99 USD del plan mensual — conviene más comprar monedas si solo vas a ver una o dos series al mes."
      ]
    },
    {
      title: "ReelShort vs. DramaBox: Comparación de Precios",
      paragraphs: [
        "DramaBox ofrece más episodios gratis al día (5-7 frente a 2-3) y precios entre 20% y 30% más bajos en monedas y suscripciones. A cambio, ReelShort tiene un catálogo de producciones originales más grande y de mayor presupuesto. Si tu prioridad es el costo, DramaBox gana; si prefieres calidad de producción, ReelShort vale la diferencia."
      ]
    }
  ],
  faqs: [
    { question: "¿Cuánto cuesta ver un episodio de ReelShort?", answer: "Comprando monedas, entre $0.20 y $0.50 USD por episodio. Con tus 2-3 episodios gratis diarios, no pagas nada, aunque el maratón te tomará más días." },
    { question: "¿Vale la pena la suscripción VIP mensual?", answer: "Si ves 5 o más episodios por semana y quieres evitar anuncios y esperas, el plan mensual de $19.99 USD suele compensar frente a comprar monedas sueltas." },
    { question: "¿ReelShort es más caro que DramaBox?", answer: "Sí, en general. DramaBox tiene coins y suscripciones entre 20% y 30% más baratos, y da más episodios gratis al día. ReelShort compensa con un catálogo original de mayor presupuesto." },
    { question: "¿Cómo ahorro dinero en ReelShort?", answer: "El plan anual ($99.99 USD) sale a $8.33 USD al mes, un 58% más barato que pagar mes a mes. También conviene aprovechar las promociones estacionales y ver anuncios para conseguir monedas gratis." }
  ],
  relatedGuides: [
    { href: "/guides/conseguir-monedas-reelshort", label: "Monedas Gratis", description: "Trucos para conseguir monedas sin pagar." },
    { href: "/guides/como-cancelar-reelshort", label: "Cómo Cancelar", description: "Guía para cancelar tu suscripción VIP." },
    { href: "/guides/precios-de-dramabox", label: "Precios de DramaBox", description: "Compara el costo con la competencia." }
  ]
};

export default function GuidePage() {
  return <ConversionGuidePage guide={guide} />;
}
