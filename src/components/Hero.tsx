"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full bg-white text-zinc-950 pt-64 xs:pt-72 sm:pt-80 lg:pt-40 pb-56 xs:pb-64 sm:pb-72 lg:pb-28 px-5 sm:px-12 lg:px-16 xl:px-20 overflow-hidden border-b border-zinc-200 select-none min-h-[105vh] xs:min-h-[110vh] sm:min-h-[115vh] lg:min-h-[620px] flex flex-col justify-center">
      
      {/* 1. MOBILE ONLY: Vibrant Yellow and Deep Black Geometric Lightning on Mobile */}
      <svg
        viewBox="0 0 390 600"
        fill="none"
        preserveAspectRatio="none"
        className="block md:hidden absolute inset-0 w-full h-full pointer-events-none z-0 select-none"
      >
        {/* Vibrant Yellow Lightning Polygon on Right */}
        <path
          d="M 155 600 L 230 380 L 190 380 L 255 0 L 390 0 L 390 600 Z"
          fill="#fac917"
        />
        {/* Deep Black Lightning Polygon on Right Edge */}
        <path
          d="M 285 600 L 340 360 L 315 360 L 340 0 L 390 0 L 390 600 Z"
          fill="#0c0c0e"
        />
      </svg>

      {/* 2. TABLET & DESKTOP ONLY: Refined Geometric Lightning with expanded White canvas */}
      <svg
        viewBox="0 0 1440 640"
        fill="none"
        preserveAspectRatio="none"
        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0 select-none"
      >
        {/* Center Vibrant Yellow Lightning Polygon (Shifted right for more white area) */}
        <path
          d="M 560 640 L 700 400 L 620 400 L 780 0 L 1440 0 L 1440 640 Z"
          fill="#fac917"
        />
        {/* Right Deep Black Lightning Polygon */}
        <path
          d="M 1060 640 L 1280 340 L 1180 340 L 1320 0 L 1440 0 L 1440 640 Z"
          fill="#0c0c0e"
        />
      </svg>

      <div className="w-full flex flex-col items-center lg:items-start relative z-10 max-w-6xl mx-auto">
        {/* Main Content Container */}
        <div className="flex flex-col items-center lg:items-start w-full text-center lg:text-left pointer-events-auto">
          
          {/* Top Squiggly Wave Lines */}
          <div className="flex flex-col gap-1.5 lg:gap-1 mb-3 sm:mb-4 lg:mb-3 text-zinc-950 w-fit mx-auto lg:mx-0">
            <svg className="w-12 xs:w-14 lg:w-[46px] h-auto" viewBox="0 0 46 6.5" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round">
              <path d="M 2 3.2 Q 5 0.5, 8 3.2 T 14 3.2 T 20 3.2 T 26 3.2 T 32 3.2 T 38 3.2 T 44 3.2" />
            </svg>
            <svg className="w-12 xs:w-14 lg:w-[46px] h-auto" viewBox="0 0 46 6.5" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round">
              <path d="M 2 3.2 Q 5 0.5, 8 3.2 T 14 3.2 T 20 3.2 T 26 3.2 T 32 3.2 T 38 3.2 T 44 3.2" />
            </svg>
          </div>

          {/* Clean 2-Line Headline: Centered on Mobile, Left-Aligned on Desktop */}
          <h1 className="font-sans font-normal text-[45px] xs:text-[50px] sm:text-[60px] md:text-[64px] lg:text-[66px] xl:text-[74px] text-zinc-950 leading-[1.06] lg:leading-[1.07] tracking-[-0.03em] select-text text-center lg:text-left mx-auto lg:mx-0 max-w-full lg:max-w-none px-2 xs:px-3 sm:px-0">
            <span className="block">We build & scale</span>
            <span className="block">iconic brands online!</span>
          </h1>

          {/* Bottom Squiggly Wave Lines */}
          <div className="flex flex-col gap-1.5 lg:gap-1 mt-3 lg:mt-2 mb-4 lg:mb-3.5 mx-auto lg:mx-0 lg:ml-[380px] xl:ml-[440px] text-zinc-950 w-fit">
            <svg className="w-12 xs:w-14 lg:w-[46px] h-auto" viewBox="0 0 46 6.5" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round">
              <path d="M 2 3.2 Q 5 0.5, 8 3.2 T 14 3.2 T 20 3.2 T 26 3.2 T 32 3.2 T 38 3.2 T 44 3.2" />
            </svg>
            <svg className="w-12 xs:w-14 lg:w-[46px] h-auto" viewBox="0 0 46 6.5" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round">
              <path d="M 2 3.2 Q 5 0.5, 8 3.2 T 14 3.2 T 20 3.2 T 26 3.2 T 32 3.2 T 38 3.2 T 44 3.2" />
            </svg>
          </div>

          {/* Bottom Center (Mobile) / Left (Desktop) Minimal Little Owl Icon */}
          <div className="w-full mt-10 sm:mt-14 lg:mt-12 z-20 pointer-events-auto flex justify-center lg:justify-start">
            <div className="select-none flex items-center justify-center text-zinc-950">
              <svg width="26" height="26" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-7 lg:h-7 opacity-90 transition-transform duration-200 hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                {/* Top Owl Brow / Ears */}
                <path d="M 4.5 7.5 C 7.5 3.5, 16.5 3.5, 19.5 7.5" />
                {/* Left Eye */}
                <circle cx="8" cy="11.5" r="3.2" />
                {/* Right Eye */}
                <circle cx="16" cy="11.5" r="3.2" />
                {/* Center Bridge & Beak */}
                <path d="M 11.2 11.5 h 1.6" />
                <path d="M 12 12.5 v 2" />
                {/* Bottom Face Chin Arc */}
                <path d="M 6.2 15 C 8.5 19, 15.5 19, 17.8 15" />
              </svg>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
