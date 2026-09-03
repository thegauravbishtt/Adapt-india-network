"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { LanguageProvider } from "../../context/LanguageContext";
import Link from "next/link";

export default function AboutMainPage() {
  const sections = [
    {
      title: "Who We Are",
      badge: "01 // COMPANY IDENTITY",
      desc: "Our mission, leadership, core principles, and origin story as a full-service digital marketing and growth agency.",
      href: "/about/who-we-are",
      cta: "Explore Our Identity →",
      stats: "$50M+ Generated · 99.4% Retention",
    },
    {
      title: "How We Work",
      badge: "02 // OPERATING MODEL",
      desc: "Our 4-phase agile delivery framework, zero-tech-debt engineering standards, and radical transparency.",
      href: "/about/how-we-work",
      cta: "See Our Process →",
      stats: "Weekly Sprints · 100% Code Ownership",
    },
    {
      title: "What We Do",
      badge: "03 // CAPABILITIES MATRIX",
      desc: "Full-spectrum capabilities spanning software engineering, product design, cloud DevOps, and performance growth.",
      href: "/about/what-we-do",
      cta: "View All Capabilities →",
      stats: "12+ Specialized Services",
    },
  ];

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip relative w-full select-none">
        
        {/* Navigation */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-1 w-full">

          {/* 1. HERO BANNER (Compact, Sleek Service Background Banner) */}
          <section className="relative w-full text-white pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
            
            {/* Background Image with Dark Vignette & Gradient Overlays */}
            <div className="absolute inset-0 z-0">
              <img
                src="/team-photo.png"
                alt="About Owlio Works"
                className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-[1.15]"
              />
              {/* Dark Ambient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-[#0c0c0d] z-10"></div>
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px] z-10"></div>
            </div>

            {/* Top Row: Back to Home + Global Divider Line */}
            <div className="relative z-20 max-w-7xl mx-auto w-full mb-6 sm:mb-8">
              <div className="flex items-center justify-between gap-4 pb-3 sm:pb-4 border-b border-white/20">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-mono font-bold tracking-widest text-zinc-300 hover:text-white uppercase transition-colors group cursor-pointer"
                >
                  <span className="transition-transform group-hover:-translate-x-1 duration-200">←</span>
                  <span>BACK TO HOME</span>
                </Link>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-0.5 rounded-full bg-black/60 border border-zinc-700/80 text-[#fbea3d] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                    // ABOUT HUB
                  </span>
                </div>
              </div>
            </div>

            {/* Center Content: Clean Title + Scroll Down Indicator */}
            <div className="relative z-20 max-w-7xl mx-auto w-full">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                <div className="flex flex-col items-start text-left max-w-3xl">
                  {/* Category Pill Tagline */}
                  <span className="font-mono text-xs font-extrabold tracking-widest text-[#fbea3d] uppercase mb-2 block">
                    // ABOUT OWLIO WORKS
                  </span>

                  {/* Compact Display Title */}
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-none mb-3 drop-shadow-md">
                    ABOUT US
                  </h1>

                  <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm">
                    The New Standard in Digital Engineering &amp; Brand Growth. Discover the people, the operating methodology, and the full-spectrum technical capabilities behind Owlio Works.
                  </p>
                </div>

                {/* Right Side: Scroll Down Indicator */}
                <div className="hidden lg:flex items-center gap-3 text-zinc-400 font-mono text-xs font-bold uppercase tracking-wider select-none shrink-0 self-end lg:self-center">
                  <span>SCROLL DOWN</span>
                  <span className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-[#fbea3d] animate-bounce">
                    ↓
                  </span>
                </div>

              </div>
            </div>

          </section>

          {/* 3 CORE NAVIGATION CARDS */}
          <section className="w-full bg-white text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {sections.map((sec, idx) => (
                <Link
                  key={idx}
                  href={sec.href}
                  className="bg-[#fafafb] border border-zinc-200/90 rounded-3xl p-8 hover:border-black hover:bg-white hover:shadow-2xl transition-all flex flex-col justify-between gap-6 group cursor-pointer"
                >
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-xs font-black text-[#e2ce1c] bg-zinc-900 px-2.5 py-0.5 rounded-md self-start">
                      {sec.badge}
                    </span>

                    <h2 className="text-2xl font-black font-display text-zinc-900 group-hover:text-black transition-colors mt-2">
                      {sec.title}
                    </h2>

                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                      {sec.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-200 flex flex-col gap-2">
                    <span className="text-[11px] font-mono text-zinc-500 font-semibold">
                      {sec.stats}
                    </span>
                    <span className="text-sm font-bold text-zinc-900 group-hover:text-black group-hover:translate-x-1 transition-all flex items-center gap-1.5">
                      {sec.cta}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </main>

        {/* FOOTER */}
        <Footer />

      </div>
    </LanguageProvider>
  );
}
