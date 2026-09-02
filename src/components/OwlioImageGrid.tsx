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
    // Hold each photo for 3500ms, then trigger leaving transition
    const leaveTimer = window.setTimeout(() => {
      setIsLeaving(true);
    }, 3500);

    // Change to next photo at 4200ms and reset leaving state
    const nextTimer = window.setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
      setIsLeaving(false);
    }, 4200);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(nextTimer);
    };
  }, [currentIndex]);

  const getAnimationClass = (index: number) => {
    if (index === currentIndex) {
      if (isLeaving) {
        return "opacity-0 -translate-x-6 scale-95 pointer-events-none transition-all duration-700 ease-in-out z-10";
      }
      return "opacity-100 translate-x-0 scale-100 transition-all duration-700 ease-out z-20 drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)]";
    }

    return "opacity-0 translate-x-6 scale-95 pointer-events-none transition-all duration-700 ease-in-out z-0";
  };

  return (
    <div className="w-full flex flex-col items-center lg:items-end justify-center select-none relative overflow-visible">
      {/* 100% Edge-to-edge container on mobile */}
      <div className="w-full max-w-full sm:max-w-[620px] md:max-w-[680px] lg:max-w-[740px] xl:max-w-[800px] 2xl:max-w-[860px] aspect-[16/9] relative overflow-visible flex items-center justify-center lg:justify-end scale-100 lg:scale-[1.10] xl:scale-[1.12] lg:origin-right transition-transform px-0">
        {showcaseItems.map((item, idx) => (
          <img
            key={item.id}
            src={item.src}
            alt={item.alt}
            className={`absolute inset-0 w-full h-full object-contain sm:object-contain object-center rounded-none sm:rounded-2xl ${getAnimationClass(
              idx
            )}`}
          />
        ))}
      </div>
    </div>
  );
}
