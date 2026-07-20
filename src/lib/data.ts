export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle?: string;
  metaDescription?: string;
  category: string;
  categoryColor: "violet" | "pink" | "cyan" | "green";
  image: string;
  video?: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  trending?: boolean;
}

export interface Platform {
  slug: string;
  name: string;
  icon: string;
  score: number;
  downloads: string;
  revenue: string;
  description: string;
  category: string;
  links?: {
    appStore?: string;
    googlePlay?: string;
    website?: string;
  };
}

export interface Stat {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: string;
}

export const stats: Stat[] = [
  {
    label: "Global Market Size",
    value: "$26B",
    change: "+34%",
    trend: "up",
    icon: "globe",
  },
  {
    label: "ReelShort DAU",
    value: "2.7M",
    change: "+125%",
    trend: "up",
    icon: "users",
  },
  {
    label: "Daily App Spending",
    value: "$3M+",
    change: "+55%",
    trend: "up",
    icon: "dollar",
  },
  {
    label: "YoY Revenue Growth",
    value: "~3x",
    change: "H1 2026 vs H1 2025",
    trend: "up",
    icon: "trending",
  },
];

export const platforms: Platform[] = [
  {
    slug: "reelshort",
    name: "ReelShort",
    icon: "/platforms/reelshort.png",
    score: 9.2,
    downloads: "55M+",
    revenue: "$320M+/yr",
    description:
      "Global market leader backed by Crazy Maple Studio (COL Group). Named TIME 100 Most Influential Companies. Hit $80M revenue in early 2026 alone. Breakout hit 'The Double Life of My Billionaire Husband' surpassed 500M views.",
    category: "Premium",
    links: {
      appStore: "/go/reelshort",
      googlePlay: "/go/reelshort",
      website: "/go/reelshort",
    },
  },
  {
    slug: "dramabox",
    name: "DramaBox",
    icon: "/platforms/dramabox.png",
    score: 9.0,
    downloads: "40M+",
    revenue: "$140M+/yr",
    description:
      "Strong #2 in the global short drama market. Top-rated on App Store (~4.8 stars, 598K+ ratings). AI-driven recommendations with an aggressive content pipeline across romance, revenge, and family drama.",
    category: "Premium",
    links: {
      appStore: "/go/dramabox",
      googlePlay: "/go/dramabox",
      website: "/go/dramabox",
    },
  },
  {
    slug: "shortmax",
    name: "ShortMax",
    icon: "/platforms/shortmax.png",
    score: 8.1,
    downloads: "50M+",
    revenue: "$80M/yr",
    description:
      "One of the largest short drama platforms globally with 50M+ downloads. Known for its massive content library and strong recommendation algorithm. Available across iOS and Android with multi-language support.",
    category: "Premium",
    links: {
      appStore: "/go/shortmax",
      googlePlay: "/go/shortmax",
      website: "/go/shortmax",
    },
  },
  {
    slug: "flextv",
    name: "FlexTV",
    icon: "/platforms/flextv.png",
    score: 7.6,
    downloads: "5M+",
    revenue: "$25M/yr",
    description:
      "Multi-region platform blending short dramas, reels, and international content with subtitles and personalization features. 5M+ downloads on Google Play.",
    category: "Growth",
    links: {
      appStore: "/go/flextv",
      googlePlay: "/go/flextv",
      website: "/go/flextv",
    },
  },
  {
    slug: "moboreels",
    name: "MoboReels",
    icon: "/platforms/moboreels.png",
    score: 7.4,
    downloads: "3M+",
    revenue: "$15M/yr",
    description:
      "Budget-friendly platform with ad-supported free tier and multi-language subtitles. App Store rating ~4.3 stars. Strong in romance, fantasy, and C-drama content.",
    category: "Emerging",
    links: {
      appStore: "/go/moboreels",
      googlePlay: "/go/moboreels",
      website: "/go/moboreels",
    },
  },
  {
    slug: "goodshort",
    name: "GoodShort",
    icon: "/platforms/goodshort.png",
    score: 8.4,
    downloads: "15M+",
    revenue: "$45M/yr",
    description:
      "Rapidly climbing the global charts in 2026. Known for high-quality English-original miniseries, intuitive daily check-in rewards, and a vast library of billionaire and romance thrillers.",
    category: "Growth",
    links: {
      appStore: "/go/goodshort",
      googlePlay: "/go/goodshort",
      website: "/go/goodshort",
    },
  },
  {
    slug: "kalostv",
    name: "KalosTV",
    icon: "/platforms/kalostv.png",
    score: 8.3,
    downloads: "10M+",
    revenue: "$35M/yr",
    description:
      "Breakout short drama app celebrated for blockbuster exclusive titles like 'Timely Love' and 'Love Too Late'. High user retention with rapid daily episode drops.",
    category: "Growth",
    links: {
      appStore: "/go/kalostv",
      googlePlay: "/go/kalostv",
      website: "/go/kalostv",
    },
  },
  {
    slug: "dreameshort",
    name: "DreameShort",
    icon: "/platforms/dreameshort.png",
    score: 8.0,
    downloads: "12M+",
    revenue: "$30M/yr",
    description:
      "Backed by Stary/Dreame, one of the world's largest web novel publishers. Adapts top-selling werewolf, mafia, and urban romance novels into addicting 2-minute cinematic episodes.",
    category: "Growth",
    links: {
      appStore: "/go/dreameshort",
      googlePlay: "/go/dreameshort",
      website: "/go/dreameshort",
    },
  },
  {
    slug: "flickreels",
    name: "FlickReels",
    icon: "/platforms/flickreels.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Official short drama streaming platform.",
    category: "Emerging",
    links: { appStore: "/go/flickreels", googlePlay: "/go/flickreels", website: "/go/flickreels" },
  },
  {
    slug: "snackshort",
    name: "SnackShort",
    icon: "/platforms/snackshort.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Official short drama streaming platform.",
    category: "Emerging",
    links: { appStore: "/go/snackshort", googlePlay: "/go/snackshort", website: "/go/snackshort" },
  },
  {
    slug: "starshort",
    name: "StarShort",
    icon: "/platforms/starshort.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Official short drama streaming platform.",
    category: "Emerging",
    links: { appStore: "/go/starshort", googlePlay: "/go/starshort", website: "/go/starshort" },
  },
  {
    slug: "honeyreels",
    name: "HoneyReels",
    icon: "/platforms/honeyreels.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Official short drama streaming platform.",
    category: "Emerging",
    links: { appStore: "/go/honeyreels", googlePlay: "/go/honeyreels", website: "/go/honeyreels" },
  },
  {
    slug: "topshort",
    name: "TopShort",
    icon: "/platforms/topshort.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Official short drama streaming platform.",
    category: "Emerging",
    links: { appStore: "/go/topshort", googlePlay: "/go/topshort", website: "/go/topshort" },
  },
  {
    slug: "footage",
    name: "Footage",
    icon: "/platforms/footage.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Official short drama streaming platform.",
    category: "Emerging",
    links: { appStore: "/go/footage", googlePlay: "/go/footage", website: "/go/footage" },
  },
  {
    slug: "veloria",
    name: "Veloria",
    icon: "/platforms/veloria.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Official short drama streaming platform.",
    category: "Emerging",
    links: { appStore: "/go/veloria", googlePlay: "/go/veloria", website: "/go/veloria" },
  },
  {
    slug: "pancake",
    name: "Pancake",
    icon: "/platforms/pancake.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Official short drama streaming platform.",
    category: "Emerging",
    links: { appStore: "/go/pancake", googlePlay: "/go/pancake", website: "/go/pancake" },
  },
  {
    slug: "stardusttv",
    name: "StardustTV",
    icon: "/platforms/stardusttv.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Official short drama streaming platform.",
    category: "Emerging",
    links: { appStore: "/go/stardusttv", googlePlay: "/go/stardusttv", website: "/go/stardusttv" },
  },
  {
    slug: "playlet",
    name: "Playlet",
    icon: "/platforms/playlet.png",
    score: 0.0,
    downloads: "N/A",
    revenue: "N/A",
    description: "Official short drama streaming platform.",
    category: "Emerging",
    links: { appStore: "/go/playlet", googlePlay: "/go/playlet", website: "/go/playlet" },
  }

];

