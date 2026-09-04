"use client";

import React, { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

import Link from "next/link";

interface BlogCardItem {
  id: string;
  slug?: string;
  image: string;
  tags: Array<{ text: string; variant: "dark" | "outline" | "yellow" }>;
  title: string;
  readTime?: string;
  category?: string;
}

export const demoBlogs: BlogCardItem[] = [
  {
    id: "article-1",
    slug: "modern-search-infrastructure-10x-organic-revenue",
    image: "/image1.png",
    tags: [
      { text: "STRATEGY", variant: "dark" },
      { text: "GROWTH", variant: "yellow" },
    ],
    title: "How modern search infrastructure drives 10x organic revenue.",
    category: "Search Systems",
    readTime: "4 min read",
  },
  {
    id: "article-2",
    slug: "headless-commerce-vs-monolithic-builds",
    image: "/image2.png",
    tags: [
      { text: "TECH", variant: "outline" },
      { text: "PLATFORMS", variant: "dark" },
    ],
    title: "Why headless commerce platforms outperform traditional monolithic builds.",
    category: "Digital Strategy",
    readTime: "5 min read",
  },
  {
    id: "article-3",
    slug: "science-of-high-conversion-digital-experiences-2026",
    image: "/image3.png",
    tags: [
      { text: "D2C", variant: "yellow" },
      { text: "CONVERSION", variant: "outline" },
    ],
    title: "The science of high-conversion digital experiences in 2026.",
    category: "Conversion Engineering",
    readTime: "6 min read",
  },
  {
    id: "article-4",
    slug: "building-scalable-ai-search-systems",
    image: "/image4.png",
    tags: [
      { text: "AI & ML", variant: "dark" },
      { text: "SEARCH", variant: "yellow" },
    ],
    title: "Building scalable AI search systems that outpace algorithmic shifts.",
    category: "AI & Search Systems",
    readTime: "4 min read",
  },
  {
    id: "article-5",
    slug: "content-marketing-flywheel-b2b-saas",
    image: "/creative3.png",
    tags: [
      { text: "B2B", variant: "outline" },
      { text: "INFRA", variant: "dark" },
    ],
    title: "Enterprise infrastructure that lasts: A technical growth playbook.",
    category: "Enterprise Systems",
    readTime: "5 min read",
  },
  {
    id: "article-6",
    slug: "high-impact-social-media-growth-playbook",
    image: "/creative5.png",
    tags: [
      { text: "PERFORMANCE", variant: "yellow" },
      { text: "GROWTH", variant: "outline" },
    ],
    title: "Optimizing Core Web Vitals to capture high-intent enterprise search traffic.",
    category: "Performance Engineering",
    readTime: "4 min read",
  },
];

export default function BlogsSection() {
  const { language } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -370 : 370;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="blogs" className="w-full bg-[#fafafb] text-black py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-14 xl:px-16 select-none overflow-hidden relative border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12 w-full">
        
        {/* Header Row (Aligned directly with the cards below) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 w-full">
          
          {/* Left Column: Tag + Headline with Yellow Highlight */}
          <div className="flex flex-col items-start text-left">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-zinc-400 uppercase mb-2 block font-mono">
              FEATURED ARTICLES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-black font-display tracking-tight leading-tight">
              Insights, not{" "}
              <span className="relative inline-block whitespace-nowrap z-0">
                noise.
                <span className="absolute bottom-1 sm:bottom-1.5 left-0 w-full h-2 sm:h-2.5 bg-[#fbea3d] -z-10 rounded-xs"></span>
              </span>
            </h2>
          </div>

          {/* Right Column: Subtitle, View All Button & Nav Arrows */}
          <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4 self-stretch md:self-end flex-wrap">
            <p className="text-zinc-600 text-xs sm:text-[13px] md:text-sm font-medium max-w-sm leading-relaxed text-left hidden lg:block">
              Perspectives on engineering, high-growth systems, and digital strategy.
            </p>

            {/* View All Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 bg-black text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-bold hover:bg-[#fbea3d] hover:text-black transition-all shadow-xs cursor-pointer active:scale-95 group"
            >
              <span>View all</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 font-normal">→</span>
            </Link>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-zinc-300 bg-white text-zinc-800 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all shadow-xs cursor-pointer active:scale-95"
                aria-label="Scroll left"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-zinc-300 bg-white text-zinc-800 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all shadow-xs cursor-pointer active:scale-95"
                aria-label="Scroll right"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Horizontal Scrolling Cards Track - Aligned flush with title and container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-5 pt-2 w-full scrollbar-none snap-x snap-mandatory"
        >
          {demoBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug || blog.id}`}
              className="snap-start shrink-0 w-[76vw] sm:w-[310px] md:w-[340px] lg:w-[360px] bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200/90 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer block"
            >
              <article className="flex flex-col justify-between h-full">
                <div>
                  {/* Clean Image Container */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-100">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Bottom Body Content */}
                  <div className="p-4 sm:p-5 flex flex-col gap-2.5">
                    {/* Pills Row */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {blog.tags.map((tag, tIdx) => {
                        if (tag.variant === "dark") {
                          return (
                            <span
                              key={tIdx}
                              className="px-2.5 py-0.5 rounded-full bg-black text-[#fbea3d] text-[10px] font-mono font-extrabold uppercase tracking-wider"
                            >
                              {tag.text}
                            </span>
                          );
                        }
                        if (tag.variant === "yellow") {
                          return (
                            <span
                              key={tIdx}
                              className="px-2.5 py-0.5 rounded-full bg-[#fbea3d] text-black text-[10px] font-mono font-extrabold uppercase tracking-wider shadow-2xs"
                            >
                              {tag.text}
                            </span>
                          );
                        }
                        return (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-full bg-white border border-zinc-300 text-zinc-800 text-[10px] font-mono font-extrabold uppercase tracking-wider"
                          >
                            {tag.text}
                          </span>
                        );
                      })}
                    </div>

                    {/* Title Headline */}
                    <h3 className="text-sm sm:text-base md:text-[17px] font-black text-zinc-900 font-display tracking-tight leading-snug group-hover:text-black transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                  </div>
                </div>

                {/* Action Callout Link */}
                <div className="px-4 sm:px-5 pt-0 pb-4 sm:pb-5 flex items-center justify-between border-t border-zinc-100 mt-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-800 group-hover:text-black transition-colors pt-3">
                    <span>Read article</span>
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 font-normal">
                      →
                    </span>
                  </div>
                  {blog.readTime && (
                    <span className="text-[10px] font-mono text-zinc-400 font-medium pt-3">
                      {blog.readTime}
                    </span>
                  )}
                </div>

              </article>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
