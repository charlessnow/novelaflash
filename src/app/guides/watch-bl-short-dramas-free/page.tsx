import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, GUIDE_STRUCTURED_DATA, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Watch BL Short Dramas Free 2026: Best Apps & Methods — NovelaFlash",
  description: "Learn how to watch BL short dramas for free in 2026. Discover the best free BL drama apps, official YouTube channels, and tips to unlock premium episodes.",
  openGraph: {
    images: [{ url: "/images/guides/watch-bl-free-og.jpg" }],
  },
};

export default function WatchBLFreePage() {
  const guidePath = "/guides/watch-bl-short-dramas-free";
  const methods = [
    { title: "MoboReels Daily Rewards", description: "MoboReels has the most generous free tier for BL content. Log in daily to collect enough coins for 3-5 episodes." },
    { title: "Official YouTube Channels", description: "Production houses like GMMTV (Thailand) often upload full BL series for free on YouTube with multi-language subtitles." },
    { title: "ReelShort Ad-Supported Viewing", description: "Use the 'Watch Ads' feature on ReelShort to unlock premium BL episodes without spending coins." },
    { title: "DramaBox Seasonal Events", description: "Keep an eye on DramaBox's 'Free Episode' events which often feature trending BL titles." }
  ];

  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Guides", item: `${SITE_URL}/guides` },
    { name: "Watch BL Free", item: `${SITE_URL}${guidePath}` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={GUIDE_STRUCTURED_DATA["watch-bl-short-dramas-free"].data} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="badge badge-coral mb-6 px-4 py-1.5 text-xs">Viewing Guide</div>
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6">
              Watch <span className="text-rp-coral">Free</span> BL Dramas
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-3xl">
              Don&apos;t spend a fortune on coins. Learn the best legal methods to watch the most popular BL short dramas for free in 2026.
            </p>
          </ScrollReveal>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methods.map((method, i) => (
              <ScrollReveal key={method.title} direction="up" delay={i * 0.1}>
                <div className="card p-8 border-white/10 hover:border-rp-coral/30 transition-all">
                  <h3 className="text-white text-2xl font-bold mb-4">{method.title}</h3>
                  <p className="text-rp-text-secondary leading-relaxed">{method.description}</p>
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
