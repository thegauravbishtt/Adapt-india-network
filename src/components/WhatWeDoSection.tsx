"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function WhatWeDoSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-28 px-6 sm:px-12 lg:px-20 text-black select-none relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="flex flex-col items-start text-left mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-zinc-500 uppercase mb-3 block">
            {t.whatWeDo.tag}
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 font-display tracking-tight leading-tight">
            {t.whatWeDo.titleStart}
            <span className="relative inline-block whitespace-nowrap z-0">
              {t.whatWeDo.titleHighlight}
              <span className="absolute bottom-1.5 sm:bottom-2 left-0 w-full h-3 sm:h-4 bg-[#fbea3d] -z-10 rounded-xs"></span>
            </span>
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base font-medium max-w-xl leading-relaxed mt-4">
            {t.whatWeDo.subtitle}
          </p>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: The Industry Practice (Yellow Card) */}
          <div className="bg-[#fbea3d] rounded-3xl sm:rounded-[36px] p-8 sm:p-10 lg:p-12 flex flex-col justify-between border-2 border-black/10 shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-black/70 mb-3 block">
                {t.whatWeDo.card1.tag}
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-black font-display tracking-tight mb-3">
                {t.whatWeDo.card1.title}
              </h3>
              <p className="text-black/80 text-xs sm:text-sm font-medium leading-relaxed mb-8 max-w-md">
                {t.whatWeDo.card1.desc}
              </p>

              {/* Pills container */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-10">
                {t.whatWeDo.card1.pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full border border-black/40 text-xs sm:text-[13px] font-semibold text-black bg-transparent hover:bg-black hover:text-white transition-all cursor-default select-none"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Button: Explore Industries -> /industries */}
            <a
              href="/industries"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-extrabold hover:bg-zinc-800 transition-all self-start shadow-md cursor-pointer group-btn"
            >
              {t.whatWeDo.card1.btn}
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 font-normal">
                →
              </span>
            </a>
          </div>

          {/* Card 2: The Growth Practice (Digital & Performance - Patterned Card) */}
          <div className="bg-[#fcfcfd] rounded-3xl sm:rounded-[36px] p-8 sm:p-10 lg:p-12 flex flex-col justify-between border-2 border-zinc-200/90 shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            {/* Subtle grid pattern background */}
            <div 
              className="absolute inset-0 opacity-[0.04] pointer-events-none" 
              style={{ 
                backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
                backgroundSize: "24px 24px" 
              }}
            ></div>

            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3 block">
                {t.whatWeDo.card2.tag}
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-zinc-950 font-display tracking-tight mb-3">
                {t.whatWeDo.card2.title}
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm font-medium leading-relaxed mb-8 max-w-md">
                {t.whatWeDo.card2.desc}
              </p>

              {/* Pills container */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-10">
                {t.whatWeDo.card2.pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full border border-zinc-300 text-xs sm:text-[13px] font-semibold text-zinc-800 bg-white hover:border-black hover:text-black transition-all cursor-default select-none shadow-xs"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Button: Explore Digital -> /services */}
            <a
              href="/services"
              className="relative z-10 inline-flex items-center justify-center gap-2 bg-[#fbea3d] text-black px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-extrabold hover:bg-black hover:text-white hover:border-black border border-[#fbea3d] transition-all self-start shadow-md cursor-pointer group-btn"
            >
              {t.whatWeDo.card2.btn}
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 font-normal">
                →
              </span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
