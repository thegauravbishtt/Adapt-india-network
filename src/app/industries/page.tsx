"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import NewsletterSection from "../../components/NewsletterSection";
import Footer from "../../components/Footer";
import { LanguageProvider } from "../../context/LanguageContext";
import { allIndustries } from "../../data/industriesData";
import Link from "next/link";

export default function IndustriesPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white flex flex-col overflow-x-clip relative w-full select-none">
        <Navbar />

        {/* 1. HERO BANNER (Compact, Sleek Background Banner) */}
        <section className="relative w-full text-white pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
          
          {/* Background Image with Clear Directional Gradient (Photo clearly visible) */}
          <div className="absolute inset-0 z-0">
            <img
              src="/industries/it-technology.jpg"
              alt="Industries - Owlio Works"
              className="w-full h-full object-cover object-center scale-100 filter brightness-[0.78] contrast-[1.08]"
            />
            {/* Directional gradient to keep photo vibrant on right while left text is readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-black/40 z-10"></div>
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
                  // ALL INDUSTRIES
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
                  // SPECIALIZED DOMAINS & VERTICALS
                </span>

                {/* Compact Display Title */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-none mb-3 drop-shadow-md">
                  INDUSTRIES WE SERVE
                </h1>

                <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm">
                  Tailored Technical Solutions &amp; Growth Systems for High-Stakes Sectors. We bring specialized domain expertise, compliance readiness, and commercial accountability to 11 core industries.
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

        {/* Industries Grid Showcase */}
        <section className="w-full bg-[#fafafb] py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 text-black">
          <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-1">
                  CORE SECTORS ({allIndustries.length})
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 font-display tracking-tight">
                  Domain-Specific Solutions
                </h2>
              </div>
              <p className="text-zinc-600 text-xs sm:text-sm font-medium max-w-md text-left sm:text-right">
                Every sector is paired with senior domain specialists who understand the exact compliance, consumer behaviors, and software requirements of your market.
              </p>
            </div>

            {/* Grid of Industry Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {allIndustries.map((industry) => (
                <article
                  key={industry.slug}
                  className="bg-white rounded-3xl overflow-hidden border border-zinc-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Image Banner */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-950">
                      <img
                        src={industry.image}
                        alt={industry.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-wider text-[#fbea3d] border border-zinc-800">
                        {industry.badge}
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 flex flex-col gap-4">
                      <div>
                        <h3 className="text-xl font-black text-zinc-900 font-display tracking-tight mb-2 group-hover:text-black transition-colors">
                          {industry.name}
                        </h3>
                        <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
                          {industry.heroSubtitle}
                        </p>
                      </div>

                      {/* Solutions Highlights */}
                      <div className="pt-2 border-t border-zinc-100 flex flex-col gap-1.5">
                        <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-zinc-600">
                          Key Solutions
                        </span>
                        <ul className="flex flex-col gap-1 text-xs text-zinc-800 font-medium">
                          {industry.capabilities.slice(0, 3).map((cap, idx) => (
                            <li key={idx} className="flex items-center gap-1.5 truncate">
                              <span className="text-[#e2ce1c] font-bold">✓</span>
                              <span className="truncate">{cap.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="px-6 pt-0 pb-6 flex items-center justify-between border-t border-zinc-100 mt-2">
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="inline-flex items-center gap-2 bg-black text-white group-hover:bg-[#fbea3d] group-hover:text-black px-4 py-2 rounded-full text-xs font-extrabold font-display tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-xs"
                    >
                      <span>Explore Domain</span>
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>

                    <span className="text-[11px] font-mono text-zinc-400 font-bold">
                      {industry.stats[0]?.value}
                    </span>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* The Owlio Works Standard for Enterprise Industries */}
        <section className="w-full bg-[#0c0c0d] text-white py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 relative overflow-hidden border-t border-zinc-900">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
            
            <div className="lg:col-span-6 flex flex-col gap-5 text-left">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#fbea3d]">
                // INDUSTRY-GRADE SYSTEMS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
                Domain Mastery Meets Relentless Engineering.
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Whether deploying HIPAA-compliant healthcare pipelines, ultra-luxury 3D jewellery customizers, or low-latency EdTech video classrooms, we engineer solutions with commercial accountability.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-zinc-900/90 border border-zinc-800 p-6 rounded-2xl flex flex-col gap-2">
                <span className="text-2xl font-black text-[#fbea3d] font-mono">01</span>
                <h4 className="text-base font-bold text-white font-display">Compliance-First</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">HIPAA, SOC2, SCORM, and PCI-DSS compliance built into core database schemas from day one.</p>
              </div>

              <div className="bg-zinc-900/90 border border-zinc-800 p-6 rounded-2xl flex flex-col gap-2">
                <span className="text-2xl font-black text-[#fbea3d] font-mono">02</span>
                <h4 className="text-base font-bold text-white font-display">Sub-Second Speed</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">Turbopack SSR and global edge caching delivering sub-second experiences for every visitor.</p>
              </div>

              <div className="bg-zinc-900/90 border border-zinc-800 p-6 rounded-2xl flex flex-col gap-2">
                <span className="text-2xl font-black text-[#fbea3d] font-mono">03</span>
                <h4 className="text-base font-bold text-white font-display">Direct Integration</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">Direct synchronization with EHRs, MLS feeds, POS systems, PMS systems, and Shopify Plus.</p>
              </div>

              <div className="bg-zinc-900/90 border border-zinc-800 p-6 rounded-2xl flex flex-col gap-2">
                <span className="text-2xl font-black text-[#fbea3d] font-mono">04</span>
                <h4 className="text-base font-bold text-white font-display">Measurable ROI</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">Every feature and ad dollar is tracked directly to conversion rates, bookings, and revenue.</p>
              </div>
            </div>

          </div>
        </section>

        <NewsletterSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
