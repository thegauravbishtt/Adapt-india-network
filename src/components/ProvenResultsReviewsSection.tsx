"use client";

import React, { useRef } from "react";

interface ReviewItem {
  id: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  city: string;
  review: string;
}

const reviews: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Rajesh Khurana",
    role: "Head of IT Infrastructure",
    company: "Apollo Supply Chain",
    initials: "RK",
    city: "Delhi NCR",
    review:
      "Our regional branches in Delhi, Gurgaon, and Mumbai used to have regular link drops during peak shipping hours. Adapt India transitioned us to dual leased lines with automatic failover, and we have had zero downtime since.",
  },
  {
    id: "rev-2",
    name: "Amitabh Sen",
    role: "Director of Operations",
    company: "Orient Logistics",
    initials: "AS",
    city: "Greater Noida",
    review:
      "Commissioning new warehouse connections used to take our earlier ISP weeks. Adapt India delivered active high-speed fiber in under 48 hours, and their NOC team picks up the phone within rings.",
  },
  {
    id: "rev-3",
    name: "Pooja Mehra",
    role: "VP of Technology",
    company: "Clariant Diagnostic Labs",
    initials: "PM",
    city: "New Delhi",
    review:
      "We sync large medical scan files to cloud databases 24/7. Latency and jitter dropped immediately after moving to their dedicated 1:1 leased line. Straightforward, reliable service without marketing fluff.",
  },
  {
    id: "rev-4",
    name: "Vikram Singhania",
    role: "General Manager — IT",
    company: "Nova Auto Components",
    initials: "VS",
    city: "Manesar",
    review:
      "Managing connectivity across 4 manufacturing units in Manesar and Faridabad is completely hassle-free now. Proactive monitoring catches line issues long before our production lines feel any slowdown.",
  },
  {
    id: "rev-5",
    name: "Nitin Bansal",
    role: "Chief Information Officer",
    company: "Bharat Finserve",
    initials: "NB",
    city: "Gurugram",
    review:
      "Fully compliant, high-bandwidth leased line connectivity with guaranteed SLA performance. Their team managed the entire delivery lifecycle smoothly from the initial site survey to router handoff.",
  },
  {
    id: "rev-6",
    name: "Siddharth Kapoor",
    role: "Head of Infrastructure",
    company: "Seaco Freight Forwarders",
    initials: "SK",
    city: "Faridabad",
    review:
      "Solid throughput and excellent uptime across our port terminals and container depots. Easily the most responsive telecom partner our operations team has worked with in Delhi NCR.",
  },
];

export default function ProvenResultsReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollDistance = 390;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollDistance : scrollDistance,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white py-14 sm:py-18 lg:py-20 px-4 sm:px-8 lg:px-14 xl:px-16 select-none relative overflow-hidden border-t border-zinc-200/80">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:gap-10 w-full relative z-10">
        
        {/* Header with Title on Left and Little Navigation Buttons on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 w-full">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-zinc-900 tracking-tight leading-tight">
              Count on us for <span className="text-[#E31E24] font-medium">proven results</span>
            </h2>
            <p className="mt-2 text-zinc-500 text-xs sm:text-[14px] font-normal">
              Direct feedback from IT heads and operations leaders who rely on Adapt India.
            </p>
          </div>

          {/* Little Buttons: Left & Right */}
          <div className="flex items-center gap-2 self-start sm:self-end shrink-0">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 text-zinc-700 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Previous reviews"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 text-zinc-700 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Next reviews"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Clean, Simple Review Cards Track (No AI badges, No fake SLA tags) */}
        <div
          ref={scrollRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 w-full scrollbar-none scroll-smooth snap-x snap-mandatory"
        >
          {reviews.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[84vw] sm:w-[350px] md:w-[370px] bg-white border border-zinc-200 rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:border-zinc-300 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* 5 Simple Stars */}
                <div className="flex items-center gap-1 text-[#E31E24] text-sm mb-3">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                {/* Natural Review Quote */}
                <p className="text-zinc-700 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 mt-5">
                <div className="w-9 h-9 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 flex items-center justify-center font-bold text-xs shrink-0">
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-zinc-900 font-semibold text-xs sm:text-sm truncate">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-zinc-500 font-normal truncate">
                    {item.role}, {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
