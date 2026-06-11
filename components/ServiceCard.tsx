"use client";

import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  name: string;
  description: string;
  features?: string[];
  price?: string;
  href?: string;
  variant?: "light" | "dark";
}

export default function ServiceCard({
  icon,
  name,
  description,
  features,
  price,
  href,
  variant = "light",
}: ServiceCardProps) {
  const isDark = variant === "dark";

  const card = (
    <div
      className="group rounded-xl p-6 border flex flex-col gap-4 h-full transition-all duration-250"
      style={{
        background: isDark ? "rgba(255,255,255,0.04)" : "#FFFFFF",
        borderColor: isDark ? "rgba(255,255,255,0.1)" : "#E8EAF0",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = isDark ? "rgba(201,146,42,0.5)" : "#C9922A";
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = isDark
          ? "0 12px 32px rgba(0,0,0,0.3)"
          : "0 12px 32px rgba(13,31,53,0.08)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = isDark ? "rgba(255,255,255,0.1)" : "#E8EAF0";
        el.style.transform = "none";
        el.style.boxShadow = "none";
      }}
    >
      <div className="text-3xl">{icon}</div>

      <div>
        <h3
          className="font-serif text-lg font-bold mb-2"
          style={{ color: isDark ? "#FFFFFF" : "#0D1F35" }}
        >
          {name}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "#5A6070" }}>
          {description}
        </p>
      </div>

      {features && features.length > 0 && (
        <ul className="flex flex-col gap-2 mt-1">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-sm"
              style={{ color: isDark ? "rgba(255,255,255,0.7)" : "#5A6070" }}
            >
              <span style={{ color: "#E8B84B", flexShrink: 0 }}>◆</span>
              {f}
            </li>
          ))}
        </ul>
      )}

      {price && (
        <div className="mt-auto pt-4 border-t" style={{ borderColor: isDark ? "rgba(255,255,255,0.08)" : "#E8EAF0" }}>
          <span className="font-serif text-xl font-bold" style={{ color: "#C9922A" }}>
            {price}
          </span>
        </div>
      )}

      {href && (
        <div className="mt-auto">
          <span
            className="inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200"
            style={{ color: "#C9922A" }}
          >
            Learn more →
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full no-underline">
        {card}
      </Link>
    );
  }
  return card;
}