export const featuredArticle: Article = {
  slug: "26-billion-micro-drama-boom",
  title: "The $26 Billion Micro-Drama Boom: Inside the Revolution Reshaping Global Entertainment",
  excerpt:
    "From Douyin to your phone screen — how Chinese short drama studios conquered Western audiences and built a multi-billion dollar industry in under three years.",
  category: "Industry Analysis",
  categoryColor: "violet",
  image: "/images/articles/featured-hero.jpg",
  video: "/videos/featured-reelshort.mp4",
  author: {
    name: "ReelPulse Editorial",
    avatar: "/images/avatar-editorial.png",
  },
  publishedAt: "Mar 28, 2026",
  readTime: "12 min read",
  featured: true,
};

export const trendingArticles: Article[] = [
  {
    slug: "reelshort-q1-2026-record",
    title: "ReelShort Hits Record $80M Revenue in Q1 2026",
    excerpt: "Crazy Maple Studio's flagship app continues to dominate.",
    metaTitle: "ReelShort Q1 2026 Revenue: $80M Record — Full Data Breakdown | ReelPulse",
    metaDescription: "ReelShort hit $80M in Q1 2026 revenue, up 40% QoQ. Full breakdown: 2.7M daily active users, 70% market share vs DramaBox, and what it means for the short drama industry.",
    category: "Platform News",
    categoryColor: "cyan",
    image: "/images/trending-1.jpg",
    video: "/videos/trending-reelshort-revenue.mp4",
    author: { name: "Sarah Chen", avatar: "/images/avatar-1.png" },
    publishedAt: "Apr 21, 2026",
    readTime: "4 min",
    trending: true,
  },
  {
    slug: "ai-generated-drama-first-million",
    title: "First AI-Generated Short Drama Crosses 1M Views",
    excerpt: "StoReel's AI-native production reaches viral status.",
    category: "AI & Tech",
    categoryColor: "pink",
    image: "/images/trending-2.jpg",
    video: "/videos/trending-ai-drama.mp4",
    author: { name: "Alex Morgan", avatar: "/images/avatar-2.png" },
    publishedAt: "Apr 20, 2026",
    readTime: "6 min",
    trending: true,
  },
  {
    slug: "india-short-drama-explosion",
    title: "India's Short Drama Market Explodes with $50M in Funding",
    excerpt: "Chai Shots, Flick TV, and Reelsaga lead the charge.",
    category: "Global Markets",
    categoryColor: "green",
    image: "/images/trending-3.jpg",
    video: "/videos/trending-india.mp4",
    author: { name: "Priya Sharma", avatar: "/images/avatar-3.png" },
    publishedAt: "Apr 19, 2026",
    readTime: "5 min",
    trending: true,
  },
  {
    slug: "dramabox-vs-reelshort-2026",
    title: "DramaBox vs ReelShort: The Battle for Short Drama Supremacy",
    excerpt: "A deep dive into the two leading platforms.",
    metaTitle: "DramaBox vs ReelShort 2026: Revenue, Content & Which Is Better | ReelPulse",
    metaDescription: "ReelShort vs DramaBox in 2026: $80M vs $35M in Q1 revenue, 55M vs 40M downloads. Full comparison of pricing, content library, and which app wins for different types of viewers.",
    category: "Comparison",
    categoryColor: "violet",
    image: "/images/trending-4.jpg",
    video: "/videos/trending-dramabox-vs-reelshort.mp4",
    author: { name: "James Liu", avatar: "/images/avatar-4.png" },
    publishedAt: "Apr 18, 2026",
    readTime: "8 min",
    trending: true,
  },
];

