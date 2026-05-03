"use server";

import { Resend } from "resend";

type ContactState = {
  ok: boolean | undefined;
  fieldErrors: Record<string, string>;
  formError: string | undefined;
};

export async function submitContactForm(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const salonName = (formData.get("salonName") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  // Validation
  const fieldErrors: Record<string, string> = {};

  if (!name) fieldErrors.name = "Your name is required.";
  if (name.length > 100) fieldErrors.name = "Name must be 100 characters or fewer.";

  if (!salonName) fieldErrors.salonName = "Salon name is required.";
  if (salonName.length > 150) fieldErrors.salonName = "Salon name must be 150 characters or fewer.";

  if (!email) {
    fieldErrors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (!message) {
    fieldErrors.message = "Please tell us a bit about your salon.";
  } else if (message.length < 10) {
    fieldErrors.message = "Please write at least a sentence or two.";
  } else if (message.length > 2000) {
    fieldErrors.message = "Message must be 2000 characters or fewer.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors, formError: undefined };
  }

  // Send email via Resend
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "no-reply@reservalab.com";
  const toEmail = process.env.CONTACT_EMAIL ?? "o.enabulele@live.com";

  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not set");
    return {
      ok: false,
      fieldErrors: {},
      formError: "Email service is not configured. Please try again later.",
    };
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
        .filter((l) => l !== null)
        .join("\n"),
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="color:#0a0a0a;margin-bottom:16px;">New reservalab enquiry</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr>
              <td style="padding:8px 0;color:#555;width:100px;vertical-align:top;font-weight:600;">Name</td>
              <td style="padding:8px 0;color:#0a0a0a;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#555;vertical-align:top;font-weight:600;">Salon</td>
              <td style="padding:8px 0;color:#0a0a0a;">${escapeHtml(salonName)}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#555;vertical-align:top;font-weight:600;">Email</td>
              <td style="padding:8px 0;color:#0a0a0a;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            ${
              phone
                ? `<tr>
              <td style="padding:8px 0;color:#555;vertical-align:top;font-weight:600;">Phone</td>
              <td style="padding:8px 0;color:#0a0a0a;">${escapeHtml(phone)}</td>
            </tr>`
                : ""
            }
          </table>
          <div style="background:#f5f5f5;border-radius:8px;padding:16px;">
            <p style="margin:0 0 8px;font-weight:600;color:#555;">Message</p>
            <p style="margin:0;color:#0a0a0a;white-space:pre-wrap;">${escapeHtml(message)}</p>
          </div>
        </div>
      `,
    });

    return { ok: true, fieldErrors: {}, formError: undefined };
  } catch (err) {
    console.error("Resend email error:", err);
    return {
      ok: false,
      fieldErrors: {},
      formError: "Something went wrong sending your message. Please try again.",
    };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
