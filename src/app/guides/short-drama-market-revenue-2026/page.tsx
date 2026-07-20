import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, GUIDE_STRUCTURED_DATA, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Short Drama Market Revenue 2026: Q1 Data & Platform Rankings — ReelPulse",
  description: "Explore the 2026 short drama market revenue data. Platform rankings, quarterly growth, and financial analysis of ReelShort, DramaBox, and ShortMax.",
  openGraph: {
    images: [{ url: "/images/guides/market-revenue-2026-og.jpg" }],
  },
};

export default function MarketRevenuePage() {
  const guidePath = "/guides/short-drama-market-revenue-2026";
  const platformRevenue = [
    { name: "ReelShort", q1Revenue: "$80M", growth: "+40%", marketShare: "35%" },
    { name: "DramaBox", q1Revenue: "$35M", growth: "+25%", marketShare: "15%" },
    { name: "ShortMax", q1Revenue: "$22M", growth: "+18%", marketShare: "10%" },
    { name: "FlexTV", q1Revenue: "$8M", growth: "+12%", marketShare: "4%" }
  ];

  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Guides", item: `${SITE_URL}/guides` },
    { name: "Market Revenue 2026", item: `${SITE_URL}${guidePath}` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={GUIDE_STRUCTURED_DATA["short-drama-market-revenue-2026"].data} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="badge badge-cyan mb-6 px-4 py-1.5 text-xs">Financial Report Q1 2026</div>
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6">
              Market <span className="text-rp-cyan">Revenue</span> Data
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-3xl">
              A deep dive into the financial performance of the global short drama industry in 2026. Data-driven insights for investors and creators.
            </p>
          </ScrollReveal>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <div className="glass overflow-hidden rounded-2xl border-white/10">
              <table className="w-full text-left border-collapse">
                <thead className="bg-white/5">
                  <tr>
                    <th className="p-6 text-white font-bold uppercase tracking-wider text-sm">Platform</th>
                    <th className="p-6 text-white font-bold uppercase tracking-wider text-sm">Q1 2026 Revenue</th>
                    <th className="p-6 text-white font-bold uppercase tracking-wider text-sm">QoQ Growth</th>
                    <th className="p-6 text-white font-bold uppercase tracking-wider text-sm">Est. Market Share</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {platformRevenue.map((p) => (
                    <tr key={p.name} className="hover:bg-white/5 transition-colors">
                      <td className="p-6 text-white font-bold">{p.name}</td>
                      <td className="p-6 text-rp-cyan font-display font-black text-2xl">{p.q1Revenue}</td>
                      <td className="p-6 text-rp-green font-bold">{p.growth}</td>
                      <td className="p-6 text-rp-text-secondary">{p.marketShare}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-32">
          <NewsletterCTA />
        </section>
      </main>

      <Footer />
    </div>
  );
}
