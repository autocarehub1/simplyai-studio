"use client";

import Link from "next/link";

interface HeroProps {
  badge?: string;
  headline: React.ReactNode;
  subheadline: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustItems?: { icon: string; label: string }[];
  compact?: boolean;
}

export default function Hero({
  badge,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  trustItems,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative flex flex-col items-center justify-center text-center overflow-hidden ${
        compact ? "pt-32 pb-20 min-h-[50vh]" : "min-h-screen pt-24 pb-16"
      }`}
      style={{ background: "#0D1F35" }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,146,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,146,42,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,146,42,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 100% 100%, rgba(46,134,193,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center">
        {badge && (
          <div
            className="animate-fade-up inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-7"
            style={{
              background: "rgba(201,146,42,0.12)",
              border: "1px solid rgba(201,146,42,0.3)",
              color: "#E8B84B",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background: "#E8B84B" }} />
            {badge}
          </div>
        )}

        <h1
          className="animate-fade-up-1 font-serif font-black text-white leading-tight tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}
        >
          {headline}
        </h1>

        <p
          className="animate-fade-up-2 mt-5 font-light leading-relaxed max-w-xl"
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {subheadline}
        </p>

        {(primaryCta || secondaryCta) && (
          <div className="animate-fade-up-3 flex flex-col sm:flex-row gap-3 mt-8 w-full justify-center">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm transition-all duration-200"
                style={{ background: "#C9922A", color: "#0D1F35" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E8B84B";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,146,42,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#C9922A";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-medium text-sm transition-all duration-200"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.8)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#E8B84B";
                  e.currentTarget.style.color = "#E8B84B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                }}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}

        {trustItems && trustItems.length > 0 && (
          <div className="animate-fade-up-4 mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-xs font-medium"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
