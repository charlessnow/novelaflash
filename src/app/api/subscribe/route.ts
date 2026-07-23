import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components";
import { createElement } from "react";
import { getResend } from "@/lib/resend";
import WelcomeEmail from "@emails/WelcomeEmail";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

  if (!process.env.RESEND_API_KEY || !AUDIENCE_ID) {
    return NextResponse.json(
      { error: "Newsletter service is not configured." },
      { status: 500 }
    );
  }

  const resend = getResend();

  const { error: contactError } = await resend.contacts.create({
    email,
    audienceId: AUDIENCE_ID,
    unsubscribed: false,
  });

  if (contactError) {
    return NextResponse.json(
      { error: contactError.message || "Subscription failed. Please try again." },
      { status: 400 }
    );
  }

  const html = await render(createElement(WelcomeEmail, { recipientEmail: email }));
  const unsubscribeUrl = `https://novelaflash.com/api/unsubscribe?email=${encodeURIComponent(email)}`;

  const { error: sendError } = await resend.emails.send({
    from: "NovelaFlash <newsletter@novelaflash.com>",
    to: email,
    subject: "Bienvenido a NovelaFlash — empieza por aquí",
    html,
    headers: {
      "List-Unsubscribe": `<${unsubscribeUrl}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  });

  if (sendError) {
    // Contact was added successfully; the welcome email failing shouldn't block signup.
    console.error("Welcome email failed to send:", sendError);
  }

  return NextResponse.json({ success: true });
}
