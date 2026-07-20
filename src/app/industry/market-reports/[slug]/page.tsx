import type { Metadata } from "next";
import Link from "@/components/ui/InternalLink";
import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

interface Report {
  slug: string;
  title: string;
  date: string;
  stat: string;
  summary: string;
}

interface ReportSection {
  heading: string;
  body: string;
}

interface ReportContent {
  sections: ReportSection[];
}

const REPORTS: Report[] = [
  {
    slug: "q1-2026-revenue",
    title: "Q1 2026 Short Drama Revenue Report",
    date: "April 2026",
    stat: "$700M quarterly revenue",
    summary:
      "A record-breaking quarter for the industry, driven by massive expansion in North American and Southeast Asian markets.",
  },
  {
    slug: "global-market-size-2025",
    title: "Global Market Size Analysis 2025",
    date: "January 2026",
    stat: "$26B total market",
    summary:
      "Comprehensive analysis of the vertical video economy, tracking growth from 2022 to the 2025 peak.",
  },
  {
    slug: "china-overseas-revenue-2024",
    title: "China Short Drama Overseas Revenue 2024",
    date: "December 2025",
    stat: "$4.3B overseas",
    summary:
      "Examining the 'Chuhai' wave as Chinese studios dominate the Western micro-drama landscape.",
  },
  {
    slug: "user-acquisition-cost-benchmarks",
    title: "User Acquisition Cost Benchmarks",
    date: "March 2026",
    stat: "$0.40-0.80 CPI",
    summary:
      "A deep dive into marketing efficiency and platform-specific acquisition costs across Meta, TikTok, and Google.",
  },
];

