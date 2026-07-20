import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, GUIDE_STRUCTURED_DATA, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "10 Best Free Short Drama Apps 2026 — ReelPulse",
  description: "Discover the 10 best free short drama apps in 2026. Compare MoboReels, DramaBox, ReelShort, and more with detailed reviews of free tier features.",
};

export default function FreeShortDramaAppsPage() {
  const guidePath = "/guides/free-short-drama-apps";
  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Guides", item: `${SITE_URL}/guides` },
    { name: GUIDE_STRUCTURED_DATA["free-short-drama-apps"].title, item: `${SITE_URL}${guidePath}` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={GUIDE_STRUCTURED_DATA["free-short-drama-apps"].data} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="badge badge-coral mb-6 px-4 py-1.5 text-xs">Free Apps Guide</div>
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6 leading-[1.1]">
              Best Free Short Drama Apps
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-3xl leading-relaxed">
              Explore the 10 best free short drama apps in 2026. Compare free tier features, content libraries, and limitations to find your perfect platform.
            </p>
          </ScrollReveal>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <div className="prose prose-invert max-w-none">
              {/* Introduction */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Free Short Drama Apps Ranked
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  Not all free tiers are created equal. Some apps offer unlimited daily episodes with ads, while others limit you to 2-3 episodes per day. This guide ranks the 10 best free short drama apps based on free tier generosity, content quality, and user experience.
                </p>
              </div>

              {/* Top 10 Apps */}
              <div className="mb-16">
                <div className="space-y-8">
                  {/* #1 MoboReels */}
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-2">#1 MoboReels</h3>
                        <p className="text-rp-coral text-sm font-semibold">⭐ 4.7/5 (Best Free Tier)</p>
                      </div>
                    </div>
                    <p className="text-rp-text-secondary mb-6">MoboReels offers the most generous free tier with unlimited daily episodes. Perfect for viewers who want maximum free content without restrictions.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Free Tier Features:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Unlimited daily episodes</li>
                          <li>• Ad-supported viewing</li>
                          <li>• Access to 250+ series</li>
                          <li>• Daily login rewards</li>
                          <li>• Watch ads for coins</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Limitations:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Ads between episodes</li>
                          <li>• Standard video quality</li>
                          <li>• Limited early access to new episodes</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Free Episodes/Day</p>
                        <p className="text-white font-semibold">Unlimited</p>
                      </div>
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Rating</p>
                        <p className="text-white font-semibold">4.7/5</p>
                      </div>
                    </div>
                  </div>

                  {/* #2 DramaBox */}
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-2">#2 DramaBox</h3>
                        <p className="text-rp-coral text-sm font-semibold">⭐ 4.6/5 (Best Content Variety)</p>
                      </div>
                    </div>
                    <p className="text-rp-text-secondary mb-6">DramaBox combines a solid free tier with diverse content. Great for viewers seeking variety in Chinese, Thai, and Korean dramas.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Free Tier Features:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• 3-5 free episodes daily</li>
                          <li>• 180+ series available</li>
                          <li>• Daily login rewards</li>
                          <li>• Spin-the-wheel bonuses</li>
                          <li>• Referral rewards</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Limitations:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Daily episode limit</li>
                          <li>• Ads on free tier</li>
                          <li>• Delayed new episode access</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Free Episodes/Day</p>
                        <p className="text-white font-semibold">3-5</p>
                      </div>
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Rating</p>
                        <p className="text-white font-semibold">4.6/5</p>
                      </div>
                    </div>
                  </div>

                  {/* #3 ReelShort */}
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-2">#3 ReelShort</h3>
                        <p className="text-rp-coral text-sm font-semibold">⭐ 4.5/5 (Largest Library)</p>
                      </div>
                    </div>
                    <p className="text-rp-text-secondary mb-6">ReelShort has the largest content library with 500+ series. Free tier is decent, though more limited than MoboReels.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Free Tier Features:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• 2-5 free episodes daily</li>
                          <li>• 500+ series available</li>
                          <li>• Daily login rewards</li>
                          <li>• Watch ads for coins</li>
                          <li>• Community features</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Limitations:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Limited daily episodes</li>
                          <li>• Intrusive ads</li>
                          <li>• Premium required for unlimited</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Free Episodes/Day</p>
                        <p className="text-white font-semibold">2-5</p>
                      </div>
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Rating</p>
                        <p className="text-white font-semibold">4.5/5</p>
                      </div>
                    </div>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-2">#4 ShortMax</h3>
                        <p className="text-rp-coral text-sm font-semibold">⭐ 4.4/5 (Best UI)</p>
                      </div>
                    </div>
                    <p className="text-rp-text-secondary mb-6">ShortMax offers a massive short drama catalog, strong personalization, and a competitive free tier for high-volume viewers.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Free Tier Features:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• 4-6 free episodes daily</li>
                          <li>• 500+ series</li>
                          <li>• Strong recommendation engine</li>
                          <li>• Frequent promotions and rewards</li>
                          <li>• Multi-language support</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Limitations:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Daily episode limit</li>
                          <li>• Ads present</li>
                          <li>• Some content quality inconsistency</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Free Episodes/Day</p>
                        <p className="text-white font-semibold">4-6</p>
                      </div>
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Rating</p>
                        <p className="text-white font-semibold">4.4/5</p>
                      </div>
                    </div>
                  </div>

                  {/* #5 FlexTV */}
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-2">#5 FlexTV</h3>
                        <p className="text-rp-coral text-sm font-semibold">⭐ 4.3/5 (Premium Quality)</p>
                      </div>
                    </div>
                    <p className="text-rp-text-secondary mb-6">FlexTV prioritizes quality with curated content. Free tier is limited but high-quality.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Free Tier Features:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• 2-3 free episodes daily</li>
                          <li>• 200+ curated series</li>
                          <li>• HD video quality</li>
                          <li>• Minimal ads</li>
                          <li>• Exclusive originals</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Limitations:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Very limited daily episodes</li>
                          <li>• Smallest library</li>
                          <li>• Premium-focused</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Free Episodes/Day</p>
                        <p className="text-white font-semibold">2-3</p>
                      </div>
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Rating</p>
                        <p className="text-white font-semibold">4.3/5</p>
                      </div>
                    </div>
                  </div>

                  {/* #6 GoodShort */}
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-2">#6 GoodShort</h3>
                        <p className="text-rp-coral text-sm font-semibold">⭐ 4.2/5 (Budget-Friendly)</p>
                      </div>
                    </div>
                    <p className="text-rp-text-secondary mb-6">GoodShort offers unlimited daily episodes with ads. Great for budget-conscious viewers.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Free Tier Features:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Unlimited daily episodes</li>
                          <li>• 280+ series</li>
                          <li>• Ad-supported</li>
                          <li>• Daily rewards</li>
                          <li>• Affordable premium option</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Limitations:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Heavy ad presence</li>
                          <li>• Standard quality</li>
                          <li>• Smaller library</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Free Episodes/Day</p>
                        <p className="text-white font-semibold">Unlimited</p>
                      </div>
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Rating</p>
                        <p className="text-white font-semibold">4.2/5</p>
                      </div>
                    </div>
                  </div>

                  {/* #7 FlickReels */}
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-2">#7 FlickReels</h3>
                        <p className="text-rp-coral text-sm font-semibold">⭐ 4.1/5 (Smooth Experience)</p>
                      </div>
                    </div>
                    <p className="text-rp-text-secondary mb-6">FlickReels delivers smooth performance with a modern interface. Decent free tier with good personalization.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Free Tier Features:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• 3-5 free episodes daily</li>
                          <li>• 220+ series</li>
                          <li>• Excellent UI/UX</li>
                          <li>• Personalization features</li>
                          <li>• Regular updates</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Limitations:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Daily episode limit</li>
                          <li>• Ads on free tier</li>
                          <li>• Premium required for unlimited</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Free Episodes/Day</p>
                        <p className="text-white font-semibold">3-5</p>
                      </div>
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Rating</p>
                        <p className="text-white font-semibold">4.1/5</p>
                      </div>
                    </div>
                  </div>

                  {/* #8 ShortMax */}
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-2">#8 ShortMax</h3>
                        <p className="text-rp-coral text-sm font-semibold">⭐ 4.0/5 (Niche Content)</p>
                      </div>
                    </div>
                    <p className="text-rp-text-secondary mb-6">ShortMax focuses on niche and independent content. Good free tier for explorers.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Free Tier Features:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• 4-5 free episodes daily</li>
                          <li>• 180+ unique series</li>
                          <li>• Independent productions</li>
                          <li>• Community-driven</li>
                          <li>• Affordable pricing</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Limitations:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Smaller user base</li>
                          <li>• Variable quality</li>
                          <li>• Less frequent updates</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Free Episodes/Day</p>
                        <p className="text-white font-semibold">4-5</p>
                      </div>
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Rating</p>
                        <p className="text-white font-semibold">4.0/5</p>
                      </div>
                    </div>
                  </div>

                  {/* #9 MeloShort */}
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-2">#9 MeloShort</h3>
                        <p className="text-rp-coral text-sm font-semibold">⭐ 3.9/5 (Romance Focus)</p>
                      </div>
                    </div>
                    <p className="text-rp-text-secondary mb-6">MeloShort specializes in romance and melodrama. Good free tier for romance fans.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Free Tier Features:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• 3-4 free episodes daily</li>
                          <li>• 210+ romance series</li>
                          <li>• Emotional storytelling</li>
                          <li>• Active community</li>
                          <li>• Daily rewards</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Limitations:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Limited genre diversity</li>
                          <li>• Slower app performance</li>
                          <li>• Daily episode limit</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Free Episodes/Day</p>
                        <p className="text-white font-semibold">3-4</p>
                      </div>
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Rating</p>
                        <p className="text-white font-semibold">3.9/5</p>
                      </div>
                    </div>
                  </div>

                  {/* #10 Dailymotion */}
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-2">#10 Dailymotion</h3>
                        <p className="text-rp-coral text-sm font-semibold">⭐ 3.8/5 (Unlimited Content)</p>
                      </div>
                    </div>
                    <p className="text-rp-text-secondary mb-6">Dailymotion hosts thousands of short drama episodes. Unlimited free content but requires searching.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Free Tier Features:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Unlimited episodes</li>
                          <li>• 1000+ series available</li>
                          <li>• No daily limits</li>
                          <li>• Diverse content</li>
                          <li>• No account required</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Limitations:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Requires manual searching</li>
                          <li>• Variable video quality</li>
                          <li>• Ads present</li>
                          <li>• Less curated experience</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Free Episodes/Day</p>
                        <p className="text-white font-semibold">Unlimited</p>
                      </div>
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Rating</p>
                        <p className="text-white font-semibold">3.8/5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparison Summary */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Free Tier Comparison Summary
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-rp-border">
                        <th className="text-left py-4 px-4 text-white font-bold">App</th>
                        <th className="text-left py-4 px-4 text-white font-bold">Episodes/Day</th>
                        <th className="text-left py-4 px-4 text-white font-bold">Series Count</th>
                        <th className="text-left py-4 px-4 text-white font-bold">Ads?</th>
                        <th className="text-left py-4 px-4 text-white font-bold">Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">MoboReels</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Unlimited</td>
                        <td className="py-4 px-4 text-rp-text-secondary">250+</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Yes</td>
                        <td className="py-4 px-4 text-rp-coral font-semibold">4.7/5</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">DramaBox</td>
                        <td className="py-4 px-4 text-rp-text-secondary">3-5</td>
                        <td className="py-4 px-4 text-rp-text-secondary">180+</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Yes</td>
                        <td className="py-4 px-4 text-rp-coral font-semibold">4.6/5</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">ReelShort</td>
                        <td className="py-4 px-4 text-rp-text-secondary">2-5</td>
                        <td className="py-4 px-4 text-rp-text-secondary">500+</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Yes</td>
                        <td className="py-4 px-4 text-rp-coral font-semibold">4.5/5</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">ShortMax</td>
                        <td className="py-4 px-4 text-rp-text-secondary">4-6</td>
                        <td className="py-4 px-4 text-rp-text-secondary">500+</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Yes</td>
                        <td className="py-4 px-4 text-rp-coral font-semibold">4.4/5</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">FlexTV</td>
                        <td className="py-4 px-4 text-rp-text-secondary">2-3</td>
                        <td className="py-4 px-4 text-rp-text-secondary">200+</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Minimal</td>
                        <td className="py-4 px-4 text-rp-coral font-semibold">4.3/5</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">GoodShort</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Unlimited</td>
                        <td className="py-4 px-4 text-rp-text-secondary">280+</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Yes</td>
                        <td className="py-4 px-4 text-rp-coral font-semibold">4.2/5</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">FlickReels</td>
                        <td className="py-4 px-4 text-rp-text-secondary">3-5</td>
                        <td className="py-4 px-4 text-rp-text-secondary">220+</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Yes</td>
                        <td className="py-4 px-4 text-rp-coral font-semibold">4.1/5</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">ShortMax</td>
                        <td className="py-4 px-4 text-rp-text-secondary">4-5</td>
                        <td className="py-4 px-4 text-rp-text-secondary">180+</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Yes</td>
                        <td className="py-4 px-4 text-rp-coral font-semibold">4.0/5</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">MeloShort</td>
                        <td className="py-4 px-4 text-rp-text-secondary">3-4</td>
                        <td className="py-4 px-4 text-rp-text-secondary">210+</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Yes</td>
                        <td className="py-4 px-4 text-rp-coral font-semibold">3.9/5</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-white font-semibold">Dailymotion</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Unlimited</td>
                        <td className="py-4 px-4 text-rp-text-secondary">1000+</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Yes</td>
                        <td className="py-4 px-4 text-rp-coral font-semibold">3.8/5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FAQ */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">Which app has the best free tier?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      MoboReels offers unlimited daily episodes on its free tier, making it the best for maximum free viewing. If you want the largest library, ReelShort is superior despite having daily limits.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">Can I watch without ads?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      Free tiers include ads. To watch ad-free, you need a premium subscription. FlexTV has minimal ads on its free tier, but still includes some advertising.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">Do I need to pay for any of these apps?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      No, all 10 apps offer free tiers with no payment required. Premium subscriptions are optional for unlimited viewing and ad-free experience.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">Which app is best for beginners?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      MoboReels or ReelShort are best for beginners. Both have intuitive interfaces, generous free tiers, and large content libraries to explore.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="glass p-12 rounded-2xl border-white/10 bg-gradient-to-br from-rp-coral/5 to-transparent">
                <h3 className="text-white font-bold text-2xl mb-4">Start Watching Free Today</h3>
                <p className="text-rp-text-secondary leading-relaxed mb-6">
                  With 10 excellent free short drama apps available, you have no reason to pay for content. Start with MoboReels for unlimited free episodes or ReelShort for the largest library. Download today and discover your next favorite series!
                </p>
                <p className="text-rp-text-secondary text-sm">
                  Pro tip: Use multiple apps to maximize your daily free episodes and access diverse content libraries.
                </p>
              </div>
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
