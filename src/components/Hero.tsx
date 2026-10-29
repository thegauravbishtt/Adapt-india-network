"use client";

import React, { useRef, useEffect } from "react";

import Link from "next/link";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set video to play FAST FORWARD (2.2x playback rate)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.2;
    }
  }, []);

  return (
    <section className="relative w-full bg-[#03060d] overflow-hidden select-none min-h-[960px] sm:min-h-[640px] sm:h-[92vh] md:h-screen flex items-center justify-center border-b border-zinc-800/80">
      
      {/* Fast-Forward Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.2]"
        >
          <source src="/network-bg.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Backdrop Gradient for Crisp Text Readability */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02050b] via-transparent to-black/60 pointer-events-none z-10" />
      </div>

      {/* Hero Content Overlay (Matching Reference Layout, Real-World Telecom) */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center pt-32 sm:pt-28 pb-16 sm:pb-10">
        
        {/* Main Title (Clean, Bold, Impactful) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          Adapt India Networks
        </h1>

        {/* Subtitle (Realistic Telecom, Non-AI) */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-zinc-200/90 max-w-2xl font-medium tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Enterprise Leased Lines, SD-WAN &amp; Dedicated High-Speed Connectivity
        </p>

        {/* Center CTA Button (HorrorCon Style) */}
        <div className="mt-6 sm:mt-7">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-[#E31E24] hover:bg-[#c9171d] text-white font-mono font-extrabold text-xs sm:text-sm tracking-widest uppercase transition-all duration-150 shadow-2xl shadow-red-600/50 hover:shadow-red-600/70 hover:scale-[1.02] active:scale-95 border border-red-500/50 rounded-xs"
          >
            GET CONNECTED
          </Link>
        </div>

        {/* Enterprise Carrier Alliances (Tata Tele & ACT Enterprise) */}
        <div className="mt-6 sm:mt-7 flex flex-col items-center gap-2">
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-zinc-300 drop-shadow">
            Authorized Enterprise Partners
          </span>
          <div className="inline-flex items-center gap-6 sm:gap-8 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-2 sm:py-2.5 rounded-full shadow-lg border border-white/80">
            <img
              src="/tata.png"
              alt="Tata Tele Business Services"
              className="h-9 sm:h-11 md:h-12 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
            <div className="w-[1.5px] h-8 sm:h-9 bg-zinc-300 select-none" />
            <div className="h-9 sm:h-11 md:h-12 flex items-center justify-center overflow-hidden">
              <img
                src="/act.png"
                alt="ACT Enterprise"
                className="h-14 sm:h-17 md:h-19 w-auto object-contain hover:scale-105 transition-transform duration-200 scale-125"
              />
            </div>
          </div>
        </div>

        {/* Bottom Key Telecom Details Line (Blue Accents) */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 font-mono text-[11px] sm:text-xs tracking-wider uppercase drop-shadow-md text-zinc-300">
          <div className="flex items-center gap-1.5">
            <span className="text-cyan-400 font-bold">UPTIME</span>
            <span className="text-white font-medium">99.5% SLA BACKEND CONNECTIVITY</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-1.5">
            <span className="text-cyan-400 font-bold">COVERAGE</span>
            <span className="text-white font-medium">PAN-INDIA TIER-1 FIBER</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-1.5">
            <span className="text-cyan-400 font-bold">NOC</span>
            <span className="text-white font-medium">24/7/365 L3 SUPPORT</span>
          </div>
        </div>

      </div>

    </section>
  );
}


