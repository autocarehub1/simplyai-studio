"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "#0D1F35",
        borderColor: "rgba(201, 146, 42, 0.15)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          {/* Brand */}
          <div>
            <div className="mb-3">
              <Image src="/logo.png" alt="SimplyAI Studio" width={140} height={56} className="h-10 w-auto" />
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
              Intelligent builds for ambitious businesses. Fast, beautiful websites and AI-powered automation for local businesses in San Antonio.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:4322022150"
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "#E8B84B" }}
              >
                (432) 202-2150
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#C9922A" }}>
              Navigation
            </div>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E8B84B")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#C9922A" }}>
              Contact
            </div>
            <ul className="flex flex-col gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
              <li>
                <a href="mailto:elerujaemmy@yahoo.com" className="transition-colors duration-200 hover:text-gold-light" style={{ color: "rgba(255,255,255,0.55)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E8B84B")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  elerujaemmy@yahoo.com
                </a>
              </li>
              <li>
                <a href="tel:4322022150"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E8B84B")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  (432) 202-2150
                </a>
              </li>
              <li>San Antonio, Texas</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-200"
              style={{ background: "#C9922A", color: "#0D1F35" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#E8B84B")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#C9922A")}
            >
              Get a Free Quote →
            </Link>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} SimplyAI Studio · San Antonio, Texas
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            Intelligent Builds for Ambitious Businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
