"use client";

import React from "react";
import OwlioImageGrid from "./OwlioImageGrid";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-[#0c0c0d] text-white pt-0 sm:pt-16 lg:pt-20 pb-16 sm:pb-28 lg:pb-36 xl:pb-40 px-4 sm:px-10 lg:px-12 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 xl:gap-14 items-center relative overflow-hidden border-b border-zinc-900">
      
      {/* Left Column: Copy & Actions (5 columns on desktop) */}
      <div className="lg:col-span-5 flex flex-col items-start text-left relative z-20 order-2 lg:order-1 px-4 sm:px-0 lg:pr-2">
        {/* Top Muted Category Label */}
        <span className="text-zinc-500 font-mono tracking-[0.25em] text-[11px] sm:text-xs md:text-sm uppercase font-bold block mb-3 sm:mb-6 select-none">
          {t.hero.category}
        </span>

        {/* Massive grostesque-style heading */}
        <h1 
          className="font-display text-[34px] xs:text-[40px] sm:text-[48px] md:text-[54px] lg:text-[42px] xl:text-[50px] 2xl:text-[60px] font-black text-white leading-[1.1] tracking-tighter uppercase mb-8 sm:mb-8 lg:mb-12 xl:mb-14 select-none"
          style={{ WebkitFontSmoothing: "none", MozOsxFontSmoothing: "none" }}
        >
          <span className="block whitespace-nowrap">{t.hero.heading1}</span>
          <span className="block whitespace-nowrap">
            {t.hero.heading2} <span className="text-brand-red font-black">{t.hero.heading3}</span>
          </span>
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="text-zinc-400 text-sm sm:text-base lg:text-[16px] xl:text-[17px] leading-relaxed lg:leading-[1.7] max-w-md lg:max-w-[450px] mb-6 sm:mb-8 lg:mb-10 font-medium select-text">
          {t.hero.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4 max-w-md sm:max-w-none">
          <button className="w-full sm:w-auto bg-[#fbea3d] text-black border border-[#fbea3d] px-7 sm:px-8 py-3.5 text-sm sm:text-[15px] font-extrabold rounded-full flex items-center justify-center gap-2 hover:bg-white hover:border-white transition-all cursor-pointer group shadow-[0_2px_12px_rgba(251,234,61,0.2)]">
            {t.hero.auditBtn}
            <span className="inline-block transition-transform group-hover:translate-x-1 duration-200 ml-0.5 text-sm font-normal">→</span>
          </button>
          <button className="w-full sm:w-auto bg-black/40 border border-zinc-700/80 text-white px-7 sm:px-8 py-3.5 text-sm sm:text-[15px] font-extrabold rounded-full flex items-center justify-center gap-2 hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer group">
            {t.hero.callBtn}
            <span className="inline-block transition-transform group-hover:translate-x-1 duration-200 ml-0.5 text-sm font-normal">→</span>
          </button>
        </div>
      </div>

      {/* Right Column: Media Grid & Background Word Matrix (7 columns on desktop) */}
      <div className="lg:col-span-7 flex items-center justify-center lg:justify-end relative overflow-visible z-10 order-1 lg:order-2 -mt-2 sm:mt-0 mb-36 sm:mb-40 lg:mb-0 w-full px-0 pl-0 lg:pl-4 pt-0">
        {/* Monospace Keyword Grid Matrix Background (rotated / aligned) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[130%] h-full opacity-[0.035] font-mono text-[9px] sm:text-[11px] leading-relaxed tracking-[0.25em] uppercase select-none pointer-events-none text-white overflow-hidden text-right pr-6 lg:pr-12 -z-10">
          {Array.from({ length: 18 }).map((_, idx) => (
            <div key={idx} className="whitespace-nowrap overflow-hidden">
              GROWTH SEO ROAS VIRAL LEADS CTR CRO AEO GEO CPC CPM UGC KPI CVR SOCIAL MEDIA CONTENT PERFORMANCE BRAND BUZZ REACH
            </div>
          ))}
        </div>

        {/* Showcase Animated Grid (keeps original photos/videos transitions) */}
        <OwlioImageGrid />
      </div>
    </section>
  );
}
