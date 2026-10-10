import type { Metadata } from "next";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | SimplyAI Studio",
  description:
    "Terms of service for SimplyAI Studio's website design, automation, and AI voice agent services.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

const updated = "October 10, 2026";

export default function TermsPage() {
  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-xs font-bold uppercase tracking-widest mb-2 text-gold">
          Legal
        </div>
        <h1 className="font-serif text-4xl font-bold mb-2 text-navy">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-text mb-12">Last updated: {updated}</p>

        <div className="flex flex-col gap-10 text-sm leading-relaxed text-gray-text">
          <div>
            <h2 className="font-serif text-xl font-bold mb-3 text-navy">
              1. Agreement
            </h2>
            <p>
              These terms govern your use of the SimplyAI Studio website and
              any services you purchase from us — website design, automation
              setup, and AI voice agent setup. Using our site or booking a
              consultation means you agree to these terms.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold mb-3 text-navy">
              2. Services
            </h2>
            <p>
              Specific deliverables, timelines, and pricing for any project are
              confirmed in writing (quote, invoice, or statement of work) before
              work begins. Package pricing shown on this site is a starting
              point and may change based on project scope — you&apos;ll always
              see and approve a final number before anything is built.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold mb-3 text-navy">
              3. AI voice agents
            </h2>
            <p>
              When we set up an AI voice agent for a business, that agent
              answers calls, quotes prices, checks availability, and books
              appointments based on information the business provides us
              (pricing, hours, service area). Quoted prices given by the agent
              are estimates; the business confirms the final price. The
              business is responsible for the accuracy of the information it
              gives us to configure the agent. We aim for the agent to transfer
              to a human when it&apos;s unsure or the request is outside what it
              can safely handle, but it is automated software and can make
              mistakes.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold mb-3 text-navy">
              4. Payment
            </h2>
            <p>
              Projects typically require a deposit to begin and remaining
              balance on delivery or per an agreed schedule, as stated in your
              quote. Monthly services (e.g. maintenance, voice agent hosting)
              bill on a recurring basis until cancelled.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold mb-3 text-navy">
              5. Ownership
            </h2>
            <p>
              Once a website project is paid in full, you own the site, its
              content, and its domain. Third-party tools we connect (CRM,
              calling/SMS infrastructure, hosting) remain governed by their own
              terms, and ongoing use of those connected services may require an
              active account or subscription with that provider.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold mb-3 text-navy">
              6. SMS terms
            </h2>
            <p>
              If a voice agent or form on this site collects your number for
              text updates, message frequency varies, message and data rates
              may apply, and you can reply STOP to opt out or HELP for help at
              any time. See our{" "}
              <a href="/privacy" className="text-gold hover:text-gold-light">
                Privacy Policy
              </a>{" "}
              for how that data is used.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold mb-3 text-navy">
              7. Limitation of liability
            </h2>
            <p>
              Our services are provided on an &ldquo;as-is&rdquo; basis. We work to keep
              voice agents, websites, and automations accurate and reliable,
              but we aren&apos;t liable for indirect or consequential losses
              (such as a missed booking from a dropped call or carrier SMS
              delay) beyond the fees paid for the affected service in the
              preceding 30 days.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold mb-3 text-navy">
              8. Changes
            </h2>
            <p>
              We may update these terms as our services change. Continued use
              of our services after an update means you accept the revised
              terms.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold mb-3 text-navy">
              9. Contact
            </h2>
            <p>
              Questions about these terms: email{" "}
              <a href={`mailto:${EMAIL}`} className="text-gold hover:text-gold-light">
                {EMAIL}
              </a>{" "}
              or call{" "}
              <a href={`tel:${PHONE_TEL}`} className="text-gold hover:text-gold-light">
                {PHONE_DISPLAY}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
