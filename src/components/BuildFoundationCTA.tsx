"use client";

import React from "react";
import Link from "next/link";

const WAYS = [
  {
    label: "Call us",
    value: "+91 82874 79961",
    href: "tel:+918287479961",
    icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  },
  {
    label: "WhatsApp",
    value: "Chat with our team",
    href: "https://wa.me/918287479961",
    icon: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
  },
  {
    label: "Email",
    value: "info@adapt-india.net",
    href: "mailto:info@adapt-india.net",
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  },
];

export default function BuildFoundationCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#E31E24] text-white select-none">
      {/* fibre lines running across the band */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.18] pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1200 400" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <path key={i} d={`M-50 ${330 - i * 38} C 300 ${250 - i * 30}, 700 ${420 - i * 42}, 1250 ${120 - i * 14}`} fill="none" stroke="#fff" strokeWidth="1.2" />
        ))}
      </svg>
      <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-black/25 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="text-left">
          <p className="text-white/80 text-sm sm:text-[15px] font-medium">Ready when you are</p>
          <h2 className="mt-3 text-[34px] sm:text-5xl lg:text-[58px] font-bold tracking-tight leading-[1.04]">
            Your business deserves internet that never lets it down.
          </h2>
          <p className="mt-6 text-white/85 text-base sm:text-lg leading-relaxed max-w-xl">
            Tell us about your office and we&rsquo;ll suggest the right leased line, SD-WAN or Wi-Fi setup, with a clear quote and no obligation.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-white text-[#B3141A] hover:bg-zinc-900 hover:text-white px-8 py-4 text-base font-bold shadow-xl shadow-black/20 transition-colors"
          >
            Get a free quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="rounded-3xl bg-[#0b0f17] p-6 sm:p-8 shadow-2xl shadow-black/30">
          <p className="text-white text-xl sm:text-2xl font-semibold">Speak to an expert</p>
          <p className="text-zinc-400 text-sm sm:text-[15px] mt-1.5">Talk to a real person about your office, today.</p>
          <ul className="mt-6 flex flex-col gap-3">
            {WAYS.map((w) => (
              <li key={w.label}>
                <a
                  href={w.href}
                  target={w.href.startsWith("http") ? "_blank" : undefined}
                  rel={w.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-zinc-800 hover:border-[#E31E24] bg-white/[0.02] px-4 py-3.5 transition-colors"
                >
                  <span className="w-11 h-11 rounded-xl bg-[#E31E24]/15 text-[#ff4a50] flex items-center justify-center flex-none group-hover:bg-[#E31E24] group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d={w.icon} />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-zinc-400 text-xs sm:text-[13px]">{w.label}</span>
                    <span className="block text-white text-[15px] sm:text-base font-semibold truncate">{w.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
