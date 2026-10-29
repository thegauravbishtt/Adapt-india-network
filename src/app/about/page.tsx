"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import NewsletterSection from "../../components/NewsletterSection";
import Footer from "../../components/Footer";
import { LanguageProvider } from "../../context/LanguageContext";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Zap, Activity, Radio, Server } from "lucide-react";

export default function AboutMainPage() {
  const subpages = [
    {
      title: "Who We Are",
      badge: "01 // COMPANY IDENTITY",
      desc: "Our mission, executive engineering leadership, core principles, and strategic alliances with Tata Teleservices (TTBS) and ACT Enterprise.",
      href: "/about/who-we-are",
      cta: "Explore Who We Are →",
      stats: "99.999% SLA Uptime · 100+ Metro Hubs",
      highlights: ["Dual-Active NOC Centers", "Direct L3 Network Engineering", "Authorized Tata & ACT Partner"],
    },
    {
      title: "How We Work",
      badge: "02 // OPERATING & DEPLOYMENT MODEL",
      desc: "Our 4-phase network deployment methodology, optical fiber ring termination, dual-homed BGP routing, and automated telemetry triage.",
      href: "/about/how-we-work",
      cta: "See How We Work →",
      stats: "Sub-4h MTTR · Sub-15ms Latency",
      highlights: ["Protected Last-Mile Fiber", "Pre-Configured CPE Staging", "24/7/365 Live Telemetry"],
    },
    {
      title: "What We Do",
      badge: "03 // CAPABILITIES MATRIX",
      desc: "Full-spectrum enterprise connectivity spanning Internet Leased Lines, SD-WAN, MPLS VPN, Cloud Telephony, and Edge Cybersecurity.",
      href: "/about/what-we-do",
      cta: "View All Capabilities →",
      stats: "12+ Carrier Services",
      highlights: ["Dedicated 1:1 Bandwidth", "Clean Pipe DDoS Scrubbing", "Zero Packet Loss Guarantee"],
    },
  ];

  const networkPillars = [
    {
      num: "01",
      title: "99.999% Contractual SLA",
      desc: "Dual-homed fiber paths, diverse physical entry points, and automated optical failover ensure your business stays connected around the clock.",
    },
    {
      num: "02",
      title: "1:1 Dedicated Symmetrical Bandwidth",
      desc: "Strictly zero contention ratio. What you pay for is 100% reserved exclusively for your enterprise traffic with sub-15ms metro latency.",
    },
    {
      num: "03",
      title: "24/7/365 Proactive NOC Monitoring",
      desc: "Our dual-active Network Operations Centers in Mumbai and Gurugram execute live NetFlow telemetry and resolve decibel drops before outages occur.",
    },
    {
      num: "04",
      title: "Strategic Carrier Alliances",
      desc: "Authorized enterprise alliance partner with Tata Teleservices (TTBS) and ACT Enterprise, delivering pan-India tier-1 telecom infrastructure.",
    },
  ];

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip relative w-full select-none">
        
        {/* Navigation */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-1 w-full">

          {/* 1. HERO BANNER (Standard Banner Size) */}
          <section className="relative w-full text-white pt-28 sm:pt-32 lg:pt-36 pb-7 sm:pb-9 lg:pb-10 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
            
            {/* Background Image with Dark Vignette & Gradient Overlays */}
            <div className="absolute inset-0 z-0">
              <img
                src="/banner-about-enterprise.jpg"
                alt="Adapt India Network Telecom Infrastructure & Data Center"
                className="w-full h-full object-cover object-center scale-100 filter brightness-[0.70] contrast-[1.10]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/35 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-black/45 z-10" />
            </div>

            {/* Top Row: Back to Home + Breadcrumb */}
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
                  <span className="px-3 py-0.5 rounded-full bg-black/60 border border-red-500/40 text-[#E31E24] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                    // ABOUT HUB
                  </span>
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="relative z-20 max-w-7xl mx-auto w-full">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
                
                <div className="flex flex-col items-start text-left max-w-3xl">
                  <span className="font-mono text-xs font-extrabold tracking-widest text-[#E31E24] uppercase mb-1.5 block">
                    // ENTERPRISE TELECOM &amp; NETWORK INFRASTRUCTURE
                  </span>

                  <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white font-display tracking-tight uppercase leading-[1.1] mb-2 drop-shadow-md">
                    ABOUT ADAPT INDIA NETWORK
                  </h1>

                  <p className="text-zinc-200 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm mb-4">
                    Powering India&apos;s leading enterprises with carrier-grade optical fiber, next-generation SD-WAN, and 24/7/365 proactive NOC operations across 100+ industrial and metro hubs.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="/services"
                      className="px-6 py-2.5 bg-[#E31E24] hover:bg-[#c9171d] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md transition-colors shadow-sm"
                    >
                      Explore Solutions →
                    </Link>
                    <Link
                      href="/contact"
                      className="px-5 py-2.5 bg-black/50 hover:bg-black/75 text-white text-xs sm:text-sm font-semibold rounded-md border border-white/20 backdrop-blur-sm transition-colors"
                    >
                      Contact NOC Engineering
                    </Link>
                  </div>
                </div>

                <div className="hidden lg:flex items-center gap-3 text-zinc-300 font-mono text-xs font-bold uppercase tracking-wider select-none shrink-0 self-end">
                  <span>EXPLORE SECTIONS</span>
                  <span className="w-8 h-8 rounded-full border border-white/30 bg-black/40 flex items-center justify-center text-[#E31E24] animate-bounce">
                    ↓
                  </span>
                </div>

              </div>
            </div>
          </section>

          {/* 2. 3 CORE SUB-PAGES NAVIGATION CARDS */}
          <section className="w-full bg-white text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
              <div className="flex flex-col items-start text-left max-w-3xl">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E31E24] mb-1">
                  OUR CAPABILITIES &amp; INFRASTRUCTURE
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 font-display tracking-tight">
                  Explore Our 3 Core Pillars
                </h2>
                <p className="text-zinc-600 text-xs sm:text-sm mt-1">
                  Learn about our company background, our carrier-grade deployment methodology, and our complete list of telecom and network services:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {subpages.map((sec, idx) => (
                  <Link
                    key={idx}
                    href={sec.href}
                    className="bg-[#fafafb] border border-zinc-200/90 rounded-3xl p-8 hover:border-zinc-900 hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between gap-6 group cursor-pointer relative"
                  >
                    <div className="flex flex-col gap-3">
                      <span className="font-mono text-xs font-black text-white bg-zinc-900 px-3 py-1 rounded-md self-start">
                        {sec.badge}
                      </span>

                      <h3 className="text-2xl font-black font-display text-zinc-900 group-hover:text-black transition-colors mt-2">
                        {sec.title}
                      </h3>

                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                        {sec.desc}
                      </p>

                      <div className="pt-3 flex flex-col gap-2">
                        {sec.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#E31E24] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 border-t border-zinc-200 flex flex-col gap-2">
                      <span className="text-[11px] font-mono text-zinc-500 font-semibold">
                        {sec.stats}
                      </span>
                      <span className="text-sm font-bold text-zinc-900 group-hover:text-[#E31E24] group-hover:translate-x-1 transition-all flex items-center gap-1.5">
                        {sec.cta}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* 3. CORE NETWORK PRINCIPLES */}
          <section className="w-full bg-[#fafafb] text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-7xl mx-auto flex flex-col gap-12 text-left">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-4 border-b border-zinc-200">
                <div className="max-w-2xl">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E31E24] block mb-1">
                    OUR NETWORK STANDARDS
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 font-display tracking-tight">
                    Engineered Around Unforgiving Telco Standards
                  </h2>
                </div>
                <div className="text-xs font-mono text-zinc-500">
                  ALLIANCE PARTNER · TATA TELESERVICES &amp; ACT ENTERPRISE
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {networkPillars.map((p, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-zinc-200/90 p-6 rounded-2xl shadow-xs flex flex-col gap-3"
                  >
                    <span className="w-8 h-8 rounded-full bg-zinc-900 text-white font-mono font-black text-xs flex items-center justify-center">
                      {p.num}
                    </span>
                    <h3 className="text-base font-bold text-zinc-950 font-display mt-1">
                      {p.title}
                    </h3>
                    <p className="text-zinc-600 text-xs leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. CALL TO ACTION RIBBON */}
          <section className="w-full bg-zinc-950 text-white py-16 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
              <span className="font-mono text-xs font-extrabold tracking-widest text-[#E31E24] uppercase">
                // ENTERPRISE CONNECTIVITY FEASIBILITY
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight uppercase">
                READY TO UPGRADE YOUR ENTERPRISE NETWORK?
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base max-w-xl">
                Request a fiber route feasibility survey and receive custom bandwidth SLA pricing within 2 hours.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="bg-[#E31E24] hover:bg-[#c9171d] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg hover:scale-105"
                >
                  Request Feasibility Survey →
                </Link>
                <Link
                  href="/services"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-sm"
                >
                  Explore All Solutions →
                </Link>
              </div>
            </div>
          </section>

        </main>

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* FOOTER */}
        <Footer />

      </div>
    </LanguageProvider>
  );
}
