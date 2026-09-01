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
      className="w-full flex flex-col items-center relative bg-[#0d0d0e]"
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
          <div className="relative w-56 sm:w-64 md:w-72 aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] border-2 border-white/40 bg-zinc-950">
            <img
              src={hoveredImage.src}
              alt={hoveredImage.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-bold text-[#fbea3d] uppercase tracking-wider font-mono border border-zinc-700/60">
              {hoveredImage.title}
            </div>
          </div>
        )}
      </div>

      {/* About Us Content Body (100% full-width black background) */}
      <section className="w-full bg-[#0d0d0e] text-white pt-16 sm:pt-24 lg:pt-32 pb-20 sm:pb-28 px-6 sm:px-12 lg:px-20 relative overflow-hidden border-t border-zinc-900/80">
        
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none"></div>

        <div className="w-full max-w-6xl mx-auto relative z-10">
          
          {/* Top Description Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-16 sm:mb-24">
            
            {/* Tag / Category Label */}
            <div className="lg:col-span-4 pt-1 sm:pt-2">
              <span className="font-mono text-[11px] sm:text-xs tracking-[0.25em] text-zinc-400 font-bold uppercase block select-none">
                {t.about.tag}
              </span>
            </div>

            {/* Main Editorial Text with Interactive Hover Words */}
            <div className="lg:col-span-8">
              {language === "en" ? (
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-normal leading-[1.4] tracking-tight text-white">
                  Owlio Works is a{" "}
                  <span
                    onMouseEnter={() =>
                      setHoveredImage({
                        src: "/studio-photo.png",
                        title: "Creative Growth Studio",
                      })
                    }
                    onMouseLeave={() => setHoveredImage(null)}
                    className="text-white hover:text-[#fbea3d] cursor-pointer transition-colors duration-200"
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
                    className="text-white hover:text-[#fbea3d] cursor-pointer transition-colors duration-200"
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
                    className="text-white hover:text-[#fbea3d] cursor-pointer transition-colors duration-200"
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
                    className="text-white hover:text-[#fbea3d] cursor-pointer transition-colors duration-200"
                  >
                    technical growth partner
                  </span>
                  , focused on building enterprise infrastructure that lasts.
                </p>
              ) : (
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-normal leading-[1.4] tracking-tight text-white">
                  <span
                    onMouseEnter={() =>
                      setHoveredImage({
                        src: "/studio-photo.png",
                        title: "Owlio Works Studio",
                      })
                    }
                    onMouseLeave={() => setHoveredImage(null)}
                    className="text-white hover:text-[#fbea3d] cursor-pointer transition-colors duration-200"
                  >
                    {t.about.description}
                  </span>
                </p>
              )}
            </div>

          </div>

          {/* Accordion Lines */}
          <div className="w-full border-t border-zinc-800/90">
            
            {/* OUR STORY */}
            <div className="border-b border-zinc-800/90">
              <button
                type="button"
                onClick={() => toggleAccordion("story")}
                className="w-full py-6 sm:py-7 flex items-center justify-between text-left group cursor-pointer select-none"
                aria-expanded={openAccordion === "story"}
              >
                <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-zinc-200 group-hover:text-white transition-colors">
                  {t.about.storyTitle}
                </span>
                <span
                  className={`text-2xl sm:text-3xl font-light text-zinc-400 group-hover:text-white transition-transform duration-300 inline-block ${
                    openAccordion === "story" ? "rotate-45 text-[#fbea3d]" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openAccordion === "story" ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                }`}
              >
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl pt-1">
                  {t.about.storyDesc}
                </p>
              </div>
            </div>

            {/* OUR MISSION */}
            <div className="border-b border-zinc-800/90">
              <button
                type="button"
                onClick={() => toggleAccordion("mission")}
                className="w-full py-6 sm:py-7 flex items-center justify-between text-left group cursor-pointer select-none"
                aria-expanded={openAccordion === "mission"}
              >
                <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-zinc-200 group-hover:text-white transition-colors">
                  {t.about.missionTitle}
                </span>
                <span
                  className={`text-2xl sm:text-3xl font-light text-zinc-400 group-hover:text-white transition-transform duration-300 inline-block ${
                    openAccordion === "mission" ? "rotate-45 text-[#fbea3d]" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openAccordion === "mission" ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                }`}
              >
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl pt-1">
                  {t.about.missionDesc}
                </p>
              </div>
            </div>

          </div>

          {/* Centered Tilted Circular Button: LEARN MORE */}
          <div className="w-full flex justify-center items-center pt-16 sm:pt-20">
            <button
              type="button"
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-white text-black font-display font-black text-xs sm:text-sm tracking-widest uppercase flex items-center justify-center text-center p-4 cursor-pointer shadow-[0_10px_35px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_40px_rgba(251,234,61,0.4)] hover:bg-[#fbea3d] hover:scale-110 transition-all duration-300 rotate-[-12deg] hover:rotate-0 group select-none"
            >
              <span className="group-hover:tracking-[0.2em] transition-all duration-300 leading-tight text-center">
                {t.about.learnMoreBtn}
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. Brand Visual Showcase: Hand Image */}
      <section className="w-full bg-[#070708] py-16 sm:py-24 lg:py-32 px-6 sm:px-12 lg:px-20 relative overflow-hidden border-t border-zinc-900 flex items-center justify-center">
        {/* Ambient subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#fbea3d]/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="w-full max-w-4xl mx-auto flex items-center justify-center relative z-10">
          <div className="relative w-full max-w-xl aspect-square rounded-3xl sm:rounded-[36px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-zinc-800/80 group">
            <img
              src="/hand.png"
              alt="Owlio Works Brand Visual"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
