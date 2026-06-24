import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "SimplyAI Studio | San Antonio Website Design & AI Automation",
  description:
    "Fast, beautiful websites and AI-powered automation for local businesses in San Antonio, TX. Starting at $1,800 with 5–7 day delivery.",
};

const steps = [
  {
    num: "01 — DISCOVERY",
    icon: "📞",
    title: "Free 20-Min Call",
    body: "Tell us about your business and goals. We'll recommend the right package and give you a straight price — no runaround.",
  },
  {
    num: "02 — BUILD",
    icon: "🛠️",
    title: "We Get to Work",
    body: "Using AI-powered tools and proven workflows, we build your site and automation stack — no guesswork, no delays.",
  },
  {
    num: "03 — REVIEW",
    icon: "🖥️",
    title: "You Approve It",
    body: "We send you a live preview. You give feedback, we refine it. Revisions included — no nickel-and-diming on small changes.",
  },
  {
    num: "04 — LAUNCH",
    icon: "🚀",
    title: "Go Live",
    body: "We connect your domain, submit to Google, and walk you through everything on a recorded video call. You're in control.",
  },
];

const homeServices = [
  {
    icon: "🌐",
    name: "Website Design & Development",
    description:
      "Custom, fast, mobile-first websites that make your business look credible and convert visitors into paying customers.",
    features: ["Mobile-responsive design", "On-page SEO built in", "5–7 day delivery"],
    href: "/services",
  },
  {
    icon: "🤖",
    name: "AI-Powered Automation",
    description:
      "CRM setup, auto lead capture, SMS follow-up sequences, appointment booking, and review automation — all on autopilot.",
    features: ["GoHighLevel CRM", "Auto SMS follow-up", "Appointment reminders"],
    href: "/services",
  },
  {
    icon: "📈",
    name: "Local SEO & Analytics",
    description:
      "Get found on Google, track what's working, and grow your online presence month over month with data you can actually use.",
    features: ["Google Analytics 4", "Search Console setup", "Monthly reports"],
    href: "/services",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        badge="San Antonio, TX · Now Accepting New Clients"
        headline={
          <>
            Your Business Deserves a Website That{" "}
            <em style={{ fontStyle: "normal", color: "#E8B84B" }}>Actually Works</em>
          </>
        }
        subheadline="We build fast, beautiful websites and AI-powered automation systems for local businesses — starting at $1,800. No tech overwhelm. No bloated agency fees."
        primaryCta={{ label: "View Packages →", href: "/services" }}
        secondaryCta={{ label: "See How It Works", href: "#how-it-works" }}
        trustItems={[
          { icon: "⚡", label: "5–7 Day Delivery" },
          { icon: "🤖", label: "AI-Powered Builds" },
          { icon: "📍", label: "San Antonio Local" },
          { icon: "🔓", label: "No Hidden Fees" },
        ]}
      />

      <TrustBar />

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-bold uppercase tracking-widest mb-2 text-gold">
            The Process
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-3 text-navy">
            Simple. Fast. Done Right.
          </h2>
          <p className="text-base leading-relaxed mb-12 max-w-lg text-gray-text">
            Most agencies take 6–8 weeks and leave you confused. We deliver in days and make sure you understand everything.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step) => (
              <div
                key={step.num}
                className="rounded-xl p-6 border border-gray-border bg-cream hover:border-gold hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(13,31,53,0.08)] transition-all duration-200 cursor-default"
              >
                <div className="text-xs font-mono font-medium tracking-wider mb-3 text-gold">
                  {step.num}
                </div>
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="font-serif text-base font-bold mb-2 text-navy">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-text">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-bold uppercase tracking-widest mb-2 text-gold">
            What We Build
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight tracking-tight text-navy">
              Services Built for Local Businesses
            </h2>
            <Link
              href="/services"
              className="text-sm font-semibold flex-shrink-0 text-gold hover:text-gold-light transition-colors duration-200"
            >
              View all packages →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {homeServices.map((svc) => (
              <ServiceCard key={svc.name} {...svc} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="py-20 relative overflow-hidden bg-navy"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(201,146,42,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="text-xs font-bold uppercase tracking-widest mb-3 text-gold-light">
            Ready to Grow?
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
            Let&apos;s Build Something That Gets You Results
          </h2>
          <p className="text-sm leading-relaxed mb-8 text-white/55">
            Schedule your free 20-minute discovery call today. No pressure, no pitch — just a straight conversation about your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm bg-gold hover:bg-gold-light text-navy hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,146,42,0.3)] transition-all duration-200"
            >
              Get a Free Quote →
            </Link>
            <Link
              href="tel:2109786160"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-medium text-sm border border-white/20 text-white/80 hover:border-gold-light hover:text-gold-light transition-all duration-200"
            >
              📞 (210) 978-6160
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