const REPORT_CONTENT: Record<string, ReportContent> = {
  "q1-2026-revenue": {
    sections: [
      {
        heading: "Q1 2026: A Record-Breaking Quarter",
        body:
          "Q1 2026 marked the strongest quarter in short drama history. ReelShort alone posted $80 million in global in-app purchase revenue — a 40% quarter-over-quarter increase from Q4 2025 — while DramaBox recorded approximately $35 million. Combined with revenue from ShortMax, FlexTV, MoboReels, and a growing tier of regional platforms, total category in-app purchase revenue for the quarter is estimated at roughly $700 million globally. That represents approximately three times the level recorded in Q1 2025, confirming that micro-drama has entered a phase of compounding scale rather than linear growth.\n\nThe strongest contribution continued to come from North America, where English-language adaptation, aggressive creative testing, and refined monetization funnels lifted average revenue per paying user across leading apps. ReelShort's 55 million downloads and 2.7 million daily active users — up 125% year-over-year — set a new benchmark for engagement in the category.",
      },
      {
        heading: "Leaders Consolidated Their Position",
        body:
          "ReelShort and DramaBox retained their positions as the clear category leaders entering 2026, together holding roughly 70%+ of premium short drama app revenue. ReelShort's $80M Q1 2026 performance confirmed its dominance in Western markets, where its premium content strategy and vertical-cinema production values have driven industry-leading conversion from free viewers to paid subscribers.\n\nBehind the top two, a second wave of competitors continued to scale rapidly. ShortMax, FlexTV, and MoboReels were among the fastest-growing newcomers, benefiting from lower content costs, localized genre packaging, and more flexible free-tier models. Their rise confirmed that the market remained open to new entrants capable of combining strong retention with disciplined user acquisition. DramaBox's 40 million downloads and aggressive catalog expansion in Southeast Asia and Latin America positioned it as the primary challenger to ReelShort's global dominance.",
      },
      {
        heading: "What Q1 2026 Signals for the Rest of the Year",
        body:
          "Q1 2026 established three clear signals for the remainder of the year. First, short drama is no longer a download race — the real competitive advantage now comes from monetization depth: coin systems, VIP subscriptions, and cliffhanger-driven episode unlocks that convert casual viewers into paying subscribers. Second, international diversification is accelerating; North America remains the top revenue market, but Southeast Asia, Japan, and India are compounding quickly.\n\nThird, AI-assisted production is reducing content costs significantly, enabling platforms to increase release cadence without proportional cost growth. Studios that can pair breakout creative with localized production pipelines and data-driven cliffhanger placement will dominate H2 2026. The category's $700M Q1 2026 quarter is not a ceiling — it is evidence that the underlying demand for serialized mobile-native storytelling has become structurally durable.",
      },
    ],
  },
  "global-market-size-2025": {
    sections: [
      {
        heading: "How Large the Market Became",
        body:
          "By 2025, the short drama economy had become large enough to be measured as a global media segment rather than a niche mobile app trend. Industry reporting from Chinese trade outlets, platform disclosures, and Sensor Tower app-revenue tracking all pointed in the same direction: micro-drama had become a multi-billion-dollar category with China still the biggest production base and overseas markets supplying the fastest incremental growth. Much of the industry's most-cited value creation came from paid episodic unlocks and subscription revenue rather than advertising alone.\n\nThe frequently cited $26 billion figure reflects the broad vertical-video and micro-drama opportunity discussed across the industry, especially when combining domestic Chinese activity with adjacent monetization in overseas apps, production services, and distribution. What matters strategically is less the exact top-line estimate than the trajectory: from a marginal format in the early 2020s to a category commanding mainstream studio attention by 2025.",
      },
      {
        heading: "Why 2025 Was a Breakout Year",
        body:
          "Several structural forces aligned in 2025. Short drama apps had learned how to convert social-video habits into paid entertainment behavior, especially through cliffhanger-heavy narratives and frictionless unlock systems. At the same time, publishers refined localization: they moved beyond simply dubbing Chinese-origin stories and began producing English-language, Southeast Asian, and Latin American variants tailored to local tastes. That lifted both retention and willingness to spend.\n\nSensor Tower's 2025 commentary also showed that category concentration remained high at the top, with ReelShort and DramaBox leading revenue, but the market was broadening underneath them. A growing number of apps could buy traffic efficiently, test creatives rapidly, and recycle proven plot structures into new genres. That combination of repeatable storytelling formats and app-store distribution gave the category unusual scalability for an entertainment business.",
      },
      {
        heading: "Implications for the Competitive Landscape",
        body:
          "The 2025 market size story was ultimately a story about industrialization. Short drama stopped looking like a collection of viral hits and started looking like an operating model: fast production, high-volume testing, aggressive paid acquisition, and lifetime value optimization. That favored companies with cross-border production networks, strong analytics, and the ability to release at pace without collapsing quality.\n\nThe result was a market in which incumbents had meaningful advantages but new entrants still had room if they specialized. Companies focused on romance, revenge, family melodrama, and localized premium fiction could still find distribution because demand was expanding faster than any one catalog could satisfy it. In that sense, 2025 was the year the market proved both its scale and its depth.",
      },
    ],
  },
  "china-overseas-revenue-2024": {
    sections: [
      {
        heading: "The $4.3 Billion Overseas Breakthrough",
        body:
          "Chinese media and market reporting in 2025 put overseas revenue from China's short drama industry at about $4.3 billion for 2024. That number became one of the clearest markers of the sector's international expansion. It reflected not only revenue from consumer-facing apps abroad, but also the growing export capacity of Chinese studios, production teams, and story frameworks that had already been proven domestically before being adapted for foreign audiences.\n\nThe significance of the $4.3 billion figure is that it reframed 'going overseas' from an experimental strategy into a central growth engine. Chinese companies had already built the production muscle memory for high-volume, low-turnaround serialized storytelling. Once those capabilities were paired with overseas ad buying and localization, they produced a business that could scale rapidly outside the mainland market.",
      },
      {
        heading: "How Chinese Publishers Won Abroad",
        body:
          "The overseas playbook relied on three advantages. First, Chinese studios had deep experience producing micro-dramas at industrial speed, giving them a cost and iteration advantage over Western teams still learning the format. Second, they understood the pacing mechanics that convert viewers into payers: immediate stakes, frequent reversals, and aggressive episode gating. Third, they treated distribution scientifically, testing large numbers of ad creatives across Meta, TikTok, and other channels until unit economics worked.\n\nApps like ReelShort and DramaBox became the most visible expressions of that model in English-speaking markets, but the deeper story was the ecosystem behind them. Script adaptation, post-production, casting workflows, and performance marketing were increasingly coordinated across borders. That let publishers bring Chinese-origin story DNA into overseas markets while still packaging content in a way that felt native enough for local audiences.",
      },
      {
        heading: "What the Chuhai Wave Means Next",
        body:
          "The 2024 overseas revenue milestone showed that Chinese companies were exporting not just content but operational know-how. By 2025, their challenge was no longer proving demand existed abroad; it was defending margin as competition intensified and customer acquisition costs rose. The publishers that sustained growth were the ones investing in local production, stronger brand identities, and catalog depth rather than relying only on translated imports.\n\nFor the broader media market, China's $4.3 billion overseas result demonstrated that micro-drama had become one of the most successful recent examples of Chinese digital entertainment globalization. It also suggested that the next phase of competition would be less about first-mover advantage and more about who could blend Chinese production efficiency with genuinely local creative execution.",
      },
    ],
  },
  "user-acquisition-cost-benchmarks": {
    sections: [
      {
        heading: "The CPI Range That Defined 2025",
        body:
          "A practical benchmark used across the short drama sector in 2025 was a roughly $0.40 to $0.80 cost per install for scaled performance campaigns, especially when publishers were buying broad reach on Meta, TikTok, and Google inventory. Actual costs moved by market, creative quality, and campaign objective, but this band captured the level at which many publishers could still acquire enough users to feed monetization funnels without destroying payback periods.\n\nThe reason CPI mattered so much in short drama was that the format depends on heavy top-of-funnel replenishment. These apps can monetize power users very well, but they also face significant churn because viewers often arrive through a single plot hook or ad concept. That makes acquisition efficiency inseparable from content strategy: the best-performing apps were usually the ones able to launch new creatives as quickly as they launched new episodes.",
      },
      {
        heading: "Platform Differences Across Meta, TikTok, and Google",
        body:
          "Meta remained central because it offered mature conversion optimization and a wide audience base for serialized romance, revenge, and family-drama creatives. TikTok was especially effective at seeding demand through hook-heavy video concepts that resembled native feed content, though campaign volatility could be higher as creative fatigue set in. Google helped capture intent and broader app-discovery traffic, often complementing social channels rather than replacing them.\n\nIn practice, the most sophisticated publishers did not treat these channels as interchangeable. They built creative systems around each one. TikTok creative often emphasized the most shocking turning point in the first seconds, while Meta ads leaned harder into relationship conflict and cliffhanger copy. The benchmark CPI range only held when channel strategy, content packaging, and landing flow were aligned.",
      },
      {
        heading: "Why Benchmarks Alone Are Not Enough",
        body:
          "The headline CPI range is useful, but it can be misleading without revenue context. Sensor Tower's 2025 market data showed how quickly category revenue was scaling, yet that revenue was concentrated among apps that converted acquired users into repeat spenders. A cheap install is not valuable if the user never reaches the first paid unlock or abandons after one storyline. The strongest operators measured cost against downstream behavior such as tutorial completion, first purchase conversion, and seven-day payback.\n\nThat is why the category's top publishers kept reinvesting in narrative testing, paywall pacing, and store-page optimization rather than looking at acquisition as a separate function. In short drama, efficient growth comes from making the ad promise and the in-app story experience feel like one continuous funnel. The 2025 benchmark of $0.40 to $0.80 CPI is best understood as the entry ticket to compete, not the full formula for profitable scale.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return REPORTS.map((report) => ({
    slug: report.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const report = REPORTS.find((item) => item.slug === slug);

  if (!report) {
    notFound();
  }

  const canonical = `/industry/market-reports/${report.slug}`;

  return {
    title: `${report.title} — NovelaFlash`,
    description: report.summary,
    alternates: { canonical },
    openGraph: {
      title: `${report.title} — NovelaFlash`,
      description: report.summary,
      url: canonical,
      type: "article",
    },
  };
}

export default async function MarketReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = REPORTS.find((item) => item.slug === slug);
  const content = REPORT_CONTENT[slug];

  if (!report || !content) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <Nav />

      <main className="flex-grow">
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 via-transparent to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-600/5 blur-[120px] rounded-full" />

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <ScrollReveal direction="up">
              <Link
                href="/industry/market-reports"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-rp-text-secondary hover:text-white transition-colors mb-8"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Market Reports
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="badge badge-coral">Report</div>
                <div className="badge badge-violet">{report.stat}</div>
              </div>

              <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tight text-white mb-8 leading-tight">
                {report.title}
              </h1>

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-8">
                <p className="text-white font-bold text-sm uppercase tracking-[0.2em]">
                  {report.date}
                </p>
                <p className="text-rp-text-secondary text-base md:text-lg max-w-3xl leading-relaxed">
                  {report.summary}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-16">
          {content.sections.map((section, index) => (
            <ScrollReveal key={section.heading} direction="up" delay={index * 0.1}>
              <div className="mb-16">
                <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tight text-white mb-6">
                  {section.heading}
                </h2>
                <div className="prose prose-invert max-w-none">
                  {section.body.split("\n\n").map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-rp-text-secondary leading-relaxed mb-6 text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
