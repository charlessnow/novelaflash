"use client";

import React, { useState } from "react";

export const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
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
        setMessage("¡Ya estás suscrito!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Por favor, inténtalo de nuevo.");
      }
    } catch {
      setStatus("error");
      setMessage("Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="rounded-2xl shadow-2xl relative bg-rp-bg-card border border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/20 to-orange-600/20 opacity-30" />
      
      <div className="relative p-8 z-10">
        <h2 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-4 leading-tight">
          Mantente a la <br/>Vanguardia
        </h2>
        
        <p className="text-rp-text-secondary text-sm font-medium mb-8">
          Información semanal sobre la industria de miniseries de $26B. Únete a la comunidad.
        </p>

        {status === "success" ? (
          <div className="flex items-center gap-3 p-4 rounded-lg bg-rp-green/10 border border-rp-green/20">
            <span className="text-rp-green text-lg">✓</span>
            <p className="text-rp-green text-sm font-bold">{message}</p>
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Correo electrónico" 
              className="w-full px-4 py-3 rounded-lg bg-rp-bg-primary border border-white/5 text-sm text-white focus:outline-none focus:border-rp-coral transition-colors placeholder:text-rp-text-muted"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-rose-600 to-orange-600 text-white font-bold uppercase tracking-wider text-xs hover:shadow-[0_0_15px_rgba(244,63,94,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Suscribiendo..." : "Suscribirse"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-rp-coral text-xs font-bold">{message}</p>
        )}
        
        <p className="mt-6 text-[10px] text-rp-text-muted text-center italic">
          Gratis para siempre. Sin spam. Cancela cuando quieras.
        </p>
      </div>
    </div>
  );
};
