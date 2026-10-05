"use client";

import React, { useEffect, useState } from "react";

const showcaseItems = [
  { id: "gro", src: "/gro.png", alt: "Chi-Seh Fresh Groceries" },
  { id: "hotel", src: "/hotel.png", alt: "Roamora Travel & Stays" },
  { id: "wed", src: "/wed.png", alt: "Vivara Mental Wellness" },
  { id: "image1", src: "/image1.png", alt: "Habitat Built for Better Living" },
  { id: "image2", src: "/image2.png", alt: "Nexora Brand Experience" },
];

export default function OwlioImageGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Hold each photo for 3200ms, then trigger transition
    const leaveTimer = window.setTimeout(() => {
      setIsLeaving(true);
    }, 3200);

    // Switch to next photo at 3700ms and reset leaving state
    const nextTimer = window.setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
      setIsLeaving(false);
    }, 3700);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(nextTimer);
    };
  }, [currentIndex]);

  const getAnimationClass = (index: number) => {
    if (index === currentIndex) {
      if (isLeaving) {
        return "opacity-0 -translate-x-6 scale-[0.98] pointer-events-none transition-all duration-500 ease-in-out z-10";
      }
      return "opacity-100 translate-x-0 scale-100 transition-all duration-500 ease-out z-20";
    }

    return "opacity-0 translate-x-6 scale-[0.98] pointer-events-none transition-all duration-500 ease-in-out z-0";
  };

  return (
    <div className="w-full flex flex-col items-center justify-center select-none relative overflow-visible px-0 m-0">
      {/* 100% Edge-to-Edge Showcase Photos with NO gap */}
      <div className="w-full aspect-[16/9.5] sm:aspect-[16/9] relative overflow-hidden bg-black flex items-center justify-center">
        {showcaseItems.map((item, idx) => (
          <img
            key={item.id}
            src={item.src}
            alt={item.alt}
            className={`absolute inset-0 w-full h-full object-cover object-top ${getAnimationClass(
              idx
            )}`}
          />
        ))}

        {/* Minimal Subtle Dots Indicator */}
        <div className="absolute bottom-2 inset-x-0 flex items-center justify-center gap-1.5 z-30 pointer-events-none">
          {showcaseItems.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-4 bg-[#fac917]"
                  : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
