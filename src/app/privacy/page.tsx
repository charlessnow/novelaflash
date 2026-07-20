import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy — ReelPulse",
  description:
    "Review the ReelPulse privacy policy to understand how we collect, use, and protect your data when you read industry coverage, subscribe, or contact us.",
  openGraph: {
    title: "Privacy Policy — ReelPulse",
    description:
      "Review the ReelPulse privacy policy to understand how we collect, use, and protect your data when you read industry coverage, subscribe, or contact us.",
  },
};

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you subscribe to our newsletter, contact us, or participate in any interactive features of our services. This may include your name, email address, and any other information you choose to provide.",
    },
    {
      title: "How We Use It",
      content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you about industry news, and to respond to your inquiries. We do not sell your personal information to third parties.",
    },
    {
      title: "Cookies",
      content: "We use cookies and similar tracking technologies to analyze trends, administer the website, track users' movements around the website, and to gather demographic information about our user base as a whole.",
    },
    {
      title: "Third-Party Services",
      content: "Our services may contain links to third-party websites or services that are not owned or controlled by ReelPulse. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.",
    },
    {
      title: "Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us at privacy@reelpulse.net.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <Nav />

      <main className="flex-grow pt-32">
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <ScrollReveal direction="up">
            <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tight text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-rp-text-secondary text-lg font-medium max-w-2xl uppercase tracking-[0.2em] text-rp-coral italic">
              Effective Date: March 30, 2026
            </p>
          </ScrollReveal>
        </section>

        <section className="max-w-4xl mx-auto px-6 mb-32">
          <div className="space-y-16">
            {sections.map((section, i) => (
              <ScrollReveal key={section.title} direction="up" delay={i * 0.05}>
                <div className="space-y-6">
                  <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight italic">
                    {section.title}
                  </h2>
                  <p className="text-rp-text-secondary text-lg leading-relaxed font-medium">
                    {section.content}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
