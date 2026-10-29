"use client";

import React, { useState } from "react";
import Link from "next/link";

interface CityHub {
  city: string;
  region: "north" | "west" | "south" | "east";
  state: string;
  latency: string;
  features: string;
  poPs: number;
}

const cityHubs: CityHub[] = [
  {
    city: "Delhi NCR",
    region: "north",
    state: "Delhi / Haryana / UP",
    latency: "< 8 ms",
    features: "Tier-4 DC Cross-Connects (Noida & Gurugram)",
    poPs: 28,
  },
  {
    city: "Mumbai",
    region: "west",
    state: "Maharashtra",
    latency: "< 5 ms",
    features: "Subsea Cable Landing Gateway & BFSI Low-Latency Ring",
    poPs: 34,
  },
  {
    city: "Bengaluru",
    region: "south",
    state: "Karnataka",
    latency: "< 7 ms",
    features: "Whitefield & Electronic City Tech-Park Fiber Rings",
    poPs: 26,
  },
  {
    city: "Hyderabad",
    region: "south",
    state: "Telangana",
    latency: "< 8 ms",
    features: "HITEC City & Gachibowli Hyperscale Cloud Interconnect",
    poPs: 22,
  },
  {
    city: "Chennai",
    region: "south",
    state: "Tamil Nadu",
    latency: "< 6 ms",
    features: "Dual Subsea Landing Station & SIPCOT Industrial Link",
    poPs: 18,
  },
  {
    city: "Pune",
    region: "west",
    state: "Maharashtra",
    latency: "< 9 ms",
    features: "Hinjewadi IT Cluster & Auto Manufacturing Corridor",
    poPs: 16,
  },
  {
    city: "Ahmedabad",
    region: "west",
    state: "Gujarat",
    latency: "< 12 ms",
    features: "GIFT City Trading Line & Sanand Industrial Trunk",
    poPs: 14,
  },
  {
    city: "Kolkata",
    region: "east",
    state: "West Bengal",
    latency: "< 14 ms",
    features: "Sector V Salt Lake Hub & East India Gateway Backbone",
    poPs: 12,
  },
];

