import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact ReelPulse — Get in Touch",
  description:
    "Contact ReelPulse for editorial, partnership, or industry inquiries, and reach our team for short drama market insights, coverage questions, or collaborations.",
  openGraph: {
    title: "Contact ReelPulse — Get in Touch",
    description:
      "Contact ReelPulse for editorial, partnership, or industry inquiries, and reach our team for short drama market insights, coverage questions, or collaborations.",
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact ReelPulse — Get in Touch",
    description:
      "Contact ReelPulse for editorial, partnership, or industry inquiries, and reach our team for short drama market insights, coverage questions, or collaborations.",
    url: `${SITE_URL}/contact`,
  };

  return (
    <>
      <JsonLd data={contactPageSchema} />
      <ContactPageClient />
    </>
  );
}
