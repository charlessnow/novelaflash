import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, GUIDE_STRUCTURED_DATA, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Best Werewolf Short Dramas 2026: Top 10 Ranked — NovelaFlash",
  description: "Discover the best werewolf short drama series in 2026. Rankings of popular Lycan, Alpha, and Fated Mate dramas on ReelShort and DramaBox.",
  openGraph: {
    images: [{ url: "/images/guides/werewolf-dramas-og.jpg" }],
  },
};

export default function WerewolfDramasPage() {
  const guidePath = "/guides/best-werewolf-short-dramas";
  const dramas = [
    { rank: 1, title: "The Alpha's Possession", platform: "ReelShort", rating: 9.6 },
    { rank: 2, title: "Fated to the Lycan King", platform: "DramaBox", rating: 9.4 },
    { rank: 3, title: "My Alpha Mate", platform: "ShortMax", rating: 9.1 },
    { rank: 4, title: "The Rejected Luna", platform: "ReelShort", rating: 8.9 }
  ];

  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Guides", item: `${SITE_URL}/guides` },
    { name: "Best Werewolf Dramas", item: `${SITE_URL}${guidePath}` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={GUIDE_STRUCTURED_DATA["best-werewolf-short-dramas"].data} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="badge badge-pink mb-6 px-4 py-1.5 text-xs">Genre Ranking</div>
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6">
              Best <span className="text-rp-pink">Werewolf</span> Dramas
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-3xl">
              From Alphas to Rejected Lunas, explore the top-ranked werewolf short dramas that are taking the world by storm in 2026.
            </p>
          </ScrollReveal>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dramas.map((drama, i) => (
              <ScrollReveal key={drama.title} direction="up" delay={i * 0.1}>
                <div className="card p-8 border-white/10 hover:border-rp-pink/30 transition-all bg-gradient-to-br from-rp-pink/5 to-transparent">
                  <div className="text-rp-pink font-display font-black text-4xl mb-4">#{drama.rank}</div>
                  <h3 className="text-white text-xl font-bold mb-2">{drama.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="badge badge-pink text-[10px]">{drama.platform}</span>
                    <span className="text-rp-text-secondary font-bold">{drama.rating}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-32">
          <NewsletterCTA />
        </section>
      </main>

      <Footer />
    </div>
  );
}
