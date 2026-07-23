import { Button, Heading, Row, Column, Section, Text, Img } from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "./components/EmailLayout";
import { theme } from "./components/theme";

interface PlatformRecommendation {
  slug: string;
  name: string;
  score: number;
  blurb: string;
  iconUrl: string;
}

const TOP_PLATFORMS: PlatformRecommendation[] = [
  {
    slug: "goodshort",
    name: "GoodShort",
    score: 9.7,
    blurb: "La app mejor calificada de NovelaFlash ahora mismo. Historias originales sólidas y bien ritmadas.",
    iconUrl: "https://novelaflash.com/platforms/goodshort.png",
  },
  {
    slug: "dramabox",
    name: "DramaBox",
    score: 9.4,
    blurb: "La opción de mayor escala. Biblioteca masiva y estrenos constantes, ideal si quieres volumen.",
    iconUrl: "https://novelaflash.com/platforms/dramabox.png",
  },
  {
    slug: "reelshort",
    name: "ReelShort",
    score: 9.2,
    blurb: "La app que puso las miniseries en el mapa en Occidente. Producción premium.",
    iconUrl: "https://novelaflash.com/platforms/reelshort.png",
  },
];

interface WelcomeEmailProps {
  firstName?: string;
  recipientEmail?: string;
}

export default function WelcomeEmail({ firstName, recipientEmail }: WelcomeEmailProps) {
  const greeting = firstName ? `Bienvenido, ${firstName} 👋` : "Bienvenido a NovelaFlash 👋";

  return (
    <EmailLayout
      previewText="Tu pulso en la industria de las miniseries, y 3 apps que vale la pena descargar hoy."
      recipientEmail={recipientEmail}
    >
      <Heading
        as="h1"
        style={{
          fontFamily: theme.displayFontFamily,
          fontWeight: 900,
          fontSize: "28px",
          textTransform: "uppercase",
          letterSpacing: "0.02em",
          color: theme.textPrimary,
          margin: "0 0 16px",
        }}
      >
        {greeting}
      </Heading>

      <Text style={{ color: theme.textSecondary, fontSize: "16px", lineHeight: "26px", margin: "0 0 24px" }}>
        Te uniste a la comunidad que sigue de cerca la industria de las miniseries verticales, uno de los
        formatos de entretenimiento móvil de más rápido crecimiento en el mundo.
      </Text>

      <Text style={{ color: theme.textPrimary, fontSize: "15px", fontWeight: 700, margin: "0 0 8px" }}>
        Esto es lo que vas a recibir:
      </Text>
      <Text style={{ color: theme.textSecondary, fontSize: "15px", lineHeight: "24px", margin: "0 0 32px" }}>
        📊 Rankings de plataformas — quién va ganando y quién está bajando, actualizado según cambian los datos
        <br />
        📰 Novedades de la industria — inversiones, récords de ingresos y los estudios detrás del auge
        <br />
        📝 Guías sin relleno — precios claros, trucos para monedas gratis y cómo cancelar cualquier suscripción en dos minutos
      </Text>

      <Heading
        as="h2"
        style={{
          fontFamily: theme.displayFontFamily,
          fontWeight: 900,
          fontSize: "20px",
          textTransform: "uppercase",
          letterSpacing: "0.02em",
          color: theme.textPrimary,
          margin: "0 0 20px",
        }}
      >
        Empieza por aquí — nuestro top 3
      </Heading>

      {TOP_PLATFORMS.map((platform) => (
        <Section
          key={platform.slug}
          style={{
            backgroundColor: theme.bgCard,
            border: `1px solid ${theme.border}`,
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "16px",
          }}
        >
          <Row>
            <Column style={{ width: "56px", verticalAlign: "top" }}>
              <Img
                src={platform.iconUrl}
                width="44"
                height="44"
                alt={platform.name}
                style={{ borderRadius: "10px" }}
              />
            </Column>
            <Column style={{ verticalAlign: "top", paddingLeft: "12px" }}>
              <Text style={{ margin: 0, color: theme.textPrimary, fontSize: "16px", fontWeight: 700 }}>
                {platform.name}{" "}
                <span style={{ color: theme.coralLight, fontWeight: 900 }}>{platform.score.toFixed(1)}/10</span>
              </Text>
              <Text style={{ margin: "4px 0 12px", color: theme.textSecondary, fontSize: "14px", lineHeight: "20px" }}>
                {platform.blurb}
              </Text>
              <Button
                href={`https://novelaflash.com/go/${platform.slug}`}
                style={{
                  backgroundColor: theme.coral,
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  padding: "10px 20px",
                  borderRadius: "8px",
                }}
              >
                Obtener {platform.name}
              </Button>
            </Column>
          </Row>
        </Section>
      ))}

      <Text style={{ color: theme.textSecondary, fontSize: "15px", lineHeight: "24px", margin: "24px 0 0" }}>
        Más recomendaciones, rankings y análisis llegan pronto a tu correo.
      </Text>
      <Text style={{ color: theme.textSecondary, fontSize: "15px", margin: "16px 0 0" }}>— El equipo de NovelaFlash</Text>
    </EmailLayout>
  );
}

WelcomeEmail.PreviewProps = {
  firstName: undefined,
} satisfies WelcomeEmailProps;
