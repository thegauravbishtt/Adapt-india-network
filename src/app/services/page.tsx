"use client";

import UpgradeCTA from "@/components/UpgradeCTA";
import React from "react";
import Navbar from "../../components/Navbar";
import NewsletterSection from "../../components/NewsletterSection";
import Footer from "../../components/Footer";
import { LanguageProvider } from "../../context/LanguageContext";
import { allServices } from "../../data/servicesData";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#f8f9fa] flex flex-col overflow-x-clip relative w-full text-gray-900 font-sans">
        
        {/* Floating Navbar with Red Announcement Bar */}
        <Navbar />

        {/* 1. HERO BANNER (Full-Bleed Photographic Background - Sleek Compact Ribbon) */}
        <section className="relative w-full text-white pt-28 sm:pt-32 lg:pt-36 pb-7 sm:pb-9 lg:pb-10 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
          
          {/* Full Background Image with Directional Dark Gradient */}
          <div className="absolute inset-0 z-0">
            <img
              src="/banner-datacenter-racks.jpg"
              alt="Tier-1 Optical Infrastructure and Datacenter Racks"
              className="w-full h-full object-cover object-center scale-100 filter brightness-[0.72] contrast-[1.10]"
            />
            {/* Directional gradient to keep photo vibrant on right while text is super legible on left */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-black/45 z-10"></div>
          </div>

          {/* Top Row: Back to Home + Global Divider Line */}
          <div className="relative z-20 max-w-7xl mx-auto w-full mb-3 sm:mb-4">
            <div className="flex items-center justify-between gap-4 pb-2.5 sm:pb-3 border-b border-white/20">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-mono font-bold tracking-widest text-zinc-300 hover:text-white uppercase transition-colors group cursor-pointer"
              >
                <span className="transition-transform group-hover:-translate-x-1 duration-200">←</span>
                <span>BACK TO HOME</span>
              </Link>

              <div className="flex items-center gap-3">
                <span className="px-3 py-0.5 rounded-full bg-black/60 border border-sky-500/40 text-[#38bdf8] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                  // ALL SERVICES ({allServices.length})
                </span>
              </div>
            </div>
          </div>

          {/* Center Content: Title, Description & Scroll Down */}
          <div className="relative z-20 max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
              
              <div className="flex flex-col items-start text-left max-w-3xl">
                {/* Category Tagline */}
                <span className="font-mono text-xs font-extrabold tracking-widest text-[#38bdf8] uppercase mb-1.5 block">
                  // CARRIER-GRADE ENTERPRISE PORTFOLIO
                </span>

                {/* Display Title */}
                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white font-display tracking-tight uppercase leading-[1.1] mb-2 drop-shadow-md">
                  ENTERPRISE SOLUTIONS
                </h1>

                <p className="text-zinc-200 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm mb-4">
                  Mission-critical Internet Leased Lines (ILL), Next-Gen SD-WAN, private MPLS VPN backbones, cloud telephony, and multi-cloud interconnects backed by strict 99.999% SLA uptime guarantees.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#catalog"
                    className="px-6 py-2.5 bg-[#E31E24] hover:bg-[#c9171d] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md transition-colors shadow-sm"
                  >
                    Browse Catalog ({allServices.length}) ↓
                  </a>

                  <a
                    href="tel:+918287479961"
                    className="px-5 py-2.5 bg-black/50 hover:bg-black/75 text-white text-xs sm:text-sm font-semibold rounded-md border border-white/20 backdrop-blur-sm transition-colors flex items-center gap-2"
                  >
                    <span>📞</span>
                    <span>Speak to NOC Engineer</span>
                  </a>
                </div>
              </div>

              {/* Right Side: Scroll Down Indicator */}
              <div className="hidden lg:flex items-center gap-3 text-zinc-300 font-mono text-xs font-bold uppercase tracking-wider select-none shrink-0 self-end">
                <span>SCROLL DOWN</span>
                <a
                  href="#catalog"
                  className="w-9 h-9 rounded-full border border-white/30 bg-black/40 flex items-center justify-center text-[#38bdf8] hover:bg-black/70 hover:border-white transition-all animate-bounce"
                >
                  ↓
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* 2. SERVICES CATALOG GRID */}
        <section id="catalog" className="w-full bg-[#f8f9fa] py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 text-left">
          <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200 pb-6">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E31E24] block mb-1">
                  FULL SERVICE DIRECTORY ({allServices.length})
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                  Tailored Enterprise Practice Areas
                </h2>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm font-medium max-w-md text-left sm:text-right">
                Every service is terminated on enterprise Cisco/Juniper optical hardware with 24/7 dedicated engineering surveillance.
              </p>
            </div>

            {/* Grid of Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {allServices.map((service) => (
                <article
                  key={service.slug}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-xl hover:border-[#E31E24]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Image Banner */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-950">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-[0.7]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-wider text-white border border-white/20">
                        {service.category}
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-xs font-mono font-semibold text-[#ff666a] block">
                          // {service.tagline}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 flex flex-col gap-3">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#E31E24] transition-colors">
                        {service.name}
                      </h3>

                      <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
                        {service.heroSubtitle}
                      </p>

                      {/* Capabilities Highlights */}
                      <div className="pt-3 border-t border-gray-100 flex flex-col gap-1.5 mt-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500">
                          Included Capabilities:
                        </span>
                        <ul className="flex flex-col gap-1 text-xs text-gray-800 font-medium">
                          {service.capabilities.slice(0, 3).map((cap, idx) => (
                            <li key={idx} className="flex items-center gap-1.5 truncate">
                              <span className="text-[#E31E24] font-bold">✓</span>
                              <span className="truncate">{cap.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-100">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 bg-[#E31E24] hover:bg-[#c9171d] text-white px-4 py-2 rounded-md text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-xs"
                    >
                      <span>Explore Service</span>
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>

                    <span className="text-[11px] font-mono text-gray-500 font-bold">
                      {service.stats[0]?.value}
                    </span>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* 2.5 PAN-INDIA FIBER TOPOLOGY & LIVE LATENCY BENCHMARKS */}
        <section className="w-full bg-[#f8fafc] py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-t border-b border-zinc-200 text-left">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-zinc-200">
              <div className="max-w-3xl">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0066FF] block mb-1">
                  // OPTICAL CORE TELEMETRY &amp; INTERCONNECTS
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-950 font-display tracking-tight leading-tight">
                  Pan-India Optical Latency &amp; Direct Peering Exchanges
                </h2>
                <p className="text-zinc-600 text-xs sm:text-sm md:text-base leading-relaxed mt-2">
                  Operating dedicated dark-fiber routes over DWDM Dense Wavelength Division Multiplexing with direct interconnects at NIXI (National Internet Exchange of India), Extreme IX, and AMS-IX India.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-xs font-mono font-bold text-zinc-700 uppercase">
                  Live Core Status: 99.999% SLA Optimal
                </span>
              </div>
            </div>

            {/* City-to-City Latency Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  route: "Mumbai (BKC) ⟷ Delhi NCR (Noida DC)",
                  distance: "1,420 km",
                  latency: "14.2 ms",
                  jitter: "< 0.8 ms",
                  spec: "Dual Underground Ring via Western Express",
                  loss: "0.00%",
                },
                {
                  route: "Bengaluru (Whitefield) ⟷ Chennai (Landing)",
                  distance: "348 km",
                  latency: "5.4 ms",
                  jitter: "< 0.4 ms",
                  spec: "Direct Subsea Landing Optical Extension",
                  loss: "0.00%",
                },
                {
                  route: "Mumbai (Chandivali) ⟷ Bengaluru (ITPB)",
                  distance: "980 km",
                  latency: "11.1 ms",
                  jitter: "< 0.6 ms",
                  spec: "Corridor DWDM with BGP Multi-Homing",
                  loss: "0.01%",
                },
                {
                  route: "Delhi NCR ⟷ Hyderabad (HITEC City)",
                  distance: "1,510 km",
                  latency: "17.8 ms",
                  jitter: "< 0.9 ms",
                  spec: "Central India Optical Backbone with G.8032",
                  loss: "0.00%",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-zinc-200/90 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2">
                      <span>ROUTE #{idx + 1}</span>
                      <span className="text-zinc-600 font-semibold">{item.distance}</span>
                    </div>
                    <h3 className="text-sm font-bold text-zinc-950 mb-3 leading-snug">
                      {item.route}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl sm:text-3xl font-black font-mono text-[#0066FF]">
                        {item.latency}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">RTD</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs py-2 border-t border-b border-zinc-100 my-2">
                      <div>
                        <span className="text-zinc-400 block text-[10px] uppercase font-mono">Jitter</span>
                        <span className="font-bold text-zinc-800">{item.jitter}</span>
                      </div>
                      <div>
                        <span className="text-zinc-400 block text-[10px] uppercase font-mono">Packet Drop</span>
                        <span className="font-bold text-emerald-600">{item.loss}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-zinc-500 mt-2 italic">
                    {item.spec}
                  </p>
                </div>
              ))}
            </div>

            {/* Carrier SLA Comparison Table */}
            <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950">
                    SLA Parameter Benchmarks: Adapt India vs Standard ISPs
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600">
                    Why enterprise operations require contractual Service Level Agreements over commercial broadband.
                  </p>
                </div>
                <div className="shrink-0">
                  <a
                    href="tel:+918287479961"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-950 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#0066FF] transition-colors"
                  >
                    <span>Request Sample SLA Contract →</span>
                  </a>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-zinc-200 text-zinc-400 font-mono uppercase text-[11px]">
                      <th className="py-3 px-4">Performance Metric</th>
                      <th className="py-3 px-4 bg-blue-50/50 text-[#0066FF] font-bold">Adapt India Network ILL</th>
                      <th className="py-3 px-4">Traditional Commercial Leased Line</th>
                      <th className="py-3 px-4">Standard Business Broadband</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 text-zinc-700">
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-zinc-900">Uptime Availability Guarantee</td>
                      <td className="py-3.5 px-4 bg-blue-50/50 font-bold text-[#0066FF]">99.999% (&lt; 5 mins/yr)</td>
                      <td className="py-3.5 px-4">99.0% - 99.5% (&gt; 43 hrs/yr)</td>
                      <td className="py-3.5 px-4 text-zinc-400">Best Effort (No SLA)</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-zinc-900">Bandwidth Contention Ratio</td>
                      <td className="py-3.5 px-4 bg-blue-50/50 font-bold text-[#0066FF]">1:1 Dedicated Symmetrical</td>
                      <td className="py-3.5 px-4">1:1 or 1:2 Shared</td>
                      <td className="py-3.5 px-4 text-zinc-400">1:8 to 1:20 High Contention</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-zinc-900">Mean Time to Repair (MTTR)</td>
                      <td className="py-3.5 px-4 bg-blue-50/50 font-bold text-[#0066FF]">&lt; 4 Hours Guaranteed On-Site</td>
                      <td className="py-3.5 px-4">8 to 24 Hours</td>
                      <td className="py-3.5 px-4 text-zinc-400">24 to 72 Hours</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-zinc-900">Financial Rebate Credits</td>
                      <td className="py-3.5 px-4 bg-blue-50/50 font-bold text-[#0066FF]">Yes (Tiered SLA Penalty Payouts)</td>
                      <td className="py-3.5 px-4">Rare / Prorated Billing</td>
                      <td className="py-3.5 px-4 text-zinc-400">None</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-zinc-900">NOC Support Access</td>
                      <td className="py-3.5 px-4 bg-blue-50/50 font-bold text-[#0066FF]">Direct L3 Network Engineer Hotline</td>
                      <td className="py-3.5 px-4">L1 Call Center Ticketing</td>
                      <td className="py-3.5 px-4 text-zinc-400">Generic IVR / Chatbot</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* 3. WHY CHOOSE ADAPT INDIA NETWORK */}
        <section className="w-full bg-[#02050b] text-white py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 relative overflow-hidden border-t border-gray-800 text-left">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
            
            <div className="lg:col-span-6 flex flex-col gap-5">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E31E24]">
                // THE ADAPT INDIA NETWORK STANDARD
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Carrier-Grade Telecom Infrastructure Engineered for Zero Disruption.
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                We replace bureaucratic telecom headaches with direct L3 engineering accountability. Every leased line, SD-WAN appliance, and cloud interconnect is backed by financial SLAs and 24/7/365 active NOC monitoring.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-2">
                <span className="text-2xl font-black text-[#E31E24] font-mono">01</span>
                <h4 className="text-base font-bold text-white">Direct Tier-1 Peering</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">Interconnected with India's top backbones, NIXI, and direct cloud on-ramps to AWS and Azure.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-2">
                <span className="text-2xl font-black text-[#E31E24] font-mono">02</span>
                <h4 className="text-base font-bold text-white">1:1 Symmetrical Bandwidth</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">Zero contention ratio. Uncompressed line speeds guaranteed round-the-clock.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-2">
                <span className="text-2xl font-black text-[#E31E24] font-mono">03</span>
                <h4 className="text-base font-bold text-white">Contractual 99.999% SLA</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">Backed by contractual service credits and &lt;4 hour MTTR on-site restoration.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-2">
                <span className="text-2xl font-black text-[#E31E24] font-mono">04</span>
                <h4 className="text-base font-bold text-white">24/7/365 L3 NOC Helpdesk</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">Direct hotline to senior network architects without waiting through call center scripts.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Global Newsletter & Footer */}
        <UpgradeCTA title="Not sure which service fits?" text="Tell us how many sites you have and what you run on the network. We'll suggest the right setup, not the most expensive one." />
        <NewsletterSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
