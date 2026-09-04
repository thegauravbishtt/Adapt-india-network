"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";
import { LanguageProvider } from "@/context/LanguageContext";
import Link from "next/link";
import type { BlogPost } from "@/lib/db";

const DEFAULT_ARTICLES: BlogPost[] = [
  {
    id: "article-1",
    slug: "modern-search-infrastructure-10x-organic-revenue",
    title: "How modern search infrastructure drives 10x organic revenue.",
    category: "SEO",
    readTime: "4 min read",
    image: "/image1.png",
    excerpt: "Exploring the shift from traditional keyword targeting to algorithmic semantic authority and programmatic search systems.",
    tags: [
      { text: "STRATEGY", variant: "dark" },
      { text: "GROWTH", variant: "yellow" },
    ],
    status: "published",
    publishedAt: "2026-02-15T10:00:00.000Z",
    author: "Owlio Growth Labs",
  },
  {
    id: "article-2",
    slug: "headless-commerce-vs-monolithic-builds",
    title: "Why headless commerce platforms outperform traditional monolithic builds.",
    category: "Web/App Design & Development",
    readTime: "5 min read",
    image: "/image2.png",
    excerpt: "A deep dive into decoupled frontends, Next.js commerce pipelines, and conversion rate optimizations.",
    tags: [
      { text: "TECH", variant: "outline" },
      { text: "PLATFORMS", variant: "dark" },
    ],
    status: "published",
    publishedAt: "2026-02-18T12:00:00.000Z",
    author: "Owlio Engineering",
  },
  {
    id: "article-3",
    slug: "science-of-high-conversion-digital-experiences-2026",
    title: "The science of high-conversion digital experiences in 2026.",
    category: "Performance & Advertising",
    readTime: "6 min read",
    image: "/image3.png",
    excerpt: "Analyzing cognitive friction, visual hierarchy, and micro-interactions that drive user commitment.",
    tags: [
      { text: "D2C", variant: "yellow" },
      { text: "CONVERSION", variant: "outline" },
    ],
    status: "published",
    publishedAt: "2026-02-22T08:30:00.000Z",
    author: "Design & UX Lab",
  },
  {
    id: "article-4",
    slug: "building-scalable-ai-search-systems",
    title: "Building scalable AI search systems that outpace algorithmic shifts.",
    category: "SEO",
    readTime: "4 min read",
    image: "/image4.png",
    excerpt: "How Generative Engine Optimization (GEO) and structured answer engines are reshaping organic discovery.",
    tags: [
      { text: "AI & ML", variant: "dark" },
      { text: "SEARCH", variant: "yellow" },
    ],
    status: "published",
    publishedAt: "2026-02-27T14:00:00.000Z",
    author: "AI Research Group",
  },
  {
    id: "article-5",
    slug: "high-impact-social-media-growth-playbook",
    title: "High-impact social media frameworks that build enduring audience loyalty.",
    category: "Social Media",
    readTime: "5 min read",
    image: "/creative5.png",
    excerpt: "How narrative-led short-form content and founder branding scale consumer trust and distribution.",
    tags: [
      { text: "SOCIAL", variant: "dark" },
      { text: "VIRAL", variant: "yellow" },
    ],
    status: "published",
    publishedAt: "2026-03-01T11:00:00.000Z",
    author: "Creative Strategy Team",
  },
  {
    id: "article-6",
    slug: "content-marketing-flywheel-b2b-saas",
    title: "The B2B content marketing flywheel: Generating high-intent SQLs without paid burn.",
    category: "Content",
    readTime: "6 min read",
    image: "/creative3.png",
    excerpt: "A technical blueprint for engineering product-led content hubs that compound monthly inbound pipeline.",
    tags: [
      { text: "B2B", variant: "outline" },
      { text: "CONTENT", variant: "dark" },
    ],
    status: "published",
    publishedAt: "2026-03-02T09:00:00.000Z",
    author: "Growth Advisory",
  },
  {
    id: "article-7",
    slug: "cloud-devops-kubernetes-multi-region-scale",
    title: "Architecting zero-downtime multi-region Cloud & DevOps pipelines.",
    category: "Cloud & DevOps",
    readTime: "6 min read",
    image: "/photo1.png",
    excerpt: "How modern cloud infrastructure, automated CI/CD canary deployments, and IaC eliminate operational downtime.",
    tags: [
      { text: "DEVOPS", variant: "dark" },
      { text: "INFRA", variant: "yellow" },
    ],
    status: "published",
    publishedAt: "2026-03-02T14:00:00.000Z",
    author: "DevOps Architecture Lab",
  },
  {
    id: "article-8",
    slug: "brand-identity-that-commands-pricing-power",
    title: "Brand identity systems that command pricing power and category leadership.",
    category: "Web/App Design & Development",
    readTime: "4 min read",
    image: "/creative1.png",
    excerpt: "Why premium visual design, micro-typography, and distinct design tokens justify 3x higher contract values.",
    tags: [
      { text: "DESIGN", variant: "dark" },
      { text: "BRAND", variant: "outline" },
    ],
    status: "published",
    publishedAt: "2026-03-03T08:00:00.000Z",
    author: "Brand Architecture Group",
  },
  {
    id: "article-9",
    slug: "lifecycle-email-automation-for-d2c",
    title: "Lifecycle email automation: Unlocking 35%+ revenue share in modern D2C.",
    category: "Email & Automation",
    readTime: "4 min read",
    image: "/creative4.png",
    excerpt: "Behavioral triggers, predictive replenishment flows, and VIP segmentation blueprints.",
    tags: [
      { text: "RETENTION", variant: "yellow" },
      { text: "EMAIL", variant: "dark" },
    ],
    status: "published",
    publishedAt: "2026-03-03T10:30:00.000Z",
    author: "Retention Systems",
  },
  {
    id: "article-10",
    slug: "e-commerce-scaling-playbook-2026",
    title: "Scaling modern D2C ecommerce brands beyond 8-figures profitably.",
    category: "Industries",
    readTime: "7 min read",
    image: "/creative2.png",
    excerpt: "Navigating unit economics, blended CAC, and international multi-currency fulfillment.",
    tags: [
      { text: "E-COMM", variant: "dark" },
      { text: "SCALE", variant: "yellow" },
    ],
    status: "published",
    publishedAt: "2026-03-03T12:00:00.000Z",
    author: "Ecommerce Practice",
  },
];

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

  // Exact Requested Toggles
  const pillFilters = [
    { id: "all", label: "All", count: articles.length },
    { id: "Performance & Advertising", label: "Performance & Advertising", count: getCount("Performance & Advertising") },
    { id: "Social Media", label: "Social Media", count: getCount("Social Media") },
    { id: "Web/App Design & Development", label: "Web/App Design & Development", count: getCount("Web/App Design & Development") },
    { id: "Content", label: "Content", count: getCount("Content") },
    { id: "Email & Automation", label: "Email & Automation", count: getCount("Email & Automation") },
    { id: "Cloud & DevOps", label: "Cloud & DevOps", count: getCount("Cloud & DevOps") || 3 },
    { id: "SEO", label: "SEO", count: getCount("SEO") },
    { id: "Industries", label: "Industries", count: getCount("Industries") },
  ];

  const filteredArticles = articles.filter((article) =>
    matchesCategory(article.category, selectedCategory)
  );

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip relative w-full select-none selection:bg-[#fac917] selection:text-black">
        <Navbar />

        {/* 1. HERO BANNER (Compact, Sleek Background Banner) */}
        <section className="relative w-full text-white pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
          
          {/* Background Image with Clear Directional Gradient (Photo clearly visible) */}
          <div className="absolute inset-0 z-0">
            <img
              src="/services/content_marketing.jpg"
              alt="Insights & Perspectives - Owlio Works"
              className="w-full h-full object-cover object-center scale-100 filter brightness-[0.78] contrast-[1.08]"
            />
            {/* Directional gradient to keep photo vibrant on right while left text is readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30 z-10"></div>
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
                <span className="px-3 py-0.5 rounded-full bg-black/60 border border-zinc-700/80 text-[#fbea3d] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                  // INSIGHTS &amp; PERSPECTIVES
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
                  // THOUGHT LEADERSHIP &amp; ENGINEERING
                </span>

                {/* Compact Display Title */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-none mb-3 drop-shadow-md">
                  INSIGHTS &amp; ARTICLES
                </h1>

                <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm">
                  Deep dives into search systems, platform engineering, conversion systems, and AI engine optimization by the Owlio Works team.
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
                  className="mt-3 px-4 py-2 bg-black text-white rounded-full text-xs font-bold hover:bg-zinc-800 transition-colors"
                >
                  View All Articles
                </button>
              </div>
            ) : (
              filteredArticles.map((article) => (
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
              ))
            )}
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-16 sm:mt-24 rounded-3xl bg-zinc-950 text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="flex flex-col text-left max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#fac917] mb-2">Partner with Us</span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight font-display">
                Ready to scale your search & digital growth strategy?
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
