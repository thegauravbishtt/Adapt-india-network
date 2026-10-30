"use client";

import UpgradeCTA from "@/components/UpgradeCTA";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import Link from "next/link";
import type { BlogPost } from "@/lib/db";
import { seedArticles } from "@/data/articles";

// Built-in articles shown until the admin blog store has posts.
const DEFAULT_ARTICLES: BlogPost[] = seedArticles;

export default function BlogPage() {
  const [articles, setArticles] = useState<BlogPost[]>(DEFAULT_ARTICLES);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("/api/admin/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.blogs && data.blogs.length > 0) {
          setArticles(data.blogs);
        }
      })
      .catch(() => {
        // Use default
      });
  }, []);

  const matchesCategory = (articleCat: string, targetId: string): boolean => {
    const aCat = (articleCat || "").toLowerCase();
    const tId = targetId.toLowerCase();

    if (tId === "all") return true;

    if (tId === "performance & advertising") {
      return (
        aCat.includes("performance") ||
        aCat.includes("advertising") ||
        aCat.includes("ads") ||
        aCat.includes("conversion")
      );
    }

    if (tId === "social media") {
      return aCat.includes("social");
    }

    if (tId === "web/app design & development") {
      return (
        aCat.includes("web") ||
        aCat.includes("app") ||
        aCat.includes("design") ||
        aCat.includes("development") ||
        aCat.includes("strategy")
      );
    }

    if (tId === "content") {
      return aCat.includes("content") || aCat.includes("editorial");
    }

    if (tId === "email & automation") {
      return aCat.includes("email") || aCat.includes("automation");
    }

    if (tId === "cloud & devops") {
      return aCat.includes("cloud") || aCat.includes("devops") || aCat.includes("infra");
    }

    if (tId === "seo") {
      return aCat.includes("seo") || aCat.includes("search") || aCat.includes("geo");
    }

    if (tId === "industries") {
      return (
        aCat.includes("industr") ||
        aCat.includes("d2c") ||
        aCat.includes("commerce") ||
        aCat.includes("saas") ||
        aCat.includes("health") ||
        aCat.includes("hospital") ||
        aCat.includes("estate") ||
        aCat.includes("food") ||
        aCat.includes("educat") ||
        aCat.includes("fintech")
      );
    }

    return aCat === tId;
  };

  const getCount = (id: string) => {
    return articles.filter((a) => matchesCategory(a.category, id)).length;
  };

  // Filters built from the categories of the articles actually shown
  const pillFilters = [
    { id: "all", label: "All", count: articles.length },
    ...Array.from(new Set(articles.map((a) => a.category).filter(Boolean))).map((cat) => ({
      id: cat,
      label: cat,
      count: getCount(cat),
    })),
  ];

  const filteredArticles = articles.filter((article) =>
    matchesCategory(article.category, selectedCategory)
  );

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip relative w-full select-none selection:bg-[#fac917] selection:text-black">
        <Navbar />

        {/* 1. HERO BANNER (Full-Bleed Photographic Background - Sleek Compact Ribbon) */}
        <section className="relative w-full text-white pt-28 sm:pt-32 lg:pt-36 pb-7 sm:pb-9 lg:pb-10 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
          
          {/* Full Background Image with Directional Dark Gradient */}
          <div className="absolute inset-0 z-0">
            <img
              src="/banner-articles-enterprise.jpg"
              alt="Adapt India Networks Telecom Research Studio & Engineering Lab"
              className="w-full h-full object-cover object-center scale-100 filter brightness-[0.72] contrast-[1.10]"
            />
            {/* Directional gradient to keep photo vibrant on right while text is super legible on left */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/35 z-10"></div>
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
                  // ARTICLES &amp; INSIGHTS
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
                  // TELECOM WHITE PAPERS &amp; ARCHITECTURAL GUIDES
                </span>

                {/* Display Title */}
                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white font-display tracking-tight uppercase leading-[1.1] mb-2 drop-shadow-md">
                  ENTERPRISE INSIGHTS
                </h1>

                <p className="text-zinc-200 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm mb-4">
                  Technical deep dives, carrier SLA benchmarks, and architectural guides on SD-WAN, dedicated leased lines, MPLS routing, and corporate cyber defense by Adapt India network engineers.
                </p>

                {/* Quick Topic Badges */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-3 py-1 bg-black/50 border border-white/20 rounded-md font-semibold text-zinc-200 backdrop-blur-sm">#SD-WAN</span>
                  <span className="px-3 py-1 bg-black/50 border border-white/20 rounded-md font-semibold text-zinc-200 backdrop-blur-sm">#Internet Leased Lines</span>
                  <span className="px-3 py-1 bg-black/50 border border-white/20 rounded-md font-semibold text-zinc-200 backdrop-blur-sm">#Carrier SLAs</span>
                  <span className="px-3 py-1 bg-black/50 border border-white/20 rounded-md font-semibold text-zinc-200 backdrop-blur-sm">#Zero-Trust</span>
                </div>
              </div>

              {/* Right Side: Scroll Down Indicator */}
              <div className="hidden lg:flex items-center gap-3 text-zinc-300 font-mono text-xs font-bold uppercase tracking-wider select-none shrink-0 self-end">
                <span>SCROLL DOWN</span>
                <a
                  href="#articles-feed"
                  className="w-9 h-9 rounded-full border border-white/30 bg-black/40 flex items-center justify-center text-[#38bdf8] hover:bg-black/70 hover:border-white transition-all animate-bounce"
                >
                  ↓
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <main className="flex-grow py-12 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20 max-w-7xl mx-auto w-full">

          {/* Exact Pill Toggle Filters Bar */}
          <div className="mb-10 sm:mb-12 flex flex-wrap items-center gap-2 sm:gap-2.5">
            {pillFilters.map((pill) => {
              const isActive = selectedCategory === pill.id;

              return (
                <button
                  key={pill.id}
                  onClick={() => setSelectedCategory(pill.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs transition-all cursor-pointer shadow-2xs ${
                    isActive
                      ? "bg-black text-white font-bold border border-black shadow-xs"
                      : "bg-white border border-zinc-200 text-zinc-800 hover:border-zinc-400 font-medium"
                  }`}
                >
                  <span>{pill.label}</span>
                  <span
                    className={`text-[11px] font-semibold ${
                      isActive ? "text-zinc-300" : "text-zinc-400"
                    }`}
                  >
                    {pill.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredArticles.length === 0 ? (
              <div className="col-span-full py-16 text-center text-zinc-500 bg-zinc-50 rounded-3xl border border-zinc-200 p-8">
                <p className="text-base font-semibold text-zinc-800">No articles found in this category.</p>
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="mt-3 px-4 py-2 bg-black text-white rounded-full text-xs font-bold hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  View All Articles
                </button>
              </div>
            ) : (
              filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.slug || article.id}`}
                  className="flex flex-col rounded-3xl overflow-hidden border border-zinc-200 bg-white hover:border-zinc-400 hover:shadow-xl transition-all duration-300 group cursor-pointer block"
                >
                  <article className="flex flex-col h-full justify-between">
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span className="text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-[#fac917] text-black shadow-2xs">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center justify-between text-xs text-zinc-500 font-medium mb-3">
                          <span className="font-semibold text-zinc-700">{article.category}</span>
                          <span>{article.readTime}</span>
                        </div>
                        <h2 className="text-xl font-bold text-zinc-950 leading-snug group-hover:text-black transition-colors mb-3 font-display">
                          {article.title}
                        </h2>
                        <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed mb-4">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 group-hover:text-black group-hover:translate-x-1 transition-all pt-2 border-t border-zinc-100">
                        <span>Read Article</span>
                        <span>→</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))
            )}
          </div>
        </main>

        <UpgradeCTA title="Planning a network upgrade?" text="Turn what you've read into a plan. We'll check feasibility at your address and share options." />
        <NewsletterSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
