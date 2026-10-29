"use client";

import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import NewsletterSection from "../../../components/NewsletterSection";
import Footer from "../../../components/Footer";
import { LanguageProvider } from "../../../context/LanguageContext";
import Link from "next/link";
import { Network, ShieldCheck, Activity, PhoneCall, Layers, Server } from "lucide-react";

export default function WhatWeDoPage() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "connectivity" | "sdwan-vpn" | "voice-cloud" | "security-noc"
  >("all");

  const capabilities = [
    {
      category: "connectivity",
      categoryLabel: "Connectivity",
      title: "Smart Internet (ILL)",
      desc: "1:1 dedicated, uncompressed symmetrical bandwidth with dual-path optical fiber rings, sub-15ms latency, and 99.999% SLA uptime.",
      href: "/services/smart-internet-ill",
      tags: ["1:1 Dedicated", "Dual-Ring Fiber", "Sub-15ms Latency", "99.999% SLA"],
    },
    {
      category: "connectivity",
      categoryLabel: "Connectivity",
      title: "Point-to-Point (P2P) Leased Line",
      desc: "Ultra-secure Layer-2 private data circuits connecting enterprise branches, headquarters, and colocation facilities with deterministic throughput.",
      href: "/services/point-to-point-leased-line",
      tags: ["Layer-2 Private", "Zero Jitter", "Direct Cross-Connect", "Deterministic Speed"],
    },
    {
      category: "connectivity",
      categoryLabel: "Connectivity",
      title: "Enterprise Broadband & Campus Wi-Fi",
      desc: "High-density managed Wi-Fi 6 infrastructure and resilient business broadband engineered for commercial offices and university campuses.",
      href: "/services/enterprise-broadband-campus-wifi",
      tags: ["Managed Wi-Fi 6", "High-Density APs", "Captive Portal", "Bandwidth Shaper"],
    },
    {
      category: "sdwan-vpn",
      categoryLabel: "SD-WAN & VPN",
      title: "Smartflo SD-WAN Solutions",
      desc: "Next-Gen Software-Defined WAN with dynamic application-aware path selection, centralized cloud orchestrator, and zero-touch provisioning.",
      href: "/services/smartflo-sd-wan",
      tags: ["App-Aware Routing", "Zero-Touch CPE", "Sub-50ms Failover", "Cloud Console"],
    },
    {
      category: "sdwan-vpn",
      categoryLabel: "SD-WAN & VPN",
      title: "Managed MPLS VPN Networks",
      desc: "Carrier-grade private IP-VPN backbones with guaranteed Quality of Service (QoS), multi-site mesh routing, and end-to-end traffic isolation.",
      href: "/services/managed-mpls-vpn",
      tags: ["QoS Traffic Classes", "Any-to-Any Mesh", "Full BGP Isolation", "Tata / ACT Backbone"],
    },
    {
      category: "sdwan-vpn",
      categoryLabel: "SD-WAN & VPN",
      title: "SmartOffice® Connect",
      desc: "All-in-one converged ICT solution combining high-speed Internet, enterprise voice lines, secure Wi-Fi, and firewall into one managed box.",
      href: "/services/smartoffice-connect",
      tags: ["All-in-One ICT", "Plug-and-Play", "Single Billing", "Branch in a Box"],
    },
    {
      category: "voice-cloud",
      categoryLabel: "Voice & Cloud",
      title: "Business Communications & SIP Trunk",
      desc: "Scalable enterprise voice trunking over dedicated IP channels supporting unlimited concurrent calling, 1800 toll-free, and high-clarity codecs.",
      href: "/services/business-communications-sip-trunk",
      tags: ["PRI / SIP Replacement", "Unlimited Channels", "Toll-Free 1800", "G.711 / HD Audio"],
    },
    {
      category: "voice-cloud",
      categoryLabel: "Voice & Cloud",
      title: "Collaboration & Modern Workplace",
      desc: "Unified cloud telephony, MS Teams direct routing, enterprise video conferencing, and hybrid workforce collaboration tools.",
      href: "/services/collaboration-modern-workplace",
      tags: ["MS Teams Direct Routing", "Cloud PBX", "Omnichannel Comms", "Hybrid Workplace"],
    },
    {
      category: "voice-cloud",
      categoryLabel: "Voice & Cloud",
      title: "Enterprise Cloud Infrastructure",
      desc: "Direct private Cloud Interconnect to AWS, Microsoft Azure, and Google Cloud with sub-5ms low latency and zero public internet exposure.",
      href: "/services/enterprise-cloud-infrastructure",
      tags: ["AWS Direct Connect", "Azure ExpressRoute", "Direct Cloud Peering", "Sub-5ms Latency"],
    },
    {
      category: "security-noc",
      categoryLabel: "Security & NOC",
      title: "Cybersecurity & Managed SOC",
      desc: "Next-Gen Firewall as a Service (FWaaS), clean-pipe volumetric DDoS scrubbing, intrusion prevention, and 24/7 security event monitoring.",
      href: "/services/cybersecurity-solutions-managed-soc",
      tags: ["Clean-Pipe DDoS", "Next-Gen FWaaS", "Threat Intelligence", "24/7 SOC Triage"],
    },
    {
      category: "security-noc",
      categoryLabel: "Security & NOC",
      title: "24/7/365 Managed NOC Operations",
      desc: "Dual-active Network Operations Centers in Gurugram and Mumbai providing continuous SNMP surveillance, proactive ticketing, and sub-4h MTTR.",
      href: "/services/managed-noc-operations",
      tags: ["Dual-Active NOC", "SNMP Telemetry", "Sub-4h MTTR", "Certified L2/L3 Staff"],
    },
    {
      category: "security-noc",
      categoryLabel: "Security & NOC",
      title: "Network as a Service (NaaS)",
      desc: "Fully managed, OPEX-based enterprise networking including switches, routers, security gateways, and continuous lifecycle maintenance.",
      href: "/services/network-as-a-service-naas",
      tags: ["Zero CAPEX", "Full Hardware Lifecycle", "SLA-Backed Replacements", "Unified SLA"],
    },
    {
      category: "connectivity",
      categoryLabel: "Connectivity",
      title: "Bundled Enterprise Telecom Solutions",
      desc: "Custom multi-product enterprise telecommunications packages designed for multi-branch retailers, BFSI branches, and healthcare chains.",
      href: "/services/bundled-enterprise-telecom-solutions",
      tags: ["Multi-Site Bundles", "Consolidated Billing", "Dedicated Account NOC", "Tier-1 Pricing"],
    },
  ];

  const filtered =
    activeCategory === "all"
      ? capabilities
      : capabilities.filter((c) => c.category === activeCategory);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip relative w-full select-none">
        <Navbar />

        <main className="flex-1 w-full">
          {/* 1. HERO BANNER (Standard Banner Size Matching Other Pages) */}
          <section className="relative w-full text-white pt-28 sm:pt-32 lg:pt-36 pb-7 sm:pb-9 lg:pb-10 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
            <div className="absolute inset-0 z-0">
              <img
                src="/banner-what-we-do.jpg"
                alt="What We Do - Adapt India Network"
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
                    // WHAT WE DO
                  </span>
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="relative z-20 max-w-7xl mx-auto w-full">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
                <div className="flex flex-col items-start text-left max-w-3xl">
                  <span className="font-mono text-xs font-extrabold tracking-widest text-[#E31E24] uppercase mb-1.5 block">
                    // ENTERPRISE TELECOM CAPABILITIES
                  </span>

                  <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white font-display tracking-tight uppercase leading-[1.1] mb-2 drop-shadow-md">
                    WHAT WE DO
                  </h1>

                  <p className="text-zinc-200 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm mb-4">
                    Carrier-grade connectivity, software-defined WAN fabrics, cloud communications, and proactive 24/7 NOC surveillance engineered for zero downtime.
                  </p>
                </div>

                <div className="hidden lg:flex items-center gap-3 text-zinc-300 font-mono text-xs font-bold uppercase tracking-wider select-none shrink-0 self-end">
                  <span>SCROLL DOWN</span>
                  <span className="w-8 h-8 rounded-full border border-white/30 bg-black/40 flex items-center justify-center text-[#E31E24] animate-bounce">
                    ↓
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 2. SERVICES DIRECTORY & CATEGORY FILTER */}
          <section className="w-full bg-white text-black py-14 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-6">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E31E24] block mb-1">
                    ENTERPRISE PORTFOLIO
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 font-display tracking-tight">
                    Network Solutions &amp; Infrastructure ({filtered.length})
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-2 bg-zinc-100 p-1.5 rounded-2xl border border-zinc-200/80">
                  <button
                    type="button"
                    onClick={() => setActiveCategory("all")}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeCategory === "all"
                        ? "bg-[#E31E24] text-white shadow-sm"
                        : "text-zinc-600 hover:text-black hover:bg-white/60"
                    }`}
                  >
                    All Solutions
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory("connectivity")}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeCategory === "connectivity"
                        ? "bg-[#E31E24] text-white shadow-sm"
                        : "text-zinc-600 hover:text-black hover:bg-white/60"
                    }`}
                  >
                    Fiber &amp; Leased Line
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory("sdwan-vpn")}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeCategory === "sdwan-vpn"
                        ? "bg-[#E31E24] text-white shadow-sm"
                        : "text-zinc-600 hover:text-black hover:bg-white/60"
                    }`}
                  >
                    SD-WAN &amp; MPLS
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory("voice-cloud")}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeCategory === "voice-cloud"
                        ? "bg-[#E31E24] text-white shadow-sm"
                        : "text-zinc-600 hover:text-black hover:bg-white/60"
                    }`}
                  >
                    SIP Trunk &amp; Cloud
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory("security-noc")}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeCategory === "security-noc"
                        ? "bg-[#E31E24] text-white shadow-sm"
                        : "text-zinc-600 hover:text-black hover:bg-white/60"
                    }`}
                  >
                    Cybersecurity &amp; NOC
                  </button>
                </div>
              </div>

              {/* Grid of Capabilities */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
                {filtered.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="bg-[#fafafb] border border-zinc-200/90 p-7 rounded-3xl hover:border-zinc-400 hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between gap-6 group cursor-pointer"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400">
                          {item.categoryLabel}
                        </span>
                        <span className="text-zinc-400 group-hover:text-[#E31E24] group-hover:translate-x-1 transition-all">
                          →
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-zinc-900 font-display group-hover:text-black transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-200/70">
                      {item.tags.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md bg-zinc-200/70 text-zinc-700 font-mono text-[10px] font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* 3. CALL TO ACTION */}
          <section className="w-full bg-zinc-950 text-white py-14 sm:py-18 px-4 sm:px-8 lg:px-14 xl:px-20">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
              <span className="font-mono text-xs font-extrabold tracking-widest text-[#E31E24] uppercase">
                // ENTERPRISE CONNECTIVITY
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight uppercase">
                READY TO CONNECT YOUR BUSINESS INFRASTRUCTURE?
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base max-w-xl">
                Our telecom architects will conduct an on-site feasibility survey and configure carrier-backed 99.999% SLA connectivity for your enterprise.
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
                  Browse Full Catalog ({capabilities.length}) →
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
