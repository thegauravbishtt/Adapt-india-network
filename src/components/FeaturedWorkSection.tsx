"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function FeaturedWorkSection() {
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const items = t.featuredWork.items;

  return (
    <div id="work" className="w-full flex flex-col items-center relative bg-[#0c0c0d]">
      {/* Featured Work Content Section */}
      <section className="w-full bg-[#0c0c0d] text-white pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-8 lg:px-14 xl:px-16 select-none overflow-hidden relative">
        
        {/* Background ambient lighting */}
        <div className="absolute top-1/4 -left-40 w-[500px] h-[300px] bg-[#fbea3d]/[0.02] rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-0 w-[400px] h-[300px] bg-white/[0.015] rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8 relative z-10">
          
          {/* Desktop Header Row */}
          <div className="hidden md:flex sm:flex-row sm:items-end justify-between gap-4 pb-1">
            <div className="flex flex-col items-start text-left">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-zinc-400 uppercase font-mono mb-1.5 block">
                {t.featuredWork.tag}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-white font-display tracking-tight leading-tight">
                {t.featuredWork.titlePart1}
                <span className="relative inline-block whitespace-nowrap z-0">
                  {t.featuredWork.titleHighlight}
                  <span className="absolute bottom-1 sm:bottom-1.5 left-0 w-full h-2 sm:h-2.5 bg-[#fbea3d] -z-10 rounded-xs"></span>
                </span>
              </h2>
            </div>

            <div className="self-start sm:self-end shrink-0">
              <Link
                href="/work"
                className="group inline-flex flex-col items-start gap-1 text-xs sm:text-[13px] font-bold text-white hover:text-[#fbea3d] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-1.5">
                  <span>{t.featuredWork.viewAll}</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 font-normal text-[#fbea3d]">
                    →
                  </span>
                </div>
                <div className="w-full h-[2px] bg-[#fbea3d] rounded-full transition-all group-hover:h-[2.5px]"></div>
              </Link>
            </div>
          </div>

          {/* Mobile Header (Matching Design) */}
          <div className="flex md:hidden flex-col items-start text-left gap-2.5 pb-2">
            <span className="text-xs sm:text-sm font-semibold text-zinc-400 block">
              {t.featuredWork.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight leading-[1.15]">
              {t.featuredWork.titlePart1}<br />
              <span className="relative inline-block mt-0.5">
                {t.featuredWork.titleHighlight}
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#fbea3d] -z-0"></span>
              </span>
            </h2>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#fbea3d] border-b-2 border-[#fbea3d] pb-0.5 mt-2 hover:text-white hover:border-white transition-colors cursor-pointer"
            >
              <span>{t.featuredWork.viewAll}</span>
              <span className="font-normal">→</span>
            </Link>
          </div>

          {/* 1. Desktop & Tablet Horizontal Expanding Accordion (7 Cards) */}
          <div className="hidden md:flex w-full h-[360px] sm:h-[400px] lg:h-[440px] xl:h-[480px] gap-2 sm:gap-3 items-stretch select-none">
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
                  className={`relative rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer group shadow-xl ${
                    isExpanded
                      ? "flex-[4] sm:flex-[3.8] lg:flex-[4.2] ring-2 ring-white/20"
                      : "flex-1 min-w-[50px] lg:min-w-[60px] xl:min-w-[68px] hover:brightness-110"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 flex flex-col justify-end items-center p-3 transition-opacity duration-300">
                      <span
                        className="font-display font-black text-xs sm:text-[13px] lg:text-sm text-zinc-300 group-hover:text-white uppercase tracking-widest whitespace-nowrap"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {item.name}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#fbea3d] mt-3 opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all"></div>
                    </div>
                  )}

                  {/* Expanded State: Bottom Meta Bar & Callout Details */}
                  {isExpanded && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-5 sm:p-6 lg:p-7 animate-in fade-in duration-400">
                      
                      {/* Category Tag */}
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#fbea3d] text-black text-[10px] font-mono font-extrabold uppercase tracking-wider shadow-sm">
                          {item.category}
                        </span>
                      </div>

                      {/* Main Headline */}
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-white tracking-tight leading-snug mb-1.5 max-w-xl">
                        {item.headline}
                      </h3>

                      {/* Description */}
                      <p className="text-zinc-300 text-xs sm:text-[13px] line-clamp-2 max-w-lg leading-relaxed mb-4 font-normal">
                        {item.description}
                      </p>

                      {/* View Work Link Button */}
                      <div className="flex items-center gap-3">
                        <Link
                          href="/work"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 bg-white text-black px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider hover:bg-[#fbea3d] hover:scale-105 transition-all shadow-md cursor-pointer select-none group/btn"
                        >
                          <span>{t.featuredWork.viewWorkBtn}</span>
                          <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1 font-normal">
                            →
                          </span>
                        </Link>
                        <span className="text-zinc-400 text-[11px] font-mono tracking-widest uppercase">
                          {idx + 1} / {items.length}
                        </span>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 2. Mobile Responsive Horizontal Scroll Slider (< md screens) */}
          <div className="flex md:hidden overflow-x-auto gap-4 pb-4 pt-1 -mx-4 px-4 sm:-mx-8 sm:px-8 scrollbar-none snap-x snap-mandatory">
            {items.map((item) => (
              <Link
                key={item.id}
                href="/work"
                className="snap-start shrink-0 w-[78vw] sm:w-[320px] aspect-[4/5] rounded-[24px] overflow-hidden relative shadow-2xl bg-zinc-900 border border-zinc-800/80 group block"
              >
                {/* Poster Image */}
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Bottom Overlay Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-5">
                  <span className="text-[11px] font-mono font-black tracking-wider text-[#fbea3d] uppercase mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight mb-2">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-white group-hover:text-[#fbea3d] transition-colors">
                    <span>{t.featuredWork.viewWorkBtn}</span>
                    <span className="font-normal text-xs">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
