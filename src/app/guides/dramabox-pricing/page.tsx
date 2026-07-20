import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, GUIDE_STRUCTURED_DATA, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "How Much Does DramaBox Cost? Pricing Guide 2026 — NovelaFlash",
  description: "Complete breakdown of DramaBox pricing: free tier, coin costs, subscription options, and comparison with ReelShort. Find the best value.",
};

export default function DramaBoxPricingPage() {
  const guidePath = "/guides/dramabox-pricing";
  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Guides", item: `${SITE_URL}/guides` },
    { name: GUIDE_STRUCTURED_DATA["dramabox-pricing"].title, item: `${SITE_URL}${guidePath}` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={GUIDE_STRUCTURED_DATA["dramabox-pricing"].data} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="badge badge-coral mb-6 px-4 py-1.5 text-xs">Pricing Guide</div>
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6 leading-[1.1]">
              DramaBox Pricing
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-3xl leading-relaxed">
              Complete breakdown of DramaBox costs: free tier, coin pricing, subscription options, and how it compares to ReelShort in 2026.
            </p>
          </ScrollReveal>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <div className="prose prose-invert max-w-none">
              {/* Free Tier */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  DramaBox Free Tier
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  DramaBox offers one of the most generous free tiers in the short drama space. You can watch a significant amount of content without spending a dime.
                </p>
                
                <div className="glass p-8 rounded-2xl border-white/10 mb-8">
                  <h3 className="text-white font-bold text-lg mb-4">What's Included in Free</h3>
                  <ul className="space-y-3 text-rp-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-rp-coral font-bold">•</span>
                      <span>5-7 free episodes per day (resets daily)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-rp-coral font-bold">•</span>
                      <span>Ad-supported viewing (ads between episodes)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-rp-coral font-bold">•</span>
                      <span>Access to entire content library</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-rp-coral font-bold">•</span>
                      <span>Unlimited watchlist and bookmarks</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-rp-coral font-bold">•</span>
                      <span>Standard video quality (720p)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-rp-coral font-bold">•</span>
                      <span>Daily login rewards</span>
                    </li>
                  </ul>
                </div>

                <div className="glass p-8 rounded-2xl border-white/10 bg-gradient-to-br from-rp-coral/5 to-transparent">
                  <p className="text-rp-text-secondary text-sm leading-relaxed">
                    <strong className="text-white">Why DramaBox's Free Tier is Better:</strong> With 5-7 free episodes daily, you can watch a 30-episode series in just 4-6 days completely free. ReelShort only offers 2-3 free episodes daily, making DramaBox significantly more generous.
                  </p>
                </div>
              </div>

              {/* Coin System */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  DramaBox Coin Pricing
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  Like ReelShort, DramaBox uses coins to unlock episodes beyond your daily free limit. However, DramaBox coins are slightly cheaper:
                </p>
                
                <div className="glass p-8 rounded-2xl border-white/10 mb-8">
                  <h3 className="text-white font-bold text-lg mb-4">Coin Pricing Tiers</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-rp-text-secondary">1 episode</span>
                      <span className="text-white font-bold">$0.15 - $0.40</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-rp-text-secondary">5 episodes</span>
                      <span className="text-white font-bold">$0.60 - $1.50</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-rp-text-secondary">10 episodes</span>
                      <span className="text-white font-bold">$1.20 - $3.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-rp-text-secondary">Bulk packages (50-500 coins)</span>
                      <span className="text-white font-bold">$4 - $40+</span>
                    </div>
                  </div>
                </div>

                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  <strong className="text-white">Note:</strong> DramaBox coins are 20-30% cheaper than ReelShort, making it more affordable for casual viewers who prefer buying coins over subscriptions.
                </p>
              </div>

              {/* Subscription Options */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  DramaBox Subscription Plans
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  DramaBox offers multiple subscription tiers at lower prices than ReelShort:
                </p>
                
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-white font-bold text-lg">Weekly Premium</h3>
                      <span className="text-rp-coral font-display font-black text-2xl">$4.99</span>
                    </div>
                    <p className="text-rp-text-secondary mb-4">Perfect for trying premium features without long-term commitment.</p>
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
                      <h3 className="text-white font-bold text-lg">Monthly Premium</h3>
                      <span className="text-rp-coral font-display font-black text-2xl">$14.99</span>
                    </div>
                    <p className="text-rp-text-secondary mb-4">Best value for regular viewers. 25% cheaper than ReelShort.</p>
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
                      <h3 className="text-white font-bold text-lg">Annual Premium</h3>
                      <span className="text-rp-coral font-display font-black text-2xl">$79.99</span>
                    </div>
                    <p className="text-rp-text-secondary mb-4">Best savings for dedicated fans. Saves ~$100 vs monthly.</p>
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
                        <span>Premium-only content</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-rp-coral">✓</span>
                        <span>Priority customer support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* VIP Keycode */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  VIP Keycode System
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  DramaBox offers a unique "VIP Keycode" system that gives you temporary premium access:
                </p>
                
                <div className="glass p-8 rounded-2xl border-white/10">
                  <h3 className="text-white font-bold text-lg mb-4">How VIP Keycodes Work</h3>
                  <ul className="space-y-3 text-rp-text-secondary mb-6">
                    <li className="flex gap-3">
                      <span className="text-rp-coral font-bold">•</span>
                      <span>Keycodes unlock 24-48 hours of premium access</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-rp-coral font-bold">•</span>
                      <span>Found through daily rewards, events, and promotions</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-rp-coral font-bold">•</span>
                      <span>Can be stacked for longer premium periods</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-rp-coral font-bold">•</span>
                      <span>No cost — completely free</span>
                    </li>
                  </ul>
                  
                  <p className="text-rp-text-secondary text-sm italic">
                    <strong className="text-white">Advantage:</strong> DramaBox's keycode system is unique and allows free users to experience premium features regularly without paying.
                  </p>
                </div>
              </div>

              {/* Comparison */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  DramaBox vs ReelShort Pricing
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  Here's how DramaBox stacks up against ReelShort:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-4 px-4 text-white font-bold">Feature</th>
                        <th className="text-center py-4 px-4 text-white font-bold">DramaBox</th>
                        <th className="text-center py-4 px-4 text-white font-bold">ReelShort</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr>
                        <td className="py-4 px-4 text-rp-text-secondary">Free episodes/day</td>
                        <td className="text-center py-4 px-4 text-white font-bold text-rp-coral">5-7</td>
                        <td className="text-center py-4 px-4 text-white">2-3</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-rp-text-secondary">Weekly subscription</td>
                        <td className="text-center py-4 px-4 text-white font-bold text-rp-coral">$4.99</td>
                        <td className="text-center py-4 px-4 text-white">$6.99</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-rp-text-secondary">Monthly subscription</td>
                        <td className="text-center py-4 px-4 text-white font-bold text-rp-coral">$14.99</td>
                        <td className="text-center py-4 px-4 text-white">$19.99</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-rp-text-secondary">Annual subscription</td>
                        <td className="text-center py-4 px-4 text-white font-bold text-rp-coral">$79.99</td>
                        <td className="text-center py-4 px-4 text-white">$99.99</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-rp-text-secondary">Coin cost/episode</td>
                        <td className="text-center py-4 px-4 text-white font-bold text-rp-coral">$0.15-0.40</td>
                        <td className="text-center py-4 px-4 text-white">$0.20-0.50</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-rp-text-secondary">Free premium access</td>
                        <td className="text-center py-4 px-4 text-white font-bold text-rp-coral">VIP Keycodes</td>
                        <td className="text-center py-4 px-4 text-white">None</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-rp-text-secondary text-sm mt-8 italic">
                  <strong className="text-white">Verdict:</strong> DramaBox is 20-30% cheaper across all pricing tiers and offers a more generous free tier. It's the better choice for budget-conscious viewers.
                </p>
              </div>

              {/* Money-Saving Tips */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Tips to Save Money on DramaBox
                </h2>
                
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">1. Maximize the Free Tier</h3>
                    <p className="text-rp-text-secondary">With 5-7 free episodes daily, you can watch a 50-episode series in just 7-10 days completely free. This is DramaBox's biggest advantage.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">2. Use VIP Keycodes</h3>
                    <p className="text-rp-text-secondary">Collect free VIP keycodes from daily rewards and events. Stack them for extended premium access without paying.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">3. Buy Annual Plan</h3>
                    <p className="text-rp-text-secondary">Annual subscription ($79.99) costs $6.67/month vs $14.99/month for monthly. That's a 55% savings for committed viewers.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">4. Watch Ads for Coins</h3>
                    <p className="text-rp-text-secondary">DramaBox frequently offers free coins for watching ads. Check the rewards section daily.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">5. Combine Free & Coins</h3>
                    <p className="text-rp-text-secondary">Use your 5-7 free episodes daily, then buy coins for additional episodes. This stretches your budget further.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">6. Participate in Events</h3>
                    <p className="text-rp-text-secondary">DramaBox runs seasonal events with free coin giveaways and bonus keycodes. Participate for extra rewards.</p>
                  </div>
                </div>
              </div>

              {/* Is It Worth It */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Is DramaBox Worth the Cost?
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  DramaBox offers excellent value, especially for budget-conscious viewers:
                </p>
                
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl border-white/10 border-l-4 border-l-rp-coral">
                    <h3 className="text-white font-bold text-lg mb-3">✓ Worth It If You:</h3>
                    <ul className="space-y-2 text-rp-text-secondary">
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Have a limited budget</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Watch 3+ episodes per week</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Want ad-free viewing</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Prefer lower subscription costs</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10 border-l-4 border-l-rp-amber">
                    <h3 className="text-white font-bold text-lg mb-3">✗ Not Worth It If You:</h3>
                    <ul className="space-y-2 text-rp-text-secondary">
                      <li className="flex gap-3">
                        <span className="text-rp-amber font-bold">•</span>
                        <span>Watch very casually (1-2 episodes/week)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-amber font-bold">•</span>
                        <span>Don't mind ads</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-amber font-bold">•</span>
                        <span>Prefer ReelShort's content library</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="glass p-12 rounded-2xl border-white/10 bg-gradient-to-br from-rp-coral/5 to-transparent">
                <h3 className="text-white font-bold text-2xl mb-4">Bottom Line</h3>
                <p className="text-rp-text-secondary leading-relaxed mb-6">
                  DramaBox is the most affordable short drama app on the market. With 5-7 free episodes daily, you can watch extensively without paying. If you do subscribe, the monthly plan ($14.99) offers excellent value compared to ReelShort ($19.99).
                </p>
                <p className="text-rp-text-secondary text-sm">
                  For budget-conscious viewers, DramaBox is the clear winner. For those who want the largest content library, ReelShort may be worth the extra cost.
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
