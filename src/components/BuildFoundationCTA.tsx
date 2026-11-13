"use client";

import React from "react";
import Link from "next/link";

const POINTS = [
  { title: "24/7 support", text: "Our NOC watches your links day and night." },
  { title: "Tata & ACT networks", text: "Carrier-grade connectivity from trusted partners." },
  { title: "Pan-India delivery", text: "One team for every office, from Delhi to Chennai." },
];

export default function BuildFoundationCTA() {
  return (
    <section className="w-full bg-[#02050b] text-white pt-14 sm:pt-16 lg:pt-20 pb-2 px-3 sm:px-6 lg:px-8 select-none">
      <div className="max-w-[1400px] mx-auto relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-zinc-800/90 bg-[#070b14] px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
        {/* warm red light from the top-right corner */}
        <div className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-[#E31E24]/20 blur-[140px] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E31E24]/70 to-transparent" />

        <div className="relative z-10 grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="text-left">
            <h2 className="text-[30px] sm:text-4xl lg:text-[46px] font-semibold tracking-tight leading-[1.12]">
              Build a strong digital foundation for tomorrow.
              <span className="block text-[#E31E24] mt-1">Talk to us today.</span>
            </h2>
            <p className="text-zinc-400 text-[15px] sm:text-base leading-relaxed mt-5 max-w-xl">
              Leased lines, SD-WAN, Wi-Fi and business voice, planned, installed and supported by one
              team, so your offices stay online and your IT stays simple.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#E31E24] hover:bg-[#c9171d] text-white font-semibold text-[15px] transition-colors shadow-lg shadow-red-900/40"
              >
                Get a free quote
              </Link>
              <a
                href="tel:+918287479961"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-zinc-700 hover:border-white text-white font-semibold text-[15px] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call +91 82874 79961
              </a>
            </div>
          </div>

          <ul className="flex flex-col divide-y divide-zinc-800/90 border-y border-zinc-800/90 lg:border-y-0 lg:border-l lg:pl-12">
            {POINTS.map((p) => (
              <li key={p.title} className="flex items-start gap-4 py-5">
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#E31E24] shadow-[0_0_12px_rgba(227,30,36,0.8)] flex-none" />
                <div>
                  <p className="text-white font-semibold text-base sm:text-lg">{p.title}</p>
                  <p className="text-zinc-400 text-sm sm:text-[15px] mt-1">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
