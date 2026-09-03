import { NextResponse } from "next/server";

interface ContactRequestBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  honeypot?: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body: ContactRequestBody = await req.json();
    const { name, email, subject, message, honeypot } = body;

    // Honeypot spam check - silent discard if bot filled hidden field
    if (honeypot && honeypot.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Message received." });
    }

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please write a message of at least 10 characters." },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = (subject && typeof subject === "string" ? subject.trim() : "General Inquiry") || "General Inquiry";
    const trimmedMessage = message.trim();

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_TO_EMAIL || "azeemmuhammad0150@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    // If API key is not yet configured, log submission and respond with simulated success
    if (!apiKey || apiKey.trim() === "") {
      console.warn("[Contact API] RESEND_API_KEY not configured. Logging submission to console:");
      console.log({
        name: trimmedName,
        email: trimmedEmail,
        subject: trimmedSubject,
        message: trimmedMessage,
        recipient: recipientEmail,
      });

      return NextResponse.json(
        {
          success: true,
          message: "Thank you! Your message was received (development mode).",
        },
        { status: 200 }
      );
    }

    // Dispatch email via Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey.trim()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [recipientEmail],
        reply_to: trimmedEmail,
        subject: `[Portfolio Inquiry] ${trimmedSubject}: ${trimmedName}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #0b1111; color: #e6f0ed; border: 1px solid #1c2b29; border-radius: 8px;">
            <div style="border-bottom: 1px solid #1c2b29; padding-bottom: 16px; margin-bottom: 20px;">
              <span style="font-family: monospace; font-size: 11px; color: #77f2d0; letter-spacing: 0.1em; text-transform: uppercase;">PORTFOLIO INQUIRY</span>
              <h2 style="margin: 8px 0 0; color: #f2f7f5; font-size: 20px;">New Message from ${escapeHtml(trimmedName)}</h2>
            </div>

            <div style="background-color: #111a19; padding: 14px 18px; border-radius: 6px; border: 1px solid #1f3330; margin-bottom: 24px;">
              <p style="margin: 6px 0; font-size: 14px;"><strong>From:</strong> ${escapeHtml(trimmedName)} &lt;<a href="mailto:${escapeHtml(trimmedEmail)}" style="color: #77f2d0;">${escapeHtml(trimmedEmail)}</a>&gt;</p>
              <p style="margin: 6px 0; font-size: 14px;"><strong>Subject:</strong> ${escapeHtml(trimmedSubject)}</p>
            </div>

            <div style="margin-bottom: 24px;">
              <h3 style="font-size: 13px; font-family: monospace; text-transform: uppercase; color: #8aa39b; margin-bottom: 8px;">Message:</h3>
              <div style="background-color: #0d1413; padding: 18px; border-radius: 6px; border-left: 3px solid #77f2d0; line-height: 1.65; white-space: pre-wrap; font-size: 15px; color: #d8e5e1;">
${escapeHtml(trimmedMessage)}
              </div>
            </div>

            <div style="border-top: 1px solid #1c2b29; padding-top: 16px; font-size: 12px; color: #6a827b;">
              <p style="margin: 0;">Hit <strong>Reply</strong> to respond directly to ${escapeHtml(trimmedName)} (${escapeHtml(trimmedEmail)}).</p>
            </div>
          </div>
        `,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("[Contact API] Resend API Error:", resendData);
      return NextResponse.json(
        {
          success: false,
          error: resendData.message || "Failed to send message via email provider. Please try again or reach out via LinkedIn.",
        },
        { status: resendResponse.status || 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully. I will get back to you shortly!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API] Unexpected error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
