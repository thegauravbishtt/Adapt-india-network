"use client";

import React, { useState } from "react";
import { leadProducts } from "../data/leadProducts";
import { emptyAddress, fullAddress } from "../data/address";

interface NewsletterSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  categoryLabel?: string;
}

export default function NewsletterSection({
  title = "Ready to get your enterprise network upgraded?",
  subtitle = "Tell us about your infrastructure and where you're facing bottlenecks. We'll follow up to schedule your free strategy call.",
  buttonText = "Request My Strategy Call",
}: NewsletterSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    ...emptyAddress,
    service: "",
    requirement: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          location: fullAddress(formData),
          countryCode: "+91",
          service: formData.service || "Enterprise Network Strategy Call",
          source: "Bottom Strategy Call Section",
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="strategy-call"
      className="w-full bg-[#FAF9F5] text-zinc-900 py-12 sm:py-16 px-4 sm:px-8 lg:px-12 border-t border-zinc-200/80 relative"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* LEFT COLUMN: heading, contact details and next steps (stays in view beside the form on desktop) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col text-left">
          <span className="text-[11px] font-mono font-bold text-[#E31E24] uppercase tracking-wider block mb-2">
            // FREE CONSULTATION &amp; FEASIBILITY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold font-sans text-zinc-950 tracking-tight leading-[1.15]">
            {title}
          </h2>
          <p className="text-zinc-600 text-sm leading-relaxed mt-3 max-w-md">{subtitle}</p>

          <dl className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 mt-7 pt-6 border-t border-zinc-200/80">
            <div>
              <dt className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-1">Phone</dt>
              <dd>
                <a href="tel:+918287479961" className="text-sm sm:text-base font-bold text-zinc-900 hover:text-[#E31E24] transition-colors">
                  +91 82874 79961
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-1">Email</dt>
              <dd>
                <a href="mailto:info@adapt-india.net" className="text-sm sm:text-base font-bold text-zinc-900 hover:text-[#E31E24] transition-colors">
                  info@adapt-india.net
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-1">Location</dt>
              <dd className="text-sm sm:text-base font-bold text-zinc-900">Paschim Vihar, New Delhi, India</dd>
            </div>
          </dl>

          <div className="hidden lg:block mt-8 pt-6 border-t border-zinc-200/80">
            <p className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-4">What happens next</p>
            <ol className="flex flex-col gap-4">
              {[
                ["We check your address", "We confirm which carriers can reach your building."],
                ["We call you", "A short call to understand your sites, users and applications."],
                ["You get a proposal", "Bandwidth, backup options and pricing in writing."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-3.5">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-[#E31E24] text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 leading-tight">{t}</p>
                    <p className="text-[13px] text-zinc-500 leading-snug mt-0.5">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* RIGHT COLUMN: form card */}
        <div className="lg:col-span-7 w-full">
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-[0_18px_40px_rgba(0,0,0,0.07)] overflow-hidden text-left">
            <div className="h-1.5 bg-[#E31E24]" />
            <div className="p-5 sm:p-7 lg:p-8">
              {isSubmitted ? (
                <div className="py-8 sm:py-12 text-center flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-red-50 text-[#E31E24] border border-[#E31E24]/30 flex items-center justify-center font-bold text-xl">
                    ✓
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 tracking-tight">Strategy Call Scheduled!</h3>
                  <p className="text-sm text-zinc-600 max-w-xs leading-relaxed">
                    Thank you, <strong className="text-zinc-900">{formData.name}</strong>. Our senior telecom solutions architect will contact you shortly to review your requirements.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 text-xs font-bold text-zinc-800 underline hover:text-[#E31E24] cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="mb-1">
                    <h3 className="text-lg font-extrabold text-zinc-950 tracking-tight">Request a free feasibility check</h3>
                    <p className="text-xs sm:text-[13px] text-zinc-500 mt-0.5">Fields marked * are required.</p>
                  </div>

                  {errorMessage && (
                    <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">{errorMessage}</div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Name" required>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your full name" autoComplete="name" className={inputCls} />
                    </Field>
                    <Field label="Company">
                      <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Your company name" autoComplete="organization" className={inputCls} />
                    </Field>
                    <Field label="Email" required>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="you@company.com" autoComplete="email" className={inputCls} />
                    </Field>
                    <Field label="Phone" required>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="10-digit mobile number" autoComplete="tel-national" className={inputCls} />
                    </Field>
                  </div>

                  {/* Full address: needed to check if we can serve that location */}
                  <Field label="Full Address" required>
                    <input type="text" name="address" required minLength={5} value={formData.address} onChange={handleChange} placeholder="Building / office no., street, area" autoComplete="street-address" className={inputCls} />
                  </Field>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <Field label="Landmark" hint="(optional)">
                        <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} placeholder="e.g. near Metro Station" autoComplete="off" className={inputCls} />
                      </Field>
                    </div>
                    <Field label="City" required>
                      <input type="text" name="city" required value={formData.city} onChange={handleChange} placeholder="City" autoComplete="address-level2" className={inputCls} />
                    </Field>
                    <Field label="PIN Code" required>
                      <input type="text" name="pincode" required inputMode="numeric" pattern="[0-9]{6}" maxLength={6} title="6-digit PIN code" value={formData.pincode} onChange={handleChange} placeholder="6-digit PIN" autoComplete="postal-code" className={inputCls} />
                    </Field>
                  </div>

                  <Field label="Service" required>
                    <select name="service" required value={formData.service} onChange={handleChange} className={inputCls}>
                      <option value="">Choose a service</option>
                      {leadProducts.map((g) => (
                        <optgroup key={g.group} label={g.group}>
                          {g.items.map((it) => (
                            <option key={it} value={it}>
                              {it}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </Field>

                  <Field label="Tell us about your requirements">
                    <textarea name="requirement" rows={3} value={formData.requirement} onChange={handleChange} placeholder="Number of locations, bandwidth needed, backup or SLA requirements..." className={`${inputCls} resize-none`} />
                  </Field>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-1 py-3 px-6 rounded-full bg-[#E31E24] hover:bg-[#c9171d] text-white font-extrabold text-sm tracking-wide transition-all shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? <span>Submitting...</span> : <span>{buttonText} →</span>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full h-11 bg-[#f6f6f6] border border-zinc-200 rounded-lg px-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 transition-all [&:is(textarea)]:h-auto [&:is(textarea)]:py-2.5";

/** Label + control, with a red asterisk for required fields. */
function Field({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-bold text-zinc-800 mb-1.5">
        {label}
        {required && <span className="text-[#E31E24]"> *</span>}
        {hint && <span className="font-normal text-zinc-400"> {hint}</span>}
      </span>
      {children}
    </label>
  );
}
