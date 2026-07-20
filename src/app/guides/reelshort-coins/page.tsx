import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, GUIDE_STRUCTURED_DATA, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "ReelShort Coins: Free Methods & Pricing 2026 — NovelaFlash",
  description: "Complete guide to ReelShort coins: how to get free coins, promo codes, coin pricing tiers, and tips to maximize value.",
};

export default function ReelShortCoinsPage() {
  const guidePath = "/guides/reelshort-coins";
  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Guides", item: `${SITE_URL}/guides` },
    { name: GUIDE_STRUCTURED_DATA["reelshort-coins"].title, item: `${SITE_URL}${guidePath}` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={GUIDE_STRUCTURED_DATA["reelshort-coins"].data} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="badge badge-coral mb-6 px-4 py-1.5 text-xs">Coins Guide</div>
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6 leading-[1.1]">
              ReelShort Coins
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-3xl leading-relaxed">
              Master the coin economy: pricing tiers, free methods to earn coins, current promo codes, and strategies to maximize your viewing value.
            </p>
          </ScrollReveal>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <div className="prose prose-invert max-w-none">
              {/* What Are Coins */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  What Are ReelShort Coins?
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  ReelShort coins are the in-app currency used to unlock episodes beyond your daily free limit. Think of them as a pay-per-episode system that gives you flexibility to watch on your own schedule.
                </p>
                
                <div className="glass p-8 rounded-2xl border-white/10 mb-8">
                  <h3 className="text-white font-bold text-lg mb-4">How Coins Work</h3>
                  <ul className="space-y-3 text-rp-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-rp-coral font-bold">•</span>
                      <span>Each episode costs a certain number of coins (typically 1-3 coins per episode)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-rp-coral font-bold">•</span>
                      <span>You can buy coins with real money or earn them free</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-rp-coral font-bold">•</span>
                      <span>Coins never expire (they stay in your account indefinitely)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-rp-coral font-bold">•</span>
                      <span>VIP subscribers get bonus coins and discounts</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-rp-coral font-bold">•</span>
                      <span>Coins are account-specific (can't be transferred)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Coin Pricing */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Coin Pricing Tiers
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  ReelShort offers multiple coin packages at different price points. Larger packages offer better value per coin:
                </p>
                
                <div className="space-y-4 mb-12">
                  <div className="glass p-6 rounded-2xl border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-bold">Small Package</span>
                      <span className="text-rp-coral font-display font-black text-xl">$0.99</span>
                    </div>
                    <p className="text-rp-text-secondary text-sm">~5-10 coins (≈$0.10-0.20 per coin)</p>
                  </div>
                  
                  <div className="glass p-6 rounded-2xl border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-bold">Medium Package</span>
                      <span className="text-rp-coral font-display font-black text-xl">$4.99</span>
                    </div>
                    <p className="text-rp-text-secondary text-sm">~30-50 coins (≈$0.10-0.17 per coin)</p>
                  </div>
                  
                  <div className="glass p-6 rounded-2xl border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-bold">Large Package</span>
                      <span className="text-rp-coral font-display font-black text-xl">$9.99</span>
                    </div>
                    <p className="text-rp-text-secondary text-sm">~80-120 coins (≈$0.08-0.12 per coin)</p>
                  </div>
                  
                  <div className="glass p-6 rounded-2xl border-white/10 ring-2 ring-rp-coral/50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-bold">Mega Package</span>
                      <span className="text-rp-coral font-display font-black text-xl">$49.99</span>
                    </div>
                    <p className="text-rp-text-secondary text-sm">~500-800 coins (≈$0.06-0.10 per coin) — Best value</p>
                  </div>
                </div>

                <div className="glass p-8 rounded-2xl border-white/10 bg-gradient-to-br from-rp-coral/5 to-transparent">
                  <p className="text-rp-text-secondary text-sm leading-relaxed">
                    <strong className="text-white">Pro Tip:</strong> Larger packages offer 30-40% better value per coin. If you plan to watch regularly, buying in bulk saves money. However, coins never expire, so there's no rush to use them.
                  </p>
                </div>
              </div>

              {/* Free Coins */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  How to Get Free Coins
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  You don't have to spend money to get coins. Here are legitimate ways to earn them:
                </p>
                
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">1. Daily Login Rewards</h3>
                    <p className="text-rp-text-secondary mb-4">Open ReelShort every day to claim daily rewards. The longer your streak, the better the rewards.</p>
                    <p className="text-rp-text-secondary text-sm italic">Typical reward: 5-20 coins per day</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">2. Watch Ads</h3>
                    <p className="text-rp-text-secondary mb-4">ReelShort occasionally offers free coins for watching short video ads. Check the rewards section regularly.</p>
                    <p className="text-rp-text-secondary text-sm italic">Typical reward: 10-50 coins per ad (limited daily)</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">3. Referral Program</h3>
                    <p className="text-rp-text-secondary mb-4">Invite friends to ReelShort. When they sign up and make their first purchase, you both earn bonus coins.</p>
                    <p className="text-rp-text-secondary text-sm italic">Typical reward: 50-200 coins per successful referral</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">4. Seasonal Events & Promotions</h3>
                    <p className="text-rp-text-secondary mb-4">ReelShort runs special events (holidays, anniversaries, milestones) with free coin giveaways.</p>
                    <p className="text-rp-text-secondary text-sm italic">Typical reward: 100-500 coins during events</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">5. VIP Bonus Coins</h3>
                    <p className="text-rp-text-secondary mb-4">Subscribe to VIP and receive bonus coins automatically. Monthly VIP includes 50-100 bonus coins.</p>
                    <p className="text-rp-text-secondary text-sm italic">Typical reward: 50-200 coins per subscription period</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">6. Social Media Contests</h3>
                    <p className="text-rp-text-secondary mb-4">Follow ReelShort on social media for contests and giveaways. Participate for chances to win free coins.</p>
                    <p className="text-rp-text-secondary text-sm italic">Typical reward: 50-300 coins per contest</p>
                  </div>
                </div>
              </div>

              {/* Promo Codes */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  ReelShort Promo Codes
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  ReelShort regularly releases promo codes that unlock free coins or discounts. Check back regularly for updated codes:
                </p>
                
                <div className="glass p-8 rounded-2xl border-white/10 bg-gradient-to-br from-rp-coral/5 to-transparent mb-8">
                  <p className="text-rp-text-secondary text-center py-8">
                    <strong className="text-white text-lg">Promo codes are updated regularly.</strong><br/>
                    <span className="text-sm">Check ReelShort's official social media, in-app notifications, and community forums for the latest codes.</span>
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="glass p-6 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold mb-2">How to Redeem Promo Codes</h3>
                    <ol className="space-y-2 text-rp-text-secondary text-sm">
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">1.</span>
                        <span>Open ReelShort app</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">2.</span>
                        <span>Go to Settings or Account menu</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">3.</span>
                        <span>Find "Redeem Code" or "Promo Code" option</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">4.</span>
                        <span>Enter the code exactly as shown</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">5.</span>
                        <span>Coins are added instantly to your account</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Coins vs VIP */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Coins vs VIP: Which Is Better?
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  Should you buy coins or subscribe to VIP? It depends on your viewing habits:
                </p>
                
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl border-white/10 border-l-4 border-l-rp-coral">
                    <h3 className="text-white font-bold text-lg mb-4">Choose Coins If You:</h3>
                    <ul className="space-y-2 text-rp-text-secondary">
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Watch occasionally (1-2 series per month)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Want flexibility to watch on your schedule</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Don't mind ads between episodes</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-coral font-bold">•</span>
                        <span>Prefer to pay only for what you watch</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10 border-l-4 border-l-rp-amber">
                    <h3 className="text-white font-bold text-lg mb-4">Choose VIP If You:</h3>
                    <ul className="space-y-2 text-rp-text-secondary">
                      <li className="flex gap-3">
                        <span className="text-rp-amber font-bold">•</span>
                        <span>Watch regularly (5+ episodes per week)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-amber font-bold">•</span>
                        <span>Want unlimited episodes without daily limits</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-amber font-bold">•</span>
                        <span>Prefer ad-free viewing</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-rp-amber font-bold">•</span>
                        <span>Want early access to new episodes</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 glass p-8 rounded-2xl border-white/10">
                  <h3 className="text-white font-bold text-lg mb-4">Cost Comparison</h3>
                  <div className="space-y-3 text-rp-text-secondary">
                    <div className="flex justify-between pb-3 border-b border-white/10">
                      <span>Watching 30 episodes with coins ($0.30/ep)</span>
                      <span className="text-white font-bold">$9.00</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-white/10">
                      <span>Weekly VIP (7 days unlimited)</span>
                      <span className="text-white font-bold">$6.99</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly VIP (30 days unlimited)</span>
                      <span className="text-white font-bold">$19.99</span>
                    </div>
                  </div>
                  <p className="text-rp-text-secondary text-sm mt-4 italic">
                    <strong className="text-white">Verdict:</strong> VIP is better value if you watch more than 20-25 episodes per month.
                  </p>
                </div>
              </div>

              {/* Maximize Value */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Tips to Maximize Coin Value
                </h2>
                
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">1. Combine Free & Paid Methods</h3>
                    <p className="text-rp-text-secondary">Use your daily free episodes first, then spend coins on additional episodes. This stretches your coin budget further.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">2. Buy Coins During Sales</h3>
                    <p className="text-rp-text-secondary">ReelShort occasionally offers bonus coins with purchases (e.g., "Buy $9.99, get 50% extra coins"). Wait for these promotions.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">3. Use VIP Bonus Coins First</h3>
                    <p className="text-rp-text-secondary">VIP subscribers get bonus coins. Use these before spending purchased coins, as they're essentially free.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">4. Claim Daily Rewards Consistently</h3>
                    <p className="text-rp-text-secondary">Even 5-10 coins per day adds up to 150-300 coins per month. That's 1-2 free episodes daily.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">5. Refer Friends for Bonus Coins</h3>
                    <p className="text-rp-text-secondary">Each successful referral can earn 50-200 coins. Invite 5 friends and you've earned 250-1000 free coins.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">6. Watch Ads When Available</h3>
                    <p className="text-rp-text-secondary">Watching ads for coins takes 30 seconds but can earn 10-50 coins. Do this daily for quick coin accumulation.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">7. Buy Larger Packages</h3>
                    <p className="text-rp-text-secondary">The $49.99 mega package offers 30-40% better value per coin than small packages. If you're a regular viewer, buy in bulk.</p>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="glass p-12 rounded-2xl border-white/10 bg-gradient-to-br from-rp-coral/5 to-transparent">
                <h3 className="text-white font-bold text-2xl mb-4">Master the Coin Economy</h3>
                <p className="text-rp-text-secondary leading-relaxed mb-6">
                  ReelShort coins give you flexibility to watch on your own schedule. By combining free methods (daily rewards, ads, referrals) with strategic purchases, you can minimize costs while maximizing viewing time.
                </p>
                <p className="text-rp-text-secondary text-sm">
                  Remember: coins never expire, so accumulate them during promotions and use them when you're ready to binge. For heavy viewers, VIP subscriptions offer better long-term value.
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
