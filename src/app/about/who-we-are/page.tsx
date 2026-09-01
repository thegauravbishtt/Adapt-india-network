"use client";

import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { LanguageProvider } from "../../../context/LanguageContext";
import Link from "next/link";

export default function WhoWeArePage() {
  const [activePodTab, setActivePodTab] = useState<"engineering" | "design" | "growth" | "devops">("engineering");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pods = {
    engineering: {
      title: "Full-Stack Software Engineering Pod",
      role: "Architecture & Distributed Systems",
      badge: "Core Engineering",
      desc: "Composed solely of senior and principal full-stack engineers who have built high-concurrency microservices, real-time web applications, and resilient enterprise backends.",
      stack: ["Next.js 16 (Turbopack)", "TypeScript Strict Mode", "Go / Python / Node.js", "PostgreSQL & Redis", "GraphQL & REST APIs"],
      metric: "< 45ms P95 API Latency",
    },
    design: {
      title: "Product Experience & UI/UX Design Pod",
      role: "Human-Centered Design Systems",
      badge: "Visual & Experience",
      desc: "Architecting pixel-perfect design systems, interactive prototypes, and conversion-optimized user flows that elevate brand equity and maximize buyer trust.",
      stack: ["Figma Token Systems", "WCAG 2.1 AAA Contrast", "60fps Micro-Animations", "Interactive Prototypes", "Design-to-Code Handoff"],
      metric: "100% Tokenized Consistency",
    },
    growth: {
      title: "Performance Media & Growth Pod",
      role: "Algorithmic Paid Acquisition & SEO",
      badge: "Revenue & Marketing",
      desc: "Specialists in precision Google Ads bidding, Meta Dynamic Creative Testing (DCT), server-side CAPI telemetry, and semantic search engine dominance.",
      stack: ["Google Ads PMax & Search", "Meta CAPI & DCT Testing", "SurferSEO Entity Mapping", "GA4 / Northbeam Multi-Touch", "CRO Funnel A/B Testing"],
      metric: "4.2x Average Client ROAS",
    },
    devops: {
      title: "Cloud Infrastructure & SRE Pod",
      role: "High-Availability & Zero-Downtime Ops",
      badge: "Infrastructure & Security",
      desc: "Engineers managing auto-scaling Kubernetes clusters, multi-region cloud failovers, automated CI/CD pipelines, and enterprise-grade SOC2 security policies.",
      stack: ["Kubernetes & Docker", "AWS / Google Cloud / Vercel", "Terraform Infrastructure as Code", "Datadog / Prometheus APM", "Zero-Trust IAM & SSL"],
      metric: "99.99% Uptime SLA Guarantee",
    },
  };

  const faqs = [
    {
      q: "How is Owlio Works structured differently from a traditional agency?",
      a: "Traditional agencies sell you with their senior executives, then hand your account over to junior project managers and outsourced contractors. At Owlio Works, you work directly with dedicated pods of principal engineers, product designers, and growth architects with direct communication in Slack and GitHub.",
    },
    {
      q: "Who will actually write the code and design the product?",
      a: "All architecture, development, design, and marketing campaigns are created in-house by experienced senior professionals. We do not use third-party broker networks or unverified junior talent.",
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
                src="/team-photo.png"
                alt="Who We Are - Owlio Works"
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
                    // THE OWLIO IDENTITY &amp; MANIFESTO
                  </span>

                  {/* Compact Display Title */}
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-none mb-3 drop-shadow-md">
                    WHO WE ARE
                  </h1>

                  <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm">
                    A Senior Engineering &amp; Brand Studio Built for High-Velocity Scale. We bridge the gap between heavy enterprise engineering rigor and high-converting modern brand aesthetics.
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


          {/* 2. LIVE DEDICATED POD ARCHITECTURE SIMULATOR */}
          <section className="w-full bg-[#fafafb] text-black py-12 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-6xl mx-auto flex flex-col gap-10">
              
              <div className="flex flex-col items-start text-left max-w-3xl">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">
                  OUR INTERNAL STRUCTURE
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 font-display tracking-tight">
                  Dedicated Multi-Disciplinary Pods
                </h2>
                <p className="text-zinc-600 text-xs sm:text-sm mt-2">
                  When you partner with Owlio Works, you are assigned a dedicated senior pod tailored to your exact product requirements:
                </p>
              </div>

              {/* Interactive Pod Switcher */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: 4 Pod Buttons */}
                <div className="lg:col-span-4 flex flex-col gap-3 text-left">
                  {[
                    { id: "engineering", label: "01 Engineering Pod", role: "Full-Stack Architecture" },
                    { id: "design", label: "02 UI/UX Design Pod", role: "Product & Design Systems" },
                    { id: "growth", label: "03 Growth & Media Pod", role: "Ads, SEO & Conversion" },
                    { id: "devops", label: "04 Cloud & SRE Pod", role: "Infra, K8s & Security" },
                  ].map((tab) => {
                    const isActive = activePodTab === tab.id;
                    return (
                      <button
                        type="button"
                        key={tab.id}
                        onClick={() => setActivePodTab(tab.id as any)}
                        className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col gap-1 ${
                          isActive
                            ? "bg-white border-amber-300 shadow-md border-l-[4px] border-l-[#fbea3d]"
                            : "bg-white/70 border-zinc-200 hover:border-zinc-300"
                        }`}
                      >
                        <span className="text-xs sm:text-sm font-bold text-zinc-900 font-display">
                          {tab.label}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-500">
                          {tab.role}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Right: Pod Details Console */}
                <div className="lg:col-span-8 bg-[#0c0c0d] border border-zinc-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl flex flex-col justify-between min-h-[360px] text-left">
                  
                  {/* Console Header */}
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#fbea3d] animate-pulse"></span>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                        {pods[activePodTab].badge} // POD SPEC
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800">
                      {pods[activePodTab].metric}
                    </span>
                  </div>

                  {/* Main Details */}
                  <div className="flex flex-col gap-3 my-auto animate-fadeIn">
                    <h3 className="text-xl sm:text-2xl font-black font-display text-white">
                      {pods[activePodTab].title}
                    </h3>
                    <span className="text-xs font-mono text-[#fbea3d] font-bold">
                      {pods[activePodTab].role}
                    </span>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mt-1">
                      {pods[activePodTab].desc}
                    </p>

                    {/* Stack Matrix */}
                    <div className="pt-4 border-t border-zinc-800">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                        Core Tooling &amp; Stack:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {pods[activePodTab].stack.map((item, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-500 mt-4">
                    <span>Assigned Directly in Shared Slack</span>
                    <span className="text-emerald-400">● 100% In-House Staff</span>
                  </div>

                </div>

              </div>

            </div>
          </section>

          {/* 3. THE ORIGIN & PROBLEM WE SOLVE */}
          <section className="w-full bg-white text-black py-14 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Story */}
              <div className="lg:col-span-6 flex flex-col items-start text-left gap-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                  OUR GENESIS &amp; REASON FOR BEING
                </span>
                <h2 className="text-2xl sm:text-4xl font-black font-display text-zinc-900 tracking-tight leading-tight">
                  The Antidote to Traditional Slow Agency Retainers.
                </h2>
                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                  Most businesses face an impossible dilemma: hire slow, bloated agency networks with endless layers of account managers, or rely on disconnected freelancers who disappear when code breaks.
                </p>
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  Owlio Works was founded to solve this broken paradigm. We assemble elite, dedicated pods composed solely of principal full-stack engineers, senior UI/UX architects, and performance marketing veterans.
                </p>
                <div className="bg-[#fbea3d]/20 border border-amber-300/80 rounded-2xl p-4 text-xs sm:text-sm font-semibold text-zinc-900 leading-relaxed">
                  &ldquo;We don&apos;t build minimum viable products that crumble under load. We engineer robust digital engines designed to scale with your ambitions.&rdquo;
                </div>
              </div>

              {/* Right Column: Comparison Card */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6 sm:p-8 flex flex-col gap-4 text-left shadow-sm">
                  <div className="flex items-center gap-2 pb-2 border-b border-zinc-200">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#fbea3d] border border-black/20"></span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900">
                      Why Founders Choose Owlio Works
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-3 text-xs sm:text-sm text-zinc-800">
                    <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-zinc-200/80 shadow-2xs">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <div>
                        <strong className="block text-zinc-900">Direct Senior Access:</strong>
                        <span className="text-zinc-600 text-xs">Pair directly with senior engineers and designers in Slack and GitHub without account manager middlemen.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-zinc-200/80 shadow-2xs">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <div>
                        <strong className="block text-zinc-900">Zero Technical Debt:</strong>
                        <span className="text-zinc-600 text-xs">Strict TypeScript, automated CI/CD pipelines, modular design systems, and comprehensive unit tests.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-zinc-200/80 shadow-2xs">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <div>
                        <strong className="block text-zinc-900">100% Client Sovereignty:</strong>
                        <span className="text-zinc-600 text-xs">You own all Git repositories, Figma files, and cloud credentials from day one with zero lock-in.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* 4. 6 NON-NEGOTIABLE PRINCIPLES (BENTO GRID) */}
          <section className="w-full bg-[#fafafb] text-black py-14 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-6xl mx-auto flex flex-col gap-10 text-left">
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-1">
                    CULTURE &amp; ETHOS
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 font-display tracking-tight">
                    Our 6 Non-Negotiable Pillars
                  </h2>
                </div>
                <p className="text-zinc-600 text-xs sm:text-sm font-medium max-w-sm">
                  The engineering principles that govern every pull request, sprint demo, and campaign.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    num: "01",
                    title: "Architectural Integrity",
                    desc: "We write clean, modular, and maintainable software that scales effortlessly to millions of requests without fragile rewrites.",
                  },
                  {
                    num: "02",
                    title: "Radical Transparency",
                    desc: "Weekly sprint demos, real-time GitHub PR tracking, and transparent pricing with no hidden fees or hostage codebases.",
                  },
                  {
                    num: "03",
                    title: "Speed with Precision",
                    desc: "We move at Silicon Valley velocity without cutting corners on test coverage, accessibility standards (WCAG), or security.",
                  },
                  {
                    num: "04",
                    title: "Relentless Focus on ROI",
                    desc: "Aesthetics and clean code are only as good as the commercial outcomes they generate. We optimize for measurable revenue.",
                  },
                  {
                    num: "05",
                    title: "Complete Client IP Sovereignty",
                    desc: "You retain 100% intellectual property, repository access, and cloud credentials from the very first sprint commit.",
                  },
                  {
                    num: "06",
                    title: "Micro-Craftsmanship",
                    desc: "Sub-50ms API endpoints, zero layout shifts (CLS < 0.01), and buttery 60fps micro-interactions tailored for high conversion.",
                  },
                ].map((pillar, idx) => (
                  <div key={idx} className="bg-white border border-zinc-200 p-7 rounded-3xl shadow-sm flex flex-col justify-between gap-4 text-left hover:border-zinc-400 transition-all">
                    <div className="flex flex-col gap-2.5">
                      <span className="font-mono text-xs font-black text-[#e2ce1c] bg-zinc-900 px-2.5 py-0.5 rounded-md self-start">
                        {pillar.num}
                      </span>
                      <h3 className="text-lg font-bold font-display text-zinc-900 mt-1">
                        {pillar.title}
                      </h3>
                      <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* 5. FREQUENTLY ASKED QUESTIONS */}
          <section className="w-full bg-white text-black py-14 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
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
                      className="border border-zinc-200 rounded-2xl overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-5 bg-[#fafafb] hover:bg-zinc-100 flex items-center justify-between text-left font-bold text-zinc-900 text-sm sm:text-base cursor-pointer transition-colors"
                      >
                        <span>{faq.q}</span>
                        <span className="text-zinc-400 font-mono text-lg ml-2">
                          {isOpen ? "−" : "+"}
                        </span>
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
                READY TO SCALE WITH A TEAM OF SENIOR PROS?
              </h2>
              <p className="text-black/85 text-sm sm:text-base max-w-xl">
                Let&apos;s build software that outperforms and marketing campaigns that scale predictably. Schedule a direct consultation with our leadership.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/#contact"
                  className="bg-black text-[#fbea3d] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-zinc-900 transition-all shadow-lg hover:scale-105"
                >
                  Start a Project →
                </Link>
                <Link
                  href="/about/how-we-work"
                  className="bg-white/80 border border-black/20 text-black px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white transition-all shadow-sm"
                >
                  Explore How We Work →
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
