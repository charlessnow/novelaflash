import { Resend } from "resend";

// Lazily constructed so a missing RESEND_API_KEY doesn't crash the build
// (Resend's constructor throws immediately if no key is present, and Next.js
// evaluates route modules at build time to collect page data).
let client: Resend | null = null;

export function getResend(): Resend {
  if (!client) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set");
    }
    client = new Resend(process.env.RESEND_API_KEY);
  }
  return client;
}
