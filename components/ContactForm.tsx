"use client";

import { useState } from "react";

const INDUSTRIES = [
  "Plumbing / HVAC",
  "Cleaning Services",
  "Landscaping / Lawn Care",
  "Junk Removal / Hauling",
  "Roofing / Construction",
  "Electrician / Handyman",
  "Food & Beverage",
  "Salon / Beauty",
  "Med Spa / Aesthetics",
  "Law Firm",
  "Real Estate",
  "Retail / E-Commerce",
  "Other Service Business",
];

const SERVICES = [
  "Starter Site ($1,800)",
  "Professional Site ($3,500+)",
  "Growth Package ($7,500+)",
  "Just a conversation / not sure yet",
];

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  business: string;
  industry: string;
  service: string;
  message: string;
}

const empty: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  business: "",
  industry: "",
  service: "",
  message: "",
};

const inputBase: React.CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "8px",
  padding: "0.75rem 1rem",
  fontSize: "0.875rem",
  color: "#FFFFFF",
  width: "100%",
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  fontSize: "0.8rem",
  fontWeight: 500,
  color: "rgba(255,255,255,0.7)",
  marginBottom: "0.375rem",
  display: "block",
};

const dropdownBg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23E8B84B' d='M6 8L0 0h12z'/%3E%3C/svg%3E")`;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");

  const set =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
      if (apiError) setApiError("");
    };

  const validate = (): boolean => {
    const required: (keyof FormState)[] = [
      "firstName", "lastName", "phone", "email", "business", "industry", "service",
    ];
    const next: Partial<FormState> = {};
    for (const key of required) {
      if (!form[key].trim()) next[key] = "Required";
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setApiError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("server error");
      setSubmitted(true);
    } catch {
      setApiError("Something went wrong. Please try again or call us at (432) 202-2150.");
    } finally {
      setSubmitting(false);
    }
  };

  const border = (field: keyof FormState) =>
    errors[field] ? "1px solid #C0392B" : "1px solid rgba(255,255,255,0.12)";

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderColor = "#C9922A");

  const onBlur =
    (field: keyof FormState) =>
    (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      (e.currentTarget.style.borderColor = errors[field] ? "#C0392B" : "rgba(255,255,255,0.12)");

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-10 text-center"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="font-serif text-2xl font-bold text-white mb-3">Application Received!</h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
          We&apos;ve sent a <strong className="text-white">Calendly booking link</strong> to{" "}
          <strong className="text-gold-light">{form.email}</strong>. Use it to pick a time for
          your free 20-minute discovery call.
        </p>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          Didn&apos;t receive it? Check your spam folder or call us at (432) 202-2150.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl p-6 md:p-8 flex flex-col gap-5"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
      noValidate
    >
      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>First Name *</label>
          <input type="text" value={form.firstName} onChange={set("firstName")} placeholder="John"
            style={{ ...inputBase, border: border("firstName") }} onFocus={onFocus} onBlur={onBlur("firstName")} />
          {errors.firstName && <p className="text-xs mt-1" style={{ color: "#C0392B" }}>{errors.firstName}</p>}
        </div>
        <div>
          <label style={labelStyle}>Last Name *</label>
          <input type="text" value={form.lastName} onChange={set("lastName")} placeholder="Smith"
            style={{ ...inputBase, border: border("lastName") }} onFocus={onFocus} onBlur={onBlur("lastName")} />
          {errors.lastName && <p className="text-xs mt-1" style={{ color: "#C0392B" }}>{errors.lastName}</p>}
        </div>
      </div>

      {/* Phone / Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Phone *</label>
          <input type="tel" value={form.phone} onChange={set("phone")} placeholder="(210) 555-0100"
            style={{ ...inputBase, border: border("phone") }} onFocus={onFocus} onBlur={onBlur("phone")} />
          {errors.phone && <p className="text-xs mt-1" style={{ color: "#C0392B" }}>{errors.phone}</p>}
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input type="email" value={form.email} onChange={set("email")} placeholder="john@yourbusiness.com"
            style={{ ...inputBase, border: border("email") }} onFocus={onFocus} onBlur={onBlur("email")} />
          {errors.email && <p className="text-xs mt-1" style={{ color: "#C0392B" }}>{errors.email}</p>}
        </div>
      </div>

      {/* Business */}
      <div>
        <label style={labelStyle}>Business Name *</label>
        <input type="text" value={form.business} onChange={set("business")} placeholder="Smith's Plumbing LLC"
          style={{ ...inputBase, border: border("business") }} onFocus={onFocus} onBlur={onBlur("business")} />
        {errors.business && <p className="text-xs mt-1" style={{ color: "#C0392B" }}>{errors.business}</p>}
      </div>

      {/* Industry */}
      <div>
        <label style={labelStyle}>Industry *</label>
        <select value={form.industry} onChange={set("industry")}
          style={{ ...inputBase, border: border("industry"), appearance: "none", backgroundImage: dropdownBg, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
          onFocus={onFocus} onBlur={onBlur("industry")}>
          <option value="" style={{ background: "#0D1F35" }}>Select your industry...</option>
          {INDUSTRIES.map((i) => <option key={i} value={i} style={{ background: "#0D1F35" }}>{i}</option>)}
        </select>
        {errors.industry && <p className="text-xs mt-1" style={{ color: "#C0392B" }}>{errors.industry}</p>}
      </div>

      {/* Service */}
      <div>
        <label style={labelStyle}>Service Needed *</label>
        <select value={form.service} onChange={set("service")}
          style={{ ...inputBase, border: border("service"), appearance: "none", backgroundImage: dropdownBg, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
          onFocus={onFocus} onBlur={onBlur("service")}>
          <option value="" style={{ background: "#0D1F35" }}>Select a service...</option>
          {SERVICES.map((s) => <option key={s} value={s} style={{ background: "#0D1F35" }}>{s}</option>)}
        </select>
        {errors.service && <p className="text-xs mt-1" style={{ color: "#C0392B" }}>{errors.service}</p>}
      </div>

      {/* Message */}
      <div>
        <label style={labelStyle}>Message (optional)</label>
        <textarea value={form.message} onChange={set("message")}
          placeholder="Share any details about your business, competitors you like, or specific features you need..."
          rows={4} style={{ ...inputBase, resize: "vertical", minHeight: "96px" }}
          onFocus={onFocus} onBlur={onBlur("message")} />
      </div>

      {/* API error */}
      {apiError && (
        <div className="rounded-lg px-4 py-3 text-sm" style={{ background: "rgba(192,57,43,0.15)", border: "1px solid rgba(192,57,43,0.3)", color: "#ff8a7a" }}>
          {apiError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 rounded-xl font-bold text-base transition-all duration-200 mt-1 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: "#C9922A", color: "#0D1F35" }}
        onMouseEnter={(e) => { if (!submitting) { e.currentTarget.style.background = "#E8B84B"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,146,42,0.35)"; } }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "#C9922A"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
      >
        {submitting ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending…
          </>
        ) : (
          "Submit — We'll Send Your Booking Link →"
        )}
      </button>
      <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
        After submitting, check your email for a Calendly link to book your free call.
      </p>
    </form>
  );
}
