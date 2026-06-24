import { NextRequest, NextResponse } from "next/server";
import { waitUntil } from "@vercel/functions";

const OWNER_EMAIL = "info@simplyaistudio.com";
const CALENDLY_URL = "https://calendly.com/emmanuel_eleruja/website-consultation";
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

async function pushToGHL(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  business: string;
  industry: string;
  service: string;
  message: string;
}): Promise<void> {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  const pipelineId = process.env.GHL_PIPELINE_ID;
  const stageId = process.env.GHL_STAGE_ID;
  if (!apiKey || !locationId) return;

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    Version: "2021-07-28",
    "Content-Type": "application/json",
  };

  // 1 — Create or update contact
  const contactRes = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
    method: "POST",
    headers,
    body: JSON.stringify({
      locationId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      tags: ["website-lead", data.service.toLowerCase().replace(/\s+/g, "-")],
      customFields: [
        { key: "business_name", field_value: data.business },
        { key: "industry", field_value: data.industry },
        { key: "service_interest", field_value: data.service },
        { key: "lead_message", field_value: data.message },
      ],
      source: "SimplyAI Studio Website",
    }),
  });

  if (!contactRes.ok) {
    const text = await contactRes.text();
    throw new Error(`GHL contact upsert ${contactRes.status}: ${text}`);
  }

  const { contact } = await contactRes.json();
  const contactId = contact?.id;
  if (!contactId || !pipelineId || !stageId) return;

  // 2 — Add to pipeline as an opportunity
  await fetch("https://services.leadconnectorhq.com/opportunities/", {
    method: "POST",
    headers,
    body: JSON.stringify({
      locationId,
      pipelineId,
      pipelineStageId: stageId,
      contactId,
      name: `${data.firstName} ${data.lastName} — ${data.business}`,
      status: "open",
      source: "Website Contact Form",
    }),
  });

  // 3 — Fire n8n instant follow-up workflow
  const n8nUrl = process.env.N8N_WEBHOOK_NEW_LEAD;
  if (n8nUrl) {
    await fetch(n8nUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contactId, ...data }),
    }).catch((err: unknown) => console.error("[n8n]", err));
  }
}

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, phone, email, business, industry, service, message } =
      await req.json();

    if (!firstName || !lastName || !email || !business || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Client email is the essential one — gate success on it
    await sendEmail({
      to: { email, name: `${firstName} ${lastName}` },
      subject: "Book your free consultation — SimplyAI Studio",
      html: clientEmail({ firstName, business, service }),
    });

    // Owner notification and GHL run after response — waitUntil keeps Vercel alive for them
    waitUntil(
      sendEmail({
        to: { email: OWNER_EMAIL, name: "Emmanuel Eleruja" },
        subject: `New inquiry: ${firstName} ${lastName} · ${business}`,
        html: ownerEmail({ firstName, lastName, phone, email, business, industry, service, message }),
      }).catch((err: unknown) => console.error("[owner-email]", err))
    );

    waitUntil(
      pushToGHL({ firstName, lastName, email, phone, business, industry, service, message })
        .catch((err: unknown) => console.error("[GHL]", err))
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[contact]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function clientEmail({
  firstName,
  business,
  service,
}: {
  firstName: string;
  business: string;
  service: string;
}) {
  return `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#FAF8F4;font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="max-width:580px;margin:40px auto;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    <div style="background:#0D1F35;padding:28px 36px;">
      <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">
        Simply<span style="color:#E8B84B;">AI</span> Studio
      </p>
      <p style="margin:4px 0 0;font-size:12px;color:rgba(255,255,255,0.45);letter-spacing:0.05em;">
        INTELLIGENT BUILDS FOR AMBITIOUS BUSINESSES
      </p>
    </div>
    <div style="background:#ffffff;padding:36px;">
      <h2 style="margin:0 0 12px;font-size:20px;color:#0D1F35;">
        Hi ${firstName}, we got your message!
      </h2>
      <p style="margin:0 0 16px;font-size:15px;color:#5A6070;line-height:1.65;">
        Thanks for reaching out about <strong style="color:#1A1F2E;">${business}</strong>.
        We've reviewed your interest in <em>${service}</em> and we're ready to chat.
      </p>
      <p style="margin:0 0 28px;font-size:15px;color:#5A6070;line-height:1.65;">
        The fastest way to move forward is to book your <strong>free 20-minute discovery call</strong>.
        Pick any time that works for you — no pressure, just a straight conversation about your goals.
      </p>
      <div style="text-align:center;margin:0 0 28px;">
        <a href="${CALENDLY_URL}"
           style="display:inline-block;background:#C9922A;color:#0D1F35;text-decoration:none;
                  padding:14px 36px;border-radius:8px;font-weight:700;font-size:15px;">
          Book My Free Consultation →
        </a>
      </div>
      <p style="margin:0 0 4px;font-size:12px;color:#9AA0B0;text-align:center;">Or copy this link:</p>
      <p style="margin:0;font-size:12px;text-align:center;">
        <a href="${CALENDLY_URL}" style="color:#C9922A;">${CALENDLY_URL}</a>
      </p>
      <hr style="border:none;border-top:1px solid #E8EAF0;margin:28px 0;" />
      <p style="margin:0;font-size:13px;color:#5A6070;line-height:1.6;">
        Questions? Call us at
        <a href="tel:2109786160" style="color:#C9922A;text-decoration:none;">(210) 978-6160</a>
        or reply to this email.
      </p>
    </div>
    <div style="background:#F4F5F7;padding:18px 36px;text-align:center;">
      <p style="margin:0;font-size:12px;color:#9AA0B0;">
        SimplyAI Studio · San Antonio, Texas ·
        <a href="mailto:info@simplyaistudio.com" style="color:#C9922A;text-decoration:none;">info@simplyaistudio.com</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

function ownerEmail(data: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  business: string;
  industry: string;
  service: string;
  message: string;
}) {
  const rows: [string, string][] = [
    ["Name", `${data.firstName} ${data.lastName}`],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Business", data.business],
    ["Industry", data.industry],
    ["Service", data.service],
    ["Message", data.message || "—"],
  ];

  return `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f9f9f9;font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="max-width:560px;margin:40px auto;background:#ffffff;border-radius:12px;
              overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.07);">
    <div style="background:#0D1F35;padding:20px 28px;">
      <p style="margin:0;font-size:14px;font-weight:700;color:#E8B84B;letter-spacing:0.06em;text-transform:uppercase;">
        New Inquiry — SimplyAI Studio
      </p>
    </div>
    <div style="padding:28px;">
      <h2 style="margin:0 0 20px;font-size:18px;color:#0D1F35;">
        ${data.firstName} ${data.lastName} · ${data.business}
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
          A Calendly booking link has been sent to <strong>${data.email}</strong>.
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;
}
