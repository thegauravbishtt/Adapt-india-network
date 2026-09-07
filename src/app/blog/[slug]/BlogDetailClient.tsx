"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  ChevronDown,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";
import type { BlogPost } from "@/lib/db";

interface BlogDetailClientProps {
  blog: BlogPost;
  relatedBlogs: BlogPost[];
}

export default function BlogDetailClient({
  blog,
  relatedBlogs,
}: BlogDetailClientProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Format content paragraphs
  const contentParagraphs = (blog.content || "")
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#fafafa] text-zinc-900 flex flex-col justify-between overflow-x-clip relative w-full selection:bg-[#fac917] selection:text-black">
        <Navbar />

        {/* Hero Header Area */}
        <header className="relative w-full bg-white border-b border-zinc-200 pt-8 sm:pt-12 pb-10 sm:pb-14 px-4 sm:px-8 lg:px-14 xl:px-20">
          <div className="max-w-4xl mx-auto w-full">
            {/* Top Navigation & Breadcrumbs */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-zinc-600 hover:text-black uppercase transition-colors group cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                <span>Back to Insights</span>
              </Link>

              <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                <span>/blog/</span>
                <span className="text-zinc-700 font-semibold truncate max-w-[200px]">
                  {blog.slug || blog.id}
                </span>
              </div>
            </div>

            {/* Category Pill & Metadata Row */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-[#fac917] text-black shadow-2xs">
                {blog.category}
              </span>
              <div className="flex items-center gap-4 text-xs text-zinc-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  {blog.readTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            {/* Main Article Title */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-950 font-display tracking-tight uppercase leading-[1.15] mb-6">
              {blog.title}
            </h1>

            {/* Excerpt / Lead Paragraph */}
            {blog.excerpt && (
              <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed font-normal border-l-4 border-[#fac917] pl-4 sm:pl-5 py-1 bg-zinc-50/80 rounded-r-xl">
                {blog.excerpt}
              </p>
            )}

            {/* Author & Share Controls */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-zinc-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-xs uppercase tracking-wider">
                  {blog.author.charAt(0) || "O"}
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900 leading-tight">
                    {blog.author || "Owlio Growth Labs"}
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    Editorial & Engineering Team
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 hover:border-zinc-400 text-xs font-semibold text-zinc-700 hover:text-black bg-white transition-all shadow-2xs cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Main Article Body Container */}
        <main className="flex-grow py-10 sm:py-14 px-4 sm:px-8 lg:px-14 xl:px-20 max-w-4xl mx-auto w-full">
          {/* Featured Cover Image */}
          {blog.image && (
            <div className="mb-10 sm:mb-12 rounded-3xl overflow-hidden border border-zinc-200 bg-zinc-100 shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Article Text Content */}
          <article className="prose prose-zinc max-w-none">
            {contentParagraphs.length > 0 ? (
              contentParagraphs.map((para, i) => {
                // If the paragraph is short and ends without period or looks like a heading
                const isHeading =
                  para.length < 80 &&
                  !para.endsWith(".") &&
                  !para.includes("\n") &&
                  i > 0;

                if (isHeading) {
                  return (
                    <h2
                      key={i}
                      className="text-xl sm:text-2xl font-bold text-zinc-950 font-display uppercase tracking-tight mt-8 mb-3"
                    >
                      {para}
                    </h2>
                  );
                }

                return (
                  <p
                    key={i}
                    className="text-sm sm:text-base text-zinc-700 leading-relaxed sm:leading-loose mb-5 font-normal whitespace-pre-line"
                  >
                    {para}
                  </p>
                );
              })
            ) : (
              <p className="text-sm text-zinc-600 leading-relaxed">
                {blog.excerpt}
              </p>
            )}
          </article>

          {/* Tags Section */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-zinc-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-zinc-500 mr-1">
                Tags:
              </span>
              {blog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200"
                >
                  #{tag.text}
                </span>
              ))}
            </div>
          )}

          {/* Dynamic FAQ Section (if FAQs exist) */}
          {blog.faqs && blog.faqs.length > 0 && (
            <section className="mt-12 sm:mt-16 pt-8 border-t-2 border-zinc-200">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#fac917] flex items-center justify-center text-black font-bold">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-zinc-950 font-display uppercase tracking-tight">
                  Frequently Asked Questions
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 mb-6">
                Key questions and answers regarding {blog.title.toLowerCase()}
              </p>

              <div className="flex flex-col gap-3">
                {blog.faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? "bg-white border-zinc-300 shadow-sm"
                          : "bg-white/80 border-zinc-200 hover:border-zinc-300"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 shrink-0">
                            Q{index + 1}
                          </span>
                          <span className="text-sm sm:text-base font-bold text-zinc-900 leading-snug">
                            {faq.question}
                          </span>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180 bg-black text-white" : ""
                          }`}
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-zinc-100">
                          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed whitespace-pre-line pl-9">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Author Signature Box */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-zinc-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#fac917] text-black flex items-center justify-center font-black text-lg">
                OW
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  Published by {blog.author || "Owlio Growth Labs"}
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Building next-generation search systems, headless web architectures, and growth pipelines.
                </p>
              </div>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white transition-colors shrink-0"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Related Articles Section */}
          {relatedBlogs && relatedBlogs.length > 0 && (
            <div className="mt-16 sm:mt-20">
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-zinc-200">
                <div>
                  <span className="font-mono text-xs font-bold text-[#fac917] uppercase tracking-wider block mb-1">
                    // CONTINUED READING
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-zinc-950 font-display uppercase tracking-tight">
                    Related Insights & Articles
                  </h3>
                </div>
                <Link
                  href="/blog"
                  className="text-xs font-bold text-zinc-700 hover:text-black hidden sm:inline-flex items-center gap-1"
                >
                  <span>View all</span>
                  <span>→</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {relatedBlogs.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.slug || related.id}`}
                    className="flex flex-col rounded-2xl overflow-hidden border border-zinc-200 bg-white hover:border-zinc-400 hover:shadow-lg transition-all group cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider bg-[#fac917] text-black">
                          {related.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="text-[10px] text-zinc-400 mb-1 font-medium">
                          {related.readTime}
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-zinc-950 line-clamp-2 group-hover:text-black leading-snug">
                          {related.title}
                        </h4>
                      </div>

                      <div className="inline-flex items-center gap-1 text-[11px] font-bold text-zinc-900 group-hover:translate-x-1 transition-transform mt-3 pt-2 border-t border-zinc-100">
                        <span>Read Article</span>
                        <span>→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA Banner */}
          <div className="mt-16 sm:mt-24 rounded-3xl bg-zinc-950 text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="flex flex-col text-left max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#fac917] mb-2">
                Partner with Us
              </span>
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
      </div>
    </LanguageProvider>
  );
}
