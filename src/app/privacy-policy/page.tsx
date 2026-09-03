"use client";

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
          {/* 1. HERO BANNER (Compact Standard Layout) */}
          <section className="relative w-full text-white pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
            {/* Real Photography Background */}
            <div className="absolute inset-0 z-0">
              <img
                src="/banner-privacy.jpg"
                alt="Owlio Works Data Privacy and Security"
                className="w-full h-full object-cover object-center scale-100 filter brightness-[0.75] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-black/40 z-10"></div>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto w-full">
              {/* Back to Home & Top Tag */}
              <div className="flex items-center justify-between gap-4 pb-3 sm:pb-4 border-b border-white/20 mb-6 sm:mb-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-mono font-bold tracking-widest text-zinc-300 hover:text-white uppercase transition-colors group cursor-pointer"
                >
                  <span className="transition-transform group-hover:-translate-x-1 duration-200">←</span>
                  <span>BACK TO HOME</span>
                </Link>

                <span className="px-3.5 py-0.5 rounded-full bg-black/60 border border-zinc-700/80 text-[#fbea3d] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                  // LEGAL
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="flex flex-col items-start text-left max-w-3xl">
                <span className="font-mono text-xs font-extrabold tracking-widest text-[#fbea3d] uppercase mb-2 block">
                  // PRIVACY &amp; DATA PROTECTION
                </span>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight uppercase leading-none mb-2.5 drop-shadow-md">
                  PRIVACY POLICY
                </h1>
                <p className="text-zinc-300 text-xs sm:text-sm font-normal max-w-2xl leading-relaxed drop-shadow-sm">
                  How Owlio Works collects, safeguards, and respects your personal and business data.
                </p>
                <span className="mt-2 text-[11px] sm:text-xs font-mono text-zinc-400">
                  Last updated: September 3, 2026
                </span>
              </div>
            </div>
          </section>

          {/* 2. DOCUMENT CONTENT */}
          <section className="w-full py-12 sm:py-18 px-4 sm:px-8 bg-white">
            <div className="max-w-3xl mx-auto flex flex-col gap-10 text-left text-zinc-700 leading-relaxed text-sm sm:text-base">
              
              {/* Introduction */}
              <div>
                <p>
                  At <strong>Owlio Works Pvt. Ltd.</strong> (“Owlio Works”, “we”, “our”, or “us”), we respect your privacy and are committed to protecting the personal information you share with us through our website (<Link href="/" className="text-zinc-950 font-medium underline">owlioworks.com</Link>) and our digital services.
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
                  To exercise any of these rights, please contact us at <a href="mailto:owlioworks@gmail.com" className="text-zinc-950 font-semibold underline">owlioworks@gmail.com</a>.
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
                  <p><strong>Owlio Works Pvt. Ltd.</strong></p>
                  <p>Email: <a href="mailto:owlioworks@gmail.com" className="text-zinc-950 font-semibold underline">owlioworks@gmail.com</a></p>
                  <p>Location: Saket, New Delhi - 110062, Delhi, India</p>
                </div>
              </div>

            </div>
          </section>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
