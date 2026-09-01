"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage, Language } from "../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, currentLanguageOption, languages, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectLanguage = (code: Language) => {
    setLanguage(code);
    setLangDropdownOpen(false);
  };

  return (
    <header className="w-full bg-white border-b border-zinc-100/90 px-4 sm:px-8 lg:px-16 xl:px-20 py-3.5 sm:py-4 flex flex-col relative z-30 shadow-[0_4px_20px_rgba(0,0,0,0.02)] select-none">
      <div className="flex items-center justify-between w-full">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 select-none shrink-0">
          <span className="text-lg sm:text-xl font-black text-black tracking-tighter uppercase font-display whitespace-nowrap">
            // Owlio works
          </span>
        </div>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 font-sans text-sm font-medium text-black/80">
          <a href="#" className="hover:text-black transition-colors cursor-pointer">
            {t.navbar.work}
          </a>
          <a href="#" className="hover:text-black transition-colors cursor-pointer">
            {t.navbar.clients}
          </a>
          
          {/* Branding Dropdown */}
          <a
            href="#"
            className="hover:text-black transition-colors flex items-center gap-1.5 cursor-pointer group"
          >
            {t.navbar.branding}
            <svg
              className="w-3 h-3 opacity-60 mt-0.5 group-hover:translate-y-0.5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </a>

          {/* Digital & Performance Dropdown */}
          <a
            href="#"
            className="hover:text-black transition-colors flex items-center gap-1.5 cursor-pointer group"
          >
            {t.navbar.digitalPerformance}
            <svg
              className="w-3 h-3 opacity-60 mt-0.5 group-hover:translate-y-0.5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </a>

          {/* About Dropdown */}
          <a
            href="#"
            className="hover:text-black transition-colors flex items-center gap-1.5 cursor-pointer group"
          >
            {t.navbar.about}
            <svg
              className="w-3 h-3 opacity-60 mt-0.5 group-hover:translate-y-0.5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
        </nav>

        {/* Right Controls: Multi-Language Selector Dropdown + CTA / Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3.5">
          {/* Language Selector Dropdown Container */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 bg-zinc-100/90 hover:bg-zinc-200/80 border border-zinc-200 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold text-zinc-800 transition-all cursor-pointer shadow-sm active:scale-95"
              aria-expanded={langDropdownOpen}
              aria-label="Select Language"
            >
              <span className="text-sm leading-none">{currentLanguageOption.flag}</span>
              <span className="font-semibold uppercase tracking-wider text-[11px] sm:text-xs">
                {currentLanguageOption.code}
              </span>
              <svg
                className={`w-3 h-3 text-zinc-500 transition-transform duration-200 ${
                  langDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {/* Language Dropdown Menu */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 sm:w-52 bg-white border border-zinc-200 rounded-2xl shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1.5 border-b border-zinc-100 mb-1">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-zinc-600 block">
                    Choose Language
                  </span>
                </div>
                <div className="max-h-64 overflow-y-auto py-0.5">
                  {languages.map((lang) => {
                    const isSelected = lang.code === language;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => handleSelectLanguage(lang.code)}
                        className={`w-full text-left px-3 py-2 flex items-center justify-between text-xs font-medium transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-zinc-900 text-white font-bold"
                            : "text-zinc-700 hover:bg-zinc-100 hover:text-black"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base leading-none">{lang.flag}</span>
                          <div>
                            <span className="block leading-tight">{lang.nativeLabel}</span>
                            <span className={`text-[10px] block ${isSelected ? "text-zinc-300" : "text-zinc-400"}`}>
                              {lang.label}
                            </span>
                          </div>
                        </div>
                        {isSelected && (
                          <svg className="w-4 h-4 text-[#fbea3d] shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
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

          {/* Desktop Let's Talk CTA */}
          <button className="hidden md:flex items-center gap-2 bg-[#fbea3d] text-black px-5 lg:px-6 py-2 sm:py-2.5 text-xs sm:text-[13px] font-extrabold rounded-full border border-[#fbea3d] hover:bg-black hover:text-white hover:border-black transition-all cursor-pointer group select-none shadow-[0_2px_10px_rgba(251,234,61,0.15)]">
            {t.navbar.letsTalk}
            <span className="inline-block transition-transform group-hover:translate-x-1 duration-300 ml-0.5 text-sm font-light">→</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center gap-1.5 border border-zinc-200 text-black px-3 py-1.5 text-xs font-bold uppercase tracking-wider hover:bg-zinc-50 transition-colors rounded-full cursor-pointer bg-transparent"
          >
            {mobileMenuOpen ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
            {t.navbar.menu}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-zinc-100 flex flex-col gap-2.5 text-sm font-medium animate-fadeIn">
          <a href="#" className="py-1 px-2 text-zinc-800 hover:text-black hover:bg-zinc-50 rounded-lg transition-colors">
            {t.navbar.work}
          </a>
          <a href="#" className="py-1 px-2 text-zinc-800 hover:text-black hover:bg-zinc-50 rounded-lg transition-colors">
            {t.navbar.clients}
          </a>
          <a href="#" className="py-1 px-2 text-zinc-800 hover:text-black hover:bg-zinc-50 rounded-lg transition-colors">
            {t.navbar.branding}
          </a>
          <a href="#" className="py-1 px-2 text-zinc-800 hover:text-black hover:bg-zinc-50 rounded-lg transition-colors">
            {t.navbar.digitalPerformance}
          </a>
          <a href="#" className="py-1 px-2 text-zinc-800 hover:text-black hover:bg-zinc-50 rounded-lg transition-colors">
            {t.navbar.about}
          </a>

          {/* Quick Mobile Language Switcher Row */}
          <div className="pt-2 pb-1 border-t border-zinc-100">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-2 px-1">
              Language
            </span>
            <div className="flex flex-wrap gap-1.5">
              {languages.map((lang) => {
                const isSelected = lang.code === language;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setLanguage(lang.code);
                    }}
                    className={`px-2.5 py-1 text-xs rounded-full font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      isSelected
                        ? "bg-black text-white"
                        : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.nativeLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <button className="w-full mt-2 bg-[#fbea3d] text-black py-2.5 text-xs font-extrabold rounded-full flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all">
            {t.navbar.letsTalk}
            <span>→</span>
          </button>
        </div>
      )}
    </header>
  );
}
