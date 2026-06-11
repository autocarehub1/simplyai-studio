import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "About | SimplyAI Studio — San Antonio Website & Automation Agency",
  description:
    "SimplyAI Studio is a San Antonio-based agency helping local businesses grow with professional websites and AI-powered automation. Learn our story.",
};

const values = [
  {
    icon: "⚡",
    title: "Speed Without Sacrifice",
    body: "AI tools let us move fast — 5–7 day website delivery is real. But speed never means cutting corners on design or code quality.",
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
    body: "Your site, your domain, your code — 100% yours. We build it, hand it over, and you're never locked into a proprietary platform.",
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
        subheadline="We're SimplyAI Studio — a lean, AI-powered web and automation agency built specifically to serve ambitious local businesses."
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
                Big Agency Results. Local Business Prices.
              </h2>
              <div className="flex flex-col gap-4 text-sm leading-relaxed text-gray-text">
                <p>
                  Most local businesses in San Antonio get stuck choosing between two bad options: an overpriced big agency that treats them like an afterthought, or a cheap freelancer who disappears after launch.
                </p>
                <p>
                  SimplyAI Studio was built to be the third option. By using AI-powered tools and battle-tested workflows, we cut build time dramatically without cutting quality — passing those savings on to you.
                </p>
                <p>
                  We&apos;re not just website builders. We build complete growth systems: a high-converting website, automated lead follow-up, appointment booking, and reputation management — all working together from day one.
                </p>
              </div>
            </div>

            {/* Stats block */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "5–7", label: "Day avg. delivery", sub: "For Tier 1 sites" },
                { num: "$1,800", label: "Starting price", sub: "No setup fees" },
                { num: "100%", label: "Ownership", sub: "Your code, your domain" },
                { num: "24hr", label: "Response time", sub: "During your build" },
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
                Built for Every Local Business That Wants to Grow
              </h2>
              <p className="text-sm leading-relaxed mb-6 text-white/55">
                We work with service businesses, trade contractors, retail shops, professional services, and anyone who needs a website that actually converts — not just looks pretty.
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
            Book your free 20-minute discovery call and walk away with a clear plan for your website and automation — no obligation.
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
