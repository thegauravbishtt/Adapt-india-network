"use client";

import React from "react";
import Link from "next/link";

export default function BuildFoundationCTA() {
  return (
    <section className="w-full bg-[#03060f] text-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 select-none relative overflow-hidden border-t border-zinc-800/80">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-red-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[250px] bg-red-600/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-14 relative z-10">
        
        {/* Left Column: Main Impactful Heading */}
        <div className="lg:max-w-xl text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-white font-sans leading-[1.2]">
            To build a strong digital foundation for tomorrow,{" "}
            <span className="text-[#E31E24] font-medium">talk to us today</span>
          </h2>
        </div>

        {/* Right Column: Explanatory Subtext & Pill CTA Button */}
        <div className="lg:max-w-md flex flex-col items-start text-left">
          <p className="text-zinc-300 text-sm sm:text-[15px] font-normal leading-relaxed mb-7">
            Simplify your IT Infrastructure, uncomplicate your processes and make your enterprise&rsquo;s digital foundation, business and future-ready.
          </p>

          {/* Capsule Pill Button with Outer Ring Matching Reference Design */}
          <div className="inline-flex p-1 rounded-full border border-red-500/40 bg-red-950/20 shadow-lg shadow-red-950/40">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#E31E24] hover:bg-[#c9171d] text-white font-medium text-sm sm:text-[15px] tracking-wide transition-all duration-200 active:scale-95 shadow-md shadow-red-600/30"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}
