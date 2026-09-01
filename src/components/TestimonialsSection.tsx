"use client";

import React, { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

interface TestimonialItem {
  id: string;
  headline: string;
  rating: number;
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
}

export const demoTestimonials: TestimonialItem[] = [
  {
    id: "testimonial-1",
    headline: "“Impactful”",
    rating: 5,
    content:
      "Growth engineering and search architecture at Owlio Works is unparalleled to what our team has witnessed with other agencies. With their technical depth and high-velocity execution, we have established dominance in our target market, resulting in a remarkable 4x expansion in organic revenue. Their unwavering guidance and inventive strategy transformed our platform.",
    author: {
      name: "Sanjiv Nishchal",
      role: "Founder",
      company: "Hi Life Wellness",
      avatar: "/gustavo.jpg",
    },
  },
  {
    id: "testimonial-2",
    headline: "“Dynamic”",
    rating: 5,
    content:
      "The scalable platform and digital experience engineering provided by Owlio Works has truly elevated our online ecosystem, delivering a seamless, lightning-fast experience to millions of customers. The level of craftsmanship and architectural rigor they brought captured the exact essence of our brand vision. Thank you team.",
    author: {
      name: "Sumeet Gupta",
      role: "Founder",
      company: "Mania Juices",
      avatar: "/chiseh.jpg",
    },
  },
  {
    id: "testimonial-3",
    headline: "“Exceptional”",
    rating: 5,
    content:
      "Owlio Works' end-to-end digital growth partnership has been a game-changer for our business. As Founder, I have been thoroughly impressed with their ability to understand complex product requirements and translate them into high-converting, resilient digital platforms. Their expertise in performance engineering and attention to detail has resulted in infrastructure that scales effortlessly.",
    author: {
      name: "Anupama Malik",
      role: "Founder",
      company: "Vert Enterprise",
      avatar: "/photo2.png",
    },
  },
  {
    id: "testimonial-4",
    headline: "“Transformational”",
    rating: 5,
    content:
      "Working with Owlio Works felt like adding an elite Tier-1 engineering & growth SWAT team inside our company. They rebuilt our core search funnel in weeks, reducing latency by 70% and increasing enterprise conversion rates immediately. They don't just write code—they build systems that generate durable revenue.",
    author: {
      name: "Vikramaditya Roy",
      role: "Co-Founder & CTO",
      company: "ScaleMatrix Cloud",
      avatar: "/photo1.png",
    },
  },
  {
    id: "testimonial-5",
    headline: "“Visionary”",
    rating: 5,
    content:
      "The sheer technical integrity and creative design caliber at Owlio Works is world-class. From day one, they eliminated bureaucratic agency bloat and delivered real milestones ahead of schedule. Our digital infrastructure is now future-proofed for the next decade.",
    author: {
      name: "Kavita Sharma",
      role: "VP of Product",
      company: "Nexora Global",
      avatar: "/team-photo.png",
    },
  },
];

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="w-full bg-[#0c0c0d] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-14 xl:px-16 select-none overflow-hidden relative border-t border-zinc-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[350px] bg-[#fbea3d]/[0.02] rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[400px] h-[300px] bg-white/[0.015] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12 lg:gap-14 w-full relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 w-full">
          
          {/* Left Column: Tag + Headline with Yellow Highlight */}
          <div className="flex flex-col items-start text-left">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-zinc-400 uppercase mb-2 block font-mono">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-white font-display tracking-tight leading-tight">
              Happy words from our{" "}
              <span className="relative inline-block whitespace-nowrap z-0">
                valuable clients!
                <span className="absolute bottom-1 sm:bottom-1.5 left-0 w-full h-2 sm:h-2.5 bg-[#fbea3d] -z-10 rounded-xs"></span>
              </span>
            </h2>
          </div>

          {/* Right Column: Navigation Arrows */}
          <div className="flex items-center gap-2 self-end shrink-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 flex items-center justify-center hover:bg-[#fbea3d] hover:text-black hover:border-[#fbea3d] transition-all shadow-xs cursor-pointer active:scale-95"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 flex items-center justify-center hover:bg-[#fbea3d] hover:text-black hover:border-[#fbea3d] transition-all shadow-xs cursor-pointer active:scale-95"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

        </div>

        {/* Horizontal Scrolling Cards Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 w-full scrollbar-none snap-x snap-mandatory"
        >
          {demoTestimonials.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[84vw] sm:w-[350px] md:w-[380px] lg:w-[400px] bg-[#131315] rounded-3xl sm:rounded-[32px] p-7 sm:p-9 border border-zinc-800/90 shadow-2xl hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Quote Headline */}
                <h3 className="text-2xl sm:text-[26px] font-black text-white font-display tracking-tight leading-tight mb-2.5">
                  {item.headline}
                </h3>

                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-[#fbea3d] mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Body */}
                <p className="text-zinc-300 text-xs sm:text-[13px] md:text-sm leading-relaxed font-normal">
                  {item.content}
                </p>
              </div>

              {/* Bottom Author Section */}
              <div className="border-t border-zinc-800/90 pt-5 sm:pt-6 mt-6 sm:mt-8 flex items-center gap-3.5">
                <img
                  src={item.author.avatar}
                  alt={item.author.name}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover object-center border-2 border-zinc-700 shadow-xs shrink-0"
                />
                <div className="flex flex-col text-left">
                  <span className="font-black text-sm sm:text-[15px] text-white leading-tight font-display">
                    {item.author.name}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium leading-tight mt-0.5">
                    {item.author.role} · {item.author.company}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
