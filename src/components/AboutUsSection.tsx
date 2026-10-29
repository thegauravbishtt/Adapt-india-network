"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutUsSection() {
  const { t, language } = useLanguage();
  const [openAccordion, setOpenAccordion] = useState<"story" | "mission" | null>(null);
  const [hoveredImage, setHoveredImage] = useState<{ src: string; title: string } | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (key: "story" | "mission") => {
    setOpenAccordion((prev) => (prev === key ? null : key));
  };

  // Preload network images for instant hover display
  useEffect(() => {
    const imagesToPreload = [
      "/network-slider-1.webp",
      "/network-sdwan.png",
      "/network-slider-2.jpg",
      "/network-mpls.png",
      "/network-about2.png",
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Track mouse position directly on the preview DOM element
  useEffect(() => {
    if (!hoveredImage) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (previewRef.current) {
        previewRef.current.style.left = `${e.clientX}px`;
        previewRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hoveredImage]);

  return (
    <div
      id="about"
      className="w-full flex flex-col items-center relative bg-transparent"
    >
      {/* Floating Hover Image Preview (Follows Cursor) */}
      <div
        ref={previewRef}
        className={`fixed pointer-events-none z-50 transition-opacity duration-200 ease-out hidden md:block ${hoveredImage ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
          }`}
        style={{
          left: "-9999px",
          top: "-9999px",
          transform: "translate(-50%, -105%)",
        }}
      >
        {hoveredImage && (
          <div className="relative w-56 sm:w-64 md:w-72 aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] border-2 border-zinc-700 bg-zinc-950">
            <img
              src={hoveredImage.src}
              alt={hoveredImage.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/90 backdrop-blur-md text-[10px] font-bold text-[#E31E24] uppercase tracking-wider font-mono border border-zinc-800">
              {hoveredImage.title}
            </div>
          </div>
        )}
      </div>

      {/* Arched Dome Curve Header */}
      <div className="w-full overflow-hidden leading-none select-none -mb-[1px] relative z-20 pointer-events-none bg-transparent">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 md:h-16 lg:h-20 block"
        >
          <path
            d="M0,120 Q720,0 1440,120 L1440,120 L0,120 Z"
            fill="#0c0c0d"
          />
        </svg>
      </div>

      {/* About Us Content Body */}
      <section className="w-full bg-[#0c0c0d] text-white pt-4 sm:pt-8 lg:pt-10 pb-16 sm:pb-20 md:pb-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden">

        {/* Subtle background ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-red-600/[0.05] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="w-full max-w-5xl mx-auto relative z-10">

          {/* Top Description Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-start mb-10 sm:mb-14">

            {/* Tag / Category Label */}
            <div className="lg:col-span-4 pt-1">
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-[#E31E24] font-bold uppercase block select-none">
                // ABOUT ADAPT INDIA NETWORK
              </span>
            </div>

            {/* Main Editorial Text with Interactive Hover Words */}
            <div className="lg:col-span-8">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.5] tracking-tight text-zinc-100">
                ADAPT India Network is a premier{" "}
                <span
                  onMouseEnter={() =>
                    setHoveredImage({
                      src: "/network-slider-1.webp",
                      title: "SD-WAN Enterprise Solutions",
                    })
                  }
                  onMouseLeave={() => setHoveredImage(null)}
                  className="text-white font-semibold hover:bg-[#E31E24] hover:text-white px-1 rounded-sm transition-all duration-200 cursor-pointer"
                >
                  enterprise telecom &amp; network provider
                </span>{" "}
                based in New Delhi, India. We empower organizations with dedicated{" "}
                <span
                  onMouseEnter={() =>
                    setHoveredImage({
                      src: "/network-sdwan.png",
                      title: "Internet Leased Line (ILL)",
                    })
                  }
                  onMouseLeave={() => setHoveredImage(null)}
                  className="text-white font-semibold hover:bg-[#E31E24] hover:text-white px-1 rounded-sm transition-all duration-200 cursor-pointer"
                >
                  Internet Leased Lines (ILL)
                </span>{" "}
                and high-throughput{" "}
                <span
                  onMouseEnter={() =>
                    setHoveredImage({
                      src: "/network-mpls.png",
                      title: "Private MPLS Connectivity",
                    })
                  }
                  onMouseLeave={() => setHoveredImage(null)}
                  className="text-white font-semibold hover:bg-[#E31E24] hover:text-white px-1 rounded-sm transition-all duration-200 cursor-pointer"
                >
                  private MPLS connectivity
                </span>{" "}
                delivering 99.9%  for multi-location enterprises. We are your complete{" "}
                <span
                  onMouseEnter={() =>
                    setHoveredImage({
                      src: "/network-about2.png",
                      title: "24/7 Network Operations Center",
                    })
                  }
                  onMouseLeave={() => setHoveredImage(null)}
                  className="text-white font-semibold hover:bg-[#E31E24] hover:text-white px-1 rounded-sm transition-all duration-200 cursor-pointer"
                >
                  telecom infrastructure partner
                </span>
                , engineering mission-critical connectivity designed to scale.
              </p>
            </div>

          </div>

          {/* Accordion Lines */}
          <div className="w-full border-t border-zinc-800">

            {/* OUR STORY */}
            <div className="border-b border-zinc-800">
              <button
                type="button"
                onClick={() => toggleAccordion("story")}
                className="w-full py-4 sm:py-5 flex items-center justify-between text-left group cursor-pointer select-none"
                aria-expanded={openAccordion === "story"}
              >
                <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-zinc-400 group-hover:text-white transition-colors">
                  OUR BACKGROUND &amp; NETWORK EXPERTISE
                </span>
                <span
                  className={`text-xl sm:text-2xl font-light text-zinc-400 group-hover:text-white transition-transform duration-300 ease-out inline-block ${openAccordion === "story" ? "rotate-45" : ""
                    }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${openAccordion === "story"
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-6 pt-1">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.5] tracking-tight text-zinc-200">
                      Established to bridge the gap between traditional telecom bureaucracy and agile business needs, ADAPT India Network delivers{" "}
                      <span
                        onMouseEnter={() =>
                          setHoveredImage({
                            src: "/network-slider-1.webp",
                            title: "Smart SD-WAN Architecture",
                          })
                        }
                        onMouseLeave={() => setHoveredImage(null)}
                        className="text-white font-semibold hover:bg-[#E31E24] hover:text-white px-1 rounded-sm transition-all duration-200 cursor-pointer"
                      >
                        intelligent SD-WAN routing
                      </span>
                      , robust optical fiber infrastructure, and{" "}
                      <span
                        onMouseEnter={() =>
                          setHoveredImage({
                            src: "/network-slider-2.jpg",
                            title: "Enterprise High-Speed Broadband",
                          })
                        }
                        onMouseLeave={() => setHoveredImage(null)}
                        className="text-white font-semibold hover:bg-[#E31E24] hover:text-white px-1 rounded-sm transition-all duration-200 cursor-pointer"
                      >
                        symmetrical high-speed broadband
                      </span>{" "}
                      across corporate hubs, educational institutes, and manufacturing facilities nationwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* OUR MISSION */}
            <div className="border-b border-zinc-800">
              <button
                type="button"
                onClick={() => toggleAccordion("mission")}
                className="w-full py-4 sm:py-5 flex items-center justify-between text-left group cursor-pointer select-none"
                aria-expanded={openAccordion === "mission"}
              >
                <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-zinc-400 group-hover:text-white transition-colors">
                  OUR MISSION &amp; SLA COMMITMENT
                </span>
                <span
                  className={`text-xl sm:text-2xl font-light text-zinc-400 group-hover:text-white transition-transform duration-300 ease-out inline-block ${openAccordion === "mission" ? "rotate-45" : ""
                    }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${openAccordion === "mission"
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-6 pt-1">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.5] tracking-tight text-zinc-200">
                      Our mission is to guarantee uncompromising connectivity with 99.9% uptime, zero jitter, and enterprise-grade{" "}
                      <span
                        onMouseEnter={() =>
                          setHoveredImage({
                            src: "/network-mpls.png",
                            title: "Military-Grade Security & Encryption",
                          })
                        }
                        onMouseLeave={() => setHoveredImage(null)}
                        className="text-white font-semibold hover:bg-[#E31E24] hover:text-white px-1 rounded-sm transition-all duration-200 cursor-pointer"
                      >
                        end-to-end network encryption
                      </span>
                      . Supported by proactive 24/7/365 Network Operations Center (NOC) monitoring, we ensure your business operations never miss a beat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Centered Tilted Circular Button: EXPLORE MORE */}
          <div className="w-full flex justify-center items-center pt-8 sm:pt-10">
            <a
              href="/about"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#E31E24] text-white font-display font-black text-[10px] sm:text-xs tracking-widest uppercase flex items-center justify-center text-center p-3 cursor-pointer shadow-[0_8px_25px_rgba(227,30,36,0.3)] hover:shadow-[0_12px_35px_rgba(227,30,36,0.5)] hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 rotate-[-12deg] hover:rotate-0 group select-none"
            >
              <span className="group-hover:tracking-[0.15em] transition-all duration-300 leading-tight text-center">
                EXPLORE ADAPT
              </span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
