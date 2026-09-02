"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

const clientLogos = [
  {
    name: "Mallcom",
    node: (
      <div className="flex items-center gap-2 font-bold tracking-tight text-zinc-700 select-none">
        <span className="text-xl sm:text-2xl font-black font-sans tracking-tighter uppercase text-zinc-800">mallcom</span>
        <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22h20L12 2zm0 4l6.5 13h-13L12 6z"/>
        </svg>
      </div>
    )
  },
  {
    name: "Okaya",
    node: (
      <div className="flex flex-col items-center select-none">
        <span className="text-xl sm:text-2xl font-black font-sans tracking-widest text-zinc-900 uppercase">OKAYA</span>
        <span className="text-[7px] tracking-[0.25em] text-zinc-500 font-bold uppercase -mt-0.5">NEVER STOP INDIA</span>
      </div>
    )
  },
  {
    name: "Wellbeing Nutrition",
    node: (
      <div className="flex items-center gap-2.5 select-none">
        <div className="w-9 h-9 rounded-full border-2 border-zinc-800 flex flex-col items-center justify-center text-[7px] font-extrabold leading-none text-zinc-800 uppercase tracking-tighter">
          <span>WELL</span>
          <span className="text-base font-black font-serif leading-none">W</span>
          <span>BEING</span>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-xs font-black tracking-wider uppercase text-zinc-900">WELLBEING</span>
          <span className="text-[9px] tracking-widest text-zinc-500 font-bold uppercase">NUTRITION</span>
        </div>
      </div>
    )
  },
  {
    name: "Sleepwell",
    node: (
      <div className="flex items-center gap-2 select-none">
        <div className="flex -space-x-1.5 opacity-80">
          <div className="w-5 h-5 rounded-full bg-zinc-400/80"></div>
          <div className="w-5 h-5 rounded-full bg-zinc-600/80"></div>
        </div>
        <span className="text-lg sm:text-xl font-black italic tracking-tight text-zinc-900">Sleepwell</span>
      </div>
    )
  },
  {
    name: "Kurlon",
    node: (
      <div className="flex flex-col select-none">
        <div className="h-1 w-7 bg-zinc-400 mb-0.5 rounded-full"></div>
        <span className="text-xl sm:text-2xl font-black tracking-tight text-zinc-900 font-sans">kurlon</span>
      </div>
    )
  },
  {
    name: "OZiva",
    node: (
      <div className="flex items-center gap-1 select-none">
        <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-900 lowercase font-sans">
          o<span className="uppercase text-2xl font-black">Z</span>iva
        </span>
        <span className="text-[9px] font-bold text-zinc-400 uppercase -mt-2">TM</span>
      </div>
    )
  },
  {
    name: "Kivanza",
    node: (
      <div className="flex items-center gap-2 select-none">
        <svg className="w-6 h-6 text-zinc-800" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.8l5.5 3.4L12 11.6 6.5 8.2 12 4.8zM6 9.8l5 3.1v6.3l-5-3.1V9.8zm12 6.3l-5 3.1v-6.3l5-3.1v6.3z"/>
        </svg>
        <span className="text-lg sm:text-xl font-bold tracking-widest uppercase text-zinc-900 font-mono">KIVANZA</span>
      </div>
    )
  },
  {
    name: "Soulgrain",
    node: (
      <div className="flex items-center gap-2 select-none">
        <svg className="w-5 h-5 text-zinc-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9"/>
        </svg>
        <span className="text-base sm:text-lg font-black tracking-wider uppercase text-zinc-900">SOULGRAIN</span>
      </div>
    )
  },
  {
    name: "Chiseh",
    node: (
      <div className="flex items-center gap-2 select-none">
        <span className="text-lg sm:text-xl font-serif font-black tracking-widest uppercase text-zinc-900">CHISEH</span>
      </div>
    )
  },
];

export default function PartnersMarquee() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-white border-0 py-10 sm:py-16 px-6 sm:px-12 lg:px-20 select-none overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Header Row: Title on Left, View All Link on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-8 pb-4">
          <div className="flex flex-col gap-2 max-w-2xl text-left">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-zinc-500 uppercase">
              {t.partners.trustedBy}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-900 tracking-tight leading-snug">
              {t.partners.headline}
            </h2>
          </div>

          <div className="self-start sm:self-end shrink-0">
            <a
              href="#clients"
              className="group inline-flex flex-col items-start gap-1 text-xs sm:text-sm font-bold text-zinc-900 hover:text-black transition-colors"
            >
              <div className="flex items-center gap-1.5">
                <span>{t.partners.viewAll}</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 font-normal">
                  →
                </span>
              </div>
              <div className="w-full h-[2.5px] bg-[#fbea3d] rounded-full transition-all group-hover:h-[3px]"></div>
            </a>
          </div>
        </div>

        {/* Logo Ribbon Marquee (Infinite Smooth Scroll) */}
        <div className="w-full overflow-hidden relative pt-2">
          {/* Subtle fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-14 sm:gap-20 items-center animate-marquee min-w-full pr-14 sm:pr-20 opacity-85 hover:opacity-100 transition-opacity">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="flex items-center shrink-0 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                title={client.name}
              >
                {client.node}
              </div>
            ))}
            {/* Duplicate for seamless infinite loop */}
            {clientLogos.map((client, idx) => (
              <div
                key={`dup-${idx}`}
                className="flex items-center shrink-0 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                title={client.name}
              >
                {client.node}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
