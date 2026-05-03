import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// This route exists as a fallback for non-JS form submissions or direct API calls.
// The primary submission path is the server action in app/contact/actions.ts.

export async function POST(req: NextRequest) {
  let body: Record<string, string>;

  const contentType = req.headers.get("content-type") ?? "";

  try {
    if (contentType.includes("application/json")) {
      body = await req.json();
    } else {
      const fd = await req.formData();
      body = {
        name: (fd.get("name") as string | null) ?? "",
        salonName: (fd.get("salonName") as string | null) ?? "",
        email: (fd.get("email") as string | null) ?? "",
        phone: (fd.get("phone") as string | null) ?? "",
        message: (fd.get("message") as string | null) ?? "",
      };
    }
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, salonName, email, phone, message } = body;

  if (!name || !salonName || !email || !message) {
    return NextResponse.json(
      { error: "name, salonName, email, and message are required." },
      { status: 422 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 422 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "no-reply@reservalab.com";
  const toEmail = process.env.CONTACT_EMAIL ?? "o.enabulele@live.com";

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New contact: ${name} — ${salonName}`,
      text: [
        `Name: ${name}`,
        `Salon: ${salonName}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : "",
        ``,
        `Message:`,
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Resend error in API route:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
