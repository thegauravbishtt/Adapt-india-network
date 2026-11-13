"use client";

import React from "react";
import Link from "next/link";

export default function BuildFoundationCTA() {
  return (
    <section className="w-full bg-[#02050b] text-white border-t border-zinc-800/80 px-6 py-16 sm:py-20 select-none">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
          Looking for a reliable internet connection for your office?
        </h2>
        <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
          Talk to our team about leased lines, broadband, SD-WAN or Wi-Fi for your business.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contact"
            className="w-full sm:w-auto rounded-md bg-[#E31E24] hover:bg-[#c9171d] px-7 py-3 text-[15px] font-semibold transition-colors"
          >
            Contact Us
          </Link>
          <a
            href="tel:+918287479961"
            className="w-full sm:w-auto rounded-md border border-zinc-600 hover:border-white px-7 py-3 text-[15px] font-semibold transition-colors"
          >
            Call +91 82874 79961
          </a>
        </div>
      </div>
    </section>
  );
}
