"use client";

import React, { useState } from "react";

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
    companyName: "",
    requirement: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          service: "Enterprise Network Strategy Call",
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
      className="w-full bg-[#FAF9F5] text-zinc-900 py-10 sm:py-14 px-4 sm:px-8 lg:px-12 border-t border-zinc-200/80 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* LEFT COLUMN: Headings and Direct Contact Details */}
        <div className="lg:col-span-6 flex flex-col text-left">
          <span className="text-[11px] font-mono font-bold text-[#E31E24] uppercase tracking-wider block mb-2">
            // FREE CONSULTATION &amp; FEASIBILITY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold font-sans text-zinc-950 tracking-tight leading-[1.2]">
            {title}
          </h2>
          <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mt-2.5 max-w-md">
            {subtitle}
          </p>

          <div className="flex flex-col gap-4 mt-6 pt-4 border-t border-zinc-200/70">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase block mb-0.5">
                PHONE
              </span>
              <a
                href="tel:+918287479961"
                className="text-sm sm:text-base font-bold text-zinc-900 hover:text-[#E31E24] transition-colors"
              >
                +91 82874 79961
              </a>
            </div>

            <div>
              <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase block mb-0.5">
                EMAIL
              </span>
              <a
                href="mailto:info@adapt-india.net"
                className="text-sm sm:text-base font-bold text-zinc-900 hover:text-[#E31E24] transition-colors"
              >
                info@adapt-india.net
              </a>
            </div>

            <div>
              <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase block mb-0.5">
                LOCATION
              </span>
              <p className="text-sm sm:text-base font-bold text-zinc-900">
                Saket District Centre, New Delhi, India
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Layered Offset Form Card (Scaled down, Logo Red Accent) */}
        <div className="lg:col-span-6 w-full max-w-md mx-auto lg:ml-auto relative">
          
          {/* Offset Background Accent Card (Logo Red) */}
          <div className="absolute -top-2 -right-2 sm:-top-3.5 sm:-right-3.5 w-full h-full rounded-[22px] sm:rounded-[26px] bg-[#E31E24] z-0 shadow-sm transition-transform"></div>

          {/* Foreground Form Card */}
          <div className="relative z-10 bg-white rounded-[18px] sm:rounded-[22px] p-5 sm:p-7 shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-zinc-100 text-left">
            {isSubmitted ? (
              <div className="py-8 sm:py-10 text-center flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-red-50 text-[#E31E24] border border-[#E31E24]/30 flex items-center justify-center font-bold text-xl shadow-xs">
                  ✓
                </div>
                <h3 className="text-xl font-black text-zinc-900 tracking-tight">
                  Strategy Call Scheduled!
                </h3>
                <p className="text-xs text-zinc-600 max-w-xs leading-relaxed">
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
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-3.5">
                {errorMessage && (
                  <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-zinc-800 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full bg-[#f6f6f6] border border-zinc-200/80 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-800 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full bg-[#f6f6f6] border border-zinc-200/80 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-800 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className="w-full bg-[#f6f6f6] border border-zinc-200/80 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-800 mb-1">
                    Tell us about your requirements
                  </label>
                  <textarea
                    name="requirement"
                    rows={2}
                    value={formData.requirement}
                    onChange={handleChange}
                    placeholder="Network locations, required bandwidth, SLA needs..."
                    className="w-full bg-[#f6f6f6] border border-zinc-200/80 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-1.5 py-2.5 sm:py-3 px-6 rounded-full bg-[#E31E24] hover:bg-[#c9171d] text-white font-extrabold text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <span>{buttonText} →</span>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
