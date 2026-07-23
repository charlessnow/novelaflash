import {
  Body,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { theme } from "./theme";

interface EmailLayoutProps {
  previewText: string;
  /** Recipient email, used to build a working per-recipient unsubscribe link. */
  recipientEmail?: string;
  children: React.ReactNode;
}

export function EmailLayout({ previewText, recipientEmail, children }: EmailLayoutProps) {
  const unsubscribeUrl = recipientEmail
    ? `https://novelaflash.com/api/unsubscribe?email=${encodeURIComponent(recipientEmail)}`
    : "https://novelaflash.com/newsletter";

  return (
    <Html>
      <Head>
        <Font
          fontFamily="Barlow Condensed"
          fallbackFontFamily={["Arial", "Helvetica"]}
          webFont={{
            url: "https://fonts.gstatic.com/s/barlowcondensed/v13/HTxwL3I-JCGChYJ8VI-L6OO_au7B45L0_3E.ttf",
            format: "truetype",
          }}
          fontWeight={900}
          fontStyle="normal"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Body
        style={{
          backgroundColor: theme.bgPrimary,
          fontFamily: theme.fontFamily,
          margin: 0,
          padding: "32px 16px",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <Img
            src="https://novelaflash.com/email/logo.png"
            width="208"
            height="32"
            alt="NovelaFlash"
            style={{ margin: "0 0 32px", display: "block" }}
          />

          {children}

          <Hr style={{ borderColor: theme.border, margin: "40px 0 24px" }} />

          <Section>
            <Text style={{ color: theme.textMuted, fontSize: "12px", lineHeight: "20px", margin: 0 }}>
              Recibes este correo porque te suscribiste en{" "}
              <Link href="https://novelaflash.com" style={{ color: theme.coralLight }}>
                novelaflash.com
              </Link>
              .{" "}
              <Link href={unsubscribeUrl} style={{ color: theme.textMuted, textDecoration: "underline" }}>
                Cancelar suscripción
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
