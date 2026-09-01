"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import NewsletterSection from "../../components/NewsletterSection";
import Footer from "../../components/Footer";
import { LanguageProvider } from "../../context/LanguageContext";
import { allServices } from "../../data/servicesData";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Development", "Design", "Marketing", "Security"];

  const filteredServices =
    selectedCategory === "All"
      ? allServices
      : allServices.filter((s) => s.category === selectedCategory);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white flex flex-col overflow-x-clip relative w-full select-none">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full bg-[#0c0c0d] text-white pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-8 lg:px-14 xl:px-20 relative overflow-hidden border-b border-zinc-800">
          <div className="max-w-7xl mx-auto flex flex-col items-start text-left relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-6 uppercase tracking-wider">
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
              <span>/</span>
              <span className="text-[#fbea3d] font-bold">Services</span>
            </div>

            {/* Tag / Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-[#fbea3d] font-mono text-xs font-extrabold uppercase tracking-widest mb-4">
              <span>//</span>
              <span>PRACTICES & CAPABILITIES</span>
            </div>

            {/* H1 Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white font-display tracking-tight leading-[1.08] max-w-4xl mb-6">
              Engineering Infrastructure & Performance for the{" "}
              <span className="relative inline-block text-[#fbea3d]">
                Next Decade.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-medium mb-8">
              We eliminate technical debt and bridge high-performance engineering with sales-driven product design, algorithmic search systems, and scalable advertising engines.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-bold uppercase font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#fbea3d] text-black shadow-[0_2px_12px_rgba(251,234,61,0.3)] scale-105"
                        : "bg-zinc-900/90 text-zinc-400 border border-zinc-800 hover:text-white hover:bg-zinc-800"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Grid Showcase */}
        <section className="w-full bg-[#fafafb] py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 text-black">
          <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-1">
                  OUR CAPABILITIES ({filteredServices.length})
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 font-display tracking-tight">
                  Tailored Practice Areas
                </h2>
              </div>
              <p className="text-zinc-600 text-xs sm:text-sm font-medium max-w-md text-left sm:text-right">
                Every service is delivered with dedicated senior architects, zero legacy debt, and commercial accountability.
              </p>
            </div>

            {/* Grid of Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredServices.map((service) => (
                <article
                  key={service.slug}
                  className="bg-white rounded-3xl overflow-hidden border border-zinc-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Image Banner */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-950">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-wider text-[#fbea3d] border border-zinc-800">
                        {service.category}
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 sm:p-7 flex flex-col gap-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-zinc-900 font-display tracking-tight mb-2 group-hover:text-black transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
                          {service.heroSubtitle}
                        </p>
                      </div>

                      {/* Capabilities Highlights */}
                      <div className="pt-2 border-t border-zinc-100 flex flex-col gap-1.5">
                        <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-zinc-600">
                          Key Deliverables
                        </span>
                        <ul className="flex flex-col gap-1 text-xs text-zinc-800 font-medium">
                          {service.capabilities.slice(0, 3).map((cap, idx) => (
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
                  <div className="px-6 sm:px-7 pt-0 pb-6 sm:pb-7 flex items-center justify-between border-t border-zinc-100 mt-2">
                    <a
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 bg-black text-white group-hover:bg-[#fbea3d] group-hover:text-black px-5 py-2.5 rounded-full text-xs font-extrabold font-display tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-xs"
                    >
                      <span>Explore Service</span>
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </a>

                    <span className="text-[11px] font-mono text-zinc-400 font-bold">
                      {service.stats[0]?.value}
                    </span>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* Why Choose Us Banner (Inspired by Revelar Solutions Technical Rescue) */}
        <section className="w-full bg-[#0c0c0d] text-white py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 relative overflow-hidden border-t border-zinc-900">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
            
            <div className="lg:col-span-6 flex flex-col gap-5 text-left">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#fbea3d]">
                // THE OWLIO WORKS STANDARD
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
                We Replace Traditional Agency Bureaucracy with Relentless Technical Execution.
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Most agencies push generic templates and junior talent onto high-stakes projects. We operate as your dedicated senior engineering and growth division, taking 100% accountability for speed, uptime, and positive commercial ROI.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-zinc-900/90 border border-zinc-800 p-6 rounded-2xl flex flex-col gap-2">
                <span className="text-2xl font-black text-[#fbea3d] font-mono">01</span>
                <h4 className="text-base font-bold text-white font-display">Senior Architects Only</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">Your projects are led and built directly by seasoned engineers and performance growth leaders.</p>
              </div>

              <div className="bg-zinc-900/90 border border-zinc-800 p-6 rounded-2xl flex flex-col gap-2">
                <span className="text-2xl font-black text-[#fbea3d] font-mono">02</span>
                <h4 className="text-base font-bold text-white font-display">Zero Legacy Tech Debt</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">Type-safe TypeScript, clean cloud infrastructure, and maintainable systems built to last a decade.</p>
              </div>

              <div className="bg-zinc-900/90 border border-zinc-800 p-6 rounded-2xl flex flex-col gap-2">
                <span className="text-2xl font-black text-[#fbea3d] font-mono">03</span>
                <h4 className="text-base font-bold text-white font-display">Full Code IP Ownership</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">You own 100% of the repositories, cloud configurations, design tokens, and documentation.</p>
              </div>

              <div className="bg-zinc-900/90 border border-zinc-800 p-6 rounded-2xl flex flex-col gap-2">
                <span className="text-2xl font-black text-[#fbea3d] font-mono">04</span>
                <h4 className="text-base font-bold text-white font-display">Revenue Accountability</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">Engineering tied directly to search traffic, user adoption, conversions, and measurable bottom-line profit.</p>
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
