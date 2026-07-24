import { Button, Heading, Hr, Img, Row, Column, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "./components/EmailLayout";
import { theme } from "./components/theme";
import { platforms, latestArticles, type Platform, type Article } from "../src/lib/data";

interface WeeklyDigestProps {
  recipientEmail?: string;
  /** Editor's note shown at the top — write this fresh for each issue. */
  intro?: string;
  /** Which platform slug to feature in the spotlight section. Defaults to the top-rated platform. */
  spotlightSlug?: string;
  issueNumber?: number;
}

function getTopPlatforms(count: number): Platform[] {
  return [...platforms].sort((a, b) => b.score - a.score).slice(0, count);
}

function getLatestArticles(count: number): Article[] {
  return latestArticles.slice(0, count);
}

export default function WeeklyDigest({
  recipientEmail,
  intro = "Aquí tienes tu resumen de la industria de las miniseries esta semana: quién está mejor calificado, qué hay de nuevo y por dónde empezar a ver.",
  spotlightSlug,
  issueNumber,
}: WeeklyDigestProps) {
  const topPlatforms = getTopPlatforms(5);
  const spotlight = platforms.find((p) => p.slug === spotlightSlug) ?? topPlatforms[0];
  const articles = getLatestArticles(3);

  return (
    <EmailLayout
      previewText="Las plataformas mejor calificadas de esta semana, guías nuevas y una app que vale la pena descargar."
      recipientEmail={recipientEmail}
    >
      <Text style={{ color: theme.textMuted, fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", margin: "0 0 8px" }}>
        {issueNumber ? `Edición ${String(issueNumber).padStart(2, "0")}` : "Esta Semana"}
      </Text>
      <Heading
        as="h1"
        style={{
          fontFamily: theme.displayFontFamily,
          fontWeight: 900,
          fontSize: "26px",
          textTransform: "uppercase",
          letterSpacing: "0.02em",
          color: theme.textPrimary,
          margin: "0 0 16px",
        }}
      >
        El Pulso
      </Heading>
      <Text style={{ color: theme.textSecondary, fontSize: "16px", lineHeight: "26px", margin: "0 0 32px" }}>
        {intro}
      </Text>

      {/* Top rated platforms */}
      <Heading
        as="h2"
        style={{
          fontFamily: theme.displayFontFamily,
          fontWeight: 900,
          fontSize: "18px",
          textTransform: "uppercase",
          letterSpacing: "0.02em",
          color: theme.textPrimary,
          margin: "0 0 16px",
        }}
      >
        Plataformas Mejor Calificadas Ahora
      </Heading>
      <Section
        style={{
          backgroundColor: theme.bgCard,
          border: `1px solid ${theme.border}`,
          borderRadius: "12px",
          padding: "8px 24px",
          marginBottom: "32px",
        }}
      >
        {topPlatforms.map((platform, i) => (
          <Row
            key={platform.slug}
            style={{
              borderBottom: i < topPlatforms.length - 1 ? `1px solid ${theme.border}` : undefined,
            }}
          >
            <Column style={{ padding: "14px 0" }}>
              <Text style={{ margin: 0, color: theme.textPrimary, fontSize: "15px", fontWeight: 700 }}>
                <span style={{ color: theme.textMuted, fontWeight: 900 }}>{String(i + 1).padStart(2, "0")}</span>
                {"  "}
                {platform.name}
              </Text>
            </Column>
            <Column align="right" style={{ padding: "14px 0" }}>
              <Text style={{ margin: 0, color: theme.coralLight, fontSize: "15px", fontWeight: 900 }}>
                {platform.score.toFixed(1)}
              </Text>
            </Column>
          </Row>
        ))}
      </Section>

      {/* Spotlight */}
      {spotlight && (
        <>
          <Heading
            as="h2"
            style={{
              fontFamily: theme.displayFontFamily,
              fontWeight: 900,
              fontSize: "18px",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              color: theme.textPrimary,
              margin: "0 0 16px",
            }}
          >
            Spotlight de Esta Semana
          </Heading>
          <Section
            style={{
              backgroundColor: theme.bgCard,
              border: `1px solid ${theme.border}`,
              borderRadius: "12px",
              padding: "24px",
              marginBottom: "32px",
            }}
          >
            <Row>
              <Column style={{ width: "56px", verticalAlign: "top" }}>
                <Img
                  src={`https://novelaflash.com${spotlight.icon}`}
                  width="44"
                  height="44"
                  alt={spotlight.name}
                  style={{ borderRadius: "10px" }}
                />
              </Column>
              <Column style={{ verticalAlign: "top", paddingLeft: "12px" }}>
                <Text style={{ margin: 0, color: theme.textPrimary, fontSize: "16px", fontWeight: 700 }}>
                  {spotlight.name}{" "}
                  <span style={{ color: theme.coralLight, fontWeight: 900 }}>{spotlight.score.toFixed(1)}/10</span>
                </Text>
                <Text style={{ margin: "4px 0 16px", color: theme.textSecondary, fontSize: "14px", lineHeight: "20px" }}>
                  {spotlight.description}
                </Text>
                <Button
                  href={`https://novelaflash.com/go/${spotlight.slug}`}
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
                  Obtener {spotlight.name}
                </Button>
              </Column>
            </Row>
          </Section>
        </>
      )}

      {/* Latest reads */}
      {articles.length > 0 && (
        <>
          <Heading
            as="h2"
            style={{
              fontFamily: theme.displayFontFamily,
              fontWeight: 900,
              fontSize: "18px",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              color: theme.textPrimary,
              margin: "0 0 16px",
            }}
          >
            Recién Publicado en NovelaFlash
          </Heading>
          {articles.map((article, i) => (
            <React.Fragment key={article.slug}>
              <Text style={{ margin: "0 0 4px" }}>
                <a
                  href={`https://novelaflash.com/articles/${article.slug}`}
                  style={{ color: theme.textPrimary, fontSize: "15px", fontWeight: 700, textDecoration: "none" }}
                >
                  {article.title}
                </a>
              </Text>
              <Text style={{ margin: "0 0 16px", color: theme.textSecondary, fontSize: "14px", lineHeight: "20px" }}>
                {article.excerpt}
              </Text>
              {i < articles.length - 1 && <Hr style={{ borderColor: theme.border, margin: "0 0 16px" }} />}
            </React.Fragment>
          ))}
        </>
      )}

      <Text style={{ color: theme.textSecondary, fontSize: "15px", lineHeight: "24px", margin: "32px 0 0" }}>
        Eso es todo por esta edición. Nos vemos la próxima semana.
      </Text>
      <Text style={{ color: theme.textSecondary, fontSize: "15px", margin: "16px 0 0" }}>— El equipo de NovelaFlash</Text>
    </EmailLayout>
  );
}

WeeklyDigest.PreviewProps = {
  issueNumber: 1,
} satisfies WeeklyDigestProps;
