import type { Metadata } from "next";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | SimplyAI Studio",
  description:
    "How SimplyAI Studio collects, uses, and protects your information, including phone calls, SMS, and call recordings handled by our AI voice agents.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

const updated = "October 10, 2026";

export default function PrivacyPage() {
  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-xs font-bold uppercase tracking-widest mb-2 text-gold">
          Legal
        </div>
        <h1 className="font-serif text-4xl font-bold mb-2 text-navy">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-text mb-12">Last updated: {updated}</p>

        <div className="flex flex-col gap-10 text-sm leading-relaxed text-gray-text">
          <div>
            <h2 className="font-serif text-xl font-bold mb-3 text-navy">
              1. Who we are
            </h2>
            <p>
              SimplyAI Studio (&ldquo;we,&rdquo; &ldquo;us&rdquo;) is based in San Antonio, Texas, and builds
              and operates AI voice agents, websites, and related automation for
              small businesses. This policy covers two kinds of data: information
              you give us directly (contact forms, calls, texts), and information
              that passes through AI voice agents we operate on behalf of our
              clients when their customers call them.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold mb-3 text-navy">
              2. Information we collect
            </h2>
            <ul className="flex flex-col gap-2 list-disc pl-5">
              <li>
                <strong className="text-navy">Contact details</strong> you submit
                through our website forms: name, phone number, email, and
                business information.
              </li>
              <li>
                <strong className="text-navy">Call data</strong> from calls made
                to or through a SimplyAI Studio voice agent: audio recordings,
                automated transcripts, caller phone number, and the content of
                the conversation (what was asked, quoted, or booked).
              </li>
              <li>
                <strong className="text-navy">SMS data</strong> if you text a
                number connected to one of our voice agents or opt in to SMS
                updates: your phone number and message content.
              </li>
              <li>
                <strong className="text-navy">Basic site analytics</strong>, such
                as which pages are visited, when analytics tooling is active.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold mb-3 text-navy">
              3. How we use it
            </h2>
            <ul className="flex flex-col gap-2 list-disc pl-5">
              <li>To respond to inquiries and book consultations.</li>
              <li>
                To operate voice agents on behalf of our clients — answering
                calls, qualifying jobs, checking availability, and booking
                appointments.
              </li>
              <li>
                To send appointment confirmations, reminders, and related
                updates by SMS or email, only to numbers/addresses that were
                provided for that purpose.
              </li>
              <li>
                To improve call quality and agent accuracy (e.g. reviewing
                transcripts to fix mis-heard addresses or pricing errors).
              </li>
              <li>We do not sell your personal information.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold mb-3 text-navy">
              4. Call recording &amp; transcripts
            </h2>
            <p>
              Calls handled by a SimplyAI Studio voice agent may be recorded and
              automatically transcribed for quality, training, and dispute
              resolution purposes, and to give the business owner a record of
              what was discussed and booked. Where required by law, callers are
              notified that the call may be recorded. Recordings and transcripts
              are retained only as long as reasonably needed for these purposes
              and are accessible only to the business being called and
              SimplyAI Studio staff who support that account.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold mb-3 text-navy">
              5. SMS &amp; messaging consent
            </h2>
            <p>
              Phone numbers are added to an SMS list only with consent — either
              because you submitted a form requesting updates, or because you
              texted in first. Message frequency varies by business and
              situation (e.g. a booking confirmation or a reminder). Message and
              data rates may apply. Reply <strong>STOP</strong> to any text to
              opt out at any time, or <strong>HELP</strong> for assistance.
              Mobile opt-in information is never shared with third parties for
              their own marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold mb-3 text-navy">
              6. Who we share information with
            </h2>
            <p>
              We share information with the service providers that make our
              product work — for example Vapi (voice AI infrastructure), Twilio
              (calling/SMS), our CRM, and our hosting/email providers — strictly
              to deliver the service. We don&apos;t sell data to advertisers or
              data brokers.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold mb-3 text-navy">
              7. Your choices
            </h2>
            <p>
              You can ask us what information we hold about you, ask us to
              correct it, or ask us to delete it, by emailing{" "}
              <a href={`mailto:${EMAIL}`} className="text-gold hover:text-gold-light">
                {EMAIL}
              </a>
              . You can opt out of SMS at any time by replying STOP. Deleting
              data tied to an active booking may require us to confirm the
              booking status with the business first.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold mb-3 text-navy">
              8. Contact
            </h2>
            <p>
              Questions about this policy: email{" "}
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

          <p className="text-xs text-gray-text/70 pt-4 border-t border-gray-border">
            This policy may be updated from time to time; the &ldquo;last updated&rdquo;
            date above reflects the most recent change.
          </p>
        </div>
      </div>
    </section>
  );
}
