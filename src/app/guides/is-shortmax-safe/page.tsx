import type { Metadata } from "next";
import { ConversionGuidePage, type ConversionGuide } from "../ConversionGuidePage";

export const metadata: Metadata = {
  title: "Is ShortMax Safe? App Legitimacy, Payments & Privacy 2026 — NovelaFlash",
  description:
    "Is ShortMax safe and legit? Review ShortMax privacy, subscriptions, coin purchases, app-store safety, and safer viewing tips for 2026.",
  alternates: { canonical: "/guides/is-shortmax-safe" },
  openGraph: {
    images: [{ url: "/images/guides/shortmax-safety-og.jpg" }],
  },
};

const guide: ConversionGuide = {
  slug: "is-shortmax-safe",
  badge: "Safety Review",
  title: "Is ShortMax Safe?",
  dek: "ShortMax is a legitimate short drama app available on major app stores, but users should still pay attention to coin purchases, subscription billing, and privacy permissions before committing to a plan.",
  updated: "June 2026",
  verdicts: [
    { label: "Overall verdict", value: "Safe & Legit" },
    { label: "Best for", value: "Short drama fans globally" },
    { label: "Main risk", value: "Coin costs and subscriptions" },
  ],
  sections: [
    {
      title: "App Store Legitimacy",
      paragraphs: [
        "ShortMax is maintained by ShortTV and is available on both the Apple App Store and Google Play Store. This means it undergoes the rigorous security and privacy screening required by both tech giants.",
        "With over 50 million downloads, ShortMax is one of the more established players in the short drama market. High app-store ratings and a large active user base are strong indicators that it is not a scam.",
      ],
    },
    {
      title: "Payment and Subscription Safety",
      paragraphs: [
        "All financial transactions on ShortMax are handled through official app store billing systems — Apple Pay or Google Play. ShortMax does not see your credit card details directly, which adds a significant layer of security compared to web-only platforms.",
        "The safest approach is to start with the free tier to explore the catalog, then purchase the smallest coin pack or a short-term subscription before committing to a recurring plan.",
      ],
      bullets: [
        "Cancel subscriptions via Apple ID or Google Play, not just in-app.",
        "Check renewal dates after any free trial period.",
        "Use the smallest coin pack first to test value before buying in bulk.",
      ],
    },
    {
      title: "Data Privacy Practices",
      paragraphs: [
        "ShortMax collects standard analytics and account data such as device identifiers, viewing activity, and purchase events. They use industry-standard encryption to protect user information and provide clear opt-out mechanisms in their settings menu.",
        "Privacy-conscious users should review app permissions on first install and avoid granting access unrelated to video playback. Downloading only from official stores removes the risk of tampered APK files.",
      ],
      bullets: [
        "Download only from the official App Store or Google Play.",
        "Avoid third-party APK mirrors that may bundle unwanted software.",
        "Review the permissions screen before granting location or contact access.",
      ],
    },
    {
      title: "Who Should Use ShortMax?",
      paragraphs: [
        "ShortMax is a solid choice for viewers who enjoy romance, revenge, and billionaire short dramas with a large global catalog. If you are price-sensitive, compare it with ReelShort and DramaBox before choosing a paid plan, as coin costs can add up quickly.",
      ],
      bullets: [
        "Best value: viewers who watch multiple series per month.",
        "Best safety practice: subscribe through official app stores only.",
        "Best alternative path: compare with ReelShort and DramaBox pricing first.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is ShortMax a scam?",
      answer: "No. ShortMax is a legitimate premium service. While the coin system can be expensive, they deliver the content as advertised and follow app store refund policies.",
    },
    {
      question: "Can I watch ShortMax for free safely?",
      answer: "Yes. ShortMax offers a free tier with ads. This is a safe way to explore the app without providing any payment information.",
    },
    {
      question: "Is it safe to download ShortMax as an APK?",
      answer: "Use official app stores whenever possible. Third-party APK files can be outdated, modified, or bundled with unwanted software. The official stores provide automatic updates and verified builds.",
    },
  ],
  relatedGuides: [
    { href: "/guides/shortmax-pricing", label: "ShortMax Pricing", description: "Compare ShortMax coin packs, VIP plans, and the true cost per series." },
    { href: "/guides/is-reelshort-safe", label: "Is ReelShort Safe?", description: "Safety and privacy review of ReelShort for 2026." },
    { href: "/guides/is-dramabox-safe", label: "Is DramaBox Safe?", description: "A practical safety review of DramaBox privacy, payments, and app legitimacy." },
  ],
};

export default function ShortMaxSafetyPage() {
  return <ConversionGuidePage guide={guide} />;
}
