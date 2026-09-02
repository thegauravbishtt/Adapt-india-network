"use client";

import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import NewsletterSection from "../../../components/NewsletterSection";
import Footer from "../../../components/Footer";
import { LanguageProvider } from "../../../context/LanguageContext";
import { IndustryDetail, allIndustries } from "../../../data/industriesData";
import Link from "next/link";

interface IndustryDetailClientProps {
  industry: IndustryDetail;
}

export default function IndustryDetailClient({ industry }: IndustryDetailClientProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeSolutionTab, setActiveSolutionTab] = useState<number>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  const otherIndustries = allIndustries.filter((i) => i.slug !== industry.slug);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white flex flex-col overflow-x-clip relative w-full select-none text-zinc-900">
        <Navbar />

        {/* 1. HERO BANNER (Compact, Sleek Background Banner with Visible Imagery) */}
        <section className="relative w-full text-white pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
          
          {/* Background Image with Clear Directional Gradient (Photo clearly visible) */}
          <div className="absolute inset-0 z-0">
            <img
              src={industry.image}
              alt={industry.name}
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
                <Link
                  href="/industries"
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-mono font-semibold text-zinc-400 hover:text-zinc-200 uppercase tracking-wider transition-colors"
                >
                  <span>ALL INDUSTRIES</span>
                </Link>
                <span className="hidden sm:inline-block text-zinc-600">/</span>
                <span className="px-3 py-0.5 rounded-full bg-black/60 border border-zinc-700/80 text-[#fbea3d] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                  // {industry.name}
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
                  // {industry.badge}
                </span>

                {/* Compact Display Title */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-none mb-3 drop-shadow-md">
                  {industry.name}
                </h1>

                <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm">
                  {industry.heroSubtitle}
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

        {/* 2. HOW WE PARTNER WITH CLIENTS / FOCUS AREAS */}
        <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 text-black border-b border-zinc-100">
          <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
            
            {industry.slug === "education" ? (
              /* EDUCATION / INSTITUTIONAL SERVICES CONNECT 2-COLUMN SECTION: TEXT + CONNECTED CAMPUS PHOTO ON RIGHT */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Column: Context & 4 Connected Value Blocks (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                  <div className="flex flex-col gap-4 text-left">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                      // HOW WE ENGAGE &amp; DELIVER
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-900 font-display tracking-tight leading-tight">
                      Institutional Web Design, Higher-Ed SEO &amp; Enrollment Growth for{" "}
                      <span className="text-zinc-950 underline decoration-[#fbea3d] decoration-4 underline-offset-4">
                        Education Brands.
                      </span>
                    </h2>
                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-medium">
                      Educational institutions win students by establishing academic authority, transparent curriculum pathways, and effortless inquiry flows. We engineer high-converting institutional websites, dominate competitive course keywords on Google, and deploy targeted paid enrollment campaigns.
                    </p>
                  </div>

                  {/* 4 Connected Value Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Higher-Ed SEO &amp; Search Dominance
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Dominating local and national Google rankings for degree programs, coaching, and certifications.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          High-Converting Inquiry Funnels
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Frictionless 2-click prospectus downloads, campus visit schedulers, and direct application forms.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Google Search &amp; Meta Student Ads
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Laser-targeted student acquisition campaigns capturing active course seekers with high commercial intent.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Institutional Web Portals &amp; CMS
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Fast, WCAG accessible university and academy websites with intuitive course and faculty directories.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Right Column: Connected Campus Photo with Floating Badges (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl group">
                    <img
                      src="/industries/education_overview.jpg"
                      alt="Modern Collaborative Higher-Ed Campus and Student Inquiries"
                      className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md border border-zinc-700 text-white px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#fbea3d] animate-pulse"></span>
                      <span className="font-mono text-xs font-bold text-[#fbea3d]">HIGHER-ED SEO &amp; ENROLLMENT</span>
                    </div>

                    {/* Bottom Floating Info Card */}
                    <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md border border-zinc-200 p-5 rounded-2xl shadow-xl flex flex-col gap-1.5 text-black">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-zinc-500 uppercase">ACADEMIC INSTITUTIONS &amp; ACADEMIES</span>
                        <span className="px-2 py-0.5 rounded-md bg-black text-[#fbea3d] font-mono text-[10px] font-bold">+240% INQUIRIES</span>
                      </div>
                      <h4 className="text-sm font-bold font-display text-zinc-900">
                        Education Growth &amp; Web Services
                      </h4>
                      <p className="text-[11px] text-zinc-600 leading-relaxed">
                        Full-service digital marketing, technical SEO, and institutional website engineering for modern education brands.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ) : industry.slug === "jewellery" ? (
              /* JEWELLERY / FINE CRAFT CONNECT 2-COLUMN SECTION: TEXT + CONNECTED DIAMOND PHOTO ON RIGHT */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Column: Context & 4 Connected Value Blocks (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                  <div className="flex flex-col gap-4 text-left">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                      // HOW WE ENGAGE &amp; DELIVER
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-900 font-display tracking-tight leading-tight">
                      Ultra-Luxury Digital Boutiques &amp; 3D Customizer Systems for{" "}
                      <span className="text-zinc-950 underline decoration-[#fbea3d] decoration-4 underline-offset-4">
                        Fine Jewellery.
                      </span>
                    </h2>
                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-medium">
                      High-ticket fine jewellery demands extraordinary digital trust, 4K gemstone clarity, and bespoke client advisory. We build immersive headless storefronts, real-time 3D diamond builders, and private consultation salons that turn discerning collectors into lifelong patrons.
                    </p>
                  </div>

                  {/* 4 Connected Value Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Interactive 3D Ring Builders
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        WebGL real-time diamond carats, band metal reflection rendering, and instant custom CAD generation.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          GIA &amp; IGI Verified Sync
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Direct certificate integration displaying cut grades, clarity, fluorescence, and provenance data.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Private VIP Consultation Salons
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        1-on-1 virtual bespoke bridal appointments with master jewelers and digital lookbook sharing.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Insured Global Vault Checkout
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        High-limit multi-currency checkout, escrow protection, and armored delivery courier tracking.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Right Column: Connected Diamond Photo with Floating Badges (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl group">
                    <img
                      src="/industries/jewellery_overview.jpg"
                      alt="Luxury Fine Jewellery, Diamonds and Haute Joaillerie Architecture"
                      className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md border border-zinc-700 text-white px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#fbea3d] animate-pulse"></span>
                      <span className="font-mono text-xs font-bold text-[#fbea3d]">3D WEBGL &amp; GIA VERIFIED</span>
                    </div>

                    {/* Bottom Floating Info Card */}
                    <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md border border-zinc-200 p-5 rounded-2xl shadow-xl flex flex-col gap-1.5 text-black">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-zinc-500 uppercase">FINE JEWELLERY &amp; ATELIERS</span>
                        <span className="px-2 py-0.5 rounded-md bg-black text-[#fbea3d] font-mono text-[10px] font-bold">$4,200+ AOV</span>
                      </div>
                      <h4 className="text-sm font-bold font-display text-zinc-900">
                        Ultra-Luxury Diamond Boutiques
                      </h4>
                      <p className="text-[11px] text-zinc-600 leading-relaxed">
                        4K interactive 3D configurators and white-glove VIP consultation funnels for haute joaillerie.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ) : industry.slug === "food-beverages" ? (
              /* FOOD & BEVERAGES / SPECIALTY CAFE CONNECT 2-COLUMN SECTION: TEXT + CONNECTED CAFE PHOTO ON RIGHT */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Column: Context & 4 Connected Value Blocks (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                  <div className="flex flex-col gap-4 text-left">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                      // HOW WE ENGAGE &amp; DELIVER
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-900 font-display tracking-tight leading-tight">
                      Direct Ordering &amp; Digital Systems for Specialty Cafes &amp;{" "}
                      <span className="text-zinc-950 underline decoration-[#fbea3d] decoration-4 underline-offset-4">
                        Culinary Brands.
                      </span>
                    </h2>
                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-medium">
                      Specialty cafes, roasteries, and restaurant groups thrive when they own their direct guest relationships. We build custom ordering platforms that eliminate third-party commission bleed, streamline kitchen operations, and build long-term customer loyalty.
                    </p>
                  </div>

                  {/* 4 Connected Value Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Toast &amp; Square POS Sync
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Automated ticket generation on kitchen displays and printers without manual re-entry.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          0% Commission Ordering
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Custom branded mobile web apps eliminating 30% delivery marketplace fees on pickup and catering.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Artisanal Coffee &amp; Roastery D2C
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Recurring coffee bean subscriptions, grind-size selectors, and automated replenishment loops.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Smart Table QR &amp; Split Pay
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Dine-in QR menu ordering, multi-guest tab splitting, and 1-click Apple Pay checkout.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Right Column: Connected Cafe Photo with Floating Badges (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl group">
                    <img
                      src="/industries/food_beverages_overview.jpg"
                      alt="Specialty Cafe, Artisanal Coffee and Dining Architecture"
                      className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md border border-zinc-700 text-white px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#fbea3d] animate-pulse"></span>
                      <span className="font-mono text-xs font-bold text-[#fbea3d]">TOAST &amp; SQUARE POS SYNC</span>
                    </div>

                    {/* Bottom Floating Info Card */}
                    <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md border border-zinc-200 p-5 rounded-2xl shadow-xl flex flex-col gap-1.5 text-black">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-zinc-500 uppercase">CAFES &amp; RESTAURANTS</span>
                        <span className="px-2 py-0.5 rounded-md bg-black text-[#fbea3d] font-mono text-[10px] font-bold">0% COMMISSION</span>
                      </div>
                      <h4 className="text-sm font-bold font-display text-zinc-900">
                        Direct Ordering &amp; POS Pipelines
                      </h4>
                      <p className="text-[11px] text-zinc-600 leading-relaxed">
                        Commission-free online ordering and smart kitchen integrations for specialty cafes and culinary brands.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ) : industry.slug === "hospitality" ? (
              /* HOSPITALITY CONNECT 2-COLUMN SECTION: TEXT + CONNECTED RESORT PHOTO ON RIGHT */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Column: Context & 4 Connected Value Blocks (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                  <div className="flex flex-col gap-4 text-left">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                      // HOW WE ENGAGE &amp; DELIVER
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-900 font-display tracking-tight leading-tight">
                      Experiential Web Platforms That Fill Luxury Rooms &amp;{" "}
                      <span className="text-zinc-950 underline decoration-[#fbea3d] decoration-4 underline-offset-4">
                        Dining Tables.
                      </span>
                    </h2>
                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-medium">
                      Hospitality brands win through sensory storytelling and effortless direct booking flows. We build captivating web experiences with silky smooth 60fps micro-animations, virtual 3D venue walkthroughs, and automated table management integrations.
                    </p>
                  </div>

                  {/* 4 Connected Value Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Direct Room Booking Engines
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Direct guest reservation pipelines integrated with SynXis, Cloudbeds, and Mews that bypass 15-25% OTA commission fees.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Table &amp; VIP Bottle Service
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Live table booking and private event inquiries connected directly to OpenTable, Resy, and SevenRooms.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Multi-Property Portfolios
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Centralized brand architecture for luxury hotel groups, private villa collections, and boutique restaurant chains.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Concierge &amp; Upsell Flows
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Automated pre-arrival SMS sequences offering room upgrades, airport transfers, and spa appointment bookings.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Right Column: Connected Resort Photo with Floating Badges (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl group">
                    <img
                      src="/industries/hospitality_overview.jpg"
                      alt="Luxury Hospitality and Boutique Resort Architecture"
                      className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md border border-zinc-700 text-white px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#fbea3d] animate-pulse"></span>
                      <span className="font-mono text-xs font-bold text-[#fbea3d]">SYNXIS &amp; CLOUDBEDS READY</span>
                    </div>

                    {/* Bottom Floating Info Card */}
                    <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md border border-zinc-200 p-5 rounded-2xl shadow-xl flex flex-col gap-1.5 text-black">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-zinc-500 uppercase">DIRECT BOOKING HUB</span>
                        <span className="px-2 py-0.5 rounded-md bg-black text-[#fbea3d] font-mono text-[10px] font-bold">0% OTA COMMISSIONS</span>
                      </div>
                      <h4 className="text-sm font-bold font-display text-zinc-900">
                        High-Yield Guest Reservations
                      </h4>
                      <p className="text-[11px] text-zinc-600 leading-relaxed">
                        Frictionless direct checkout workflows capturing full-margin guest stays and premium dining reservations.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ) : industry.slug === "real-estate" ? (
              /* REAL ESTATE CONNECT 2-COLUMN SECTION: TEXT + CONNECTED ARCHITECTURE PHOTO ON RIGHT */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Column: Context & 4 Connected Value Blocks (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                  <div className="flex flex-col gap-4 text-left">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                      // HOW WE ENGAGE &amp; DELIVER
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-900 font-display tracking-tight leading-tight">
                      High-Performance PropTech Portals Built for{" "}
                      <span className="text-zinc-950 underline decoration-[#fbea3d] decoration-4 underline-offset-4">
                        High-Volume Deals.
                      </span>
                    </h2>
                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-medium">
                      In modern real estate, speed and intuitive search interfaces win buyers and investors. We build custom PropTech platforms that deliver instant map filtering, 3D property tours, and automated CRM lead distribution.
                    </p>
                  </div>

                  {/* 4 Connected Value Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Sub-Second MLS &amp; IDX Sync
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Real-time property feed ingestion directly from RESO Web API with zero duplicate or outdated listings.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Interactive MapBox Search
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Custom polygon boundary filters, school district overlays, and commute radius calculation engines.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          3D Virtual &amp; Matterport Tours
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Fluid WebGL walkthroughs and high-res architectural galleries with instant mobile touch optimization.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Automated Broker CRM Routing
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Instant SMS lead alerts and automatic distribution to assigned agents in Follow Up Boss, Salesforce, or HubSpot.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Right Column: Connected Real Estate Photo with Floating Badges (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl group">
                    <img
                      src="/industries/real_estate_overview.jpg"
                      alt="Modern Luxury Real Estate and Architecture"
                      className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md border border-zinc-700 text-white px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#fbea3d] animate-pulse"></span>
                      <span className="font-mono text-xs font-bold text-[#fbea3d]">RESO WEB API &amp; MLS SYNC</span>
                    </div>

                    {/* Bottom Floating Info Card */}
                    <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md border border-zinc-200 p-5 rounded-2xl shadow-xl flex flex-col gap-1.5 text-black">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-zinc-500 uppercase">PROPTECH PLATFORM</span>
                        <span className="px-2 py-0.5 rounded-md bg-black text-[#fbea3d] font-mono text-[10px] font-bold">SUB-SECOND IDX</span>
                      </div>
                      <h4 className="text-sm font-bold font-display text-zinc-900">
                        High-Converting Property Discovery
                      </h4>
                      <p className="text-[11px] text-zinc-600 leading-relaxed">
                        Fast polygon map searches and automated lead capture converting high-net-worth buyers into booked tours.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ) : industry.slug === "healthcare" ? (
              /* HEALTHCARE CONNECT 2-COLUMN SECTION: TEXT + CONNECTED PHOTO ON RIGHT */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Column: Context & 4 Connected Value Blocks (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                  <div className="flex flex-col gap-4 text-left">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                      // HOW WE ENGAGE &amp; DELIVER
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-900 font-display tracking-tight leading-tight">
                      Empathetic, Secure HealthTech Experiences Built for{" "}
                      <span className="text-zinc-950 underline decoration-[#fbea3d] decoration-4 underline-offset-4">
                        Better Patient Outcomes.
                      </span>
                    </h2>
                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-medium">
                      Healthcare technology demands an uncompromising commitment to privacy, data security, and accessible human-first UX. We build frictionless digital health platforms that connect patients with practitioners effortlessly.
                    </p>
                  </div>

                  {/* 4 Connected Value Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          HIPAA Telehealth Rooms
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Encrypted WebRTC browser video rooms with zero patient app downloads and virtual waiting lobbies.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          EHR &amp; FHIR Sync
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Bi-directional integration with Epic, Cerner, and Athenahealth without medical data fragmentation.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Patient Portals &amp; Intake
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        WCAG AAA accessible 2-click scheduling, digital intake forms, and automated SMS appointment reminders.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          AES-256 Data Security
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Multi-role clinician/patient dashboards with end-to-end encryption and immutable BAA audit logs.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Right Column: Connected Image with Live Healthcare Badges (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl group">
                    <img
                      src="/industries/healthcare_connect.jpg"
                      alt="Healthcare Technology and Clinical Systems"
                      className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md border border-zinc-700 text-white px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#fbea3d] animate-pulse"></span>
                      <span className="font-mono text-xs font-bold text-[#fbea3d]">HIPAA &amp; FHIR COMPLIANT</span>
                    </div>

                    {/* Bottom Floating Info Card */}
                    <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md border border-zinc-200 p-5 rounded-2xl shadow-xl flex flex-col gap-1.5 text-black">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-zinc-500 uppercase">CLINICAL CONNECTIVITY</span>
                        <span className="px-2 py-0.5 rounded-md bg-black text-[#fbea3d] font-mono text-[10px] font-bold">256-BIT SSL</span>
                      </div>
                      <h4 className="text-sm font-bold font-display text-zinc-900">
                        Connecting Doctors, Labs &amp; Patients
                      </h4>
                      <p className="text-[11px] text-zinc-600 leading-relaxed">
                        Frictionless web and mobile care portals engineered for reliability, data privacy, and rapid clinical adoption.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              <>
                {/* Overview Intro */}
                <div className="max-w-4xl flex flex-col gap-4 text-left">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                    // HOW WE ENGAGE &amp; DELIVER
                  </span>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-900 font-display tracking-tight leading-tight">
                    {industry.heroHeadline}{" "}
                    <span className="text-zinc-950 underline decoration-[#fbea3d] decoration-4 underline-offset-4">
                      {industry.heroHighlight}
                    </span>
                  </h2>
                  <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                    {industry.overview}
                  </p>
                </div>

                {/* 3-Column Focus Areas Grid */}
                {industry.focusAreas && industry.focusAreas.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {industry.focusAreas.map((area, idx) => (
                      <div
                        key={idx}
                        className="bg-[#fafafb] border border-zinc-200/90 rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:border-zinc-400 hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-zinc-900 text-[#fbea3d] font-mono text-[10px] font-bold uppercase tracking-wider">
                              {area.badge}
                            </span>
                            <span className="text-xs font-mono font-bold text-zinc-400">0{idx + 1}</span>
                          </div>

                          <h3 className="text-xl font-bold font-display text-zinc-900 group-hover:text-black">
                            {area.title}
                          </h3>

                          <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                            {area.desc}
                          </p>

                          <div className="pt-4 border-t border-zinc-200/70 flex flex-col gap-2.5">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                              CORE DELIVERABLES
                            </span>
                            <ul className="flex flex-col gap-2 text-xs text-zinc-800 font-medium">
                              {area.highlights.map((item, hIdx) => (
                                <li key={hIdx} className="flex items-start gap-2">
                                  <span className="text-black bg-[#fbea3d] rounded-full w-3.5 h-3.5 flex items-center justify-center text-[9px] font-black shrink-0 mt-0.5">✓</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-zinc-50 border border-zinc-200 p-8 sm:p-10 rounded-3xl flex flex-col gap-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200 text-zinc-800 font-mono text-xs font-bold uppercase tracking-wider w-fit">
                        <span>•</span>
                        <span>COMMON INDUSTRY CHALLENGES</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-zinc-900 font-display">
                        Navigating Complex Requirements
                      </h3>
                      <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                        {industry.theChallenge}
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200 p-8 sm:p-10 rounded-3xl flex flex-col gap-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#fbea3d] font-mono text-xs font-bold uppercase tracking-wider w-fit">
                        <span>✓</span>
                        <span>OUR PRACTICAL APPROACH</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-zinc-900 font-display">
                        Delivering Scalable Outcomes
                      </h3>
                      <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                        {industry.ourSolution}
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}

          </div>
        </section>

        {/* 4. INTERACTIVE SOLUTIONS SHOWCASE */}
        {industry.slug === "hospitality" ? (
          /* HIGH-END BLACK LUXURY SOLUTIONS SHOWCASE FOR HOSPITALITY */
          <section className="w-full bg-[#09090b] text-white py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-y border-zinc-800">
            <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-800/90 pb-6">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#fbea3d] block mb-1">
                    // BESPOKE HOSPITALITY ARCHITECTURE
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-white">
                    Specialized Digital Solutions for Luxury Hospitality
                  </h2>
                </div>
                <p className="text-zinc-400 text-xs sm:text-sm font-medium max-w-md text-left sm:text-right">
                  High-margin direct booking engines, VIP table reservation suites, and automated guest concierge pipelines.
                </p>
              </div>

              {/* Grid of 4 High-Impact Luxury Hospitality Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* 01: Direct Booking */}
                <div className="bg-zinc-900/90 border border-zinc-800/90 rounded-3xl p-7 flex flex-col justify-between hover:border-[#fbea3d] hover:shadow-[0_4px_30px_rgba(251,234,61,0.12)] transition-all duration-300 group">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="w-9 h-9 rounded-xl bg-black border border-zinc-700 text-[#fbea3d] font-mono font-black text-xs flex items-center justify-center">
                        01
                      </span>
                      <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider">
                        DIRECT YIELD
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black font-display text-white group-hover:text-[#fbea3d] transition-colors">
                      Direct Room Booking Engine
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed">
                      Zero-commission guest reservation pipelines with live PMS rate sync, multi-tier pricing, and 1-click Apple Pay checkout.
                    </p>
                    <div className="py-2 px-3 rounded-xl bg-black/60 border border-zinc-800 text-xs font-semibold text-[#fbea3d] flex items-center gap-2">
                      <span>✓</span>
                      <span>Saves 15–25% OTA Fees</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-zinc-800/80">
                    <span className="px-2.5 py-0.5 rounded-full bg-black border border-zinc-800 text-[10px] font-mono text-zinc-300">SynXis</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black border border-zinc-800 text-[10px] font-mono text-zinc-300">Mews PMS</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black border border-zinc-800 text-[10px] font-mono text-zinc-300">Opera</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black border border-zinc-800 text-[10px] font-mono text-zinc-300">Apple Pay</span>
                  </div>
                </div>

                {/* 02: VIP Dining */}
                <div className="bg-zinc-900/90 border border-zinc-800/90 rounded-3xl p-7 flex flex-col justify-between hover:border-[#fbea3d] hover:shadow-[0_4px_30px_rgba(251,234,61,0.12)] transition-all duration-300 group">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="w-9 h-9 rounded-xl bg-black border border-zinc-700 text-[#fbea3d] font-mono font-black text-xs flex items-center justify-center">
                        02
                      </span>
                      <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider">
                        VIP DINING
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black font-display text-white group-hover:text-[#fbea3d] transition-colors">
                      VIP Table &amp; Dining Suite
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed">
                      Interactive floor plan booking, automated minimum spend holds, bottle service pre-orders, and VIP guest profile tagging.
                    </p>
                    <div className="py-2 px-3 rounded-xl bg-black/60 border border-zinc-800 text-xs font-semibold text-[#fbea3d] flex items-center gap-2">
                      <span>✓</span>
                      <span>Zero Guest No-Shows</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-zinc-800/80">
                    <span className="px-2.5 py-0.5 rounded-full bg-black border border-zinc-800 text-[10px] font-mono text-zinc-300">SevenRooms</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black border border-zinc-800 text-[10px] font-mono text-zinc-300">Resy API</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black border border-zinc-800 text-[10px] font-mono text-zinc-300">OpenTable</span>
                  </div>
                </div>

                {/* 03: Experiential Websites */}
                <div className="bg-zinc-900/90 border border-zinc-800/90 rounded-3xl p-7 flex flex-col justify-between hover:border-[#fbea3d] hover:shadow-[0_4px_30px_rgba(251,234,61,0.12)] transition-all duration-300 group">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="w-9 h-9 rounded-xl bg-black border border-zinc-700 text-[#fbea3d] font-mono font-black text-xs flex items-center justify-center">
                        03
                      </span>
                      <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider">
                        STORYTELLING
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black font-display text-white group-hover:text-[#fbea3d] transition-colors">
                      Cinematic Brand Platforms
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed">
                      Silky 60fps micro-animations, full-bleed 4K room tours, and localized multi-language content converting affluent travelers.
                    </p>
                    <div className="py-2 px-3 rounded-xl bg-black/60 border border-zinc-800 text-xs font-semibold text-[#fbea3d] flex items-center gap-2">
                      <span>✓</span>
                      <span>3.2x Higher Booking Time</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-zinc-800/80">
                    <span className="px-2.5 py-0.5 rounded-full bg-black border border-zinc-800 text-[10px] font-mono text-zinc-300">Next.js</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black border border-zinc-800 text-[10px] font-mono text-zinc-300">60fps Motion</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black border border-zinc-800 text-[10px] font-mono text-zinc-300">i18n</span>
                  </div>
                </div>

                {/* 04: Concierge & Upsells */}
                <div className="bg-zinc-900/90 border border-zinc-800/90 rounded-3xl p-7 flex flex-col justify-between hover:border-[#fbea3d] hover:shadow-[0_4px_30px_rgba(251,234,61,0.12)] transition-all duration-300 group">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="w-9 h-9 rounded-xl bg-black border border-zinc-700 text-[#fbea3d] font-mono font-black text-xs flex items-center justify-center">
                        04
                      </span>
                      <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider">
                        RETENTION
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black font-display text-white group-hover:text-[#fbea3d] transition-colors">
                      Automated Concierge Flows
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed">
                      Pre-arrival SMS &amp; WhatsApp sequences offering room upgrades, chauffeur pickups, spa bookings, and digital room keys.
                    </p>
                    <div className="py-2 px-3 rounded-xl bg-black/60 border border-zinc-800 text-xs font-semibold text-[#fbea3d] flex items-center gap-2">
                      <span>✓</span>
                      <span>+28% Ancillary Revenue</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-zinc-800/80">
                    <span className="px-2.5 py-0.5 rounded-full bg-black border border-zinc-800 text-[10px] font-mono text-zinc-300">Twilio SMS</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black border border-zinc-800 text-[10px] font-mono text-zinc-300">WhatsApp</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black border border-zinc-800 text-[10px] font-mono text-zinc-300">CRM</span>
                  </div>
                </div>

              </div>

            </div>
          </section>
        ) : (
          <section className="w-full bg-[#0c0c0d] text-white py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-y border-zinc-800">
            <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-800 pb-6">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#fbea3d] block mb-1">
                    // TAILORED ARCHITECTURE
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-white">
                    Specialized Solutions for {industry.name}
                  </h2>
                </div>
                <p className="text-zinc-400 text-xs sm:text-sm font-medium max-w-md text-left sm:text-right">
                  Explore our modular technical components engineered specifically for {industry.name} workflows.
                </p>
              </div>

              {/* Grid of Interactive Solution Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {industry.solutions.map((sol, idx) => {
                  const isActive = activeSolutionTab === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveSolutionTab(idx)}
                      className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                        isActive
                          ? "bg-zinc-900 border-[#fbea3d] shadow-[0_4px_20px_rgba(251,234,61,0.15)] scale-102"
                          : "bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/90"
                      }`}
                    >
                      <div className="flex flex-col gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center text-[#fbea3d] font-mono text-xs font-bold">
                          0{idx + 1}
                        </div>
                        <h4 className="text-lg font-bold font-display text-white">
                          {sol.title}
                        </h4>
                        <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed">
                          {sol.desc}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-zinc-800/80">
                        {sol.tags.map((t, tIdx) => (
                          <span key={tIdx} className="px-2.5 py-0.5 rounded-full bg-zinc-800 text-[10px] font-mono text-zinc-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>
        )}

        {/* 5. KEY CAPABILITIES & DELIVERABLES */}
        <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 text-black">
          <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-1">
                  DELIVERY CAPABILITIES ({industry.capabilities.length})
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 font-display tracking-tight">
                  What We Deliver for {industry.name}
                </h2>
              </div>
              <p className="text-zinc-600 text-xs sm:text-sm font-medium max-w-md text-left sm:text-right">
                Every deliverable comes complete with full code IP ownership, automated testing, and comprehensive documentation.
              </p>
            </div>

            {/* Grid of Capabilities with Visual Photography */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industry.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="bg-[#fafafb] border border-zinc-200/90 rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-zinc-400 transition-all duration-300 group"
                >
                  {/* Top Image if Available */}
                  {cap.image && (
                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-950 border-b border-zinc-200/80">
                      <img
                        src={cap.image}
                        alt={cap.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/85 text-[#fbea3d] font-mono text-[11px] font-bold uppercase tracking-wider backdrop-blur-md border border-zinc-800">
                        PRACTICE 0{idx + 1}
                      </div>
                    </div>
                  )}

                  {/* Card Body */}
                  <div className="p-7 sm:p-8 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      {!cap.image && (
                        <span className="w-8 h-8 rounded-full bg-zinc-900 text-[#fbea3d] font-mono text-xs font-black flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                      )}
                      <h3 className="text-xl sm:text-2xl font-black font-display text-zinc-900 group-hover:text-black transition-colors">
                        {cap.title}
                      </h3>
                    </div>

                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                      {cap.description}
                    </p>

                    <div className="pt-4 border-t border-zinc-200/70 flex flex-col gap-2.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                        DELIVERABLE CHECKLIST
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cap.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs font-medium text-zinc-800">
                            <span className="text-black bg-[#fbea3d] rounded-full w-3.5 h-3.5 flex items-center justify-center text-[9px] font-black shrink-0">✓</span>
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 6. CASE STUDY HIGHLIGHT / HEALTHCARE, REAL ESTATE & HOSPITALITY INFRASTRUCTURE */}
        {industry.slug === "healthcare" ? (
          /* CLEAN HEALTHCARE CLINICAL INFRASTRUCTURE SECTION (PHOTO + INTEGRATIONS) */
          <section className="w-full bg-[#fafafb] py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 text-black border-b border-zinc-200">
            <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Column: Clean Clinical Lifestyle Photo with Floating Badges (5 cols) */}
                <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl group">
                  <img
                    src="/industries/healthcare_overview.jpg"
                    alt="Clinical HealthTech Infrastructure"
                    className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md border border-zinc-700 text-white px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#fbea3d] animate-pulse"></span>
                    <span className="font-mono text-xs font-bold text-[#fbea3d]">HIPAA &amp; FHIR v4.0 READY</span>
                  </div>

                  {/* Bottom Info Card */}
                  <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md border border-zinc-200 p-5 rounded-2xl shadow-xl flex flex-col gap-1 text-black">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-zinc-500 uppercase">CLINICAL INFRASTRUCTURE</span>
                      <span className="px-2 py-0.5 rounded-md bg-black text-[#fbea3d] font-mono text-[10px] font-bold">99.99% UPTIME</span>
                    </div>
                    <h4 className="text-sm font-bold font-display text-zinc-900">
                      Hospital-Grade HealthTech Engineering
                    </h4>
                    <p className="text-[11px] text-zinc-600 leading-relaxed">
                      Encrypted data pipelines and real-time medical integrations connecting practitioners and patients.
                    </p>
                  </div>
                </div>

                {/* Right Column: HealthTech Systems & Core Integrations (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  
                  <div className="flex flex-col gap-3 text-left border-b border-zinc-200 pb-5">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                      // CLINICAL INFRASTRUCTURE &amp; EHR
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-zinc-900">
                      HealthTech Architecture &amp; Integrations
                    </h2>
                    <p className="text-zinc-600 text-xs sm:text-sm font-medium leading-relaxed">
                      We engineer secure, accessible clinical systems that integrate directly into existing hospital networks and private medical practices.
                    </p>
                  </div>

                  {/* 4 Clean System Capability Rows */}
                  <div className="flex flex-col gap-3.5">
                    
                    <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-zinc-400 hover:shadow-sm transition-all">
                      <div className="flex items-start sm:items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-bold font-display text-zinc-900">
                            EHR &amp; EMR Bi-Directional Connectors
                          </h4>
                          <p className="text-xs text-zinc-600 leading-relaxed">
                            Native HL7 &amp; FHIR integration for Epic, Cerner, AthenaHealth, and Allscripts.
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 font-mono text-[10px] font-bold uppercase self-start sm:self-center shrink-0">
                        FHIR v4.0
                      </span>
                    </div>

                    <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-zinc-400 hover:shadow-sm transition-all">
                      <div className="flex items-start sm:items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-bold font-display text-zinc-900">
                            Encrypted WebRTC Telehealth
                          </h4>
                          <p className="text-xs text-zinc-600 leading-relaxed">
                            Peer-to-peer 256-bit encrypted video consultation rooms with zero app installations.
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 font-mono text-[10px] font-bold uppercase self-start sm:self-center shrink-0">
                        WEBRTC
                      </span>
                    </div>

                    <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-zinc-400 hover:shadow-sm transition-all">
                      <div className="flex items-start sm:items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-bold font-display text-zinc-900">
                            Automated Patient Intake &amp; SMS
                          </h4>
                          <p className="text-xs text-zinc-600 leading-relaxed">
                            Twilio-powered appointment reminders and digital intake consent signing.
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 font-mono text-[10px] font-bold uppercase self-start sm:self-center shrink-0">
                        AUTOMATION
                      </span>
                    </div>

                    <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-zinc-400 hover:shadow-sm transition-all">
                      <div className="flex items-start sm:items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-bold font-display text-zinc-900">
                            HIPAA Business Associate Agreements (BAA)
                          </h4>
                          <p className="text-xs text-zinc-600 leading-relaxed">
                            Dedicated encrypted databases on AWS GovCloud with immutable audit logging.
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 font-mono text-[10px] font-bold uppercase self-start sm:self-center shrink-0">
                        COMPLIANCE
                      </span>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </section>
        ) : industry.slug === "real-estate" ? (
          /* CLEAN REAL ESTATE PROPTECH INFRASTRUCTURE SECTION (PHOTO + INTEGRATIONS) */
          <section className="w-full bg-[#fafafb] py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 text-black border-b border-zinc-200">
            <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Column: Clean Architectural Photo with Floating Badges (5 cols) */}
                <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl group">
                  <img
                    src="/industries/real_estate_infra.jpg"
                    alt="PropTech Platform & Architecture"
                    className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md border border-zinc-700 text-white px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#fbea3d] animate-pulse"></span>
                    <span className="font-mono text-xs font-bold text-[#fbea3d]">RESO WEB API &amp; IDX CERTIFIED</span>
                  </div>

                  {/* Bottom Info Card */}
                  <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md border border-zinc-200 p-5 rounded-2xl shadow-xl flex flex-col gap-1 text-black">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-zinc-500 uppercase">PROPTECH INFRASTRUCTURE</span>
                      <span className="px-2 py-0.5 rounded-md bg-black text-[#fbea3d] font-mono text-[10px] font-bold">SUB-SECOND SYNC</span>
                    </div>
                    <h4 className="text-sm font-bold font-display text-zinc-900">
                      High-Volume Real Estate Portals
                    </h4>
                    <p className="text-[11px] text-zinc-600 leading-relaxed">
                      Scalable MLS data pipelines and interactive map search engines engineered for top-producing brokerages.
                    </p>
                  </div>
                </div>

                {/* Right Column: PropTech Systems & Core Integrations (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  
                  <div className="flex flex-col gap-3 text-left border-b border-zinc-200 pb-5">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                      // PROPTECH INFRASTRUCTURE &amp; MLS
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-zinc-900">
                      Enterprise MLS &amp; Brokerage Systems
                    </h2>
                    <p className="text-zinc-600 text-xs sm:text-sm font-medium leading-relaxed">
                      We connect your brokerage website directly to regional MLS boards, custom CRM pipelines, and high-converting tour scheduling systems.
                    </p>
                  </div>

                  {/* 4 Clean System Capability Rows */}
                  <div className="flex flex-col gap-3.5">
                    
                    <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-zinc-400 hover:shadow-sm transition-all">
                      <div className="flex items-start sm:items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-bold font-display text-zinc-900">
                            RESO Web API &amp; MLS Grid Connectors
                          </h4>
                          <p className="text-xs text-zinc-600 leading-relaxed">
                            Continuous data ingestion from CRMLS, Bright MLS, Stellar MLS, and national syndication feeds.
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 font-mono text-[10px] font-bold uppercase self-start sm:self-center shrink-0">
                        MLS GRID
                      </span>
                    </div>

                    <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-zinc-400 hover:shadow-sm transition-all">
                      <div className="flex items-start sm:items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-bold font-display text-zinc-900">
                            Custom Polygon Map Search Engines
                          </h4>
                          <p className="text-xs text-zinc-600 leading-relaxed">
                            MapBox GL vector search with instant boundary filtering and GreatSchools district data layers.
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 font-mono text-[10px] font-bold uppercase self-start sm:self-center shrink-0">
                        MAPBOX GL
                      </span>
                    </div>

                    <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-zinc-400 hover:shadow-sm transition-all">
                      <div className="flex items-start sm:items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-bold font-display text-zinc-900">
                            Automated Tour Booking &amp; SMS Routing
                          </h4>
                          <p className="text-xs text-zinc-600 leading-relaxed">
                            Instant in-person showing requests synced with listing agent calendars and automated SMS alerts.
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 font-mono text-[10px] font-bold uppercase self-start sm:self-center shrink-0">
                        CALENDAR
                      </span>
                    </div>

                    <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-zinc-400 hover:shadow-sm transition-all">
                      <div className="flex items-start sm:items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-bold font-display text-zinc-900">
                            CRM &amp; Lead Management Pipelines
                          </h4>
                          <p className="text-xs text-zinc-600 leading-relaxed">
                            Bi-directional lead sync to Follow Up Boss, Salesforce, HubSpot, and kvCORE with zero lost inquiries.
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 font-mono text-[10px] font-bold uppercase self-start sm:self-center shrink-0">
                        CRM SYNC
                      </span>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </section>
        ) : industry.slug === "education" ? (
          /* CLEAN EDUCATION DIGITAL GROWTH & INSTITUTIONAL SEO STUDIO (PHOTO + SERVICES) */
          <section className="w-full bg-[#fafafb] py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 text-black border-b border-zinc-200">
            <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Column: Clean Tech Classroom Photo with Floating Badges (5 cols) */}
                <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl group">
                  <img
                    src="/industries/edu_cap_classroom.jpg"
                    alt="Higher-Ed Institutional SEO and Student Enrollment Strategy"
                    className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md border border-zinc-700 text-white px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#fbea3d] animate-pulse"></span>
                    <span className="font-mono text-xs font-bold text-[#fbea3d]">HIGHER-ED SEO &amp; GROWTH</span>
                  </div>

                  {/* Bottom Info Card */}
                  <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md border border-zinc-200 p-5 rounded-2xl shadow-xl flex flex-col gap-1 text-black">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-zinc-500 uppercase">INSTITUTIONAL SERVICES</span>
                      <span className="px-2 py-0.5 rounded-md bg-black text-[#fbea3d] font-mono text-[10px] font-bold">PROVEN ROI</span>
                    </div>
                    <h4 className="text-sm font-bold font-display text-zinc-900">
                      Admissions Lead Pipelines
                    </h4>
                    <p className="text-[11px] text-zinc-600 leading-relaxed">
                      Transforming institutional web traffic into qualified campus visits, prospectus downloads, and enrolled students.
                    </p>
                  </div>
                </div>

                {/* Right Column: Education Growth Services & Core Strategy (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  
                  <div className="flex flex-col gap-3 text-left border-b border-zinc-200 pb-5">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                      // INSTITUTIONAL SERVICES &amp; GROWTH
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-zinc-900">
                      Education Digital Services &amp; Search Strategy
                    </h2>
                    <p className="text-zinc-600 text-xs sm:text-sm font-medium leading-relaxed">
                      We partner with universities, private schools, academies, and coaching institutes to engineer their digital presence and fill classrooms.
                    </p>
                  </div>

                  {/* 4 Clean System Capability Rows */}
                  <div className="flex flex-col gap-3.5">
                    
                    <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-zinc-400 hover:shadow-sm transition-all">
                      <div className="flex items-start sm:items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-bold font-display text-zinc-900">
                            Course Search SEO &amp; Keyword Rankings
                          </h4>
                          <p className="text-xs text-zinc-600 leading-relaxed">
                            Dominating page 1 of Google for high-intent degree, diploma, and certification search queries.
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 font-mono text-[10px] font-bold uppercase self-start sm:self-center shrink-0">
                        ACADEMIC SEO
                      </span>
                    </div>

                    <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-zinc-400 hover:shadow-sm transition-all">
                      <div className="flex items-start sm:items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-bold font-display text-zinc-900">
                            High-Intent Google Ads &amp; Paid Media
                          </h4>
                          <p className="text-xs text-zinc-600 leading-relaxed">
                            Laser-targeted search and YouTube campaigns engineered to generate student applications at low CPA.
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 font-mono text-[10px] font-bold uppercase self-start sm:self-center shrink-0">
                        PAID SEARCH
                      </span>
                    </div>

                    <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-zinc-400 hover:shadow-sm transition-all">
                      <div className="flex items-start sm:items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-bold font-display text-zinc-900">
                            Campus Visit Booking &amp; Application Funnels
                          </h4>
                          <p className="text-xs text-zinc-600 leading-relaxed">
                            Frictionless prospectus download flows and virtual campus tour scheduling modules.
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 font-mono text-[10px] font-bold uppercase self-start sm:self-center shrink-0">
                        CONVERSIONS
                      </span>
                    </div>

                    <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-zinc-400 hover:shadow-sm transition-all">
                      <div className="flex items-start sm:items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-bold font-display text-zinc-900">
                            Admissions CRM Sync &amp; Lead Nurturing
                          </h4>
                          <p className="text-xs text-zinc-600 leading-relaxed">
                            Automated HubSpot / Salesforce CRM integrations with multi-touch email and SMS applicant follow-ups.
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 font-mono text-[10px] font-bold uppercase self-start sm:self-center shrink-0">
                        CRM &amp; NURTURE
                      </span>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </section>
        ) : !["healthcare", "real-estate", "hospitality", "food-beverages", "jewellery", "education"].includes(industry.slug) && industry.caseStudies.length > 0 ? (
          <section className="w-full bg-[#0c0c0d] text-white py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-800">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
              
              <div className="flex flex-col items-start text-left max-w-3xl">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#fbea3d] mb-1">
                  // PROVEN COMMERCIAL ROI
                </span>
                <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white">
                  Case Study: {industry.caseStudies[0].title}
                </h2>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={industry.caseStudies[0].image}
                    alt={industry.caseStudies[0].title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col gap-5 text-left">
                  <span className="px-3 py-1 rounded-full bg-black/80 border border-zinc-700 text-[#fbea3d] font-mono text-xs font-bold w-fit">
                    CLIENT: {industry.caseStudies[0].client}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                    {industry.caseStudies[0].title}
                  </h3>
                  <div className="bg-zinc-800/80 border-l-4 border-l-[#fbea3d] p-4 rounded-xl">
                    <span className="text-xs font-mono text-zinc-400 block mb-1 uppercase font-bold">MEASURABLE IMPACT</span>
                    <p className="text-white text-sm sm:text-base font-semibold">
                      {industry.caseStudies[0].impact}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>
        ) : null}

        {/* 7. OUR COMMERCE & ENGINEERING STANDARDS (Hidden on Healthcare, Real Estate, Hospitality, Food-Beverages, Jewellery & Education per user request) */}
        {!["healthcare", "real-estate", "hospitality", "food-beverages", "jewellery", "education"].includes(industry.slug) && (
          <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 text-black border-b border-zinc-200">
            <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
              
              {/* Clean Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-1">
                    // {industry.slug === "ecommerce" ? "STORE STANDARDS & PERFORMANCE" : "ENGINEERING STANDARDS"}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-display text-zinc-900">
                    {industry.slug === "ecommerce"
                      ? "Our E-Commerce & Shopify Standards"
                      : `Our Engineering Guarantees for ${industry.name}`}
                  </h3>
                </div>
                <p className="text-zinc-600 text-xs sm:text-sm font-medium max-w-md text-left sm:text-right">
                  {industry.slug === "ecommerce"
                    ? "Every storefront is engineered for sub-second page loads, high conversion rates, and zero third-party app bloat."
                    : "Direct senior engineer access, transparent development, and complete source code ownership."}
                </p>
              </div>

              {/* 4 Clean Minimalist Cards on Light White Background */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {industry.slug === "ecommerce" ? (
                  <>
                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-3xl p-7 flex flex-col justify-between hover:border-zinc-400 hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <span className="w-9 h-9 rounded-xl bg-black text-[#fbea3d] font-mono font-black text-xs flex items-center justify-center">
                            01
                          </span>
                          <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase">SPEED</span>
                        </div>
                        <h4 className="text-lg font-bold font-display text-zinc-900">
                          Sub-Second Page Loads
                        </h4>
                        <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed">
                          95+ Google Core Web Vitals score across all mobile devices so visitors never bounce before seeing your products.
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-zinc-200/70 flex items-center gap-2 text-xs font-semibold text-zinc-900">
                        <span className="text-black bg-[#fbea3d] rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-black">✓</span>
                        <span>95+ Mobile Google Score</span>
                      </div>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-3xl p-7 flex flex-col justify-between hover:border-zinc-400 hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <span className="w-9 h-9 rounded-xl bg-black text-[#fbea3d] font-mono font-black text-xs flex items-center justify-center">
                            02
                          </span>
                          <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase">CHECKOUT</span>
                        </div>
                        <h4 className="text-lg font-bold font-display text-zinc-900">
                          1-Click Checkout &amp; Upsells
                        </h4>
                        <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed">
                          Integrated Shop Pay, Apple Pay, and slide-out cart drawers with tiered free shipping and dynamic bundling.
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-zinc-200/70 flex items-center gap-2 text-xs font-semibold text-zinc-900">
                        <span className="text-black bg-[#fbea3d] rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-black">✓</span>
                        <span>Native Slide-Out Cart</span>
                      </div>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-3xl p-7 flex flex-col justify-between hover:border-zinc-400 hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <span className="w-9 h-9 rounded-xl bg-black text-[#fbea3d] font-mono font-black text-xs flex items-center justify-center">
                            03
                          </span>
                          <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase">RETENTION</span>
                        </div>
                        <h4 className="text-lg font-bold font-display text-zinc-900">
                          Klaviyo &amp; SMS Automation
                        </h4>
                        <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed">
                          Fully orchestrated Abandoned Cart, Browse Recovery, and VIP customer winbacks that drive predictable repeat revenue.
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-zinc-200/70 flex items-center gap-2 text-xs font-semibold text-zinc-900">
                        <span className="text-black bg-[#fbea3d] rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-black">✓</span>
                        <span>Lifecycle Flow Architecture</span>
                      </div>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-3xl p-7 flex flex-col justify-between hover:border-zinc-400 hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <span className="w-9 h-9 rounded-xl bg-black text-[#fbea3d] font-mono font-black text-xs flex items-center justify-center">
                            04
                          </span>
                          <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase">CODE IP</span>
                        </div>
                        <h4 className="text-lg font-bold font-display text-zinc-900">
                          Zero App Bloat Guarantee
                        </h4>
                        <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed">
                          Native Liquid and React components eliminating slow monthly subscription apps and keeping your store clean.
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-zinc-200/70 flex items-center gap-2 text-xs font-semibold text-zinc-900">
                        <span className="text-black bg-[#fbea3d] rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-black">✓</span>
                        <span>100% Theme Code Ownership</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-3xl p-7 flex flex-col justify-between hover:border-zinc-400 hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <span className="w-9 h-9 rounded-xl bg-black text-[#fbea3d] font-mono font-black text-xs flex items-center justify-center">
                            01
                          </span>
                          <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase">ACCESS</span>
                        </div>
                        <h4 className="text-lg font-bold font-display text-zinc-900">
                          Direct Senior Engineer Access
                        </h4>
                        <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed">
                          No middle managers or telephone games. You collaborate directly with senior full-stack developers in Slack and GitHub.
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-zinc-200/70 flex items-center gap-2 text-xs font-semibold text-zinc-900">
                        <span className="text-black bg-[#fbea3d] rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-black">✓</span>
                        <span>Slack &amp; GitHub Sync</span>
                      </div>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-3xl p-7 flex flex-col justify-between hover:border-zinc-400 hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <span className="w-9 h-9 rounded-xl bg-black text-[#fbea3d] font-mono font-black text-xs flex items-center justify-center">
                            02
                          </span>
                          <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase">CODE IP</span>
                        </div>
                        <h4 className="text-lg font-bold font-display text-zinc-900">
                          100% Source Code Ownership
                        </h4>
                        <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed">
                          Every line of code, database migration, and cloud configuration is committed directly to your organization.
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-zinc-200/70 flex items-center gap-2 text-xs font-semibold text-zinc-900">
                        <span className="text-black bg-[#fbea3d] rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-black">✓</span>
                        <span>Full Commercial Rights</span>
                      </div>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-3xl p-7 flex flex-col justify-between hover:border-zinc-400 hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <span className="w-9 h-9 rounded-xl bg-black text-[#fbea3d] font-mono font-black text-xs flex items-center justify-center">
                            03
                          </span>
                          <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase">PREVIEWS</span>
                        </div>
                        <h4 className="text-lg font-bold font-display text-zinc-900">
                          Bi-Weekly Staging Previews
                        </h4>
                        <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed">
                          We deploy live staging preview URLs for every sprint so your team can test features in real-time before release.
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-zinc-200/70 flex items-center gap-2 text-xs font-semibold text-zinc-900">
                        <span className="text-black bg-[#fbea3d] rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-black">✓</span>
                        <span>Live Staging URLs</span>
                      </div>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-3xl p-7 flex flex-col justify-between hover:border-zinc-400 hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <span className="w-9 h-9 rounded-xl bg-black text-[#fbea3d] font-mono font-black text-xs flex items-center justify-center">
                            04
                          </span>
                          <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase">FREEDOM</span>
                        </div>
                        <h4 className="text-lg font-bold font-display text-zinc-900">
                          Zero Vendor Lock-In
                        </h4>
                        <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed">
                          Built with standard open-source technologies (Next.js, PostgreSQL, Docker) that your team can easily extend.
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-zinc-200/70 flex items-center gap-2 text-xs font-semibold text-zinc-900">
                        <span className="text-black bg-[#fbea3d] rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-black">✓</span>
                        <span>Standard Open Tech</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

            </div>
          </section>
        )}

        {/* 8. 4-PHASE DELIVERY CYCLE (Hidden on E-Commerce, Healthcare, Real Estate, Hospitality, Food-Beverages, Jewellery & Education per user request) */}
        {!["ecommerce", "healthcare", "real-estate", "hospitality", "food-beverages", "jewellery", "education"].includes(industry.slug) && (
          <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 text-black border-b border-zinc-200">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
              <div className="text-left">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-1">
                  AGILE METHODOLOGY
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 font-display tracking-tight">
                  Our 4-Phase Delivery Process
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {industry.processSteps.map((step, idx) => (
                  <div key={idx} className="bg-[#fafafb] border border-zinc-200 p-6 rounded-3xl flex flex-col gap-3">
                    <span className="w-10 h-10 rounded-xl bg-black text-[#fbea3d] flex items-center justify-center font-black font-mono text-sm border border-zinc-800">
                      {step.step}
                    </span>
                    <h4 className="text-base font-bold font-display text-zinc-900 mt-1">{step.title}</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 9. FAQ ACCORDION */}
        <section className="w-full bg-[#fafafb] py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 text-black">
          <div className="max-w-4xl mx-auto flex flex-col gap-10">
            <div className="text-left">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-1">
                COMMON QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 font-display tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              {industry.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-2xs">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer font-display font-bold text-base sm:text-lg text-zinc-900 hover:text-black"
                    >
                      <span>{faq.question}</span>
                      <span className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 font-mono text-sm text-zinc-600">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 mt-2 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 10. EXPLORE OTHER INDUSTRIES CAROUSEL/GRID */}
        <section className="w-full bg-[#0c0c0d] text-white py-16 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#fbea3d]">
                  // OTHER SECTORS
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                  Explore More Industry Domains
                </h3>
              </div>
              <Link
                href="/industries"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-[#fbea3d] font-bold uppercase hover:underline"
              >
                <span>View All Sectors →</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {otherIndustries.slice(0, 4).map((other) => (
                <Link
                  key={other.slug}
                  href={`/industries/${other.slug}`}
                  className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#fbea3d] transition-all duration-200 flex flex-col gap-2 group cursor-pointer"
                >
                  <span className="text-[10px] font-mono font-bold text-[#fbea3d] uppercase tracking-wider">
                    {other.badge}
                  </span>
                  <h4 className="text-sm font-bold font-display text-white group-hover:text-[#fbea3d] transition-colors">
                    {other.name} →
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <NewsletterSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
