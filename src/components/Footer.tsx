"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
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
    <footer className="w-full bg-white text-zinc-800 pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-8 lg:px-14 xl:px-20 relative border-t border-zinc-200/80 select-none">
      
      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full bg-black text-[#fbea3d] border-2 border-black/80 flex items-center justify-center shadow-[0_4px_20px_rgba(251,234,61,0.35)] hover:bg-[#fbea3d] hover:text-black hover:border-black hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
          aria-label="Scroll to top"
        >
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      )}

      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-14 w-full">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Brand Logo, About & Socials */}
          <div className="lg:col-span-4 flex flex-col items-start text-left pr-0 lg:pr-4">
            
            {/* Circular Brand Badge */}
            <div className="flex items-center gap-3">
              <div className="w-13 h-13 rounded-full bg-black text-white flex flex-col items-center justify-center font-display leading-[0.95] text-center shadow-md select-none border border-black p-1">
                <span className="text-[9px] font-medium text-zinc-300 uppercase tracking-tight">the</span>
                <span className="text-[12px] font-black tracking-tighter uppercase text-[#fbea3d]">owlio</span>
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-white">WORKS</span>
              </div>
            </div>

            {/* Agency Bio */}
            <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed max-w-sm mt-5 font-normal">
              An integrated branding and digital marketing agency. An award-winning, full-stack team building creative and growth-driven solutions for brands across the world.
            </p>

            {/* Follow Us */}
            <span className="text-xs sm:text-[13px] font-semibold text-zinc-900 mt-6 mb-3 block">
              Follow Us
            </span>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-zinc-200 bg-white text-zinc-800 flex items-center justify-center hover:bg-black hover:text-[#fbea3d] hover:border-black transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75a1.75 1.75 0 0 0-1.76 1.75c0 .97.79 1.76 1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-zinc-200 bg-white text-zinc-800 flex items-center justify-center hover:bg-black hover:text-[#fbea3d] hover:border-black transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-currentColor strokeWidth='2'" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-zinc-200 bg-white text-zinc-800 flex items-center justify-center hover:bg-black hover:text-[#fbea3d] hover:border-black transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-zinc-200 bg-white text-zinc-800 flex items-center justify-center hover:bg-black hover:text-[#fbea3d] hover:border-black transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

          </div>

          {/* Column 2: Explore */}
          <div className="lg:col-span-2 lg:pl-2 flex flex-col items-start text-left">
            <h4 className="text-sm font-bold text-zinc-950 font-display mb-4">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-zinc-600 font-normal">
              <li>
                <a href="#branding" className="hover:text-black transition-colors">
                  Branding
                </a>
              </li>
              <li>
                <a href="#digital" className="hover:text-black transition-colors">
                  Digital & Performance
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-black transition-colors">
                  Sample Work
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-black transition-colors">
                  Our Clients
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-3 lg:pl-2 flex flex-col items-start text-left">
            <h4 className="text-sm font-bold text-zinc-950 font-display mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-zinc-600 font-normal">
              <li>
                <a href="#industries" className="hover:text-black transition-colors">
                  Industries we Serve
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-black transition-colors">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-black transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#blogs" className="hover:text-black transition-colors">
                  Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-sm font-bold text-zinc-950 font-display mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
              <a
                href="tel:+180041229176"
                className="hover:text-black transition-colors font-medium text-zinc-800"
              >
                +1800 4122 9176
              </a>
              <a
                href="mailto:djb@thebrandbee.com"
                className="hover:text-black transition-colors font-medium text-zinc-800"
              >
                djb@thebrandbee.com
              </a>
              <p className="text-zinc-600 leading-relaxed">
                AIHP Cyber Greens 2, Plot 484-485, Phase 3, Udyog Vihar, Sector 20, Gurugram - 122016, Haryana, India
              </p>
            </div>
          </div>

        </div>

        {/* Sub-Navigation Links Row */}
        <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2 text-xs sm:text-[13px] text-zinc-600 font-normal pt-2">
          <a href="#faqs" className="hover:text-black transition-colors">
            FAQs
          </a>
          <a href="#privacy" className="hover:text-black transition-colors">
            Privacy Policy
          </a>
          <a href="#cookies" className="hover:text-black transition-colors">
            Cookie Preferences
          </a>
          <a href="#terms" className="hover:text-black transition-colors">
            Terms & Conditions
          </a>
        </div>

        {/* Bottom Bar Divider & Meta Row */}
        <div className="border-t border-zinc-200/90 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 w-full">
          
          {/* Copyright text */}
          <div className="text-left">
            <p className="text-zinc-500 text-xs sm:text-[13px]">
              Copyright © 2012-2026 Brand Bee Management Pvt. Ltd. All rights reserved.
            </p>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <span className="italic font-medium text-zinc-900 text-xs sm:text-[13px]">
              Meliora - Towards Better
            </span>
          </div>

          {/* Global Locations List */}
          <div className="text-right">
            <span className="text-[11px] sm:text-xs tracking-wider text-zinc-600 uppercase font-medium">
              GURUGRAM · NEW DELHI · LONDON · NEW YORK · SYDNEY · DUBAI
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
