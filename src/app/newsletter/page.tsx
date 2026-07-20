import type { Metadata } from "next";
import { NewsletterPageClient } from "./NewsletterPageClient";

export const metadata: Metadata = {
  title: "Subscribe to NovelaFlash Newsletter",
  description:
    "Subscribe to the NovelaFlash newsletter for weekly short drama industry updates, platform analysis, and market insights delivered straight to your inbox.",
  openGraph: {
    title: "Subscribe to NovelaFlash Newsletter",
    description:
      "Subscribe to the NovelaFlash newsletter for weekly short drama industry updates, platform analysis, and market insights delivered straight to your inbox.",
  },
};

export default function NewsletterPage() {
  return <NewsletterPageClient />;
}
