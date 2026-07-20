import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, GUIDE_STRUCTURED_DATA, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "DramaBox Free Coins: Codes, Tips & Tricks 2026 — NovelaFlash",
  description: "Complete guide to earning free DramaBox coins. Discover daily rewards, gift codes, events, and strategies to maximize your coin value in 2026.",
};

export default function DramaBoxCoinsPage() {
  const guidePath = "/guides/dramabox-coins";
  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Guides", item: `${SITE_URL}/guides` },
    { name: GUIDE_STRUCTURED_DATA["dramabox-coins"].title, item: `${SITE_URL}${guidePath}` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={GUIDE_STRUCTURED_DATA["dramabox-coins"].data} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="badge badge-coral mb-6 px-4 py-1.5 text-xs">Coins & Rewards</div>
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6 leading-[1.1]">
              DramaBox Free Coins
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-3xl leading-relaxed">
              Master the DramaBox coin system and unlock unlimited episodes without spending money. Learn proven methods to earn free coins, redeem gift codes, and maximize your viewing experience.
            </p>
          </ScrollReveal>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <div className="prose prose-invert max-w-none">
              {/* Understanding the Coin System */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Understanding DramaBox Coins
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  DramaBox coins are the primary currency within the app, used to unlock episodes, purchase premium content, and access exclusive features. Unlike some competing platforms, DramaBox offers multiple legitimate ways to earn coins without spending real money. Understanding how the coin system works is essential for maximizing your viewing experience and getting the most value from the platform.
                </p>
                
                <div className="space-y-6 mb-12">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">What Are DramaBox Coins?</h3>
                    <p className="text-rp-text-secondary">DramaBox coins are virtual currency earned through gameplay, daily activities, and promotional events. Each episode typically costs between 10-50 coins depending on the series and episode length. Coins can be earned for free or purchased with real money.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Coin Tiers & Episode Costs</h3>
                    <p className="text-rp-text-secondary">Standard episodes cost 10-20 coins, while premium or newly released episodes may cost 30-50 coins. VIP members receive discounts on episode costs, making premium membership valuable for heavy viewers. Special events sometimes offer reduced coin costs or free episode unlocks.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Coin Expiration Policy</h3>
                    <p className="text-rp-text-secondary">DramaBox coins typically don't expire, but it's wise to check your account settings for any regional variations. Purchased coins may have different expiration terms than earned coins, so review the terms when buying.</p>
                  </div>
                </div>
              </div>

              {/* Free Methods to Earn Coins */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  7 Free Methods to Earn DramaBox Coins
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  The most effective way to accumulate coins is through consistent daily engagement. Here are the proven methods to earn free coins without spending money:
                </p>
                
                <div className="space-y-8">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">1. Daily Login Rewards</h3>
                    <p className="text-rp-text-secondary mb-4">Simply opening the app each day grants you coins. The reward increases with consecutive login streaks—day 1 might give 5 coins, day 7 might give 50 coins, and day 30 could reward 200+ coins. Missing a single day resets your streak, so consistency is key.</p>
                    <p className="text-rp-text-secondary text-sm italic">Tip: Set a daily reminder to log in and maintain your streak.</p>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">2. Watch Ads for Coins</h3>
                    <p className="text-rp-text-secondary mb-4">DramaBox allows you to watch short advertisements in exchange for coins. Each ad typically rewards 5-10 coins, and you can watch multiple ads per day. This is one of the most reliable methods for steady coin accumulation.</p>
                    <p className="text-rp-text-secondary text-sm italic">Tip: Watch ads during downtime or while doing other activities to maximize earnings.</p>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">3. Gift Codes & Promotions</h3>
                    <p className="text-rp-text-secondary mb-4">DramaBox regularly releases gift codes through social media, partnerships, and special events. These codes can be redeemed for 50-500+ coins depending on the promotion. Follow DramaBox's official social accounts to stay updated on new codes.</p>
                    <p className="text-rp-text-secondary text-sm italic">Current codes: [Check DramaBox official channels for active codes]</p>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">4. Seasonal Events & Challenges</h3>
                    <p className="text-rp-text-secondary mb-4">DramaBox hosts seasonal events (holidays, anniversaries, milestones) with special coin rewards. Completing event challenges or participating in limited-time activities can earn you 100-1000+ coins. These events are time-limited, so participate early.</p>
                    <p className="text-rp-text-secondary text-sm italic">Tip: Mark your calendar for major holidays when DramaBox typically launches events.</p>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">5. Referral Programs</h3>
                    <p className="text-rp-text-secondary mb-4">Invite friends to DramaBox and earn coins when they sign up and complete their first purchase or reach certain milestones. Referral rewards typically range from 50-200 coins per successful referral. Some programs offer bonus coins if multiple friends join.</p>
                    <p className="text-rp-text-secondary text-sm italic">Tip: Share your referral link on social media or with friends who enjoy short dramas.</p>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">6. Spin the Wheel / Lucky Draw</h3>
                    <p className="text-rp-text-secondary mb-4">Many versions of DramaBox feature a daily spin-the-wheel game where you can win coins, discounts, or other rewards. You typically get 1-3 free spins per day, with the chance to win 10-100+ coins per spin.</p>
                    <p className="text-rp-text-secondary text-sm italic">Tip: Spin immediately after your daily login to maximize daily rewards.</p>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">7. Complete Achievements & Milestones</h3>
                    <p className="text-rp-text-secondary mb-4">DramaBox rewards users for completing specific actions: watching a certain number of episodes, finishing a series, or reaching viewing milestones. Achievement rewards typically range from 50-500 coins depending on difficulty.</p>
                    <p className="text-rp-text-secondary text-sm italic">Tip: Check the achievements section regularly to see what rewards you're close to unlocking.</p>
                  </div>
                </div>
              </div>

              {/* Maximizing Coin Value */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Strategies to Maximize Coin Value
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  Earning coins is only half the battle. Smart spending ensures you get maximum value from every coin you earn:
                </p>
                
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Wait for Coin Sales & Discounts</h3>
                    <p className="text-rp-text-secondary">DramaBox frequently offers discounts on episode costs during promotions. Waiting for these sales can reduce episode costs by 20-50%, stretching your coins further. Plan your viewing around these promotional periods when possible.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Prioritize High-Value Series</h3>
                    <p className="text-rp-text-secondary">Focus on series that offer the most episodes per coin spent. Some series have longer episodes or more content per unlock, providing better value than others. Research series before committing coins.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Use VIP Membership Strategically</h3>
                    <p className="text-rp-text-secondary">If you're a heavy viewer, VIP membership can provide 20-30% discounts on episode costs, paying for itself quickly. Calculate whether the membership cost is worth your viewing habits before purchasing.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Accumulate Before Spending</h3>
                    <p className="text-rp-text-secondary">Build up a coin reserve through daily activities before spending heavily. This gives you flexibility to take advantage of sales and ensures you always have coins available for new releases.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Monitor Expiration Dates</h3>
                    <p className="text-rp-text-secondary">While coins typically don't expire, promotional coins or event rewards may have time limits. Use time-limited coins before they expire to avoid losing them.</p>
                  </div>
                </div>
              </div>

              {/* Common Questions */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">How many coins can I earn per day?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      A dedicated user can earn 50-200+ coins daily through login rewards, ads, and activities. The exact amount depends on your engagement level and available promotions. Consistent daily participation is key to maximizing earnings.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">Do DramaBox coins expire?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      Standard earned coins typically don't expire, but promotional or event-specific coins may have expiration dates. Always check the terms when receiving coins to understand any time limits.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">Can I transfer coins between accounts?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      No, DramaBox coins are account-specific and cannot be transferred between accounts. Each account maintains its own coin balance.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">Are there limits to how many coins I can earn?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      While there's no hard cap on total coins, daily earning limits may apply to certain activities like ad-watching. These limits reset daily and encourage consistent engagement rather than binge-earning.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">What's the best way to use my coins?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      Prioritize unlocking episodes from series you're actively watching. Avoid impulse spending on premium features unless you're a heavy user. Wait for sales when possible to stretch your coins further.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="glass p-12 rounded-2xl border-white/10 bg-gradient-to-br from-rp-coral/5 to-transparent">
                <h3 className="text-white font-bold text-2xl mb-4">Start Earning Free Coins Today</h3>
                <p className="text-rp-text-secondary leading-relaxed mb-6">
                  With consistent daily engagement and smart spending strategies, you can watch unlimited DramaBox content without spending a dime. The key is maintaining your daily login streak, watching ads, and staying alert for promotional opportunities.
                </p>
                <p className="text-rp-text-secondary text-sm">
                  Remember: patience and consistency are your best tools for accumulating coins. Start today and watch your coin balance grow!
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
