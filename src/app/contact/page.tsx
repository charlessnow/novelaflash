import React from "react";
import { ComingSoon } from "@/components/ui/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — NovelaFlash",
  description: "Ponte en contacto con el equipo de NovelaFlash.",
};

export default function ContactPage() {
  return <ComingSoon title="Contacto" />;
}
