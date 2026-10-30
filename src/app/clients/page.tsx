"use client";

import UpgradeCTA from "@/components/UpgradeCTA";
import React from "react";
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import Link from "next/link";
import { ShieldCheck, Award } from "lucide-react";

interface ClientBrand {
  name: string;
  category: string;
  badgeColor: string;
  logoSvg: React.ReactNode;
}

const CLIENTS_LIST: ClientBrand[] = [
  {
    name: "District Co-operative Bank",
    category: "Banking & Financial Services",
    badgeColor: "#003366",
    logoSvg: (
      <svg viewBox="0 0 280 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="80" rx="12" fill="#F8FAFC" />
        {/* Bank Emblem Icon */}
        <g transform="translate(18, 14)">
          <circle cx="26" cy="26" r="24" fill="#003366" />
          {/* Bank Pillars / Classical Façade */}
          <path d="M14 36h24v3H14v-3zm3-14h3v12h-3V22zm7 0h4v12h-4V22zm8 0h3v12h-3V22zm-9-9l13 7H13l13-7zm-14 26h26v2H12v-2z" fill="#FBBF24" />
        </g>
        <text x="80" y="36" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="15" fill="#003366" letterSpacing="0.5">
          DISTRICT COOPERATIVE
        </text>
        <text x="80" y="54" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="13" fill="#D97706" letterSpacing="1">
          BANK LIMITED
        </text>
      </svg>
    ),
  },
  {
    name: "Muthoot FinCorp",
    category: "Non-Banking Financial Company",
    badgeColor: "#0A2540",
    logoSvg: (
      <svg viewBox="0 0 280 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="80" rx="12" fill="#F8FAFC" />
        {/* Blue Star / Muthoot Twin Emblem */}
        <g transform="translate(20, 15)">
          <rect x="0" y="4" width="42" height="42" rx="8" fill="#0A2540" />
          <path d="M21 9l4 10 10 1-8 7 3 10-9-6-9 6 3-10-8-7 10-1 4-10z" fill="#00D4FF" />
          <circle cx="21" cy="25" r="4" fill="#E31E24" />
        </g>
        <text x="76" y="37" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="17" fill="#0A2540" letterSpacing="0.2">
          Muthoot
        </text>
        <text x="156" y="37" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="17" fill="#E31E24" letterSpacing="0.2">
          FinCorp
        </text>
        <text x="76" y="53" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="10" fill="#64748B" letterSpacing="1.2">
          MUTHOOT BLUE ENTERPRISE
        </text>
      </svg>
    ),
  },
  {
    name: "L&T Finance",
    category: "Infrastructure & Enterprise Finance",
    badgeColor: "#00205B",
    logoSvg: (
      <svg viewBox="0 0 280 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="80" rx="12" fill="#F8FAFC" />
        {/* Iconic L&T Blue Seal */}
        <g transform="translate(20, 16)">
          <circle cx="24" cy="24" r="23" stroke="#00205B" strokeWidth="3" fill="#FFFFFF" />
          <circle cx="24" cy="24" r="19" fill="#00205B" />
          <text x="24" y="31" fontFamily="system-ui, serif" fontWeight="900" fontSize="17" fill="#FFFFFF" textAnchor="middle">
            L&amp;T
          </text>
        </g>
        <text x="78" y="37" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="17" fill="#00205B" letterSpacing="0.5">
          L&amp;T Finance
        </text>
        <text x="78" y="53" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="11" fill="#C59B27" letterSpacing="0.8">
          LARSEN &amp; TOUBRO GROUP
        </text>
      </svg>
    ),
  },
  {
    name: "Ambit Finvest",
    category: "Corporate & SME Lending",
    badgeColor: "#1B365D",
    logoSvg: (
      <svg viewBox="0 0 280 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="80" rx="12" fill="#F8FAFC" />
        {/* Ambit Red & Blue Chevron Logo */}
        <g transform="translate(18, 16)">
          <rect x="2" y="2" width="44" height="44" rx="10" fill="#1B365D" />
          <path d="M12 36L24 14l12 22h-6l-6-11-6 11h-6z" fill="#E31E24" />
          <path d="M20 28h8v4h-8v-4z" fill="#FFFFFF" />
        </g>
        <text x="76" y="36" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="18" fill="#1B365D" letterSpacing="0.3">
          AMBIT
        </text>
        <text x="76" y="53" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="13" fill="#E31E24" letterSpacing="1.2">
          FINVEST
        </text>
      </svg>
    ),
  },
  {
    name: "Blue Dart",
    category: "Express Logistics & Cargo",
    badgeColor: "#003399",
    logoSvg: (
      <svg viewBox="0 0 280 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="80" rx="12" fill="#F8FAFC" />
        {/* Iconic Blue Dart Arrow Graphic */}
        <g transform="translate(16, 18)">
          <rect x="0" y="4" width="46" height="38" rx="8" fill="#003399" />
          <path d="M8 32l16-16-5-3 20-2-3 20-4-5-15 15-9-9z" fill="#FFCC00" />
        </g>
        <text x="74" y="38" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="20" fontStyle="italic" fill="#003399" letterSpacing="-0.5">
          BLUE DART
        </text>
        <text x="74" y="53" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="10" fill="#CC0000" letterSpacing="1">
          DHL GROUP COMPANY
        </text>
      </svg>
    ),
  },
  {
    name: "Amara Raja Batteries",
    category: "Industrial & Automotive Energy",
    badgeColor: "#008752",
    logoSvg: (
      <svg viewBox="0 0 280 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="80" rx="12" fill="#F8FAFC" />
        {/* Amara Raja Green Energy Emblem */}
        <g transform="translate(18, 16)">
          <rect x="0" y="2" width="44" height="44" rx="10" fill="#008752" />
          <path d="M22 8l4 9 9 3-8 6 2 10-7-5-7 5 2-10-8-6 9-3 4-9z" fill="#FFD100" />
          <path d="M14 34h16v4H14v-4z" fill="#FFFFFF" />
        </g>
        <text x="74" y="36" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="15" fill="#008752" letterSpacing="0.4">
          AMARA RAJA
        </text>
        <text x="74" y="53" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="12" fill="#1F2937" letterSpacing="1">
          BATTERIES (AMARON)
        </text>
      </svg>
    ),
  },
  {
    name: "Paisalo Digital",
    category: "Digital Financial Services",
    badgeColor: "#1E3A8A",
    logoSvg: (
      <svg viewBox="0 0 280 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="80" rx="12" fill="#F8FAFC" />
        {/* Paisalo Rupee Symbol / Sun Emblem */}
        <g transform="translate(18, 16)">
          <circle cx="23" cy="23" r="21" fill="#E11D48" />
          <path d="M16 16h14m-14 5h14m-14 0c4 0 7 2 7 6s-3 6-7 6h-2l11 11" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <text x="74" y="36" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="17" fill="#1E3A8A" letterSpacing="0.3">
          PAISALO
        </text>
        <text x="74" y="53" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="13" fill="#E11D48" letterSpacing="1">
          DIGITAL LIMITED
        </text>
      </svg>
    ),
  },
  {
    name: "McDonald's",
    category: "Retail & Quick Service Restaurants",
    badgeColor: "#DA291C",
    logoSvg: (
      <svg viewBox="0 0 280 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="80" rx="12" fill="#F8FAFC" />
        {/* Golden Arches */}
        <g transform="translate(18, 14)">
          <rect x="0" y="2" width="46" height="44" rx="10" fill="#DA291C" />
          {/* Golden Arches Path */}
          <path d="M12 40V24c0-4 3-8 7-8s6 4 6 9c0-5 3-9 7-9s7 4 7 8v16h-4V25c0-3-2-5-4-5s-4 2-4 5v15h-4V25c0-3-2-5-4-5s-4 2-4 5v15h-3z" fill="#FFC72C" />
        </g>
        <text x="78" y="38" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="19" fill="#DA291C" letterSpacing="0.2">
          McDonald&apos;s
        </text>
        <text x="78" y="53" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="10" fill="#6B7280" letterSpacing="1.2">
          ENTERPRISE RETAIL
        </text>
      </svg>
    ),
  },
];

