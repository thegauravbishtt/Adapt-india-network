"use client";

import UpgradeCTA from "@/components/UpgradeCTA";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { LanguageProvider } from "../../context/LanguageContext";
import Link from "next/link";

export default function TermsAndConditionsPage() {
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
                src="/banner-terms.jpg"
                alt="Enterprise SLA Terms & Master Services"
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
                    // MASTER SERVICE TERMS
                  </span>

                  {/* Display Title */}
                  <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white font-display tracking-tight uppercase leading-[1.1] mb-2 drop-shadow-md">
                    TERMS &amp; CONDITIONS
                  </h1>

                  <p className="text-zinc-200 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm mb-3">
                    Standard commercial and SLA provisions governing enterprise fiber connectivity, managed SD-WAN hardware deployments, SIP channel provisioning, and SLA credits.
                  </p>

                  <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <span>Effective: October 2026</span>
                    <span>•</span>
                    <span>Standard Enterprise SLA 99.999%</span>
                  </div>
                </div>

                {/* Right Side: Scroll Down Indicator */}
                <div className="hidden lg:flex items-center gap-3 text-zinc-300 font-mono text-xs font-bold uppercase tracking-wider select-none shrink-0 self-end">
                  <span>SCROLL DOWN</span>
                  <a
                    href="#terms-content"
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
                  Welcome to <strong>Adapt India Network</strong>. These Terms and Conditions govern your access to our website (<Link href="/" className="text-zinc-950 font-medium underline">adapt-india.net</Link>) and the provision of our enterprise telecommunications and network infrastructure services.
                </p>
                <p className="mt-3">
                  By engaging our services or using our website, you agree to comply with and be bound by these terms.
                </p>
              </div>

              <hr className="border-zinc-200" />

              {/* 1. Services & Scope */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 font-display">
                  1. Services &amp; Scope of Work
                </h2>
                <p>
                  Adapt India Network provides digital and software engineering services as defined in individual project proposals, quotations, or formal Statements of Work (SOW) mutually agreed with the client.
                </p>
                <p className="mt-3">
                  Any additional features, change requests, or expanded scope requested outside the initial agreement will be estimated and billed separately with client approval.
                </p>
              </div>

              {/* 2. Client Responsibilities */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 font-display">
                  2. Client Responsibilities
                </h2>
                <p>To ensure timely delivery, the client agrees to:</p>
                <ul className="list-disc list-inside mt-2.5 space-y-1.5 pl-2 text-zinc-700">
                  <li>Provide required brand assets, project information, and credentials in a timely manner.</li>
                  <li>Review project milestones and provide feedback within reasonable timelines.</li>
                  <li>Ensure all materials and content provided do not infringe on any third-party copyrights.</li>
                </ul>
              </div>

              {/* 3. Code & Intellectual Property Ownership */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 font-display">
                  3. Intellectual Property &amp; Ownership
                </h2>
                <p>
                  Upon receipt of full payment for all agreed milestones, <strong>100% ownership of all custom code, design files, and project assets</strong> created specifically for the client is transferred directly to the client.
                </p>
                <p className="mt-3">
                  Unless otherwise agreed in a separate Non-Disclosure Agreement (NDA), Adapt India Network reserves the right to display the completed work in its portfolio and marketing case studies.
                </p>
              </div>

              {/* 4. Payment Terms */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 font-display">
                  4. Payment Terms &amp; Invoicing
                </h2>
                <p>
                  Payment terms are specified in each project proposal (typically structured around milestone disbursements). Invoices are due upon receipt or within the timeline stated on the invoice. We accept standard bank transfers and major online payment methods.
                </p>
              </div>

              {/* 5. Warranty */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 font-display">
                  5. Warranty &amp; Post-Launch Support
                </h2>
                <p>
                  We include a <strong>30-day warranty period</strong> following project launch to resolve any bugs or errors related to the agreed project scope at no additional cost. Ongoing maintenance and support beyond the warranty period are available through monthly maintenance plans.
                </p>
              </div>

              {/* 6. Limitation of Liability */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 font-display">
                  6. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by law, Adapt India Network shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the delivered software or services.
                </p>
              </div>

              {/* 7. Governing Law */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 font-display">
                  7. Governing Law &amp; Jurisdiction
                </h2>
                <p>
                  These Terms and any project agreements shall be governed by the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in <strong>New Delhi, India</strong>.
                </p>
              </div>

              {/* 8. Contact Us */}
              <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-6 sm:p-8 mt-4 shadow-xs">
                <h2 className="text-lg sm:text-xl font-bold text-zinc-950 mb-2 font-display">
                  8. Contact Us
                </h2>
                <p className="text-sm text-zinc-600 mb-3">
                  If you have questions regarding these Terms &amp; Conditions, please reach out to:
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
