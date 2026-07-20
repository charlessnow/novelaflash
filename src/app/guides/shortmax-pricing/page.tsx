import type { Metadata } from "next";
import { ConversionGuidePage, type ConversionGuide } from "../ConversionGuidePage";

export const metadata: Metadata = {
  title: "ShortMax Pricing Guide 2026: Coins, VIP & Free Episodes — ReelPulse",
  description:
    "ShortMax pricing explained: free episodes, coins, VIP subscriptions, binge-watch costs, and when ShortMax is cheaper than ReelShort or DramaBox.",
  alternates: { canonical: "/guides/shortmax-pricing" },
  openGraph: {
    title: "ShortMax Pricing Guide 2026: Coins, VIP & Free Episodes",
    description: "A practical guide to ShortMax costs, coins, VIP plans, and free viewing strategy.",
    url: "/guides/shortmax-pricing",
  },
};

const guide: ConversionGuide = {
  slug: "shortmax-pricing",
  badge: "Pricing Guide",
  title: "ShortMax Pricing Guide",
  dek: "ShortMax can be good value for heavy short drama viewers, but the total cost depends on free episodes, coin unlocks, VIP availability, and how quickly you binge a full series.",
  updated: "May 18, 2026",
  verdicts: [
    { label: "Pricing model", value: "Free + coins + VIP" },
    { label: "Best for", value: "High-volume viewers" },
    { label: "Compare against", value: "DramaBox and ReelShort" },
  ],
  sections: [
    {
      title: "How ShortMax Pricing Works",
      paragraphs: [
        "ShortMax typically follows the same short drama monetization pattern as ReelShort and DramaBox: a limited free tier, ad-supported rewards, coin-based episode unlocks, and premium options for viewers who want fewer interruptions.",
        "The exact price can vary by country, platform, promotion, and app-store billing rules. Treat any listed price as a snapshot and confirm the final amount inside your iOS or Android purchase screen before paying.",
      ],
    },
    {
      title: "Free Episodes and Coins",
      paragraphs: [
        "The safest way to test ShortMax is to use free episodes and daily rewards before buying coins. If you only watch casually, free unlocks may be enough to follow one or two series slowly.",
        "Coins become expensive when you binge a full 60-100 episode series in one sitting. Before buying, check how many episodes remain locked and whether VIP would cost less than multiple small coin packs.",
      ],
      bullets: [
        "Use free daily rewards before making the first purchase.",
        "Avoid repeated small coin packs if you plan to finish a long series.",
        "Check whether the same series is cheaper on DramaBox, ReelShort, or another platform.",
      ],
    },
    {
      title: "When ShortMax Is Worth Paying For",
      paragraphs: [
        "ShortMax is most attractive if you like its specific catalog and watch several series each month. For one-off viewing, a small coin purchase may be enough. For regular viewing, compare the monthly VIP cost against the number of episodes you normally unlock.",
        "If you care most about premium originals, ReelShort may justify a higher price. If you care most about variety and price, DramaBox and ShortMax are often closer competitors.",
      ],
    },
    {
      title: "Cost-Control Checklist",
      paragraphs: [
        "Short drama apps are optimized for fast cliffhangers, so the best pricing strategy is to set rules before you start watching. Decide whether you are testing, following one series, or using the app as your main entertainment subscription.",
      ],
      bullets: [
        "Testing ShortMax: use free episodes only for 2-3 days.",
        "Following one series: buy the smallest practical coin pack and track remaining locked episodes.",
        "Watching weekly: compare VIP against total coin spend after one week.",
      ],
    },
  ],
  faqs: [
    { question: "Is ShortMax free?", answer: "ShortMax usually offers free episodes and rewards, but unlimited or fast viewing generally requires coins or premium access." },
    { question: "Is ShortMax cheaper than ReelShort?", answer: "It can be cheaper for some viewers, especially during promotions, but pricing varies by country and viewing pattern." },
    { question: "Should I buy coins or VIP on ShortMax?", answer: "Buy coins if you only want to finish one series. Consider VIP if you watch multiple series every week and want fewer interruptions." },
  ],
  relatedGuides: [
    { href: "/guides/dramabox-pricing", label: "DramaBox Pricing", description: "Compare ShortMax costs against DramaBox coins and subscriptions." },
    { href: "/guides/reelshort-pricing", label: "ReelShort Pricing", description: "See how ReelShort VIP and coins compare with ShortMax." },
    { href: "/guides/free-short-drama-apps", label: "Free Short Drama Apps", description: "Find the most generous free tiers before paying." },
  ],
};

export default function ShortMaxPricingPage() {
  return <ConversionGuidePage guide={guide} />;
}
