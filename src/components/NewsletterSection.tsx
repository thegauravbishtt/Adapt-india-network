"use client";

import React, { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setIsSubmitted(true);
    }
  };

  return (
    <section
      id="newsletter"
      className="w-full bg-[#fbea3d] text-black py-10 sm:py-12 lg:py-14 px-4 sm:px-8 lg:px-14 xl:px-20 select-none overflow-hidden relative border-t border-black/10"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-4 sm:gap-5 w-full">
        
        {/* Top Tag */}
        <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-black">
          <span className="w-2 h-2 rounded-full bg-black inline-block"></span>
          <span>SUBSCRIBE OUR NEWSLETTER</span>
        </div>

        {/* Input Form & Button */}
        {isSubmitted ? (
          <div className="py-4 sm:py-6 flex items-center gap-3 text-black">
            <div className="w-8 h-8 rounded-full bg-black text-[#fbea3d] flex items-center justify-center font-bold text-base">
              ✓
            </div>
            <div>
              <p className="text-lg sm:text-xl font-black font-display tracking-tight text-black">
                You're all set!
              </p>
              <p className="text-xs sm:text-sm font-medium text-black/80 font-sans">
                Thank you for subscribing. We'll send insights straight to your inbox.
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-stretch md:items-end justify-between gap-4 sm:gap-6 pt-1"
          >
            {/* Underlined Email Input */}
            <div className="flex-1 relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL"
                className="w-full bg-transparent border-b-2 border-black text-xl sm:text-2xl md:text-3xl font-display font-extrabold tracking-tight text-black placeholder:text-black/40 placeholder:font-display placeholder:font-bold pb-2 sm:pb-2.5 focus:outline-none focus:border-black transition-colors uppercase"
              />
            </div>

            {/* Subscribe Pill Button */}
            <button
              type="submit"
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-black text-[#fbea3d] hover:bg-white hover:text-black border-2 border-black font-display font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-95 shadow-md flex items-center justify-center gap-2 group"
            >
              <span>SUBSCRIBE NOW</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 font-normal">→</span>
            </button>
          </form>
        )}

        {/* Legal Notice */}
        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-black/75 font-medium pt-0.5">
          <svg
            className="w-3.5 h-3.5 shrink-0 text-black/80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" d="M12 16v-4m0-4h.01" />
          </svg>
          <p className="font-sans">
            By sending the form you agree to the{" "}
            <a href="#terms" className="underline font-semibold hover:text-black">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#privacy" className="underline font-semibold hover:text-black">
              Privacy Policy
            </a>
            .
          </p>
        </div>

      </div>
    </section>
  );
}