export default function NetworkFabricSection() {
  const [activeRegion, setActiveRegion] = useState<"all" | "north" | "west" | "south" | "east">("all");

  const filteredHubs =
    activeRegion === "all"
      ? cityHubs
      : cityHubs.filter((hub) => hub.region === activeRegion);

  return (
    <section id="network-fabric" className="w-full bg-[#050811] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 select-none relative overflow-hidden border-b border-zinc-800/80">
      
      {/* Subtle Top Red Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-48 h-[2px] bg-[#E31E24]" />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24]" />
            <span className="text-[#E31E24] font-mono font-bold text-[11px] uppercase tracking-[0.22em]">
              NATIONWIDE TELECOM INFRASTRUCTURE
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-sans text-white">
            Pan-India Enterprise <span className="text-[#E31E24]">Coverage &amp; Reach</span>
          </h2>
          
          <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 font-normal max-w-2xl mx-auto leading-relaxed">
            High-availability dual-carrier fiber backbone connecting over 150+ industrial corridors, corporate IT parks, and hyperscale data centers across India.
          </p>
        </div>

        {/* ======================================================== */}
        {/* KEY NETWORK STATS STRIP                                  */}
        {/* ======================================================== */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
          <div className="bg-[#0b121e] border border-zinc-800/90 rounded-xl p-4 sm:p-5 text-center flex flex-col items-center justify-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#E31E24] font-mono tracking-tight leading-none">
              150+
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-zinc-300 mt-1.5">
              Cities &amp; Industrial Hubs
            </span>
            <span className="text-[9.5px] text-zinc-500 font-mono mt-0.5">Pan-India Reach</span>
          </div>

          <div className="bg-[#0b121e] border border-zinc-800/90 rounded-xl p-4 sm:p-5 text-center flex flex-col items-center justify-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#E31E24] font-mono tracking-tight leading-none">
              99.5%
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-zinc-300 mt-1.5">
              Guaranteed Uptime SLA
            </span>
            <span className="text-[9.5px] text-zinc-500 font-mono mt-0.5">Dual Carrier Auto-Failover</span>
          </div>

          <div className="bg-[#0b121e] border border-zinc-800/90 rounded-xl p-4 sm:p-5 text-center flex flex-col items-center justify-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight leading-none">
              &lt; 15ms
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-zinc-300 mt-1.5">
              Intra-Metro Core Latency
            </span>
            <span className="text-[9.5px] text-zinc-500 font-mono mt-0.5">Uncompressed 1:1 Fiber</span>
          </div>

          <div className="bg-[#0b121e] border border-zinc-800/90 rounded-xl p-4 sm:p-5 text-center flex flex-col items-center justify-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight leading-none">
              24/7/365
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-zinc-300 mt-1.5">
              Level-3 Enterprise NOC
            </span>
            <span className="text-[9.5px] text-zinc-500 font-mono mt-0.5">4-Hour MTTR SLA</span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MAIN TWO-COLUMN INFRASTRUCTURE CONTENT                    */}
        {/* ======================================================== */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-10">
          
          {/* Left Column: City Hub Directory with Regional Filters (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0b121e] border border-zinc-800/90 rounded-2xl p-5 sm:p-7 shadow-xl">
            
            {/* Filter Tabs Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 border-b border-zinc-800/80 pb-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                  Key Enterprise Connectivity Nodes
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Direct Tier-1 points of presence with redundant fiber terminations.
                </p>
              </div>

              {/* Regional Pills */}
              <div className="flex items-center gap-1 bg-[#060a12] p-1 rounded-lg border border-zinc-800 shrink-0">
                {(["all", "north", "west", "south", "east"] as const).map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setActiveRegion(reg)}
                    className={`px-2.5 py-1 rounded text-[10.5px] font-mono font-bold uppercase transition-all cursor-pointer ${
                      activeRegion === reg
                        ? "bg-[#E31E24] text-white"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>
            </div>

            {/* City Hub Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredHubs.map((hub, idx) => (
                <div
                  key={idx}
                  className="bg-[#070c16] border border-zinc-800/80 hover:border-zinc-700 rounded-xl p-3.5 flex flex-col justify-between transition-colors"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-bold text-white font-sans">
                      {hub.city}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#E31E24] bg-red-950/40 border border-red-900/50 px-1.5 py-0.5 rounded">
                      {hub.latency}
                    </span>
                  </div>

                  <p className="text-[11px] text-zinc-400 leading-snug mb-2 font-sans">
                    {hub.features}
                  </p>

                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-zinc-800/60">
                    <span>{hub.state}</span>
                    <span className="text-zinc-300 font-semibold">{hub.poPs} Carrier PoPs</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Carrier Architecture Engineering Pillars (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Card 1: Dual-Carrier Last-Mile Guarantee */}
            <div className="bg-[#0b121e] border border-zinc-800/90 rounded-2xl p-5 sm:p-6 shadow-xl">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-[#E31E24]/40 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#E31E24]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" />
                  </svg>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white font-sans">
                  Dual-Carrier Last-Mile Redundancy
                </h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We bridge your enterprise directly to parallel fiber rings from <strong className="text-zinc-200">Tata Teleservices (TTBS)</strong> and <strong className="text-zinc-200">ACT Enterprise</strong>. If one carrier experiences local civil fiber cuts, traffic instantaneously failovers to the backup link in milliseconds.
              </p>
            </div>

            {/* Card 2: Direct Multi-Cloud Hyperscale Peering */}
            <div className="bg-[#0b121e] border border-zinc-800/90 rounded-2xl p-5 sm:p-6 shadow-xl">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-[#E31E24]/40 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#E31E24]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                  </svg>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white font-sans">
                  Direct Multi-Cloud On-Ramps
                </h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Bypass public internet congestion with dedicated private cross-connects to AWS Direct Connect (Mumbai &amp; Hyderabad), Microsoft Azure ExpressRoute (Central/South), and Google Cloud interconnects.
              </p>
            </div>

            {/* Card 3: 24/7 Proactive L3 Enterprise NOC */}
            <div className="bg-[#0b121e] border border-zinc-800/90 rounded-2xl p-5 sm:p-6 shadow-xl">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-[#E31E24]/40 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#E31E24]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white font-sans">
                  SLA-Backed 24/7 NOC Monitoring
                </h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Dedicated enterprise engineers continuously monitor your leased lines, SD-WAN routers, and campus switches with automated ticket generation and 4-hour mean-time-to-restore (MTTR).
              </p>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* CARRIER ALLIANCE VERIFICATION & CTA STRIP                 */}
        {/* ======================================================== */}
        <div className="w-full bg-[#090f1a] border border-zinc-800/90 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">
                Ready to verify enterprise coverage at your office or datacenter?
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Our network engineers provide instant feasibility and route surveys across Delhi NCR, Mumbai, Bengaluru, and pan-India.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xs bg-[#E31E24] hover:bg-[#c9171d] text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-red-600/20 active:scale-95 shrink-0"
          >
            <span>Check Feasibility</span>
            <span>&rarr;</span>
          </Link>

        </div>

      </div>

    </section>
  );
}
