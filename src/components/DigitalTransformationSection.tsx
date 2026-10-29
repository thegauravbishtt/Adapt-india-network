"use client";

import React, { useState } from "react";

interface PillarItem {
  id: string;
  title: string;
  description: string;
  image: string;
  stats: {
    value: string;
    label: string;
  }[];
}

const pillarsData: PillarItem[] = [
  {
    id: "future-ready",
    title: "Delivering a future-ready network",
    description:
      "Our future-ready network delivers global reach with 1,500+ PoPs and an on-demand, programmable fabric. Backed by 99.8% first-time-right deployments, 400+ proven playbooks, and deep expertise across LAN, WAN, cloud connectivity, and security, we enable seamless transformations. From SD-WAN and SASE to cloud connectivity and AI-driven architectures, we automate and simplify every step through an agile, as-a-service model.",
    image: "/fabric-future.jpg",
    stats: [
      { value: "1500+", label: "global PoPs" },
      { value: "99.8%", label: "first time right deployments" },
    ],
  },
  {
    id: "resilience",
    title: "Building network resilience",
    description:
      "Dual-homed fiber backbones, diverse subsea and terrestrial routes, and 24/7 proactive NOC monitoring ensuring zero business interruption across enterprise nodes. High-resilience core routing guarantees mission-critical connectivity even during carrier-level disruptions.",
    image: "/fabric-resilience.jpg",
    stats: [
      { value: "99.999%", label: "uptime SLA guarantee" },
      { value: "24/7/365", label: "dedicated NOC operations" },
    ],
  },
  {
    id: "intelligence",
    title: "Integrating Intelligence",
    description:
      "Real-time AI telemetry, sub-second dynamic path steering, and unified dashboard control across multi-cloud and distributed branch endpoints. Intelligent automated anomaly remediation reduces network trouble tickets by up to 70%.",
    image: "/fabric-intelligence.jpg",
    stats: [
      { value: "400+", label: "automated playbooks" },
      { value: "< 15ms", label: "core network switching" },
    ],
  },
];

export default function DigitalTransformationSection() {
  const [activeId, setActiveId] = useState<string>("future-ready");

  return (
    <section className="w-full select-none relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-14 xl:px-16 border-t border-zinc-200/80">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12 w-full relative z-10">
        
        {/* Section Headline matching exact reference screenshot */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-zinc-900 tracking-tight leading-tight">
            <span className="text-[#E31E24] font-medium">Network Fabric</span> for modern enterprises
          </h2>
          <p className="mt-4 text-zinc-600 text-xs sm:text-[14px] md:text-[15px] leading-relaxed font-normal max-w-3xl">
            As digital ecosystems evolve, traditional networks struggle with performance, cost and operational complexity. Our Network Fabric gives you a future-ready, programmable platform with integrated security, unified visibility and on-demand control, helping you adapt faster, operate smarter and stay protected everywhere with a network built to scale with your business.
          </p>
        </div>

        {/* Desktop 3-Card Layout matching reference */}
        <div className="hidden md:flex h-[430px] lg:h-[450px] gap-5 w-full items-stretch transition-all duration-500">
          {pillarsData.map((item) => {
            const isActive = item.id === activeId;

            if (isActive) {
              return (
                <div
                  key={item.id}
                  className="flex-[1.5] transition-all duration-500 ease-out bg-white border border-zinc-200/90 rounded-2xl p-7 lg:p-9 flex flex-col justify-between shadow-sm relative overflow-hidden"
                >
                  <div>
                    {/* Title */}
                    <h3 className="text-2xl sm:text-[26px] font-normal text-zinc-900 leading-snug mb-4">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-600 text-xs sm:text-[13.5px] lg:text-[14px] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Stats Strip */}
                  <div className="pt-6 border-t border-zinc-100 grid grid-cols-2 gap-6">
                    {item.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="border-l-2 border-[#E31E24] pl-3.5 py-0.5">
                        <div className="text-2xl lg:text-3xl font-bold text-[#E31E24] font-sans leading-none tracking-tight">
                          {stat.value}
                        </div>
                        <div className="text-xs text-zinc-500 font-normal mt-1.5 leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            // Inactive Photo Card (click to activate)
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className="flex-1 transition-all duration-500 ease-out rounded-2xl overflow-hidden relative cursor-pointer group shadow-sm border border-zinc-200/80 text-left p-0"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

                <div className="absolute bottom-7 left-6 right-6 z-10">
                  <h3 className="text-white text-lg sm:text-xl font-medium leading-snug">
                    {item.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile Accordion View */}
        <div className="flex md:hidden flex-col gap-3.5 w-full">
          {pillarsData.map((item) => {
            const isExpanded = activeId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white border border-zinc-200/90 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveId(isExpanded ? "" : item.id)}
                  className="w-full p-4 flex items-center justify-between text-left cursor-pointer bg-white"
                >
                  <h3 className="text-sm font-medium text-zinc-900 leading-snug pr-3">
                    {item.title}
                  </h3>
                  <span className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-700 font-bold text-sm shrink-0">
                    {isExpanded ? "−" : "+"}
                  </span>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-5 pt-1 border-t border-zinc-100 flex flex-col gap-4">
                    <p className="text-zinc-600 text-xs leading-relaxed font-normal">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-100">
                      {item.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="border-l-2 border-[#E31E24] pl-2.5 py-0.5">
                          <div className="text-xl font-bold text-[#E31E24] font-sans leading-none">
                            {stat.value}
                          </div>
                          <div className="text-[11px] text-zinc-500 font-normal mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
