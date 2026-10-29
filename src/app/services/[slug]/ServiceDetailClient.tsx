"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import NewsletterSection from "../../../components/NewsletterSection";
import Footer from "../../../components/Footer";
import { LanguageProvider } from "../../../context/LanguageContext";
import { ServiceDetail } from "../../../data/servicesData";

interface ServiceDetailClientProps {
  service: ServiceDetail;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    requirement: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Ensure at least 5 technical FAQs for every service
  const baseFaqs = service.faqs || [];
  const supplementaryFaqs = [
    {
      question: `What are the typical deployment timelines for ${service.name}?`,
      answer: "Standard provisioning takes 3 to 5 business days for on-net facilities with active building risers. For off-net or greenfield sites requiring fiber trenching and equipment mounting, deployment spans 7 to 12 business days, with temporary bonded cellular backup available immediately.",
    },
    {
      question: `What contractual SLA uptime backs ${service.name}?`,
      answer: "We commit to a contractual 99.999% network uptime backed by financial service credit penalties. Round-trip latency (<15ms metro, <45ms national) and zero packet loss guarantees are actively monitored 24/7/365 by our Level-3 NOC.",
    },
    {
      question: "Is 24/7/365 dedicated technical support included?",
      answer: "Yes. All enterprise clients receive a direct hotline and priority ticketing access to our Level-3 Network Operations Center (NOC). Mean Time to Respond (MTTR) is under 15 minutes, with field engineer dispatch within 4 hours.",
    },
    {
      question: "Can this solution integrate with our existing firewalls and routing equipment?",
      answer: "Yes. Our circuits and configurations are vendor-agnostic, supporting Cisco, Fortinet, Palo Alto, Juniper, and standard BGP-4 / OSPF routing protocols without requiring hardware replacements.",
    },
    {
      question: "What bandwidth scaling and billing options are available?",
      answer: "We support flexible 12, 24, and 36-month terms with quarterly or annual billing. Bandwidth can be scaled on-demand within 24 hours through our enterprise customer portal with zero downtime.",
    },
  ];

  const allFaqs = [
    ...baseFaqs,
    ...supplementaryFaqs.filter(
      (supp) => !baseFaqs.some((bf) => bf.question.toLowerCase().includes(supp.question.slice(0, 15).toLowerCase()))
    ),
  ].slice(0, Math.max(5, baseFaqs.length));

  // Dedicated Topic Images for Each Service
  const topicImages: Record<string, string> = {
    "smart-internet-ill": "/banner-datacenter-racks.jpg",
    "smartflo-sd-wan": "/services/sdwan_clean.jpg",
    "smartoffice-connect": "/wifi-banner.jpg",
    "managed-mpls": "/services/mpls_clean.jpg",
    "business-communications": "/services/whatsapp_marketing.jpg",
    "network-as-a-service": "/banner-global-telecom.jpg",
    "collaboration-productivity": "/resources/smart_city_grid.jpg",
    "cloud-infrastructure": "/resources/globe_connectivity_dc.jpg",
    "cybersecurity-solutions": "/services/cybersecurity.jpg",
    "managed-services": "/resources/network_engineer_ops.jpg",
    "bundled-solutions": "/services/enterprise_partnership.jpg",
    "point-to-point-leased-line": "/banner-servers-lights.jpg",
    "enterprise-broadband": "/services/broadband_clean.jpg",
  };

  const bannerImage = topicImages[service.slug] || service.image || "/banner-datacenter-racks.jpg";

