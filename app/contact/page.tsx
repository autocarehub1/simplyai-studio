import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | SimplyAI Studio — San Antonio",
  description:
    "Get in touch with SimplyAI Studio. Book a free 20-minute discovery call or submit your project details. We respond within 24 business hours.",
};

const contactItems = [
  {
    icon: "📞",
    label: "Phone",
    value: "(210) 978-6160",
    href: "tel:2109786160",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "elerujaemmy@yahoo.com",
    href: "mailto:elerujaemmy@yahoo.com",
  },
  {
    icon: "📍",
    label: "Location",
    value: "San Antonio, Texas",
    href: undefined,
  },
  {
    icon: "⏱️",
    label: "Response Time",
    value: "Within 24 business hours",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        compact
        badge="Get In Touch"
        headline={
          <>
            Let&apos;s Build Your{" "}
            <em style={{ fontStyle: "normal", color: "#E8B84B" }}>Business Online</em>
          </>
        }
        subheadline="Fill out the form below and we'll be in touch within 24 hours to confirm your project and schedule your free discovery call."
      />

      <section className="py-20 md:py-28 bg-navy-mid relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(201,146,42,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

            {/* Left: info panel */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-2 text-gold-light">
                  Contact Info
                </div>
                <h2 className="font-serif text-2xl font-bold text-white mb-2">
                  Simply<span className="text-gold-light">AI</span> Studio
                </h2>
                <p className="text-sm leading-relaxed text-white/50">
                  Intelligent builds for ambitious businesses. We&apos;re ready to hear about yours.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-xl p-4 bg-white/4 border border-white/7"
                  >
                    <div className="text-xl flex-shrink-0 mt-0.5">{item.icon}</div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider mb-0.5 text-gold">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-white/80 hover:text-gold-light transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-white/80">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* What to expect */}
              <div className="rounded-xl p-5 bg-white/4 border border-white/7">
                <div className="text-xs font-bold uppercase tracking-widest mb-3 text-gold">
                  What Happens Next
                </div>
                {[
                  "We review your submission within 24 hours",
                  "You receive a calendar link for your free call",
                  "We send your custom proposal + quote",
                  "Project kicks off once deposit is received",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white bg-gold">
                      {i + 1}
                    </div>
                    <span className="text-sm text-white/60">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-2xl overflow-hidden border border-white/8" style={{ height: "360px" }}>
            <iframe
              src="https://maps.google.com/maps?q=San+Antonio,+Texas&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SimplyAI Studio — San Antonio, Texas"
            />
          </div>
        </div>
      </section>
    </>
  );
}
