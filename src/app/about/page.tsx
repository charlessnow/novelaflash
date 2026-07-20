import React from "react";
import { ComingSoon } from "@/components/ui/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros — NovelaFlash",
  description: "Conoce más sobre NovelaFlash y nuestra misión en la industria de los microdramas.",
};

export default function AboutPage() {
  return <ComingSoon title="Sobre Nosotros" />;
}
