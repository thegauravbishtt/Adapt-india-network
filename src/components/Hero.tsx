"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const marketingBgImages = [
  "/marketing-bg-1.jpg",
  "/marketing-bg-2.jpg",
  "/marketing-bg-3.jpg",
  "/marketing-bg-4.jpg",
];

const rotatingWords = [
  "Scale.",
  "Revenue.",
  "Growth.",
];

export default function Hero() {
  const { t, language } = useLanguage();
  const [currentBgIndex, setCurrentBgIndex] = React.useState(0);
  const [wordIndex, setWordIndex] = React.useState(0);
  const [isWordVisible, setIsWordVisible] = React.useState(true);

  React.useEffect(() => {
    const bgTimer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % marketingBgImages.length);
    }, 4500);
    return () => clearInterval(bgTimer);
  }, []);

  React.useEffect(() => {
    const wordTimer = setInterval(() => {
      setIsWordVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsWordVisible(true);
      }, 350);
    }, 3200);
    return () => clearInterval(wordTimer);
  }, []);

  return (
    <section className="relative w-full bg-zinc-950 text-white p-0 overflow-hidden border-b border-zinc-800/80 select-none min-h-screen md:min-h-[90vh] lg:min-h-screen flex flex-col justify-start md:justify-center">

      {/* Background Marketing Images with Atmospheric Contrast */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0">
        {marketingBgImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out filter grayscale brightness-[0.75] contrast-[1.08] md:brightness-[0.62] md:grayscale-[0.35] ${index === currentBgIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
              }`}
            style={{
              backgroundImage: `url(${src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        ))}
        {/* Grey Scrim Gradient Overlay on Mobile, Directional Dark Gradient on Desktop */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#202024]/86 via-[#27272d]/78 to-[#1a1a1e]/86 md:from-black/82 md:via-black/55 md:to-black/30 z-10" />
      </div>

      {/* Hero Content Over Background (Unified Responsive Container) */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-5 sm:px-12 lg:px-16 pt-20 sm:pt-28 md:pt-30 lg:pt-34 pb-12 sm:pb-18 lg:pb-22 flex flex-col items-start text-left pointer-events-auto">

        {/* Mobile-Only Wordmark matching RetailMark style */}
        <div className="md:hidden pt-20 text-white font-extrabold text-[49px] tracking-[-0.04em] leading-none mb-5 select-none font-['Outfit',_'Plus_Jakarta_Sans',_sans-serif]">
          Growth<span className="text-[#E8B923]">Mark</span>
        </div>

        {/* Category Pill Tagline */}
        <div className="inline-flex items-center justify-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-[#E8B923]/80 md:border-zinc-700/80 bg-[#111111] md:bg-black/60 backdrop-blur-md mb-6 sm:mb-8 shadow-xs">
          <span className="text-[11px] sm:text-[13px] font-sans font-bold tracking-[0.05em] text-[#E8B923] md:text-[#fbea3d] uppercase">
            DIGITAL GROWTH SOLUTIONS
          </span>
        </div>

        {/* High-Impact Headline with dynamic yellow word cycling */}
        <h1 className="font-sans font-extrabold text-[35px] sm:text-[60px] md:text-[76px] lg:text-[84px] text-white leading-[1.08] tracking-[-0.03em] md:tracking-[-0.035em] text-left w-full max-w-3xl min-h-[84px] sm:min-h-[155px] md:min-h-[185px]">
          <span className="block text-white">From Opportunity</span>
          <span className="block mt-1 sm:mt-2 text-white">
            to{" "}
            <span
              className={`text-[#E8B923] md:text-[#fac917] inline-block transition-all duration-350 ease-out transform ${
                isWordVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              {rotatingWords[wordIndex]}
            </span>
          </span>
        </h1>

        {/* Balanced High-Impact Paragraph */}
        <p className="mt-6 sm:mt-7 lg:mt-8 text-[18px] sm:text-[17px] lg:text-[18px] text-[#E2E2E6] md:text-zinc-300 font-normal leading-[1.55] sm:leading-[1.65] text-left w-full max-w-xl md:max-w-2xl">
          We scale ambitious brands through ROI-driven performance marketing, paid advertising, and search dominance across Google, Meta, Shopify, Amazon, and modern growth channels. From creative strategy to seamless execution, we empower ambitious brands to dominate their market and drive compounding revenue.
        </p>

        {/* Action CTAs: Pill Buttons matching natural content widths */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-auto py-3.5 sm:py-4 px-9 sm:px-8 bg-[#E8B923] hover:bg-[#C79A15] md:bg-[#fac917] md:hover:bg-[#eab308] text-[#111111] md:text-black text-[14.5px] sm:text-[15px] font-bold rounded-full inline-flex items-center justify-center active:scale-[0.98] transition-colors cursor-pointer text-center whitespace-nowrap shadow-md shadow-[#E8B923]/20 md:shadow-[#fac917]/20"
          >
            <span>Book Your Free Strategy Call</span>
          </Link>

          <Link
            href="/work"
            className="w-auto py-3.5 sm:py-4 px-9 sm:px-8 bg-white/10 hover:bg-white/15 md:bg-zinc-900/90 md:hover:bg-zinc-800 text-white text-[14.5px] sm:text-[15px] font-bold rounded-full inline-flex items-center justify-center border-[1.5px] border-white/55 hover:border-white/80 md:border-zinc-400/80 active:scale-[0.98] transition-colors cursor-pointer backdrop-blur-md text-center whitespace-nowrap"
          >
            <span>See How It Works</span>
          </Link>
        </div>

      </div>

    </section>
  );
}
