import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-32"
      style={{ background: "#0D1F35" }}
    >
      <div
        className="text-xs font-bold uppercase tracking-widest mb-4"
        style={{ color: "#E8B84B" }}
      >
        404 — Page Not Found
      </div>
      <h1
        className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
      >
        That Call Didn&apos;t Get Through
      </h1>
      <p
        className="text-base leading-relaxed max-w-md mb-10"
        style={{ color: "rgba(255,255,255,0.6)" }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
        get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm transition-all duration-200"
          style={{ background: "#C9922A", color: "#0D1F35" }}
        >
          Book a Free Demo Call →
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-medium text-sm transition-all duration-200"
          style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
