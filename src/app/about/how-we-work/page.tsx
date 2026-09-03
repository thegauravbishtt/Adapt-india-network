"use client";

import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { LanguageProvider } from "../../../context/LanguageContext";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function HowWeWorkPage() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: "01",
      title: "Discovery & Planning",
      tagline: "Stage 1: Defining Scope & Strategy",
      desc: "We begin by understanding your business goals, target audience, and functional requirements. We create initial wireframes, agree on deliverables, and map out clear project milestones.",
      deliverables: [
        "Project Scope & Timeline",
        "System Framework & Tech Stack",
        "Initial Wireframes & User Flows",
        "Clear Fixed Quote",
      ],
      highlight: "Clear Roadmap",
    },
    {
      num: "02",
      title: "Design & Prototyping",
      tagline: "Stage 2: Crafting the Look & Feel",
      desc: "Our design team creates custom UI/UX mockups and interactive prototypes in Figma. We review the designs with you to refine every layout, typography choice, and user interaction before writing code.",
      deliverables: [
        "Full Figma Design File",
        "Interactive Clickable Prototype",
        "Mobile & Desktop Breakpoints",
        "Brand Design System",
      ],
      highlight: "Custom UI/UX",
    },
    {
      num: "03",
      title: "Development & Staging",
      tagline: "Stage 3: Building Clean, Fast Code",
      desc: "We build your project using modern, performant technologies like Next.js, React, and TypeScript. You receive private staging links to test and review progress in real time as features are completed.",
      deliverables: [
        "Clean, Maintainable Codebase",
        "Live Staging Preview URLs",
        "Regular Progress Demos",
        "Direct Slack / WhatsApp Pairing",
      ],
      highlight: "Live Staging",
    },
    {
      num: "04",
      title: "Testing, Launch & Support",
      tagline: "Stage 4: Quality Check & Go-Live",
      desc: "Before launch, we conduct thorough cross-browser testing, SEO audits, and speed optimizations. Once approved, we handle domain configuration and provide 30 days of included support.",
      deliverables: [
        "Cross-Device QA & Speed Audit",
        "Production Domain Launch",
        "100% Code & Asset Handover",
        "30-Day Included Warranty",
      ],
      highlight: "30-Day Support",
    },
  ];

  const guarantees = [
    {
      title: "Direct Communication",
      desc: "No endless middlemen or account managers. You communicate directly with the designers and developers building your project.",
    },
    {
      title: "Milestone-Based Payments",
      desc: "Clear and transparent payment schedules tied to agreed project deliverables. No hidden fees or unexpected costs.",
    },
    {
      title: "100% Code Ownership",
      desc: "You retain full ownership of all source code, Figma design files, and hosting credentials from the day of completion.",
    },
    {
      title: "Post-Launch Warranty",
      desc: "Every project includes 30 days of free post-launch support and bug fixing to ensure everything runs smoothly in production.",
    },
  ];

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip relative w-full select-none">
        {/* Navigation */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-1 w-full">
          {/* 1. HERO BANNER (Compact, Sleek Standard Layout) */}
          <section className="relative w-full text-white pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
            {/* Background Image with Dark Vignette & Gradient Overlays */}
            <div className="absolute inset-0 z-0">
              <img
                src="/banner-process.jpg"
                alt="How We Work - Owlio Works Process"
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
                    // HOW WE WORK
                  </span>
                </div>
              </div>
            </div>

            {/* Center Content: Clean Title + Scroll Down Indicator */}
            <div className="relative z-20 max-w-7xl mx-auto w-full">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex flex-col items-start text-left max-w-3xl">
                  <span className="font-mono text-xs font-extrabold tracking-widest text-[#fbea3d] uppercase mb-2 block">
                    // OUR PROCESS &amp; WORKFLOW
                  </span>

                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-none mb-3 drop-shadow-md">
                    HOW WE WORK
                  </h1>

                  <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm">
                    A clear, transparent process from initial discovery to final launch. We prioritize honest timelines, regular staging updates, and direct communication.
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

          {/* 2. INTERACTIVE 4-PHASE DELIVERY FRAMEWORK (Clean & Human) */}
          <section className="w-full bg-white text-black py-14 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-6xl mx-auto flex flex-col gap-10">
              <div className="flex flex-col items-start text-left max-w-3xl">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">
                  OUR STEP-BY-STEP PROCESS
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 font-display tracking-tight">
                  From initial concept to live deployment
                </h2>
                <p className="text-zinc-600 text-xs sm:text-sm mt-1">
                  Click through the phases below to see how we manage and execute projects:
                </p>
              </div>

              {/* 2-Column Interactive Process */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Left Column: 4 Selectable Phase Tabs */}
                <div className="lg:col-span-5 flex flex-col gap-3 text-left">
                  {steps.map((step, idx) => {
                    const isActive = activeStep === idx;
                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col gap-1 relative ${
                          isActive
                            ? "bg-white border-zinc-400 shadow-sm border-l-[4px] border-l-black"
                            : "bg-[#fafafb] border-zinc-200 hover:border-zinc-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-black text-zinc-900 bg-[#fbea3d] px-2 py-0.5 rounded-md">
                            STEP {step.num}
                          </span>
                          {isActive && (
                            <span className="text-[10px] font-mono text-zinc-700 font-bold bg-zinc-100 px-2 py-0.5 rounded-full">
                              VIEWING
                            </span>
                          )}
                        </div>
                        <h3 className="text-sm sm:text-base font-bold font-display text-zinc-950 mt-1">
                          {step.title}
                        </h3>
                        <p className="text-zinc-500 text-xs font-normal">
                          {step.tagline}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Right Column: Step Details Card */}
                <div className="lg:col-span-7 bg-[#fafafb] border border-zinc-200/90 rounded-3xl p-6 sm:p-8 text-zinc-900 shadow-xs flex flex-col justify-between min-h-[380px] text-left">
                  <div className="flex items-center justify-between border-b border-zinc-200 pb-3 mb-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500">
                      STEP {steps[activeStep].num} // OVERVIEW
                    </span>
                    <span className="text-[11px] font-mono text-zinc-900 bg-[#fbea3d] font-bold px-2.5 py-0.5 rounded-full">
                      {steps[activeStep].highlight}
                    </span>
                  </div>

                  <div className="flex flex-col gap-4 my-auto animate-fadeIn">
                    <h4 className="text-xl sm:text-2xl font-black font-display text-zinc-950">
                      {steps[activeStep].title}
                    </h4>

                    <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed">
                      {steps[activeStep].desc}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="pt-4 border-t border-zinc-200">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-700 block mb-2.5">
                        What to expect in this step:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {steps[activeStep].deliverables.map((item, dIdx) => (
                          <div
                            key={dIdx}
                            className="bg-white border border-zinc-200 p-2.5 rounded-xl flex items-center gap-2 text-xs text-zinc-800 shadow-2xs"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-200 flex items-center justify-between text-[11px] font-mono text-zinc-500 mt-4">
                    <span>Direct review &amp; feedback</span>
                    <span className="text-zinc-900 font-semibold">● 100% Transparent</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. WORKING GUARANTEES (Clean & Simple) */}
          <section className="w-full bg-[#fafafb] text-black py-14 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-6xl mx-auto flex flex-col gap-10 text-left">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-1">
                  OUR COMMITMENT
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 font-display tracking-tight">
                  Our Standards of Working Together
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {guarantees.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-zinc-200/90 p-6 rounded-2xl shadow-xs flex flex-col gap-2.5"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#fbea3d] text-zinc-900 font-mono font-black text-xs flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-zinc-950 font-display mt-1">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. CALL TO ACTION */}
          <section className="w-full bg-[#fbea3d] text-black py-14 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-black leading-tight uppercase">
                READY TO BRING YOUR PROJECT TO LIFE?
              </h2>
              <p className="text-black/85 text-sm sm:text-base max-w-xl">
                Tell us about your requirements, and we will prepare a clear milestone roadmap and estimate.
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
