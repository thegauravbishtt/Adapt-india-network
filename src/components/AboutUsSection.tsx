"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutUsSection() {
  const { t, language } = useLanguage();
  const [openAccordion, setOpenAccordion] = useState<"story" | "mission" | null>(null);
  const [hoveredImage, setHoveredImage] = useState<{ src: string; title: string } | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const toggleAccordion = (key: "story" | "mission") => {
    setOpenAccordion((prev) => (prev === key ? null : key));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  // Preload images for instant hover display
  useEffect(() => {
    const imagesToPreload = [
      "/studio-photo.png",
      "/hotel.png",
      "/gro.png",
      "/wed.png",
      "/team-photo.png",
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div
      id="about"
      className="w-full flex flex-col items-center relative bg-[#0c0c0d]"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Hover Image Preview (Follows Cursor) */}
      <div
        className={`fixed pointer-events-none z-50 transition-all duration-200 ease-out hidden md:block ${
          hoveredImage ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: "translate(-50%, -125%)",
        }}
      >
        {hoveredImage && (
          <div className="relative w-56 sm:w-64 md:w-72 aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] border-2 border-zinc-700 bg-zinc-950">
            <img
              src={hoveredImage.src}
              alt={hoveredImage.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/90 backdrop-blur-md text-[10px] font-bold text-[#fbea3d] uppercase tracking-wider font-mono border border-zinc-800">
              {hoveredImage.title}
            </div>
          </div>
        )}
      </div>

      {/* Arched Dome Curve Header (seamless transition from white PartnersMarquee into black AboutUsSection) */}
      <div className="w-full overflow-hidden leading-none select-none -mb-[1px] relative z-20 pointer-events-none bg-white">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 md:h-16 lg:h-20 block text-[#0c0c0d]"
        >
          <path
            d="M0,100 C400,0 1040,0 1440,100 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* About Us Content Body (100% full-width black background) */}
      <section className="w-full bg-[#0c0c0d] text-white pt-4 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
        
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="w-full max-w-5xl mx-auto relative z-10">
          
          {/* Top Description Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-start mb-10 sm:mb-14">
            
            {/* Tag / Category Label */}
            <div className="lg:col-span-4 pt-1">
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-zinc-400 font-bold uppercase block select-none">
                {t.about.tag}
              </span>
            </div>

            {/* Main Editorial Text with Interactive Hover Words */}
            <div className="lg:col-span-8">
              {language === "en" ? (
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.5] tracking-tight text-zinc-100">
                  Owlio Works is a{" "}
                  <span
                    onMouseEnter={() =>
                      setHoveredImage({
                        src: "/studio-photo.png",
                        title: "Creative Growth Studio",
                      })
                    }
                    onMouseLeave={() => setHoveredImage(null)}
                    className="text-white font-semibold underline decoration-zinc-600 decoration-2 underline-offset-4 hover:decoration-[#fbea3d] hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
                  >
                    digital growth & engineering studio
                  </span>{" "}
                  based in India & globally, specializing in{" "}
                  <span
                    onMouseEnter={() =>
                      setHoveredImage({
                        src: "/hotel.png",
                        title: "High-Performance Systems",
                      })
                    }
                    onMouseLeave={() => setHoveredImage(null)}
                    className="text-white font-semibold underline decoration-zinc-600 decoration-2 underline-offset-4 hover:decoration-[#fbea3d] hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
                  >
                    secure, scalable search systems
                  </span>{" "}
                  and{" "}
                  <span
                    onMouseEnter={() =>
                      setHoveredImage({
                        src: "/gro.png",
                        title: "Modern Digital Platforms",
                      })
                    }
                    onMouseLeave={() => setHoveredImage(null)}
                    className="text-white font-semibold underline decoration-zinc-600 decoration-2 underline-offset-4 hover:decoration-[#fbea3d] hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
                  >
                    modern digital platforms
                  </span>{" "}
                  for high-growth businesses. We are your end-to-end{" "}
                  <span
                    onMouseEnter={() =>
                      setHoveredImage({
                        src: "/team-photo.png",
                        title: "Technical Growth Partner",
                      })
                    }
                    onMouseLeave={() => setHoveredImage(null)}
                    className="text-white font-semibold underline decoration-zinc-600 decoration-2 underline-offset-4 hover:decoration-[#fbea3d] hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
                  >
                    technical growth partner
                  </span>
                  , focused on building enterprise infrastructure that lasts.
                </p>
              ) : (
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.5] tracking-tight text-zinc-100">
                  <span
                    onMouseEnter={() =>
                      setHoveredImage({
                        src: "/studio-photo.png",
                        title: "Owlio Works Studio",
                      })
                    }
                    onMouseLeave={() => setHoveredImage(null)}
                    className="text-white font-semibold underline decoration-zinc-600 decoration-2 underline-offset-4 hover:decoration-[#fbea3d] hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
                  >
                    {t.about.description}
                  </span>
                </p>
              )}
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
                  {t.about.storyTitle}
                </span>
                <span
                  className={`text-xl sm:text-2xl font-light text-zinc-400 group-hover:text-white transition-transform duration-300 inline-block ${
                    openAccordion === "story" ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openAccordion === "story" ? "max-h-[800px] pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                }`}
              >
                {language === "en" ? (
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.5] tracking-tight text-zinc-200 pt-1">
                    Founded by seasoned engineers and growth architects, Owlio Works was established to replace traditional agency bureaucracy with{" "}
                    <span
                      onMouseEnter={() =>
                        setHoveredImage({
                          src: "/studio-photo.png",
                          title: "Relentless Execution",
                        })
                      }
                      onMouseLeave={() => setHoveredImage(null)}
                      className="text-white font-semibold underline decoration-zinc-600 decoration-2 underline-offset-4 hover:decoration-[#fbea3d] hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
                    >
                      relentless technical execution
                    </span>
                    . We build{" "}
                    <span
                      onMouseEnter={() =>
                        setHoveredImage({
                          src: "/gro.png",
                          title: "Conversion Architecture",
                        })
                      }
                      onMouseLeave={() => setHoveredImage(null)}
                      className="text-white font-semibold underline decoration-zinc-600 decoration-2 underline-offset-4 hover:decoration-[#fbea3d] hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
                    >
                      high-converting digital experiences
                    </span>
                    , robust search architectures, and{" "}
                    <span
                      onMouseEnter={() =>
                        setHoveredImage({
                          src: "/hotel.png",
                          title: "Scalable Platforms",
                        })
                      }
                      onMouseLeave={() => setHoveredImage(null)}
                      className="text-white font-semibold underline decoration-zinc-600 decoration-2 underline-offset-4 hover:decoration-[#fbea3d] hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
                    >
                      scalable enterprise platforms
                    </span>{" "}
                    that drive sustainable revenue and outpace market competition.
                  </p>
                ) : (
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.5] tracking-tight text-zinc-200 pt-1">
                    {t.about.storyDesc}
                  </p>
                )}
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
                  {t.about.missionTitle}
                </span>
                <span
                  className={`text-xl sm:text-2xl font-light text-zinc-400 group-hover:text-white transition-transform duration-300 inline-block ${
                    openAccordion === "mission" ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openAccordion === "mission" ? "max-h-[800px] pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                }`}
              >
                {language === "en" ? (
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.5] tracking-tight text-zinc-200 pt-1">
                    Our mission is to empower visionary founders and market leaders with{" "}
                    <span
                      onMouseEnter={() =>
                        setHoveredImage({
                          src: "/hotel.png",
                          title: "Resilient Infrastructure",
                        })
                      }
                      onMouseLeave={() => setHoveredImage(null)}
                      className="text-white font-semibold underline decoration-zinc-600 decoration-2 underline-offset-4 hover:decoration-[#fbea3d] hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
                    >
                      resilient digital infrastructure
                    </span>
                    , uncompromising performance, and{" "}
                    <span
                      onMouseEnter={() =>
                        setHoveredImage({
                          src: "/gro.png",
                          title: "Search Dominance",
                        })
                      }
                      onMouseLeave={() => setHoveredImage(null)}
                      className="text-white font-semibold underline decoration-zinc-600 decoration-2 underline-offset-4 hover:decoration-[#fbea3d] hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
                    >
                      algorithmic search dominance
                    </span>
                    . We engineer{" "}
                    <span
                      onMouseEnter={() =>
                        setHoveredImage({
                          src: "/team-photo.png",
                          title: "Future-Proof Assets",
                        })
                      }
                      onMouseLeave={() => setHoveredImage(null)}
                      className="text-white font-semibold underline decoration-zinc-600 decoration-2 underline-offset-4 hover:decoration-[#fbea3d] hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
                    >
                      future-proof technology assets
                    </span>{" "}
                    and seamless user journeys that deliver measurable commercial impact for the next decade.
                  </p>
                ) : (
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.5] tracking-tight text-zinc-200 pt-1">
                    {t.about.missionDesc}
                  </p>
                )}
              </div>
            </div>

          </div>

          {/* Centered Tilted Circular Button: LEARN MORE */}
          <div className="w-full flex justify-center items-center pt-8 sm:pt-10">
            <button
              type="button"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#fbea3d] text-black font-display font-black text-[10px] sm:text-xs tracking-widest uppercase flex items-center justify-center text-center p-3 cursor-pointer shadow-[0_8px_25px_rgba(251,234,61,0.2)] hover:shadow-[0_12px_35px_rgba(251,234,61,0.4)] hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 rotate-[-12deg] hover:rotate-0 group select-none"
            >
              <span className="group-hover:tracking-[0.15em] transition-all duration-300 leading-tight text-center">
                {t.about.learnMoreBtn}
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* Bottom Arched Dome Curve (seamless transition from black AboutUsSection into white WhatWeDoSection) */}
      <div className="w-full overflow-hidden leading-none select-none -mt-[1px] relative z-20 pointer-events-none bg-[#0c0c0d]">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 md:h-16 lg:h-20 block text-white"
        >
          <path
            d="M0,100 C400,0 1040,0 1440,100 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
