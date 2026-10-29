"use client";

import React from "react";

const enterpriseServices = [
  "SD-WAN",
  "Leased Line (ILL)",
  "Private MPLS",
  "Enterprise Broadband",
  "Cyber Security",
  "SIP Trunk",
  "Cloud Telephony",
];

export default function PlatformsScaleSection() {
  return (
    <section className="w-full bg-[#0c0c0e] text-white border-b border-zinc-800/80 select-none py-6 sm:py-8 lg:py-9 px-5 sm:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Top Kicker Label */}
        <span className="text-[#E31E24] font-sans font-bold text-[9.5px] sm:text-[10.5px] tracking-[0.2em] uppercase mb-3 sm:mb-3.5 block">
          CORE TELECOM &amp; ENTERPRISE NETWORKING INFRASTRUCTURE
        </span>

        {/* Services Row with Sleeker Compact Typography & Thin Dividers */}
        <div className="w-full flex flex-wrap items-center justify-center gap-y-2 sm:gap-y-2.5">
          {enterpriseServices.map((service, idx) => (
            <React.Fragment key={service}>
              <div className="px-2.5 xs:px-3 sm:px-3.5 md:px-4 lg:px-5 py-0.5">
                <span className="font-sans font-bold text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16.5px] text-zinc-100 tracking-tight hover:text-[#E31E24] transition-colors duration-200">
                  {service}
                </span>
              </div>
              {idx < enterpriseServices.length - 1 && (
                <div 
                  className="hidden sm:block h-3.5 sm:h-4 w-[1px] bg-zinc-700/70 self-center" 
                  aria-hidden="true" 
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Subtitle Paragraph */}
        <p className="mt-3.5 sm:mt-4 max-w-xl mx-auto text-zinc-400/90 text-[11px] sm:text-[12px] md:text-[12.5px] font-normal leading-[1.6] text-center px-4">
          From high-throughput dedicated leased lines (ILL) and private multi-site MPLS connections to automated SD-WAN orchestration and enterprise cyber defense, we deliver guaranteed 99.9% uptime for modern corporate operations.
        </p>

      </div>
    </section>
  );
}
