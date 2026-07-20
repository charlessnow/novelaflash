import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, GUIDE_STRUCTURED_DATA, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "How to Cancel ReelShort Subscription (2026 Guide) — ReelPulse",
  description: "Step-by-step guide to cancel your ReelShort subscription on iOS, Android, and web. Learn about refund policies and what happens after cancellation.",
};

export default function CancelReelShortPage() {
  const guidePath = "/guides/cancel-reelshort";
  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Guides", item: `${SITE_URL}/guides` },
    { name: GUIDE_STRUCTURED_DATA["cancel-reelshort"].title, item: `${SITE_URL}${guidePath}` },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <JsonLd data={GUIDE_STRUCTURED_DATA["cancel-reelshort"].data} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <div className="badge badge-coral mb-6 px-4 py-1.5 text-xs">Subscription Guide</div>
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-white mb-6 leading-[1.1]">
              How to Cancel ReelShort Subscription
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-3xl leading-relaxed">
              A complete step-by-step guide to canceling your ReelShort subscription on any device. Learn about refund policies, what happens after cancellation, and answers to common questions.
            </p>
          </ScrollReveal>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <div className="prose prose-invert max-w-none">
              {/* iOS Section */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  How to Cancel on iOS
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  If you subscribed to ReelShort through the Apple App Store, follow these steps to cancel your subscription:
                </p>
                
                <ol className="space-y-6 mb-12">
                  <li className="flex gap-6">
                    <span className="font-display font-black text-2xl text-rp-coral flex-shrink-0">1</span>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Open Settings</h3>
                      <p className="text-rp-text-secondary">Launch the Settings app on your iPhone or iPad.</p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="font-display font-black text-2xl text-rp-coral flex-shrink-0">2</span>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Tap Your Apple ID</h3>
                      <p className="text-rp-text-secondary">Select your name at the top of the Settings menu to access your Apple ID profile.</p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="font-display font-black text-2xl text-rp-coral flex-shrink-0">3</span>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Go to Subscriptions</h3>
                      <p className="text-rp-text-secondary">Tap "Subscriptions" from the menu options.</p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="font-display font-black text-2xl text-rp-coral flex-shrink-0">4</span>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Find ReelShort</h3>
                      <p className="text-rp-text-secondary">Locate ReelShort in your active subscriptions list.</p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="font-display font-black text-2xl text-rp-coral flex-shrink-0">5</span>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Tap Cancel Subscription</h3>
                      <p className="text-rp-text-secondary">Select "Cancel Subscription" and confirm your choice. You'll retain access until your billing cycle ends.</p>
                    </div>
                  </li>
                </ol>

                <div className="glass p-8 rounded-2xl border-white/10 mb-8">
                  <p className="text-rp-text-secondary text-sm leading-relaxed">
                    <strong className="text-white">Pro Tip:</strong> You can also manage subscriptions directly from the App Store app by tapping your profile icon, selecting "Subscriptions," and following the same steps.
                  </p>
                </div>
              </div>

              {/* Android Section */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  How to Cancel on Android
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  For Android users with Google Play Store subscriptions, here's how to cancel:
                </p>
                
                <ol className="space-y-6 mb-12">
                  <li className="flex gap-6">
                    <span className="font-display font-black text-2xl text-rp-coral flex-shrink-0">1</span>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Open Google Play Store</h3>
                      <p className="text-rp-text-secondary">Launch the Google Play Store app on your Android device.</p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="font-display font-black text-2xl text-rp-coral flex-shrink-0">2</span>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Access Your Account</h3>
                      <p className="text-rp-text-secondary">Tap your profile icon in the top right corner and select "Payments and subscriptions."</p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="font-display font-black text-2xl text-rp-coral flex-shrink-0">3</span>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">View Subscriptions</h3>
                      <p className="text-rp-text-secondary">Tap "Subscriptions" to see all your active subscriptions.</p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="font-display font-black text-2xl text-rp-coral flex-shrink-0">4</span>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Select ReelShort</h3>
                      <p className="text-rp-text-secondary">Tap on the ReelShort subscription from your list.</p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="font-display font-black text-2xl text-rp-coral flex-shrink-0">5</span>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Cancel Subscription</h3>
                      <p className="text-rp-text-secondary">Tap "Cancel subscription" and follow the prompts to confirm. Your access continues until the end of your billing period.</p>
                    </div>
                  </li>
                </ol>

                <div className="glass p-8 rounded-2xl border-white/10 mb-8">
                  <p className="text-rp-text-secondary text-sm leading-relaxed">
                    <strong className="text-white">Note:</strong> If you subscribed through a third-party payment method (like Samsung Billing), you may need to cancel through that service instead.
                  </p>
                </div>
              </div>

              {/* Web Section */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  How to Cancel on Web
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  If you subscribed through the ReelShort website, you can manage your subscription directly:
                </p>
                
                <ol className="space-y-6 mb-12">
                  <li className="flex gap-6">
                    <span className="font-display font-black text-2xl text-rp-coral flex-shrink-0">1</span>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Log In to Your Account</h3>
                      <p className="text-rp-text-secondary">Visit the ReelShort website and sign in with your credentials.</p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="font-display font-black text-2xl text-rp-coral flex-shrink-0">2</span>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Go to Account Settings</h3>
                      <p className="text-rp-text-secondary">Click on your profile icon or account menu and select "Settings" or "Account."</p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="font-display font-black text-2xl text-rp-coral flex-shrink-0">3</span>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Find Subscription Settings</h3>
                      <p className="text-rp-text-secondary">Look for "Subscription," "Billing," or "Payment Methods" section.</p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="font-display font-black text-2xl text-rp-coral flex-shrink-0">4</span>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Cancel Your Plan</h3>
                      <p className="text-rp-text-secondary">Click "Cancel Subscription" or "Manage Subscription" and follow the prompts.</p>
                    </div>
                  </li>
                </ol>

                <div className="glass p-8 rounded-2xl border-white/10 mb-8">
                  <p className="text-rp-text-secondary text-sm leading-relaxed">
                    <strong className="text-white">Tip:</strong> Web cancellations are often processed immediately, but you'll still have access through your current billing period.
                  </p>
                </div>
              </div>

              {/* What Happens After */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  What Happens After You Cancel?
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  Understanding what to expect after cancellation helps you plan your viewing:
                </p>
                
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Immediate Changes</h3>
                    <p className="text-rp-text-secondary">Your premium features (like ad-free viewing or early episode access) are disabled immediately upon cancellation. However, you retain full access to your account and viewing history.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Access Until Billing Cycle Ends</h3>
                    <p className="text-rp-text-secondary">You can continue using your subscription benefits until your current billing period expires. For example, if you cancel on the 15th of the month but your billing date is the 30th, you have access until the 30th.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">No Automatic Renewal</h3>
                    <p className="text-rp-text-secondary">Once your billing period ends, ReelShort will not charge you again. You'll revert to the free tier with limited daily episodes and ads.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Reactivation Anytime</h3>
                    <p className="text-rp-text-secondary">You can resubscribe at any time. Your watchlist and progress are saved to your account, so you can pick up where you left off.</p>
                  </div>
                </div>
              </div>

              {/* Refund Policy */}
              <div className="mb-16">
                <h2 className="font-display font-black text-4xl text-white uppercase tracking-tight mb-8">
                  ReelShort Refund Policy
                </h2>
                <p className="text-rp-text-secondary text-lg leading-relaxed mb-8">
                  ReelShort's refund policy depends on where you subscribed:
                </p>
                
                <div className="space-y-6">
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Apple App Store (iOS)</h3>
                    <p className="text-rp-text-secondary mb-4">Apple offers a 14-day refund window for subscription charges. If you cancel within 14 days of your subscription start date, you may be eligible for a refund. Contact Apple Support directly to request a refund.</p>
                    <p className="text-rp-text-secondary text-sm italic">Note: Refunds are handled by Apple, not ReelShort.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Google Play Store (Android)</h3>
                    <p className="text-rp-text-secondary mb-4">Google Play offers a 48-hour refund window from the time of purchase. You can request a refund directly through the Play Store app or Google Play website.</p>
                    <p className="text-rp-text-secondary text-sm italic">Note: Refunds are handled by Google, not ReelShort.</p>
                  </div>
                  
                  <div className="glass p-8 rounded-2xl border-white/10">
                    <h3 className="text-white font-bold text-lg mb-3">Web Subscription</h3>
                    <p className="text-rp-text-secondary">ReelShort's web subscription typically does not offer refunds for used services. However, if you experience billing errors or unauthorized charges, contact ReelShort support immediately.</p>
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
                    <h3 className="text-white font-bold text-xl mb-4">Why is ReelShort charging me?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      ReelShort charges for premium subscriptions that unlock unlimited episodes, ad-free viewing, and early access to new content. If you're being charged unexpectedly, check your subscription status in your account settings. You may have accidentally enabled auto-renewal or purchased a VIP tier. Review your payment method and billing history to identify the charge.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">Can I get a refund?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      Refund eligibility depends on your payment method. Apple and Google offer refund windows (14 days and 48 hours, respectively), but ReelShort itself typically does not issue refunds for used services. If you believe you were charged in error, contact ReelShort support with your transaction details. For app store refunds, contact Apple or Google directly.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">Will I lose my watchlist if I cancel?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      No. Your watchlist, viewing history, and account data are permanently saved to your ReelShort account. When you resubscribe or log back in, all your information will be there. You can continue watching from where you left off.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">How many free episodes can I watch after canceling?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      After canceling your subscription, you'll have access to the free tier, which typically allows 2-3 free episodes per day with ads. The exact number may vary based on your region and ReelShort's current promotions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">Can I cancel my subscription mid-cycle?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      Yes, you can cancel anytime. Your subscription will remain active until the end of your current billing cycle. For example, if you're on a monthly plan and cancel on the 10th, you'll have access until the end of that month.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4">What if I forgot my password?</h3>
                    <p className="text-rp-text-secondary leading-relaxed">
                      Use the "Forgot Password" option on the ReelShort login screen. You'll receive an email with instructions to reset your password. If you don't receive the email, check your spam folder or contact ReelShort support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="glass p-12 rounded-2xl border-white/10 bg-gradient-to-br from-rp-coral/5 to-transparent">
                <h3 className="text-white font-bold text-2xl mb-4">Ready to Cancel?</h3>
                <p className="text-rp-text-secondary leading-relaxed mb-6">
                  Canceling your ReelShort subscription is straightforward and can be done in just a few taps. Whether you're taking a break or switching to another platform, your account and data will remain safe. You can always resubscribe later without losing your progress.
                </p>
                <p className="text-rp-text-secondary text-sm">
                  If you encounter any issues during the cancellation process, reach out to ReelShort's customer support team for assistance.
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
