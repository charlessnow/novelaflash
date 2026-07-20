import type { MetadataRoute } from "next";
import { featuredArticle, latestArticles, platforms, trendingArticles } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://novelaflash.com";
  const siteUpdatedAt = new Date("2026-07-08T00:00:00.000Z");
  const marketReportSlugs = [
    "q1-2026-revenue",
    "global-market-size-2025",
    "china-overseas-revenue-2024",
    "user-acquisition-cost-benchmarks",
  ];
  const guideSlugs = [
    "cancel-reelshort",
    "reelshort-pricing",
    "reelshort-coins",
    "cancel-dramabox",
    "dramabox-pricing",
    "dramabox-coins",
    "best-reelshort-shows",
    "best-dramabox-shows",
    "best-chinese-short-dramas",
    "short-korean-dramas",
    "chinese-short-drama-actors",
    "free-short-drama-apps",
    "best-bl-short-drama-apps",
    "dramabox-alternatives",
    "watch-short-dramas-free",
    "is-dramabox-safe",
    "is-reelshort-safe",
    "is-shortmax-safe",
    "short-drama-market-revenue-2026",
    "best-werewolf-short-dramas",
    "shortmax-pricing",
    "watch-bl-short-dramas-free",
  ];

  const platformPages = platforms.map((p) => ({
    url: `${baseUrl}/platforms/${p.slug}`,
    lastModified: siteUpdatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articlePages = Array.from(
    new Set([featuredArticle, ...trendingArticles, ...latestArticles].map((article) => article.slug)),
  ).map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: siteUpdatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: baseUrl, lastModified: siteUpdatedAt, changeFrequency: "daily", priority: 1.0 },

    { url: `${baseUrl}/platforms`, lastModified: siteUpdatedAt, changeFrequency: "weekly", priority: 0.8 },
    ...platformPages,

    { url: `${baseUrl}/rankings`, lastModified: siteUpdatedAt, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/rankings/top-100`, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/rankings/revenue`, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/rankings/studios`, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/rankings/growth`, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.6 },

    { url: `${baseUrl}/industry`, lastModified: siteUpdatedAt, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/industry/market-reports`, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.6 },
    ...marketReportSlugs.map((slug) => ({ url: `${baseUrl}/industry/market-reports/${slug}`, lastModified: siteUpdatedAt, changeFrequency: "monthly" as const, priority: 0.6 })),
    { url: `${baseUrl}/industry/tech-ai`, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/industry/global-markets`, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/industry/creator-economy`, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.6 },

    { url: `${baseUrl}/guides`, lastModified: siteUpdatedAt, changeFrequency: "weekly", priority: 0.8 },
    ...guideSlugs.map((slug) => ({ url: `${baseUrl}/guides/${slug}`, lastModified: siteUpdatedAt, changeFrequency: "monthly" as const, priority: 0.7 })),

    { url: `${baseUrl}/articles`, lastModified: siteUpdatedAt, changeFrequency: "weekly", priority: 0.8 },
    ...articlePages,

    { url: `${baseUrl}/about`, lastModified: siteUpdatedAt, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/newsletter`, lastModified: siteUpdatedAt, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/contact`, lastModified: siteUpdatedAt, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified: siteUpdatedAt, changeFrequency: "yearly", priority: 0.1 },
  ];
}
