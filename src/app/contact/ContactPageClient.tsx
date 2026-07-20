"use client";

import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export function ContactPageClient() {
  const contactMethods = [
    { method: "Email", value: "hello@reelpulse.net", label: "General Inquiries" },
    { method: "X/Twitter", value: "@ReelPulse", label: "Follow the pulse" },
    { method: "LinkedIn", value: "ReelPulse Industry", label: "Industry Network" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <Nav />

      <main className="flex-grow pt-32">
        <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <ScrollReveal direction="up">
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tight text-white mb-6">
              Contact
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl mx-auto uppercase tracking-[0.2em] text-rp-coral italic">
              Connect with us
            </p>
          </ScrollReveal>
        </section>

        <section className="max-w-6xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div className="card-glow rounded-3xl overflow-hidden bg-rp-bg-card p-12 border border-white/5 relative h-full">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rp-coral/5 blur-[100px] -translate-y-1/2 translate-x-1/2" />

                <h2 className="text-4xl font-display font-black text-white uppercase tracking-tight mb-8 italic">Get in Touch</h2>

                <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-[10px] text-rp-text-muted font-black uppercase tracking-[0.2em]">Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rp-coral transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-[10px] text-rp-text-muted font-black uppercase tracking-[0.2em]">Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rp-coral transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-subject" className="text-[10px] text-rp-text-muted font-black uppercase tracking-[0.2em]">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rp-coral transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-[10px] text-rp-text-muted font-black uppercase tracking-[0.2em]">Message</label>
                    <textarea
                      id="contact-message"
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rp-coral transition-all resize-none"
                    />
                  </div>
                  <button type="submit" className="bg-rp-coral text-white font-display font-black uppercase tracking-[0.2em] px-10 py-4 rounded-xl hover:bg-rp-coral-dark transition-all transform active:scale-95 shadow-2xl">
                    Submit Message
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex flex-col gap-8 h-full justify-center">
                <h2 className="text-4xl font-display font-black text-white uppercase tracking-tight mb-4 italic">Other ways to reach us</h2>
                <div className="space-y-8">
                  {contactMethods.map((method) => (
                    <div key={method.method} className="group p-8 bg-white/5 border border-white/5 rounded-2xl hover:border-rp-coral/30 transition-all">
                      <div className="text-[10px] text-rp-coral font-black uppercase tracking-[0.2em] mb-2 italic">{method.label}</div>
                      <div className="text-2xl font-display font-black text-white uppercase tracking-tight group-hover:text-rp-coral transition-colors">{method.method}</div>
                      <div className="text-rp-text-secondary text-lg font-medium mt-1">{method.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
