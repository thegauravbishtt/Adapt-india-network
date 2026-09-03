"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { LanguageProvider } from "../../context/LanguageContext";
import Link from "next/link";
import { Check } from "lucide-react";

export default function CookiePreferencesPage() {
  const [preferences, setPreferences] = useState({
    analytics: true,
    functional: true,
    marketing: false,
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("owlio_cookies");
      if (stored) {
        const parsed = JSON.parse(stored);
        setPreferences({
          analytics: parsed.analytics ?? true,
          functional: parsed.functional ?? true,
          marketing: parsed.marketing ?? false,
        });
      }
    } catch (e) {
      console.warn(e);
    }
  }, []);

  const handleToggle = (key: "analytics" | "functional" | "marketing") => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    try {
      localStorage.setItem("owlio_cookies", JSON.stringify(preferences));
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (e) {
      console.error(e);
    }
  };

  const handleAcceptAll = () => {
    const all = { analytics: true, functional: true, marketing: true };
    setPreferences(all);
    try {
      localStorage.setItem("owlio_cookies", JSON.stringify(all));
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip">
        <Navbar />

        <main className="flex-1 w-full">
          {/* 1. HERO BANNER (Compact Standard Layout) */}
          <section className="relative w-full text-white pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
            {/* Real Photography Background */}
            <div className="absolute inset-0 z-0">
              <img
                src="/banner-cookies.jpg"
                alt="Owlio Works Web Technology and Privacy Controls"
                className="w-full h-full object-cover object-center scale-100 filter brightness-[0.75] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-black/40 z-10"></div>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto w-full">
              {/* Back to Home & Top Tag */}
              <div className="flex items-center justify-between gap-4 pb-3 sm:pb-4 border-b border-white/20 mb-6 sm:mb-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-mono font-bold tracking-widest text-zinc-300 hover:text-white uppercase transition-colors group cursor-pointer"
                >
                  <span className="transition-transform group-hover:-translate-x-1 duration-200">←</span>
                  <span>BACK TO HOME</span>
                </Link>

                <span className="px-3.5 py-0.5 rounded-full bg-black/60 border border-zinc-700/80 text-[#fbea3d] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                  // PRIVACY
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="flex flex-col items-start text-left max-w-3xl">
                <span className="font-mono text-xs font-extrabold tracking-widest text-[#fbea3d] uppercase mb-2 block">
                  // CONSENT CONTROLS
                </span>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight uppercase leading-none mb-2.5 drop-shadow-md">
                  COOKIE PREFERENCES
                </h1>
                <p className="text-zinc-300 text-xs sm:text-sm font-normal max-w-2xl leading-relaxed drop-shadow-sm">
                  Manage how cookies and tracking technologies are used during your browsing experience.
                </p>
              </div>
            </div>
          </section>

          {/* 2. PREFERENCES BODY */}
          <section className="w-full py-12 sm:py-18 px-4 sm:px-8 bg-white">
            <div className="max-w-3xl mx-auto flex flex-col gap-8 text-left">
              
              {/* Notification Banner */}
              {saved && (
                <div className="p-4 bg-zinc-950 text-white rounded-xl text-sm font-medium flex items-center gap-2.5 animate-in fade-in duration-200 shadow-sm">
                  <Check className="w-4 h-4 text-[#fbea3d]" />
                  <span>Your cookie preferences have been saved.</span>
                </div>
              )}

              {/* Cookie Items List */}
              <div className="divide-y divide-zinc-200 border-y border-zinc-200">
                
                {/* 1. Essential Cookies */}
                <div className="py-6 flex items-start justify-between gap-6">
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base sm:text-lg font-bold text-zinc-950 font-display">
                        Essential Cookies
                      </h3>
                      <span className="text-[11px] font-semibold text-zinc-400 uppercase">
                        (Required)
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      These cookies are required for core security, session management, and language switching. They cannot be turned off.
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-zinc-400 py-1 select-none shrink-0 font-mono">
                    Always active
                  </div>
                </div>

                {/* 2. Analytics Cookies */}
                <div className="py-6 flex items-start justify-between gap-6">
                  <div className="flex-1 pr-4">
                    <h3 className="text-base sm:text-lg font-bold text-zinc-950 mb-1 font-display">
                      Analytics Cookies
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      Helps us measure traffic and understand how visitors interact with our pages so we can improve site speed and content.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1 select-none">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => handleToggle("analytics")}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-950"></div>
                  </label>
                </div>

                {/* 3. Functional Cookies */}
                <div className="py-6 flex items-start justify-between gap-6">
                  <div className="flex-1 pr-4">
                    <h3 className="text-base sm:text-lg font-bold text-zinc-950 mb-1 font-display">
                      Functional Cookies
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      Allows the site to remember your specific choices, such as currency preference (INR vs USD).
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1 select-none">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={() => handleToggle("functional")}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-950"></div>
                  </label>
                </div>

                {/* 4. Marketing Cookies */}
                <div className="py-6 flex items-start justify-between gap-6">
                  <div className="flex-1 pr-4">
                    <h3 className="text-base sm:text-lg font-bold text-zinc-950 mb-1 font-display">
                      Marketing Cookies
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      Used to deliver relevant ads across Google and social media platforms based on your interests.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1 select-none">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => handleToggle("marketing")}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-950"></div>
                  </label>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-6 py-3 rounded-full bg-zinc-950 text-[#fbea3d] hover:bg-[#fbea3d] hover:text-black text-xs font-bold transition-all cursor-pointer shadow-sm"
                >
                  Save Preferences
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="px-6 py-3 rounded-full border border-zinc-300 text-zinc-800 hover:bg-zinc-50 text-xs font-semibold transition-all cursor-pointer"
                >
                  Accept All Cookies
                </button>
              </div>

              <p className="text-xs text-zinc-500 pt-4">
                For more details on how we protect your personal data, please review our{" "}
                <Link href="/privacy-policy" className="text-zinc-900 font-semibold underline">
                  Privacy Policy
                </Link>
                .
              </p>

            </div>
          </section>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
