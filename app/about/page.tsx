import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "About | SimplyAI Studio — AI Voice Agents for Small Businesses",
  description:
    "SimplyAI Studio is a San Antonio-based studio that sets up AI voice agents for small businesses, so no call or customer goes unanswered. Learn our story.",
};

const values = [
  {
    icon: "⚡",
    title: "Speed Without Sacrifice",
    body: "AI lets us move fast, from first call to a live agent. But speed never means cutting corners on how your agent sounds or handles your customers.",
  },
  {
    icon: "🤝",
    title: "Radical Transparency",
    body: "Straight pricing, no surprise fees, and plain-English explanations at every step. You should always know what you're getting and why.",
  },
  {
    icon: "📍",
    title: "Local Focus",
    body: "We're based in San Antonio and we build for San Antonio businesses. We understand the local market, the competition, and what it takes to stand out here.",
  },
  {
    icon: "🔑",
    title: "You Own Everything",
    body: "Your phone number, your call data, your scripts — 100% yours. We build it, hand it over, and you're never locked in.",
  },
];

const whoWeServe = [
  "Plumbing, HVAC & Trades",
  "Cleaning & Landscaping",
  "Med Spas & Salons",
  "Law Firms & Real Estate",
  "Restaurants & Food Service",
  "Retail & E-Commerce",
  "Roofing & Construction",
  "Any local service business",
];

export default function AboutPage() {
  return (
    <>
      <Hero
        compact
        badge="Our Story"
        headline={
          <>
            Built for the Businesses That{" "}
            <em style={{ fontStyle: "normal", color: "#E8B84B" }}>Keep San Antonio Running</em>
          </>
        }
        subheadline="We're SimplyAI Studio — a lean studio that sets up AI voice agents for small businesses, so every call gets answered and every lead gets followed up."
      />

      {/* OUR STORY */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-2 text-gold">
                Why We Exist
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-5 text-navy">
                A Full-Time Receptionist. Without the Payroll.
              </h2>
              <div className="flex flex-col gap-4 text-sm leading-relaxed text-gray-text">
                <p>
                  Small business owners miss calls every day — on job sites, with clients, after hours. Every missed call is a customer who calls the next name on Google. Hiring a receptionist or answering service is expensive, and voicemail rarely gets called back.
                </p>
                <p>
                  SimplyAI Studio was built to be the third option. We set up an AI voice agent trained on your business that answers calls naturally, books appointments, and hands off to you when it matters.
                </p>
                <p>
                  We do it all for you: writing the script, connecting your calendar and CRM, testing real calls, and going live. We can also add a website and follow-up automation when you&apos;re ready.
                </p>
              </div>
            </div>

            {/* Stats block */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "24/7", label: "Call coverage", sub: "Nights, weekends, holidays" },
                { num: "Free", label: "Demo call", sub: "Hear it for your business" },
                { num: "100%", label: "Ownership", sub: "Your number, your data" },
                { num: "24hr", label: "Response time", sub: "During your setup" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-5 border border-gray-border bg-cream"
                >
                  <div className="font-serif text-2xl font-bold mb-1 text-gold">
                    {s.num}
                  </div>
                  <div className="text-sm font-semibold mb-0.5 text-navy">
                    {s.label}
                  </div>
                  <div className="text-xs text-gray-text">
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-bold uppercase tracking-widest mb-2 text-gold">
            How We Work
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-10 text-navy">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl p-6 border border-gray-border bg-white hover:border-gold hover:shadow-[0_8px_24px_rgba(13,31,53,0.06)] transition-all duration-200"
              >
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="font-serif text-lg font-bold mb-2 text-navy">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-text">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20 md:py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-2 text-gold-light">
                Who We Serve
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white mb-5">
                Built for Every Small Business That Lives on the Phone
              </h2>
              <p className="text-sm leading-relaxed mb-6 text-white/55">
                We work with service businesses, trade contractors, clinics, salons, professional services, and anyone who loses business when the phone goes unanswered.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm bg-gold hover:bg-gold-light text-navy transition-all duration-200"
              >
                Let&apos;s Talk About Your Business →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {whoWeServe.map((item) => (
                <div
                  key={item}
                  className="rounded-lg px-4 py-3 text-sm font-medium flex items-center gap-2 bg-white/5 border border-white/8 text-white/75"
                >
                  <span className="text-gold-light">◆</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight mb-3 text-navy">
            Ready to Work Together?
          </h2>
          <p className="text-sm leading-relaxed mb-7 text-gray-text">
            Book your free 20-minute discovery call and hear a demo voice agent and walk away with a clear plan — no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm bg-gold hover:bg-gold-light text-navy hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,146,42,0.3)] transition-all duration-200"
          >
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
