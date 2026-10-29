"use client";

import React from "react";
import Link from "next/link";

interface ResourceArticle {
  id: string;
  slug: string;
  tag: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
}

const articles: ResourceArticle[] = [
  {
    id: "art-1",
    slug: "why-dedicated-internet-leased-lines-matter",
    tag: "WHITE PAPER",
    readTime: "5 min read",
    title: "Dedicated Leased Lines (ILL): Architecture & 99.99% SLAs",
    excerpt:
      "A practical look at 1:1 symmetrical bandwidth, uncompressed throughput, low-latency peering, and contractual uptime guarantees.",
    image: "/banner-datacenter-racks.jpg",
  },
  {
    id: "art-2",
    slug: "sd-wan-vs-traditional-mpls-enterprise-guide",
    tag: "ARCHITECTURE GUIDE",
    readTime: "4 min read",
    title: "SD-WAN vs Legacy MPLS: Modern Enterprise WAN Guide",
    excerpt:
      "Comparing operational costs, dynamic path steering, and zero-touch branch deployment across distributed Indian enterprises.",
    image: "/resources/network_engineer_ops.jpg",
  },
  {
    id: "art-3",
    slug: "cloud-telephony-sip-trunking-modern-workforce",
    tag: "SOLUTION BRIEF",
    readTime: "5 min read",
    title: "Enterprise Wi-Fi 6 & Zero-Trust Campus Networking",
    excerpt:
      "Eliminating office bottlenecks with high-density wireless controllers, dynamic link failover, and unified firewall security.",
    image: "/services/broadband_clean.jpg",
  },
];

export default function BlogsSection() {
  return (
    <section id="blogs" className="w-full bg-[#050811] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-14 xl:px-16 relative overflow-hidden select-none border-t border-zinc-800/60">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12 w-full relative z-10">
        
        {/* Section Headline */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24]" />
            <span className="text-[#E31E24] font-mono font-bold text-[11px] uppercase tracking-[0.2em]">
              KNOWLEDGE &amp; INSIGHTS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Resources to help you <span className="text-[#E31E24]">choose better</span>
          </h2>
          <div className="w-16 h-1 bg-[#E31E24] mt-3 rounded-full" />
        </div>

        {/* Simple, Clean 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch w-full">
          {articles.map((item) => (
            <Link
              key={item.id}
              href={`/blog/${item.slug}`}
              className="group bg-[#0b121e] border border-zinc-800/80 hover:border-[#E31E24]/60 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-xl hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(227,30,36,0.15)] flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              {/* Subtle top red hover line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#E31E24] transition-colors duration-200" />

              <div>
                {/* Photo Thumbnail */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800/60 mb-5 shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Tag Badge & Read Time */}
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-xs bg-[#E31E24]/10 border border-[#E31E24]/30 text-[#E31E24] text-[10.5px] font-mono font-bold uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <span className="text-zinc-500 font-mono text-[11px]">
                    {item.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-[17px] font-bold text-white group-hover:text-[#E31E24] transition-colors leading-snug tracking-tight mb-2.5">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed font-normal mb-5 line-clamp-3">
                  {item.excerpt}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between mt-auto">
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E31E24] group-hover:text-white transition-colors">
                  <span>Read Article</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                    &#8599;
                  </span>
                </span>
                <span className="text-[10.5px] font-mono text-zinc-500">
                  Adapt India
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Centered "Explore All Resources" Button */}
        <div className="flex items-center justify-center pt-2">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#E31E24] hover:bg-[#c9181d] text-white font-mono font-bold text-xs uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-200 shadow-md shadow-red-600/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Explore All Resources</span>
            <span>&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
