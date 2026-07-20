import Link from "@/components/ui/InternalLink";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbList, SITE_URL } from "@/lib/seo";

type Verdict = {
  label: string;
  value: string;
};

type Section = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type FAQ = {
  question: string;
  answer: string;
};

type RelatedGuide = {
  href: string;
  label: string;
  description: string;
};

export type ConversionGuide = {
  slug: string;
  badge: string;
  title: string;
  dek: string;
  updated: string;
  verdicts: Verdict[];
  sections: Section[];
  faqs: FAQ[];
  relatedGuides: RelatedGuide[];
};

export function ConversionGuidePage({ guide }: { guide: ConversionGuide }) {
  const guidePath = `/guides/${guide.slug}`;
  const breadcrumbSchema = createBreadcrumbList([
    { name: "Home", item: SITE_URL },
    { name: "Guides", item: `${SITE_URL}/guides` },
    { name: guide.title, item: `${SITE_URL}${guidePath}` },
  ]);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col bg-rp-bg-primary">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <Nav />

      <main className="flex-grow pt-32">
        <section className="mx-auto mb-20 max-w-7xl px-6">
          <div className="badge badge-coral mb-6 px-4 py-1.5 text-xs">{guide.badge}</div>
          <h1 className="mb-6 max-w-5xl font-display text-5xl font-black uppercase leading-[1.05] tracking-tight text-white md:text-7xl">
            {guide.title}
          </h1>
          <p className="max-w-3xl text-xl font-medium leading-relaxed text-rp-text-secondary">{guide.dek}</p>
          <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-rp-text-muted">
            Last updated {guide.updated}
          </p>
        </section>

        <section className="mx-auto mb-24 grid max-w-6xl grid-cols-1 gap-5 px-6 md:grid-cols-3">
          {guide.verdicts.map((verdict) => (
            <div key={verdict.label} className="glass rounded-2xl border-white/10 p-6">
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-rp-text-muted">{verdict.label}</p>
              <p className="font-display text-2xl font-black uppercase text-white">{verdict.value}</p>
            </div>
          ))}
        </section>

        <section className="mx-auto mb-32 max-w-4xl px-6">
          <div className="space-y-14">
            {guide.sections.map((section, index) => (
              <section key={section.title} className="glass rounded-2xl border-white/10 p-8">
                <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-rp-coral">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mb-6 font-display text-3xl font-black uppercase tracking-tight text-white">{section.title}</h2>
                <div className="space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-lg leading-relaxed text-rp-text-secondary">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-8 space-y-3 text-rp-text-secondary">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="font-black text-rp-coral">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <section className="mt-16 border-t border-white/10 pt-12">
            <h2 className="mb-8 font-display text-3xl font-black uppercase tracking-tight text-white">FAQ</h2>
            <div className="space-y-4">
              {guide.faqs.map((faq) => (
                <details key={faq.question} className="glass group rounded-2xl border-white/10 p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-white">
                    <span>{faq.question}</span>
                    <span className="font-display text-rp-coral transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="pt-4 leading-relaxed text-rp-text-secondary">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-16 border-t border-white/10 pt-12">
            <h2 className="mb-8 font-display text-3xl font-black uppercase tracking-tight text-white">Related Guides</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {guide.relatedGuides.map((item) => (
                <Link key={item.href} href={item.href} className="glass group rounded-2xl border-white/10 p-6 transition-colors hover:bg-white/[0.04]">
                  <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-rp-text-muted">Guide</p>
                  <h3 className="mb-3 font-display text-lg font-black uppercase text-white group-hover:text-rp-coral">{item.label}</h3>
                  <p className="text-sm leading-relaxed text-rp-text-secondary">{item.description}</p>
                </Link>
              ))}
            </div>
          </section>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-24">
          <NewsletterCTA />
        </section>
      </main>

      <Footer />
    </div>
  );
}
