import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work | SimplyAI Studio",
  description:
    "Browse websites and automation systems we've built for local businesses. Real results, real clients.",
};

const projects = [
  {
    name: "Swift Plumbing & Heating",
    industry: "Home Services",
    package: "Starter Site",
    packageColor: "#2563eb",
    description:
      "5-page mobile-first site with service pages, contact form, Google Maps embed, and basic on-page SEO. Delivered in 6 days.",
    tags: ["Plumbing", "Local SEO", "Contact Form", "Google Maps"],
    url: "#",
    emoji: "🔧",
    bg: "#1e3a5f",
    accent: "#f97316",
    deliverables: ["5 pages", "Mobile responsive", "SEO ready", "5-day delivery"],
  },
  {
    name: "Bloom Beauty Salon",
    industry: "Beauty & Wellness",
    package: "Professional Site",
    packageColor: "#7c3aed",
    description:
      "8-page custom site with service pricing, team profiles, gallery, blog, GA4 integration, and Google Search Console setup.",
    tags: ["Salon", "Blog", "Gallery", "GA4"],
    url: "#",
    emoji: "✿",
    bg: "#1c1917",
    accent: "#e8a598",
    deliverables: ["8 pages", "Blog section", "GA4 setup", "12-day delivery"],
  },
  {
    name: "Luxe Aesthetics & Wellness",
    industry: "Medical Aesthetics",
    package: "Growth Package",
    packageColor: "#c9a84c",
    description:
      "Full growth stack: custom site, GoHighLevel CRM, online booking widget, auto SMS sequences, appointment reminders, and review automation.",
    tags: ["Med Spa", "GoHighLevel", "Booking", "n8n", "SMS Automation"],
    url: "https://growth-package-jnop4idlu-emmanuel-dev-s-projects.vercel.app/",
    emoji: "◆",
    bg: "#0d2b1e",
    accent: "#c9a84c",
    deliverables: ["Full site", "GHL CRM", "Booking widget", "Auto SMS", "Review requests"],
  },
];

const stats = [
  ["3+", "Sites Launched"],
  ["100%", "On-Time Delivery"],
  ["5★", "Client Rating"],
  ["3", "Industries Served"],
];

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #0D1F35 0%, #1a3a5c 100%)" }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          style={{ color: "#E8B84B" }}
        >
          Portfolio
        </p>
        <h1
          className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 leading-tight"
        >
          Websites We've Built
        </h1>
        <p className="text-white/70 max-w-xl mx-auto text-base leading-relaxed mb-8">
          Every site is custom-designed for the client's industry, goals, and budget.
          No templates recycled. No cookie-cutter results.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          {stats.map(([stat, label]) => (
            <div key={label as string} className="text-center">
              <p className="text-3xl font-bold" style={{ color: "#E8B84B" }}>{stat}</p>
              <p className="text-white/60 text-xs mt-1">{label as string}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6" style={{ background: "#f8f6f2" }}>
        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`rounded-3xl overflow-hidden shadow-md border border-white/60 flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Preview Panel */}
              <div
                className="md:w-5/12 min-h-64 flex flex-col items-center justify-center p-10 text-center flex-shrink-0"
                style={{ background: p.bg }}
              >
                <div className="text-8xl mb-4">{p.emoji}</div>
                <p className="font-bold text-white text-xl mb-1">{p.name}</p>
                <p style={{ color: p.accent }} className="text-sm font-medium mb-4">
                  {p.industry}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.8)",
                        border: "1px solid rgba(255,255,255,0.15)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Details Panel */}
              <div className="flex-1 bg-white p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: p.packageColor, color: "white" }}
                  >
                    {p.package}
                  </span>
                  <span className="text-gray-400 text-xs">{p.industry}</span>
                </div>

                <h2
                  className="font-serif text-2xl font-bold mb-3"
                  style={{ color: "#0D1F35" }}
                >
                  {p.name}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {p.description}
                </p>

                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                    What was delivered
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {p.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-1 text-xs text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100"
                      >
                        <span style={{ color: "#C9922A" }}>✓</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <a
                    href={p.url}
                    className="text-sm font-semibold px-5 py-2.5 rounded-lg transition-all"
                    style={{ background: "#0D1F35", color: "white" }}
                  >
                    View Live Site →
                  </a>
                  <Link
                    href="/contact"
                    className="text-sm font-semibold px-5 py-2.5 rounded-lg border transition-all"
                    style={{ borderColor: "#C9922A", color: "#C9922A" }}
                  >
                    Get a Similar Site
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add Your Site CTA */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "#0D1F35" }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          style={{ color: "#E8B84B" }}
        >
          Ready to Be Featured Here?
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          Let's Build Your Site Next
        </h2>
        <p className="text-white/70 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
          Whether you need a clean 5-page starter or a full growth stack with automation —
          we'll deliver it fast, at a fair price.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl font-bold text-sm transition-all"
            style={{ background: "#C9922A", color: "#0D1F35" }}
          >
            Start Your Project →
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 rounded-xl font-bold text-sm border transition-all"
            style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}
          >
            View Packages
          </Link>
        </div>
      </section>
    </>
  );
}
