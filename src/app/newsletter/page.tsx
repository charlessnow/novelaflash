import React from "react";
import { ComingSoon } from "@/components/ui/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boletín Informativo — NovelaFlash",
  description: "Suscríbete a nuestro boletín para recibir las últimas noticias de la industria.",
};

export default function NewsletterPage() {
  return <ComingSoon title="Boletín Informativo" />;
}
