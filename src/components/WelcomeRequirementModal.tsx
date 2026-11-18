"use client";

import React, { useState, useEffect } from "react";
import { leadProducts } from "../data/leadProducts";
import { emptyAddress, fullAddress } from "../data/address";

export default function WelcomeRequirementModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    ...emptyAddress,
    service: "",
    requirement: "",
  });

  /*
   * When to show the enquiry popup.
   * Google can rank pages lower when a popup covers the content right after a visitor
   * arrives from search, especially on mobile. So:
   *  - never on phones (the WhatsApp "Talk to us" button covers leads there);
   *  - on larger screens, only after the visitor has read about 60% of the page
   *    or stayed 30 seconds, and once per visit.
   */
  useEffect(() => {
    try {
      const closed = sessionStorage.getItem("owlio_modal_closed");
      if (closed === "true") return;
    } catch {
      // Storage unavailable
    }
    if (window.matchMedia("(max-width: 767px)").matches) return;

    let opened = false;
    const open = () => {
      if (opened) return;
      opened = true;
      setIsOpen(true);
      cleanup();
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= 0.6) open();
    };
    const timer = setTimeout(open, 30000);
    window.addEventListener("scroll", onScroll, { passive: true });
    const cleanup = () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
    return cleanup;
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem("owlio_modal_closed", "true");
    } catch {
      // Storage unavailable
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          countryCode: formData.countryCode,
          service: formData.service,
          location: fullAddress(formData),
          companyName: "Website Visitor",
          requirement: formData.requirement || `Inquiry for ${formData.service}`,
          source: "Website Popup Form",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setIsSubmitted(true);
      try {
        sessionStorage.setItem("owlio_modal_closed", "true");
      } catch {
        // Storage unavailable
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const input =
    "w-full px-3 py-2.5 bg-white border border-zinc-300 rounded-md text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#E31E24] focus:ring-1 focus:ring-[#E31E24] transition-colors";
  const label = "block text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-600 mb-1";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
      aria-modal="true"
      role="dialog"
      aria-label="Share your requirement"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-xl shadow-2xl border border-zinc-800 grid md:grid-cols-[0.85fr_1.15fr]">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 md:bg-zinc-100 text-zinc-500 hover:text-white hover:bg-[#E31E24] transition-colors cursor-pointer"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Brand panel */}
        <div className="relative bg-[#0c0c0d] text-white p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#E31E24]/20 blur-3xl pointer-events-none" />
          <div className="relative">
            <span className="font-mono text-[11px] font-extrabold tracking-widest text-[#E31E24] uppercase">
              {"// "}Free feasibility check
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black font-display uppercase leading-tight tracking-tight">
              Get the right connection for your office
            </h2>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              Share your address and we'll check which carriers already reach your building, then send you options.
            </p>
            <ul className="mt-5 hidden md:flex flex-col gap-2.5 text-sm text-zinc-300">
              {[
                "Leased line, SD-WAN, MPLS & broadband",
                "Tata Tele Business Services & ACT Fibernet",
                "99.5% uptime SLA in writing",
                "One team for setup, support & billing",
              ].map((t) => (
                <li key={t} className="flex gap-2.5 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E31E24] shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mt-6 hidden md:block border-t border-white/10 pt-4 text-sm">
            <p className="text-zinc-400">Prefer to talk?</p>
            <a href="tel:+918287479961" className="font-bold text-white hover:text-[#E31E24]">
              +91 82874 79961
            </a>
            <span className="text-zinc-500"> · </span>
            <a
              href="https://wa.me/918287479961"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-[#E31E24]"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Form panel */}
        <div className="p-5 sm:p-7">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <div className="w-14 h-14 rounded-full bg-[#E31E24]/10 text-[#E31E24] flex items-center justify-center mb-4 text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-black font-display uppercase text-zinc-900 mb-1">Thank you</h3>
              <p className="text-sm text-zinc-600 mb-6 max-w-xs">
                We've received your details. Our team will call you to confirm the requirement.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 bg-[#E31E24] hover:bg-[#c9171d] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-3 gap-y-3 text-left">
              <div className="col-span-2 sm:col-span-1">
                <label className={label}>Name *</label>
                <input type="text" required name="name" value={formData.name} onChange={handleChange} placeholder="Your name" autoComplete="name" className={input} />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className={label}>Phone *</label>
                <div className="flex gap-2">
                  <select
                    aria-label="Country code"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-[74px] px-1.5 py-2.5 bg-white border border-zinc-300 rounded-md text-xs text-zinc-900 focus:outline-none focus:border-[#E31E24] shrink-0"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+971">+971</option>
                    <option value="+61">+61</option>
                    <option value="+65">+65</option>
                    <option value="+49">+49</option>
                    <option value="+33">+33</option>
                  </select>
                  <input type="tel" required name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" autoComplete="tel" className={input} />
                </div>
              </div>

              <div className="col-span-2">
                <label className={label}>Email *</label>
                <input type="email" required name="email" value={formData.email} onChange={handleChange} placeholder="name@company.com" autoComplete="email" className={input} />
              </div>

              {/* Full address: needed to check if we can serve that location */}
              <div className="col-span-2">
                <label className={label}>Office address *</label>
                <input
                  type="text"
                  name="address"
                  required
                  minLength={5}
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Building / office no., street, area"
                  autoComplete="street-address"
                  className={input}
                />
              </div>

              <div className="col-span-2 grid grid-cols-3 gap-3">
                <div>
                  <label className={label}>Landmark</label>
                  <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} placeholder="Optional" autoComplete="off" className={input} />
                </div>
                <div>
                  <label className={label}>City *</label>
                  <input type="text" name="city" required value={formData.city} onChange={handleChange} placeholder="City" autoComplete="address-level2" className={input} />
                </div>
                <div>
                  <label className={label}>PIN *</label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    inputMode="numeric"
                    pattern="[0-9]{6}"
                    maxLength={6}
                    title="6-digit PIN code"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="6 digits"
                    autoComplete="postal-code"
                    className={input}
                  />
                </div>
              </div>

              <div className="col-span-2">
                <label className={label}>Service *</label>
                <select aria-label="Service interested in" required name="service" value={formData.service} onChange={handleChange} className={input}>
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
              </div>

              <div className="col-span-2">
                <label className={label}>Message <span className="normal-case font-normal text-zinc-400">(optional)</span></label>
                <textarea
                  rows={2}
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  placeholder="Speed, number of users or sites, backup needed..."
                  className={`${input} resize-none`}
                />
              </div>

              {errorMessage && (
                <p role="alert" className="col-span-2 p-2.5 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs">
                  {errorMessage} You can also call +91 82874 79961 or WhatsApp us.
                </p>
              )}

              <div className="col-span-2 pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-[#E31E24] hover:bg-[#c9171d] disabled:opacity-60 text-white font-bold text-sm uppercase tracking-wider rounded-md transition-colors cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Get a free quote →"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
