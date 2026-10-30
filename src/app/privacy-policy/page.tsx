"use client";

import UpgradeCTA from "@/components/UpgradeCTA";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { LanguageProvider } from "../../context/LanguageContext";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip">
        <Navbar />

        <main className="flex-1 w-full">
          {/* 1. HERO BANNER (Full-Bleed Photographic Background - Exactly like reference) */}
          <section className="relative w-full text-white pt-28 sm:pt-32 lg:pt-36 pb-7 sm:pb-9 lg:pb-10 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
            
            {/* Full Background Image with Directional Dark Gradient */}
            <div className="absolute inset-0 z-0">
              <img
                src="/banner-privacy.jpg"
                alt="Enterprise Data Privacy & Security"
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
                  <span className="px-3 py-0.5 rounded-full bg-black/60 border border-sky-500/40 text-[#38bdf8] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                    // LEGAL
                  </span>
                </div>
              </div>
            </div>

            {/* Center Content: Title, Description & Scroll Down */}
            <div className="relative z-20 max-w-7xl mx-auto w-full">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
                
                <div className="flex flex-col items-start text-left max-w-3xl">
                  {/* Category Tagline */}
                  <span className="font-mono text-xs font-extrabold tracking-widest text-[#38bdf8] uppercase mb-1.5 block">
                    // PRIVACY &amp; DATA PROTECTION
                  </span>

                  {/* Display Title */}
                  <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white font-display tracking-tight uppercase leading-[1.1] mb-2 drop-shadow-md">
                    PRIVACY POLICY
                  </h1>

                  <p className="text-zinc-200 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm mb-3">
                    How Adapt India Networks safeguards enterprise telecom data, telecommunication telemetry, customer records, and network logs under strict statutory confidentiality standards.
                  </p>

                  <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <span>Effective: October 2026</span>
                    <span>•</span>
                    <span>ISO 27001 &amp; TRAI Compliance</span>
                  </div>
                </div>

                {/* Right Side: Scroll Down Indicator */}
                <div className="hidden lg:flex items-center gap-3 text-zinc-300 font-mono text-xs font-bold uppercase tracking-wider select-none shrink-0 self-end">
                  <span>SCROLL DOWN</span>
                  <a
                    href="#privacy-content"
                    className="w-9 h-9 rounded-full border border-white/30 bg-black/40 flex items-center justify-center text-[#38bdf8] hover:bg-black/70 hover:border-white transition-all animate-bounce"
                  >
                    ↓
                  </a>
                </div>

              </div>
            </div>
          </section>

          {/* 2. DOCUMENT CONTENT */}
          <section className="w-full py-12 sm:py-18 px-4 sm:px-8 bg-white">
            <div className="max-w-3xl mx-auto flex flex-col gap-10 text-left text-zinc-700 leading-relaxed text-sm sm:text-base">
              
              {/* Introduction */}
              <div>
                <p>
                  At <strong>Adapt India Network</strong> (“we”, “our”, or “us”), we respect your privacy and are committed to protecting the personal information you share with us through our website (<Link href="/" className="text-zinc-950 font-medium underline">adapt-india.net</Link>) and our enterprise telecommunications services.
                </p>
                <p className="mt-3">
                  This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your data.
                </p>
              </div>

              <hr className="border-zinc-200" />

              {/* 1. Information We Collect */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 font-display">
                  1. Information We Collect
                </h2>
                <p>
                  We collect information that you provide directly to us when filling out our contact forms, requesting proposals, or communicating with our team:
                </p>
                <ul className="list-disc list-inside mt-2.5 space-y-1.5 pl-2 text-zinc-700">
                  <li><strong>Contact Details:</strong> Name, email address, phone number, and company name.</li>
                  <li><strong>Project Details:</strong> Information about your project requirements, preferred services, and estimated budgets.</li>
                  <li><strong>Communications:</strong> Messages, feedback, and notes from inquiries submitted through our website or email.</li>
                </ul>
                <p className="mt-4">
                  We also automatically collect standard technical data when you visit our website, such as your browser type, operating system, IP address, and pages viewed, to ensure our site operates reliably.
                </p>
              </div>

              {/* 2. How We Use Your Information */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 font-display">
                  2. How We Use Your Information
                </h2>
                <p>We use the information we collect solely for business purposes:</p>
                <ul className="list-disc list-inside mt-2.5 space-y-1.5 pl-2 text-zinc-700">
                  <li>To respond to your inquiries and evaluate project briefs.</li>
                  <li>To prepare custom proposals, timelines, and Statements of Work.</li>
                  <li>To deliver agreed design, development, and marketing services.</li>
                  <li>To maintain website performance, security, and prevent spam.</li>
                </ul>
              </div>

              {/* 3. Information Sharing */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 font-display">
                  3. Information Sharing
                </h2>
                <p>
                  <strong>We do not sell, rent, or trade your personal information.</strong> We only share information with trusted third-party service providers (such as hosting platforms and email delivery services) that assist us in operating our website and delivering client services. All such providers are bound by confidentiality agreements.
                </p>
              </div>

              {/* 4. Data Security */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 font-display">
                  4. Data Security &amp; Retention
                </h2>
                <p>
                  We implement industry-standard security measures, including SSL encryption (HTTPS) and restricted access controls, to protect your data against unauthorized access, loss, or disclosure.
                </p>
                <p className="mt-3">
                  We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy or to comply with statutory legal requirements.
                </p>
              </div>

              {/* 5. Your Rights */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 font-display">
                  5. Your Rights
                </h2>
                <p>
                  Depending on your location, you have the right to request access to the personal data we hold about you, request corrections to inaccurate data, or ask for your information to be deleted.
                </p>
                <p className="mt-3">
                  To exercise any of these rights, please contact us at <a href="mailto:info@adapt-india.net" className="text-zinc-950 font-semibold underline">info@adapt-india.net</a>.
                </p>
              </div>

              {/* 6. Cookies */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 font-display">
                  6. Cookies
                </h2>
                <p>
                  Our website uses basic cookies to enable core functionality and analyze aggregate website traffic. You can adjust your cookie settings at any time on our <Link href="/cookie-preferences" className="text-zinc-950 font-semibold underline">Cookie Preferences</Link> page.
                </p>
              </div>

              {/* 7. Contact Us */}
              <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-6 sm:p-8 mt-4 shadow-xs">
                <h2 className="text-lg sm:text-xl font-bold text-zinc-950 mb-2 font-display">
                  7. Contact Us
                </h2>
                <p className="text-sm text-zinc-600 mb-3">
                  If you have any questions about this Privacy Policy or our data practices, please reach out to us:
                </p>
                <div className="text-sm text-zinc-800 space-y-1">
                  <p><strong>Adapt India Network</strong></p>
                  <p>Phone: <a href="tel:+918287479961" className="text-zinc-950 font-semibold underline">+91 82874 79961</a></p>
                  <p>Email: <a href="mailto:info@adapt-india.net" className="text-zinc-950 font-semibold underline">info@adapt-india.net</a></p>
                  <p>Location: Saket District Centre, New Delhi - 110062, Delhi, India</p>
                </div>
              </div>

            </div>
          </section>
        </main>

        <UpgradeCTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
