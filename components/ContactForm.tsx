"use client";

import { useId, useState } from "react";

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

interface FormState {
  name: string;
  phone: string;
  businessType: string;
}

const empty: FormState = {
  name: "",
  phone: "",
  businessType: "",
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
  const idPrefix = useId();
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");

  const set =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
      if (apiError) setApiError("");
    };

  const validate = (): boolean => {
    const required: (keyof FormState)[] = ["name", "phone", "businessType"];
    const next: Partial<FormState> = {};
    for (const key of required) {
      if (!form[key].trim()) next[key] = "Required";
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
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `HTTP ${res.status}`);
      }
      setSubmitted(true);
    } catch (err) {
      console.error("[contact form]", err);
      setApiError("Something went wrong. Please try again or call us at (210) 978-6160.");
    } finally {
      setSubmitting(false);
    }
  };

  const border = (field: keyof FormState) =>
    errors[field] ? "1px solid #C0392B" : "1px solid rgba(255,255,255,0.12)";

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) =>
    (e.currentTarget.style.borderColor = "#C9922A");

  const onBlur =
    (field: keyof FormState) =>
    (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) =>
      (e.currentTarget.style.borderColor = errors[field] ? "#C0392B" : "rgba(255,255,255,0.12)");

  const nameId = `${idPrefix}-name`;
  const phoneId = `${idPrefix}-phone`;
  const businessTypeId = `${idPrefix}-business-type`;

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-10 text-center"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="text-5xl mb-4" aria-hidden="true">🎉</div>
        <h3 className="font-serif text-2xl font-bold text-white mb-3">Got it, thanks!</h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
          We&apos;ll call or text <strong className="text-gold-light">{form.phone}</strong> shortly.
          Want it locked in right now instead? Use the calendar above to pick your own time.
        </p>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          Prefer to just talk? Call us at (210) 978-6160.
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
      <div>
        <label htmlFor={nameId} style={labelStyle}>Your Name *</label>
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={set("name")}
          placeholder="John Smith"
          style={{ ...inputBase, border: border("name") }}
          onFocus={onFocus}
          onBlur={onBlur("name")}
        />
        {errors.name && <p className="text-xs mt-1" style={{ color: "#C0392B" }}>{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor={phoneId} style={labelStyle}>Phone *</label>
        <input
          id={phoneId}
          name="tel"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={set("phone")}
          placeholder="(210) 555-0100"
          style={{ ...inputBase, border: border("phone") }}
          onFocus={onFocus}
          onBlur={onBlur("phone")}
        />
        {errors.phone && <p className="text-xs mt-1" style={{ color: "#C0392B" }}>{errors.phone}</p>}
      </div>

      {/* Business type */}
      <div>
        <label htmlFor={businessTypeId} style={labelStyle}>Business Type *</label>
        <select
          id={businessTypeId}
          name="organization-type"
          autoComplete="organization-title"
          value={form.businessType}
          onChange={set("businessType")}
          style={{ ...inputBase, border: border("businessType"), appearance: "none", backgroundImage: dropdownBg, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
          onFocus={onFocus}
          onBlur={onBlur("businessType")}
        >
          <option value="" style={{ background: "#0D1F35" }}>Select your business type...</option>
          {INDUSTRIES.map((i) => <option key={i} value={i} style={{ background: "#0D1F35" }}>{i}</option>)}
        </select>
        {errors.businessType && <p className="text-xs mt-1" style={{ color: "#C0392B" }}>{errors.businessType}</p>}
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
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending…
          </>
        ) : (
          "Request a Callback →"
        )}
      </button>
      <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
        Or skip the form — book a time directly using the calendar above.
      </p>
    </form>
  );
}
