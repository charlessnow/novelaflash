"use client";

import { useState } from "react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export function NewsletterPageClient() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("You're in! Welcome to the ReelPulse community.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  const benefits = [
    "Weekly insights on industry trends",
    "Analysis of top-performing content",
    "Early access to market reports",
    "Global market expansion tracking",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-rp-bg-primary">
      <Nav />

      <main className="flex-grow pt-32">
        <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <ScrollReveal direction="up">
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tight text-white mb-6">
              Newsletter
            </h1>
            <p className="text-rp-text-secondary text-xl font-medium max-w-2xl mx-auto uppercase tracking-[0.2em] text-rp-coral italic">
              Stay Ahead of the Curve
            </p>
          </ScrollReveal>
        </section>

        <section className="max-w-4xl mx-auto px-6 mb-32">
          <ScrollReveal direction="up">
            <div className="card-glow rounded-[40px] overflow-hidden">
              <div className="bg-rp-bg-card p-12 md:p-20 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rp-coral/10 blur-[150px] -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tight mb-8 leading-[1.1]">
                    The Pulse of <br />
                    <span className="text-rp-coral italic">Short Drama.</span>
                  </h2>
                  <p className="text-rp-text-secondary text-xl font-medium mb-12 leading-relaxed max-w-xl">
                    Weekly insights into the people, platforms, and technology reshaping global entertainment.
                  </p>

                  {status === "success" ? (
                    <div className="flex items-center gap-4 p-6 rounded-xl bg-rp-green/10 border border-rp-green/20 mb-12">
                      <span className="text-rp-green text-2xl">✓</span>
                      <p className="text-rp-green font-bold">{message}</p>
                    </div>
                  ) : (
                    <form className="flex flex-col md:flex-row gap-4 mb-4" onSubmit={handleSubmit}>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="ENTER YOUR EMAIL"
                        className="flex-grow bg-white/5 border border-white/10 rounded-xl px-6 py-5 text-white placeholder:text-rp-text-muted focus:outline-none focus:border-rp-coral font-display font-bold text-lg uppercase tracking-widest transition-all"
                      />
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="bg-rp-coral text-white font-display font-black uppercase tracking-[0.2em] px-12 py-5 rounded-xl hover:bg-rp-coral-dark transition-all transform active:scale-95 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === "loading" ? "Subscribing..." : "Subscribe"}
                      </button>
                    </form>
                  )}

                  {status === "error" && (
                    <p className="text-rp-coral text-sm font-bold mb-8">{message}</p>
                  )}

                  <div className="space-y-6 mb-12 mt-8">
                    <h3 className="text-rp-text-muted font-display font-black uppercase tracking-widest text-xs italic">What you&apos;ll get</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-rp-coral/20 border border-rp-coral/30 flex items-center justify-center text-rp-coral text-xs">✓</div>
                          <span className="text-rp-text-primary text-sm font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-rp-text-muted text-xs font-bold uppercase tracking-widest italic pt-8 border-t border-white/5">
                    Free forever. No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