export const latestArticles: Article[] = [
  {
    slug: "ai-short-drama-industry-report-2026",
    title: "State of the Short Drama Industry 2025-2026: How AI is Reshaping a $15 Billion Global Market",
    excerpt: "A comprehensive analysis of the global short drama market. Discover how Generative AI is slashing production costs by 80% and driving the industry toward a projected $15B valuation.",
    metaTitle: "2025-2026 AI Short Drama Industry Report & Trends | ReelPulse",
    metaDescription: "Read the latest 2025-2026 industry report on AI short dramas. Learn how AI is revolutionizing production costs and driving the global market toward $15 Billion.",
    category: "Report",
    categoryColor: "violet",
    image: "/images/trending-ai-report.jpg",
    author: { name: "ReelPulse Editorial", avatar: "/images/avatar-editorial.png" },
    publishedAt: "Aug 15, 2026",
    readTime: "12 min",
  },
  {
    slug: "double-life-billionaire-husband-reelshort-review",
    title: "The Double Life of My Billionaire Husband: Full Episodes Guide, Cast & ReelShort Review",
    excerpt: "Everything you need to know about ReelShort's #1 all-time smash hit: complete plot breakdown, cast details (Sebastian & Natalie), exact coin costs, and how to watch full episodes for free.",
    metaTitle: "The Double Life of My Billionaire Husband Full Episodes & ReelShort Review | ReelPulse",
    metaDescription: "Looking to watch The Double Life of My Billionaire Husband? Read our authoritative review, discover exact coin costs, cast breakdown, and free check-in hacks.",
    category: "Platform Review",
    categoryColor: "violet",
    image: "/images/double_life_billionaire_husband_cover.jpg",
    author: { name: "Charles Snow", avatar: "/images/avatar-1.png" },
    publishedAt: "Jul 9, 2026",
    readTime: "8 min",
  },
  {
    slug: "timely-love-kalostv-short-drama-review",
    title: "Timely Love on KalosTV: Complete Plot Summary, Cast Guide & Free Viewing Tips",
    excerpt: "An in-depth review of KalosTV's breakout flash-marriage drama 'Timely Love'. Discover how Charlotte Sanders and William Shaw's accidental marriage became the most addictive drama of the summer.",
    metaTitle: "Timely Love Short Drama Review & Full Episodes Guide on KalosTV | ReelPulse",
    metaDescription: "Where to watch Timely Love full episodes? Explore our complete KalosTV review, cast details, plot analysis, and daily check-in tips to unlock episodes free.",
    category: "Platform Review",
    categoryColor: "pink",
    image: "/images/timely_love_kalostv_cover.jpg",
    author: { name: "ReelPulse Editorial", avatar: "/images/avatar-editorial.png" },
    publishedAt: "Jul 9, 2026",
    readTime: "7 min",
  },
  {
    slug: "fated-to-the-ancient-wyrm-shortmax-guide",
    title: "Fated to the Ancient Wyrm: Full Episodes Breakdown & ShortMax Fantasy Guide",
    excerpt: "Delve into the high-stakes world of 'Fated to the Ancient Wyrm' on ShortMax. Our comprehensive guide covers the dragon king pact, episode costs, VIP pass comparison, and hidden story lore.",
    metaTitle: "Fated to the Ancient Wyrm ShortMax Review & Complete Episode Guide | ReelPulse",
    metaDescription: "Looking to unlock Fated to the Ancient Wyrm on ShortMax? Compare VIP subscriptions versus coin packs, read plot breakdowns, and discover free viewing hacks.",
    category: "Platform Review",
    categoryColor: "cyan",
    image: "/images/fated_to_ancient_wyrm_cover.jpg",
    author: { name: "Charles Snow", avatar: "/images/avatar-1.png" },
    publishedAt: "Jul 9, 2026",
    readTime: "9 min",
  },
  {
    slug: "best-short-drama-apps-july-2026",
    title: "Top 10 Best Short Drama Apps of July 2026: Free Coins, Reviews & New Releases",
    excerpt: "Explore the most downloaded short drama streaming apps of July 2026, including ReelShort, DramaBox, ShortMax, and insider tips to unlock free bonus coins.",
    metaTitle: "10 Best Short Drama Apps (July 2026): Free Coins & Top Series | ReelPulse",
    metaDescription: "Looking for the best short drama apps right now? Discover July 2026 rankings, free coin hacks, and comprehensive reviews of ReelShort, DramaBox, GoodShort, and more.",
    category: "Guide",
    categoryColor: "violet",
    image: "/images/best_apps_july_2026_cover.png",
    author: { name: "ReelPulse Editorial", avatar: "/images/avatar-editorial.png" },
    publishedAt: "Jul 8, 2026",
    readTime: "9 min",
  },
  {
    slug: "earn-money-short-drama-affiliate-program",
    title: "How Creators & Affiliates Are Earning $5,000+/Month Promoting Short Drama Apps (RS Boost & DramaCPS Guide)",
    excerpt: "A complete step-by-step blueprint on how to join high-paying short drama affiliate programs, earn 65% CPS commissions, and monetize your traffic.",
    metaTitle: "Earn $5k+/Month with Short Drama Affiliate Programs: RS Boost & DramaCPS Guide",
    metaDescription: "Learn how to monetize your website or TikTok traffic with short drama affiliate programs. Comprehensive review of DramaCPS, ReelShort Boost, and top CPA offers in 2026.",
    category: "Creator Economy",
    categoryColor: "green",
    image: "/images/short_drama_affiliate_cover.png",
    author: { name: "Charles Snow", avatar: "/images/avatar-1.png" },
    publishedAt: "Jul 8, 2026",
    readTime: "11 min",
  },
  {
    slug: "reelshort-best-bl-dramas-2026",
    title: "Top 10 Must-Watch BL Short Dramas on ReelShort (2026)",
    excerpt: "Discover the best BL short series on ReelShort, from psychological thrillers like 'Wicked Game' to sweet office romances.",
    metaTitle: "10 Best BL Short Dramas on ReelShort: Free Apps & Series 2026 | ReelPulse",
    metaDescription: "Looking for the best BL short series? Explore our top 10 list of ReelShort BL dramas for 2026, including reviews, ratings, and tips to watch for free.",
    category: "Guide",
    categoryColor: "pink",
    image: "/images/reelshort_bl_dramas_cover.png",
    author: { name: "ReelPulse Editorial", avatar: "/images/avatar-editorial.png" },
    publishedAt: "Jun 26, 2026",
    readTime: "8 min",
  },
  {
    slug: "dramabox-bl-series-guide",
    title: "DramaBox BL Series Guide: Best Shows & Free Viewing Tips",
    excerpt: "Your ultimate guide to watching BL dramas on DramaBox, featuring top shows like 'Destiny Seeker' and how to earn free coins.",
    metaTitle: "DramaBox BL Series Guide: Best Shows & Free Drama App Tips | ReelPulse",
    metaDescription: "Find the best BL shows on DramaBox in 2026. Read our guide on 'Destiny Seeker', 'Midnight Confessions', and how to unlock episodes on this free BL drama app.",
    category: "Platform Review",
    categoryColor: "cyan",
    image: "/images/dramabox_bl_series_cover.png",
    author: { name: "James Liu", avatar: "/images/avatar-4.png" },
    publishedAt: "Jun 25, 2026",
    readTime: "7 min",
  },
  {
    slug: "korean-vs-thai-bl-short-dramas",
    title: "Korean vs Thai BL Short Dramas: Which Should You Watch?",
    excerpt: "A deep dive into the cinematic storytelling of Korean BL vs the passionate, dynamic pacing of Thai BL short series.",
    metaTitle: "Korean vs Thai BL Short Dramas: Best Apps & Series Comparison | ReelPulse",
    metaDescription: "Comparing the emotional depth of short Korean dramas with the intense romance of Thai BL series. Find out which is better and the best apps to stream them.",
    category: "Industry Analysis",
    categoryColor: "violet",
    image: "/images/korean_vs_thai_bl_cover.png",
    author: { name: "Emma Rodriguez", avatar: "/images/avatar-6.png" },
    publishedAt: "Jun 24, 2026",
    readTime: "6 min",
  },
  {
    slug: "japan-thingmedia-200m-yen",
    title: "Japan's THINGMEDIA Raises ¥200M to Build Short Drama Empire",
    excerpt:
      "The Tokyo-based studio backed by Mixi aims to produce 100+ titles per year targeting Asian markets.",
    category: "Funding",
    categoryColor: "green",
    image: "/images/latest-1.jpg",
    video: "/videos/latest-japan.mp4",
    author: { name: "Yuki Tanaka", avatar: "/images/avatar-5.png" },
    publishedAt: "Mar 27, 2026",
    readTime: "4 min",
  },
  {
    slug: "creator-economy-short-drama",
    title: "How Creators Are Earning $10K/Month Writing Short Drama Scripts",
    excerpt:
      "The emerging creator economy around micro-dramas is opening new income streams for writers worldwide.",
    category: "Creator Economy",
    categoryColor: "pink",
    image: "/images/latest-2.jpg",
    video: "/videos/latest-creators.mp4",
    author: { name: "Emma Rodriguez", avatar: "/images/avatar-6.png" },
    publishedAt: "Mar 26, 2026",
    readTime: "7 min",
  },
  {
    slug: "short-drama-app-safety-guide",
    title: "Are Short Drama Apps Safe? Everything You Need to Know in 2026",
    excerpt:
      "We tested 12 short drama apps for data privacy, billing transparency, and content moderation.",
    metaTitle: "Is ReelShort & DramaBox Safe? Ultimate App Safety Guide (2026) | ReelPulse",
    metaDescription: "We tested 12 short drama apps for data privacy, billing safety, and content moderation. ReelShort and DramaBox rank safest. What you need to know before downloading in 2026.",
    category: "Guide",
    categoryColor: "cyan",
    image: "/images/latest-3.jpg",
    video: "/videos/latest-safety.mp4",
    author: { name: "ReelPulse Editorial", avatar: "/images/avatar-editorial.png" },
    publishedAt: "Mar 25, 2026",
    readTime: "10 min",
  },
  {
    slug: "gammatime-14m-seed-round",
    title: "GammaTime Secures $14M Seed to Build Next-Gen Short Drama Platform",
    excerpt:
      "The startup is betting on interactive storylines and AI-powered personalization.",
    category: "Funding",
    categoryColor: "green",
    image: "/images/latest-4.jpg",
    video: "/videos/latest-gammatime.mp4",
    author: { name: "Sarah Chen", avatar: "/images/avatar-1.png" },
    publishedAt: "Mar 24, 2026",
    readTime: "5 min",
  },
];

