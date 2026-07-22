import type { Metadata } from "next";
import { ConversionGuidePage, type ConversionGuide } from "../ConversionGuidePage";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "¿Cuánto Cuesta Realmente DramaBox? — NovelaFlash",
  description: "Analizamos el costo de las monedas, las suscripciones VIP y el precio real de terminar una serie completa de 80 episodios.",
  alternates: {
    canonical: "/guides/precios-de-dramabox",
    languages: {
      "en": "https://reelpulse.net/guides/dramabox-pricing",
      "es-419": "https://novelaflash.com/guides/precios-de-dramabox",
    },
  },
  openGraph: {
    title: "¿Cuánto Cuesta Realmente DramaBox?",
    description: "Analizamos el costo de las monedas, las suscripciones VIP y el precio real de terminar una serie completa de 80 episodios.",
    url: "/guides/precios-de-dramabox",
  },
};

const guide: ConversionGuide = {
  slug: "precios-de-dramabox",
  badge: "Guía de Precios",
  title: "¿Cuánto Cuesta Realmente DramaBox?",
  dek: "Analizamos el costo de las monedas, las suscripciones VIP y el precio real de terminar una serie completa de 80 episodios.",
  updated: "14 de Julio, 2026",
  verdicts: [
    { label: "Veredicto General", value: "Moderadamente Caro" },
    { label: "Mejor Para", value: "Planificación de Gastos" },
    { label: "Riesgo Principal", value: "Compras impulsivas" }
  ],
  sections: [
    {
      title: "El Nivel Gratuito de DramaBox",
      paragraphs: [
        "DramaBox tiene uno de los niveles gratuitos más generosos del mercado: entre 5 y 7 episodios gratis por día (se renuevan cada 24 horas), con acceso a todo el catálogo mediante publicidad. Con este ritmo, puedes terminar una serie de 30 episodios en solo 4 a 6 días sin gastar un peso.",
        "Comparado con ReelShort, que solo ofrece entre 2 y 3 episodios gratis al día, DramaBox es notablemente más generoso para quienes no quieren pagar."
      ],
      bullets: [
        "5-7 episodios gratis por día, con reinicio diario",
        "Acceso completo a la biblioteca de contenido, con anuncios entre episodios",
        "Sistema de 'VIP Keycode': códigos gratuitos que desbloquean 24-48 horas de acceso premium, obtenidos por recompensas diarias y eventos",
        "Recompensas por inicio de sesión diario"
      ]
    },
    {
      title: "Precio de las Monedas y Suscripciones",
      paragraphs: [
        "Si prefieres no esperar al reinicio diario, puedes comprar monedas: 1 episodio cuesta entre $0.15 y $0.40 USD, y los paquetes grandes (50-500 monedas) van de $4 a $40+ USD.",
        "En suscripciones, DramaBox ofrece un plan semanal de $4.99 USD (acceso ilimitado por 7 días), un plan mensual de $14.99 USD (el más popular, incluye contenido exclusivo) y un plan anual de $79.99 USD, que equivale a $6.67 USD al mes: un ahorro de aproximadamente 55% frente al plan mensual.",
        "En comparación directa, DramaBox es entre 20% y 30% más barato que ReelShort en todos los niveles de precio."
      ]
    }
  ],
  faqs: [
    { question: "¿Cuánto cuesta ver un episodio de DramaBox?", answer: "Comprando monedas, un episodio cuesta entre $0.15 y $0.40 USD. Si usas tus episodios gratis diarios (5 a 7 por día), no pagas nada." },
    { question: "¿Vale la pena la suscripción mensual de DramaBox?", answer: "Si ves 3 o más episodios por semana y quieres evitar anuncios, el plan mensual de $14.99 USD suele salir más barato que comprar monedas sueltas." },
    { question: "¿Qué son los 'VIP Keycodes'?", answer: "Son códigos gratuitos que se consiguen en eventos y recompensas diarias, y que dan acceso premium temporal (24-48 horas) sin necesidad de pagar. Se pueden acumular para extender el acceso." },
    { question: "¿DramaBox es más barato que ReelShort?", answer: "Sí. DramaBox cuesta entre 20% y 30% menos en monedas y suscripciones, y además ofrece más episodios gratis al día (5-7 frente a 2-3 de ReelShort)." }
  ],
  relatedGuides: [
    { href: "/guides/conseguir-monedas-dramabox", label: "Monedas Gratis", description: "Trucos para conseguir monedas sin pagar." },
    { href: "/guides/como-cancelar-dramabox", label: "Cómo Cancelar", description: "Guía para cancelar tu suscripción VIP." },
    { href: "/guides/precios-de-reelshort", label: "Precios de ReelShort", description: "Compara el costo con la competencia." }
  ]
};

export default function GuidePage() {
  return <ConversionGuidePage guide={guide} />;
}
