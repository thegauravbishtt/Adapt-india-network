"use client";

import React from "react";

const platforms = [
  "Google",
  "Meta",
  "YouTube",
  "Shopify",
  "HubSpot",
  "LinkedIn",
];

export default function PlatformsScaleSection() {
  return (
    <section className="w-full bg-[#0c0c0e] text-white border-b border-zinc-800/80 select-none py-10 sm:py-14 lg:py-16 px-5 sm:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Top Gold Kicker Label matching Reference */}
        <span className="text-[#fac917] font-sans font-extrabold text-[10.5px] sm:text-[11.5px] tracking-[0.22em] uppercase mb-5 sm:mb-6 block">
          WHERE WE SCALE
        </span>

        {/* Platforms Row with Bold Typography & Thin Vertical Dividers */}
        <div className="w-full flex flex-wrap items-center justify-center gap-y-3 sm:gap-y-4">
          {platforms.map((platform, idx) => (
            <React.Fragment key={platform}>
              <div className="px-3 xs:px-4 sm:px-5 md:px-6 lg:px-7 py-0.5">
                <span className="font-sans font-extrabold text-[17px] xs:text-[19px] sm:text-[22px] md:text-[24px] lg:text-[26px] text-white tracking-tight hover:text-[#fac917] transition-colors duration-200">
                  {platform}
                </span>
              </div>
              {idx < platforms.length - 1 && (
                <div 
                  className="hidden sm:block h-5 sm:h-6 w-[1px] bg-zinc-700/80 self-center" 
                  aria-hidden="true" 
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Subtitle Paragraph matching Reference */}
        <p className="mt-5 sm:mt-6 max-w-xl mx-auto text-zinc-400 text-xs sm:text-[13px] md:text-[13.5px] font-normal leading-[1.65] text-center px-4">
          Six ecosystems, one team. A brand that scales on Google rarely stops there, and paid social, search algorithms, CRM retention, and custom web infrastructure each run on completely different rules.
        </p>

      </div>
    </section>
  );
}
