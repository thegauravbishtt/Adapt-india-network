"use client";

import React from "react";

export default function EnterpriseSolutionsTabsSection() {
  return (
    <section className="w-full select-none relative overflow-hidden bg-[#0B1220] text-white border-b border-[#1E293B]">
      
      {/* ============================================================ */}
      {/* DESKTOP VIEW (>= lg) - Untouched Desktop Layout              */}
      {/* ============================================================ */}
      <div className="hidden lg:block w-full py-16 lg:py-24 px-8 lg:px-16 relative overflow-hidden">
        {/* Soft Ambient Depth Glows */}
        <div className="absolute top-0 left-1/4 -translate-y-1/3 w-[650px] h-[350px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 right-1/4 translate-y-1/3 w-[550px] h-[300px] bg-red-600/10 blur-[120px] pointer-events-none rounded-full" />

        {/* Halftone Dotted Globe with screen blend mode */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80 mix-blend-screen">
          <img
            src="/halftone-globe.jpg"
            alt="Halftone Dotted Globe Network"
            className="w-full max-w-5xl h-auto object-contain transform translate-y-6"
          />
        </div>

        {/* Top Centered Title */}
        <div className="relative z-10 text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-[44px] font-normal tracking-tight text-white font-sans leading-tight">
            A partner you can <span className="text-[#E31E24] font-medium">trust</span>
          </h2>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column (Span 6): Main Headline & 2 Fiber Stats */}
          <div className="col-span-6 flex flex-col items-start text-left">
            <h3 className="text-3xl lg:text-[40px] font-normal text-white font-sans leading-[1.25] mb-12 lg:mb-16">
              Pan-India presence.<br />
              Individually committed.
            </h3>

            <div className="flex items-start gap-12 lg:gap-16">
              {/* Stat 1 */}
              <div className="border-l-[3px] border-[#E31E24] pl-4 py-1">
                <div className="text-2xl lg:text-[34px] font-bold text-[#E31E24] font-sans tracking-tight leading-none">
                  1,50,000+ km
                </div>
                <p className="text-xs lg:text-[13px] text-slate-300 font-normal mt-2 leading-relaxed max-w-[170px]">
                  pan-India high-speed optical fiber backbone
                </p>
              </div>

              {/* Stat 2 */}
              <div className="border-l-[3px] border-[#E31E24] pl-4 py-1">
                <div className="text-2xl lg:text-[34px] font-bold text-[#E31E24] font-sans tracking-tight leading-none">
                  2,00,000+ km
                </div>
                <p className="text-xs lg:text-[13px] text-slate-300 font-normal mt-2 leading-relaxed max-w-[170px]">
                  extensive terrestrial fiber local loops
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Span 6): Two Floating Transparent Glass Cards */}
          <div className="col-span-6 flex flex-col items-end gap-6 relative">
            {/* Card 1 (Upper Right) */}
            <div className="w-full max-w-[340px] bg-[#0B1220]/35 backdrop-blur-[2px] border border-white/[0.14] rounded-2xl p-6 lg:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:border-white/30 hover:shadow-[0_16px_48px_rgba(0,0,0,0.45)] relative overflow-hidden transition-all duration-300">
              <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-5 text-slate-200">
                <svg className="w-5 h-5 text-slate-200" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <div className="text-3xl lg:text-[42px] font-bold text-[#E31E24] font-sans tracking-tight leading-none mb-2.5">
                99.5%
              </div>

              <p className="text-xs lg:text-[13px] text-slate-200 font-normal leading-relaxed">
                guaranteed backbone SLA backed by Tata Teleservices &amp; ACT Enterprise infrastructure
              </p>
            </div>

            {/* Card 2 (Lower Right, offset) */}
            <div className="w-full max-w-[340px] bg-[#0B1220]/35 backdrop-blur-[2px] border border-white/[0.14] rounded-2xl p-6 lg:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:border-white/30 hover:shadow-[0_16px_48px_rgba(0,0,0,0.45)] relative overflow-hidden mr-4 lg:mr-8 transition-all duration-300">
              <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-5 text-slate-200">
                <svg className="w-5 h-5 text-slate-200" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>

              <div className="text-3xl lg:text-[42px] font-bold text-[#E31E24] font-sans tracking-tight leading-none mb-2.5">
                150+
              </div>

              <p className="text-xs lg:text-[13px] text-slate-200 font-normal leading-relaxed">
                cities and major industrial corridors connected across India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE ONLY VIEW (< lg) - Exact Reference Mobile Layout      */}
      {/* ============================================================ */}
      <div className="block lg:hidden w-full py-12 px-5 sm:px-6 relative overflow-hidden">
        {/* Soft Ambient Depth Glows */}
        <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-blue-600/10 blur-[90px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 left-0 w-[220px] h-[220px] bg-red-600/10 blur-[80px] pointer-events-none rounded-full" />

        {/* Globe positioned in upper-right behind staggered cards matching reference */}
        <div className="absolute -right-8 sm:-right-4 top-8 sm:top-6 w-[330px] sm:w-[370px] h-[330px] sm:h-[370px] pointer-events-none opacity-85 mix-blend-screen overflow-hidden">
          <img
            src="/halftone-globe.jpg"
            alt="Halftone Dotted Globe Network"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="max-w-md mx-auto relative z-10 flex flex-col items-start text-left">
          {/* 1. Left-aligned Title */}
          <h2 className="text-[26px] sm:text-[30px] font-normal tracking-tight text-white font-sans leading-tight mb-7">
            A partner you can <span className="text-[#E31E24] font-medium">trust</span>
          </h2>

          {/* 2. Staggered Transparent Cards to see Earth */}
          <div className="w-full flex flex-col gap-3.5 my-1 relative">
            {/* Card 1 (Left aligned, ~82% width, transparent) */}
            <div className="w-[82%] max-w-[285px] self-start bg-[#0B1220]/30 backdrop-blur-[2px] border border-white/[0.15] rounded-2xl p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.35)] relative transition-all">
              <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-3 text-slate-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#E31E24] font-sans tracking-tight leading-none mb-1.5">
                99.5%
              </div>
              <p className="text-[11.5px] text-slate-200 font-normal leading-relaxed">
                guaranteed backbone SLA backed by Tata Teleservices &amp; ACT Enterprise infrastructure
              </p>
            </div>

            {/* Card 2 (Right aligned, ~82% width, shifted right, transparent) */}
            <div className="w-[82%] max-w-[285px] self-end bg-[#0B1220]/30 backdrop-blur-[2px] border border-white/[0.15] rounded-2xl p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.35)] relative -mt-3 transition-all">
              <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-3 text-slate-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#E31E24] font-sans tracking-tight leading-none mb-1.5">
                150+
              </div>
              <p className="text-[11.5px] text-slate-200 font-normal leading-relaxed">
                cities and major industrial corridors connected across India
              </p>
            </div>
          </div>

          {/* 3. Main Headline Underneath Staggered Cards */}
          <h3 className="text-[22px] sm:text-2xl font-normal text-white font-sans leading-[1.3] mt-8 mb-6">
            Pan-India presence.<br />
            Individually committed.
          </h3>

          {/* 4. Vertically Stacked Fiber Stats with Left Red Border Bar */}
          <div className="flex flex-col gap-5 w-full">
            {/* Stat 1 */}
            <div className="border-l-[3px] border-[#E31E24] pl-3.5 py-0.5">
              <div className="text-2xl font-bold text-[#E31E24] font-sans tracking-tight leading-none">
                1,50,000+ km
              </div>
              <p className="text-xs text-slate-300 font-normal mt-1.5 leading-relaxed">
                pan-India high-speed optical fiber backbone
              </p>
            </div>

            {/* Stat 2 */}
            <div className="border-l-[3px] border-[#E31E24] pl-3.5 py-0.5">
              <div className="text-2xl font-bold text-[#E31E24] font-sans tracking-tight leading-none">
                2,00,000+ km
              </div>
              <p className="text-xs text-slate-300 font-normal mt-1.5 leading-relaxed">
                extensive terrestrial fiber local loops
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* VERIFIED & RECOGNIZED - JUSTDIAL CARDS (jd.png & jd2.png)   */}
      {/* ============================================================ */}
      <div className="w-full pt-10 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 border-t border-[#1E293B]/70 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Section Sub-badge and Heading */}
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24]" />
            <span className="text-[#E31E24] font-mono font-bold text-[10.5px] uppercase tracking-[0.2em]">
              JUSTDIAL ACCREDITATION
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-normal text-white text-center tracking-tight mb-7 sm:mb-9">
            Verified &amp; <span className="text-[#E31E24] font-medium">Recognized</span>
          </h3>

          {/* Compact 2 Cards Grid with short Justdial descriptions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 w-full max-w-xl mx-auto">
            {/* Card 1: Justdial Genuine Business */}
            <div className="bg-[#060B14] border border-[#1E293B] hover:border-[#E31E24]/60 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group p-2.5 sm:p-3">
              <div className="w-full aspect-[4/3] bg-white rounded-lg sm:rounded-xl overflow-hidden p-2 flex items-center justify-center">
                <img
                  src="/jd.png"
                  alt="Adapt India Network Justdial Genuine Business Trust Stamp"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-3 sm:p-3.5 flex flex-col gap-1 text-center sm:text-left">
                <h4 className="text-white font-bold text-sm sm:text-[15px] leading-snug">
                  Justdial Genuine Business
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed font-normal">
                  Awarded the official Justdial Trust Stamp for verified authenticity and reliable enterprise telecom connectivity in Delhi NCR.
                </p>
              </div>
            </div>

            {/* Card 2: Justdial Users' Choice 2026 */}
            <div className="bg-[#060B14] border border-[#1E293B] hover:border-[#E31E24]/60 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group p-2.5 sm:p-3">
              <div className="w-full aspect-[4/3] bg-white rounded-lg sm:rounded-xl overflow-hidden p-2 flex items-center justify-center">
                <img
                  src="/jd2.png"
                  alt="Adapt India Network Justdial Users Choice 2026"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-3 sm:p-3.5 flex flex-col gap-1 text-center sm:text-left">
                <h4 className="text-white font-bold text-sm sm:text-[15px] leading-snug">
                  Justdial Users&apos; Choice 2026
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed font-normal">
                  Voted top telecom &amp; leased line partner by verified Justdial enterprise customers with a 4.5-star rating.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
