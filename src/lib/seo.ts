export const SITE_URL = "https://novelaflash.com";

export type JsonLdData = Record<string, unknown>;

type BreadcrumbItem = {
  name: string;
  item: string;
};

export function toAbsoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(path, SITE_URL).toString();
}

export function createBreadcrumbList(items: BreadcrumbItem[]): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    inLanguage: "es-419",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function parsePublishedDate(value: string): string {
  const trimmedValue = value.trim();
  const relativeMatch = trimmedValue.match(/^(\d+)([hd]) ago$/i);

  if (relativeMatch) {
    const amount = Number(relativeMatch[1]);
    const unit = relativeMatch[2].toLowerCase();
    const date = new Date();

    if (unit === "h") {
      date.setHours(date.getHours() - amount);
    } else {
      date.setDate(date.getDate() - amount);
    }

    return date.toISOString();
  }

  const parsedDate = new Date(trimmedValue);

  if (!Number.isNaN(parsedDate.getTime())) {
    return parsedDate.toISOString();
  }

  return new Date().toISOString();
}

export const ARTICLE_FAQ_SCHEMA: Record<string, JsonLdData> = {
  "como-ver-dramabox-gratis": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es-419",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo puedo ver DramaBox gratis sin pagar monedas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puedes desbloquear episodios gratis completando el check-in diario, viendo anuncios recompensados, participando en las Tareas Diarias que se actualizan cada 24 horas, y canjeando códigos promocionales que DramaBox publica en sus redes sociales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántos episodios gratis se pueden desbloquear al día en DramaBox?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los usuarios más dedicados han reportado desbloquear hasta 20 episodios premium al día combinando el check-in diario, las tareas y los anuncios recompensados, sin gastar dinero real.",
        },
      },
      {
        "@type": "Question",
        name: "¿Son seguras las APKs modificadas que prometen monedas infinitas en DramaBox?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Usar APKs modificadas o 'generadores de monedas infinitas' viola los términos de servicio de DramaBox, puede resultar en un baneo permanente de la cuenta, y representa un riesgo grave de seguridad para el teléfono y los datos bancarios del usuario.",
        },
      },
    ],
  },
  "mejores-novelas-hombres-lobo-2026": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es-419",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Por qué se volvieron tan populares las miniseries de hombres lobo en 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El género pasó de ser un nicho literario a convertirse en el más rentable para plataformas como ReelShort y ShortMax gracias al formato vertical, que añade dinamismo a las transformaciones, los conflictos territoriales y la química entre parejas destinadas, todo en episodios de 3 minutos con mejor producción y efectos especiales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es el trope más popular en las series de hombres lobo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El trope de la 'Compañera Rechazada' (Rejected Mate) es el más popular: la protagonista es humillada y expulsada de su manada, para luego regresar transformada en una guerrera imparable o junto al Alfa más poderoso del continente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué series de hombres lobo se recomiendan para empezar en 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las recomendaciones destacadas son 'Luna de Sangre: El Regreso' (DramaBox), 'El Secreto del Alfa' (ReelShort, exclusivo) y 'Marcada por el Destino' (ShortMax), cada una con un enfoque distinto dentro del género.",
        },
      },
    ],
  },
  "dramabox-vs-shortmax-es": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es-419",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué diferencia a DramaBox de ShortMax?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DramaBox apuesta por un catálogo inmenso con licenciamiento agresivo de contenido asiático y series de venganza y CEO millonario, mientras que ShortMax se enfoca en producciones occidentales originales, especialmente de fantasía, hombres lobo y vampiros, con mayor calidad visual.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es más barato, DramaBox o ShortMax?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El sistema de monedas de DramaBox puede costar más de $20 USD en series largas de 100 episodios si se compran de golpe, aunque su sistema gratuito por anuncios es muy generoso. ShortMax usa suscripciones VIP mensuales de $15-$25 USD que ofrecen mejor valor para espectadores intensivos.",
        },
      },
      {
        "@type": "Question",
        name: "¿DramaBox o ShortMax, cuál es mejor para mí?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si eres un espectador casual al que no le molestan los anuncios, DramaBox es la mejor opción. Si ves series de forma intensiva, la suscripción VIP de ShortMax resulta más económica a largo plazo.",
        },
      },
    ],
  },
  "la-doble-vida-esposo-multimillonario-resumen": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es-419",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿De qué trata 'La Doble Vida de Mi Esposo Multimillonario'?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La serie sigue a Sebastian Klein, un heredero multimillonario que se oculta bajo la fachada de un perdedor sin dinero, y a Natalie, una chica común que acepta casarse con él por contrato para salvar a su familia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántas visualizaciones tiene 'La Doble Vida de Mi Esposo Multimillonario'?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La serie acumula más de 300 millones de visualizaciones combinadas en todas las plataformas de ReelShort, consolidándose como uno de los fenómenos culturales que validó el formato de miniseries en el mercado occidental.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde puedo ver 'La Doble Vida de Mi Esposo Multimillonario'?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La serie está disponible exclusivamente en ReelShort, contada en episodios verticales de aproximadamente 2 minutos cada uno.",
        },
      },
    ],
  },
  "amor-a-destiempo-kalostv": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es-419",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿De qué trata 'Amor a Destiempo' en KalosTV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La serie sigue un matrimonio por conveniencia que se desmorona por malentendidos trágicos justo cuando el amor verdadero comenzaba a florecer, con un tono de melodrama emocional maduro más que de acción o venganza.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué hace diferente a 'Amor a Destiempo' de otras miniseries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se distingue por actuaciones contenidas en lugar de sobreactuación, silencios cargados de significado y una cinematografía de tonos fríos que crea una atmósfera íntima, similar a un melodrama coreano clásico en formato vertical.",
        },
      },
      {
        "@type": "Question",
        name: "¿Vale la pena gastar monedas en 'Amor a Destiempo'?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Es una producción concisa donde cada episodio avanza la relación con un propósito claro, por lo que se recomienda usar los bonos de inicio de sesión diarios de KalosTV para desbloquear un par de episodios cada noche.",
        },
      },
    ],
  },
  "guia-de-seguridad-apps-miniseries": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es-419",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Son seguras las aplicaciones de miniseries como DramaBox y ReelShort?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las aplicaciones oficiales son seguras en cuanto a no contener malware directo, pero son agresivas en la recopilación de datos de comportamiento, como qué escenas repites, dónde pausas y tus patrones de gasto, que luego usan para sus algoritmos de recomendación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo evitar cobros sorpresa en las apps de miniseries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cancela las pruebas 'VIP Gratuitas' con al menos 24 horas de antelación para evitar que se conviertan en suscripciones recurrentes, usa siempre los métodos de pago oficiales de Apple App Store o Google Play, y evita ingresar tu tarjeta directamente en portales de terceros.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es seguro usar una APK modificada de DramaBox para monedas infinitas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. La auditoría de seguridad encontró que la mayoría de las APKs 'hackeadas' analizadas contenían troyanos, keyloggers o software de minería de criptomonedas oculto, poniendo en riesgo contraseñas bancarias, fotos privadas y contactos.",
        },
      },
    ],
  },
};
