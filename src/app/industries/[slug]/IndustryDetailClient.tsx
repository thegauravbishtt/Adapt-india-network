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

  if (industry.slug === "agriculture-agritech") {
    return (
      <LanguageProvider>
        <div className="min-h-screen bg-white flex flex-col overflow-x-clip relative w-full select-none text-zinc-900">
          <Navbar />

          {/* 1. HERO BANNER (Original Sleek Background Banner with Visible Imagery) */}
          <section className="relative w-full text-white pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
            
            {/* Background Image with Clear Directional Gradient */}
            <div className="absolute inset-0 z-0">
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover object-center scale-100 filter brightness-[0.78] contrast-[1.08]"
              />
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

          {/* 2. WHAT WE DO (Simple, honest 4-card grid) */}
          <section id="services" className="w-full bg-white py-20 sm:py-28 px-5 sm:px-10 lg:px-16 border-b border-zinc-100">
            <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
              
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
                  OUR SERVICES
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 font-display tracking-tight">
                  Everything Your Farm Needs to Grow Online
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base mt-3 leading-relaxed">
                  No complicated tech jargon. Just straightforward digital tools that bring customers to your farm.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Card 1 */}
                <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 flex flex-col gap-4 hover:border-zinc-400 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#fbea3d] text-zinc-950 font-black text-xl flex items-center justify-center shadow-xs">
                    🌱
                  </div>
                  <h3 className="text-xl font-bold font-display text-zinc-900">
                    Custom Farm Websites
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Fast, clean, mobile-friendly websites that showcase your farm, your story, your crops, and how visitors can find or contact you.
                  </p>
                  <ul className="flex flex-col gap-2 pt-3 border-t border-zinc-200/70 text-xs text-zinc-700 font-medium">
                    <li className="flex items-center gap-2">✓ Photo &amp; harvest galleries</li>
                    <li className="flex items-center gap-2">✓ Farm visit &amp; event info</li>
                    <li className="flex items-center gap-2">✓ Fast on smartphones</li>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 flex flex-col gap-4 hover:border-zinc-400 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#fbea3d] text-zinc-950 font-black text-xl flex items-center justify-center shadow-xs">
                    🧺
                  </div>
                  <h3 className="text-xl font-bold font-display text-zinc-900">
                    Direct-to-Consumer Produce Stores
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Simple online stores where local families can order weekly produce boxes, seasonal harvests, or farm goods with easy pickup or delivery.
                  </p>
                  <ul className="flex flex-col gap-2 pt-3 border-t border-zinc-200/70 text-xs text-zinc-700 font-medium">
                    <li className="flex items-center gap-2">✓ Weekly box subscriptions</li>
                    <li className="flex items-center gap-2">✓ Farm stand pickup scheduling</li>
                    <li className="flex items-center gap-2">✓ 0% middleman app commissions</li>
                  </ul>
                </div>

                {/* Card 3 */}
                <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 flex flex-col gap-4 hover:border-zinc-400 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#fbea3d] text-zinc-950 font-black text-xl flex items-center justify-center shadow-xs">
                    📦
                  </div>
                  <h3 className="text-xl font-bold font-display text-zinc-900">
                    Wholesale Inquiry Portals
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Straightforward product catalogs and order inquiry forms for restaurants, local grocery stores, and commercial food distributors.
                  </p>
                  <ul className="flex flex-col gap-2 pt-3 border-t border-zinc-200/70 text-xs text-zinc-700 font-medium">
                    <li className="flex items-center gap-2">✓ Bulk order quote requests</li>
                    <li className="flex items-center gap-2">✓ Crop availability updates</li>
                    <li className="flex items-center gap-2">✓ Direct contact with chefs &amp; buyers</li>
                  </ul>
                </div>

                {/* Card 4 */}
                <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 flex flex-col gap-4 hover:border-zinc-400 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#fbea3d] text-zinc-950 font-black text-xl flex items-center justify-center shadow-xs">
                    📍
                  </div>
                  <h3 className="text-xl font-bold font-display text-zinc-900">
                    Local Google Search &amp; Maps
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Help nearby customers find your farm stand, orchard, or store when searching for fresh local produce on Google and Google Maps.
                  </p>
                  <ul className="flex flex-col gap-2 pt-3 border-t border-zinc-200/70 text-xs text-zinc-700 font-medium">
                    <li className="flex items-center gap-2">✓ Google Business Profile optimization</li>
                    <li className="flex items-center gap-2">✓ High local search visibility</li>
                    <li className="flex items-center gap-2">✓ Directions, hours &amp; contact info</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* 2.5 WHO WE WORK WITH & THE DIRECT ADVANTAGE (Between Services & How We Work) */}
          <section className="w-full bg-[#0c0c0d] text-white py-20 sm:py-28 px-5 sm:px-10 lg:px-16 border-b border-zinc-800">
            <div className="max-w-6xl mx-auto flex flex-col gap-14 sm:gap-18">
              
              {/* Header */}
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-[#fbea3d] mb-2 block">
                  WHO WE WORK WITH
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
                  Built for Every Type of Farm
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
                  Whether you sell fresh vegetables at the farm gate, run a family orchard, or supply commercial wholesale accounts, we tailor your website to how you do business.
                </p>
              </div>

              {/* 4 Farm Types Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Type 1 */}
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#fbea3d]/60 hover:bg-zinc-900 transition-all">
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl">🥬</span>
                    <h3 className="text-lg font-bold font-display text-white">
                      Market Gardens &amp; Organic Farms
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                      Weekly vegetable box subscriptions, seasonal harvest announcements, and easy on-farm pickup slots.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-mono text-[#fbea3d]">
                    <span>●</span>
                    <span>Direct Box Sales</span>
                  </div>
                </div>

                {/* Type 2 */}
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#fbea3d]/60 hover:bg-zinc-900 transition-all">
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl">🍎</span>
                    <h3 className="text-lg font-bold font-display text-white">
                      Orchards, Berries &amp; Vineyards
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                      Pick-your-own visitor guides, fruit cases, artisanal ciders, and farm event tickets.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-mono text-[#fbea3d]">
                    <span>●</span>
                    <span>Visitor &amp; Event Booking</span>
                  </div>
                </div>

                {/* Type 3 */}
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#fbea3d]/60 hover:bg-zinc-900 transition-all">
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl">🍯</span>
                    <h3 className="text-lg font-bold font-display text-white">
                      Dairy, Apiaries &amp; Specialty Goods
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                      Artisan cheeses, pure raw honey, grass-fed meats, and farm merchandise shipped or picked up.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-mono text-[#fbea3d]">
                    <span>●</span>
                    <span>Online Farm Pantry</span>
                  </div>
                </div>

                {/* Type 4 */}
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#fbea3d]/60 hover:bg-zinc-900 transition-all">
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl">🚜</span>
                    <h3 className="text-lg font-bold font-display text-white">
                      Commercial Growers &amp; Wholesale
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                      Bulk crop availability bulletins, specification downloads, and quote requests for chefs and distributors.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-mono text-[#fbea3d]">
                    <span>●</span>
                    <span>B2B Buyer Portals</span>
                  </div>
                </div>

              </div>

              {/* Direct Farm Advantage Row (4 clean highlights) */}
              <div className="bg-zinc-900/50 border border-zinc-800/90 rounded-3xl p-8 sm:p-10 flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      The Direct Farm Advantage
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                      Why modern farms choose direct websites over third-party platforms.
                    </p>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#fbea3d]/10 border border-[#fbea3d]/30 text-xs font-mono font-bold text-[#fbea3d] shrink-0 self-start sm:self-auto">
                    100% YOUR BRAND
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-2xl font-black font-display text-[#fbea3d]">0%</span>
                    <h4 className="text-sm font-bold text-white">No App Commissions</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Keep 100% of your earnings instead of losing 15–30% cuts to middleman delivery apps.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="text-2xl font-black font-display text-[#fbea3d]">60s</span>
                    <h4 className="text-sm font-bold text-white">Easy Phone Updates</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Update seasonal produce stock, prices, and pickup hours right from your smartphone.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="text-2xl font-black font-display text-[#fbea3d]">100%</span>
                    <h4 className="text-sm font-bold text-white">Direct Customer Data</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Own your customer list and emails so you can announce new harvests directly to repeat buyers.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="text-2xl font-black font-display text-[#fbea3d]">1-Click</span>
                    <h4 className="text-sm font-bold text-white">Fast Mobile Checkout</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Seamless Apple Pay and Google Pay checkout so local shoppers can order in seconds.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* 3. HOW IT WORKS (Simple 3 steps) */}
          <section className="w-full bg-[#fafafb] py-20 sm:py-28 px-5 sm:px-10 lg:px-16 border-b border-zinc-200/70">
            <div className="max-w-5xl mx-auto flex flex-col gap-12 sm:gap-16">
              
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
                  SIMPLE PROCESS
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 font-display tracking-tight">
                  How We Work Together
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base mt-2">
                  We handle the setup from start to finish so you can focus on farming.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-zinc-200 rounded-3xl p-7 flex flex-col gap-3 shadow-xs">
                  <span className="w-10 h-10 rounded-xl bg-black text-[#fbea3d] font-bold text-sm flex items-center justify-center font-mono">
                    01
                  </span>
                  <h4 className="text-lg font-bold font-display text-zinc-900 mt-2">
                    We Understand Your Farm
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    We learn what you grow, who your customers are, and whether you need a direct store, wholesale inquiries, or a simple informational website.
                  </p>
                </div>

                <div className="bg-white border border-zinc-200 rounded-3xl p-7 flex flex-col gap-3 shadow-xs">
                  <span className="w-10 h-10 rounded-xl bg-black text-[#fbea3d] font-bold text-sm flex items-center justify-center font-mono">
                    02
                  </span>
                  <h4 className="text-lg font-bold font-display text-zinc-900 mt-2">
                    We Build &amp; Set Up Everything
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    We create a clean, mobile-friendly website, configure easy payments, add your harvest photos, and test everything.
                  </p>
                </div>

                <div className="bg-white border border-zinc-200 rounded-3xl p-7 flex flex-col gap-3 shadow-xs">
                  <span className="w-10 h-10 rounded-xl bg-black text-[#fbea3d] font-bold text-sm flex items-center justify-center font-mono">
                    03
                  </span>
                  <h4 className="text-lg font-bold font-display text-zinc-900 mt-2">
                    You Launch &amp; Reach Buyers
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Your site goes live, appears on Google Maps, and starts connecting your farm with local retail customers and wholesale buyers.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* 4. FREQUENTLY ASKED QUESTIONS */}
          <section className="w-full bg-white py-20 sm:py-24 px-5 sm:px-10 lg:px-16 border-b border-zinc-100">
            <div className="max-w-3xl mx-auto flex flex-col gap-10">
              <div className="text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
                  COMMON QUESTIONS
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 font-display tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                {industry.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer font-display font-bold text-base sm:text-lg text-zinc-900"
                      >
                        <span>{faq.question}</span>
                        <span className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 font-mono text-sm text-zinc-600">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 pt-0 text-sm text-zinc-600 leading-relaxed border-t border-zinc-200/60 mt-1 pt-4">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 5. SIMPLE CALL TO ACTION */}
          <section className="w-full bg-zinc-950 text-white py-20 sm:py-24 px-5 sm:px-10 lg:px-16 text-center">
            <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#fbea3d]">
                READY TO GROW?
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight">
                Let’s Build a Website for Your Farm
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Tell us about your farm, what you produce, and what you’d like to achieve. We’ll guide you through the simplest next steps.
              </p>
              <Link
                href="/contact"
                className="mt-2 py-4 px-9 bg-[#fbea3d] hover:bg-[#eab308] text-black font-bold text-sm rounded-full inline-flex items-center justify-center transition-colors shadow-lg cursor-pointer"
              >
                Get in Touch With Us →
              </Link>
            </div>
          </section>

          {/* 6. OTHER SECTORS */}
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

  if (industry.slug === "finance-fintech") {
    return (
      <LanguageProvider>
        <div className="min-h-screen bg-white flex flex-col overflow-x-clip relative w-full select-none text-zinc-900">
          <Navbar />

          {/* 1. HERO BANNER (Original Sleek Background Banner with Visible Imagery - DO NOT ALTER SIZE) */}
          <section className="relative w-full text-white pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
            
            {/* Background Image with Clear Directional Gradient */}
            <div className="absolute inset-0 z-0">
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover object-center scale-100 filter brightness-[0.78] contrast-[1.08]"
              />
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

          {/* 2. WHAT WE DO (Simple, honest 4-card grid) */}
          <section id="services" className="w-full bg-white py-20 sm:py-28 px-5 sm:px-10 lg:px-16 border-b border-zinc-100">
            <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
              
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
                  OUR SERVICES
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 font-display tracking-tight">
                  Everything Your Financial Practice Needs to Grow
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base mt-3 leading-relaxed">
                  No complicated tech jargon. Just straightforward digital marketing, high-converting websites, and qualified client funnels.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Card 1 */}
                <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 flex flex-col gap-4 hover:border-zinc-400 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#fbea3d] text-zinc-950 font-black text-xl flex items-center justify-center shadow-xs">
                    🏛️
                  </div>
                  <h3 className="text-xl font-bold font-display text-zinc-900">
                    High-Trust Financial Websites
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Modern, mobile-friendly websites designed to establish fiduciary credibility immediately. Clean layouts, clear fee structures, and professional bios that inspire confidence.
                  </p>
                  <ul className="flex flex-col gap-2 pt-3 border-t border-zinc-200/70 text-xs text-zinc-700 font-medium">
                    <li className="flex items-center gap-2">✓ Clean mobile-first design</li>
                    <li className="flex items-center gap-2">✓ Advisor credentials &amp; team bios</li>
                    <li className="flex items-center gap-2">✓ Built-in compliance &amp; fee disclosures</li>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 flex flex-col gap-4 hover:border-zinc-400 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#fbea3d] text-zinc-950 font-black text-xl flex items-center justify-center shadow-xs">
                    📈
                  </div>
                  <h3 className="text-xl font-bold font-display text-zinc-900">
                    High-Intent Google Search Ads
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Targeted search campaigns that put your practice directly in front of people actively searching for financial planners, wealth management, or loan options in your city.
                  </p>
                  <ul className="flex flex-col gap-2 pt-3 border-t border-zinc-200/70 text-xs text-zinc-700 font-medium">
                    <li className="flex items-center gap-2">✓ Google Search &amp; Local Services Ads</li>
                    <li className="flex items-center gap-2">✓ Negative keyword filtering to stop junk leads</li>
                    <li className="flex items-center gap-2">✓ Transparent cost-per-lead reporting</li>
                  </ul>
                </div>

                {/* Card 3 */}
                <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 flex flex-col gap-4 hover:border-zinc-400 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#fbea3d] text-zinc-950 font-black text-xl flex items-center justify-center shadow-xs">
                    🎯
                  </div>
                  <h3 className="text-xl font-bold font-display text-zinc-900">
                    Lead Funnels &amp; Financial Calculators
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Interactive mortgage payment calculators, retirement readiness tools, and frictionless appointment booking forms that turn website visitors into scheduled meetings.
                  </p>
                  <ul className="flex flex-col gap-2 pt-3 border-t border-zinc-200/70 text-xs text-zinc-700 font-medium">
                    <li className="flex items-center gap-2">✓ Interactive savings &amp; loan calculators</li>
                    <li className="flex items-center gap-2">✓ Direct Calendly &amp; CRM calendar booking</li>
                    <li className="flex items-center gap-2">✓ Instant email &amp; SMS lead notification alerts</li>
                  </ul>
                </div>

                {/* Card 4 */}
                <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 flex flex-col gap-4 hover:border-zinc-400 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#fbea3d] text-zinc-950 font-black text-xl flex items-center justify-center shadow-xs">
                    📍
                  </div>
                  <h3 className="text-xl font-bold font-display text-zinc-900">
                    Local Financial SEO &amp; Maps
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Rank on Page 1 of Google and Google Maps when prospective clients search for top-rated financial advisors, accountants, or loan brokers in your area.
                  </p>
                  <ul className="flex flex-col gap-2 pt-3 border-t border-zinc-200/70 text-xs text-zinc-700 font-medium">
                    <li className="flex items-center gap-2">✓ Google Business Profile optimization</li>
                    <li className="flex items-center gap-2">✓ Local client review acquisition setup</li>
                    <li className="flex items-center gap-2">✓ High visibility for local searches</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* 2.5 WHO WE WORK WITH & THE FINANCIAL ADVANTAGE */}
          <section className="w-full bg-[#0c0c0d] text-white py-20 sm:py-28 px-5 sm:px-10 lg:px-16 border-b border-zinc-800">
            <div className="max-w-6xl mx-auto flex flex-col gap-14 sm:gap-18">
              
              {/* Header */}
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-[#fbea3d] mb-2 block">
                  WHO WE WORK WITH
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
                  Tailored for Every Financial Practice
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
                  Whether you manage private wealth, run a busy mortgage brokerage, or operate a scaling fintech app, we adapt our growth strategy to your clients.
                </p>
              </div>

              {/* 4 Practice Types Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Type 1 */}
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#fbea3d]/60 hover:bg-zinc-900 transition-all">
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl">💼</span>
                    <h3 className="text-lg font-bold font-display text-white">
                      Wealth Managers &amp; CFPs
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                      High-net-worth client acquisition, retirement planning funnels, and private client portal landing pages.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-mono text-[#fbea3d]">
                    <span>●</span>
                    <span>Wealth &amp; Advisory</span>
                  </div>
                </div>

                {/* Type 2 */}
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#fbea3d]/60 hover:bg-zinc-900 transition-all">
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl">📱</span>
                    <h3 className="text-lg font-bold font-display text-white">
                      FinTech Startups &amp; Apps
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                      High-converting app landing pages, friction-free sign-up flows, and user onboarding conversion rate optimization.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-mono text-[#fbea3d]">
                    <span>●</span>
                    <span>FinTech &amp; Apps</span>
                  </div>
                </div>

                {/* Type 3 */}
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#fbea3d]/60 hover:bg-zinc-900 transition-all">
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl">🏡</span>
                    <h3 className="text-lg font-bold font-display text-white">
                      Mortgage &amp; Loan Brokers
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                      Borrower pre-qualification funnels, instant mortgage rate calculators, and local search ads.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-mono text-[#fbea3d]">
                    <span>●</span>
                    <span>Lending &amp; Mortgages</span>
                  </div>
                </div>

                {/* Type 4 */}
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#fbea3d]/60 hover:bg-zinc-900 transition-all">
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl">📊</span>
                    <h3 className="text-lg font-bold font-display text-white">
                      CPAs &amp; Accounting Practices
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                      Corporate tax advisory leads, business bookkeeping client funnels, and automated appointment scheduling.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-mono text-[#fbea3d]">
                    <span>●</span>
                    <span>Tax &amp; Accounting</span>
                  </div>
                </div>

              </div>

              {/* Financial Advantage Row (4 clean highlights) */}
              <div className="bg-zinc-900/50 border border-zinc-800/90 rounded-3xl p-8 sm:p-10 flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      The Financial Growth Advantage
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                      Why modern financial practices choose dedicated client funnels over generic agencies.
                    </p>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#fbea3d]/10 border border-[#fbea3d]/30 text-xs font-mono font-bold text-[#fbea3d] shrink-0 self-start sm:self-auto">
                    QUALIFIED CLIENTS
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-2xl font-black font-display text-[#fbea3d]">100%</span>
                    <h4 className="text-sm font-bold text-white">Compliance Ready</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Clear regulatory disclaimers, privacy policies, and fee disclosures formatted for swift compliance sign-off.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="text-2xl font-black font-display text-[#fbea3d]">3x</span>
                    <h4 className="text-sm font-bold text-white">Higher Lead Quality</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Custom qualifying questions screen out tire-kickers so you only talk to serious prospective clients.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="text-2xl font-black font-display text-[#fbea3d]">Page 1</span>
                    <h4 className="text-sm font-bold text-white">Search Rankings</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Rank at the top of local Google Maps and organic searches for high-value financial advisor keywords.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="text-2xl font-black font-display text-[#fbea3d]">0%</span>
                    <h4 className="text-sm font-bold text-white">Wasted Ad Spend</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Tight negative keyword filtering and conversion tracking ensure every marketing dollar is accounted for.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* 3. HOW IT WORKS (Simple 3 steps) */}
          <section className="w-full bg-[#fafafb] py-20 sm:py-28 px-5 sm:px-10 lg:px-16 border-b border-zinc-200/70">
            <div className="max-w-5xl mx-auto flex flex-col gap-12 sm:gap-16">
              
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
                  SIMPLE PROCESS
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 font-display tracking-tight">
                  How We Work Together
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base mt-2">
                  A straightforward, hands-off process to get your client pipeline running.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-zinc-200 rounded-3xl p-7 flex flex-col gap-3 shadow-xs">
                  <span className="w-10 h-10 rounded-xl bg-black text-[#fbea3d] font-bold text-sm flex items-center justify-center font-mono">
                    01
                  </span>
                  <h4 className="text-lg font-bold font-display text-zinc-900 mt-2">
                    Strategy &amp; Compliance Review
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    We review your ideal client profile, licensing details, compliance requirements, and current marketing bottleneck.
                  </p>
                </div>

                <div className="bg-white border border-zinc-200 rounded-3xl p-7 flex flex-col gap-3 shadow-xs">
                  <span className="w-10 h-10 rounded-xl bg-black text-[#fbea3d] font-bold text-sm flex items-center justify-center font-mono">
                    02
                  </span>
                  <h4 className="text-lg font-bold font-display text-zinc-900 mt-2">
                    Design &amp; Campaign Setup
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    We build your modern website, configure interactive calculators and calendar booking, and launch your targeted search campaigns.
                  </p>
                </div>

                <div className="bg-white border border-zinc-200 rounded-3xl p-7 flex flex-col gap-3 shadow-xs">
                  <span className="w-10 h-10 rounded-xl bg-black text-[#fbea3d] font-bold text-sm flex items-center justify-center font-mono">
                    03
                  </span>
                  <h4 className="text-lg font-bold font-display text-zinc-900 mt-2">
                    You Welcome New Clients
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Your campaigns go live, qualified prospects discover your firm, and introductory consultations appear directly on your calendar.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* 4. FREQUENTLY ASKED QUESTIONS */}
          <section className="w-full bg-white py-20 sm:py-24 px-5 sm:px-10 lg:px-16 border-b border-zinc-100">
            <div className="max-w-3xl mx-auto flex flex-col gap-10">
              <div className="text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
                  COMMON QUESTIONS
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 font-display tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                {industry.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer font-display font-bold text-base sm:text-lg text-zinc-900"
                      >
                        <span>{faq.question}</span>
                        <span className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 font-mono text-sm text-zinc-600">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 pt-0 text-sm text-zinc-600 leading-relaxed border-t border-zinc-200/60 mt-1 pt-4">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 5. SIMPLE CALL TO ACTION */}
          <section className="w-full bg-zinc-950 text-white py-20 sm:py-24 px-5 sm:px-10 lg:px-16 text-center">
            <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#fbea3d]">
                READY TO GROW YOUR PRACTICE?
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight">
                Let’s Build a Steady Pipeline of Qualified Clients
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Tell us about your financial practice and where you want to grow. We’ll show you exactly how to reach qualified clients in your market.
              </p>
              <Link
                href="/contact"
                className="mt-2 py-4 px-9 bg-[#fbea3d] hover:bg-[#eab308] text-black font-bold text-sm rounded-full inline-flex items-center justify-center transition-colors shadow-lg cursor-pointer"
              >
                Get in Touch With Us →
              </Link>
            </div>
          </section>

          {/* 6. OTHER SECTORS */}
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

  if (industry.slug === "travel-tourism") {
    return (
      <LanguageProvider>
        <div className="min-h-screen bg-white flex flex-col overflow-x-clip relative w-full select-none text-zinc-900">
          <Navbar />

          {/* 1. HERO BANNER (Original Sleek Background Banner with Visible Imagery - DO NOT ALTER SIZE) */}
          <section className="relative w-full text-white pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
            
            {/* Background Image with Clear Directional Gradient */}
            <div className="absolute inset-0 z-0">
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover object-center scale-100 filter brightness-[0.78] contrast-[1.08]"
              />
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

          {/* 2. OUR SERVICES (Simple, high-converting 4-card grid) */}
          <section id="services" className="w-full bg-white py-20 sm:py-28 px-5 sm:px-10 lg:px-16 border-b border-zinc-100">
            <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
              
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
                  OUR SERVICES
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 font-display tracking-tight">
                  Everything Your Travel Brand Needs to Win Direct Bookings
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base mt-3 leading-relaxed">
                  No complicated tech jargon or middleman commissions. Just high-converting travel websites, real-time booking engines, and qualified guest acquisition funnels.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Card 1 */}
                <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 flex flex-col gap-4 hover:border-zinc-400 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#fbea3d] text-zinc-950 font-black text-xl flex items-center justify-center shadow-xs">
                    ✈️
                  </div>
                  <h3 className="text-xl font-bold font-display text-zinc-900">
                    Direct Tour &amp; Hotel Booking Engines
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Fast, frictionless booking portals engineered to capture full-margin direct bookings. Clean calendar availability, transparent room or tour rates, and instant 1-click checkout that bypass 20–30% OTA commission cuts.
                  </p>
                  <ul className="flex flex-col gap-2 pt-3 border-t border-zinc-200/70 text-xs text-zinc-700 font-medium">
                    <li className="flex items-center gap-2">✓ Zero-commission direct guest reservations</li>
                    <li className="flex items-center gap-2">✓ Mobile Apple Pay, Google Pay &amp; card checkout</li>
                    <li className="flex items-center gap-2">✓ Flexible deposit locks &amp; milestone schedules</li>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 flex flex-col gap-4 hover:border-zinc-400 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#fbea3d] text-zinc-950 font-black text-xl flex items-center justify-center shadow-xs">
                    🗺️
                  </div>
                  <h3 className="text-xl font-bold font-display text-zinc-900">
                    Interactive Itinerary Builders &amp; Route Maps
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Immersive day-by-day vacation architects allowing travelers to view interactive route maps, customize excursion add-ons, select lodging upgrades, and download offline mobile travel dossiers.
                  </p>
                  <ul className="flex flex-col gap-2 pt-3 border-t border-zinc-200/70 text-xs text-zinc-700 font-medium">
                    <li className="flex items-center gap-2">✓ Visual day-by-day vacation planner</li>
                    <li className="flex items-center gap-2">✓ Interactive route maps &amp; landmark guides</li>
                    <li className="flex items-center gap-2">✓ Downloadable PDF &amp; mobile trip dossiers</li>
                  </ul>
                </div>

                {/* Card 3 */}
                <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 flex flex-col gap-4 hover:border-zinc-400 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#fbea3d] text-zinc-950 font-black text-xl flex items-center justify-center shadow-xs">
                    🔄
                  </div>
                  <h3 className="text-xl font-bold font-display text-zinc-900">
                    GDS &amp; Live Channel Synchronizer
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Live API connectivity with airline and hotel distribution systems (Amadeus, Sabre, Hotelbeds) and channel managers to prevent double-bookings and maintain accurate live pricing.
                  </p>
                  <ul className="flex flex-col gap-2 pt-3 border-t border-zinc-200/70 text-xs text-zinc-700 font-medium">
                    <li className="flex items-center gap-2">✓ Real-time flight &amp; hotel inventory sync</li>
                    <li className="flex items-center gap-2">✓ Instant automated PNR &amp; voucher generation</li>
                    <li className="flex items-center gap-2">✓ Multi-currency &amp; dynamic seasonal rates</li>
                  </ul>
                </div>

                {/* Card 4 */}
                <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 flex flex-col gap-4 hover:border-zinc-400 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#fbea3d] text-zinc-950 font-black text-xl flex items-center justify-center shadow-xs">
                    🎯
                  </div>
                  <h3 className="text-xl font-bold font-display text-zinc-900">
                    High-ROAS Traveler Acquisition &amp; Ads
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Hyper-targeted Google Search, Google Flights, and cinematic social campaigns that place your tours and resorts directly in front of affluent travelers during their active vacation planning windows.
                  </p>
                  <ul className="flex flex-col gap-2 pt-3 border-t border-zinc-200/70 text-xs text-zinc-700 font-medium">
                    <li className="flex items-center gap-2">✓ High-intent destination search campaigns</li>
                    <li className="flex items-center gap-2">✓ Cinematic Reels &amp; visual storytelling</li>
                    <li className="flex items-center gap-2">✓ Transparent cost-per-booking analytics</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* 2.5 WHO WE WORK WITH & THE DIRECT TRAVEL ADVANTAGE */}
          <section className="w-full bg-[#0c0c0d] text-white py-20 sm:py-28 px-5 sm:px-10 lg:px-16 border-b border-zinc-800">
            <div className="max-w-6xl mx-auto flex flex-col gap-14 sm:gap-18">
              
              {/* Header */}
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-[#fbea3d] mb-2 block">
                  WHO WE WORK WITH
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
                  Tailored for Every Travel Business
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
                  Whether you organize private luxury expeditions, run a boutique resort, or operate high-demand day excursions, we adapt our growth platform to your travelers.
                </p>
              </div>

              {/* 4 Travel Business Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Type 1 */}
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#fbea3d]/60 hover:bg-zinc-900 transition-all">
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl">🧭</span>
                    <h3 className="text-lg font-bold font-display text-white">
                      Tour Operators &amp; DMCs
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                      Curated expeditions, bespoke multi-day itineraries, dynamic packages, and private client travel hubs.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-mono text-[#fbea3d]">
                    <span>●</span>
                    <span>Expeditions &amp; Tours</span>
                  </div>
                </div>

                {/* Type 2 */}
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#fbea3d]/60 hover:bg-zinc-900 transition-all">
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl">🏨</span>
                    <h3 className="text-lg font-bold font-display text-white">
                      Boutique Hotels &amp; Resorts
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                      Zero-commission direct room reservations, dining &amp; spa upsells, and seamless guest arrival portals.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-mono text-[#fbea3d]">
                    <span>●</span>
                    <span>Stays &amp; Hospitality</span>
                  </div>
                </div>

                {/* Type 3 */}
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#fbea3d]/60 hover:bg-zinc-900 transition-all">
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl">🏄‍♂️</span>
                    <h3 className="text-lg font-bold font-display text-white">
                      Excursions &amp; Adventures
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                      Live seat capacity management, instant mobile waiver signing, weather re-booking, and gear rental add-ons.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-mono text-[#fbea3d]">
                    <span>●</span>
                    <span>Activities &amp; Guides</span>
                  </div>
                </div>

                {/* Type 4 */}
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#fbea3d]/60 hover:bg-zinc-900 transition-all">
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl">🗺️</span>
                    <h3 className="text-lg font-bold font-display text-white">
                      Tourism Boards &amp; DMOs
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                      Interactive regional destination portals, multi-language visitor guides, landmark trails, and tourism ad campaigns.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-mono text-[#fbea3d]">
                    <span>●</span>
                    <span>Regional Tourism</span>
                  </div>
                </div>

              </div>

              {/* Direct Travel Advantage Row (4 clean highlights) */}
              <div className="bg-zinc-900/50 border border-zinc-800/90 rounded-3xl p-8 sm:p-10 flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      The Direct Travel Advantage
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                      Why modern travel operators choose direct booking platforms over steep middleman commissions.
                    </p>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#fbea3d]/10 border border-[#fbea3d]/30 text-xs font-mono font-bold text-[#fbea3d] shrink-0 self-start sm:self-auto">
                    DIRECT REVENUE
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-2xl font-black font-display text-[#fbea3d]">0%</span>
                    <h4 className="text-sm font-bold text-white">OTA Middleman Fees</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Keep 100% of your booking margin instead of surrendering 20–30% cuts to Booking.com, Viator, or Expedia.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="text-2xl font-black font-display text-[#fbea3d]">&lt; 1.2s</span>
                    <h4 className="text-sm font-bold text-white">Sub-Second Search</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Instant multi-destination catalog search and date filtering that keeps mobile travelers browsing and converting.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="text-2xl font-black font-display text-[#fbea3d]">+260%</span>
                    <h4 className="text-sm font-bold text-white">Direct Booking Lift</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Turn wanderlust into confirmed guest reservations with 1-click Apple Pay checkouts and flexible deposits.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="text-2xl font-black font-display text-[#fbea3d]">100%</span>
                    <h4 className="text-sm font-bold text-white">Live Inventory Sync</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Real-time synchronization with Amadeus, Sabre, and Bedbanks with zero risk of accidental overbooking.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* 3. HOW IT WORKS (Simple 3 steps) */}
          <section className="w-full bg-[#fafafb] py-20 sm:py-28 px-5 sm:px-10 lg:px-16 border-b border-zinc-200/70">
            <div className="max-w-5xl mx-auto flex flex-col gap-12 sm:gap-16">
              
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
                  SIMPLE PROCESS
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 font-display tracking-tight">
                  How We Work Together
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base mt-2">
                  A straightforward, hands-off process to get your direct booking pipeline running.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-zinc-200 rounded-3xl p-7 flex flex-col gap-3 shadow-xs">
                  <span className="w-10 h-10 rounded-xl bg-black text-[#fbea3d] font-bold text-sm flex items-center justify-center font-mono">
                    01
                  </span>
                  <h4 className="text-lg font-bold font-display text-zinc-900 mt-2">
                    Traveler Journey Discovery
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    We review your destinations, guest profiles, seasonal travel peaks, and current OTA commission leakages.
                  </p>
                </div>

                <div className="bg-white border border-zinc-200 rounded-3xl p-7 flex flex-col gap-3 shadow-xs">
                  <span className="w-10 h-10 rounded-xl bg-black text-[#fbea3d] font-bold text-sm flex items-center justify-center font-mono">
                    02
                  </span>
                  <h4 className="text-lg font-bold font-display text-zinc-900 mt-2">
                    Platform Build &amp; Integration
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    We build your high-speed Next.js travel portal, connect your live booking engine, configure itinerary tools, and set up ad campaigns.
                  </p>
                </div>

                <div className="bg-white border border-zinc-200 rounded-3xl p-7 flex flex-col gap-3 shadow-xs">
                  <span className="w-10 h-10 rounded-xl bg-black text-[#fbea3d] font-bold text-sm flex items-center justify-center font-mono">
                    03
                  </span>
                  <h4 className="text-lg font-bold font-display text-zinc-900 mt-2">
                    You Welcome Direct Travelers
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Your platform goes live, travelers discover your trips and book directly, and full-margin guest reservations arrive in your inbox.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* 4. FREQUENTLY ASKED QUESTIONS */}
          <section className="w-full bg-white py-20 sm:py-24 px-5 sm:px-10 lg:px-16 border-b border-zinc-100">
            <div className="max-w-3xl mx-auto flex flex-col gap-10">
              <div className="text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
                  COMMON QUESTIONS
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 font-display tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                {industry.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer font-display font-bold text-base sm:text-lg text-zinc-900"
                      >
                        <span>{faq.question}</span>
                        <span className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 font-mono text-sm text-zinc-600">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 pt-0 text-sm text-zinc-600 leading-relaxed border-t border-zinc-200/60 mt-1 pt-4">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 5. SIMPLE CALL TO ACTION */}
          <section className="w-full bg-zinc-950 text-white py-20 sm:py-24 px-5 sm:px-10 lg:px-16 text-center">
            <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#fbea3d]">
                READY TO GROW YOUR TRAVEL BRAND?
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight">
                Let’s Build a Steady Pipeline of Direct Bookings
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Tell us about your tours, properties, or experiential travel agency. We’ll show you exactly how to capture more travelers directly and eliminate costly OTA commissions.
              </p>
              <Link
                href="/contact"
                className="mt-2 py-4 px-9 bg-[#fbea3d] hover:bg-[#eab308] text-black font-bold text-sm rounded-full inline-flex items-center justify-center transition-colors shadow-lg cursor-pointer"
              >
                Get in Touch With Us →
              </Link>
            </div>
          </section>

          {/* 6. OTHER SECTORS */}
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
                      alt="Luxury Fine Jewellery, Diamonds and Haute Joaillerie Design"
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
                      alt="Specialty Cafe, Artisanal Coffee and Dining Experience"
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
                        Centralized brand systems for luxury hotel groups, private villa collections, and boutique restaurant chains.
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
                      alt="Luxury Hospitality and Boutique Resort Design"
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
              /* REAL ESTATE CONNECT 2-COLUMN SECTION: TEXT + CONNECTED PROPERTY PHOTO ON RIGHT */
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
                        Fluid WebGL walkthroughs and high-res property galleries with instant mobile touch optimization.
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
                      alt="Modern Luxury Real Estate and Property Developments"
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
            ) : industry.slug === "finance-fintech" ? (
              /* FINANCE & FINTECH CONNECT 2-COLUMN SECTION: TEXT + CONNECTED FINTECH PHOTO ON RIGHT */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Column: Context & 4 Connected Value Blocks (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                  <div className="flex flex-col gap-4 text-left">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                      // HOW WE ENGAGE &amp; DELIVER
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-900 font-display tracking-tight leading-tight">
                      Ultra-Secure, Real-Time Financial Engineering for{" "}
                      <span className="text-zinc-950 underline decoration-[#fbea3d] decoration-4 underline-offset-4">
                        Modern FinTech.
                      </span>
                    </h2>
                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-medium">
                      Modern financial systems demand zero-downtime fault tolerance, sub-millisecond execution, and unassailable cryptographic security. We engineer bespoke financial technologies—from consumer digital banking applications and neo-brokerage platforms to automated ledger reconciliations and multi-rail cross-border payment pipelines.
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
                          PCI-DSS Level 1 &amp; Tokenization
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Card vaulting, 3D Secure 2.0 fraud defense, and zero plaintext PAN exposure on client servers.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          WebSocket Sub-15ms Market Data
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Ultra-low latency streaming order books, TradingView charts, and instantaneous trade fills.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Biometric KYC &amp; Sanctions
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Sub-60s customer onboarding with Persona/Jumio ID verification, PEP screening, and AML checks.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Double-Entry Ledgers &amp; FinOps
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        ACID-compliant PostgreSQL transactional ledgers preventing balance race conditions and drift.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Right Column: Connected Photo with Floating Badges (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl group">
                    <img
                      src="/industries/finance-fintech.jpg"
                      alt="Modern Finance & FinTech Engineering"
                      className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md border border-zinc-700 text-white px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#fbea3d] animate-pulse"></span>
                      <span className="font-mono text-xs font-bold text-[#fbea3d]">PCI-DSS &amp; SOC2 READY</span>
                    </div>

                    {/* Bottom Floating Info Card */}
                    <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md border border-zinc-200 p-5 rounded-2xl shadow-xl flex flex-col gap-1.5 text-black">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-zinc-500 uppercase">CORE BANKING &amp; WEALTH</span>
                        <span className="px-2 py-0.5 rounded-md bg-black text-[#fbea3d] font-mono text-[10px] font-bold">$2.4B+ VOLUME</span>
                      </div>
                      <h4 className="text-sm font-bold font-display text-zinc-900">
                        Financial Technology Rails
                      </h4>
                      <p className="text-[11px] text-zinc-600 leading-relaxed">
                        Bank-grade security, instant payment settlements, and intuitive digital asset dashboards.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ) : industry.slug === "travel-tourism" ? (
              /* TRAVEL & TOURISM CONNECT 2-COLUMN SECTION: TEXT + CONNECTED TRAVEL PHOTO ON RIGHT */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Column: Context & 4 Connected Value Blocks (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                  <div className="flex flex-col gap-4 text-left">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                      // HOW WE ENGAGE &amp; DELIVER
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-900 font-display tracking-tight leading-tight">
                      Immersive Travel Booking Platforms &amp; Growth for{" "}
                      <span className="text-zinc-950 underline decoration-[#fbea3d] decoration-4 underline-offset-4">
                        Tourism Brands.
                      </span>
                    </h2>
                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-medium">
                      Modern travelers expect editorial storytelling, instant live availability, dynamic packaging, and effortless mobile booking. We help tour operators, experiential travel agencies, and tourism boards bypass steep third-party commissions by engineering high-converting direct platforms.
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
                          Direct Tour Booking Engines
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Zero-commission booking flows bypassing 20-30% OTA cuts with instant Apple Pay checkout.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          GDS &amp; Bedbank Live Sync
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Real-time airline and hotel connectivity via Amadeus, Sabre, and Hotelbeds with zero overbooking.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Interactive Day-by-Day Trips
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        Visual itinerary builders with Mapbox route previews, activity add-ons, and mobile dossiers.
                      </p>
                    </div>

                    <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-black text-[#fbea3d] font-bold text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          High-Yield Paid Traveler Ads
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-8">
                        High-intent Google Flights search ads and cinematic Instagram Reels capturing active vacationers.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Right Column: Connected Photo with Floating Badges (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl group">
                    <img
                      src="/industries/travel-tourism.jpg"
                      alt="Luxury Experiential Travel and Tourism"
                      className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md border border-zinc-700 text-white px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#fbea3d] animate-pulse"></span>
                      <span className="font-mono text-xs font-bold text-[#fbea3d]">GDS &amp; EXPERIENTIAL TRAVEL</span>
                    </div>

                    {/* Bottom Floating Info Card */}
                    <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md border border-zinc-200 p-5 rounded-2xl shadow-xl flex flex-col gap-1.5 text-black">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-zinc-500 uppercase">EXPEDITIONS &amp; OTAS</span>
                        <span className="px-2 py-0.5 rounded-md bg-black text-[#fbea3d] font-mono text-[10px] font-bold">+260% DIRECT</span>
                      </div>
                      <h4 className="text-sm font-bold font-display text-zinc-900">
                        High-Converting Travel Portals
                      </h4>
                      <p className="text-[11px] text-zinc-600 leading-relaxed">
                        Frictionless direct checkout workflows capturing full-margin bookings and multi-day bespoke itineraries.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ) : industry.slug === "agriculture-agritech" ? (
              /* AGRICULTURE & FARMS: CLEAN, SIMPLE, HUMAN LAYOUT */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Column: Clear Text & 4 Grounded Services (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                  <div className="flex flex-col gap-4 text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                      HOW WE HELP FARMS GROW
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-900 font-display tracking-tight leading-tight">
                      Simple Websites &amp; Online Growth for{" "}
                      <span className="text-zinc-950 underline decoration-[#fbea3d] decoration-4 underline-offset-4">
                        Farms &amp; Agriculture.
                      </span>
                    </h2>
                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
                      We help family farms, orchards, and agricultural businesses connect with customers online. Whether you want to sell produce directly, take wholesale inquiries, or just showcase your farm, we make it simple and effective.
                    </p>
                  </div>

                  {/* 4 Simple, Clear Service Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-zinc-50/70 border border-zinc-200/80 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 hover:bg-white transition-all">
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#fbea3d] text-zinc-950 font-black text-[11px] flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Custom Farm Websites
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-7">
                        Clear, mobile-friendly websites that introduce your farm, what you grow, and how people can visit or buy.
                      </p>
                    </div>

                    <div className="bg-zinc-50/70 border border-zinc-200/80 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 hover:bg-white transition-all">
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#fbea3d] text-zinc-950 font-black text-[11px] flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Direct Produce Sales
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-7">
                        Easy online ordering for seasonal produce boxes, fresh harvests, and local farm pickup.
                      </p>
                    </div>

                    <div className="bg-zinc-50/70 border border-zinc-200/80 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 hover:bg-white transition-all">
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#fbea3d] text-zinc-950 font-black text-[11px] flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Wholesale Inquiries
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-7">
                        Simple inquiry forms and product lists for restaurants, local grocers, and commercial buyers.
                      </p>
                    </div>

                    <div className="bg-zinc-50/70 border border-zinc-200/80 rounded-2xl p-5 flex flex-col gap-2 hover:border-zinc-400 hover:bg-white transition-all">
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#fbea3d] text-zinc-950 font-black text-[11px] flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-bold font-display text-zinc-900">
                          Local Google Maps &amp; Search
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed pl-7">
                        Help nearby customers find your farm stand, store, or market location quickly on Google.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Right Column: Clean Modern Farm Storefront UI Preview (Zero AI, Pure Code) */}
                <div className="lg:col-span-5 flex flex-col">
                  <div className="bg-gradient-to-b from-zinc-950 to-zinc-900 text-white rounded-3xl p-6 sm:p-7 border border-zinc-800 shadow-2xl flex flex-col gap-5 relative overflow-hidden">
                    
                    {/* Subtle warm ambient lighting */}
                    <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#fbea3d]/10 rounded-full blur-3xl pointer-events-none" />

                    {/* Clean Browser Address Bar */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800/80">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                      </div>
                      <div className="bg-zinc-900 px-3.5 py-1 rounded-full text-[11px] font-mono text-zinc-300 flex items-center gap-1.5 border border-zinc-700/60">
                        <span className="text-emerald-400">●</span>
                        <span>yourfarm.com/store</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#fbea3d] uppercase tracking-wider">LIVE</span>
                    </div>

                    {/* Farm Storefront Header Preview */}
                    <div className="bg-zinc-900/90 rounded-2xl p-4 border border-zinc-800 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-0.5">
                          FARM DIRECT STORE
                        </span>
                        <h4 className="text-base font-bold text-white font-display">
                          Green Valley Farm Store
                        </h4>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          Fresh weekly harvest, local pickup &amp; delivery.
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-[#fbea3d] text-zinc-950 font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
                        🌿
                      </div>
                    </div>

                    {/* Sample Store Items (What the customer sees) */}
                    <div className="flex flex-col gap-2.5">
                      <div className="bg-black/50 rounded-xl p-3 border border-zinc-800/80 flex items-center justify-between hover:border-zinc-700 transition-all">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🥕</span>
                          <div>
                            <span className="text-xs font-bold text-white block">Weekly Harvest Box</span>
                            <span className="text-[11px] text-zinc-400">Seasonal farm-fresh produce box</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#fbea3d] bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
                          $35 / wk
                        </span>
                      </div>

                      <div className="bg-black/50 rounded-xl p-3 border border-zinc-800/80 flex items-center justify-between hover:border-zinc-700 transition-all">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🍯</span>
                          <div>
                            <span className="text-xs font-bold text-white block">Raw Farm Honey &amp; Goods</span>
                            <span className="text-[11px] text-zinc-400">Pure unfiltered local harvest</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#fbea3d] bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
                          $14
                        </span>
                      </div>

                      <div className="bg-black/50 rounded-xl p-3 border border-zinc-800/80 flex items-center justify-between hover:border-zinc-700 transition-all">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">📦</span>
                          <div>
                            <span className="text-xs font-bold text-white block">Wholesale Buyer Portal</span>
                            <span className="text-[11px] text-zinc-400">Bulk supply for grocers &amp; restaurants</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/70 px-2 py-1 rounded-md border border-emerald-800/60">
                          Inquiry
                        </span>
                      </div>
                    </div>

                    {/* Bottom Quick Highlights */}
                    <div className="pt-2 border-t border-zinc-800/80 grid grid-cols-3 gap-2 text-center">
                      <div className="bg-zinc-900/70 rounded-xl py-2 px-1 border border-zinc-800/60">
                        <span className="text-sm font-bold text-white block font-mono">0%</span>
                        <span className="text-[10px] text-zinc-400">App Fees</span>
                      </div>
                      <div className="bg-zinc-900/70 rounded-xl py-2 px-1 border border-zinc-800/60">
                        <span className="text-sm font-bold text-[#fbea3d] block font-mono">1-Click</span>
                        <span className="text-[10px] text-zinc-400">Checkout</span>
                      </div>
                      <div className="bg-zinc-900/70 rounded-xl py-2 px-1 border border-zinc-800/60">
                        <span className="text-sm font-bold text-emerald-400 block font-mono">Direct</span>
                        <span className="text-[10px] text-zinc-400">Customer List</span>
                      </div>
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
                    // BESPOKE HOSPITALITY SYSTEMS
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
                    // TAILORED SYSTEMS
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
                      HealthTech Systems &amp; Integrations
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
                
                {/* Left Column: Clean Property Photo with Floating Badges (5 cols) */}
                <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-zinc-200 shadow-xl group">
                  <img
                    src="/industries/real_estate_infra.jpg"
                    alt="PropTech Platform & Infrastructure"
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
          /* CLEAN EDUCATION DIGITAL GROWTH & INSTITUTIONAL SEO (PHOTO + SERVICES) */
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

        {/* 7. OUR COMMERCE & ENGINEERING STANDARDS (Hidden on Healthcare, Real Estate, Hospitality, Food-Beverages, Jewellery, Education & Agriculture per user request) */}
        {!["healthcare", "real-estate", "hospitality", "food-beverages", "jewellery", "education", "agriculture-agritech"].includes(industry.slug) && (
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
                        <span>Lifecycle Flow Strategy</span>
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

        {/* 8. 4-PHASE DELIVERY CYCLE (Hidden on E-Commerce, Healthcare, Real Estate, Hospitality, Food-Beverages, Jewellery, Education & Agriculture per user request) */}
        {!["ecommerce", "healthcare", "real-estate", "hospitality", "food-beverages", "jewellery", "education", "agriculture-agritech"].includes(industry.slug) && (
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
