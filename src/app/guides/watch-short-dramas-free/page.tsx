import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, GUIDE_STRUCTURED_DATA, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "How to Watch Short Dramas for Free in 2026 — ReelPulse",
  description: "8 proven methods to watch short dramas for free in 2026. Learn about free tiers, ad-supported platforms, trials, and rewards programs.",
};

export default function WatchShortDramasFreePage() {
  const guidePath = "/guides/watch-short-dramas-free";
  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Guides", item: `${SITE_URL}/guides` },
    { name: GUIDE_STRUCTURED_DATA["watch-short-dramas-free"].title, item: `${SITE_URL}${guidePath}` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={GUIDE_STRUCTURED_DATA["watch-short-dramas-free"].data} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="badge badge-coral mb-6 px-4 py-1.5 text-xs">Free Viewing Guide</div>
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6 leading-[1.1]">
              Watch Short Dramas Free
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-3xl leading-relaxed">
              Discover 8 legitimate methods to watch unlimited short dramas without paying a dime. From free tiers to referral programs, maximize your viewing without breaking the bank.
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
                  Why Pay When You Can Watch Free?
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  Short drama platforms have made it easier than ever to watch quality content without spending money. With strategic use of free tiers, promotional offers, and reward programs, you can build an unlimited viewing experience at zero cost. This guide reveals the best methods used by savvy viewers worldwide.
                </p>
              </div>

              {/* 8 Methods */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  8 Methods to Watch Short Dramas for Free
                </h2>
                
                <div className="space-y-8">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">1. Ad-Supported Free Tiers (ReelShort & DramaBox)</h3>
                    <p className="text-rp-text-secondary mb-4">Both ReelShort and DramaBox offer generous free tiers with daily episode limits. You get 2-5 free episodes per day with ads. This is the most straightforward method—download the app and start watching immediately.</p>
                    <div className="bg-rp-bg-primary/50 p-4 rounded mt-4">
                      <p className="text-rp-text-secondary text-sm"><strong className="text-white">Daily Limit:</strong> 2-5 episodes | <strong className="text-white">Cost:</strong> Free (ads)</p>
                    </div>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">2. YouTube Channels & Full Episodes</h3>
                    <p className="text-rp-text-secondary mb-4">Many short drama channels upload full episodes on YouTube for free. Search for your favorite series or browse dedicated short drama channels. Quality varies, but you'll find complete series available legally.</p>
                    <div className="bg-rp-bg-primary/50 p-4 rounded mt-4">
                      <p className="text-rp-text-secondary text-sm"><strong className="text-white">Content:</strong> Full episodes | <strong className="text-white">Cost:</strong> Free (ads or premium)</p>
                    </div>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">3. Dailymotion Free Content</h3>
                    <p className="text-rp-text-secondary mb-4">Dailymotion hosts thousands of short drama episodes uploaded by creators and official channels. It's a legitimate platform with a massive library of free content. Search for specific series or browse trending short dramas.</p>
                    <div className="bg-rp-bg-primary/50 p-4 rounded mt-4">
                      <p className="text-rp-text-secondary text-sm"><strong className="text-white">Content:</strong> 1000+ series | <strong className="text-white">Cost:</strong> Free (ads)</p>
                    </div>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">4. Free Trial Exploitation (Strategic Approach)</h3>
                    <p className="text-rp-text-secondary mb-4">Most platforms offer 7-14 day free trials. By strategically using trials across different apps (ReelShort, DramaBox, MoboReels, etc.), you can watch premium content for free for extended periods. Use different email addresses for each trial.</p>
                    <div className="bg-rp-bg-primary/50 p-4 rounded mt-4">
                      <p className="text-rp-text-secondary text-sm"><strong className="text-white">Duration:</strong> 7-14 days per app | <strong className="text-white">Cost:</strong> Free (requires cancellation)</p>
                    </div>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">5. Daily Login Rewards & Coins</h3>
                    <p className="text-rp-text-secondary mb-4">Apps reward consistent daily logins with free coins. Accumulate coins through daily streaks and use them to unlock episodes. This method requires patience but provides unlimited free viewing over time.</p>
                    <div className="bg-rp-bg-primary/50 p-4 rounded mt-4">
                      <p className="text-rp-text-secondary text-sm"><strong className="text-white">Earnings:</strong> 50-200+ coins daily | <strong className="text-white">Cost:</strong> Free (time investment)</p>
                    </div>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">6. Referral Programs & Friend Bonuses</h3>
                    <p className="text-rp-text-secondary mb-4">Invite friends to apps and earn free coins or premium credits. Each successful referral rewards you with 50-200+ coins. Share your referral link on social media or with friends who enjoy short dramas.</p>
                    <div className="bg-rp-bg-primary/50 p-4 rounded mt-4">
                      <p className="text-rp-text-secondary text-sm"><strong className="text-white">Per Referral:</strong> 50-200 coins | <strong className="text-white">Cost:</strong> Free (sharing)</p>
                    </div>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">7. Watch Ads for Coins</h3>
                    <p className="text-rp-text-secondary mb-4">Apps allow you to watch short advertisements in exchange for coins. Each ad typically rewards 5-10 coins. You can watch multiple ads daily, making this a reliable method for steady coin accumulation.</p>
                    <div className="bg-rp-bg-primary/50 p-4 rounded mt-4">
                      <p className="text-rp-text-secondary text-sm"><strong className="text-white">Per Ad:</strong> 5-10 coins | <strong className="text-white">Cost:</strong> Free (time)</p>
                    </div>
                  </div>

                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">8. MoboReels Free Tier</h3>
                    <p className="text-rp-text-secondary mb-4">MoboReels offers one of the most generous free tiers with unlimited daily episodes. Perfect for heavy viewers who don't mind ads. It's specifically designed to be accessible to free users.</p>
                    <div className="bg-rp-bg-primary/50 p-4 rounded mt-4">
                      <p className="text-rp-text-secondary text-sm"><strong className="text-white">Daily Limit:</strong> Unlimited | <strong className="text-white">Cost:</strong> Free (ads)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparison of Free Options */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Comparison of Free Options
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  Here's how the best free options stack up against each other:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-rp-border">
                        <th className="text-left py-4 px-4 text-white font-bold">Method</th>
                        <th className="text-left py-4 px-4 text-white font-bold">Daily Limit</th>
                        <th className="text-left py-4 px-4 text-white font-bold">Ads?</th>
                        <th className="text-left py-4 px-4 text-white font-bold">Effort</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">ReelShort Free</td>
                        <td className="py-4 px-4 text-rp-text-secondary">2-5 episodes</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Yes</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Low</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">DramaBox Free</td>
                        <td className="py-4 px-4 text-rp-text-secondary">2-5 episodes</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Yes</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Low</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">MoboReels Free</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Unlimited</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Yes</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Low</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">YouTube</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Unlimited</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Yes</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Low</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">Dailymotion</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Unlimited</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Yes</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Low</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">Free Trials</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Unlimited (7-14 days)</td>
                        <td className="py-4 px-4 text-rp-text-secondary">No</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Medium</td>
                      </tr>
                      <tr className="border-b border-rp-border/50">
                        <td className="py-4 px-4 text-white font-semibold">Daily Coins</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Unlimited (slow)</td>
                        <td className="py-4 px-4 text-rp-text-secondary">No</td>
                        <td className="py-4 px-4 text-rp-text-secondary">High</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-white font-semibold">Referrals</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Unlimited (variable)</td>
                        <td className="py-4 px-4 text-rp-text-secondary">No</td>
                        <td className="py-4 px-4 text-rp-text-secondary">Medium</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pro Tips */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Pro Tips for Maximum Free Viewing
                </h2>
                
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Combine Multiple Methods</h3>
                    <p className="text-rp-text-secondary">Use ReelShort's free tier daily, watch YouTube episodes, and accumulate coins through login streaks. Combining methods maximizes your viewing without spending money.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Plan Your Viewing Schedule</h3>
                    <p className="text-rp-text-secondary">With daily episode limits, plan which series to watch each day. Prioritize series you're actively following to make the most of your daily allowance.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Use Multiple Apps</h3>
                    <p className="text-rp-text-secondary">Each app has different content and free tier limits. Using ReelShort, DramaBox, and MoboReels together gives you access to more episodes daily.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Watch Ads Strategically</h3>
                    <p className="text-rp-text-secondary">Ads reward coins. Watch them during downtime to accumulate coins for premium episodes. It's passive income for your viewing habit.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Maintain Login Streaks</h3>
                    <p className="text-rp-text-secondary">Daily login rewards increase with consecutive days. Missing a day resets your streak, so set reminders to log in daily for maximum coin accumulation.</p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">Is it legal to watch free short dramas?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      Yes, using official free tiers, YouTube, and Dailymotion is completely legal. These platforms offer free content with ads as part of their business model. Avoid piracy sites and stick to legitimate platforms.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">How much can I watch for free daily?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      With ReelShort and DramaBox, you get 2-5 episodes daily. MoboReels offers unlimited daily episodes. YouTube and Dailymotion have unlimited content. Combined, you can watch 10+ episodes daily for free.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">Do I need to provide payment information for free tiers?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      No, free tiers don't require payment information. However, if you want to use free trials, you'll need to provide a payment method (which won't be charged if you cancel before the trial ends).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">Can I watch without ads?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      Free tiers include ads. To watch ad-free, you need a premium subscription. However, YouTube Premium and some free trials offer ad-free viewing.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">How long does it take to accumulate enough coins?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      With daily logins and ads, you can earn 50-200+ coins daily. Most episodes cost 10-50 coins, so you can unlock 1-2 episodes daily through coins alone. Patience is key.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="glass p-12 rounded-2xl border-white/10 bg-gradient-to-br from-rp-coral/5 to-transparent">
                <h3 className="text-white font-bold text-2xl mb-4">Start Watching Free Today</h3>
                <p className="text-rp-text-secondary leading-relaxed mb-6">
                  You don't need to pay to enjoy quality short dramas. By strategically using free tiers, YouTube, and reward programs, you can build an unlimited viewing experience at zero cost. Start with ReelShort or MoboReels today and explore the world of short dramas for free.
                </p>
                <p className="text-rp-text-secondary text-sm">
                  Remember: consistency is key. Daily logins and strategic viewing maximize your free content access!
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
