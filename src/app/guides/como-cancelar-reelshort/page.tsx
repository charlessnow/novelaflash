import type { Metadata } from "next";
import { ConversionGuidePage, type ConversionGuide } from "../ConversionGuidePage";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "¿Cómo Cancelar tu Suscripción a ReelShort? — NovelaFlash",
  description: "Evita cargos no deseados. Aprende a cancelar tu suscripción de ReelShort a través de Apple App Store o Google Play.",
  alternates: {
    canonical: "/guides/como-cancelar-reelshort",
    languages: {
      "en": "https://reelpulse.net/guides/cancel-reelshort",
      "es-419": "https://novelaflash.com/guides/como-cancelar-reelshort",
    },
  },
  openGraph: {
    title: "¿Cómo Cancelar tu Suscripción a ReelShort?",
    description: "Evita cargos no deseados. Aprende a cancelar tu suscripción de ReelShort a través de Apple App Store o Google Play.",
    url: "/guides/como-cancelar-reelshort",
  },
};

const guide: ConversionGuide = {
  slug: "como-cancelar-reelshort",
  badge: "Guía de Facturación",
  title: "¿Cómo Cancelar tu Suscripción a ReelShort?",
  dek: "Evita cargos no deseados. Aprende a cancelar tu suscripción de ReelShort a través de Apple App Store o Google Play.",
  updated: "05 de Mayo, 2026",
  verdicts: [
    { label: "Veredicto General", value: "Rápido de Cancelar" },
    { label: "Mejor Para", value: "Ahorrar Dinero" },
    { label: "Riesgo Principal", value: "Olvidar la fecha límite" }
  ],
  sections: [
    {
      title: "Cómo Cancelar en iOS",
      paragraphs: [
        "Si te suscribiste a ReelShort a través de la App Store de Apple, sigue estos pasos:"
      ],
      bullets: [
        "Abre la app de Ajustes en tu iPhone o iPad.",
        "Toca tu nombre en la parte superior para acceder a tu perfil de Apple ID.",
        "Selecciona \"Suscripciones\" en el menú.",
        "Busca ReelShort en tu lista de suscripciones activas.",
        "Toca \"Cancelar suscripción\" y confirma. Conservarás el acceso hasta que termine tu ciclo de facturación actual.",
        "Tip: también puedes gestionar tu suscripción desde la app App Store, tocando tu ícono de perfil y luego \"Suscripciones\"."
      ]
    },
    {
      title: "Cómo Cancelar en Android",
      paragraphs: [
        "Si te suscribiste a través de Google Play Store, el proceso es el siguiente:"
      ],
      bullets: [
        "Abre la app de Google Play Store en tu dispositivo Android.",
        "Toca tu ícono de perfil en la esquina superior derecha y selecciona \"Pagos y suscripciones\".",
        "Toca \"Suscripciones\" para ver todas tus suscripciones activas.",
        "Selecciona la suscripción de ReelShort en tu lista.",
        "Toca \"Cancelar suscripción\" y sigue las instrucciones para confirmar. Tu acceso continúa hasta el final del periodo de facturación actual.",
        "Nota: si te suscribiste mediante un método de pago de un tercero (por ejemplo, facturación de Samsung), es posible que debas cancelar directamente desde ese servicio."
      ]
    },
    {
      title: "Qué Pasa Después de Cancelar",
      paragraphs: [
        "Tus funciones premium (como ver sin anuncios o acceso anticipado a episodios) se desactivan de inmediato al cancelar, pero conservas acceso completo a tu cuenta y tu historial de series vistas.",
        "Puedes seguir usando los beneficios de tu suscripción hasta que termine tu periodo de facturación actual: por ejemplo, si cancelas el día 15 pero tu fecha de cobro es el 30, tendrás acceso hasta el 30.",
        "Una vez que termina el periodo, ReelShort no te volverá a cobrar automáticamente. Puedes volver a suscribirte en cualquier momento; tu lista de series y tu progreso se guardan en tu cuenta."
      ]
    }
  ],
  faqs: [
    { question: "¿Por qué ReelShort me está cobrando?", answer: "ReelShort cobra por suscripciones premium que desbloquean episodios ilimitados, visualización sin anuncios y acceso anticipado a contenido nuevo. Si te cobraron sin esperarlo, revisa el estado de tu suscripción en la configuración de tu cuenta; es posible que hayas activado la renovación automática o comprado un nivel VIP sin darte cuenta." },
    { question: "¿Puedo pedir un reembolso?", answer: "Depende de tu método de pago. Apple ofrece una ventana de reembolso de 14 días y Google Play de 48 horas desde la compra; ReelShort como tal generalmente no emite reembolsos por servicios ya usados. Para reembolsos de tienda, contacta directamente a Apple o Google." },
    { question: "¿Pierdo mi lista de series si cancelo?", answer: "No. Tu lista de reproducción, historial de visualización y datos de cuenta se guardan de forma permanente. Cuando vuelvas a suscribirte o inicies sesión, toda tu información seguirá ahí." },
    { question: "¿Cuántos episodios gratis puedo ver después de cancelar?", answer: "Después de cancelar vuelves al nivel gratuito, que suele permitir un par de episodios diarios con anuncios. La cantidad exacta puede variar según tu región y las promociones vigentes de ReelShort." },
    { question: "¿Puedo cancelar a la mitad del ciclo de facturación?", answer: "Sí, puedes cancelar en cualquier momento. Tu suscripción sigue activa hasta el final del ciclo de facturación en curso, sin importar el día en que canceles." }
  ],
  relatedGuides: [
    { href: "/guides/precios-de-reelshort", label: "Precios de ReelShort", description: "Compara los planes VIP antes de decidir si cancelar." },
    { href: "/guides/conseguir-monedas-reelshort", label: "Monedas Gratis en ReelShort", description: "Sigue disfrutando contenido sin pagar suscripción." },
    { href: "/guides/es-seguro-reelshort", label: "¿Es Seguro ReelShort?", description: "Todo sobre privacidad y seguridad de pagos en la app." }
  ]
};

export default function GuidePage() {
  return <ConversionGuidePage guide={guide} />;
}
