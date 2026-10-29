"use client";

import React, { useState, useEffect } from "react";

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
    service: "SEO & Search Optimization",
    requirement: "",
  });

  // Open after 3 seconds on page load
  useEffect(() => {
    try {
      const closed = sessionStorage.getItem("owlio_modal_closed");
      if (closed === "true") return;
    } catch {
      // Storage unavailable
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
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

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full max-w-md bg-white text-zinc-900 rounded-xl shadow-xl border border-zinc-200 overflow-hidden flex flex-col">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 p-1.5 text-zinc-400 hover:text-zinc-700 rounded-md hover:bg-zinc-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 sm:p-7">
          {isSubmitted ? (
            <div className="py-6 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">
                Thank You
              </h3>
              <p className="text-sm text-zinc-600 mb-5">
                We have received your details and our team will get in touch with you shortly.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="px-5 py-2 bg-zinc-900 hover:bg-black text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <div>
              {/* Heading */}
              <div className="mb-5 pr-6">
                <h2 className="text-xl font-bold text-zinc-900">
                  Get in Touch
                </h2>
                <p className="text-xs text-zinc-500 mt-1">
                  Leave your details below and we will contact you shortly.
                </p>
              </div>

              {errorMessage && (
                <div className="mb-3.5 p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                  {errorMessage}
                </div>
              )}

              {/* Simple Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 bg-white border border-zinc-300 rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 bg-white border border-zinc-300 rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-24 px-2 py-2 bg-white border border-zinc-300 rounded-lg text-xs text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors shrink-0"
                    >
                      <option value="+91">+91 (IN)</option>
                      <option value="+1">+1 (US)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+971">+971 (UAE)</option>
                      <option value="+61">+61 (AU)</option>
                      <option value="+65">+65 (SG)</option>
                      <option value="+49">+49 (DE)</option>
                      <option value="+33">+33 (FR)</option>
                    </select>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="flex-1 px-3 py-2 bg-white border border-zinc-300 rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors"
                    />
                  </div>
                </div>



                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Message <span className="text-zinc-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    placeholder="Brief description of your project..."
                    className="w-full px-3 py-2 bg-white border border-zinc-300 rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-4 bg-zinc-900 hover:bg-black disabled:opacity-50 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer text-center"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