export default function ClientsPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip relative w-full select-none font-sans">
        <Navbar />

        {/* 1. HERO BANNER */}
        <section className="relative w-full text-white pt-28 sm:pt-32 lg:pt-36 pb-7 sm:pb-9 lg:pb-10 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
          <div className="absolute inset-0 z-0">
            <img
              src="/banner-datacenter-racks.jpg"
              alt="Adapt India Network Enterprise Clients"
              className="w-full h-full object-cover object-center scale-100 filter brightness-[0.65] contrast-[1.10]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-black/45 z-10" />
          </div>

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
                  // ENTERPRISE PORTFOLIO
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-20 max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
              <div className="flex flex-col items-start text-left max-w-3xl">
                <span className="font-mono text-xs font-extrabold tracking-widest text-[#E31E24] uppercase mb-1.5 block">
                  // TRUSTED BY INDUSTRY LEADERS
                </span>

                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white font-display tracking-tight uppercase leading-[1.1] mb-2 drop-shadow-md">
                  OUR CLIENTS
                </h1>

                <p className="text-zinc-200 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm mb-4">
                  Powering mission-critical optical connectivity, leased lines, and SD-WAN networks for India&apos;s foremost financial institutions, logistics carriers, and retail giants.
                </p>
              </div>

              <div className="flex items-center gap-3 pb-1">
                <div className="px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3 text-white">
                  <ShieldCheck className="w-5 h-5 text-[#E31E24]" />
                  <div className="text-left">
                    <p className="text-[11px] font-mono uppercase text-zinc-300">Carrier Class SLA</p>
                    <p className="text-xs font-bold font-sans">99.999% Guaranteed Uptime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. CLIENT LOGOS GRID (ONLY LOGOS AS REQUESTED) */}
        <main className="flex-1 w-full bg-slate-50/70 py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-14 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-[#E31E24] text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Enterprise Partnerships</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-950 font-display tracking-tight uppercase">
                Our Esteemed Clients
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Trusted by leading banks, enterprises, and retail brands across India.
              </p>
            </div>

            {/* 8 Requested Client Logos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
              {CLIENTS_LIST.map((client) => (
                <div
                  key={client.name}
                  className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 flex flex-col items-center justify-center shadow-xs hover:shadow-xl hover:border-[#E31E24]/60 transition-all duration-300 group min-h-[140px] relative overflow-hidden"
                >
                  <div className="w-full max-w-[240px] h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    {client.logoSvg}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Call to Action for Enterprise Onboarding */}
            <div className="mt-14 sm:mt-18 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#002244] via-[#051c33] to-[#002B49] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-blue-900/40">
              <div className="text-left max-w-xl">
                <span className="text-xs font-mono text-[#E31E24] font-bold uppercase tracking-widest block mb-1">
                  // PAN-INDIA CONNECTIVITY
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Join India&apos;s Top Enterprises on Our High-Speed Optical Grid
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Connect your head offices, branches, and remote centers with dedicated 1:1 symmetrical bandwidth.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#E31E24] hover:bg-red-700 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-all text-center shadow-lg active:scale-95"
                >
                  Schedule Feasibility Check →
                </Link>
                <a
                  href="tel:+918287479961"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-all text-center border border-white/20 active:scale-95"
                >
                  Call +91 82874 79961
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* 3. NEWSLETTER & FOOTER */}
        <UpgradeCTA title="Join the businesses that rely on us" text="Get the same carrier-backed connectivity and single point of support for your offices across India." />
        <NewsletterSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
