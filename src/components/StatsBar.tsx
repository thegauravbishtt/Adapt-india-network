"use client";

import React from "react";

const stats = [
  { value: "85+", label: "Specialists" },
  { value: "20+", label: "Industries" },
  { value: "18+", label: "Countries" },
  { value: "50+", label: "Five-star reviews" },
  { value: "2012", label: "Buzzing since" },
];

export default function StatsBar() {
  return (
    <section className="w-full bg-[#050507] text-white border-y border-zinc-800/80 relative overflow-hidden select-none py-6 sm:py-7 lg:py-8 px-5 sm:px-10 lg:px-16">
      
      {/* Subtle Background Keyword Matrix / Watermark on Right */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.12] hidden md:flex flex-col gap-1 text-[11px] lg:text-xs font-mono font-bold tracking-[0.35em] text-[#fac917] uppercase pr-6 lg:pr-12 text-right"
        aria-hidden="true"
      >
        <div>BRAND &nbsp; BUZZ &nbsp; REACH &nbsp; GROWTH &nbsp; SEO</div>
        <div>SEO &nbsp; ROAS &nbsp; VIRAL &nbsp; LEADS &nbsp; CTR &nbsp; CRO</div>
        <div>AEO &nbsp; GEO &nbsp; CPC &nbsp; CPM &nbsp; UGC &nbsp; KPI</div>
      </div>

      {/* Stats Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8 lg:gap-10">
          {stats.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 sm:gap-3 group">
              <span className="font-sans font-black text-2xl xs:text-[28px] sm:text-3xl lg:text-[36px] text-[#fac917] tracking-tight leading-none transition-transform group-hover:scale-105 duration-200">
                {item.value}
              </span>
              <span className="text-white text-xs sm:text-[13px] lg:text-sm font-semibold leading-tight max-w-[100px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
