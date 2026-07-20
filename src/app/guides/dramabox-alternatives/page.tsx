import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, GUIDE_STRUCTURED_DATA, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Apps Like DramaBox: 8 Best Alternatives 2026 — ReelPulse",
  description: "Looking for apps like DramaBox? Here are the 8 best apps like DramaBox in 2026. Compare ReelShort, ShortMax, FlexTV, MoboReels, and more with detailed reviews and ratings.",
};

export default function DramaBoxAlternativesPage() {
  const guidePath = "/guides/dramabox-alternatives";
  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Guides", item: `${SITE_URL}/guides` },
    { name: GUIDE_STRUCTURED_DATA["dramabox-alternatives"].title, item: `${SITE_URL}${guidePath}` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={GUIDE_STRUCTURED_DATA["dramabox-alternatives"].data} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="badge badge-coral mb-6 px-4 py-1.5 text-xs">App Alternatives</div>
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6 leading-[1.1]">
              Apps Like DramaBox
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-3xl leading-relaxed">
              Explore the 8 best alternatives to DramaBox in 2026. Compare features, pricing, content libraries, and user ratings to find your perfect short drama platform.
            </p>
          </ScrollReveal>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <div className="prose prose-invert max-w-none">
              {/* Intro */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Why Look for DramaBox Alternatives?
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  While DramaBox is a popular short drama platform, exploring alternatives helps you find the best fit for your viewing preferences. Different apps offer unique content libraries, pricing models, user interfaces, and features. Whether you're seeking more free content, better video quality, or specific genres, these alternatives provide excellent options.
                </p>
              </div>

              {/* Top 8 Alternatives */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  8 Best DramaBox Alternatives Ranked
                </h2>
                
                <div className="space-y-8">
                  {/* #1 ReelShort */}
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-2">#1 ReelShort</h3>
                        <p className="text-rp-coral text-sm font-semibold">⭐ 4.8/5 (Best Overall)</p>
                      </div>
                    </div>
                    <p className="text-rp-text-secondary mb-6">ReelShort is the leading short drama platform with the largest content library and most active user base. It offers daily updates, exclusive series, and a user-friendly interface optimized for mobile viewing.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Pros:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Largest content library (500+ series)</li>
                          <li>• Daily episode updates</li>
                          <li>• Generous free tier with daily episodes</li>
                          <li>• Excellent recommendation algorithm</li>
                          <li>• Active community features</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Cons:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Ads on free tier can be intrusive</li>
                          <li>• Premium subscription required for unlimited viewing</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Pricing</p>
                        <p className="text-white font-semibold">Free + Premium</p>
                      </div>
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Content Count</p>
                        <p className="text-white font-semibold">500+ Series</p>
                      </div>
                    </div>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-2">#2 ShortMax</h3>
                        <p className="text-rp-coral text-sm font-semibold">⭐ 4.6/5 (Best for Variety)</p>
                      </div>
                    </div>
                    <p className="text-rp-text-secondary mb-6">ShortMax is a massive short drama platform with 50M+ downloads, a huge romance-heavy catalog, and competitive pricing that makes it one of the strongest DramaBox alternatives.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Pros:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Massive content library with daily releases</li>
                          <li>• Competitive pricing and frequent promotions</li>
                          <li>• Strong recommendation algorithm</li>
                          <li>• Huge global user base</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Cons:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Interface could feel more polished</li>
                          <li>• Some quality inconsistency across titles</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Pricing</p>
                        <p className="text-white font-semibold">Free + Premium</p>
                      </div>
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Content Count</p>
                        <p className="text-white font-semibold">500+ Series</p>
                      </div>
                    </div>
                  </div>

                  {/* #3 FlexTV */}
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-2">#3 FlexTV</h3>
                        <p className="text-rp-coral text-sm font-semibold">⭐ 4.5/5 (Best for Quality)</p>
                      </div>
                    </div>
                    <p className="text-rp-text-secondary mb-6">FlexTV prioritizes high-quality production with carefully curated content. It's ideal for viewers who prefer quality over quantity and don't mind paying for premium content.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Pros:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Premium video quality (HD/4K)</li>
                          <li>• Curated content selection</li>
                          <li>• Minimal ads on free tier</li>
                          <li>• Exclusive original series</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Cons:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Higher subscription cost</li>
                          <li>• Smaller content library</li>
                          <li>• Limited free content</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Pricing</p>
                        <p className="text-white font-semibold">Premium Only</p>
                      </div>
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Content Count</p>
                        <p className="text-white font-semibold">200+ Series</p>
                      </div>
                    </div>
                  </div>

                  {/* #4 MoboReels */}
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-2">#4 MoboReels</h3>
                        <p className="text-rp-coral text-sm font-semibold">⭐ 4.4/5 (Best for Korean Content)</p>
                      </div>
                    </div>
                    <p className="text-rp-text-secondary mb-6">MoboReels specializes in Korean short dramas with a focus on quality storytelling. Perfect for fans of Korean content seeking authentic productions.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Pros:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Extensive Korean drama library</li>
                          <li>• High production quality</li>
                          <li>• Good free tier</li>
                          <li>• Affordable premium</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Cons:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Limited non-Korean content</li>
                          <li>• Slower update schedule</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Pricing</p>
                        <p className="text-white font-semibold">Free + Premium</p>
                      </div>
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Content Count</p>
                        <p className="text-white font-semibold">250+ Series</p>
                      </div>
                    </div>
                  </div>

                  {/* #5 GoodShort */}
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-2">#5 GoodShort</h3>
                        <p className="text-rp-coral text-sm font-semibold">⭐ 4.3/5 (Best for Free Content)</p>
                      </div>
                    </div>
                    <p className="text-rp-text-secondary mb-6">GoodShort offers the most generous free tier with unlimited daily episodes. Ideal for budget-conscious viewers who don't mind ads.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Pros:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Most generous free tier</li>
                          <li>• Unlimited daily episodes</li>
                          <li>• Good content variety</li>
                          <li>• Affordable premium option</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Cons:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Heavy ad presence</li>
                          <li>• Smaller library than competitors</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Pricing</p>
                        <p className="text-white font-semibold">Free + Premium</p>
                      </div>
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Content Count</p>
                        <p className="text-white font-semibold">280+ Series</p>
                      </div>
                    </div>
                  </div>

                  {/* #6 FlickReels */}
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-2">#6 FlickReels</h3>
                        <p className="text-rp-coral text-sm font-semibold">⭐ 4.2/5 (Best for UI/UX)</p>
                      </div>
                    </div>
                    <p className="text-rp-text-secondary mb-6">FlickReels stands out with its modern, intuitive interface and smooth user experience. Great for viewers who prioritize app design and ease of use.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Pros:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Excellent user interface</li>
                          <li>• Smooth performance</li>
                          <li>• Good personalization features</li>
                          <li>• Regular updates</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Cons:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Moderate content library</li>
                          <li>• Premium required for full access</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Pricing</p>
                        <p className="text-white font-semibold">Free + Premium</p>
                      </div>
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Content Count</p>
                        <p className="text-white font-semibold">220+ Series</p>
                      </div>
                    </div>
                  </div>

                  {/* #7 ShortMax */}
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-2">#7 ShortMax</h3>
                        <p className="text-rp-coral text-sm font-semibold">⭐ 4.1/5 (Best for Niche Content)</p>
                      </div>
                    </div>
                    <p className="text-rp-text-secondary mb-6">ShortMax focuses on niche genres and independent productions. Perfect for viewers seeking unique, lesser-known content.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Pros:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Unique niche content</li>
                          <li>• Independent productions</li>
                          <li>• Community-driven platform</li>
                          <li>• Affordable pricing</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Cons:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Smaller user base</li>
                          <li>• Less frequent updates</li>
                          <li>• Variable production quality</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Pricing</p>
                        <p className="text-white font-semibold">Free + Premium</p>
                      </div>
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Content Count</p>
                        <p className="text-white font-semibold">180+ Series</p>
                      </div>
                    </div>
                  </div>

                  {/* #8 MeloShort */}
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-2">#8 MeloShort</h3>
                        <p className="text-rp-coral text-sm font-semibold">⭐ 4.0/5 (Best for Romance)</p>
                      </div>
                    </div>
                    <p className="text-rp-text-secondary mb-6">MeloShort specializes in romance and melodrama content. Ideal for viewers who love emotional, relationship-focused stories.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Pros:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Extensive romance library</li>
                          <li>• Emotional storytelling focus</li>
                          <li>• Good free tier</li>
                          <li>• Active community</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Cons:</h4>
                        <ul className="text-rp-text-secondary text-sm space-y-1">
                          <li>• Limited genre diversity</li>
                          <li>• Slower app performance</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Pricing</p>
                        <p className="text-white font-semibold">Free + Premium</p>
                      </div>
                      <div className="bg-rp-bg-primary/50 p-3 rounded">
                        <p className="text-rp-text-muted">Content Count</p>
                        <p className="text-white font-semibold">210+ Series</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Quick Comparison Table
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-rp-border">
                        <th className="text-left py-4 px-4 text-white font-bold">App</th>
                        <th className="text-left py-4 px-4 text-white font-bold">Rating</th>
                        <th className="text-left py-4 px-4 text-white font-bold">Content</th>
                        <th className="text-left py-4 px-4 text-white font-bold">Free Tier</th>
                        <th className="text-left py-4 px-4 text-white font-bold">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">ReelShort</td>
                        <td className="py-4 px-4 text-rp-coral">4.8/5</td>
                        <td className="py-4 px-4 text-rp-text-secondary">500+</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Good</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Overall</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">ShortMax</td>
                        <td className="py-4 px-4 text-rp-coral">4.6/5</td>
                        <td className="py-4 px-4 text-rp-text-secondary">500+</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Good</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Variety</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">FlexTV</td>
                        <td className="py-4 px-4 text-rp-coral">4.5/5</td>
                        <td className="py-4 px-4 text-rp-text-secondary">200+</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Limited</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Quality</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">MoboReels</td>
                        <td className="py-4 px-4 text-rp-coral">4.4/5</td>
                        <td className="py-4 px-4 text-rp-text-secondary">250+</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Good</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Korean</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">GoodShort</td>
                        <td className="py-4 px-4 text-rp-coral">4.3/5</td>
                        <td className="py-4 px-4 text-rp-text-secondary">280+</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Excellent</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Free</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">FlickReels</td>
                        <td className="py-4 px-4 text-rp-coral">4.2/5</td>
                        <td className="py-4 px-4 text-rp-text-secondary">220+</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Good</td>
                        <td className="py-4 px-4 text-rp-text-secondary">UI/UX</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">ShortMax</td>
                        <td className="py-4 px-4 text-rp-coral">4.1/5</td>
                        <td className="py-4 px-4 text-rp-text-secondary">180+</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Good</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Niche</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-white font-semibold">MeloShort</td>
                        <td className="py-4 px-4 text-rp-coral">4.0/5</td>
                        <td className="py-4 px-4 text-rp-text-secondary">210+</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Good</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Romance</td>
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
                    <h3 className="text-white font-bold text-xl mb-4">Which app has the most free content?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      GoodShort offers the most generous free tier with unlimited daily episodes. ReelShort also has a solid free tier with daily episode limits. Both are excellent for budget-conscious viewers.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">What's the best alternative to DramaBox?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      ReelShort is the best overall alternative with the largest content library, daily updates, and excellent user experience. However, the "best" app depends on your priorities—choose based on content type, pricing, and features that matter most to you.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">Can I use multiple apps simultaneously?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      Yes! Many users subscribe to multiple apps to access different content libraries and take advantage of various free tiers. This strategy maximizes your viewing options without spending too much.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">Do these apps work internationally?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      Most apps are available globally, but content availability and pricing may vary by region. Check your app store to confirm availability in your country.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="glass p-12 rounded-2xl border-white/10 bg-gradient-to-br from-rp-coral/5 to-transparent">
                <h3 className="text-white font-bold text-2xl mb-4">Find Your Perfect Short Drama App</h3>
                <p className="text-rp-text-secondary leading-relaxed mb-6">
                  Whether you're looking for the largest library, best free tier, highest quality, or specific content types, these 8 alternatives to DramaBox offer something for everyone. Start with ReelShort for the best overall experience, or choose based on your specific preferences.
                </p>
                <p className="text-rp-text-secondary text-sm">
                  Download your preferred app today and discover your next favorite short drama!
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
