"use client";

import UpgradeCTA from "@/components/UpgradeCTA";
import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import NewsletterSection from "../../../components/NewsletterSection";
import Footer from "../../../components/Footer";
import { LanguageProvider } from "../../../context/LanguageContext";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Activity, Network, Clock } from "lucide-react";

export default function HowWeWorkPage() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: "01",
      title: "Feasibility Survey & Route Engineering",
      tagline: "Stage 1: Last-Mile Fiber & PoP Distance Analysis",
      desc: "Our field telecommunications engineers perform comprehensive on-site optical surveys. We map physical fiber entry points, measure OTDR attenuation to nearest Tier-1 carrier PoPs (Tata / ACT), and engineer dual-redundant underground and aerial cable pathways.",
      deliverables: [
        "On-Site OTDR Optical Loss Testing",
        "Dual-Homed Cable Route Blueprint",
        "Carrier PoP Latency Benchmarking",
        "SLA Feasibility & Fixed Bandwidth Quote",
      ],
      highlight: "Survey & Design",
    },
    {
      num: "02",
      title: "Fiber Ring Termination & CPE Staging",
      tagline: "Stage 2: Carrier Cross-Connect & Hardware Configuration",
      desc: "We coordinate with carrier optical transport teams to splice and terminate dedicated single-mode optical fiber. Enterprise CPE (routers, SD-WAN appliances, optical media converters) are pre-staged, hardened, and burned-in in our staging facility.",
      deliverables: [
        "1:1 Uncompressed Optical Cross-Connect",
        "Pre-Hardened Cisco / Fortinet / Aruba CPE",
        "Public IPv4 / IPv6 Subnet Allocation",
        "Direct Carrier Cross-Connect Validation",
      ],
      highlight: "Hardware Staging",
    },
    {
      num: "03",
      title: "BGP Multi-Homing & Failover QA",
      tagline: "Stage 3: Sub-50ms Redundancy & Packet Loss Stress Testing",
      desc: "We configure multi-homed BGP routing policies, QoS prioritization for mission-critical voice/video, and clean-pipe DDoS filtering. We simulate active fiber cuts to guarantee sub-50ms automatic failover between primary and secondary optical paths.",
      deliverables: [
        "Sub-50ms Automated Link Failover QA",
        "RFC 2544 Throughput & Jitter Testing",
        "QoS Traffic Prioritization (VoIP/ERP/Cloud)",
        "Edge Firewall & Clean Pipe DDoS Validation",
      ],
      highlight: "Failover Validation",
    },
    {
      num: "04",
      title: "24/7/365 NOC Telemetry & SLA Assurance",
      tagline: "Stage 4: Continuous Proactive Monitoring & sub-4h MTTR",
      desc: "Your link transitions into our dual-active Network Operations Centers (NOC). We monitor link health, optical power, jitter, and packet loss every 10 seconds. In the event of physical fiber cuts, field teams are automatically dispatched with a sub-4-hour MTTR guarantee.",
      deliverables: [
        "24/7/365 Dual-Active NOC Surveillance",
        "Sub-4 Hour On-Site MTTR Guarantee",
        "Real-Time Customer Telemetry Dashboard",
        "Monthly 99.999% SLA Performance Audits",
      ],
      highlight: "24/7 NOC Active",
    },
  ];

  const guarantees = [
    {
      title: "99.999% SLA Uptime",
      desc: "Carrier-backed contractual uptime guarantees with automated credit compensation for any downtime breach.",
    },
    {
      title: "Sub-4 Hour MTTR",
      desc: "Guaranteed Mean Time to Repair backed by localized field maintenance squads equipped with OTDR and optical fusion splicers.",
    },
    {
      title: "Dual-Ring Optical Redundancy",
      desc: "True physical path diversity terminating into separate carrier exchanges to eliminate single points of failure.",
    },
    {
      title: "Direct L2/L3 NOC Access",
      desc: "Zero tier-1 call center delays. Reach certified network architects directly via phone and automated ticketing portals 24/7.",
    },
  ];

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip relative w-full select-none">
        {/* Navigation */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-1 w-full">
          {/* 1. HERO BANNER (Standard Banner Size Matching Other Pages) */}
          <section className="relative w-full text-white pt-28 sm:pt-32 lg:pt-36 pb-7 sm:pb-9 lg:pb-10 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
            {/* Background Image with Dark Vignette & Gradient Overlays */}
            <div className="absolute inset-0 z-0">
              <img
                src="/banner-process.jpg"
                alt="How We Work - Adapt India Network"
                className="w-full h-full object-cover object-center scale-100 filter brightness-[0.72] contrast-[1.10]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/35 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-black/45 z-10" />
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
                  <Link
                    href="/about"
                    className="hidden sm:inline-flex items-center gap-1 text-xs font-mono font-semibold text-zinc-400 hover:text-zinc-200 uppercase tracking-wider transition-colors"
                  >
                    <span>ABOUT HUB</span>
                  </Link>
                  <span className="hidden sm:inline-block text-zinc-600">/</span>
                  <span className="px-3 py-0.5 rounded-full bg-black/60 border border-red-500/40 text-[#E31E24] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                    // HOW WE WORK
                  </span>
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="relative z-20 max-w-7xl mx-auto w-full">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
                <div className="flex flex-col items-start text-left max-w-3xl">
                  <span className="font-mono text-xs font-extrabold tracking-widest text-[#E31E24] uppercase mb-1.5 block">
                    // NETWORK ENGINEERING LIFECYCLE
                  </span>

                  <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white font-display tracking-tight uppercase leading-[1.1] mb-2 drop-shadow-md">
                    HOW WE WORK
                  </h1>

                  <p className="text-zinc-200 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm mb-4">
                    From physical fiber feasibility surveys to 24/7/365 active NOC telemetry. Explore our structured 4-phase deployment framework delivering carrier-grade SLA performance.
                  </p>
                </div>

                <div className="hidden lg:flex items-center gap-3 text-zinc-300 font-mono text-xs font-bold uppercase tracking-wider select-none shrink-0 self-end">
                  <span>EXPLORE PHASES</span>
                  <span className="w-8 h-8 rounded-full border border-white/30 bg-black/40 flex items-center justify-center text-[#E31E24] animate-bounce">
                    ↓
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 2. INTERACTIVE 4-PHASE DELIVERY FRAMEWORK */}
          <section className="w-full bg-white text-black py-14 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-6xl mx-auto flex flex-col gap-10">
              <div className="flex flex-col items-start text-left max-w-3xl">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E31E24] mb-1">
                  ENTERPRISE DEPLOYMENT PROTOCOL
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 font-display tracking-tight">
                  Carrier-grade network commissioning &amp; SLA assurance
                </h2>
                <p className="text-zinc-600 text-xs sm:text-sm mt-1">
                  Select each phase below to review our engineering standards and deliverable benchmarks:
                </p>
              </div>

              {/* 2-Column Interactive Process */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Left Column: 4 Selectable Phase Tabs */}
                <div className="lg:col-span-5 flex flex-col gap-3 text-left">
                  {steps.map((step, idx) => {
                    const isActive = activeStep === idx;
                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col gap-1 relative ${
                          isActive
                            ? "bg-white border-zinc-400 shadow-sm border-l-[4px] border-l-[#E31E24]"
                            : "bg-[#fafafb] border-zinc-200 hover:border-zinc-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`font-mono text-xs font-black px-2 py-0.5 rounded-md ${
                            isActive ? "bg-[#E31E24] text-white" : "bg-zinc-200 text-zinc-800"
                          }`}>
                            STAGE {step.num}
                          </span>
                          {isActive && (
                            <span className="text-[10px] font-mono text-zinc-700 font-bold bg-zinc-100 px-2 py-0.5 rounded-full">
                              ACTIVE VIEW
                            </span>
                          )}
                        </div>
                        <h3 className="text-sm sm:text-base font-bold font-display text-zinc-950 mt-1">
                          {step.title}
                        </h3>
                        <p className="text-zinc-500 text-xs font-normal">
                          {step.tagline}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Right Column: Step Details Card */}
                <div className="lg:col-span-7 bg-[#fafafb] border border-zinc-200/90 rounded-3xl p-6 sm:p-8 text-zinc-900 shadow-xs flex flex-col justify-between min-h-[380px] text-left">
                  <div className="flex items-center justify-between border-b border-zinc-200 pb-3 mb-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500">
                      STAGE {steps[activeStep].num} // SPECIFICATIONS
                    </span>
                    <span className="text-[11px] font-mono text-white bg-[#E31E24] font-bold px-2.5 py-0.5 rounded-full">
                      {steps[activeStep].highlight}
                    </span>
                  </div>

                  <div className="flex flex-col gap-4 my-auto animate-fadeIn">
                    <h4 className="text-xl sm:text-2xl font-black font-display text-zinc-950">
                      {steps[activeStep].title}
                    </h4>

                    <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed">
                      {steps[activeStep].desc}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="pt-4 border-t border-zinc-200">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-700 block mb-2.5">
                        Engineering Deliverables &amp; Milestones:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {steps[activeStep].deliverables.map((item, dIdx) => (
                          <div
                            key={dIdx}
                            className="bg-white border border-zinc-200 p-2.5 rounded-xl flex items-center gap-2 text-xs text-zinc-800 shadow-2xs"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#E31E24] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-200 flex items-center justify-between text-[11px] font-mono text-zinc-500 mt-4">
                    <span>Tata Teleservices &amp; ACT Alliances</span>
                    <span className="text-zinc-900 font-semibold">● 99.999% SLA Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. WORKING GUARANTEES */}
          <section className="w-full bg-[#fafafb] text-black py-14 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-6xl mx-auto flex flex-col gap-10 text-left">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-1">
                  OUR SLA COMMITMENT
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 font-display tracking-tight">
                  Carrier-Grade Performance Benchmarks
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {guarantees.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-zinc-200/90 p-6 rounded-2xl shadow-xs flex flex-col gap-2.5"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#E31E24] text-white font-mono font-black text-xs flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-zinc-950 font-display mt-1">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. CALL TO ACTION */}
          <section className="w-full bg-zinc-950 text-white py-14 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight uppercase">
                READY TO CONNECT YOUR ENTERPRISE?
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base max-w-xl">
                Schedule a site feasibility survey with our senior network architects to receive a tailored optical routing plan and carrier SLA terms.
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
                  Explore All Network Solutions →
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Strategy Call / Newsletter Section */}
        <UpgradeCTA title="See how we'd deliver your connection" text="From site survey to go-live, one team handles the carrier, installation and testing for every location." />
        <NewsletterSection />

        {/* FOOTER */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
