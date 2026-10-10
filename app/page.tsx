import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import DemoAudio from "@/components/DemoAudio";
import Reveal from "@/components/Reveal";
import { SITE_URL } from "@/lib/constants";

const title = "SimplyAI Studio | AI Voice Agent Setup for Small Businesses";
const description =
  "We set up AI voice agents that answer every call, qualify leads, and book appointments 24/7 — so small businesses never miss another customer.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: SITE_URL },
  openGraph: { title, description, url: SITE_URL },
  twitter: { title, description },
};

const steps = [
  {
    num: "01 — DISCOVERY",
    icon: "📞",
    title: "Free 20-Min Call",
    body: "Tell us how calls come in today and where you're losing customers. We'll map out the right voice agent and give you a straight price — no runaround.",
  },
  {
    num: "02 — BUILD",
    icon: "🛠️",
    title: "We Build Your Agent",
    body: "We build and configure your voice agent: your greeting, your services, your pricing, your booking rules — connected to your calendar and CRM.",
  },
  {
    num: "03 — REVIEW",
    icon: "🖥️",
    title: "Test & Refine",
    body: "Call your agent yourself. We test real scenarios together, refine the script and tone, and tweak until it sounds like your business.",
  },
  {
    num: "04 — LAUNCH",
    icon: "🚀",
    title: "Go Live",
    body: "We forward your number, switch the agent on, and walk you through everything on a recorded video call. You're in control.",
  },
];

const homeServices = [
  {
    icon: "📞",
    name: "AI Voice Agent Setup",
    description:
      "A custom AI receptionist that answers every call in a natural voice, handles common questions, and never puts a customer on hold.",
    features: ["Answers calls 24/7", "Trained on your business", "Call forwarding & transfer to you"],
    href: "/services",
  },
  {
    icon: "📅",
    name: "Booking & Lead Capture",
    description:
      "Your agent qualifies callers, books appointments straight into your calendar, and sends every lead to your CRM with a summary.",
    features: ["Calendar integration", "CRM & SMS follow-up", "Call summaries & transcripts"],
    href: "/services",
  },
  {
    icon: "🌐",
    name: "Websites & Automation",
    description:
      "Need a site or follow-up automation to go with it? We build fast, mobile-first websites and CRM workflows that work alongside your agent.",
    features: ["Mobile-responsive design", "GoHighLevel CRM", "5–7 day site delivery"],
    href: "/services",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        badge="AI Voice Agents · Now Accepting New Clients"
        headline={
          <>
            Never Miss Another Call. Let an{" "}
            <em style={{ fontStyle: "normal", color: "#E8B84B" }}>AI Voice Agent</em>{" "}
            Answer It.
          </>
        }
        subheadline="We set up AI voice agents that answer your calls, qualify leads, and book appointments 24/7 — so you can stay focused on the work. No tech overwhelm. No bloated agency fees."
        primaryCta={{ label: "Book a Free Demo Call →", href: "/contact" }}
        secondaryCta={{ label: "See How It Works", href: "#how-it-works" }}
        trustItems={[
          { icon: "📞", label: "Answers 24/7" },
          { icon: "🤖", label: "Custom-Trained Agents" },
          { icon: "📍", label: "San Antonio Local" },
          { icon: "🔓", label: "No Hidden Fees" },
        ]}
      />

      <TrustBar />

      <DemoAudio />

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
            Most voice AI tools leave you to figure out the setup alone. We do it all for you and make sure you understand everything.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 90}>
                <div className="rounded-xl p-6 border border-gray-border bg-cream hover:border-gold hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(13,31,53,0.08)] transition-all duration-200 cursor-default h-full">
                  <div className="text-xs font-mono font-medium tracking-wider mb-3 text-gold">
                    {step.num}
                  </div>
                  <div className="text-3xl mb-3" aria-hidden="true">{step.icon}</div>
                  <h3 className="font-serif text-base font-bold mb-2 text-navy">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-text">
                    {step.body}
                  </p>
                </div>
              </Reveal>
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
              Voice AI Built for Small Businesses
            </h2>
            <Link
              href="/services"
              className="text-sm font-semibold flex-shrink-0 text-gold hover:text-gold-light transition-colors duration-200"
            >
              View all services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {homeServices.map((svc, i) => (
              <Reveal key={svc.name} delay={i * 100}>
                <ServiceCard {...svc} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="py-20 relative overflow-hidden bg-navy"
      >
        <div
          className="absolute inset-0 pointer-events-none animate-aurora"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(201,146,42,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute animate-orb-slow pointer-events-none"
          style={{
            top: "10%",
            left: "12%",
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,184,75,0.12) 0%, transparent 70%)",
            filter: "blur(6px)",
          }}
        />
        <Reveal className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="text-xs font-bold uppercase tracking-widest mb-3 text-gold-light">
            Stop Losing Calls
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
            Let&apos;s Put an Agent on Your Phones
          </h2>
          <p className="text-sm leading-relaxed mb-8 text-white/55">
            Book a free 20-minute call and hear a demo voice agent for your type of business. No pressure, no pitch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm bg-gold hover:bg-gold-light text-navy hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,146,42,0.3)] transition-all duration-200"
            >
              Book a Free Demo Call →
            </Link>
            <Link
              href="tel:2109786160"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-medium text-sm border border-white/20 text-white/80 hover:border-gold-light hover:text-gold-light transition-all duration-200"
            >
              <span aria-hidden="true">📞</span> (210) 978-6160
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
