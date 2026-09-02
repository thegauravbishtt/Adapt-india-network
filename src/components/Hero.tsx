"use client";

import React from "react";
import OwlioImageGrid from "./OwlioImageGrid";
import InteractiveWordMatrix from "./InteractiveWordMatrix";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-[#0c0c0d] text-white pt-0 sm:pt-10 lg:pt-16 pb-16 sm:pb-24 lg:pb-32 px-0 sm:px-8 lg:px-10 xl:px-12 overflow-hidden border-b-0 sm:border-b border-zinc-900 select-none">
      
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#fbea3d]/4 rounded-full blur-[140px] pointer-events-none z-0"></div>
      
      {/* Interactive Cursor-Repel Alphabet Word Matrix on Right */}
      <InteractiveWordMatrix />

      <div className="w-full flex flex-col items-start relative z-10 pointer-events-none">
        
        {/* MOBILE ONLY: Images Showcase Edge-to-Edge at the TOP + generous bottom gap */}
        <div className="block lg:hidden w-full mb-48 sm:mb-56 pointer-events-auto">
          <OwlioImageGrid />
        </div>

        {/* Text and Actions Container (with mobile horizontal padding) */}
        <div className="flex flex-col items-start px-4 sm:px-0 w-full">
          
          {/* Top Category Label */}
          <span className="text-zinc-400 font-sans tracking-wide text-xs sm:text-sm font-medium block mb-4 sm:mb-6 select-none pointer-events-auto">
            {t.hero.category || "Branding · Technology · Performance"}
          </span>

          {/* Massive Headline */}
          <h1 
            className="font-display text-[54px] xs:text-[68px] sm:text-[84px] md:text-[96px] lg:text-[115px] xl:text-[130px] font-black text-white leading-[0.92] tracking-tighter uppercase mb-6 sm:mb-8 select-none pointer-events-auto"
          >
            <span className="block">{t.hero.heading1 || "BUILD"}</span>
            <span className="block mt-1 sm:mt-2">
              {t.hero.heading2 || "BRAN"}
              <span className="text-[#fbea3d]">{t.hero.heading3 || "DS."}</span>
            </span>
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl sm:max-w-2xl mb-8 sm:mb-10 font-normal select-text pointer-events-auto">
            {t.hero.subtitle ||
              "We build high-impact digital platforms, enterprise search systems, and performance growth engines that scale ambitious businesses into industry leaders."}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pointer-events-auto">
            <a
              href="#newsletter"
              className="bg-[#fbea3d] text-black px-8 py-3.5 rounded-full text-xs sm:text-sm font-extrabold hover:bg-[#fae420] active:scale-95 transition-all shadow-[0_4px_20px_rgba(251,234,61,0.25)] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{t.hero.auditBtn || "Run Free Growth Audit"}</span>
              <span className="inline-block transition-transform group-hover:translate-x-1 duration-200">→</span>
            </a>

            <a
              href="#newsletter"
              className="bg-zinc-900/90 border border-zinc-700/80 text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold hover:bg-zinc-800 hover:border-zinc-500 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>{t.hero.callBtn || "Book Discovery Call"}</span>
              <span className="text-zinc-400 text-xs">↗</span>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
