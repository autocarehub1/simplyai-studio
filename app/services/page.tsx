import type { Metadata } from "next";
import Link from "next/link";
import clsx from "clsx";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services & Pricing | SimplyAI Studio — San Antonio",
  description:
    "Website design, AI automation, CRM setup, and local SEO for San Antonio businesses. View packages starting at $1,800 with 5–7 day delivery.",
};

const packages = [
  {
    tier: "Tier 1",
    name: "Starter Site",
    best: "Best for new businesses & solo operators",
    price: "$1,800",
    priceNote: "One-time · 50% deposit to start",
    icon: "🌱",
    popular: false,
    features: [
      "4–6 professional pages",
      "Mobile-responsive design",
      "Contact form with email alerts",
      "Google Maps embed",
      "Basic on-page SEO",
      "1 revision round",
      "5–7 day delivery",
      "You own 100% of the site",
    ],
  },
  {
    tier: "Tier 2",
    name: "Professional Site",
    best: "Best for established local businesses",
    price: "$3,500",
    priceNote: "Starting at · custom quote available",
    icon: "🏢",
    popular: true,
    features: [
      "8–12 custom pages",
      "Custom design (not a template)",
      "AI-assisted copywriting",
      "Google Analytics 4 setup",
      "Google Search Console",
      "Blog / news section",
      "2 revision rounds",
      "10–14 day delivery",
    ],
  },
  {
    tier: "Tier 3",
    name: "Growth Package",
    best: "Best for businesses ready to automate",
    price: "$7,500",
    priceNote: "Starting at · full automation included",
    icon: "🚀",
    popular: false,
    features: [
      "Everything in Professional",
      "GoHighLevel CRM setup",
      "Auto lead capture + follow-up SMS",
      "Smart scheduling + booking widget",
      "Appointment reminder sequences",
      "Automated review requests",
      "n8n workflow automation",
      "3–4 week delivery",
    ],
  },
];

const addons = [
  {
    icon: "🔗",
    name: "CRM Integration",
    description: "Connect your website form directly to GoHighLevel CRM. Every lead auto-captured, tagged, and ready in your pipeline.",
    price: "$750 one-time",
  },
  {
    icon: "📅",
    name: "Smart Scheduling",
    description: "Embedded booking widget + automated 24hr and 1hr SMS reminders. Reduce no-shows and eliminate phone tag.",
    price: "$400 one-time",
  },
  {
    icon: "⭐",
    name: "Review Automation",
    description: "Auto-send Google review requests 2 hours after each completed appointment. Build your reputation on autopilot.",
    price: "$300 one-time",
  },
  {
    icon: "✍️",
    name: "Professional Copywriting",
    description: "Full AI-assisted copy for all pages, crafted for your specific industry and target customer in San Antonio.",
    price: "$500 one-time",
  },
  {
    icon: "⚡",
    name: "Rush Delivery",
    description: "Need it fast? Rush builds prioritized for 2–3 business day delivery on Tier 1 projects. Weekend work included.",
    price: "+$900 surcharge",
  },
];