export const homeSpotlights = [
  {
    slug: "tech-ai",
    title: "AI in Short Dramas",
    description: "How AI video generation, automated scriptwriting, and tools like Sora and Kling are reshaping the micro-drama production pipeline — from concept to screen in days, not months.",
  },
  {
    slug: "creator-economy",
    title: "Creator Economy",
    description: "From script writers earning $5K per episode to voice actors and vertical video directors — the new creative careers emerging in the short drama boom.",
  },
  {
    slug: "global-markets",
    title: "China Goes Global",
    description: "How Chinese studios behind ReelShort and DramaBox conquered Western markets, and what the \"going overseas\" wave means for the $26B micro-drama industry.",
  },
];

export const industrySpotlights = [
  {
    slug: "tech-ai",
    title: "AI in Short Dramas",
    description: "Tracking AI-powered production from Kuaishou's first AI micro-drama to today's automated pipelines. How generative AI is cutting short drama production costs by 80% and what it means for content quality.",
    gradient: "from-violet-600/20 to-purple-900/20",
    icon: "sparkles",
    image: "/images/spotlights/tech-ai.png",
  },
  {
    slug: "creator-economy",
    title: "Creator Economy",
    description: "Data on earning potential across short drama roles — script writing, directing, voice acting. How platforms like ReelShort are building a new class of mobile-first content creators.",
    gradient: "from-pink-600/20 to-rose-900/20",
    icon: "users",
  },
  {
    slug: "global-markets",
    title: "China Goes Global",
    description: "Geographic breakdown of the global short drama market: North America ($2B+), Southeast Asia, Japan, and India. Revenue data, ARPU analysis, and the cross-border expansion strategy.",
    gradient: "from-cyan-600/20 to-blue-900/20",
    icon: "globe",
  },
];
