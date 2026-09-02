"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";
import { LanguageProvider } from "@/context/LanguageContext";
import { demoBlogs } from "@/components/BlogsSection";
import Link from "next/link";

export default function BlogPage() {
  const allArticles = [
    ...demoBlogs,
    {
      id: "article-7",
      image: "/photo1.png",
      tags: [
        { text: "ENGINEERING", variant: "dark" as const },
        { text: "PERFORMANCE", variant: "yellow" as const },
      ],
      title: "Core Web Vitals mastery: How sub-second load times multiply enterprise conversions.",
      category: "Performance Engineering",
      readTime: "7 min read",
    },
    {
      id: "article-8",
      image: "/photo2.png",
      tags: [
        { text: "GLOBAL SEO", variant: "yellow" as const },
        { text: "SCALE", variant: "outline" as const },
      ],
      title: "Building programmatic SEO pipelines across 50+ international markets.",
      category: "Search Systems",
      readTime: "5 min read",
    },
  ];

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-950 font-sans flex flex-col selection:bg-[#fac917] selection:text-black">
        <Navbar />

        <main className="flex-grow pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 px-5 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full">
          {/* Header Badge & Title */}
          <div className="flex flex-col items-start text-left mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-[#fac917]"></span>
              <span>Insights & Perspectives</span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl font-black text-zinc-950 tracking-tight leading-[1.08] mb-4 font-display">
              Insights, not <span className="relative inline-block">noise.<span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#fac917] -z-10 rounded-xs"></span></span>
            </h1>

            <p className="text-zinc-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              Deep dives into search systems, platform engineering, conversion architectures, and AI engine optimization by the Owlio Works team.
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {allArticles.map((article) => (
              <article
                key={article.id}
                className="flex flex-col rounded-3xl overflow-hidden border border-zinc-200 bg-white hover:border-zinc-400 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {article.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                          tag.variant === "yellow"
                            ? "bg-[#fac917] text-black"
                            : tag.variant === "dark"
                            ? "bg-zinc-950 text-white"
                            : "bg-white/90 text-zinc-900 backdrop-blur-xs border border-zinc-200"
                        }`}
                      >
                        {tag.text}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-500 font-medium mb-3">
                      <span>{article.category}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-zinc-950 leading-snug group-hover:text-black transition-colors mb-4 font-display">
                      {article.title}
                    </h2>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 group-hover:text-black group-hover:translate-x-1 transition-all pt-2 border-t border-zinc-100">
                    <span>Read Article</span>
                    <span>→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-16 sm:mt-24 rounded-3xl bg-zinc-950 text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="flex flex-col text-left max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#fac917] mb-2">Partner with Us</span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight font-display">
                Ready to scale your search & product architecture?
              </h3>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#fac917] text-zinc-950 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white transition-all shadow-md shrink-0 whitespace-nowrap"
            >
              <span>Let&apos;s Build Together</span>
              <span>→</span>
            </Link>
          </div>
        </main>

        <Footer />
        <FloatingWidget />
      </div>
    </LanguageProvider>
  );
}
