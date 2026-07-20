export const SITE_URL = "https://novelaflash.com";

export type JsonLdData = Record<string, unknown>;

type BreadcrumbItem = {
  name: string;
  item: string;
};

type GuideSchemaEntry = {
  title: string;
  data: JsonLdData;
};

export function toAbsoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(path, SITE_URL).toString();
}

export function createBreadcrumbList(items: BreadcrumbItem[]): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function parsePublishedDate(value: string): string {
  const trimmedValue = value.trim();
  const relativeMatch = trimmedValue.match(/^(\d+)([hd]) ago$/i);

  if (relativeMatch) {
    const amount = Number(relativeMatch[1]);
    const unit = relativeMatch[2].toLowerCase();
    const date = new Date();

    if (unit === "h") {
      date.setHours(date.getHours() - amount);
    } else {
      date.setDate(date.getDate() - amount);
    }

    return date.toISOString();
  }

  const parsedDate = new Date(trimmedValue);

  if (!Number.isNaN(parsedDate.getTime())) {
    return parsedDate.toISOString();
  }

  return new Date().toISOString();
}

export const ARTICLE_FAQ_SCHEMA: Record<string, JsonLdData> = {
  "reelshort-q1-2026-record": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is ReelShort's revenue in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ReelShort generated $80 million in Q1 2026 alone, a 40% quarter-over-quarter increase from Q4 2025. Annual revenue is on pace to exceed $300 million for the full year.",
        },
      },
      {
        "@type": "Question",
        name: "How does ReelShort's revenue compare to DramaBox in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ReelShort leads with $80M in Q1 2026 revenue versus DramaBox's approximately $35M, giving ReelShort roughly 70% market share among premium short drama apps.",
        },
      },
      {
        "@type": "Question",
        name: "How many users does ReelShort have?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ReelShort reached 2.7 million daily active users as of Q1 2026, a 125% increase year-over-year, with users spending an average of 45 minutes per day on the platform.",
        },
      },
    ],
  },
  "dramabox-vs-reelshort-2026": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is better, DramaBox or ReelShort?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ReelShort leads on revenue ($80M vs $35M in Q1 2026) and brand prestige, while DramaBox offers greater content diversity and often lower pricing. ReelShort is better for premium quality; DramaBox is better for variety and value.",
        },
      },
      {
        "@type": "Question",
        name: "How does DramaBox revenue compare to ReelShort in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Q1 2026, ReelShort generated approximately $80M in revenue versus DramaBox's $35M, giving ReelShort a commanding 70% share of the premium short drama market.",
        },
      },
      {
        "@type": "Question",
        name: "Is DramaBox cheaper than ReelShort?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. DramaBox is generally cheaper than ReelShort for both coin purchases and monthly premium subscriptions, making it the more budget-friendly option for regular viewers.",
        },
      },
    ],
  },
  "short-drama-app-safety-guide": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is ReelShort safe to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. ReelShort ranked among the safest short drama apps in NovelaFlash's 2026 testing, with strong data encryption, a transparent privacy policy, and effective content moderation.",
        },
      },
      {
        "@type": "Question",
        name: "Is DramaBox a safe app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. DramaBox is considered safe, with good security practices, clear billing disclosures, and responsive customer support. It ranked second safest in NovelaFlash's 12-app test.",
        },
      },
      {
        "@type": "Question",
        name: "What short drama apps are safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The safest short drama apps in 2026 based on NovelaFlash's testing are: ReelShort, DramaBox, ShortMax, FlexTV, and MoboReels. All implement industry-standard encryption, secure payments, and active content moderation.",
        },
      },
    ],
  },
  "is-dramabox-safe": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is DramaBox safe and legit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, DramaBox is a legitimate app owned by StoryMatrix. It is safe to use, featuring secure payment processing through official app stores (Apple and Google) and clear data privacy policies.",
        },
      },
      {
        "@type": "Question",
        name: "Does DramaBox have viruses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, DramaBox does not contain viruses. When downloaded from official sources like the Apple App Store or Google Play Store, the app is thoroughly vetted for security and malware.",
        },
      },
      {
        "@type": "Question",
        name: "Is DramaBox a scam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, DramaBox is not a scam. It is a premium subscription-based service. While some users find the coin system expensive, the platform delivers the content as promised and processes cancellations through official channels.",
        },
      },
    ],
  },
  "is-reelshort-safe": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is ReelShort safe for my data?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, ReelShort uses industry-standard encryption and secure servers to protect user data. It complies with major privacy regulations and provides clear disclosures about data usage in its privacy policy.",
        },
      },
      {
        "@type": "Question",
        name: "Is ReelShort a legitimate app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, ReelShort is a highly legitimate app owned by Crazy Maple Studio (COL Group). It has been featured in major media outlets and is a leader in the global short drama industry.",
        },
      },
      {
        "@type": "Question",
        name: "Will ReelShort charge me hidden fees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ReelShort uses a transparent coin-based and subscription-based billing model. All charges are processed through the App Store or Google Play Store, ensuring no hidden fees or unauthorized transactions.",
        },
      },
    ],
  },
  "is-shortmax-safe": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is ShortMax safe and legit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, ShortMax is a legitimate short drama app with over 50 million downloads. It is safe to use, processes payments through official app stores, and has established privacy protections for users.",
        },
      },
      {
        "@type": "Question",
        name: "Does ShortMax have any security risks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In our 2026 security audit, ShortMax showed no significant security risks. It uses standard encryption for data transmission and does not request excessive permissions on mobile devices.",
        },
      },
      {
        "@type": "Question",
        name: "How can I safely use ShortMax?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To use ShortMax safely, always download it from the Apple App Store or Google Play Store, manage your subscriptions through your device settings, and avoid clicking on unofficial 'free coin' links from external websites.",
        },
      },
    ],
  },
  "reelshort-best-bl-dramas-2026": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the best BL short series on ReelShort?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Top BL series on ReelShort in 2026 include 'Wicked Game', a suspenseful psychological thriller, and 'Office Crush', a lighthearted workplace romantic comedy. Both feature high production value and excellent chemistry.",
        },
      },
      {
        "@type": "Question",
        name: "Can I watch ReelShort BL dramas for free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Viewers can watch ReelShort BL dramas for free by claiming daily login rewards, watching ads to unlock episodes, or participating in app events to earn free coins.",
        },
      },
    ],
  },
  "dramabox-bl-series-guide": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the best BL shows on DramaBox?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Highly rated BL shows on DramaBox include 'Destiny Seeker', an emotional historical fantasy, and 'Midnight Confessions', a gritty modern romance. DramaBox offers a diverse catalog of both Thai and Chinese BL.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get free coins on DramaBox?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can earn free coins on DramaBox by completing daily tasks, sharing episodes, watching ads, and redeeming promo VIP keycodes from DramaBox's official social media channels.",
        },
      },
    ],
  },
  "korean-vs-thai-bl-short-dramas": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is better: Korean or Thai BL short dramas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your preference. Korean BL short dramas are known for cinematic quality and slow-burn emotional storytelling. Thai BL series are celebrated for intense chemistry, dynamic pacing, and passionate romance.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best app for BL series?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best apps for streaming high-quality BL short dramas in 2026 include ReelShort for premium originals, DramaBox for diverse regional content, and MoboReels for budget-friendly access.",
        },
      },
    ],
  },
  "double-life-billionaire-husband-reelshort-review": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many episodes are in The Double Life of My Billionaire Husband?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Double Life of My Billionaire Husband consists of 49 vertical micro-episodes, with each episode running approximately 90 to 120 seconds for a total runtime of around 75 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "Who plays Sebastian Klein and Natalie Adams in the drama?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sebastian Klein is played by actor Jarred Harper, while the female lead Natalie Adams is portrayed by actress Avery Kristen Pohl.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I watch all episodes of The Double Life of My Billionaire Husband for free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can watch Episodes 1 through 8 for free on ReelShort. To unlock the remaining episodes without paying, use ReelShort's daily check-in rewards and watch 5 daily promotional ads to claim up to 150 free coins per day.",
        },
      },
    ],
  },
  "timely-love-kalostv-short-drama-review": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the plot of Timely Love on KalosTV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timely Love follows Charlotte Sanders who enters a sudden flash marriage with William Shaw, believing he is a modest office worker when he is actually the sole billionaire heir to the Shaw financial empire.",
        },
      },
      {
        "@type": "Question",
        name: "How many episodes does Timely Love have and where to watch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timely Love has 82 episodes and is available exclusively on the KalosTV mobile streaming app.",
        },
      },
      {
        "@type": "Question",
        name: "Is KalosTV free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, KalosTV offers free check-in bonuses and daily ad rewards that allow users to unlock multiple episodes every day for free, alongside optional VIP subscription passes.",
        },
      },
    ],
  },
  "fated-to-the-ancient-wyrm-shortmax-guide": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Fated to the Ancient Wyrm about on ShortMax?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fated to the Ancient Wyrm follows Mara, a sacrificed bride who awakens an immortal ancient dragon deity inside a subterranean ruin and forms a magical blood pact to reclaim her kingdom.",
        },
      },
      {
        "@type": "Question",
        name: "How many episodes is Fated to the Ancient Wyrm?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The series features 68 high-CGI fantasy episodes exclusively on the ShortMax streaming app.",
        },
      },
      {
        "@type": "Question",
        name: "Should I buy ShortMax coins or the VIP Subscription?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For dedicated viewers wanting to binge all 68 episodes, the ShortMax Weekly VIP Pass ($14.99) is significantly more cost-effective than purchasing individual coin packages, saving approximately 40% overall.",
        },
      },
    ],
  },
  "best-short-drama-apps-july-2026": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the #1 short drama app right now in July 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ReelShort currently ranks as the #1 most popular short drama streaming app globally in July 2026, followed closely by DramaBox and ShortMax due to high-budget Hollywood and international series.",
        },
      },
      {
        "@type": "Question",
        name: "How can I watch short dramas for free without paying?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can watch short drama episodes for free by maximizing daily login check-in streaks, completing in-app tasks, watching promotional advertisements during off-peak bonus hours, and using official referral promo codes.",
        },
      },
      {
        "@type": "Question",
        name: "Are ReelShort and DramaBox safe to download on iPhone and Android?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, both ReelShort and DramaBox are legitimate, verified mobile applications available directly on the official Apple App Store and Google Play Store.",
        },
      },
    ],
  },
  "earn-money-short-drama-affiliate-program": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the commission rate for short drama affiliate programs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Top vertical short drama affiliate programs and platforms like DramaCPS pay promoters Cost-Per-Sale (CPS) commissions ranging from 45% to 65% on user recharges and VIP passes.",
        },
      },
      {
        "@type": "Question",
        name: "How do I apply for the ReelShort RS Boost or DramaCPS program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can register for DramaCPS directly via their website dashboard using your website domain or social profile. For ReelShort's official RS Boost program, you can apply through their creator partnerships contact page.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a large following to become a short drama affiliate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, while having a large following helps, niche website owners (like short drama reviews, recaps, and app comparison blogs) and targeted TikTok creators can generate substantial conversions with modest, high-intent traffic.",
        },
      },
    ],
  },
};