  // Dedicated Quick Highlights for Each Service
  const quickHighlights: Record<string, Array<{ title: string; desc: string }>> = {
    "smart-internet-ill": [
      { title: "1:1 Dedicated Bandwidth", desc: "Zero contention ratio. You get 100% of the upload and download speed you pay for." },
      { title: "99.999% SLA Uptime", desc: "Contractually guaranteed network availability backed by financial service credits." },
      { title: "Dual Optical Fiber Ring", desc: "Sub-50ms automated optical failover with diverse last-mile physical entry." },
    ],
    "smartflo-sd-wan": [
      { title: "Multi-Link Traffic Steering", desc: "Automatically balances application traffic across fiber, MPLS, and 5G cellular." },
      { title: "Zero-Touch Deployment", desc: "Plug-and-play edge routers that auto-configure via cloud controller in 30 minutes." },
      { title: "Direct Cloud On-Ramps", desc: "Optimized low-latency routes directly to AWS, Microsoft 365, and Azure." },
    ],
    "smartoffice-connect": [
      { title: "All-in-One Gateway", desc: "High-speed internet, cloud PBX voice, Wi-Fi 6, and firewall in a single managed box." },
      { title: "Single Bill & SLA", desc: "One consolidated monthly invoice and one toll-free support number for all branch IT." },
      { title: "Zero Upfront Hardware Cost", desc: "Managed OPEX subscription with free hardware replacement and warranty." },
    ],
    "managed-mpls": [
      { title: "100% Private Network", desc: "Isolated closed-user group completely separated from the public internet." },
      { title: "Hardware-Enforced QoS", desc: "Guaranteed priority queuing for voice, video, and core banking transactions." },
      { title: "Pan-India Coverage", desc: "Direct optical presence connecting 100+ industrial and metro hubs nationwide." },
    ],
    "business-communications": [
      { title: "Scalable SIP Trunking", desc: "Handle from 10 to 1,500+ concurrent calls with crystal-clear HD voice quality." },
      { title: "Smartflo Cloud Call Center", desc: "Skill-based routing, automated dialers, and two-way CRM integration." },
      { title: "WhatsApp Business API", desc: "Verified corporate messaging for automated customer alerts and support." },
    ],
    "network-as-a-service": [
      { title: "On-Demand Bandwidth", desc: "Instantly burst network capacity for seasonal peaks without changing contracts." },
      { title: "Pure OPEX Model", desc: "Zero upfront capital investment with all router and fiber equipment managed." },
      { title: "Direct Cloud Peering", desc: "Private Layer-2/Layer-3 direct connects to AWS, Azure, and Google Cloud." },
    ],
    "collaboration-productivity": [
      { title: "Microsoft 365 & Copilot AI", desc: "Complete licensing, deployment, and security configuration for hybrid teams." },
      { title: "Zero Data-Loss Migration", desc: "Seamless mailbox, calendar, and contact migration from legacy servers." },
      { title: "Zero-Trust Identity", desc: "Multi-factor authentication (MFA) and conditional access for all remote workers." },
    ],
    "cloud-infrastructure": [
      { title: "Direct Cloud Connect", desc: "Private fiber ExpressRoute to Azure and AWS that slashes cloud egress costs." },
      { title: "Azure Virtual Desktop", desc: "Secure Windows 11 remote desktops accessible from anywhere without data leaks." },
      { title: "Disaster Recovery (DRaaS)", desc: "Sub-15 minute recovery time objective with automated offsite replication." },
    ],
    "cybersecurity-solutions": [
      { title: "2+ Tbps DDoS Scrubbing", desc: "Upstream carrier-level filtering that blocks volumetric attacks before your gateway." },
      { title: "Next-Gen Firewall (NGFW)", desc: "Deep packet inspection, intrusion prevention (IPS), and web content filtering." },
      { title: "24/7 Managed SOC", desc: "Certified security analysts monitoring and containing threats in under 15 minutes." },
    ],
    "managed-services": [
      { title: "24/7/365 NOC Surveillance", desc: "Continuous SNMP and NetFlow monitoring with automated incident detection." },
      { title: "Multi-Vendor Router Support", desc: "Full configuration and patching for Cisco, Juniper, and Fortinet hardware." },
      { title: "4-Hour On-Site MTTR", desc: "Local field technicians ready to dispatch across 100+ cities for physical faults." },
    ],
    "bundled-solutions": [
      { title: "Turnkey Branch Setup", desc: "Get new retail outlets or branch offices fully connected in 72 hours." },
      { title: "Dual Fiber + Cellular Failover", desc: "Ensures point-of-sale billing counters never go offline during fiber cuts." },
      { title: "Up to 35% Cost Savings", desc: "Bundling internet, voice, and security delivers significant monthly savings." },
    ],
    "point-to-point-leased-line": [
      { title: "Dedicated Layer-2 Channel", desc: "Transparent optical pipe between data centers with zero internet routing overhead." },
      { title: "Sub-5ms Metro Latency", desc: "Microsecond transit speed ideal for real-time SAN/NAS storage replication." },
      { title: "Jumbo Frame Support", desc: "Transfers up to 9,000 MTU frames with full line-rate throughput." },
    ],
    "enterprise-broadband": [
      { title: "Gigabit Business Speeds", desc: "Up to 1 Gbps fiber broadband with low contention and business-grade priority." },
      { title: "High-Density Wi-Fi 6", desc: "Commercial access points supporting 200+ concurrent active wireless devices." },
      { title: "Branded Guest Portal", desc: "Secure SMS OTP guest onboarding that isolates visitors from corporate computers." },
    ],
  };

