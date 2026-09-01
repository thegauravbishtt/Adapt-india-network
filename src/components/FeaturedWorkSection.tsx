"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function FeaturedWorkSection() {
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const items = t.featuredWork.items;

  return (
    <div className="w-full flex flex-col items-center relative bg-white">
      {/* 1. Exact Continuous Arched Dome Curve Header (seamless on pure white bg) */}
      <div className="w-full overflow-hidden leading-none select-none -mb-[1px] relative z-20 pointer-events-none bg-white">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-14 sm:h-20 md:h-28 lg:h-36 xl:h-40 block text-[#0c0c0d]"
        >
          <path
            d="M0,100 C400,0 1040,0 1440,100 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Featured Work Content Section */}
      <section className="w-full bg-[#0c0c0d] text-white pt-4 sm:pt-10 pb-20 sm:pb-28 lg:pb-36 px-4 sm:px-10 lg:px-16 xl:px-20 select-none overflow-hidden relative">
        
        {/* Background ambient lighting */}
        <div className="absolute top-1/4 -left-40 w-[600px] h-[400px] bg-[#fbea3d]/[0.02] rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-0 w-[500px] h-[400px] bg-white/[0.015] rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14 relative z-10">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2">
            <div className="flex flex-col items-start text-left">
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-zinc-400 uppercase font-mono mb-3 block">
                {t.featuredWork.tag}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-tight">
                {t.featuredWork.titlePart1}
                <span className="relative inline-block whitespace-nowrap z-0">
                  {t.featuredWork.titleHighlight}
                  <span className="absolute bottom-1 sm:bottom-1.5 left-0 w-full h-2 sm:h-2.5 bg-[#fbea3d] -z-10 rounded-xs"></span>
                </span>
              </h2>
            </div>

            <div className="self-start sm:self-end shrink-0">
              <a
                href="#work"
                className="group inline-flex flex-col items-start gap-1 text-xs sm:text-sm font-bold text-white hover:text-[#fbea3d] transition-colors"
              >
                <div className="flex items-center gap-1.5">
                  <span>{t.featuredWork.viewAll}</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 font-normal text-[#fbea3d]">
                    →
                  </span>
                </div>
                <div className="w-full h-[2.5px] bg-[#fbea3d] rounded-full transition-all group-hover:h-[3px]"></div>
              </a>
            </div>
          </div>

          {/* 1. Desktop & Tablet Horizontal Expanding Accordion (7 Cards) */}
          <div className="hidden md:flex w-full h-[480px] lg:h-[560px] xl:h-[620px] gap-2.5 sm:gap-3.5 lg:gap-4 items-stretch select-none">
            {items.map((item, idx) => {
              const isExpanded = activeIdx === idx;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  style={{
                    transition: "flex 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s ease",
                  }}
                  className={`relative rounded-3xl overflow-hidden cursor-pointer group shadow-2xl ${
                    isExpanded
                      ? "flex-[4] sm:flex-[3.8] lg:flex-[4.2] ring-2 ring-white/20"
                      : "flex-1 min-w-[56px] lg:min-w-[68px] xl:min-w-[76px] hover:brightness-110"
                  }`}
                >
                  {/* Poster Image */}
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Collapsed State: Dark Overlay with Vertical Brand Label */}
                  {!isExpanded && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 flex flex-col justify-end items-center p-4 transition-opacity duration-300">
                      <span
                        className="font-display font-black text-xs sm:text-sm lg:text-base text-zinc-300 group-hover:text-white uppercase tracking-widest whitespace-nowrap"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {item.name}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-[#fbea3d] mt-4 opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all"></div>
                    </div>
                  )}

                  {/* Expanded State: Bottom Meta Bar & Callout Details */}
                  {isExpanded && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8 lg:p-10 animate-in fade-in duration-400">
                      
                      {/* Category Tag */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-[#fbea3d] text-black text-[11px] font-mono font-extrabold uppercase tracking-wider shadow-sm">
                          {item.category}
                        </span>
                      </div>

                      {/* Main Headline */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white tracking-tight leading-tight mb-2 max-w-xl">
                        {item.headline}
                      </h3>

                      {/* Description */}
                      <p className="text-zinc-300 text-xs sm:text-sm line-clamp-2 max-w-lg leading-relaxed mb-6 font-normal">
                        {item.description}
                      </p>

                      {/* View Work Link Button */}
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider hover:bg-[#fbea3d] hover:scale-105 transition-all shadow-lg cursor-pointer select-none group/btn"
                        >
                          <span>{t.featuredWork.viewWorkBtn}</span>
                          <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1 font-normal">
                            →
                          </span>
                        </button>
                        <span className="text-zinc-400 text-xs font-mono tracking-widest uppercase">
                          {idx + 1} / {items.length}
                        </span>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 2. Mobile Responsive Carousel / Touch Slider (< md screens) */}
          <div className="flex md:hidden flex-col gap-6">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-800">
              <img
                src={items[activeIdx].src}
                alt={items[activeIdx].name}
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6">
                <span className="px-3 py-1 rounded-full bg-[#fbea3d] text-black text-[10px] font-mono font-extrabold uppercase tracking-wider self-start mb-2">
                  {items[activeIdx].category}
                </span>
                <h3 className="text-2xl font-display font-black text-white tracking-tight leading-tight mb-2">
                  {items[activeIdx].headline}
                </h3>
                <p className="text-zinc-300 text-xs line-clamp-2 leading-relaxed mb-4">
                  {items[activeIdx].description}
                </p>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider hover:bg-[#fbea3d] transition-all"
                  >
                    <span>{t.featuredWork.viewWorkBtn}</span>
                    <span>→</span>
                  </button>
                  <span className="text-zinc-400 text-xs font-mono font-bold">
                    {activeIdx + 1} / {items.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Thumbnail Selector Strip */}
            <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-none">
              {items.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`relative shrink-0 w-12 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                    activeIdx === idx
                      ? "border-[#fbea3d] scale-105 shadow-md"
                      : "border-transparent opacity-50"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
