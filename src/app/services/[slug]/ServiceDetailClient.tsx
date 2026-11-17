"use client";

import { SERVICE_SEO_IMAGES } from "../../../data/serviceSeoImages";
import QuickQuoteForm from "../../../components/QuickQuoteForm";
import UpgradeCTA from "@/components/UpgradeCTA";
import ServiceGuideSection from "@/components/ServiceGuideSection";
import { serviceGuides } from "@/data/serviceGuides";
import ServiceChoosingSection from "@/components/ServiceChoosingSection";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { LanguageProvider } from "../../../context/LanguageContext";
import { ServiceDetail } from "../../../data/servicesData";
import { areaPages } from "../../../data/areaPages";

interface ServiceDetailClientProps {
  service: ServiceDetail;
  /** City landing pages to link to (helps Google find and rank both page types). */
  cities?: Array<{ slug: string; city: string }>;
  /** Page H1 when it should differ from the service name (matches how people search). */
  heading?: string;
  /** Plain search phrase for the service, used in "in your city" and CTA headings. */
  keyword?: string;
}

export default function ServiceDetailClient({ service, cities = [], heading, keyword }: ServiceDetailClientProps) {
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
      question: `How long does it take to set up ${service.name}?`,
      answer: "It depends mainly on whether the carrier's fibre already reaches your building. We check feasibility at your exact address first and give you the expected timeline before you sign. Where a new fibre run or building approval is needed, a 4G/5G link can keep you running in the meantime.",
    },
    {
      question: `What uptime SLA comes with ${service.name}?`,
      answer: "Dedicated connectivity comes with a 99.5% uptime commitment in writing. The repair-time terms and service credits follow the carrier's SLA, and we share the full terms with you before you sign.",
    },
    {
      question: "Is 24/7 support included?",
      answer: "Yes. You report a fault to our team any time, and we log it with the carrier, chase it until it's fixed and keep you updated, so you don't have to deal with the carrier's call centre yourself.",
    },
    {
      question: "Will it work with our existing firewall and router?",
      answer: "Usually, yes. Connections are handed over on standard ports and work with common firewalls and routers. We check your current equipment during the survey and tell you if anything needs changing.",
    },
    {
      question: "Can we upgrade the speed later?",
      answer: "Yes. In most cases the speed can be increased on the same line without new cabling. Contract terms and any upgrade lead time are agreed with you upfront.",
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

  const seoImage = SERVICE_SEO_IMAGES[service.slug];
  const bannerImage = seoImage?.src || topicImages[service.slug] || service.image || "/banner-datacenter-racks.jpg";

  // Dedicated Quick Highlights for Each Service
  const quickHighlights: Record<string, Array<{ title: string; desc: string }>> = {
    "smart-internet-ill": [
      { title: "Dedicated Bandwidth", desc: "The speed you take is yours alone, the same for upload and download." },
      { title: "99.5% Uptime SLA", desc: "Availability committed in writing, with static public IPs included." },
      { title: "Backup Line Option", desc: "Add a second line from a different carrier with automatic failover." },
    ],
    "smartflo-sd-wan": [
      { title: "Multi-Link Traffic Steering", desc: "Automatically balances application traffic across fiber, MPLS, and 5G cellular." },
      { title: "Quick Branch Setup", desc: "Devices are configured from the cloud, so new branches go live without on-site engineers." },
      { title: "Direct Cloud Access", desc: "Trusted cloud traffic like Microsoft 365 goes straight out from each branch." },
    ],
    "smartoffice-connect": [
      { title: "All-in-One Gateway", desc: "High-speed internet, cloud PBX voice, Wi-Fi 6, and firewall in a single managed box." },
      { title: "Single Bill & SLA", desc: "One consolidated monthly invoice and one toll-free support number for all branch IT." },
      { title: "Zero Upfront Hardware Cost", desc: "Managed OPEX subscription with free hardware replacement and warranty." },
    ],
    "managed-mpls": [
      { title: "100% Private Network", desc: "Isolated closed-user group completely separated from the public internet." },
      { title: "Hardware-Enforced QoS", desc: "Guaranteed priority queuing for voice, video, and core banking transactions." },
      { title: "Pan-India Sites", desc: "Branches, plants and data centres across India on one private network." },
    ],
    "business-communications": [
      { title: "Scalable SIP Trunking", desc: "Add or reduce call channels as your team changes, without new cabling." },
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
      { title: "Business Fibre Broadband", desc: "Fibre broadband plans for offices, shops and branches." },
      { title: "Planned Wi-Fi 6", desc: "Business access points placed for your floor plan and number of users." },
      { title: "Branded Guest Portal", desc: "Secure SMS OTP guest onboarding that isolates visitors from corporate computers." },
    ],
  };

  const highlights = quickHighlights[service.slug] || [
    { title: "99.5% SLA Uptime", desc: "Carrier-grade availability backed by financial service credits." },
    { title: "24/7 Support", desc: "Faults logged and chased with the carrier by our team." },
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
              alt={seoImage?.alt ?? service.name}
              fetchPriority="high"
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
                  {heading ?? service.name}
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

        {/* 2b. PLAIN-LANGUAGE GUIDE (different layout per service) */}
        {serviceGuides[service.slug] && (
          <ServiceGuideSection guide={serviceGuides[service.slug]} serviceName={service.name} />
        )}
        {serviceGuides[service.slug]?.choosing && (
          <ServiceChoosingSection choosing={serviceGuides[service.slug].choosing!} />
        )}

        <QuickQuoteForm
          service={keyword ?? service.name}
          heading={`Get a free ${keyword ? keyword.toLowerCase() : service.name} quote`}
        />

        {/* 3. BESPOKE PAGE CONTENT: Tailored Distinctive Design per Service */}
        
        {/* A. If ILL: Connectivity & Leased Line Specs */}
        {service.slug === "smart-internet-ill" && (
          <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-14 bg-white border-b border-gray-200 text-left">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#E31E24]">How it works</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">How an internet leased line reaches your office</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">A dedicated fibre connection from the carrier's network to your server room or rack.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">Step 1: Feasibility</span>
                  <h3 className="text-base font-bold text-gray-900">Check the building</h3>
                  <p className="text-sm text-gray-600">We find out which carriers (Tata Tele Business Services or ACT Fibernet) already have fibre in your building, or how far a new fibre run has to go.</p>
                </div>
                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">Step 2: Last mile</span>
                  <h3 className="text-base font-bold text-gray-900">Fibre to your floor</h3>
                  <p className="text-sm text-gray-600">The carrier brings fibre into your building and up to your office, with building approval where it's needed.</p>
                </div>
                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">Step 3: Handover</span>
                  <h3 className="text-base font-bold text-gray-900">Ready for your firewall</h3>
                  <p className="text-sm text-gray-600">The line is handed over on a router or fibre/copper port, with your static IPs configured and the speed tested before sign-off.</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">What leased line speed does your office need?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  A rough starting point for offices using cloud apps and video calls. Heavy uploads, CCTV, servers or a call centre need more.
                  We size it properly during the survey, and the speed can usually be raised later on the same line.
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    ["Up to 15 people", "20 to 50 Mbps"],
                    ["15 to 50 people", "50 to 100 Mbps"],
                    ["50 to 150 people", "100 to 300 Mbps"],
                    ["150+ people or heavy uploads", "300 Mbps to 1 Gbps"],
                  ].map(([who, speed]) => (
                    <div key={who} className="rounded-lg border border-gray-200 bg-white p-4">
                      <p className="text-xs text-gray-500">{who}</p>
                      <p className="text-base font-bold text-gray-900">{speed}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Internet leased line vs business broadband</h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-gray-100 text-gray-700 font-semibold">
                      <tr>
                        <th className="py-3 px-4"> </th>
                        <th className="py-3 px-4">Internet leased line</th>
                        <th className="py-3 px-4">Business broadband</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-900">Bandwidth</td>
                        <td className="py-3 px-4 font-bold text-green-700">Dedicated to you, not shared</td>
                        <td className="py-3 px-4 text-gray-500">Shared with other users nearby</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-900">Upload speed</td>
                        <td className="py-3 px-4 font-bold text-green-700">Same as download</td>
                        <td className="py-3 px-4 text-gray-500">Often lower than download</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-900">Uptime commitment</td>
                        <td className="py-3 px-4 font-bold text-green-700">99.5% SLA in writing</td>
                        <td className="py-3 px-4 text-gray-500">Usually best effort</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-900">Static public IPs</td>
                        <td className="py-3 px-4 font-bold text-green-700">Included</td>
                        <td className="py-3 px-4 text-gray-500">Extra, or not offered</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-900">Fault handling</td>
                        <td className="py-3 px-4 font-bold text-green-700">Priority repair under the carrier SLA</td>
                        <td className="py-3 px-4 text-gray-500">Standard complaint queue</td>
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
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Why businesses move from MPLS to SD-WAN</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Use any mix of links at each branch, with automatic failover and one dashboard for every site.</p>
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
                      <span>A branch with one circuit goes down when that circuit fails</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500 font-bold">✕</span>
                      <span>Every branch needs a private circuit from one carrier</span>
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
                      <span>Traffic moves to the backup link automatically, often before calls drop</span>
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
                      <span>Pre-configured devices, so a new branch is set up from the cloud</span>
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
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#E31E24]">Traffic priority</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">MPLS traffic priority (Class of Service)</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">MPLS lets you decide which traffic goes first when a link is busy.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">Priority 1</span>
                  <h3 className="text-base font-bold text-gray-900">Voice and video</h3>
                  <p className="text-sm text-gray-600">Calls and meetings get first claim on bandwidth, so they stay clear when the link is busy.</p>
                </div>
                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">Priority 2</span>
                  <h3 className="text-base font-bold text-gray-900">Core banking, ERP and billing</h3>
                  <p className="text-sm text-gray-600">Business applications come next, ahead of general traffic.</p>
                </div>
                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">Priority 3</span>
                  <h3 className="text-base font-bold text-gray-900">Email, web and backups</h3>
                  <p className="text-sm text-gray-600">Everything else uses the remaining capacity without slowing the important traffic.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* E. If Business Communications: Omnichannel Voice */}
        {service.slug === "business-communications" && (
          <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-14 bg-white border-b border-gray-200 text-left">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#E31E24]">Voice and messaging</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Business phone and messaging services</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Calls and customer messages on one platform, linked to your CRM where you need it.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">SIP trunk</span>
                  <h3 className="text-base font-bold text-gray-900">Phone lines for your PBX</h3>
                  <p className="text-sm text-gray-600">Call channels delivered over data to your existing IP PBX, scaled up or down without new cabling.</p>
                </div>
                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">Cloud telephony</span>
                  <h3 className="text-base font-bold text-gray-900">Cloud PBX and contact centre</h3>
                  <p className="text-sm text-gray-600">IVR, call queues, recording and reports from a dashboard, on desk phones, laptops or mobiles.</p>
                </div>
                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">Toll-free</span>
                  <h3 className="text-base font-bold text-gray-900">1800 and single numbers</h3>
                  <p className="text-sm text-gray-600">One number for customers, routed to the right office or team.</p>
                </div>
                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">Messaging</span>
                  <h3 className="text-base font-bold text-gray-900">WhatsApp Business API</h3>
                  <p className="text-sm text-gray-600">Order updates, reminders and support chats from one verified business number.</p>
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
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#E31E24]">Which setup fits</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Business broadband for every kind of site</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Not every site needs a leased line. Here's where business broadband works well.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">Small sites</span>
                  <h3 className="text-base font-bold text-gray-900">Small offices, shops and clinics</h3>
                  <p className="text-sm text-gray-600">Fibre broadband with a business router and properly planned Wi-Fi, for sites with a handful of users and cloud apps.</p>
                </div>
                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">Branches</span>
                  <h3 className="text-base font-bold text-gray-900">Branch offices with a backup</h3>
                  <p className="text-sm text-gray-600">Broadband plus a 4G/5G backup, joined to head office with SD-WAN if you have several branches.</p>
                </div>
                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-[#E31E24] uppercase">Backup</span>
                  <h3 className="text-base font-bold text-gray-900">Second line for a leased line site</h3>
                  <p className="text-sm text-gray-600">Broadband from a different carrier as the backup to your leased line, with automatic failover.</p>
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

                      <div hidden={!isOpen} className="px-4 pb-5 pt-1 sm:px-5 sm:pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#fafafa]/50 animate-in fade-in-50 duration-150">
                          {faq.answer}
                        </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>
        )}

        {cities.length > 0 && (
          <section className="w-full bg-white border-t border-gray-100 py-12 sm:py-16">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
                {keyword ?? service.name} in your city
              </h2>
              <p className="mt-2 text-sm text-gray-600 max-w-2xl">
                We deliver {keyword ? keyword.toLowerCase() : service.name} across India through Tata Tele Business Services and ACT Fibernet. See local
                coverage, business areas and delivery details for your city.
              </p>
              <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
                {cities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/locations/${c.slug}/`}
                      className="block rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-zinc-800 hover:border-[#E31E24] hover:text-[#E31E24] transition-colors"
                    >
                      {c.city}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 text-sm font-semibold text-zinc-900">Business areas</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {areaPages.map((a) => (
                  <li key={`${a.citySlug}-${a.slug}`}>
                    <Link
                      href={`/locations/${a.citySlug}/${a.slug}/`}
                      className="inline-block rounded-full bg-gray-100 px-3 py-1.5 text-xs sm:text-sm text-zinc-800 hover:bg-[#E31E24] hover:text-white transition-colors"
                    >
                      {a.area}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/locations/"
                className="inline-block mt-5 text-sm font-medium text-[#E31E24] hover:underline"
              >
                All locations →
              </Link>
            </div>
          </section>
        )}

        <UpgradeCTA
          title={keyword ? `${keyword} quote for your business` : `Get ${service.name} for your business`}
          text="Share your locations and requirements. We'll check feasibility at each address and send a clear proposal."
        />


        {/* Global Footer */}
        <Footer />

      </div>
    </LanguageProvider>
  );
}
