"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-[#02050b] py-6 sm:py-8 lg:py-10 px-3 sm:px-6 lg:px-8 relative select-none font-sans overflow-hidden">
      
      {/* Outer Rounded Container Card Matching Reference */}
      <div className="max-w-[1400px] mx-auto bg-[#050911] border border-zinc-800/90 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 relative shadow-2xl overflow-hidden">
        
        {/* Subtle Red Edge Line Indicator on Left */}
        <div className="absolute left-0 top-1/4 h-48 w-[2px] bg-gradient-to-b from-transparent via-[#E31E24] to-transparent opacity-75" />

        <div className="flex flex-col gap-10 sm:gap-12 w-full">
          
          {/* Top Breadcrumbs Row matching reference */}
          <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-zinc-400 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">-</span>
            <Link href="/services" className="text-[#38bdf8] hover:underline transition-colors font-medium">
              Network
            </Link>
          </div>

          {/* 4-Column Navigation Grid with 2 Tiers (Exactly matching reference screenshot) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 items-start">
            
            {/* ==================================================== */}
            {/* COLUMN 1: Products & Partners */}
            {/* ==================================================== */}
            <div className="flex flex-col gap-9 text-left">
              {/* Top Tier: Products */}
              <div>
                <h4 className="text-xs sm:text-[13px] text-zinc-400 font-normal mb-3.5 tracking-normal">
                  Products
                </h4>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-zinc-200">
                  <li>
                    <Link href="/services/smart-internet-ill" className="hover:text-white transition-colors">
                      Internet Leased Line (ILL)
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/smartflo-sd-wan" className="hover:text-white transition-colors">
                      Managed SD-WAN
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/managed-mpls" className="hover:text-white transition-colors">
                      MPLS VPN Connectivity
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/enterprise-broadband" className="hover:text-white transition-colors">
                      Enterprise Broadband
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/enterprise-broadband" className="hover:text-white transition-colors">
                      Managed Wi-Fi Solutions
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Bottom Tier: Partners (Tata & ACT Enterprise) */}
              <div>
                <h4 className="text-xs sm:text-[13px] text-zinc-400 font-normal mb-3.5 tracking-normal">
                  Partners
                </h4>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-zinc-200">
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">
                      Tata Teleservices (TTBS)
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">
                      ACT Enterprise
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/who-we-are" className="hover:text-white transition-colors">
                      Strategic Carrier Alliances
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* ==================================================== */}
            {/* COLUMN 2: Solutions & Customers */}
            {/* ==================================================== */}
            <div className="flex flex-col gap-9 text-left">
              {/* Top Tier: Solutions */}
              <div>
                <h4 className="text-xs sm:text-[13px] text-zinc-400 font-normal mb-3.5 tracking-normal">
                  Solutions
                </h4>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-zinc-200">
                  <li>
                    <Link href="/services/business-communications" className="hover:text-white transition-colors">
                      SIP Trunk Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/business-communications" className="hover:text-white transition-colors">
                      Cloud Telephony
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cybersecurity-solutions" className="hover:text-white transition-colors">
                      Cyber Security Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/point-to-point-leased-line" className="hover:text-white transition-colors">
                      Data Services &amp; PRI
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">
                      All Enterprise Services
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Bottom Tier: Customers */}
              <div>
                <h4 className="text-xs sm:text-[13px] text-zinc-400 font-normal mb-3.5 tracking-normal">
                  Customers
                </h4>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-zinc-200">
                  <li>
                    <Link href="/clients" className="hover:text-white transition-colors">
                      Our Customers
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">
                      Network Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Customer Portal
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* ==================================================== */}
            {/* COLUMN 3: Industries & Company */}
            {/* ==================================================== */}
            <div className="flex flex-col gap-9 text-left">
              {/* Top Tier: Locations (internal links to city landing pages) */}
              <div>
                <h4 className="text-xs sm:text-[13px] text-zinc-400 font-normal mb-3.5 tracking-normal">
                  <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
                </h4>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-zinc-200">
                  <li>
                    <Link href="/locations/delhi" className="hover:text-white transition-colors">
                      Leased Line in Delhi
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/gurgaon" className="hover:text-white transition-colors">
                      Leased Line in Gurgaon
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/noida" className="hover:text-white transition-colors">
                      Leased Line in Noida
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/ghaziabad" className="hover:text-white transition-colors">
                      Leased Line in Ghaziabad
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/faridabad" className="hover:text-white transition-colors">
                      Leased Line in Faridabad
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/lucknow" className="hover:text-white transition-colors">
                      Leased Line in Lucknow
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/mumbai" className="hover:text-white transition-colors">
                      Leased Line in Mumbai
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/bengaluru" className="hover:text-white transition-colors">
                      Leased Line in Bengaluru
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations" className="text-[#E31E24] hover:text-white transition-colors">
                      All Pan-India Locations →
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Bottom Tier: Company */}
              <div>
                <h4 className="text-xs sm:text-[13px] text-zinc-400 font-normal mb-3.5 tracking-normal">
                  Company
                </h4>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-zinc-200">
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      About Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/who-we-are" className="hover:text-white transition-colors">
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/how-we-work" className="hover:text-white transition-colors">
                      How We Work
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/what-we-do" className="hover:text-white transition-colors">
                      What We Do
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Offices &amp; Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* ==================================================== */}
            {/* COLUMN 4: Resources & Get Started */}
            {/* ==================================================== */}
            <div className="flex flex-col gap-9 text-left">
              {/* Top Tier: Resources */}
              <div>
                <h4 className="text-xs sm:text-[13px] text-zinc-400 font-normal mb-3.5 tracking-normal">
                  Resources
                </h4>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-zinc-200">
                  <li>
                    <Link href="/articles" className="hover:text-white transition-colors">
                      Articles &amp; Insights
                    </Link>
                  </li>
                  <li>
                    <Link href="/articles" className="hover:text-white transition-colors">
                      Whitepapers &amp; POV
                    </Link>
                  </li>
                  <li>
                    <Link href="/faqs" className="hover:text-white transition-colors">
                      FAQs &amp; Knowledge Base
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Bottom Tier: Get Started & Contact */}
              <div>
                <h4 className="text-xs sm:text-[13px] text-zinc-400 font-normal mb-3.5 tracking-normal">
                  Get Started
                </h4>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-zinc-200">
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <a href="tel:+918287479961" className="hover:text-white transition-colors">
                      Phone: +91 82874 79961
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@adapt-india.net" className="hover:text-white transition-colors">
                      info@adapt-india.net
                    </a>
                  </li>
                  <li>
                    <a href="mailto:support@adapt-india.net" className="hover:text-white transition-colors">
                      support@adapt-india.net
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Back to Top, Legal Links & "Ask me anything..." Capsule */}
          <div className="border-t border-zinc-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-400 w-full relative">
            
            {/* Left: Square Back-To-Top button matching reference */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={scrollToTop}
                className="w-8 h-8 rounded bg-[#0a1220] border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-all relative overflow-hidden group cursor-pointer"
                aria-label="Scroll to top"
              >
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
                {/* Red bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E31E24]" />
              </button>

              <span className="text-zinc-500 text-[11px]">
                © {new Date().getFullYear()} Adapt India Network
              </span>
            </div>

            {/* Right: Floating "Ask me anything..." Capsule (Matching reference screenshot exactly) */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-zinc-900 px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 text-zinc-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z" />
                </svg>
                <span className="text-xs font-semibold">Ask me anything...</span>
                <svg className="w-3 h-3 text-zinc-500 -rotate-45" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </Link>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}
