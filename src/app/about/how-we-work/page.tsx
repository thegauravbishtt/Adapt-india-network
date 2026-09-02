"use client";

import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { LanguageProvider } from "../../../context/LanguageContext";
import Link from "next/link";

export default function HowWeWorkPage() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: "01",
      title: "Discovery, Scoping & Architecture Blueprint",
      tagline: "Weeks 1 - 2: Laying an Unshakeable Foundation",
      desc: "Before a single line of code is written, our principal architects analyze your technical requirements, API contracts, target users, and commercial objectives to deliver a comprehensive system design document (SDD).",
      deliverables: ["System Design Documents", "Figma Wireframes & User Flows", "Database Schema & API Specs", "Sprint Milestone Roadmap"],
      telemetry: "Scoping Accuracy: 98% · Zero Scope Creep",
    },
    {
      num: "02",
      title: "Agile Sprint Cadence & Staging Deployments",
      tagline: "Weekly Sprints: Continuous Visibility & Velocity",
      desc: "We operate in transparent 1-week or 2-week agile sprints. You receive staging preview URLs for every pull request, direct Slack pairing with senior engineers, and interactive Friday video demonstrations.",
      deliverables: ["Live Staging Preview URLs", "GitHub Pull Request Audits", "Shared Dedicated Slack Channel", "Weekly Video Sprint Demos"],
      telemetry: "Average PR Cycle Time: < 24 Hours",
    },
    {
      num: "03",
      title: "Automated QA, Security Hardening & WCAG",
      tagline: "Rigorous Testing: Eliminating Fragile Code",
      desc: "Every release passes automated unit, integration, and end-to-end test suites. We perform penetration checks, test across mobile viewports, and audit for WCAG 2.1 AAA accessibility compliance.",
      deliverables: ["Automated E2E Test Suites", "Lighthouse 95+ Performance Audit", "WCAG AAA Accessibility Verification", "Cloud IAM & Security Policies"],
      telemetry: "Bug Escape Rate: < 0.2% in Production",
    },
    {
      num: "04",
      title: "Zero-Downtime Rollout & 24/7 SRE Monitoring",
      tagline: "Production Launch & Long-Term Resilience",
      desc: "We execute canary or blue-green zero-downtime deployments. Post-launch, our automated APM telemetry and observability dashboards continuously track API latencies, server loads, and error rates.",
      deliverables: ["Zero-Downtime Deployment Pipeline", "24/7 APM Observability Dashboard", "Disaster Recovery Playbooks", "Dedicated SLA Governance"],
      telemetry: "99.99% Uptime Guarantee · Edge Cached",
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
                src="/studio-photo.png"
                alt="How We Work - Owlio Works"
                className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-[1.15]"
              />
              {/* Dark Studio Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-[#0c0c0d] z-10"></div>
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px] z-10"></div>
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
                  {/* Category Pill Tagline */}
                  <span className="font-mono text-xs font-extrabold tracking-widest text-[#fbea3d] uppercase mb-2 block">
                    // THE OWLIO OPERATING MODEL
                  </span>

                  {/* Compact Display Title */}
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-none mb-3 drop-shadow-md">
                    HOW WE WORK
                  </h1>

                  <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm">
                    Engineered for Velocity. Built for Uncompromising Quality. Explore our transparent agile delivery workflows, automated CI/CD pipelines, and dedicated senior engineering pods.
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

          {/* 2. INTERACTIVE 4-PHASE DELIVERY FRAMEWORK */}
          <section className="w-full bg-white text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
              
              <div className="flex flex-col items-start text-left max-w-3xl">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                  OUR END-TO-END EXECUTION CYCLE
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 font-display tracking-tight">
                  Click through our 4 execution phases:
                </h2>
              </div>

              {/* 2-Column Interactive Process Simulator */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left Column: 4 Selectable Phase Tabs */}
                <div className="lg:col-span-5 flex flex-col gap-3.5 text-left">
                  {steps.map((step, idx) => {
                    const isActive = activeStep === idx;
                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col gap-1 relative ${
                          isActive
                            ? "bg-white border-amber-300 shadow-md border-l-[4px] border-l-[#fbea3d]"
                            : "bg-[#fafafb] border-zinc-200 hover:border-zinc-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-black text-[#e2ce1c] bg-zinc-900 px-2 py-0.5 rounded-md">
                            PHASE {step.num}
                          </span>
                          {isActive && (
                            <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              ACTIVE STAGE
                            </span>
                          )}
                        </div>
                        <h3 className="text-sm sm:text-base font-bold font-display text-zinc-900 mt-1">
                          {step.title}
                        </h3>
                        <p className="text-zinc-500 text-xs font-mono">
                          {step.tagline}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Right Column: Deep-Dive Details Monitor */}
                <div className="lg:col-span-7 bg-[#0c0c0d] border border-zinc-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl flex flex-col justify-between min-h-[420px] text-left">
                  
                  {/* Monitor Top Bar */}
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#fbea3d] animate-pulse"></span>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                        PHASE {steps[activeStep].num} // DEEP DIVE
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800">
                      {steps[activeStep].telemetry}
                    </span>
                  </div>

                  {/* Main Content */}
                  <div className="flex flex-col gap-4 animate-fadeIn my-auto">
                    <h4 className="text-xl sm:text-2xl font-black font-display text-white">
                      {steps[activeStep].title}
                    </h4>
                    
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                      {steps[activeStep].desc}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="pt-4 border-t border-zinc-800/80">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#fbea3d] block mb-2.5">
                        Key Deliverables in this Phase:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {steps[activeStep].deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl flex items-center gap-2 text-xs text-zinc-200">
                            <span className="text-[#fbea3d] font-bold">✓</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Monitor Footer */}
                  <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-500 mt-4">
                    <span>Weekly Sprint Velocity: Optimal</span>
                    <span className="text-emerald-400">● 100% Client Git Visibility</span>
                  </div>

                </div>

              </div>

            </div>
          </section>

          {/* 3. TRANSPARENCY GUARANTEES */}
          <section className="w-full bg-[#fafafb] text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-6xl mx-auto flex flex-col gap-12 text-left">
              
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-1">
                  CLIENT COMMITMENT
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 font-display tracking-tight">
                  The 4 Owlio Transparency Guarantees
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "100% Code Ownership",
                    desc: "You own all IP, source repositories, design files, and cloud infrastructure keys from day one.",
                  },
                  {
                    title: "Zero Junior Outsourcing",
                    desc: "Every line of code and user interface is crafted in-house by experienced principal practitioners.",
                  },
                  {
                    title: "Direct Slack Pairing",
                    desc: "No middlemen or game of telephone. You communicate directly with the engineers building your product.",
                  },
                  {
                    title: "Predictable Weekly Pricing",
                    desc: "Clear sprint budgets with transparent time allocation, zero hidden fees, and flexible terms.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-zinc-200 p-6 rounded-3xl shadow-sm flex flex-col gap-2.5">
                    <span className="text-xl">🛡️</span>
                    <h3 className="text-base font-bold text-zinc-900 font-display">
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
          <section className="w-full bg-[#fbea3d] text-black py-16 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-black leading-tight uppercase">
                EXPERIENCE A HIGHER STANDARD OF DELIVERY
              </h2>
              <p className="text-black/85 text-sm sm:text-base max-w-xl">
                Ready to accelerate your technical roadmap with an agile team that delivers on time and on budget? Let&apos;s talk.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="bg-black text-[#fbea3d] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-zinc-900 transition-all shadow-lg hover:scale-105"
                >
                  Schedule an Architecture Call →
                </Link>
                <Link
                  href="/about/what-we-do"
                  className="bg-white/80 border border-black/20 text-black px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white transition-all shadow-sm"
                >
                  See What We Do →
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