  const highlights = quickHighlights[service.slug] || [
    { title: "99.999% SLA Uptime", desc: "Carrier-grade availability backed by financial service credits." },
    { title: "Dedicated Support", desc: "Direct hotline to certified L3 network engineers 24 hours a day." },
    { title: "Pan-India Fiber", desc: "Optical infrastructure connecting major industrial and metro centers." },
  ];

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white flex flex-col overflow-x-clip relative w-full text-gray-900 font-sans">
        
        {/* Floating Navbar */}
        <Navbar />

        {/* 1. HERO BANNER (Full-Bleed Photographic Background - Sleek & Compact) */}
        <section className="relative w-full text-white pt-28 sm:pt-32 lg:pt-36 pb-7 sm:pb-9 lg:pb-10 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
          
          {/* Full Background Image with Directional Dark Gradient */}
          <div className="absolute inset-0 z-0">
            <img
              src={bannerImage}
              alt={service.name}
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
                <Link
                  href="/services"
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-mono font-semibold text-zinc-300 hover:text-white uppercase tracking-wider transition-colors"
                >
                  <span>ALL SERVICES</span>
                </Link>
                <span className="hidden sm:inline-block text-zinc-500">/</span>
                <span className="px-3 py-0.5 rounded-full bg-black/60 border border-sky-500/40 text-[#38bdf8] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                  // {service.category}
                </span>
              </div>
            </div>
          </div>

          {/* Center Content: Title, Description & Scroll Down */}
          <div className="relative z-20 max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
              
              <div className="flex flex-col items-start text-left max-w-3xl">
                {/* Category Tagline */}
                <span className="font-mono text-[11px] sm:text-xs font-extrabold tracking-widest text-[#38bdf8] uppercase mb-1.5 block">
                  // {service.category} SOLUTIONS
                </span>

                {/* Display Title */}
                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white font-display tracking-tight uppercase leading-[1.08] mb-2.5 drop-shadow-md">
                  {service.name}
                </h1>

                <p className="text-zinc-200 text-xs sm:text-sm font-normal max-w-2xl leading-relaxed drop-shadow-sm mb-4">
                  {service.heroSubtitle}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="#contact-quote"
                    className="px-5 py-2 bg-[#E31E24] hover:bg-[#c9171d] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors shadow-sm"
                  >
                    Request a Quote →
                  </a>

                  <a
                    href="tel:+918287479961"
                    className="px-4 py-2 bg-black/50 hover:bg-black/75 text-white text-xs font-semibold rounded-md border border-white/20 backdrop-blur-sm transition-colors flex items-center gap-1.5"
                  >
                    <span>📞</span>
                    <span>Call: +91 82874 79961</span>
                  </a>
                </div>
              </div>

