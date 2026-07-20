import type { MetadataRoute } from "next";
import { featuredArticle, latestArticles, platforms, trendingArticles } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://novelaflash.com";
  const siteUpdatedAt = new Date("2026-07-08T00:00:00.000Z");
  const marketReportSlugs = [
    "ingresos-q1-2026",
    "tamano-mercado-global-2025",
    "ingresos-exterior-china-2024",
    "costo-adquisicion-usuarios",
  ];
  const guideSlugs = [
    "cancelar-reelshort",
    "precios-reelshort",
    "monedas-reelshort",
    "cancelar-dramabox",
    "precios-dramabox",
    "monedas-dramabox",
    "mejores-series-reelshort",
    "mejores-series-dramabox",
    "mejores-miniseries-chinas",
    "miniseries-coreanas",
    "actores-miniseries-chinas",
    "apps-miniseries-gratis",
    "mejores-apps-miniseries-bl",
    "alternativas-dramabox",
    "ver-miniseries-gratis",
    "es-seguro-dramabox",
    "es-seguro-reelshort",
    "es-seguro-shortmax",
    "ingresos-mercado-miniseries-2026",
    "mejores-miniseries-hombres-lobo",
    "precios-shortmax",
    "ver-miniseries-bl-gratis",
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
