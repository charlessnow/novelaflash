import { NextRequest, NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

async function unsubscribe(email: string | null) {
  if (!email) return false;

  const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;
  if (!AUDIENCE_ID) return false;

  const { error } = await getResend().contacts.update({
    email,
    audienceId: AUDIENCE_ID,
    unsubscribed: true,
  });

  return !error;
}

// One-click unsubscribe (Gmail/Yahoo "Unsubscribe" button next to sender name).
// Must return quickly with no body per RFC 8058.
export async function POST(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  await unsubscribe(email);
  return new NextResponse(null, { status: 202 });
}

// Manual click on the "Cancelar suscripción" link in the email body.
export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  const success = await unsubscribe(email);

  const message = success
    ? "Cancelaste tu suscripción. Lamentamos verte partir."
    : "No pudimos procesar tu solicitud de cancelación. Contáctanos si esto sigue pasando.";

  return new NextResponse(
    `<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8" /><title>Suscripción cancelada — NovelaFlash</title></head>
<body style="background:#0C0A09;color:#FAFAF9;font-family:-apple-system,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;">
  <div style="text-align:center;max-width:420px;padding:24px;">
    <h1 style="font-size:20px;">${message}</h1>
    <a href="https://novelaflash.com" style="color:#F43F5E;">Volver a NovelaFlash</a>
  </div>
</body>
</html>`,
    { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
