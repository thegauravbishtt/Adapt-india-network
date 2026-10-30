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
import { Network, ShieldCheck, Mail, Phone } from "lucide-react";

export default function ArticlesPage() {
  const [articles, setArticles] = useState<BlogPost[]>(seedArticles);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/api/admin/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.blogs && Array.isArray(data.blogs) && data.blogs.length > 0) {
          setArticles(data.blogs);
        }
      })
      .catch(() => {});
  }, []);

  const categories = [
    "All",
    ...Array.from(new Set(articles.map((a) => a.category).filter(Boolean))),
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesCat =
      selectedCategory === "All" ||
      article.category?.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  });

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip relative w-full select-none font-sans">
        <Navbar />

        {/* 1. HERO BANNER */}
        <section className="relative w-full text-white pt-28 sm:pt-32 lg:pt-36 pb-7 sm:pb-9 lg:pb-10 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
          <div className="absolute inset-0 z-0">
            <img
              src="/banner-network-matrix.jpg"
              alt="Adapt India Network Articles"
              className="w-full h-full object-cover object-center scale-100 filter brightness-[0.70] contrast-[1.10]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/35 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-black/45 z-10" />
          </div>

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
                <span className="px-3 py-0.5 rounded-full bg-black/60 border border-red-500/40 text-[#E31E24] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                  // ARTICLES &amp; INSIGHTS
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-20 max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
              <div className="flex flex-col items-start text-left max-w-3xl">
                <span className="font-mono text-xs font-extrabold tracking-widest text-[#E31E24] uppercase mb-1.5 block">
                  // KNOWLEDGE BASE &amp; WHITEPAPERS
                </span>

                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white font-display tracking-tight uppercase leading-[1.1] mb-2 drop-shadow-md">
                  ARTICLES &amp; INSIGHTS
                </h1>

                <p className="text-zinc-200 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm mb-4">
                  Enterprise networking perspectives, carrier SLA engineering, SD-WAN architecture, and 24/7 NOC operational frameworks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. MAIN CONTENT */}
        <main className="flex-1 w-full bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {filteredArticles.map((article) => (
                  <article
                    key={article.id}
                    className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col group"
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-100 relative">
                      <img
                        src={article.image || "/banner-network-matrix.jpg"}
                        alt={article.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                      <div>
                        <span className="text-[11px] font-mono text-[#E31E24] font-bold uppercase block mb-1">
                          {article.category}
                        </span>
                        <h2 className="text-lg font-bold text-zinc-900 group-hover:text-[#E31E24] transition-colors leading-snug mb-2">
                          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                        </h2>
                        <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                        <span className="text-[11px] text-zinc-500">{article.readTime || "5 min read"}</span>
                        <Link href={`/blog/${article.slug}`} className="text-xs font-bold text-[#E31E24]">
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="py-16 px-6 sm:px-12 rounded-3xl bg-[#fafafb] border border-zinc-200/90 flex flex-col items-center text-center shadow-xs">
                <div className="w-16 h-16 rounded-2xl bg-zinc-100 border border-zinc-200 text-[#E31E24] flex items-center justify-center mb-5">
                  <Network className="w-8 h-8" />
                </div>
                <span className="font-mono text-xs font-bold text-[#E31E24] uppercase tracking-wider mb-2">
                  // ENTERPRISE TECHNICAL PUBLICATIONS
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight mb-3">
                  Technical Documentation &amp; Insights
                </h2>
                <p className="text-zinc-600 text-xs sm:text-sm max-w-lg leading-relaxed mb-6">
                  Our network engineering team is currently updating our technical whitepapers, SLA compliance reports, and SD-WAN topology briefs.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/services"
                    className="px-6 py-3 bg-[#E31E24] hover:bg-[#c9171d] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-md hover:scale-105"
                  >
                    Explore Network Solutions →
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-white border border-zinc-300 hover:border-zinc-400 text-zinc-900 text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-xs"
                  >
                    Contact Engineering Desk →
                  </Link>
                </div>
                <div className="mt-8 pt-6 border-t border-zinc-200 w-full max-w-md flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600 font-mono">
                  <a href="tel:+918287479961" className="hover:text-black">
                    📞 +91 82874 79961
                  </a>
                  <a href="mailto:info@adapt-india.net" className="hover:text-black">
                    ✉️ info@adapt-india.net
                  </a>
                </div>
              </div>
            )}
          </div>
        </main>

        <UpgradeCTA title="Want advice for your own network?" text="Share your setup and we'll suggest practical improvements, from backup links to SD-WAN." />
        <NewsletterSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