              {/* Right Side: Scroll Down Indicator */}
              <div className="hidden lg:flex items-center gap-2.5 text-zinc-300 font-mono text-[11px] font-bold uppercase tracking-wider select-none shrink-0 self-end">
                <span>SCROLL DOWN</span>
                <a
                  href="#overview"
                  className="w-8 h-8 rounded-full border border-white/30 bg-black/40 flex items-center justify-center text-[#38bdf8] hover:bg-black/70 hover:border-white transition-all animate-bounce"
                >
                  ↓
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* 2. 3 QUICK HIGHLIGHT CARDS (Clean, Simple, Light) */}
        <section className="w-full py-10 sm:py-14 px-4 sm:px-8 lg:px-14 bg-white border-b border-gray-100 text-left">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col gap-2 hover:border-gray-300 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-[#E31E24] flex items-center justify-center font-bold text-sm">
                    0{i + 1}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mt-1">{h.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. BESPOKE PAGE CONTENT: Tailored Distinctive Design per Service */}
        
        {/* A. If ILL: Connectivity & Leased Line Specs */}
        {service.slug === "smart-internet-ill" && (
          <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-14 bg-white border-b border-gray-200 text-left">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
              
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#E31E24]">How It Works</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Dedicated Fiber Architecture</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Dedicated 1:1 optical path directly from Adapt India core POP to your server room.</p>
              </div>

              {/* 3 Step Architecture Flow */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-blue-900 uppercase">STEP 1: CORE POP</span>
                  <h4 className="text-base font-bold text-gray-900">Dual Upstream Peering</h4>
                  <p className="text-xs text-gray-600">Interconnected with Tier-1 carriers and NIXI with automated BGP-4 routing.</p>
                </div>

                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">STEP 2: OPTICAL RING</span>
                  <h4 className="text-base font-bold text-gray-900">Redundant Last-Mile Fiber</h4>
                  <p className="text-xs text-gray-600">Dual diverse physical cable routes entering your building to prevent cuts.</p>
                </div>

                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-green-800 uppercase">STEP 3: SERVER ROOM</span>
                  <h4 className="text-base font-bold text-gray-900">SFP+ Optical Hand-off</h4>
                  <p className="text-xs text-gray-600">Single-mode optical fiber or RJ45 port ready for your firewall or router.</p>
                </div>
              </div>

              {/* Simple SLA Matrix Table */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Service Level Agreement (SLA) Standards</h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-gray-100 text-gray-700 font-semibold">
                      <tr>
                        <th className="py-3 px-4">Metric</th>
                        <th className="py-3 px-4">Adapt India Guarantee</th>
                        <th className="py-3 px-4">Standard Broadband</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-900">Uptime SLA</td>
                        <td className="py-3 px-4 font-bold text-green-700">99.999% Guaranteed</td>
                        <td className="py-3 px-4 text-gray-500">98% (No Guarantee)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-900">Bandwidth Ratio</td>
                        <td className="py-3 px-4 font-bold text-green-700">1:1 Symmetric (Equal Upload &amp; Download)</td>
                        <td className="py-3 px-4 text-gray-500">1:20 Shared Contention</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-900">Inter-City Latency</td>
                        <td className="py-3 px-4 font-bold text-green-700">&lt; 15 ms across Tier-1 Core</td>
                        <td className="py-3 px-4 text-gray-500">40 – 70 ms</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-900">Restoration Time (MTTR)</td>
                        <td className="py-3 px-4 font-bold text-green-700">&lt; 4 Hours on-site</td>
                        <td className="py-3 px-4 text-gray-500">24 – 48 Hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* B. If SD-WAN: Side-by-Side Comparison Architecture */}
        {service.slug === "smartflo-sd-wan" && (
          <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-14 bg-white border-b border-gray-200 text-left">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#E31E24]">Architecture Comparison</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Why Enterprises Switch from MPLS to SD-WAN</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Save up to 40% on WAN expenses while gaining sub-second multi-link failover.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Traditional WAN */}
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col gap-3">
                  <h4 className="text-base font-bold text-gray-700 pb-2 border-b border-gray-200">
                    Traditional Router WAN
                  </h4>
                  <ul className="flex flex-col gap-2.5 text-xs text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-red-500 font-bold">✕</span>
                      <span>Traffic takes 20-30 seconds to failover during an outage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500 font-bold">✕</span>
                      <span>Expensive dedicated MPLS lines with slow site turnarounds</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500 font-bold">✕</span>
                      <span>Cloud traffic is back-hauled through head office data centers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500 font-bold">✕</span>
                      <span>Manual CLI configuration required for every branch router</span>
                    </li>
                  </ul>
                </div>

                {/* Smartflo SD-WAN */}
                <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 flex flex-col gap-3">
                  <h4 className="text-base font-bold text-blue-900 pb-2 border-b border-blue-200">
                    Smartflo SD-WAN Advantage
                  </h4>
                  <ul className="flex flex-col gap-2.5 text-xs text-blue-950 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Sub-50ms packet failover preserves active Zoom &amp; VoIP calls</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Bonds Leased Line + Broadband + 5G for max reliability</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Direct secure internet breakout for Microsoft 365 &amp; AWS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Zero-touch provisioning: branch goes live in under 30 minutes</span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </section>
        )}

        {/* C. If SmartOffice: What's in the Box Layout */}
        {service.slug === "smartoffice-connect" && (
          <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-14 bg-white border-b border-gray-200 text-left">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#E31E24]">Complete Starter Kit</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">What&apos;s Included in SmartOffice® Connect</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">A single enterprise gateway supplying voice, data, Wi-Fi, and security.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xl">🌐</span>
                  <h4 className="text-sm font-bold text-gray-900">Dedicated Internet</h4>
                  <p className="text-xs text-gray-600">1:1 dedicated leased line bandwidth from 25 to 500 Mbps.</p>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xl">📞</span>
                  <h4 className="text-sm font-bold text-gray-900">Cloud PBX Voice</h4>
                  <p className="text-xs text-gray-600">Direct office phone extensions, multi-level IVR, and call recording.</p>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xl">📶</span>
                  <h4 className="text-sm font-bold text-gray-900">Enterprise Wi-Fi 6</h4>
                  <p className="text-xs text-gray-600">Dual-band 802.11ax access points with secure guest login.</p>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xl">🛡️</span>
                  <h4 className="text-sm font-bold text-gray-900">Built-in Firewall</h4>
                  <p className="text-xs text-gray-600">Web content filtering and automatic 4G cellular backup failover.</p>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* D. If Managed MPLS: Private Network Security */}
        {service.slug === "managed-mpls" && (
          <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-14 bg-white border-b border-gray-200 text-left">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#E31E24]">Bank-Grade Security</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Class of Service (CoS) Traffic Prioritization</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Hardware-enforced packet queues ensuring mission-critical ERP never stutters.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl border border-blue-200 bg-blue-50/50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-blue-800 uppercase">PRIORITY 1: REAL-TIME</span>
                  <h4 className="text-base font-bold text-gray-900">Voice &amp; Video Traffic</h4>
                  <p className="text-xs text-gray-600">Zero packet jitter and guaranteed bandwidth reservation for smooth conferencing.</p>
                </div>

                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-gray-700 uppercase">PRIORITY 2: CRITICAL</span>
                  <h4 className="text-base font-bold text-gray-900">Core Banking &amp; ERP</h4>
                  <p className="text-xs text-gray-600">Deterministic sub-millisecond priority for database synchronizations.</p>
                </div>

                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-gray-700 uppercase">PRIORITY 3: STANDARD</span>
                  <h4 className="text-base font-bold text-gray-900">General Web &amp; Email</h4>
                  <p className="text-xs text-gray-600">Best-effort throughput that never interferes with mission-critical applications.</p>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* E. If Business Communications: Omnichannel Voice */}
        {service.slug === "business-communications" && (
          <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-14 bg-white border-b border-gray-200 text-left">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#E31E24]">Omnichannel Channels</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Modern Enterprise Communications Suite</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Connect with customers on phone, WhatsApp, and SMS with CRM sync.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">SIP TRUNK</span>
                  <h4 className="text-sm font-bold text-gray-900">High-Capacity Channels</h4>
                  <p className="text-xs text-gray-600">10 to 1,500+ concurrent channels compatible with Teams, Asterisk, and Avaya.</p>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">CLOUD CCaaS</span>
                  <h4 className="text-sm font-bold text-gray-900">Smart Contact Center</h4>
                  <p className="text-xs text-gray-600">Intelligent IVR, predictive dialer, and live agent call monitoring.</p>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">WHATSAPP API</span>
                  <h4 className="text-sm font-bold text-gray-900">Verified Business Chat</h4>
                  <p className="text-xs text-gray-600">Automated order alerts, rich media buttons, and chatbot handoff.</p>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">1800 TOLL-FREE</span>
                  <h4 className="text-sm font-bold text-gray-900">National Vanity Numbers</h4>
                  <p className="text-xs text-gray-600">Single recognizable number accessible across all mobile and landline networks.</p>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* F. If Cybersecurity: 3-Layer Defense Architecture */}
        {service.slug === "cybersecurity-solutions" && (
          <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-14 bg-white border-b border-gray-200 text-left">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#E31E24]">Layered Security Architecture</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Multi-Tier Cyber Defense Stack</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Enterprise-grade protection blocking volumetric attacks before they reach your perimeter.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-red-50/50 border border-red-200 flex flex-col gap-3">
                  <span className="px-2.5 py-1 bg-[#E31E24] text-white text-[10px] font-bold uppercase rounded w-fit">Layer 1 • Upstream</span>
                  <h4 className="text-base font-bold text-gray-900">2+ Tbps DDoS Mitigation</h4>
                  <p className="text-xs text-gray-600">Cloud scrubbing centers absorb SYN floods, UDP amplification, and Layer-7 HTTP attacks before reaching your office gateway.</p>
                  <div className="text-[11px] font-semibold text-gray-700 pt-2 border-t border-red-200/60 mt-auto">
                    Scrubbing Time: &lt; 3 Seconds
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col gap-3">
                  <span className="px-2.5 py-1 bg-gray-800 text-white text-[10px] font-bold uppercase rounded w-fit">Layer 2 • Perimeter</span>
                  <h4 className="text-base font-bold text-gray-900">Next-Gen Firewall (NGFW)</h4>
                  <p className="text-xs text-gray-600">Fortinet &amp; Palo Alto appliances provide deep packet inspection, intrusion prevention (IPS), and SSL traffic decryption.</p>
                  <div className="text-[11px] font-semibold text-gray-700 pt-2 border-t border-gray-200 mt-auto">
                    Inspection: Full Line-Rate
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col gap-3">
                  <span className="px-2.5 py-1 bg-blue-700 text-white text-[10px] font-bold uppercase rounded w-fit">Layer 3 • Human Ops</span>
                  <h4 className="text-base font-bold text-gray-900">24/7 Managed SOC</h4>
                  <p className="text-xs text-gray-600">Certified security analysts monitor SIEM logs round the clock with automated containment playbooks for ransomware and breaches.</p>
                  <div className="text-[11px] font-semibold text-gray-700 pt-2 border-t border-gray-200 mt-auto">
                    Response SLA: &lt; 15 Minutes
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* G. If Cloud Infrastructure: Multi-Cloud Direct Connect Topology */}
        {service.slug === "cloud-infrastructure" && (
          <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-14 bg-white border-b border-gray-200 text-left">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#E31E24]">Cloud Interconnect Matrix</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Dedicated Multi-Cloud On-Ramps</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Direct Layer-2/Layer-3 fiber connections that bypass the unpredictable public internet.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-amber-600 uppercase">AWS DIRECT CONNECT</span>
                  <h4 className="text-sm font-bold text-gray-900">Sub-5ms to AWS Mumbai</h4>
                  <p className="text-xs text-gray-600">Direct dedicated links up to 10 Gbps with 60% lower data transfer egress fees.</p>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase">AZURE EXPRESSROUTE</span>
                  <h4 className="text-sm font-bold text-gray-900">Private Microsoft Peering</h4>
                  <p className="text-xs text-gray-600">Enterprise SLA connection for Microsoft 365, Azure VMs, and Virtual Desktops.</p>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-red-600 uppercase">GOOGLE CLOUD</span>
                  <h4 className="text-sm font-bold text-gray-900">Dedicated Interconnect</h4>
                  <p className="text-xs text-gray-600">Reliable low-jitter paths directly to Google Cloud Delhi and Mumbai regions.</p>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">HYBRID DRaaS</span>
                  <h4 className="text-sm font-bold text-gray-900">Disaster Recovery</h4>
                  <p className="text-xs text-gray-600">Sub-15 minute RTO/RPO with continuous snapshot replication across dual sites.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* H. If Managed Services (NOC): 4-Stage Incident Resolution Workflow */}
        {service.slug === "managed-services" && (
          <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-14 bg-white border-b border-gray-200 text-left">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#E31E24]">NOC Operations Protocol</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">4-Stage Incident Management Workflow</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">How our 24/7 Network Operations Center detects and fixes faults before your users notice.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24]">01. TELEMETRY</span>
                  <h4 className="text-sm font-bold text-gray-900">Automated Detection</h4>
                  <p className="text-xs text-gray-600">SNMP polling and ICMP probes identify link degradation within 10 seconds.</p>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24]">02. TRIAGE</span>
                  <h4 className="text-sm font-bold text-gray-900">5-Min L1 Escalation</h4>
                  <p className="text-xs text-gray-600">Certified L1 engineer verifies link status, issues ticket, and notifies your team.</p>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24]">03. REMEDIATION</span>
                  <h4 className="text-sm font-bold text-gray-900">L2/L3 Remote Reroute</h4>
                  <p className="text-xs text-gray-600">BGP path manipulation and remote router reconfiguration to restore services.</p>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24]">04. ON-SITE</span>
                  <h4 className="text-sm font-bold text-gray-900">4-Hour Physical MTTR</h4>
                  <p className="text-xs text-gray-600">Splicing van and field team dispatched with OTDR meters for physical cable cuts.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* I. If Enterprise Broadband: Plan & Tier Comparison */}
        {service.slug === "enterprise-broadband" && (
          <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-14 bg-white border-b border-gray-200 text-left">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#E31E24]">Speed &amp; Capacity Options</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Enterprise Broadband Tiers</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">High-speed business fiber designed for small offices, retail outlets, and branch sites.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl border border-gray-200 bg-gray-50 flex flex-col gap-3">
                  <span className="text-xs font-mono font-bold text-gray-500 uppercase">TIER 1 • SME</span>
                  <h3 className="text-2xl font-black text-gray-900">200 Mbps</h3>
                  <p className="text-xs text-gray-600">Ideal for up to 25 users. Equal upload and download speed with zero throttling.</p>
                  <ul className="text-xs text-gray-700 flex flex-col gap-1.5 pt-3 border-t border-gray-200 mt-auto">
                    <li>✓ 1 Static IPv4 Address</li>
                    <li>✓ Wi-Fi 6 Router Included</li>
                    <li>✓ 99.5% Uptime Commitment</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl border-2 border-[#E31E24] bg-white shadow-sm flex flex-col gap-3 relative">
                  <span className="absolute -top-3 right-6 px-3 py-0.5 bg-[#E31E24] text-white text-[10px] font-bold uppercase rounded-full">POPULAR</span>
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">TIER 2 • BUSINESS</span>
                  <h3 className="text-2xl font-black text-gray-900">500 Mbps</h3>
                  <p className="text-xs text-gray-600">For mid-size offices with 25-75 users conducting daily video calls and CRM transfers.</p>
                  <ul className="text-xs text-gray-700 flex flex-col gap-1.5 pt-3 border-t border-gray-200 mt-auto">
                    <li>✓ 2 Static IPv4 Addresses</li>
                    <li>✓ Dual-Band Managed Wi-Fi</li>
                    <li>✓ 8-Hour On-Site Resolution</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl border border-gray-200 bg-gray-50 flex flex-col gap-3">
                  <span className="text-xs font-mono font-bold text-gray-500 uppercase">TIER 3 • ENTERPRISE</span>
                  <h3 className="text-2xl font-black text-gray-900">1,000 Mbps</h3>
                  <p className="text-xs text-gray-600">Full Gigabit throughput for high-demand creative studios and branch headquarters.</p>
                  <ul className="text-xs text-gray-700 flex flex-col gap-1.5 pt-3 border-t border-gray-200 mt-auto">
                    <li>✓ /29 Subnet (5 Usable IPs)</li>
                    <li>✓ Priority NOC Routing</li>
                    <li>✓ 4-Hour On-Site Resolution</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* J. If Point-to-Point (P2P): Layer-2 Optical Specifications */}
        {service.slug === "point-to-point-leased-line" && (
          <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-14 bg-white border-b border-gray-200 text-left">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#E31E24]">Layer-2 Physical Specifications</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Dedicated Point-to-Point Transport</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Direct unshared optical connectivity between two client locations with zero internet routing.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24]">DARK FIBER</span>
                  <h4 className="text-base font-bold text-gray-900">Unlit Fiber Strands</h4>
                  <p className="text-xs text-gray-600">Dedicated physical glass strands. You control the optical transceivers and protocols with unlimited bandwidth potential.</p>
                </div>

                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24]">DWDM WAVELENGTH</span>
                  <h4 className="text-base font-bold text-gray-900">10G to 100G Wavelengths</h4>
                  <p className="text-xs text-gray-600">Managed optical wavelengths across our core DWDM ring for inter-datacenter replication and backup.</p>
                </div>

                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24]">METRO ETHERNET</span>
                  <h4 className="text-base font-bold text-gray-900">Carrier Ethernet 2.0</h4>
                  <p className="text-xs text-gray-600">E-Line (Point-to-Point) and E-LAN (Multipoint) services with hardware VLAN segregation and jumbo frames.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* K. If Collaboration & Productivity: Hybrid Suite */}
        {service.slug === "collaboration-productivity" && (
          <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-14 bg-white border-b border-gray-200 text-left">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#E31E24]">Hybrid Workplace Suite</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Enterprise Productivity &amp; Security</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Managed Microsoft 365, secure cloud identity, and unified calling for modern teams.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-blue-600">MICROSOFT 365</span>
                  <h4 className="text-sm font-bold text-gray-900">Business &amp; Enterprise</h4>
                  <p className="text-xs text-gray-600">Exchange, SharePoint, OneDrive, and Office apps deployed with volume licensing.</p>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24]">TEAMS CALLING</span>
                  <h4 className="text-sm font-bold text-gray-900">Direct Routing SIP</h4>
                  <p className="text-xs text-gray-600">Make and receive external phone calls directly inside Microsoft Teams using our SIP trunk.</p>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-green-600">IDENTITY &amp; MFA</span>
                  <h4 className="text-sm font-bold text-gray-900">Zero-Trust Access</h4>
                  <p className="text-xs text-gray-600">Single Sign-On (SSO), conditional access, and passwordless authentication.</p>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-purple-600">DEVICE SECURITY</span>
                  <h4 className="text-sm font-bold text-gray-900">Intune MDM</h4>
                  <p className="text-xs text-gray-600">Remote wipe, compliance policies, and automated app deployment for company laptops.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* L. If Network as a Service (NaaS) */}
        {service.slug === "network-as-a-service" && (
          <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-14 bg-white border-b border-gray-200 text-left">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#E31E24]">Elastic Infrastructure</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Network as a Service (NaaS) Benefits</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Consume enterprise routing, switching, and bandwidth on a flexible monthly subscription.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24]">01. ZERO HARDWARE CAPEX</span>
                  <h4 className="text-base font-bold text-gray-900">All Equipment Managed</h4>
                  <p className="text-xs text-gray-600">Routers, optical switches, and firewalls provided, maintained, and refreshed under a single service fee.</p>
                </div>

                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24]">02. ON-DEMAND BURSTING</span>
                  <h4 className="text-base font-bold text-gray-900">Elastic Bandwidth</h4>
                  <p className="text-xs text-gray-600">Double or quadruple bandwidth for seasonal sales or heavy data transfers with a simple portal request.</p>
                </div>

                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24]">03. UNIFIED SLA</span>
                  <h4 className="text-base font-bold text-gray-900">Single Accountability</h4>
                  <p className="text-xs text-gray-600">No finger-pointing between hardware makers and telecom carriers. One team handles everything end-to-end.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* M. If Bundled Solutions: Integrated Multi-Product Savings */}
        {service.slug === "bundled-solutions" && (
          <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-14 bg-white border-b border-gray-200 text-left">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#E31E24]">Consolidated Packaging</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Branch-in-a-Box Packages</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Combine high-speed fiber, voice, and security for up to 35% lower monthly telecom costs.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl border border-gray-200 bg-gray-50 flex flex-col gap-3">
                  <span className="text-xs font-mono font-bold text-gray-500 uppercase">RETAIL STORE BUNDLE</span>
                  <h4 className="text-lg font-bold text-gray-900">Retail &amp; POS Connectivity</h4>
                  <p className="text-xs text-gray-600">Fiber broadband + automatic 4G backup router + guest Wi-Fi portal so checkout registers never freeze.</p>
                  <div className="text-xs font-bold text-[#E31E24] pt-2 border-t border-gray-200 mt-auto">Save 25% vs Separate Purchasing</div>
                </div>

                <div className="p-6 rounded-2xl border-2 border-[#E31E24] bg-white shadow-sm flex flex-col gap-3 relative">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">BRANCH OFFICE BUNDLE</span>
                  <h4 className="text-lg font-bold text-gray-900">Office Pro Connect</h4>
                  <p className="text-xs text-gray-600">Dedicated Internet Leased Line (ILL) + Cloud PBX with 20 extensions + managed next-gen firewall.</p>
                  <div className="text-xs font-bold text-[#E31E24] pt-2 border-t border-gray-200 mt-auto">Save 35% with 1 Consolidated Invoice</div>
                </div>

                <div className="p-6 rounded-2xl border border-gray-200 bg-gray-50 flex flex-col gap-3">
                  <span className="text-xs font-mono font-bold text-gray-500 uppercase">ENTERPRISE HQ BUNDLE</span>
                  <h4 className="text-lg font-bold text-gray-900">Dual Core Redundancy</h4>
                  <p className="text-xs text-gray-600">Dual 1 Gbps fiber lines via different paths + 100-channel SIP trunk + 24/7 dedicated SOC monitoring.</p>
                  <div className="text-xs font-bold text-[#E31E24] pt-2 border-t border-gray-200 mt-auto">Dedicated Enterprise Account Manager</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 4. TECHNICAL FAQ (Interactive Accordion - Collapsed by default, At least 5 FAQs) */}
        {allFaqs.length > 0 && (
          <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-14 bg-[#f8f9fa] border-b border-gray-200 text-left">
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
              
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#E31E24] tracking-wider">
                  // COMMON INQUIRIES &amp; ARCHITECTURE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                  Frequently Asked Questions
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Click any question to view technical specifications, SLA guarantees, and deployment timelines.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {allFaqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`rounded-xl border transition-all duration-200 bg-white overflow-hidden shadow-2xs ${
                        isOpen ? "border-[#E31E24]/60 shadow-sm" : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors hover:bg-gray-50/60"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold text-[#E31E24] shrink-0">
                            0{idx + 1}.
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                            {faq.question}
                          </h4>
                        </div>
                        <span
                          className={`w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180 bg-red-50 text-[#E31E24]" : "text-gray-500"
                          }`}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-5 pt-1 sm:px-5 sm:pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#fafafa]/50 animate-in fade-in-50 duration-150">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </section>
        )}

        {/* Global Strategy Call & Feasibility Section (RetailMark Offset Card in Brand Logo Red) */}
        <NewsletterSection
          title={`Request Feasibility & Proposal for ${service.name}`}
          subtitle="Our enterprise telecom engineers will verify last-mile fiber availability, cross-connect routing, and provide tailored SLA tariff proposals within 2 hours."
          buttonText="Request Verified Feasibility"
        />

        {/* Global Footer */}
        <Footer />

      </div>
    </LanguageProvider>
  );
}
