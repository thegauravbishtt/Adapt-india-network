"use client";

import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import NewsletterSection from "../../../components/NewsletterSection";
import Footer from "../../../components/Footer";
import { LanguageProvider } from "../../../context/LanguageContext";
import Link from "next/link";
import { ChevronDown, CheckCircle2, ShieldCheck, Activity, Network, Award } from "lucide-react";

export default function WhoWeArePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is Adapt India Network's core operational focus?",
      a: "Adapt India Network is an enterprise-grade telecommunications and network solutions provider in India. In strategic alliance with Tier-1 carriers including Tata Teleservices (TTBS) and ACT Enterprise, we design, deploy, and manage mission-critical Internet Leased Lines (ILL), SD-WAN overlays, MPLS VPN fabrics, SIP Trunks, and Edge Cybersecurity across 60+ Indian commercial metros.",
    },
    {
      q: "How does Adapt India deliver a 99.999% SLA uptime guarantee?",
      a: "Our network architecture is built on dual-homed, self-healing optical fiber rings terminating directly into Tier-1 carrier points of presence (PoPs). All backbone links feature automated BGP multi-homing and sub-50ms hardware failover, backed by round-the-clock proactive monitoring from our dual-active Network Operations Centers (NOC).",
    },
    {
      q: "What carrier partnerships power your infrastructure?",
      a: "We maintain direct strategic enterprise alliances with Tata Teleservices (TTBS) and ACT Enterprise. This enables us to provision symmetric bandwidth up to 10 Gbps, carrier-grade IP blocks, enterprise PRI/SIP trunking, and native Cloud Interconnect (AWS Direct Connect, Azure ExpressRoute) with guaranteed mean-time-to-repair (MTTR) under 4 hours.",
    },
    {
      q: "How does your 24/7/365 Network Operations Center (NOC) operate?",
      a: "Our NOC operates across dual redundant centers located in Gurugram and Mumbai. Network telemetry monitors packet loss, jitter, latency, and optical power every 10 seconds. In the event of a fiber anomaly, automated tickets are triggered immediately with dedicated L2/L3 network engineers dispatched on-site.",
    },
  ];

  const pillars = [
    {
      number: "01",
      title: "Carrier-Grade Fiber Architecture",
      description:
        "Direct point-to-point leased line delivery over dual-ring optical fiber paths with 1:1 uncompressed, symmetric bandwidth up to 10 Gbps.",
    },
    {
      number: "02",
      title: "Strategic Carrier Alliances",
      description:
        "Direct enterprise alliances with Tata Teleservices (TTBS) and ACT Enterprise, offering Tier-1 routing, native peering, and multi-cloud interconnects.",
    },
    {
      number: "03",
      title: "24/7 Dual-Active NOC Telemetry",
      description:
        "Dual-active Network Operations Centers in Gurugram and Mumbai providing continuous SNMP & telemetry surveillance with sub-4-hour MTTR SLA commitment.",
    },
    {
      number: "04",
      title: "Zero-Trust Edge Security",
      description:
        "Clean-pipe upstream DDoS mitigation, Next-Gen Firewall as a Service (FWaaS), and deterministic SD-WAN encryption protecting every enterprise packet.",
    },
  ];

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip relative w-full select-none">
        <Navbar />

        <main className="flex-1 w-full">
          {/* 1. HERO BANNER (Standard Banner Size Matching Other Pages) */}
          <section className="relative w-full text-white pt-28 sm:pt-32 lg:pt-36 pb-7 sm:pb-9 lg:pb-10 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
            <div className="absolute inset-0 z-0">
              <img
                src="/banner-who-we-are.jpg"
                alt="Who We Are - Adapt India Network"
                className="w-full h-full object-cover object-center scale-100 filter brightness-[0.72] contrast-[1.10]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
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
                    // WHO WE ARE
                  </span>
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="relative z-20 max-w-7xl mx-auto w-full">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
                <div className="flex flex-col items-start text-left max-w-3xl">
                  <span className="font-mono text-xs font-extrabold tracking-widest text-[#E31E24] uppercase mb-1.5 block">
                    // ENTERPRISE TELECOM INFRASTRUCTURE
                  </span>

                  <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white font-display tracking-tight uppercase leading-[1.1] mb-2 drop-shadow-md">
                    WHO WE ARE
                  </h1>

                  <p className="text-zinc-200 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm mb-4">
                    Adapt India Network is India&apos;s leading enterprise telecom solutions provider. In strategic alliance with Tata Teleservices (TTBS) and ACT Enterprise, we power corporate offices, financial hubs, healthcare campuses, and data centers with mission-critical connectivity.
                  </p>
                </div>

                <div className="hidden lg:flex items-center gap-3 text-zinc-300 font-mono text-xs font-bold uppercase tracking-wider select-none shrink-0 self-end">
                  <span>EXPLORE INFRASTRUCTURE</span>
                  <span className="w-8 h-8 rounded-full border border-white/30 bg-black/40 flex items-center justify-center text-[#E31E24] animate-bounce">
                    ↓
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 2. OUR MISSION */}
          <section className="w-full bg-white text-black py-14 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-100">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6 flex flex-col items-start text-left gap-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E31E24]">
                  ENTERPRISE CONNECTIVITY LEADERSHIP
                </span>
                <h2 className="text-2xl sm:text-4xl font-black font-display text-zinc-950 tracking-tight leading-tight">
                  Carrier-grade network infrastructure built for zero downtime.
                </h2>
                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                  Enterprises cannot afford network downtime, packet loss, or high latency. Adapt India Network was established to replace fragmented telecom vendor management with unified, SLA-backed optical connectivity and intelligent SD-WAN architectures.
                </p>
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  In alliance with Tier-1 carriers including Tata Teleservices and ACT Enterprise, we deploy dedicated last-mile optical fiber, enterprise SIP voice trunks, clean-pipe cybersecurity, and 24/7/365 active NOC surveillance across Pan-India commercial centers.
                </p>

                <div className="mt-2 flex flex-col gap-2.5 text-xs sm:text-sm text-zinc-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0" />
                    <span>99.999% Service Level Agreement (SLA) uptime guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0" />
                    <span>Direct alliances with Tata Teleservices (TTBS) &amp; ACT Enterprise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0" />
                    <span>24/7/365 Dual-Active Network Operations Centers with sub-4h MTTR</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-zinc-200/90 shadow-md">
                  <img
                    src="/banner-servers-lights.jpg"
                    alt="Fibre-connected server racks monitored by the Adapt India Network 24/7 operations centre"
                    className="w-full h-80 sm:h-96 object-cover object-center"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 text-white text-left">
                    <p className="text-xs font-mono text-[#E31E24] uppercase tracking-wider font-bold">
                      // 24/7 NETWORK OPERATIONS CENTER
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-200 mt-0.5">
                      Proactive telemetry, automated BGP failover, and carrier-grade optical ring monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. OUR PRINCIPLES */}
          <section className="w-full bg-[#fafafb] text-black py-14 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200/80">
            <div className="max-w-6xl mx-auto flex flex-col gap-10 text-left">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-1">
                    OUR CORE CAPABILITIES
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 font-display tracking-tight">
                    Engineered for High-Reliability Operations
                  </h2>
                </div>
                <p className="text-zinc-600 text-xs sm:text-sm font-medium max-w-sm">
                  Rigorous carrier engineering standards ensuring deterministic routing, absolute data privacy, and continuous uptime.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pillars.map((item) => (
                  <div
                    key={item.number}
                    className="bg-white border border-zinc-200/90 p-6 sm:p-8 rounded-2xl shadow-xs flex flex-col gap-3 text-left hover:border-zinc-400 transition-all"
                  >
                    <span className="text-xs font-mono font-bold text-white bg-[#E31E24] px-2.5 py-0.5 rounded-md self-start">
                      {item.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-zinc-950">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. NETWORK INFRASTRUCTURE HIGHLIGHTS */}
          <section className="w-full bg-white text-black py-14 sm:py-18 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-100">
            <div className="max-w-6xl mx-auto flex flex-col gap-8 text-left">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E31E24] block mb-1">
                  INFRASTRUCTURE PILLARS
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 font-display tracking-tight">
                  Carrier-Grade Architecture &amp; Facilities
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-2xs group bg-white">
                  <div className="h-48 bg-zinc-900 flex items-center justify-center p-6 text-white relative overflow-hidden">
                    <Network className="w-16 h-16 text-[#E31E24] group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-radial from-red-600/10 to-transparent pointer-events-none" />
                  </div>
                  <div className="p-5 text-left">
                    <p className="text-sm font-bold text-zinc-900">Dense Optical Fiber Backbone</p>
                    <p className="text-xs text-zinc-600 mt-1">Dual-homed fiber rings across 60+ major Indian commercial clusters with zero shared contention.</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-2xs group bg-white">
                  <div className="h-48 bg-zinc-900 flex items-center justify-center p-6 text-white relative overflow-hidden">
                    <Activity className="w-16 h-16 text-[#E31E24] group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-radial from-red-600/10 to-transparent pointer-events-none" />
                  </div>
                  <div className="p-5 text-left">
                    <p className="text-sm font-bold text-zinc-900">24/7/365 Dual-Active NOC</p>
                    <p className="text-xs text-zinc-600 mt-1">Real-time SNMP telemetry, continuous fiber attenuation monitoring, and dedicated L2/L3 engineers.</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-2xs group bg-white">
                  <div className="h-48 bg-zinc-900 flex items-center justify-center p-6 text-white relative overflow-hidden">
                    <ShieldCheck className="w-16 h-16 text-[#E31E24] group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-radial from-red-600/10 to-transparent pointer-events-none" />
                  </div>
                  <div className="p-5 text-left">
                    <p className="text-sm font-bold text-zinc-900">Edge Cybersecurity &amp; Clean Pipe</p>
                    <p className="text-xs text-zinc-600 mt-1">Upstream volumetric DDoS scrubbing, cloud firewall inspection, and encrypted SD-WAN transport.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. FAQS */}
          <section className="w-full bg-[#fafafb] text-black py-14 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-4xl mx-auto flex flex-col gap-10 text-left">
              <div className="flex flex-col items-start">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">
                  ENTERPRISE CONNECTIVITY FAQ
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 font-display tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                {faqs.map((faq, idx) => (
                  <div
                    key={faq.q}
                    className="border border-zinc-200/90 rounded-2xl overflow-hidden bg-white transition-all shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-5 hover:bg-zinc-50 flex items-center justify-between text-left font-bold text-zinc-900 text-sm sm:text-base cursor-pointer transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                          openFaq === idx ? "rotate-180 text-[#E31E24]" : ""
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. CTA BANNER */}
          <section className="w-full bg-[#E31E24] text-white py-14 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight uppercase">
                READY TO UPGRADE YOUR ENTERPRISE NETWORK?
              </h2>
              <p className="text-white/90 text-sm sm:text-base max-w-xl">
                Get carrier-grade connectivity backed by 99.999% SLA uptime and 24/7 NOC engineering support. Contact our enterprise telecom specialists today.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="bg-black text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-zinc-900 transition-all shadow-lg hover:scale-105"
                >
                  Request Feasibility Survey →
                </Link>
                <Link
                  href="/services"
                  className="bg-white text-zinc-900 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-zinc-100 transition-all shadow-sm"
                >
                  Explore All Network Solutions →
                </Link>
              </div>
            </div>
          </section>
        </main>

        <NewsletterSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