export const GUIDE_STRUCTURED_DATA: Record<string, GuideSchemaEntry> = {
  "is-shortmax-safe": {
    title: "Is ShortMax Safe?",
    data: {
      "@context": "https://schema.org",
      "@type": "Review",
      name: "ShortMax App Safety Review 2026",
      reviewAspect: ["Security", "Privacy", "Billing", "Legitimacy"],
      reviewRating: { "@type": "Rating", ratingValue: "4.5", bestRating: "5" },
      author: { "@type": "Organization", name: "NovelaFlash Editorial" },
    },
  },
  "watch-bl-short-dramas-free": {
    title: "Watch BL Short Dramas Free",
    data: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to watch BL short dramas for free",
      description: "Practical ways to access premium BL short drama series without paying, including daily rewards, ad-supported tiers, and official YouTube channels.",
      step: [
        { "@type": "HowToStep", name: "Use MoboReels daily rewards", text: "Log in to MoboReels daily to claim free coins specifically for their BL catalog." },
        { "@type": "HowToStep", name: "Watch ads on ReelShort", text: "Use the 'Watch Ads for Coins' feature on ReelShort to unlock BL episodes." },
        { "@type": "HowToStep", name: "Follow official YouTube channels", text: "Subscribe to GMMTV and other official Thai production houses for free BL uploads." },
      ],
    },
  },
  "short-drama-market-revenue-2026": {
    title: "Short Drama Market Revenue 2026",
    data: {
      "@context": "https://schema.org",
      "@type": "DataFeed",
      name: "Short Drama Industry Financial Report Q1 2026",
      description: "Comprehensive revenue data for the global short drama market, including platform rankings and growth percentages.",
    },
  },
  "best-werewolf-short-dramas": {
    title: "Best Werewolf Short Dramas",
    data: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "The Alpha's Possession" },
        { "@type": "ListItem", position: 2, name: "Fated to the Lycan King" },
      ],
    },
  },
  "cancel-reelshort": {
    title: "How to Cancel ReelShort",
    data: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to cancel a ReelShort subscription",
      description:
        "Step-by-step instructions for canceling a ReelShort subscription on iOS, Android, and the web.",
      totalTime: "PT10M",
      supply: [
        { "@type": "HowToSupply", name: "Active ReelShort subscription" },
        { "@type": "HowToSupply", name: "Device or browser used to subscribe" },
      ],
      step: [
        {
          "@type": "HowToStep",
          name: "Cancel ReelShort on iOS",
          text: "Open Settings, tap your Apple ID, choose Subscriptions, select ReelShort, and tap Cancel Subscription.",
        },
        {
          "@type": "HowToStep",
          name: "Cancel ReelShort on Android",
          text: "Open Google Play Store, go to Payments and subscriptions, open Subscriptions, select ReelShort, and confirm cancellation.",
        },
        {
          "@type": "HowToStep",
          name: "Cancel ReelShort on the web",
          text: "Log in to ReelShort on the web, open account settings, find billing or subscription settings, and choose Cancel Subscription.",
        },
      ],
    },
  },
  "cancel-dramabox": {
    title: "How to Cancel DramaBox",
    data: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to cancel a DramaBox subscription",
      description:
        "Step-by-step instructions for canceling a DramaBox subscription on iOS, Android, and the web.",
      totalTime: "PT10M",
      supply: [
        { "@type": "HowToSupply", name: "Active DramaBox subscription" },
        { "@type": "HowToSupply", name: "Device or browser used to subscribe" },
      ],
      step: [
        {
          "@type": "HowToStep",
          name: "Cancel DramaBox on iOS",
          text: "Open Settings, tap your Apple ID, choose Subscriptions, select DramaBox, and tap Cancel Subscription.",
        },
        {
          "@type": "HowToStep",
          name: "Cancel DramaBox on Android",
          text: "Open Google Play Store, go to Payments and subscriptions, open Subscriptions, select DramaBox, and confirm cancellation.",
        },
        {
          "@type": "HowToStep",
          name: "Cancel DramaBox on the web",
          text: "Log in to DramaBox on the web, open account settings, find billing or subscription settings, and choose Cancel Subscription.",
        },
      ],
    },
  },
  "watch-short-dramas-free": {
    title: "Watch Short Dramas Free",
    data: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to watch short dramas for free",
      description:
        "Eight practical methods for watching short dramas for free across official apps, video platforms, and rewards programs.",
      totalTime: "PT15M",
      step: [
        { "@type": "HowToStep", name: "Use ad-supported free tiers", text: "Start with official free tiers on apps like ReelShort and DramaBox for daily free episodes." },
        { "@type": "HowToStep", name: "Search YouTube", text: "Look for official or licensed short drama uploads on YouTube." },
        { "@type": "HowToStep", name: "Browse Dailymotion", text: "Use Dailymotion for additional free, ad-supported short drama episodes." },
        { "@type": "HowToStep", name: "Use free trials strategically", text: "Rotate legitimate free trials across platforms and cancel before renewal if needed." },
        { "@type": "HowToStep", name: "Claim daily rewards", text: "Log in every day to accumulate free coins or credits." },
        { "@type": "HowToStep", name: "Use referral bonuses", text: "Invite friends through official referral programs to earn extra viewing credits." },
        { "@type": "HowToStep", name: "Watch ads for coins", text: "Exchange short ad views for in-app coins where supported." },
        { "@type": "HowToStep", name: "Prioritize generous free tiers", text: "Use the apps with the most flexible free access, such as MoboReels, for heavy viewing." },
      ],
    },
  },
  "free-short-drama-apps": {
    title: "Best Free Short Drama Apps",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the best free short drama apps in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NovelaFlash highlights MoboReels, DramaBox, ReelShort, ShortMax, and FlexTV among the strongest free short drama app options based on free tier access, content variety, and user experience.",
          },
        },
        {
          "@type": "Question",
          name: "Which short drama app has the most generous free tier?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This guide ranks MoboReels as the most generous free tier because it emphasizes unlimited daily episodes with ad-supported viewing.",
          },
        },
        {
          "@type": "Question",
          name: "How do free short drama apps usually limit access?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most free short drama apps limit access with ad breaks, daily episode caps, standard video quality, and delayed access to new episodes.",
          },
        },
      ],
    },
  },
  "dramabox-alternatives": {
    title: "Apps Like DramaBox",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the best alternatives to DramaBox?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NovelaFlash recommends ReelShort, ShortMax, FlexTV, MoboReels, GoodShort, and other competing short drama platforms as leading alternatives to DramaBox.",
          },
        },
        {
          "@type": "Question",
          name: "Why should viewers compare DramaBox alternatives?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Different apps vary in free access, pricing, content mix, localization, and app experience, so comparing alternatives helps viewers find the best match for their preferences.",
          },
        },
        {
          "@type": "Question",
          name: "Which DramaBox alternative is best overall?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This NovelaFlash guide ranks ReelShort as the top overall DramaBox alternative because of its content depth, scale, and mobile-first viewing experience.",
          },
        },
      ],
    },
  },
  "best-bl-short-drama-apps": {
    title: "Best BL Short Drama Apps",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a BL short drama?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BL short dramas are short-form romantic and dramatic series centered on male-male relationships, typically designed for mobile viewing in compact episodes.",
          },
        },
        {
          "@type": "Question",
          name: "Which apps are best for BL short drama content?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NovelaFlash highlights ReelShort, DramaBox, MoboReels, and WeTV as strong platforms for BL short drama viewers because of their catalog depth and regional coverage.",
          },
        },
        {
          "@type": "Question",
          name: "What regions are most important for BL short dramas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Korea, Thailand, and China are major BL short drama markets, with each region contributing distinct storytelling styles and fan communities.",
          },
        },
      ],
    },
  },
  "dramabox-coins": {
    title: "DramaBox Free Coins",
    data: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to get free DramaBox coins",
      description:
        "Ways to earn free DramaBox coins through daily rewards, ads, gift codes, events, referrals, and in-app challenges.",
      totalTime: "PT15M",
      step: [
        { "@type": "HowToStep", name: "Claim daily login rewards", text: "Open DramaBox every day to maintain streak rewards and collect free coins." },
        { "@type": "HowToStep", name: "Watch ads for coins", text: "Use optional rewarded ads to earn small amounts of DramaBox coins throughout the day." },
        { "@type": "HowToStep", name: "Redeem gift codes", text: "Follow official DramaBox channels for active gift codes and redeem them in the app." },
        { "@type": "HowToStep", name: "Join seasonal events", text: "Participate in limited-time challenges and promotions for larger coin bonuses." },
        { "@type": "HowToStep", name: "Use referrals", text: "Invite new users through the referral program to earn extra coins." },
        { "@type": "HowToStep", name: "Spin the wheel", text: "Use the lucky draw or wheel feature when available for daily rewards." },
        { "@type": "HowToStep", name: "Complete achievements", text: "Unlock milestone rewards by watching episodes and finishing targeted in-app tasks." },
      ],
    },
  },
  "chinese-short-drama-actors": {
    title: "Chinese Short Drama Actors",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who are the top Chinese short drama actors in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NovelaFlash highlights performers such as Chen Hao, Liu Yang, Zhang Wei, Li Na, Wang Xin, and Zhang Jing among the leading Chinese short drama stars in 2026.",
          },
        },
        {
          "@type": "Question",
          name: "Why are Chinese short drama actors gaining global attention?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "These actors have grown with the mobile-first short drama format, rapid release cycles, and global distribution across apps like ReelShort and DramaBox.",
          },
        },
        {
          "@type": "Question",
          name: "Where can viewers identify Chinese short drama actors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NovelaFlash notes that major actors appear repeatedly across ReelShort, DramaBox, YouTube, and Douyin, making cross-platform recognition easier for fans.",
          },
        },
      ],
    },
  },
  "short-korean-dramas": {
    title: "Best Short Korean Dramas",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the best short Korean dramas in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NovelaFlash ranks titles such as First Marriage Then Love, Hometown's Embrace, Midnight Confessions, and Seoul Nights among the best short Korean dramas in 2026.",
          },
        },
        {
          "@type": "Question",
          name: "How do short Korean dramas differ from Chinese short dramas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This guide describes short Korean dramas as more character-driven and emotionally layered, while Chinese short dramas often lean into faster pacing and higher dramatic stakes.",
          },
        },
        {
          "@type": "Question",
          name: "Why are K-drama mini series growing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "K-drama mini series fit mobile viewing habits while preserving the character development, cinematography, and emotional storytelling Korean drama fans expect.",
          },
        },
      ],
    },
  },
  "dramabox-pricing": {
    title: "DramaBox Pricing",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does DramaBox cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "According to NovelaFlash, DramaBox offers a free tier, coin-based episode purchases, and weekly, monthly, and annual premium subscription plans.",
          },
        },
        {
          "@type": "Question",
          name: "Is DramaBox cheaper than ReelShort?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This guide says DramaBox is generally cheaper than ReelShort for coin purchases and monthly premium pricing, making it attractive for value-focused viewers.",
          },
        },
        {
          "@type": "Question",
          name: "What is the DramaBox VIP keycode system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DramaBox uses VIP keycodes to unlock temporary premium access, giving users short windows of premium features through promotions and rewards.",
          },
        },
      ],
    },
  },
  "best-chinese-short-dramas": {
    title: "Best Chinese Short Dramas",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the best Chinese short dramas in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NovelaFlash ranks No Return, Mute Girl Who Sings, The Past Drowned in Moonlight, Boxing Champion, and Love Never Ends among the leading Chinese short dramas of 2026.",
          },
        },
        {
          "@type": "Question",
          name: "Why are Chinese short dramas so popular globally?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chinese short dramas blend high emotional stakes, quick mobile-friendly episodes, and broad genre coverage, which has helped turn the category into a multibillion-dollar global market.",
          },
        },
        {
          "@type": "Question",
          name: "Where can viewers watch Chinese short dramas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This guide points viewers to ReelShort, DramaBox, YouTube, and Douyin as major sources for Chinese short drama viewing.",
          },
        },
      ],
    },
  },
  "reelshort-coins": {
    title: "ReelShort Coins",
    data: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to get and use ReelShort coins",
      description:
        "A practical guide to earning free ReelShort coins, using promo codes, and choosing between coin packs and VIP plans.",
      totalTime: "PT15M",
      step: [
        { "@type": "HowToStep", name: "Claim daily login rewards", text: "Open ReelShort every day to collect streak-based coin rewards." },
        { "@type": "HowToStep", name: "Watch rewarded ads", text: "Use optional ads in the rewards section to earn additional ReelShort coins." },
        { "@type": "HowToStep", name: "Invite friends", text: "Use the referral program to earn bonus coins when new users sign up and convert." },
        { "@type": "HowToStep", name: "Join seasonal promotions", text: "Check limited-time events and promotions for larger coin rewards." },
        { "@type": "HowToStep", name: "Redeem promo codes", text: "Enter official ReelShort promo codes in the app settings or account area to unlock bonuses." },
        { "@type": "HowToStep", name: "Choose coins or VIP", text: "Pick coin packs for light viewing or VIP for heavier, ad-free consumption." },
      ],
    },
  },
  "best-dramabox-shows": {
    title: "Top 20 DramaBox Shows",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the best DramaBox shows in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NovelaFlash ranks Divorced at the Wedding Day, Return of His Majesty, Miss You After Goodbye, Forever Was a Lie, and Mafia Lover among the top DramaBox shows in 2026.",
          },
        },
        {
          "@type": "Question",
          name: "Why does DramaBox stand out in short dramas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DramaBox stands out for its genre range, high-output release cadence, and strong mix of romance, thriller, fantasy, and drama content.",
          },
        },
        {
          "@type": "Question",
          name: "How were the top DramaBox shows selected?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This NovelaFlash ranking considers viewer engagement, production quality, narrative strength, and cultural impact when scoring the most popular DramaBox shows.",
          },
        },
      ],
    },
  },
  "reelshort-pricing": {
    title: "ReelShort Pricing",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does ReelShort cost money?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ReelShort uses a freemium model, so viewers can watch some content for free, while unlimited access, coins, and VIP features require payment.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a ReelShort series cost to watch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The total cost depends on series length and whether a viewer uses the free tier, buys coins, or subscribes to VIP, with NovelaFlash breaking down each option in this guide.",
          },
        },
        {
          "@type": "Question",
          name: "Should viewers buy coins or subscribe to VIP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NovelaFlash recommends coins for lighter, occasional viewing and VIP subscriptions for frequent viewers who want unlimited episodes and ad-free playback.",
          },
        },
      ],
    },
  },
  "best-reelshort-shows": {
    title: "Top 20 ReelShort Shows",
    data: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the best ReelShort shows in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NovelaFlash ranks The Senator's Son, Kingsley, King or Clown, Money Guns and Merry Christmas, and I Had a Baby Without You among the top ReelShort shows in 2026.",
          },
        },
        {
          "@type": "Question",
          name: "Why are ReelShort shows so popular?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ReelShort combines vertical-cinema presentation, strong cliffhangers, and polished short-form storytelling, which has helped many of its shows go viral globally.",
          },
        },
        {
          "@type": "Question",
          name: "How does NovelaFlash rank ReelShort shows?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The ranking weighs engagement, critical reception, production quality, and cultural impact across ReelShort's catalog.",
          },
        },
      ],
    },
  },
};
