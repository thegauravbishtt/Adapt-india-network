"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";

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
    <footer className="w-full bg-white text-zinc-800 pt-16 sm:pt-20 pb-16 sm:pb-10 px-4 sm:px-8 lg:px-14 xl:px-20 relative border-t border-zinc-200/80 select-none">
      
      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-16 md:bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-black text-[#fbea3d] border-2 border-black/80 flex items-center justify-center shadow-[0_4px_20px_rgba(251,234,61,0.35)] hover:bg-[#fbea3d] hover:text-black hover:border-black hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
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
            
            {/* Brand Logo */}
            <div className="flex items-center select-none">
              <Link href="/" className="flex items-center group cursor-pointer">
                <img
                  src="/logo.png"
                  alt="Owlio Works Logo"
                  className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
                />
              </Link>
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
                href="https://www.linkedin.com/company/owlio-works/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-zinc-200 bg-white text-zinc-800 flex items-center justify-center hover:bg-black hover:text-[#fbea3d] hover:border-black transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75a1.75 1.75 0 0 0-1.76 1.75c0 .97.79 1.76 1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com/OwlioWorks"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-zinc-200 bg-white text-zinc-800 flex items-center justify-center hover:bg-black hover:text-[#fbea3d] hover:border-black transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/owlioworks"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-zinc-200 bg-white text-zinc-800 flex items-center justify-center hover:bg-black hover:text-[#fbea3d] hover:border-black transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/Owlio-Works/61594586423122/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-zinc-200 bg-white text-zinc-800 flex items-center justify-center hover:bg-black hover:text-[#fbea3d] hover:border-black transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2 lg:pl-2 flex flex-col items-start text-left">
            <h4 className="text-sm font-bold text-zinc-950 font-display mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-zinc-600 font-normal">
              <li>
                <Link href="/services/web-development" className="hover:text-black transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="hover:text-black transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/seo-services" className="hover:text-black transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/google-ads" className="hover:text-black transition-colors">
                  Google &amp; Meta Ads
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="hover:text-black transition-colors">
                  AI, Email &amp; WhatsApp Automation
                </Link>
              </li>
              <li>
                <Link href="/services/enterprise-software" className="hover:text-black transition-colors">
                  Enterprise Software
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-black transition-colors font-semibold text-zinc-900">
                  All Services →
                </Link>
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
                <Link href="/about/who-we-are" className="hover:text-black transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/about/what-we-do" className="hover:text-black transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/about/how-we-work" className="hover:text-black transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-black transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-black transition-colors">
                  Featured Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-black transition-colors">
                  Insights &amp; Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-sm font-bold text-zinc-950 font-display mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
              <div className="flex flex-col gap-1.5">
                <a
                  href="tel:+917838240941"
                  className="hover:text-black transition-colors font-semibold text-zinc-900 flex items-center gap-1.5"
                >
                  <span>+91 78382 40941</span>
                </a>
                <a
                  href="tel:+917042460941"
                  className="hover:text-black transition-colors font-semibold text-zinc-900 flex items-center gap-1.5"
                >
                  <span>+91 70424 60941</span>
                </a>
              </div>
              <a
                href="mailto:owlioworks@gmail.com"
                className="hover:text-black transition-colors font-semibold text-zinc-900"
              >
                owlioworks@gmail.com
              </a>
              <p className="text-zinc-600 leading-relaxed">
                Saket, New Delhi - 110062, Delhi, India
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-bold text-black hover:text-[#b29f00] pt-1 uppercase tracking-wider font-mono"
              >
                <span>Go to Contact Page</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Sub-Navigation Links Row */}
        <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2 text-xs sm:text-[13px] text-zinc-600 font-normal pt-2">
          <Link href="/contact" className="hover:text-black transition-colors font-medium">
            Contact Us
          </Link>
          <Link href="/faqs" className="hover:text-black transition-colors">
            FAQs
          </Link>
          <Link href="/privacy-policy" className="hover:text-black transition-colors">
            Privacy Policy
          </Link>
          <Link href="/cookie-preferences" className="hover:text-black transition-colors">
            Cookie Preferences
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-black transition-colors">
            Terms &amp; Conditions
          </Link>
        </div>

        {/* Bottom Bar Divider & Meta Row */}
        <div className="border-t border-zinc-200/90 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 w-full">
          
          {/* Copyright text */}
          <div className="text-left">
            <p className="text-zinc-500 text-xs sm:text-[13px]">
              Copyright © {new Date().getFullYear()} Owlio Works Pvt. Ltd. All rights reserved.
            </p>
          </div>

          {/* Location */}
          <div className="text-right">
            <span className="text-[11px] sm:text-xs tracking-wider text-zinc-600 uppercase font-medium">
              NEW DELHI, INDIA
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
