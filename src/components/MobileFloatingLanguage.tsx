"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage, LANGUAGES } from "../context/LanguageContext";

export default function MobileFloatingLanguage() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentOption = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed right-3 bottom-6 z-50 md:hidden flex flex-col items-end select-none"
    >
      {/* Floating Trigger Pill */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-zinc-950/90 hover:bg-black text-white backdrop-blur-md border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.25)] active:scale-95 transition-all duration-200 cursor-pointer"
        aria-label="Switch Language"
      >
        <span className="text-base leading-none">{currentOption.flag}</span>
        <span className="font-extrabold uppercase text-[11px] tracking-wider font-mono">
          {currentOption.code}
        </span>
        <svg
          className={`w-3 h-3 text-zinc-300 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#fac917]" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Language Popup Menu */}
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-3 w-52 bg-white border border-zinc-200/90 rounded-2xl shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3.5 py-1.5 border-b border-zinc-100 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-zinc-500">
              Select Language
            </span>
            <span className="w-2 h-2 rounded-full bg-[#fac917]"></span>
          </div>

          <div className="max-h-60 overflow-y-auto py-1 px-1 flex flex-col gap-0.5">
            {LANGUAGES.map((lang) => {
              const isSelected = lang.code === language;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl flex items-center justify-between text-xs font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-zinc-950 text-white font-bold"
                      : "text-zinc-800 hover:bg-zinc-100 hover:text-black"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{lang.flag}</span>
                    <div>
                      <span className="block leading-tight font-semibold">{lang.nativeLabel}</span>
                      <span className={`text-[10px] block ${isSelected ? "text-zinc-300" : "text-zinc-400"}`}>
                        {lang.label}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <svg
                      className="w-4 h-4 text-[#fac917] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
