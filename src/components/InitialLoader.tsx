"use client";

import React, { useState, useEffect } from "react";

export default function InitialLoader() {
  const [stage, setStage] = useState<"enter" | "hover" | "fly" | "curtain" | "done">("enter");

  useEffect(() => {
    // 1. Enter & Center display
    const hoverTimer = setTimeout(() => {
      setStage("hover");
    }, 150);

    // 2. Logo flies smoothly upward
    const flyTimer = setTimeout(() => {
      setStage("fly");
    }, 1000);

    // 3. Yellow curtain rolls up to reveal the website
    const curtainTimer = setTimeout(() => {
      setStage("curtain");
    }, 1700);

    // 4. Complete and remove from DOM
    const doneTimer = setTimeout(() => {
      setStage("done");
    }, 2500);

    return () => {
      clearTimeout(hoverTimer);
      clearTimeout(flyTimer);
      clearTimeout(curtainTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (stage === "done") {
    return null;
  }

  const isFlying = stage === "fly" || stage === "curtain";
  const isCurtainUp = stage === "curtain";

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#fac917] flex items-center justify-center pointer-events-none select-none overflow-hidden transition-transform duration-800 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isCurtainUp ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ backgroundColor: "#fac917" }}
      aria-hidden="true"
    >
      <style jsx>{`
        @keyframes logo-subtle-hover {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.02);
          }
        }
        .animate-logo-hover {
          animation: logo-subtle-hover 1.5s ease-in-out infinite;
        }
      `}</style>

      {/* Center Logo Container */}
      <div
        className={`relative flex flex-col items-center justify-center transition-all duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isFlying
            ? "-translate-y-[140vh] scale-90 opacity-90"
            : stage === "hover"
            ? "translate-y-0 scale-100 opacity-100 animate-logo-hover"
            : "translate-y-6 scale-90 opacity-0"
        }`}
      >
        {/* Speed motion lines when logo flies upward */}
        {isFlying && (
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 pointer-events-none">
            <span className="w-1 h-16 bg-black/40 rounded-full animate-pulse"></span>
            <div className="flex gap-8">
              <span className="w-0.5 h-10 bg-black/30 rounded-full"></span>
              <span className="w-0.5 h-10 bg-black/30 rounded-full"></span>
            </div>
          </div>
        )}

        {/* The Exact Owlio Works Logo */}
        <div className="relative px-6 py-2 flex items-center justify-center">
          <img
            src="/logo.png"
            alt="Owlio Works"
            className="h-14 sm:h-20 md:h-24 w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.1)]"
          />
        </div>

        {/* Subtle shadow beneath logo before flight */}
        <div
          className={`mt-3 w-36 sm:w-48 h-3.5 bg-black/15 rounded-full blur-xs transition-all duration-400 ${
            isFlying ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
        ></div>
      </div>
    </div>
  );
}
