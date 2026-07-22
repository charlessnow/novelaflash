import type { Metadata } from "next";
import { ConversionGuidePage, type ConversionGuide } from "../ConversionGuidePage";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Guía de Precios de ShortMax — NovelaFlash",
  description: "Todo lo que necesitas saber sobre las monedas de ShortMax, sus planes VIP y cómo obtener el mejor valor por tu dinero.",
  alternates: {
    canonical: "/guides/guia-de-precios-shortmax",
    languages: {
      "en": "https://reelpulse.net/guides/shortmax-pricing",
      "es-419": "https://novelaflash.com/guides/guia-de-precios-shortmax",
    },
  },
  openGraph: {
    title: "Guía de Precios de ShortMax",
    description: "Todo lo que necesitas saber sobre las monedas de ShortMax, sus planes VIP y cómo obtener el mejor valor por tu dinero.",
    url: "/guides/guia-de-precios-shortmax",
  },
};

const guide: ConversionGuide = {
  slug: "guia-de-precios-shortmax",
  badge: "Guía de Precios",
  title: "Guía de Precios de ShortMax",
  dek: "Todo lo que necesitas saber sobre las monedas de ShortMax, sus planes VIP y cómo obtener el mejor valor por tu dinero.",
  updated: "22 de Mayo, 2026",
  verdicts: [
    { label: "Veredicto General", value: "Precio Justo" },
    { label: "Mejor Para", value: "Suscriptores" },
    { label: "Riesgo Principal", value: "Renovaciones olvidadas" }
  ],
  sections: [
    {
      title: "Cómo Funcionan los Precios de ShortMax",
      paragraphs: [
        "ShortMax sigue el mismo modelo de monetización que ReelShort y DramaBox: un nivel gratuito limitado, recompensas por ver anuncios, desbloqueo de episodios con monedas, y opciones premium para quienes quieren ver sin interrupciones.",
        "El precio exacto puede variar según el país, el dispositivo y las reglas de facturación de cada tienda de apps. Toma cualquier precio como una referencia y confirma el monto final en la pantalla de compra de iOS o Android antes de pagar."
      ]
    },
    {
      title: "Episodios Gratis y Monedas",
      paragraphs: [
        "La forma más segura de probar ShortMax es usar los episodios gratis y las recompensas diarias antes de comprar monedas. Si solo ves contenido de forma casual, los desbloqueos gratuitos pueden alcanzarte para seguir una o dos series a ritmo lento.",
        "Las monedas se vuelven costosas cuando quieres terminar de una sola vez una serie de 60 a 100 episodios. Antes de comprar, revisa cuántos episodios te faltan por desbloquear y si el plan VIP te saldría más barato que varios paquetes pequeños de monedas."
      ],
      bullets: [
        "Usa las recompensas diarias gratuitas antes de hacer tu primera compra.",
        "Evita comprar paquetes pequeños de monedas repetidamente si planeas terminar una serie larga.",
        "Compara si la misma serie sale más barata en DramaBox, ReelShort u otra plataforma."
      ]
    },
    {
      title: "¿Cuándo Vale la Pena Pagar por ShortMax?",
      paragraphs: [
        "ShortMax resulta más atractivo si te gusta su catálogo específico y ves varias series al mes. Para ver algo puntual, una compra pequeña de monedas puede ser suficiente. Si ves contenido con regularidad, compara el costo mensual del VIP contra la cantidad de episodios que normalmente desbloqueas.",
        "Si te importa más el contenido original premium, ReelShort puede justificar un precio más alto. Si te importa más la variedad y el precio, DramaBox y ShortMax suelen competir más de cerca."
      ]
    },
    {
      title: "Lista de Control para Controlar el Gasto",
      paragraphs: [
        "Las apps de miniseries están diseñadas para dejarte con ganas de más, así que la mejor estrategia es poner reglas antes de empezar a ver. Decide si vas a probar la app, seguir una sola serie, o usarla como tu suscripción principal de entretenimiento."
      ],
      bullets: [
        "Si solo vas a probar ShortMax: usa únicamente los episodios gratis por 2 o 3 días.",
        "Si vas a seguir una serie: compra el paquete de monedas más pequeño posible y lleva la cuenta de episodios bloqueados.",
        "Si ves contenido cada semana: compara el VIP contra el gasto total en monedas después de la primera semana."
      ]
    }
  ],
  faqs: [
    { question: "¿ShortMax es gratis?", answer: "ShortMax normalmente ofrece episodios gratis y recompensas, pero ver sin límites o de forma rápida generalmente requiere monedas o acceso premium." },
    { question: "¿ShortMax es más barato que ReelShort?", answer: "Puede ser más barato para algunos usuarios, especialmente durante promociones, pero el precio varía según el país y tu forma de ver contenido." },
    { question: "¿Debo comprar monedas o VIP en ShortMax?", answer: "Compra monedas si solo quieres terminar una serie. Considera el VIP si ves varias series cada semana y quieres menos interrupciones." },
    { question: "¿Puedo cancelar el VIP de ShortMax en cualquier momento?", answer: "Sí, puedes cancelar cuando quieras desde tu cuenta de Apple ID o Google Play. Mantendrás el acceso hasta que termine el ciclo de facturación actual." }
  ],
  relatedGuides: [
    { href: "/guides/precios-de-dramabox", label: "Precios de DramaBox", description: "Compara el costo de ShortMax contra las monedas y suscripciones de DramaBox." },
    { href: "/guides/precios-de-reelshort", label: "Precios de ReelShort", description: "Compara el VIP y las monedas de ReelShort con ShortMax." },
    { href: "/guides/apps-miniseries-gratis", label: "Apps de Miniseries Gratis", description: "Encuentra los niveles gratuitos más generosos antes de pagar." }
  ]
};

export default function GuidePage() {
  return <ConversionGuidePage guide={guide} />;
}
