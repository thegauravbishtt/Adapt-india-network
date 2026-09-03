"use client";

import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { LanguageProvider } from "../../../context/LanguageContext";
import Link from "next/link";

export default function WhatWeDoPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "engineering" | "design" | "marketing" | "security">("all");

  const capabilities = [
    {
      category: "engineering",
      categoryLabel: "Engineering",
      title: "Enterprise Software & Cloud Platforms",
      desc: "Engineering high-load microservices, scalable distributed backends, and fault-tolerant SaaS systems.",
      href: "/services/enterprise-software",
      tags: ["Microservices", "Next.js", "Python/Go", "PostgreSQL"],
    },
    {
      category: "engineering",
      categoryLabel: "Engineering",
      title: "High-Performance Web Development",
      desc: "Ultra-fast headless websites and web applications built for peak SEO visibility and instant load times.",
      href: "/services/web-development",
      tags: ["TypeScript", "Tailwind CSS", "Edge Caching", "Lighthouse 100"],
    },
    {
      category: "engineering",
      categoryLabel: "Engineering",
      title: "Native & Cross-Platform Mobile Apps",
      desc: "Intuitive iOS and Android applications with offline sync, biometric security, and push notification systems.",
      href: "/services/app-development",
      tags: ["React Native", "Flutter", "iOS/Android", "Biometrics"],
    },
    {
      category: "engineering",
      categoryLabel: "Engineering",
      title: "Cloud Infrastructure & DevOps SRE",
      desc: "Zero-downtime Kubernetes deployments, multi-region failovers, and automated Terraform infrastructure.",
      href: "/services/cloud-devops",
      tags: ["Kubernetes", "AWS / GCP", "Terraform", "FinOps"],
    },
    {
      category: "design",
      categoryLabel: "Design",
      title: "Human-Centered UI/UX Design",
      desc: "Conversion-focused web apps, intuitive dashboards, and Figma tokenized component systems.",
      href: "/services/ui-ux-design",
      tags: ["Figma Systems", "Wireframing", "WCAG AAA", "User Testing"],
    },
    {
      category: "marketing",
      categoryLabel: "Marketing",
      title: "Technical SEO & Search Dominance",
      desc: "Googlebot crawler optimization, semantic JSON-LD schema, and programmatic content structure.",
      href: "/services/seo-services",
      tags: ["Ahrefs", "Schema.org", "Core Web Vitals", "Crawl Budget"],
    },
    {
      category: "marketing",
      categoryLabel: "Marketing",
      title: "Precision Google Ads & Bidding",
      desc: "High-intent Performance Max campaigns, negative keyword matrices, and server-side conversion tracking.",
      href: "/services/google-ads",
      tags: ["PMax", "Search Alpha", "Shopping SKU", "Bot Shield"],
    },
    {
      category: "marketing",
      categoryLabel: "Marketing",
      title: "Strategic Meta Ads & UGC Scaling",
      desc: "Dynamic Creative Testing (DCT), video scroll-stoppers, and Conversions API (CAPI) infrastructure.",
      href: "/services/meta-ads",
      tags: ["Meta CAPI", "Advantage+", "DCT Testing", "UGC Scripts"],
    },
    {
      category: "marketing",
      categoryLabel: "Marketing",
      title: "Social Media & Community Engines",
      desc: "Short-form video production (Reels/TikTok), editorial carousels, and proactive 24/7 community moderation.",
      href: "/services/social-media",
      tags: ["Reels/Shorts", "Editorial Decks", "Influencers", "Brand Buzz"],
    },
    {
      category: "marketing",
      categoryLabel: "Marketing",
      title: "Authority Content Writing & Hubs",
      desc: "Deep research articles, executive thought leadership, and high-converting commercial copywriting.",
      href: "/services/content-marketing",
      tags: ["SurferSEO", "Whitepapers", "Case Studies", "Lead Hooks"],
    },
    {
      category: "marketing",
      categoryLabel: "Marketing",
      title: "Local SEO & Google Map 3-Pack",
      desc: "GMB optimization, 80+ citation synchronizations, and automated geo-targeted customer review capture.",
      href: "/services/local-seo-gmb",
      tags: ["Google Maps", "Citations", "Review SMS", "Local 3-Pack"],
    },
    {
      category: "security",
      categoryLabel: "Security",
      title: "Cybersecurity & Systems Hardening",
      desc: "Zero-Trust IAM, vulnerability assessments, automated penetration audits, and SOC2 compliance governance.",
      href: "/services/cybersecurity",
      tags: ["Zero-Trust", "Pen Testing", "SOC2 Compliance", "Cloud Guard"],
    },
  ];

  const filtered = activeCategory === "all" ? capabilities : capabilities.filter((c) => c.category === activeCategory);

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
                src="/banner-what-we-do.jpg"
                alt="What We Do - Owlio Works Capabilities"
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
                    // WHAT WE DO
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
                    // END-TO-END CAPABILITY MATRIX
                  </span>

                  {/* Compact Display Title */}
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-none mb-3 drop-shadow-md">
                    WHAT WE DO ?
                  </h1>

                  <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm">
                    Full-Spectrum Solutions Across Code, Cloud, Design &amp; Performance Growth. Whether launching a complex SaaS product from zero or scaling paid acquisition, we execute with precision.
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

          {/* 2. CAPABILITIES GRID & FILTER BAR */}
          <section className="w-full bg-white text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-6">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-1">
                    SERVICES DIRECTORY
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 font-display tracking-tight">
                    Explore Our Service Capabilities ({filtered.length})
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-2 bg-zinc-100 p-1.5 rounded-2xl border border-zinc-200/80">
                  {[
                    { id: "all", label: "All Disciplines" },
                    { id: "engineering", label: "Engineering" },
                    { id: "design", label: "Design" },
                    { id: "marketing", label: "Marketing" },
                    { id: "security", label: "Security" },
                  ].map((tab) => (
                    <button
                      type="button"
                      key={tab.id}
                      onClick={() => setActiveCategory(tab.id as any)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        activeCategory === tab.id
                          ? "bg-black text-[#fbea3d] shadow-sm"
                          : "text-zinc-600 hover:text-black hover:bg-white/60"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
                {filtered.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="bg-[#fafafb] border border-zinc-200/90 p-7 rounded-3xl hover:border-zinc-400 hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between gap-6 group cursor-pointer"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400">
                          {item.categoryLabel}
                        </span>
                        <span className="text-zinc-400 group-hover:text-black group-hover:translate-x-1 transition-all">
                          →
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-zinc-900 font-display group-hover:text-black transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-200/70">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md bg-zinc-200/70 text-zinc-700 font-mono text-[10px] font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </section>

          {/* 3. CALL TO ACTION */}
          <section className="w-full bg-[#fbea3d] text-black py-16 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-black leading-tight uppercase">
                HAVE A PROJECT IN MIND? LET&apos;S TALK GROWTH STRATEGY.
              </h2>
              <p className="text-black/85 text-sm sm:text-base max-w-xl">
                Whether you need a full-stack squad or specialized performance growth marketing, our team is ready to deliver.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="bg-black text-[#fbea3d] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-zinc-900 transition-all shadow-lg hover:scale-105"
                >
                  Request a Free Proposal →
                </Link>
                <Link
                  href="/about/who-we-are"
                  className="bg-white/80 border border-black/20 text-black px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white transition-all shadow-sm"
                >
                  Meet Who We Are →
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
