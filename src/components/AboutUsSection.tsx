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

  // Track mouse position directly on the preview DOM element without re-rendering the entire component
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
        className={`fixed pointer-events-none z-50 transition-opacity duration-200 ease-out hidden md:block ${
          hoveredImage ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
        }`}
        style={{
          left: "-9999px",
          top: "-9999px",
          transform: "translate(-50%, -125%)",
          willChange: "transform, left, top",
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

      {/* Arched Dome Curve Header (seamless transition from white PartnersMarquee into black AboutUsSection with zero lines) */}
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

      {/* About Us Content Body (100% full-width black background) */}
      <section className="w-full bg-[#0c0c0d] text-white pt-4 sm:pt-8 lg:pt-10 pb-16 sm:pb-20 md:pb-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
        
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
                        title: "Creative Growth Agency",
                      })
                    }
                    onMouseLeave={() => setHoveredImage(null)}
                    className="text-white font-semibold hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
                  >
                    digital growth & marketing agency
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
                    className="text-white font-semibold hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
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
                    className="text-white font-semibold hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
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
                    className="text-white font-semibold hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
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
                        title: "Owlio Works Agency",
                      })
                    }
                    onMouseLeave={() => setHoveredImage(null)}
                    className="text-white font-semibold hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
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
                  className={`text-xl sm:text-2xl font-light text-zinc-400 group-hover:text-white transition-transform duration-300 ease-out inline-block ${
                    openAccordion === "story" ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  openAccordion === "story"
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-6 pt-1">
                    {language === "en" ? (
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.5] tracking-tight text-zinc-200">
                        Founded by seasoned engineers and growth strategists, Owlio Works was established to replace traditional agency bureaucracy with{" "}
                        <span
                          onMouseEnter={() =>
                            setHoveredImage({
                              src: "/studio-photo.png",
                              title: "Relentless Execution",
                            })
                          }
                          onMouseLeave={() => setHoveredImage(null)}
                          className="text-white font-semibold hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
                        >
                          relentless technical execution
                        </span>
                        . We build{" "}
                        <span
                          onMouseEnter={() =>
                            setHoveredImage({
                              src: "/gro.png",
                              title: "Conversion Strategy",
                            })
                          }
                          onMouseLeave={() => setHoveredImage(null)}
                          className="text-white font-semibold hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
                        >
                          high-converting digital experiences
                        </span>
                        , robust search strategies, and{" "}
                        <span
                          onMouseEnter={() =>
                            setHoveredImage({
                              src: "/hotel.png",
                              title: "Scalable Platforms",
                            })
                          }
                          onMouseLeave={() => setHoveredImage(null)}
                          className="text-white font-semibold hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
                        >
                          scalable enterprise platforms
                        </span>{" "}
                        that drive sustainable revenue and outpace market competition.
                      </p>
                    ) : (
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.5] tracking-tight text-zinc-200">
                        {t.about.storyDesc}
                      </p>
                    )}
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
                  {t.about.missionTitle}
                </span>
                <span
                  className={`text-xl sm:text-2xl font-light text-zinc-400 group-hover:text-white transition-transform duration-300 ease-out inline-block ${
                    openAccordion === "mission" ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  openAccordion === "mission"
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-6 pt-1">
                    {language === "en" ? (
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.5] tracking-tight text-zinc-200">
                        Our mission is to empower visionary founders and market leaders with{" "}
                        <span
                          onMouseEnter={() =>
                            setHoveredImage({
                              src: "/hotel.png",
                              title: "Resilient Infrastructure",
                            })
                          }
                          onMouseLeave={() => setHoveredImage(null)}
                          className="text-white font-semibold hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
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
                          className="text-white font-semibold hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
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
                          className="text-white font-semibold hover:bg-[#fbea3d] hover:text-black px-1 rounded-sm transition-all duration-200 cursor-pointer"
                        >
                          future-proof technology assets
                        </span>{" "}
                        and seamless user journeys that deliver measurable commercial impact for the next decade.
                      </p>
                    ) : (
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.5] tracking-tight text-zinc-200">
                        {t.about.missionDesc}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Centered Tilted Circular Button: LEARN MORE -> Links to About Us */}
          <div className="w-full flex justify-center items-center pt-8 sm:pt-10">
            <a
              href="/about"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#fbea3d] text-black font-display font-black text-[10px] sm:text-xs tracking-widest uppercase flex items-center justify-center text-center p-3 cursor-pointer shadow-[0_8px_25px_rgba(251,234,61,0.2)] hover:shadow-[0_12px_35px_rgba(251,234,61,0.4)] hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 rotate-[-12deg] hover:rotate-0 group select-none"
            >
              <span className="group-hover:tracking-[0.15em] transition-all duration-300 leading-tight text-center">
                {t.about.learnMoreBtn}
              </span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
