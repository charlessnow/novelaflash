import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, GUIDE_STRUCTURED_DATA, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "ReelShort Pricing Guide 2026 — ReelPulse",
  description: "Complete breakdown of ReelShort pricing: free vs paid, coin costs, VIP tiers, and how much it costs to watch a full series. Compare with DramaBox.",
};

export default function ReelShortPricingPage() {
  const guidePath = "/guides/reelshort-pricing";
  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Guides", item: `${SITE_URL}/guides` },
    { name: GUIDE_STRUCTURED_DATA["reelshort-pricing"].title, item: `${SITE_URL}${guidePath}` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={GUIDE_STRUCTURED_DATA["reelshort-pricing"].data} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="badge badge-coral mb-6 px-4 py-1.5 text-xs">Pricing Guide</div>
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6 leading-[1.1]">
              ReelShort Pricing
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-3xl leading-relaxed">
              Complete breakdown of ReelShort costs: free tier, coin pricing, VIP subscriptions, and what it really costs to binge a full series in 2026.
            </p>
          </ScrollReveal>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <div className="prose prose-invert max-w-none">
              {/* Free vs Paid */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Free vs Paid: What's the Difference?
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  ReelShort operates on a freemium model, meaning you can watch content for free, but premium features require payment.
                </p>
                
                <div className="space-y-6 mb-12">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-4">Free Tier</h3>
                    <ul className="space-y-3 text-rp-text-secondary">
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>2-3 free episodes per day (resets daily)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Ad-supported viewing (ads between episodes)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Access to all content library</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Unlimited watchlist and bookmarks</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Standard video quality</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-4">Paid Tier (VIP/Premium)</h3>
                    <ul className="space-y-3 text-rp-text-secondary">
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Unlimited episodes (no daily limit)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Ad-free viewing</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Early access to new episodes</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>HD/4K video quality</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Offline download (select plans)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Exclusive content access</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Coin System */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  The Coin System Explained
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  ReelShort uses a "coin" currency system to unlock episodes beyond your daily free limit. Here's how it works:
                </p>
                
                <div className="glass p-8 rounded-2xl border-white/10 mb-8">
                  <h3 className="text-white font-bold text-lg mb-4">Coin Pricing Tiers</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-rp-text-secondary">1 episode</span>
                      <span className="text-white font-bold">$0.20 - $0.50</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-rp-text-secondary">5 episodes</span>
                      <span className="text-white font-bold">$0.80 - $2.00</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-rp-text-secondary">10 episodes</span>
                      <span className="text-white font-bold">$1.50 - $4.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-rp-text-secondary">Bulk packages (50-500 coins)</span>
                      <span className="text-white font-bold">$5 - $50+</span>
                    </div>
                  </div>
                </div>

                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  <strong className="text-white">Note:</strong> Coin prices vary by region and may fluctuate based on promotions. Premium subscribers often receive bonus coins or discounts on coin purchases.
                </p>
              </div>

              {/* VIP Tiers */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  VIP Subscription Tiers
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  ReelShort offers multiple subscription options to fit different viewing habits:
                </p>
                
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-white font-bold text-lg">Weekly VIP</h3>
                      <span className="text-rp-coral font-display font-black text-2xl">$6.99</span>
                    </div>
                    <p className="text-rp-text-secondary mb-4">Perfect for casual viewers wanting to try premium features.</p>
                    <ul className="space-y-2 text-rp-text-secondary text-sm">
                      <li className="flex gap-2">
                        <span className="text-rp-coral">✓</span>
                        <span>7 days of unlimited episodes</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-rp-coral">✓</span>
                        <span>Ad-free viewing</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-rp-coral">✓</span>
                        <span>Early episode access</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-rp-coral">✓</span>
                        <span>Bonus coins</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10 ring-2 ring-rp-coral/50">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-white font-bold text-lg">Monthly VIP</h3>
                      <span className="text-rp-coral font-display font-black text-2xl">$19.99</span>
                    </div>
                    <p className="text-rp-text-secondary mb-4">Best value for regular viewers. Most popular option.</p>
                    <ul className="space-y-2 text-rp-text-secondary text-sm">
                      <li className="flex gap-2">
                        <span className="text-rp-coral">✓</span>
                        <span>30 days of unlimited episodes</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-rp-coral">✓</span>
                        <span>Ad-free viewing</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-rp-coral">✓</span>
                        <span>Early episode access (24 hours)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-rp-coral">✓</span>
                        <span>Generous bonus coins</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-rp-coral">✓</span>
                        <span>Exclusive content</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-white font-bold text-lg">Annual VIP</h3>
                      <span className="text-rp-coral font-display font-black text-2xl">$99.99</span>
                    </div>
                    <p className="text-rp-text-secondary mb-4">Best savings for dedicated fans. Saves ~$140 vs monthly.</p>
                    <ul className="space-y-2 text-rp-text-secondary text-sm">
                      <li className="flex gap-2">
                        <span className="text-rp-coral">✓</span>
                        <span>365 days of unlimited episodes</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-rp-coral">✓</span>
                        <span>Ad-free viewing</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-rp-coral">✓</span>
                        <span>Priority early access</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-rp-coral">✓</span>
                        <span>Maximum bonus coins</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-rp-coral">✓</span>
                        <span>VIP-only content</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-rp-coral">✓</span>
                        <span>Premium customer support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cost to Watch Series */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  How Much Does It Cost to Watch a Full Series?
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  The total cost depends on series length and your viewing method:
                </p>
                
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-4">Short Series (10-15 episodes)</h3>
                    <div className="space-y-3 text-rp-text-secondary">
                      <div className="flex justify-between pb-3 border-b border-white/10">
                        <span>Using free tier only (2-3 episodes/day)</span>
                        <span className="text-white font-bold">5-8 days (free)</span>
                      </div>
                      <div className="flex justify-between pb-3 border-b border-white/10">
                        <span>Buying coins ($0.30/episode avg)</span>
                        <span className="text-white font-bold">$3-5</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weekly VIP subscription</span>
                        <span className="text-white font-bold">$6.99</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-4">Medium Series (30-50 episodes)</h3>
                    <div className="space-y-3 text-rp-text-secondary">
                      <div className="flex justify-between pb-3 border-b border-white/10">
                        <span>Using free tier only</span>
                        <span className="text-white font-bold">15-25 days (free)</span>
                      </div>
                      <div className="flex justify-between pb-3 border-b border-white/10">
                        <span>Buying coins ($0.30/episode avg)</span>
                        <span className="text-white font-bold">$9-15</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly VIP subscription</span>
                        <span className="text-white font-bold">$19.99</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-4">Long Series (100+ episodes)</h3>
                    <div className="space-y-3 text-rp-text-secondary">
                      <div className="flex justify-between pb-3 border-b border-white/10">
                        <span>Using free tier only</span>
                        <span className="text-white font-bold">30-50 days (free)</span>
                      </div>
                      <div className="flex justify-between pb-3 border-b border-white/10">
                        <span>Buying coins ($0.30/episode avg)</span>
                        <span className="text-white font-bold">$30-40</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly VIP (2-3 months)</span>
                        <span className="text-white font-bold">$40-60</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  ReelShort vs DramaBox Pricing
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  How ReelShort stacks up against its main competitor:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-4 px-4 text-white font-bold">Feature</th>
                        <th className="text-center py-4 px-4 text-white font-bold">ReelShort</th>
                        <th className="text-center py-4 px-4 text-white font-bold">DramaBox</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr>
                        <td className="py-4 px-4 text-rp-text-secondary">Free episodes/day</td>
                        <td className="text-center py-4 px-4 text-white">2-3</td>
                        <td className="text-center py-4 px-4 text-white">5-7</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-rp-text-secondary">Weekly VIP</td>
                        <td className="text-center py-4 px-4 text-white">$6.99</td>
                        <td className="text-center py-4 px-4 text-white">$4.99</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-rp-text-secondary">Monthly VIP</td>
                        <td className="text-center py-4 px-4 text-white">$19.99</td>
                        <td className="text-center py-4 px-4 text-white">$14.99</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-rp-text-secondary">Coin cost/episode</td>
                        <td className="text-center py-4 px-4 text-white">$0.20-0.50</td>
                        <td className="text-center py-4 px-4 text-white">$0.15-0.40</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-rp-text-secondary">Ad-free viewing</td>
                        <td className="text-center py-4 px-4 text-white">VIP only</td>
                        <td className="text-center py-4 px-4 text-white">VIP only</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-rp-text-secondary">Offline download</td>
                        <td className="text-center py-4 px-4 text-white">Premium only</td>
                        <td className="text-center py-4 px-4 text-white">Premium only</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-rp-text-secondary text-sm mt-8 italic">
                  <strong className="text-white">Verdict:</strong> DramaBox offers more generous free episodes and lower subscription costs, making it better for budget-conscious viewers. ReelShort has a larger content library and better original series.
                </p>
              </div>

              {/* Money-Saving Tips */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Tips to Save Money on ReelShort
                </h2>
                
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">1. Use the Free Tier Strategically</h3>
                    <p className="text-rp-text-secondary">Watch your 2-3 free episodes daily and space out series. You can watch a 30-episode series in about 2 weeks for free.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">2. Buy Annual VIP Instead of Monthly</h3>
                    <p className="text-rp-text-secondary">Annual VIP ($99.99/year) costs $8.33/month vs $19.99/month for monthly. That's a 58% savings if you're a regular viewer.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">3. Watch During Promotional Periods</h3>
                    <p className="text-rp-text-secondary">ReelShort frequently offers discounts during holidays and special events. Sign up for notifications to catch deals.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">4. Maximize Bonus Coins</h3>
                    <p className="text-rp-text-secondary">VIP subscribers get bonus coins. Use these for episodes instead of buying coins separately. Bonus coins often have better value.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">5. Watch Ads for Free Coins</h3>
                    <p className="text-rp-text-secondary">ReelShort occasionally offers free coins for watching ads. Check the rewards section daily for these opportunities.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">6. Share a Family Plan (if available)</h3>
                    <p className="text-rp-text-secondary">Some regions offer family plans. Splitting the cost with family members can reduce your per-person expense significantly.</p>
                  </div>
                </div>
              </div>

              {/* Is It Worth It */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Is ReelShort Worth the Cost?
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  Whether ReelShort is worth it depends on your viewing habits:
                </p>
                
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl border-white/10 border-l-4 border-l-rp-coral">
                    <h3 className="text-white font-bold text-lg mb-3">✓ Worth It If You:</h3>
                    <ul className="space-y-2 text-rp-text-secondary">
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Watch 5+ episodes per week</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Want ad-free viewing</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Enjoy early episode access</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Prefer unlimited viewing without daily limits</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10 border-l-4 border-l-rp-amber">
                    <h3 className="text-white font-bold text-lg mb-3">✗ Not Worth It If You:</h3>
                    <ul className="space-y-2 text-rp-text-secondary">
                      <li className="flex gap-3">
                        <span className="text-rp-amber font-bold">•</span>
                        <span>Watch casually (1-2 episodes/week)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-amber font-bold">•</span>
                        <span>Don't mind ads</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-amber font-bold">•</span>
                        <span>Prefer DramaBox's lower pricing</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-amber font-bold">•</span>
                        <span>Have a limited budget</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="glass p-12 rounded-2xl border-white/10 bg-gradient-to-br from-rp-coral/5 to-transparent">
                <h3 className="text-white font-bold text-2xl mb-4">Bottom Line</h3>
                <p className="text-rp-text-secondary leading-relaxed mb-6">
                  ReelShort is free to start, but costs $6.99-$99.99/year for premium features. The free tier is generous enough for casual viewers, while the monthly VIP ($19.99) offers the best value for regular watchers. If you're a heavy viewer, the annual plan saves the most money.
                </p>
                <p className="text-rp-text-secondary text-sm">
                  Compare with DramaBox if you want lower prices and more free episodes. Both platforms offer excellent content at competitive rates.
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