const retainers = [
  {
    name: "No Retainer",
    price: "$0",
    period: "Pay $150/hr for updates as needed",
    highlight: false,
    features: ["Updates billed hourly", "You manage everything yourself", "48hr response on paid requests"],
  },
  {
    name: "Basic Maintenance",
    price: "$300",
    period: "per month",
    highlight: false,
    features: [
      "Monthly uptime + speed check",
      "Up to 2hrs content updates",
      "Google Analytics report",
      "Domain & hosting renewal alerts",
      "24hr response time",
    ],
  },
  {
    name: "Pro Maintenance",
    price: "$600",
    period: "per month",
    highlight: true,
    features: [
      "Everything in Basic",
      "Automation health check monthly",
      "CRM workflow monitoring",
      "Up to 4hrs content updates",
      "Monthly performance PDF report",
      "4hr response time",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        compact
        badge="Packages & Pricing"
        headline={
          <>
            Transparent Pricing.{" "}
            <em style={{ fontStyle: "normal", color: "#E8B84B" }}>No Surprises.</em>
          </>
        }
        subheadline="All packages include mobile-responsive design, basic SEO, and a 30-day post-launch support window."
      />

      {/* PACKAGES */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-bold uppercase tracking-widest mb-2 text-gold">
            Packages
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-10 text-navy">
            Pick Your Package
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={clsx(
                  "rounded-2xl p-7 border relative transition-all duration-200 flex flex-col hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(13,31,53,0.1)]",
                  pkg.popular
                    ? "border-gold bg-[rgba(201,146,42,0.05)] shadow-[0_0_0_2px_rgba(201,146,42,0.2)]"
                    : "border-gray-border bg-white hover:border-gold"
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full bg-gold text-navy whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <div className="text-3xl mb-3">{pkg.icon}</div>
                <div className="text-xs font-mono font-medium tracking-wider mb-1 text-gold">
                  {pkg.tier}
                </div>
                <h3 className="font-serif text-xl font-bold mb-1 text-navy">
                  {pkg.name}
                </h3>
                <p className="text-xs italic mb-4 text-gray-text">
                  {pkg.best}
                </p>
                <div className="font-serif text-3xl font-black mb-0.5 text-gold">
                  {pkg.price}
                </div>
                <p className="text-xs mb-5" style={{ color: "#9AA0B0" }}>
                  {pkg.priceNote}
                </p>
                <div className="h-px bg-gray-border mb-5" />
                <ul className="flex flex-col gap-2.5 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-text">
                      <span className="text-gold-light flex-shrink-0 mt-px">◆</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={clsx(
                    "mt-6 w-full py-3 rounded-lg text-sm font-semibold text-center block transition-all duration-200",
                    pkg.popular
                      ? "bg-gold text-navy hover:bg-gold-light"
                      : "border border-gold/40 text-gold hover:bg-gold hover:text-navy"
                  )}
                >
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-bold uppercase tracking-widest mb-2 text-gold">
            Add-Ons
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-3 text-navy">
            Supercharge Your Package
          </h2>
          <p className="text-base leading-relaxed mb-10 max-w-lg text-gray-text">
            Optional extras you can add to any package. Pricing is one-time unless noted.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addons.map((addon) => (
              <ServiceCard
                key={addon.name}
                icon={addon.icon}
                name={addon.name}
                description={addon.description}
                price={addon.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* RETAINER */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-bold uppercase tracking-widest mb-2 text-gold">
            Monthly Support
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-3 text-navy">
            Keep It Running
          </h2>
          <p className="text-base leading-relaxed mb-10 max-w-lg text-gray-text">
            Optional monthly maintenance so your site and automations always perform. Skip this and pay $150/hr for updates instead.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {retainers.map((r) => (
              <div
                key={r.name}
                className={clsx(
                  "rounded-xl p-6 border transition-all duration-200 flex flex-col",
                  r.highlight
                    ? "bg-navy border-gold"
                    : "bg-white border-gray-border hover:border-gold hover:shadow-[0_8px_24px_rgba(13,31,53,0.08)]"
                )}
              >
                <h3 className={clsx("font-bold text-base mb-1", r.highlight ? "text-white" : "text-navy")}>
                  {r.name}
                </h3>
                <div className="font-serif text-2xl font-bold mb-0.5 text-gold">
                  {r.price}
                </div>
                <p className={clsx("text-xs mb-5", r.highlight ? "text-white/40" : "text-[#9AA0B0]")}>
                  {r.period}
                </p>
                <ul className="flex flex-col gap-2 flex-1">
                  {r.features.map((f) => (
                    <li
                      key={f}
                      className={clsx("flex items-start gap-2 text-sm", r.highlight ? "text-white/70" : "text-gray-text")}
                    >
                      <span className="text-gold flex-shrink-0">◆</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={clsx(
                    "mt-6 block w-full py-2.5 rounded-lg text-sm font-semibold text-center transition-all duration-200",
                    r.highlight
                      ? "bg-gold text-navy hover:bg-gold-light"
                      : "border border-gold/30 text-gold hover:bg-gold hover:text-navy"
                  )}
                >
                  Select Plan →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-navy">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(201,146,42,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-white leading-tight tracking-tight mb-3">
            Not Sure Which Package Is Right for You?
          </h2>
          <p className="text-sm mb-7 text-white/55">
            Book a free 20-minute call and we&apos;ll help you figure out exactly what you need — no pressure, no pitch.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm bg-gold hover:bg-gold-light text-navy hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,146,42,0.3)] transition-all duration-200"
          >
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </>
  );
}
