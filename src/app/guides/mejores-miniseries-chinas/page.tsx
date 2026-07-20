import type { Metadata } from "next";
import { ConversionGuidePage, type ConversionGuide } from "../ConversionGuidePage";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Las Mejores Miniseries Chinas que Debes Ver — NovelaFlash",
  description: "Desde venganzas de multimillonarios hasta dramas históricos, estas son las producciones chinas que están dominando el formato vertical.",
  alternates: { canonical: "/guides/mejores-miniseries-chinas" },
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
      title: "Visión General",
      paragraphs: [
        "En esta guía exhaustiva, analizamos todo lo que necesitas saber sobre el tema. La popularidad de las miniseries ha crecido exponencialmente en América Latina, haciendo indispensable conocer a fondo las plataformas.",
        "Nuestra misión es ofrecerte la información más transparente y actualizada posible para que disfrutes de tus series favoritas sin sorpresas."
      ],
      bullets: [
        "Verifica siempre tus suscripciones activas.",
        "No compartas tus datos de pago en aplicaciones no oficiales.",
        "Aprovecha los eventos de recompensas y check-in diario."
      ]
    },
    {
      title: "Análisis Detallado",
      paragraphs: [
        "Al probar exhaustivamente estas funcionalidades, descubrimos que los usuarios a menudo pasan por alto las opciones gratuitas ocultas en la aplicación. Explorar los menús de recompensas puede ahorrarte mucho dinero.",
        "Recuerda que la mayoría de estas aplicaciones operan mediante microtransacciones. Si planeas hacer maratones de contenido, las opciones VIP mensuales casi siempre resultan más rentables a largo plazo."
      ]
    }
  ],
  faqs: [
    { question: "¿Es esta plataforma legítima?", answer: "Sí, todas las plataformas destacadas en NovelaFlash son aplicaciones verificadas disponibles en App Store y Google Play." },
    { question: "¿Cómo puedo evitar cargos adicionales?", answer: "Asegúrate de cancelar las pruebas gratuitas desde la configuración de tu cuenta de Apple o Google al menos 24 horas antes de que terminen." },
    { question: "¿Existen versiones modificadas gratuitas (APKs)?", answer: "Recomendamos fuertemente no usar APKs de terceros debido a los altos riesgos de malware y robo de datos." }
  ],
  relatedGuides: [
    { href: "/guides/como-ver-dramabox-gratis", label: "Series Gratis", description: "Aprende a obtener monedas gratis." },
    { href: "/guides/precios-de-dramabox", label: "Guía de Precios", description: "Compara el valor de las suscripciones VIP." },
    { href: "/guides/alternativas-a-dramabox", label: "Alternativas", description: "Descubre otras plataformas excelentes." }
  ]
};

export default function GuidePage() {
  return <ConversionGuidePage guide={guide} />;
}
