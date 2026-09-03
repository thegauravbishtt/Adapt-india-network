"use client";

import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { LanguageProvider } from "../../../context/LanguageContext";
import Link from "next/link";
import { ChevronDown, CheckCircle2, ArrowRight } from "lucide-react";

export default function WhoWeArePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How is Owlio Works structured differently from a traditional agency?",
      a: "Traditional agencies sell you with their senior executives, then hand your account over to junior project managers and outsourced contractors. At Owlio Works, you work directly with dedicated pods of principal engineers, product designers, and growth strategists with direct communication in Slack and GitHub.",
    },
    {
      q: "Who will actually write the code and design the product?",
      a: "All strategy, development, design, and marketing campaigns are created in-house by experienced senior professionals. We do not use third-party broker networks or unverified junior talent.",
    },
    {
      q: "How does codebase ownership and IP work?",
      a: "You retain 100% ownership of all source code, Figma design files, cloud infrastructure configurations, and advertising accounts from day one. There is zero vendor lock-in or proprietary hostage licensing.",
    },
    {
      q: "How do we communicate throughout the engagement?",
      a: "We operate with radical transparency. You join a dedicated private Slack channel with our engineering leads, receive automated staging preview URLs for each pull request, and review weekly live sprint demos every Friday.",
    },
  ];

  const pillars = [
    {
      number: "01",
      title: "Custom Craft, Zero Templates",
      description:
        "Every project is crafted from scratch to fit your exact business goals, brand identity, and performance benchmarks.",
    },
    {
      number: "02",
      title: "Direct Collaboration",
      description:
        "You work directly with the developers and designers building your product—no endless middlemen or account managers.",
    },
    {
      number: "03",
      title: "Clean, Maintainable Code",
      description:
        "We build on modern standards like Next.js, React, and TypeScript to ensure speed, SEO performance, and reliability.",
    },
    {
      number: "04",
      title: "Complete Ownership",
      description:
        "You retain 100% ownership of your source code, design files, and accounts from day one with zero lock-in.",
    },
  ];

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip relative w-full select-none">
        {/* Navigation */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-1 w-full">
          {/* 1. HERO BANNER (Compact, Sleek Service Background Banner) */}
          <section className="relative w-full text-white pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
            
            {/* Background Image with Dark Vignette & Gradient Overlays */}
            <div className="absolute inset-0 z-0">
              <img
                src="/banner-who-we-are.jpg"
                alt="Who We Are - Owlio Works"
                className="w-full h-full object-cover object-center scale-100 filter brightness-[0.75] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-black/40 z-10"></div>
            </div>

            {/* Top Row: Back to Home + Global Divider Line */}
            <div className="relative z-20 max-w-7xl mx-auto w-full mb-6 sm:mb-8">
              <div className="flex items-center justify-between gap-4 pb-3 sm:pb-4 border-b border-white/20">
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
                  <span className="px-3 py-0.5 rounded-full bg-black/60 border border-zinc-700/80 text-[#fbea3d] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                    // WHO WE ARE
                  </span>
                </div>
              </div>
            </div>

            {/* Center Content: Clean Title + Scroll Down Indicator */}
            <div className="relative z-20 max-w-7xl mx-auto w-full">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                <div className="flex flex-col items-start text-left max-w-3xl">
                  {/* Category Pill Tagline */}
                  <span className="font-mono text-xs font-extrabold tracking-widest text-[#fbea3d] uppercase mb-2 block">
                    // ABOUT OWLIO WORKS
                  </span>

                  {/* Compact Display Title */}
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-none mb-3 drop-shadow-md">
                    WHO WE ARE
                  </h1>

                  <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm">
                    We are an independent digital marketing and technology agency based in New Delhi, India. We design and build modern websites, applications, and digital growth systems for growing businesses.
                  </p>
                </div>

                {/* Right Side: Scroll Down Indicator */}
                <div className="hidden lg:flex items-center gap-3 text-zinc-400 font-mono text-xs font-bold uppercase tracking-wider select-none shrink-0 self-end lg:self-center">
                  <span>SCROLL DOWN</span>
                  <span className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-[#fbea3d] animate-bounce">
                    ↓
                  </span>
                </div>

              </div>
            </div>

          </section>

          {/* 2. OUR STORY & PHILOSOPHY (Clean & Human) */}
          <section className="w-full bg-white text-black py-14 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-100">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Story */}
              <div className="lg:col-span-6 flex flex-col items-start text-left gap-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                  OUR MISSION
                </span>
                <h2 className="text-2xl sm:text-4xl font-black font-display text-zinc-950 tracking-tight leading-tight">
                  Built by creators, designed for real business growth.
                </h2>
                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                  Too often, hiring an agency means paying for layers of middle management and waiting weeks for simple updates. We wanted to build something simpler and more effective.
                </p>
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  At Owlio Works, our clients work directly with the developers and designers who build their projects. We combine clean design, fast code, and honest communication to help your business stand out and succeed online.
                </p>

                <div className="mt-2 flex flex-col gap-2.5 text-xs sm:text-sm text-zinc-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-zinc-900 shrink-0" />
                    <span>Based in New Delhi, serving clients worldwide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-zinc-900 shrink-0" />
                    <span>Transparent pricing with clear milestones</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-zinc-900 shrink-0" />
                    <span>Dedicated post-launch support and maintenance</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Workspace Photo */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-zinc-200/90 shadow-md">
                  <img
                    src="/about-studio-desk.jpg"
                    alt="Owlio Works Team Collaboration"
                    className="w-full h-80 sm:h-96 object-cover object-center"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white text-left">
                    <p className="text-xs font-mono text-[#fbea3d] uppercase tracking-wider font-bold">
                      // AGENCY WORKSPACE
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-200 mt-0.5">
                      Hands-on collaboration between developers, designers, and founders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. FOUR CORE VALUES */}
          <section className="w-full bg-[#fafafb] text-black py-14 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200/80">
            <div className="max-w-6xl mx-auto flex flex-col gap-10 text-left">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-1">
                    OUR PRINCIPLES
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 font-display tracking-tight">
                    How We Approach Every Project
                  </h2>
                </div>
                <p className="text-zinc-600 text-xs sm:text-sm font-medium max-w-sm">
                  Simple, straightforward standards that ensure quality, speed, and long-term results.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-zinc-200/90 p-6 sm:p-8 rounded-2xl shadow-xs flex flex-col gap-3 text-left hover:border-zinc-400 transition-all"
                  >
                    <span className="text-xs font-mono font-bold text-zinc-900 bg-[#fbea3d] px-2.5 py-0.5 rounded-md self-start">
                      {pillar.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-zinc-950">
                      {pillar.title}
                    </h3>
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. AGENCY PHOTO GALLERY (Pinterest / Clean Aesthetic) */}
          <section className="w-full bg-white text-black py-14 sm:py-18 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-100">
            <div className="max-w-6xl mx-auto flex flex-col gap-8 text-left">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-1">
                  OUR ENVIRONMENT
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 font-display tracking-tight">
                  Inside Our Agency
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-2xs group">
                  <img
                    src="/about-studio-3.jpg"
                    alt="Design and strategy discussion"
                    className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-3.5 bg-white text-left">
                    <p className="text-xs font-bold text-zinc-900">Design &amp; Strategy</p>
                    <p className="text-[11px] text-zinc-500">Planning user flows &amp; modern interfaces</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-2xs group">
                  <img
                    src="/banner-cookies.jpg"
                    alt="Engineering and development setup"
                    className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-3.5 bg-white text-left">
                    <p className="text-xs font-bold text-zinc-900">Modern Engineering</p>
                    <p className="text-[11px] text-zinc-500">Fast, responsive Next.js &amp; React code</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-2xs group">
                  <img
                    src="/about-studio-1.jpg"
                    alt="Creative workspace environment"
                    className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-3.5 bg-white text-left">
                    <p className="text-xs font-bold text-zinc-900">Creative Focus</p>
                    <p className="text-[11px] text-zinc-500">A space built for focused, clean work</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. FREQUENTLY ASKED QUESTIONS (Preserved as requested) */}
          <section className="w-full bg-[#fafafb] text-black py-14 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-4xl mx-auto flex flex-col gap-10 text-left">
              <div className="flex flex-col items-start">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">
                  COMMON INQUIRIES
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 font-display tracking-tight">
                  Frequently Asked Questions About Owlio Works
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-zinc-200/90 rounded-2xl overflow-hidden bg-white transition-all shadow-2xs"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-5 hover:bg-zinc-50 flex items-center justify-between text-left font-bold text-zinc-900 text-sm sm:text-base cursor-pointer transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-zinc-900" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-5 bg-white text-zinc-600 text-xs sm:text-sm leading-relaxed border-t border-zinc-100 animate-fadeIn">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 6. CALL TO ACTION */}
          <section className="w-full bg-[#fbea3d] text-black py-14 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-black leading-tight uppercase">
                READY TO START YOUR NEXT PROJECT?
              </h2>
              <p className="text-black/85 text-sm sm:text-base max-w-xl">
                Let&apos;s build something great together. Reach out with your project details and we will get back to you with an honest timeline and estimate.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="bg-black text-[#fbea3d] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-zinc-900 transition-all shadow-lg hover:scale-105"
                >
                  Start a Project →
                </Link>
                <Link
                  href="/work"
                  className="bg-white/90 border border-black/20 text-black px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white transition-all shadow-sm"
                >
                  View Our Work →
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
