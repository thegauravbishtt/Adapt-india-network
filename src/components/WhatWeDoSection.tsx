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
          <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-zinc-400 uppercase mb-3 block font-mono">
            {t.whatWeDo.tag}
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-zinc-950 font-display tracking-tight leading-[1.12]">
            {t.whatWeDo.titleStart}
            <span className="relative inline-block whitespace-nowrap z-0">
              {t.whatWeDo.titleHighlight}
              <span className="absolute bottom-1.5 sm:bottom-2 left-0 w-full h-2.5 sm:h-3.5 bg-[#E31E24]/25 -z-10 rounded-xs"></span>
            </span>
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base md:text-[17px] font-normal max-w-2xl leading-relaxed mt-4">
            {t.whatWeDo.subtitle}
          </p>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: The Industry Practice (Brand Red Card) */}
          <div className="bg-[#E31E24] text-white rounded-3xl sm:rounded-[36px] p-8 sm:p-10 lg:p-14 flex flex-col justify-between border-2 border-red-700/50 shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/80 mb-3.5 block">
                {t.whatWeDo.card1.tag}
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white font-display tracking-tight mb-4 leading-tight">
                {t.whatWeDo.card1.title}
              </h3>
              <p className="text-white/90 text-sm sm:text-base font-medium leading-relaxed mb-8 max-w-lg">
                {t.whatWeDo.card1.desc}
              </p>

              {/* Pills container */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-10">
                {t.whatWeDo.card1.pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full border border-white/40 text-xs sm:text-sm font-semibold text-white bg-transparent hover:bg-white hover:text-black transition-all cursor-default select-none"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Button: Explore Services -> /services */}
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-extrabold hover:bg-zinc-100 transition-all self-start shadow-md cursor-pointer group-btn"
            >
              {t.whatWeDo.card1.btn}
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 font-normal">
                →
              </span>
            </a>
          </div>

          {/* Card 2: The Growth Practice (Digital & Performance - Patterned Card) */}
          <div className="bg-[#fcfcfd] rounded-3xl sm:rounded-[36px] p-8 sm:p-10 lg:p-14 flex flex-col justify-between border-2 border-zinc-200/90 shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            {/* Subtle grid pattern background */}
            <div 
              className="absolute inset-0 opacity-[0.04] pointer-events-none" 
              style={{ 
                backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
                backgroundSize: "24px 24px" 
              }}
            ></div>

            <div className="relative z-10">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-500 mb-3.5 block">
                {t.whatWeDo.card2.tag}
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-zinc-950 font-display tracking-tight mb-4 leading-tight">
                {t.whatWeDo.card2.title}
              </h3>
              <p className="text-zinc-600 text-sm sm:text-base font-medium leading-relaxed mb-8 max-w-lg">
                {t.whatWeDo.card2.desc}
              </p>

              {/* Pills container */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-10">
                {t.whatWeDo.card2.pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full border border-zinc-300 text-xs sm:text-sm font-semibold text-zinc-800 bg-white hover:border-black hover:text-black transition-all cursor-default select-none shadow-xs"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Button: Explore Digital -> /services */}
            <a
              href="/services"
              className="relative z-10 inline-flex items-center justify-center gap-2 bg-[#E31E24] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-extrabold hover:bg-[#C4161C] border border-[#E31E24] transition-all self-start shadow-md cursor-pointer group-btn"
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
