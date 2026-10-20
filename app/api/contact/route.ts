import { NextRequest, NextResponse } from "next/server";

const OWNER_EMAIL = "info@simplyaistudio.com";
const BREVO_API = "https://api.brevo.com/v3/smtp/email";

async function sendEmail(opts: {
  to: { email: string; name?: string };
  subject: string;
  html: string;
}) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  if (!apiKey || !senderEmail) throw new Error("Brevo credentials not configured");

  const res = await fetch(BREVO_API, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: "SimplyAI Studio", email: senderEmail },
      to: [opts.to],
      subject: opts.subject,
      htmlContent: opts.html,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Brevo ${res.status}: ${text}`);
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, phone, businessType } = await req.json();

    console.log("[contact] submission:", { name, phone, businessType });

    if (!name || !phone || !businessType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Awaited, not backgrounded: since the CRM push is gone, this email is
    // the *only* place a lead goes. A visitor should see an error (and know
    // to call directly) rather than a false "success" if it fails — losing
    // that distinction is exactly how a lead disappears with no trace.
    await sendEmail({
      to: { email: OWNER_EMAIL, name: "Emmanuel Eleruja" },
      subject: `New callback request: ${name} · ${businessType}`,
      html: ownerEmail({ name, phone, businessType }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[contact]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function ownerEmail({
  name,
  phone,
  businessType,
}: {
  name: string;
  phone: string;
  businessType: string;
}) {
  const rows: [string, string][] = [
    ["Name", name],
    ["Phone", phone],
    ["Business Type", businessType],
  ];

  return `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f9f9f9;font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="max-width:560px;margin:40px auto;background:#ffffff;border-radius:12px;
              overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.07);">
    <div style="background:#0D1F35;padding:20px 28px;">
      <p style="margin:0;font-size:14px;font-weight:700;color:#E8B84B;letter-spacing:0.06em;text-transform:uppercase;">
        New Callback Request — SimplyAI Studio
      </p>
    </div>
    <div style="padding:28px;">
      <h2 style="margin:0 0 20px;font-size:18px;color:#0D1F35;">
        ${name} · ${businessType}
      </h2>
      <table style="width:100%;border-collapse:collapse;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 12px;font-size:12px;font-weight:600;color:#5A6070;
                       text-transform:uppercase;letter-spacing:0.05em;width:30%;
                       background:#F4F5F7;border-radius:4px;">${label}</td>
            <td style="padding:8px 12px;font-size:14px;color:#1A1F2E;">${value}</td>
          </tr>`
          )
          .join("")}
      </table>
      <div style="margin-top:20px;padding:14px;background:#FDF3E0;border-radius:8px;
                  border-left:3px solid #C9922A;">
        <p style="margin:0;font-size:13px;color:#5A6070;">
          No email was collected — call or text <strong>${phone}</strong> to follow up.
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;
}
